import { useNavigate } from 'react-router-dom';
import banner from '../assets/image.jpg'; // your uploaded image

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="row shadow custom-container overflow-hidden"
     
      >
        {/* Left Image Side */}
        <div className="col-md-6 d-none d-md-block p-0 h-100">
          <img
            src={banner}
            alt="Login Illustration"
            className="img-fluid h-100 w-100"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right Form Side */}
        <div className="col-md-6 bg-light d-flex flex-column justify-content-center px-5">
          <h4 className="mb-2 fw-semibold text-center">Register to Admin Panel</h4>
          <p className="text-muted mb-4 text-center" style={{fontSize:"14px"}}>Enter your phone number and password below</p>

          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-uppercase small fw-semibold">
                Email ID
              </label>
              <input
                id="email"
                type="email"
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
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirm-password" className="form-label text-uppercase small fw-semibold">
                Confirm Password
              </label>
              <input
                id="comfirm-password"
                type="password"
                className="form-control"
                placeholder="Enter your confirm password"
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100 mt-4" >
              Register
            </button>
          </form>

          <p className="mt-3 text-center text-muted small">
            Already have an account? <a href="#" className="text-dark fw-semibold" onClick={() => navigate("/login")}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
