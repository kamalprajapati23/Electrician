import React from "react";


function CompanyRulesCard() {
  return (
    <div className="container my-4">
      <div className="card company-rules-card">
        <div className="card-body">
          <h5 className="card-title text-center text-primary fw-bold mb-3">
            📋 Company Rules
          </h5>
          <ul className="card-text text-dark fs-6 mb-0">
            <li>🛠️ Safety gear is mandatory at worksite.</li>
            <li>📅 Leave must be pre-approved.</li>
            <li>🕐 Punctuality is strictly followed.</li>
            <li>🚫 No mobile usage during work hours.</li>
            <li>📝 Written notice for resignation is required.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompanyRulesCard;
