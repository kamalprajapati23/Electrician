import React from "react";

function Resine() {
  return (
    <div className="resine-section container py-5">
      <h2 className="text-center text-success fw-bold mb-4">Worker / Technician Vacancy Application</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form className="resine-form p-4 rounded shadow">
            <div className="mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your full name" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter your contact number" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Type of Work</label>
              <select className="form-select" required>
                <option value="">Select</option>
                <option value="electrician">Electrician</option>
                <option value="helper">Helper</option>
                <option value="site_engineer">Site Engineer</option>
                <option value="supervisor">Supervisor</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Upload Resume (PDF only)</label>
              <input type="file" className="form-control" accept=".pdf" required />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success px-5">Apply Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Resine;
