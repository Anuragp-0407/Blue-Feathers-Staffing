import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  Plus,
  Minus,
  ArrowRight,
  BriefcaseBusiness,
  Users,
  MessageCircle,
} from "lucide-react";
import "./FAQ.css";

const faqData = {
  "Job Seekers": [
    {
      question: "How should I prepare for a job interview?",
      answer:
        "Start by researching the company and understanding the job description. Prepare answers to common interview questions, practice explaining your skills and experience, and be ready to discuss your strengths. Dress professionally, arrive on time, and communicate confidently.",
    },
    {
      question: "How can I improve my chances of getting selected?",
      answer:
        "Keep your resume updated, highlight relevant skills, and apply for roles that match your qualifications. Prepare thoroughly for interviews, communicate clearly, and demonstrate a willingness to learn and grow.",
    },
    {
      question: "What should I include in my resume?",
      answer:
        "Your resume should include your contact details, professional summary, educational qualifications, work experience (if applicable), technical and soft skills, certifications, and relevant projects. Keep the information clear, accurate, and tailored to the position.",
    },
    {
      question: "How can I prepare for a remote job?",
      answer:
        "Create a dedicated workspace, ensure you have a stable internet connection, and become comfortable using online communication and collaboration tools. Good time management, self-discipline, and clear communication are also important.",
    },
    {
      question: "What should I consider before accepting a job offer?",
      answer:
        "Review the job responsibilities, salary structure, working hours, location or remote-work arrangements, growth opportunities, and other employment terms. Make sure you understand the offer before making your decision.",
    },
    {
      question: "How important are communication skills in a job?",
      answer:
        "Communication skills are important in almost every profession. They help you explain ideas, collaborate with colleagues, understand instructions, solve problems, and build professional relationships.",
    },
  ],

  Employers: [
    {
      question: "How can I identify the right candidate for a position?",
      answer:
        "Begin with clearly defined job responsibilities and required qualifications. Evaluate candidates based on relevant skills, experience, problem-solving ability, communication, and alignment with the role's requirements.",
    },
    {
      question: "What should employers look for during an interview?",
      answer:
        "Employers should assess a candidate's technical or job-related skills, practical experience, communication, attitude, and ability to handle responsibilities. Asking structured, role-specific questions can help make evaluations more consistent.",
    },
    {
      question: "How can businesses improve employee engagement?",
      answer:
        "Encourage open communication, recognize employee contributions, provide opportunities for professional development, and create a supportive work environment. Employees are more likely to stay engaged when they feel valued.",
    },
    {
      question: "Why is employee retention important?",
      answer:
        "Employee retention helps businesses maintain continuity, reduce repeated recruitment and training costs, preserve organizational knowledge, and build stronger teams.",
    },
    {
      question: "What are the important factors in successful recruitment?",
      answer:
        "Successful recruitment starts with understanding the role, defining the ideal candidate profile, using appropriate sourcing methods, conducting structured interviews, and evaluating candidates fairly.",
    },
    {
      question: "How can I discuss recruitment requirements with Blue Feathers?",
      answer:
        "You can contact the Blue Feathers team through the Contact Us section of the website and share your organization's hiring requirements. The team can then discuss your recruitment needs with you.",
    },
  ],
};

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Job Seekers");
  const [openIndex, setOpenIndex] = useState(0);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenIndex(0);
  };

  return (
    <div className="faq-page">
      

      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-overlay"></div>

        <div className="faq-hero-content">
          <span className="faq-eyebrow">WE ARE HERE TO HELP</span>
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about recruitment, career
            opportunities, and building successful teams.
          </p>

          <div className="faq-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>FAQ</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-main">
        <div className="faq-container">
          <div className="faq-heading">
            <span className="faq-section-label">GOT QUESTIONS?</span>
            <h2>How Can We Help You?</h2>
            <p>
              Whether you are looking for your next career opportunity or
              searching for the right talent, explore the answers below.
            </p>
          </div>

          {/* Category Selector */}
          <div className="faq-category-wrapper">
            <button
              className={`faq-category ${
                activeCategory === "Job Seekers" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("Job Seekers")}
            >
              <BriefcaseBusiness size={21} />
              <span>Job Seekers</span>
            </button>

            <button
              className={`faq-category ${
                activeCategory === "Employers" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("Employers")}
            >
              <Users size={21} />
              <span>Employers</span>
            </button>
          </div>

          {/* Accordion */}
          <div className="faq-list">
            {faqData[activeCategory].map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                  key={`${activeCategory}-${index}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-question-text">
                      {faq.question}
                    </span>

                    <span className="faq-toggle">
                      {isOpen ? <Minus size={19} /> : <Plus size={19} />}
                    </span>
                  </button>

                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="faq-note">
            <MessageCircle size={19} />
            <p>
              Have a question that isn't covered here? Get in touch with our
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-cta">
        <div className="faq-cta-content">
          <span>NEED MORE INFORMATION?</span>
          <h2>Still Have Questions?</h2>
          <p>
            We're here to help you take the next step. Connect with our team
            and let us know how we can assist you.
          </p>

          <Link to="/contact" className="faq-cta-button">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FAQ;