
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Mail,
  Phone,
  Linkedin,
  Send,
  BriefcaseBusiness,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";
import "./Contact.css";

// Replace this with your actual Web3Forms access key
const WEB3FORMS_ACCESS_KEY =import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ;

const Contact = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Automatically select inquiry type from URL
  useEffect(() => {
    const type = searchParams.get("type");

    if (type === "job-seeker") {
      setFormData((prev) => ({
        ...prev,
        subject: "Job Seeker Inquiry",
      }));
    } else if (type === "employer") {
      setFormData((prev) => ({
        ...prev,
        subject: "Recruitment Inquiry",
      }));
    }
  }, [searchParams]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Scroll to form and select inquiry type
  const handleAudienceSelect = (subject) => {
    setFormData((prev) => ({
      ...prev,
      subject,
    }));

    setStatus({
      type: "",
      message: "",
    });

    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  // Submit form through Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus({
        type: "error",
        message: "Please configure your Web3Forms access key first.",
      });
      return;
    }

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        from_name: "Blue Feathers Staffing Solutions Website",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Thank you for contacting us! Your message has been submitted successfully.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(
          result.message || "Unable to submit your message."
        );
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
     

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-eyebrow">WE'RE HERE FOR YOU</span>

          <h1>
            Let's Start a <span>Conversation</span>
          </h1>

          <p>
            Whether you're searching for your next career opportunity or
            looking for the right talent, we're ready to connect with you.
          </p>

          <div className="contact-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION AND FORM */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-section-heading">
            <span className="contact-section-label">GET IN TOUCH</span>

            <h2>We'd Love to Hear From You</h2>

            <p>
              Have a question or need assistance? Reach out to our team
              through any of the channels below.
            </p>
          </div>

          <div className="contact-layout">
            {/* LEFT: CONTACT INFORMATION */}
            <aside className="contact-info-card">
              <div className="contact-info-heading">
                <span className="contact-info-label">CONTACT DETAILS</span>

                <h3>Let's Connect</h3>

                <p>
                  We're here to help you take the next step toward new
                  opportunities and meaningful professional connections.
                </p>
              </div>

              <a
                href="mailto:bluefeatherstaffing@gmail.com"
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <span>Email Us</span>
                  <p>bluefeatherstaffing@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:8234097668"
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <span>Call Us</span>
                  <p>+91 82340 97668</p>
                </div>
              </a>

              <a
                href="tel:9131076100"
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <span>Call Us</span>
                  <p>+91 91310 76100</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/blue-feather-staffing-solutions-llp-7bb286361"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  <Linkedin size={21} />
                </div>

                <div>
                  <span>Connect on LinkedIn</span>
                  <p>Blue Feathers Staffing Solutions LLP</p>
                </div>
              </a>

              <div className="contact-info-divider"></div>

              <div className="contact-info-footer">
                <div className="contact-info-icon">
                  <Clock size={21} />
                </div>

                <div>
                  <h4>Let's Discuss Your Needs</h4>

                  <p>
                    Contact us to discuss your recruitment or career-related
                    inquiry.
                  </p>
                </div>
              </div>

              <div className="contact-decoration contact-decoration-one"></div>
              <div className="contact-decoration contact-decoration-two"></div>
            </aside>

            {/* RIGHT: CONTACT FORM */}
            <div className="contact-form-card" id="contact-form">
              <div className="contact-form-heading">
                <h3>Send Us a Message</h3>

                <p>
                  Fill out the form below and tell us how we can help.
                </p>
              </div>

              {/* ERROR MESSAGE */}
              {status.type === "error" && status.message && (
                <div
                  className="contact-form-notice"
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle size={19} />
                  <p>{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Full Name *</label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">Email Address *</label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-phone">Phone Number</label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-subject">Subject *</label>

                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select an inquiry
                      </option>

                      <option value="Job Seeker Inquiry">
                        Job Seeker Inquiry
                      </option>

                      <option value="Recruitment Inquiry">
                        Recruitment Inquiry
                      </option>

                      <option value="Business Partnership">
                        Business Partnership
                      </option>

                      <option value="General Inquiry">
                        General Inquiry
                      </option>
                    </select>
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Your Message *</label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <LoaderCircle size={17} className="contact-spinner" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={17} />
                    </>
                  )}
                </button>

                <p className="contact-form-privacy">
                  Please avoid including passwords or other sensitive
                  personal information in your message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE CARDS */}
      <section className="contact-audience">
        <div className="contact-container">
          <div className="contact-section-heading">
            <span className="contact-section-label">HOW CAN WE HELP?</span>

            <h2>Let's Connect With the Right Team</h2>

            <p>
              Choose the option that best describes what you're looking for.
            </p>
          </div>

          <div className="contact-audience-grid">
            {/* JOB SEEKERS */}
            <div className="contact-audience-card">
              <div className="contact-audience-icon">
                <BriefcaseBusiness size={27} />
              </div>

              <h3>Looking for a Job?</h3>

              <p>
                Looking for your next career opportunity? Share your inquiry
                and professional interests with us.
              </p>

              <button
                type="button"
                className="contact-audience-link"
                onClick={() =>
                  handleAudienceSelect("Job Seeker Inquiry")
                }
              >
                Submit Job Inquiry <span>→</span>
              </button>
            </div>

            {/* EMPLOYERS */}
            <div className="contact-audience-card">
              <div className="contact-audience-icon">
                <Users size={27} />
              </div>

              <h3>Looking to Hire?</h3>

              <p>
                Need support with your recruitment requirements? Tell us
                about your organization's hiring needs.
              </p>

              <button
                type="button"
                className="contact-audience-link"
                onClick={() =>
                  handleAudienceSelect("Recruitment Inquiry")
                }
              >
                Discuss Hiring <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contact-bottom-cta">
        <div className="contact-bottom-cta-content">
          <span>BLUE FEATHERS STAFFING SOLUTIONS</span>

          <h2>Every Connection Starts With a Conversation.</h2>

          <p>
            Let's work together to connect talent with opportunities.
          </p>

          <a
            href="https://www.linkedin.com/in/blue-feather-staffing-solutions-llp-7bb286361"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-bottom-btn"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {status.type === "success" && (
        <div
          className="contact-success-overlay"
          role="presentation"
          onClick={() => setStatus({ type: "", message: "" })}
        >
          <div
            className="contact-success-modal"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            aria-describedby="contact-success-description"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="contact-success-icon">
              <CheckCircle2 size={38} />
            </div>

            <h2 id="contact-success-title">Message Sent Successfully!</h2>

            <p id="contact-success-description">
              Thank you for contacting Blue Feathers Staffing Solutions.
              We've received your message and will get back to you soon.
            </p>

            <button
              type="button"
              className="contact-success-close-btn"
              onClick={() => setStatus({ type: "", message: "" })}
            >
              Okay, Got It
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;
