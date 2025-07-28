import React from "react";

function About() {
  return (
    <div className="pt-3 pb-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Company</h2>

        {/* Card 1: Company Overview */}
        <div className="card mb-4 shadow-sm border-0 rounded-4">
          <div className="card-body">
            <h4 className="text-warning fw-bold">🏢 H&K Electricals Engineers PVT LTD</h4>
            <p className="fs-5 text-secondary">
              H&K Electricals Engineer PVT Company is a professionally managed electrical contracting firm offering
              end-to-end solutions across residential, commercial, industrial, and government sectors. We handle
              everything from wiring to transformer installations and large-scale tender-based projects with complete
              safety and quality assurance.
            </p>
            <p className="fs-6 text-dark">
              With <strong>15+ years</strong> of experience, our certified and skilled team ensures timely and
              reliable services with a focus on innovation, safety, and client satisfaction.
            </p>
          </div>
        </div>

        {/* Card 2: Opportunities */}
        <div className="card mb-4 shadow-sm border-0 rounded-4">
          <div className="card-body">
            <h5 className="text-success fw-bold mb-3">🌟 Opportunities with Us</h5>
            <ul className="text-dark fs-6 mb-0">
              <li><strong>Tender Applications:</strong> Apply for electrical tenders in government or private sector.</li>
              <li><strong>Job Vacancies:</strong> Electricians, helpers, and supervisors can apply directly online.</li>
              <li><strong>Training & Certification:</strong> Learn basic electrical safety, wiring, and tools handling with certification.</li>
              <li><strong>Vendor Registration:</strong> Become a registered material supplier or service provider.</li>
              <li><strong>Internships & Apprenticeship:</strong> Students from ITI/Polytechnic/B.Tech can apply for live project training.</li>
              <li><strong>Franchise & Partnership:</strong> Start your own H&K franchise in your city or work with us on large-scale projects.</li>
              <li><strong>Online Booking:</strong> Customers can book electricians and services online for home or business needs.</li>
            </ul>
          </div>
        </div>

        {/* Card 3: Closing Statement */}
        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body">
            <p className="fs-6 text-secondary mb-0">
              Join us in powering the future with smart and safe electrical solutions. Whether you're a client,
              contractor, worker, or student — <strong>H&K Electricals</strong> is your trusted partner.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
