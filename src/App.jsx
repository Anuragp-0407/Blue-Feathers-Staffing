import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import About from "./About";
import Services from "./Services";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Navbar from "./components/Navbar";

import {
  ArrowRight,
  ChevronDown,
  Users,
  Target,
  Handshake,
  Landmark,
  Building2,
  ShieldCheck,
  Wallet,
  ChartNoAxesCombined,
  TrendingUp,
  Headset,
  HardHat,
  House,
  ArrowUpRight,
} from "lucide-react";

import "./styles.css";

const industries = [
  {
    name: "NBFC",
    description: "Connecting financial institutions with professionals who support lending and customer-focused operations.",
    icon: Building2,
  },
  {
    name: "Banking",
    description: "Supporting banking teams with talent across branch operations, sales, and customer service.",
    icon: Landmark,
  },
  {
    name: "Insurance",
    description: "Helping insurance organizations find people for advisory, operations, and customer support roles.",
    icon: ShieldCheck,
  },
  {
    name: "Finance",
    description: "Connecting businesses with professionals across financial operations and related functions.",
    icon: Wallet,
  },
  {
    name: "Asset Management",
    description: "Supporting asset management teams with skilled professionals for operational and client-facing roles.",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Broking",
    description: "Helping broking firms identify talent for market operations, sales, and client relationships.",
    icon: TrendingUp,
  },
  {
    name: "BPO",
    description: "Connecting business process teams with people focused on service, communication, and delivery.",
    icon: Headset,
  },
  {
    name: "Construction",
    description: "Supporting construction businesses with talent for site, project, and operational requirements.",
    icon: HardHat,
  },
  {
    name: "Real Estate",
    description: "Helping real estate organizations find professionals across sales, customer relations, and operations.",
    icon: House,
  },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">
      <main>
        {/* ================= HERO ================= */}

        <section className="hero" id="home">
          <div className="hero-panels" aria-hidden="true">
            <div className="hero-panel panel-one"></div>
            <div className="hero-panel panel-two"></div>
            <div className="hero-panel panel-three"></div>
            <div className="hero-panel panel-four"></div>
          </div>

          <div className="hero-shade"></div>

          <div className="hero-content">
            <p className="eyebrow">
              <span className="eyebrow-line"></span>
              PEOPLE. PURPOSE. POSSIBILITIES.
              <span className="eyebrow-line"></span>
            </p>

            <h1>
              We Create Opportunities,
              <br />
              <span>You Create Success</span>
            </h1>

            <p className="hero-description">
              We connect businesses with the right talent and help individuals
              discover opportunities to grow, succeed, and build meaningful
              careers.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="button button-primary">
                Get in Touch
                <ArrowRight size={17} />
              </Link>

              <Link to="/about" className="button button-ghost">
                Discover Our Story
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hero-note">
              <span className="note-dot"></span>
              Building connections that make a difference
            </div>
          </div>

          <div className="scroll-cue">
            <ChevronDown size={15} />
            <span>SCROLL TO EXPLORE</span>
          </div>

          <div className="hero-index">
            <span>01</span>
            <i></i>
            04
          </div>
        </section>

        {/* ================= INTRO STRIP ================= */}

        <section className="intro-strip">
          <p>Connecting the right people with the right opportunities.</p>

          <div className="intro-strip-right">
            <span>PEOPLE FIRST</span>
            <span className="strip-divider"></span>
            <span>QUALITY HIRING</span>
            <span className="strip-divider"></span>
            <span>LASTING PARTNERSHIPS</span>
          </div>
        </section>

        {/* ================= ABOUT US ================= */}

        <section className="about-band" id="about">
          <div className="about-band-visual">
            <div className="about-image-accent"></div>

            <div className="about-band-mark">
              <img
                src="/assets/founders.jpg"
                alt="Founders of Blue Feather Staffing Solutions LLP"
              />
            </div>

            <div className="about-image-label">
              <span className="about-label-dot"></span>
              <span>People behind our purpose</span>
            </div>
          </div>

          <div className="about-band-copy">
            <p className="section-kicker">
              <span className="about-kicker-line"></span>
              GET TO KNOW US
            </p>

            <h2>
              Building connections.
              <br />
              <span>Creating possibilities.</span>
            </h2>

            <p className="about-description">
              At BLUE FEATHER Staffing Solutions LLP, <strong>Rachna</strong> and{" "}
              <strong>Divya</strong> believe that the right people are the
              foundation of every successful organization. With a shared vision
              of connecting businesses with the right talent, they are committed
              to helping individuals discover meaningful opportunities, grow
              professionally, and build successful careers.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <Users size={23} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>People First</h3>
                  <p>Understanding people and their potential.</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">
                  <Target size={23} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>Purposeful Hiring</h3>
                  <p>Connecting talent with the right opportunities.</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">
                  <Handshake size={23} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>Lasting Partnerships</h3>
                  <p>Building relationships based on trust.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="button button-primary">
              Know More About Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}

        <section className="section-wrap industries-section" id="industries">
          <div className="section-heading industries-heading">
            <div>
              <p className="section-kicker">OUR EXPERTISE</p>

              <h2>
                Industries <span>We Serve.</span>
              </h2>
            </div>

            <p className="section-intro">
              We help organizations find the right people across specialized
              industries, connecting skilled professionals with opportunities
              that match their potential.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((industry, index) => {
              const IndustryIcon = industry.icon;

              return (
                <article
                  className="industry-item"
                  key={industry.name}
                  style={{ "--item-index": index }}
                >
                  <div className="industry-card-top">
                    <span className="industry-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="industry-icon">
                      <IndustryIcon size={27} strokeWidth={1.8} />
                    </span>
                    <ArrowUpRight className="industry-card-arrow" size={20} />
                  </div>

                  <div className="industry-card-copy">
                    <h3>{industry.name}</h3>
                    <p>{industry.description}</p>
                  </div>
                  <span className="industry-card-accent" aria-hidden="true" />
                </article>
              );
            })}
          </div>

          <div className="industries-cta">
            <Link to="/services" className="button button-primary">
              Explore Our Services
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* ================= FAQ CTA ================= */}

        <section className="faq-anchor" id="faq">
          <span>Questions about our recruitment solutions?</span>

          <Link to="/faq">
            Explore FAQs
            <ArrowRight size={16} />
          </Link>

          <Link to="/contact">
            Talk to our team
            <ArrowRight size={16} />
          </Link>
        </section>

        {/* ================= CONTACT CTA ================= */}

        <section className="contact-cta">
          <div className="contact-cta-copy">
            <p className="section-kicker">LET'S WORK TOGETHER</p>

            <h2>
              The right people.
              <br />
              The right possibilities.
            </h2>

            <p className="contact-description">
              Looking for talent or exploring your next career opportunity?
              Let's start a conversation.
            </p>
          </div>

          <Link to="/contact" className="button button-light">
            Contact Our Team
            <ArrowRight size={17} />
          </Link>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="site-footer">
        <Link to="/" className="footer-brand">
          BLUE FEATHER
          <span>Staffing Solutions LLP</span>
        </Link>

        <p>Connecting people with opportunities.</p>

        <div className="footer-navigation">
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Blue Feather Staffing Solutions LLP.
          <br />
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* ================= ROUTING ================= */

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
