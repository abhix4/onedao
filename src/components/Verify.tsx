import banner from '../assets/image.jpg'; // your uploaded image

export default function Verify() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="row custom-shadow  custom-container overflow-hidden"
     
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
          <h4 className="mb-2 fw-semibold text-center">Verify your email</h4>
          <p className="text-muted mb-4 text-center" style={{fontSize:"14px"}}>Enter the otp from your register email id</p>

          <form>
            <div className="mb-3 d-flex gap-3">
              <input
                id="email"
                type="email"
                className="form-control"
               
                required
              />
                <input
                id="email"
                type="email"
                className="form-control"
               
                required
              />
              
                <input
                id="email"
                type="email"
                className="form-control"
                
                required
              />  <input
                id="email"
                type="email"
                className="form-control"
                
                required
              />
                <input
                id="email"
                type="email"
                className="form-control"
                
                required
              />
                <input
                id="email"
                type="email"
                className="form-control"
                
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100 mt-3">
              Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
