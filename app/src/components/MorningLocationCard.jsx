import React, { useState } from "react";
import Swal from "sweetalert2";

function MorningLocationCard() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ location: "", image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Morning Location Submitted:", formData);

    Swal.fire({
      icon: "success",
      title: "🌞 Morning  Location Submitted",
      text: "Location & Image uploaded successfully!",
      confirmButtonColor: "#198754",
    });

    setFormData({ location: "", image: null });
    setShowForm(false);
  };

  return (
    <div className="container my-4 ">
      <div className="card shadow-sm p-4 bg-light mx-auto" style={{ maxWidth: "700px" }}>
        {/* Title */}
        <h5 className="fw-bold text-success text-center">🌞 Morning Live Location</h5>
        <p className="text-muted text-center">Before 09:00 AM</p>

        {/* Show Button */}
        {!showForm && (
          <div className="text-center">
            <button
              className="btn btn-outline-success"
              onClick={() => setShowForm(true)}
            >
              📍 Upload Morning Location
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
              <button className="btn btn-success w-100" type="submit">
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

export default MorningLocationCard;
