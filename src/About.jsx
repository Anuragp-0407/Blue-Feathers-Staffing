import { ArrowRight, Users, Target, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">


      <main>

        {/* ABOUT HERO */}

        <section className="about-hero">
          <div className="about-hero-overlay"></div>

          <div className="about-hero-content">
            <span className="about-hero-line"></span>

            <h1>ABOUT US</h1>

            <p>
              Connecting People. Creating Opportunities.
            </p>
          </div>
        </section>

        {/* COMPANY INTRODUCTION */}

        <section className="about-intro-section">

          <div className="about-intro-card">

            {/* LEFT IMAGE */}

            <div className="about-intro-visual">

              <div className="about-intro-image"></div>

              <div className="about-image-caption">
                <span className="about-caption-icon">
                  <Users size={20} />
                </span>

                <div>
                  <strong>People First</strong>
                  <span>Opportunities for Everyone</span>
                </div>
              </div>

            </div>

            {/* RIGHT CONTENT */}

            <div className="about-intro-content">

              <p className="about-kicker">
                <span></span>
                WHO WE ARE
              </p>

              <h2>
                Connecting Talent.
                <br />
                <span>Empowering Futures.</span>
              </h2>

              <p>
                Established in <strong>2019</strong>, Blue Feathers
                Staffing Solutions was founded with a vision to connect
                people with meaningful employment opportunities and help
                businesses find the talent they need to grow.
              </p>

              <p>
                Our journey is driven by the belief that every individual
                deserves an opportunity to showcase their abilities,
                achieve financial independence, and build a better future.
                During times of unprecedented uncertainty, when businesses
                faced challenges and countless individuals struggled to
                find employment, the importance of meaningful recruitment
                and accessible work opportunities became even more evident.
              </p>

              <p>
                We recognized the growing need to bridge the gap between
                job seekers and employers, including individuals looking
                for flexible work-from-home opportunities to support their
                families and professional aspirations.
              </p>

              <p>
                What began with a commitment to connecting people with
                opportunities has grown into a purpose-driven approach
                to recruitment. We strive to understand the needs of
                businesses while recognizing the skills, potential,
                and aspirations of individuals.
              </p>

              <div className="about-belief">
                <span className="belief-line"></span>

                <p>
                  Every individual deserves an opportunity, every talent
                  deserves recognition, and every dream deserves a chance.
                </p>
              </div>

              <Link to="/contact" className="about-contact-button">
                CONTACT US
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </section>

        {/* COMPANY VALUES STRIP */}

        <section className="about-values-strip">

          <div className="about-value-item">
            <div className="about-value-icon">
              <Users size={25} />
            </div>

            <div>
              <h3>People First</h3>
              <p>Recognizing individual potential.</p>
            </div>
          </div>

          <div className="about-value-divider"></div>

          <div className="about-value-item">
            <div className="about-value-icon">
              <Target size={25} />
            </div>

            <div>
              <h3>Purposeful Recruitment</h3>
              <p>Understanding hiring requirements.</p>
            </div>
          </div>

          <div className="about-value-divider"></div>

          <div className="about-value-item">
            <div className="about-value-icon">
              <Handshake size={25} />
            </div>

            <div>
              <h3>Meaningful Connections</h3>
              <p>Building lasting relationships.</p>
            </div>
          </div>

        </section>

      </main>

      {/* FOOTER */}

      <footer className="services-footer">

        <Link to="/" className="services-footer-brand">
          BLUE FEATHERS
          <span>Staffing Solutions</span>
        </Link>

        <p>Connecting people with opportunities.</p>

        <span>
          © {new Date().getFullYear()} Blue Feathers Staffing Solutions.
          All rights reserved.
        </span>

      </footer>

    </div>
  );
}

export default About;