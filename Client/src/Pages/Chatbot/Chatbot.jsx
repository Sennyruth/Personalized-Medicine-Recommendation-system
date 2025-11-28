import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            text: "Hello! I'm your Health Assistant. How can I assist you today?",
            sender: 'bot'
        }
    ]);
    const [InputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!InputValue.trim()) return;

        const newMessages = [...messages, { text: InputValue, sender: 'user' }];
        setMessages(newMessages);
        setLoading(true);

        // chatbot intergration

        try {
            const response = await fetch("http://127.0.0.1:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: InputValue })
            });
            const data = await response.json();
            console.log("API Response:", data);


            const botResponse = data.response || "Sorry, I couldn't understand.";

            setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
        } catch (error) {
            setMessages([...newMessages, { text: "Error connecting to the server.", sender: 'bot' }]);
        }

        setInputValue('');
        setLoading(false);
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h1>Health Assistant</h1>
                <p>Ask me anything about health!</p>
            </div>
            
            <div className="messages-container">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        <div className="message-content">
                            {message.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="input-form">
                <input
                    type="text"
                    value={InputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your health question here..."
                    className="message-input"
                />
                <button type="submit" className="send-button" disabled={loading}>
                    {loading ? "Loading..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default Chatbot;
