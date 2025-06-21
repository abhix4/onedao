import { useNavigate } from 'react-router-dom';
import banner from '../assets/image.jpg'; // your uploaded image
import { useState } from 'react';

export default function Login() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = () => {
    if(email === "admin@email.com" && password === "admin"){
      navigate("/")
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="row shadow  custom-container overflow-hidden"
     
      >
        {/* Left Image Side */}
        <div className="col-md-6 d-none d-md-block p-0 h-100 w-1/2">
          <img
            src={banner}
            alt="Login Illustration"
            className="img-fluid h-100 w-100"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right Form Side */}
        <div className="col-md-6 bg-light d-flex flex-column justify-content-center px-5">
          <h4 className="mb-2 fw-semibold text-center">Log In to Admin Panel</h4>
          <p className="text-muted mb-4 text-center" style={{fontSize:"14px"}}>Enter your email id and password below</p>

          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-uppercase small fw-semibold">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email id"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-uppercase small fw-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100 mt-3" onClick={handleLogin}>
              Log In
            </button>
          </form>

          <p className="mt-3 text-center text-muted small">
            Don’t have an account? <a href="#" className="text-dark fw-semibold"  onClick={() => navigate("/register")}>Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}
