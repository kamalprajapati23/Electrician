import React, { useState } from "react";
import Swal from "sweetalert2";

function EveningLocationCard() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ location: "", image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Evening Location Submitted:", formData);

    Swal.fire({
      icon: "success",
      title: "🌙 Evening Location Submitted",
      text: "Location & Image uploaded successfully!",
      confirmButtonColor: "#0d6efd",
    });

    setFormData({ location: "", image: null });
    setShowForm(false);
  };

  return (
    <div className="container my-4">
      <div className="card shadow p-4 bg-light mx-auto" style={{ maxWidth: "700px" }}>
        {/* Title */}
        <h5 className="fw-bold text-primary text-center">🌙 Evening Live Location</h5>
        <p className="text-muted text-center">After Duty (Evening)</p>

        {/* Show Button */}
        {!showForm && (
          <div className="text-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => setShowForm(true)}
            >
              📍 Upload Evening Location
            </button>
          </div>
        )}

        {/* Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-2">
              <label className="form-label">Live Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter or paste location link"
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Upload Image</label>
              <input
                type="file"
                className="form-control"
                name="image"
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-primary w-100" type="submit">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EveningLocationCard;
