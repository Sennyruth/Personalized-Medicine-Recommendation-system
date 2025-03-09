
import { Link } from 'react-router-dom';
import './Home.css';

const SignUpFloat = () => {
  return (
    <div className="signup-float">
      <h2>Sign Up Now!</h2>
      <p>Join us to get personalized healthcare services.</p>
      <Link to="/signup"><button className="signup-button">Sign Up</button></Link>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUpFloat;
