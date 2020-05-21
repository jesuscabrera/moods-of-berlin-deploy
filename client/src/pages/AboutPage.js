import React from "react";

const AboutPage = (props) => {
  return (
    <React.Fragment>
      <div className="container my-5">
        <p>
          This is the Moods of Berlin web application v1.0.0. It is part of an
          Ironhack project.
        </p>
        <p>Created by Jesus, Benjamin and Robert.</p>
        <h2>This part of the app will consist of: </h2>
        <ul>
          <li>Navbar: logo, home, (login, signup, logout)</li>
          <li>Section1: just the simple text like the one above</li>
          <li>And maybe a footer with our names and a copyright</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
