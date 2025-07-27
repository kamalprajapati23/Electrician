import React from "react";
function Tender() {
  return (
    <div className="tender-section container py-5">
      <h2 className="text-center text-primary fw-bold mb-4">Tender Application</h2>

      {/* Intro Section */}
      <div className="row mb-4">
        <div className="col-md-12 text-center">
          <p className="fs-5 text-secondary">
            We invite contractors and clients to apply for our latest government and private electrical tenders.
            Fill out the form below to submit your interest in participating in upcoming projects. Our team will contact you after evaluation.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form className="tender-form p-4 rounded shadow">
            <div className="mb-3">
              <label className="form-label fw-bold">Company / Contractor Name</label>
              <input type="text" className="form-control" placeholder="Enter full name" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Contact Number</label>
              <input type="tel" className="form-control" placeholder="Enter contact number" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Tender Category</label>
              <select className="form-select" required>
                <option value="">Select category</option>
                <option value="residential">Residential Wiring</option>
                <option value="commercial">Commercial Projects</option>
                <option value="industrial">Industrial Work</option>
                <option value="government">Government Contract</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Upload Company Profile (PDF)</label>
              <input type="file" className="form-control" accept=".pdf" required />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">Submit Tender</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tender;
