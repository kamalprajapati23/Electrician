import React, { useState } from "react";
import Swal from "sweetalert2";

function Vacancy() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    skills: "",
    experience: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    Swal.fire("Success", "Vacancy Form Submitted Successfully!", "success");
    setFormData({
      name: "",
      phone: "",
      skills: "",
      experience: "",
      location: "",
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4 border-0 rounded-4">
            <h2 className="text-center mb-4 text-primary fw-bold">
              🧰 Worker Vacancy Application
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="e.g. 9876543210"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="e.g. Wiring, DG Setup, Solar, etc."
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Experience (in years)</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="e.g. 2 years"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Current Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="City / Area"
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg rounded-3">
                  🚀 Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
