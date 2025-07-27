import React, { useState } from "react";
import Swal from "sweetalert2";

function DPRForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    workDone: "",
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "DPR Submitted",
      text: `Worker ${formData.name} ka DPR submit ho gaya hai!`,
      confirmButtonColor: "#28a745"
    });

    setShowForm(false);
    setFormData({ name: "", date: "", workDone: "", file: null });
  };

  return (
    <div className="container my-4">
      <div className="card shadow h-100 p-4 bg-light mx-auto" style={{ maxWidth: "500px" }}>
        <h5 className="fw-bold text-primary text-center">📄 DPR</h5>
        <p className="text-muted text-center mb-3">DPR = Daily Progress Report</p>

        <div className="text-center mb-3">
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            📋 Upload DPR
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label className="form-label">Worker Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Today's Work</label>
              <textarea
                className="form-control"
                rows="3"
                name="workDone"
                required
                value={formData.workDone}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Upload File (optional)</label>
              <input
                type="file"
                className="form-control"
                name="file"
                onChange={handleChange}
              />
            </div>

            <div className="text-center">
              <button className="btn btn-success w-50" type="submit">
                Submit DPR
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default DPRForm;
