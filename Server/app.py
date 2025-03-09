import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import json
import google.generativeai as genai
import requests  
from dotenv import load_dotenv

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load environment variables
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("\u274C Missing Gemini API Key. Set it in a .env file.")

# Configure Gemini AI API
genai.configure(api_key=GEMINI_API_KEY)

# Load trained medicine recommendation model
MODEL_PATH = "medicine_recommendation_model.pkl"
if os.path.exists(MODEL_PATH):
    model = joblib.load(MODEL_PATH)
    print("\u2705 Model loaded successfully!")
else:
    model = None
    print("\u274C Model file not found!")

# Load symptom index mapping
SYMPTOM_INDEX_PATH = "symptom_index.json"
if os.path.exists(SYMPTOM_INDEX_PATH):
    with open(SYMPTOM_INDEX_PATH, "r") as file:
        symptom_index = json.load(file)
else:
    symptom_index = {}
    print("\u274C symptom_index.json is missing or empty!")

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Flask server is running! Use the /predict, /chat, and /recommend_medicine endpoints."})

@app.route("/predict", methods=["POST"])
def predict():
    """Predict disease based on symptoms."""
    try:
        data = request.get_json()
        symptoms = data.get("symptoms", [])

        if not symptoms or not isinstance(symptoms, list):
            return jsonify({"error": "Invalid input. Provide a list of symptoms."}), 400

        if not symptom_index:
            return jsonify({"error": "Symptom index is missing. Check logs."}), 500

        if model is None:
            return jsonify({"error": "Model not loaded. Check logs."}), 500

        # Convert symptoms into input features
        input_features = [0] * len(symptom_index)
        missing_symptoms = []

        for symptom in symptoms:
            formatted_symptom = symptom.strip().lower()  # Ensure lowercase
            if formatted_symptom in symptom_index:
                input_features[symptom_index[formatted_symptom]] = 1
            else:
                missing_symptoms.append(symptom)

        if missing_symptoms:
            print(f"\u26A0 Warning: Some symptoms not found in index: {missing_symptoms}")

        # Log input features for debugging
        print("Symptoms Given:", symptoms)
        print("Feature Vector:", input_features)

        input_features = np.array(input_features).reshape(1, -1)

        # Get prediction probabilities
        probs = model.predict_proba(input_features)[0]
        predicted_disease = model.classes_[np.argmax(probs)]

        print("Prediction Probabilities:", probs)
        print("Predicted Disease:", predicted_disease)

        return jsonify({
            "predicted_disease": predicted_disease,
            "missing_symptoms": missing_symptoms
        })

    except Exception as e:
        print(f"\u274C Error in /predict: {e}")
        return jsonify({"error": "Internal server error while processing prediction."}), 500

# @app.route("/recommend_medicine", methods=["POST"])
# def recommend_medicine():
#     """Fetch medicine recommendations from RxNorm API based on predicted disease."""
#     try:
#         data = request.get_json()
#         disease = data.get("predicted_disease", "").strip()

#         if not disease:
#             return jsonify({"error": "No disease provided."}), 400

#         # RxNorm API Endpoint
#         rxnorm_url = f"https://rxnav.nlm.nih.gov/REST/drugs.json?name={disease}"
#         response = requests.get(rxnorm_url)

#         if response.status_code != 200:
#             return jsonify({"error": "Failed to fetch medicine data from RxNorm."}), 500

#         data = response.json()
#         medicines = []

#         # Extract medicine names from response
#         if "drugGroup" in data and "conceptGroup" in data["drugGroup"]:
#             for group in data["drugGroup"]["conceptGroup"]:
#                 if "conceptProperties" in group:
#                     medicines.extend([med["name"] for med in group["conceptProperties"]])

#         if not medicines:
#             return jsonify({"error": "No medicines found for this disease."}), 404

#         return jsonify({
#             "predicted_disease": disease,
#             "recommended_medicines": medicines
#         })

#     except Exception as e:
#         print(f"\u274C Error in /recommend_medicine: {e}")
#         return jsonify({"error": "Internal server error while fetching medicine recommendations."}), 500

@app.route("/chat", methods=["POST"])
def chat():
    """Handle chatbot responses using Gemini API."""
    try:
        data = request.get_json()
        user_message = data.get("message", "").strip()

        if not user_message:
            return jsonify({"error": "No message provided."}), 400

        gemini_model = genai.GenerativeModel("gemini-1.5-pro")
        response = gemini_model.generate_content(user_message)

        # Extract response text safely
        bot_response = response.text if hasattr(response, "text") else "I couldn't generate a response."

        return jsonify({"response": bot_response})

    except Exception as e:
        print(f"\u274C Error in /chat: {e}")
        return jsonify({"error": "Internal server error while processing AI response."}), 500

if __name__ == "__main__":
    app.run(debug=True)
