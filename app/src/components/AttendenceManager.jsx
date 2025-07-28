import React, { useState } from "react";

const initialWorkers = ["Aman", "Harsh", "Kamal", "Rahul", "Priya"];
const todayDate = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

function AttendanceManager() {
  const [attendanceData, setAttendanceData] = useState({});
  const [showSheet, setShowSheet] = useState(false);

  const handleAttendanceChange = (worker, status) => {
    setAttendanceData((prev) => ({
      ...prev,
      [worker]: {
        date: todayDate,
        status
      }
    }));
  };

  const handleSubmit = () => {
    console.log("Final Attendance:", attendanceData);
    alert("Attendance marked successfully!");
  };

  return (
    <div className="card shadow h-100 p-4 bg-light mx-auto" style={{ maxWidth: "700px" }}>
      <h6 className="text-center fw-bold text-success mb-2">📋 Worker Attendance</h6>

      <div className="text-center mb-2">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => setShowSheet(!showSheet)}
        >
          {showSheet ? "Hide Attendance" : "Mark Attendance"}
        </button>
      </div>

      {showSheet && (
        <>
          <h6 className="text-center text-muted mb-2">{todayDate}</h6>
          <table className="table table-sm table-bordered mb-2">
            <thead className="table-light">
              <tr>
                <th style={{ fontSize: "0.9rem" }}>👷 Name</th>
                <th className="text-center" style={{ fontSize: "0.9rem" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {initialWorkers.map((worker, idx) => (
                <tr key={idx}>
                  <td style={{ fontSize: "0.9rem" }}>{worker}</td>
                  <td className="text-center">
                    <select
                      className="form-select form-select-sm w-100"
                      value={attendanceData[worker]?.status || ""}
                      onChange={(e) => handleAttendanceChange(worker, e.target.value)}
                    >
                      <option value="">--</option>
                      <option value="Present">✅</option>
                      <option value="Absent">❌</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-center">
            <button
              className="btn btn-sm btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default AttendanceManager;
