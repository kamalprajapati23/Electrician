import React, { useState } from "react";
import Swal from "sweetalert2";

function EmergencyLeaveCard() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    reason: "",
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
      icon: "info",
      title: "Leave Request Submitted",
      text: `${formData.name} ki chhutti ki request bhej di gayi hai.`,
      confirmButtonColor: "#dc3545"
    });

    setShowForm(false);
    setFormData({ name: "", date: "", reason: "", file: null });
  };

  return (
    <div className="container my-4">
      <div
        className="card shadow h-100 p-4 bg-light  mx-auto"
        style={{ maxWidth: "700px" }}
      >
        <h5 className="fw-bold text-danger text-center">🚨 Emergency Leave</h5>
        <p className="text-muted text-center mb-3">Achanak tabiyat kharab ho ya jaruri kaam ho</p>

        <div className="text-center mb-3">
          <button
            className="btn btn-outline-danger"
            onClick={() => setShowForm(!showForm)}
          >
            ✉️ Apply for Leave
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
              <label className="form-label">Date of Leave</label>
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
              <label className="form-label">Reason</label>
              <textarea
                className="form-control"
                rows="3"
                name="reason"
                required
                placeholder="Tabiyat kharab, parivarik samasya, ya kuch aur..."
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Proof (optional)</label>
              <input
                type="file"
                className="form-control"
                name="file"
                onChange={handleChange}
              />
            </div>

            <div className="text-center">
              <button className="btn btn-danger w-50" type="submit">
                Submit Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EmergencyLeaveCard;
