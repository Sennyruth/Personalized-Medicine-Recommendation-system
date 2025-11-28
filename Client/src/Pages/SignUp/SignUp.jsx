import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { apiUrl } from "../../Utils/Config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

function SignUp() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    fullname: Yup.string()
      .required("Full name is required")
      .min(4, "Full name should be at least 4 characters")
      .max(30, "Full name should not exceed 30 characters")
      .matches(/^[a-zA-Z\s]+$/, "Full name should contain only alphabets"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),

    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
    },

    onSubmit: async (formValues) => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
          credentials: "include",
        });
       

        const data = await response.json();
        console.log(response)
        if (data.success === true) {
          console.log(response);
          toast.success("User registered successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { backgroundColor: "blue", color: "white" }, 
          });
          
          setError(false);
          
          setTimeout(() => navigate('/signin'), 1500);
        } else {
          setError(data.message);
          if (data.message === "Email already registered") {
            toast.error("Email already in use. Please try another email.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              style: { backgroundColor: "red", color: "white" },
            });
          }
            
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },

    validationSchema: validationSchema,
  });

  return (
    <div className="form-maincontainer">
      <ToastContainer />
      <h1>Register Here</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-container">
          <div className="input-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              name="fullname"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.fullname && formik.touched.fullname && (
              <div className="error">{formik.errors.fullname}</div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="error">{formik.errors.phone}</div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirm your password"
              name="confirmpassword"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.confirmpassword &&
              formik.touched.confirmpassword && (
                <div className="error">{formik.errors.confirmpassword}</div>
              )}
          </div>

          {loading && <p style={{ color: "white" }}>Loading...</p>}
          <button type="submit" className="form-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="formtext">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default SignUp;
