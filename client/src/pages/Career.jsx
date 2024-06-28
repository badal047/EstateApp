import React from 'react';

const Career = () => {
  return (
    <div className="bg-gray-100 mt-11">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Career Opportunities</h1>

        <p className="mb-4">
          At Urban Nest, we are always looking for talented individuals to join our team. If you are passionate about [your industry or field], we would love to hear from you.
        </p>

        <h2 className="text-2xl font-bold mb-2">Current Openings</h2>

        <p className="mb-4">
          We have a variety of roles available across different departments. Check out our current openings below and apply today!
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Software Engineer</li>
          <li>Product Manager</li>
          <li>Marketing Specialist</li>
          <li>Negotiation Specialist</li>
          {/* Add more job positions as needed */}
        </ul>

        <h2 className="text-2xl font-bold mb-2">Why Work With Us?</h2>

        <p className="mb-4">
          At Urban Nest, we believe in fostering a collaborative and inclusive work environment. We offer competitive salaries, comprehensive benefits, and opportunities for professional growth and development.
        </p>

        <h2 className="text-2xl font-bold mb-2">How to Apply</h2>

        <p className="mb-4">
          If you are interested in joining our team, please send your resume and a cover letter to careers@urbannest.com. Be sure to include the position you are applying for in the subject line.
        </p>

        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

        <p className="mb-4">
          For any inquiries regarding career opportunities, please contact us at careers@urbannest.com or visit us at Urban Nest, NewTown ,Kolkata.
        </p>
      </div>
    </div>
  );
};

export default Career;
