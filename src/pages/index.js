import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            Akshat
            <span className="text-primary"> Sahu</span>
          </h1>
          <div className="subheading mb-5">
            Malad-east, Mumbai, India .+(91) 9167022163. akshat0199@gmail.com
          </div>
          <p className="lead mb-5">
            I am good in learning new technologies and adapting to technological environments.
            I have a sound knowledge of programming concepts and tools. 
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Bachelor of technology</h3>
              <div className="subheading mb-3">Computer science</div>
              <p>GPA: 3.01</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2018 - till date</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Pace High School</h3>
              <div className="subheading mb-3">PCM program</div>
              <p>Percentage: 70%</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2016 - May 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
          </ul>
          <div className="subheading mb-3">Projects</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Corona buddy - web application about statistics of covid-19.
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Medical storage management system - gui written in python
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Student portal - web application
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from programming, I am interested in football. I am a real madrid fan.
            I was an athlete in my school days used to run 400 metres. 
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring drummer, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the field of cyber-security.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              C++ certification, udemy.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              linux certification, udemy.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              green revolution global certification, United Nations.
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
