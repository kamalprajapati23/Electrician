import React, { useState } from "react";
import Swal from "sweetalert2";

function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const [activeForm, setActiveForm] = useState("");

  const handleToggle = () => {
    if (showOptions) {
      setShowOptions(false);
      setActiveForm("");
    } else {
      setShowOptions(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Form Submitted!",
      text: "Thank you! We’ll get back to you soon.",
    });
  };

  const renderForm = () => {
    const baseFormClasses = "bg-white p-4 rounded-lg shadow-lg mt-4 text-start"; // White background + strong shadow
    switch (activeForm) {
      case "tender":
        return (
          <form className={baseFormClasses} onSubmit={handleSubmit}>
            <h4 className="text-primary mb-3">🔖 Tender Application</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Company Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label>Owner Name</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="mb-3">
              <label>Work Type (Electrical, AMC, Wiring etc.)</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>GST Number</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label>PAN Number</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="mb-3">
              <label>Tender Copy (PDF)</label>
              <input type="file" className="form-control" accept=".pdf" required />
            </div>
            <button className="btn btn-primary mt-2">Submit Tender</button>
          </form>
        );

      case "vacancy":
        return (
          <form className={baseFormClasses} onSubmit={handleSubmit}>
            <h4 className="text-success mb-3">👷 Vacancy Application</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Full Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label>Mobile Number</label>
                <input type="tel" className="form-control" required />
              </div>
            </div>
            <div className="mb-3">
              <label>Post Applying For (Electrician, Helper, Supervisor etc.)</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Qualification</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Upload Resume (PDF or DOC)</label>
              <input type="file" className="form-control" accept=".pdf,.doc,.docx" required />
            </div>
            <button className="btn btn-success mt-2">Apply Now</button>
          </form>
        );

      case "resign":
        return (
          <form className={baseFormClasses} onSubmit={handleSubmit}>
            <h4 className="text-danger mb-3">📤 Resignation Form</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Your Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label>Employee ID</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="mb-3">
              <label>Reason for Resignation</label>
              <textarea className="form-control" rows="3" required></textarea>
            </div>
            <div className="mb-3">
              <label>Upload Resignation Letter (PDF)</label>
              <input type="file" className="form-control" accept=".pdf" required />
            </div>
            <button className="btn btn-danger mt-2">Submit Resignation</button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="bg-white shadow rounded p-5 text-center">
          <h1 className="display-5 fw-bold text-primary mb-3">
            Welcome to H&K Electricals Engineers PVT LTD Company
          </h1>
          <p className="lead text-secondary mb-4">
            A to Z Electrical Contracts — Government & Private
          </p>
          <button onClick={handleToggle} className="btn btn-outline-primary btn-lg mb-3">
            Contact Now
          </button>

          {showOptions && (
            <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
              <button
                className="btn btn-outline-primary"
                onClick={() => setActiveForm("tender")}
              >
                Apply for Tender
              </button>
              <button
                className="btn btn-outline-success"
                onClick={() => setActiveForm("vacancy")}
              >
                Apply for Vacancy
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => setActiveForm("resign")}
              >
                Resign from Company
              </button>
            </div>
          )}

          {renderForm()}
        </div>
      </div>
    </div>
  );
}

export default Home;
