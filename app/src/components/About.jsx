import React from "react";

function About() {
  return (
    <div className="about-section container py-5">
      <h2 className="text-center mb-4 fw-bold text-primary">About Company</h2>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/electrician-service-concept-illustration_114360-3933.jpg"
            alt="Electrical Work"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h4 className="text-warning fw-bold">H&K Electricals Engineer PVT Company</h4>
          <p className="fs-5 text-secondary">
            H&K Electricals Engineer PVT Company is a professionally managed electrical contracting firm
            offering end-to-end solutions across residential, commercial, industrial, and government sectors.
            We handle everything from wiring to transformer installations and large-scale tender-based projects
            with complete safety and quality assurance.
          </p>
          <p className="fs-6 text-dark">
            With <strong>15+ years</strong> of experience, our certified and skilled team ensures timely
            and reliable services with a focus on innovation, safety, and client satisfaction.
            We are fully compliant with industry standards and deliver scalable, custom solutions.
          </p>

          <h5 className="text-success mt-4 fw-bold">🌟 Opportunities with Us:</h5>
          <ul className="text-dark fs-6">
            <li><strong>Tender Applications:</strong> Apply for electrical tenders in government or private sector.</li>
            <li><strong>Job Vacancies:</strong> Electricians, helpers, and supervisors can apply directly online.</li>
            <li><strong>Training & Certification:</strong> Learn basic electrical safety, wiring, and tools handling with certification.</li>
            <li><strong>Vendor Registration:</strong> Become a registered material supplier or service provider.</li>
            <li><strong>Internships & Apprenticeship:</strong> Students from ITI/Polytechnic/B.Tech can apply for live project training.</li>
            <li><strong>Franchise & Partnership:</strong> Start your own H&K franchise in your city or work with us on large-scale projects.</li>
            <li><strong>Online Booking:</strong> Customers can book electricians and services online for home or business needs.</li>
          </ul>

          <p className="mt-3 fs-6 text-secondary">
            Join us in powering the future with smart and safe electrical solutions.
            Whether you're a client, contractor, worker, or student — H&K Electricals is your trusted partner.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
