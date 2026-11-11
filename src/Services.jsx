import {
  Building2,
  Landmark,
  ShieldCheck,
  Wallet,
  ChartNoAxesCombined,
  TrendingUp,
  Headset,
  Users,
  Search,
  ClipboardCheck,
  Handshake,
  ArrowRight,
  CheckCircle2,
  HardHat,
  House,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Services.css";

const industries = [
  {
    name: "NBFC",
    icon: Building2,
    description:
      "We help Non-Banking Financial Companies identify skilled professionals for lending operations, credit management, customer relationships, financial analysis, and business development roles. Our focus is on connecting organizations with talent that supports their operational efficiency and growth.",
  },
  {
    name: "Banking",
    icon: Landmark,
    description:
      "We support banking institutions in finding professionals across retail banking, relationship management, branch operations, customer service, sales, and financial services. We focus on matching candidates' experience and capabilities with the specific requirements of banking organizations.",
  },
  {
    name: "Insurance",
    icon: ShieldCheck,
    description:
      "We assist insurance organizations in connecting with suitable talent for insurance sales, policy servicing, claims support, customer relationship management, and operational roles. Our recruitment approach focuses on identifying individuals who can contribute to service quality and business objectives.",
  },
  {
    name: "Finance",
    icon: Wallet,
    description:
      "We help finance-sector organizations find professionals for financial operations, accounting, financial planning, analysis, sales, and customer support. We aim to connect businesses with individuals whose professional skills and experience align with their evolving financial requirements.",
  },
  {
    name: "Asset Management",
    icon: ChartNoAxesCombined,
    description:
      "We support asset management companies in identifying professionals for investment operations, portfolio support, financial research, client servicing, and relationship management. Our approach emphasizes finding candidates with relevant knowledge and capabilities to support organizational goals.",
  },
  {
    name: "Broking",
    icon: TrendingUp,
    description:
      "We help broking firms connect with professionals across equity operations, trading support, sales, dealer roles, customer relationships, and business development. We understand the importance of industry knowledge, communication, and operational skills in this fast-moving sector.",
  },
  {
    name: "BPO",
    icon: Headset,
    description:
      "We provide recruitment support to Business Process Outsourcing organizations looking for professionals in customer support, technical assistance, voice and non-voice processes, operations, and team coordination. We focus on helping businesses meet their workforce requirements efficiently.",
  },
  {
    name: "Construction",
    icon: HardHat,
    description:
      "We support construction companies in finding professionals for project coordination, site supervision, civil engineering, safety management, quality control, and construction operations. We aim to connect organizations with capable individuals who can contribute to project execution and infrastructure development.",
  },
  {
    name: "Real Estate",
    icon: House,
    description:
      "We help real estate organizations identify suitable professionals for property sales, business development, customer relationships, property management, site coordination, and operations. Our focus is on connecting businesses with individuals who understand customer needs and the demands of the real estate industry.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "We begin by understanding the organization's hiring needs, expectations, and role requirements.",
    icon: Users,
  },
  {
    number: "02",
    title: "Source Candidates",
    description:
      "We identify potential candidates whose experience and capabilities align with the requirements.",
    icon: Search,
  },
  {
    number: "03",
    title: "Screen and Shortlist",
    description:
      "Potential candidates are reviewed to help identify suitable profiles for further consideration.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Coordinate Hiring",
    description:
      "We support the hiring process by coordinating communication between organizations and candidates.",
    icon: Handshake,
  },
];

const strengths = [
  "Industry-focused recruitment approach",
  "Focus on candidate and role alignment",
  "Responsive hiring coordination",
  "Building long-term client relationships",
];

function Services() {
  return (
    <div className="services-page">
      <main>
        {/* HERO */}
        <section className="services-hero">
          <div className="services-hero-content">
            <p className="services-kicker">
              <span />
              WHAT WE DO
            </p>

            <h1>
              Recruitment Solutions
              <br />
              <span>Across Multiple Industries.</span>
            </h1>

            <p>
              We support organizations across multiple industries by
              connecting them with talent that aligns with their hiring
              requirements and business goals.
            </p>

            <a href="#industry-solutions" className="services-button">
              Explore Our Services
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="services-hero-decoration">
            <div className="services-decoration-circle">
              <Users size={100} strokeWidth={1} />
            </div>
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS */}
        <section
          className="services-section industry-solutions"
          id="industry-solutions"
        >
          <div className="services-section-heading">
            <p className="services-kicker">
              <span />
              OUR INDUSTRY EXPERTISE
            </p>

            <h2>
              Recruitment Across
              <br />
              <span>Different Industries.</span>
            </h2>

            <p>
              Every industry has different workforce requirements. We
              understand these differences and focus on connecting
              organizations with professionals whose skills, experience,
              and capabilities match their business needs.
            </p>
          </div>

          <div className="services-industry-grid">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <article
                  className="services-industry-card"
                  key={industry.name}
                  style={{ "--card-index": index }}
                >
                  <div className="services-card-icon">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  <h3>{industry.name}</h3>

                  <p>{industry.description}</p>

                  <div className="services-card-bottom">
                    <span>Industry Focus</span>
                    <ArrowRight size={17} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* RECRUITMENT PROCESS */}
        <section className="services-process-section">
          <div className="services-section-heading">
            <p className="services-kicker">
              <span />
              HOW WE WORK
            </p>

            <h2>
              A Clear Approach to
              <br />
              <span>Recruitment.</span>
            </h2>

            <p>
              We follow a structured approach to understand hiring needs,
              identify suitable candidates, and coordinate the recruitment
              process.
            </p>
          </div>

          <div className="services-process-grid">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="services-process-card" key={step.number}>
                  <div className="services-process-top">
                    <span>{step.number}</span>
                    <Icon size={28} strokeWidth={1.7} />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="services-why-section">
          <div className="services-why-content">
            <p className="services-kicker">
              <span />
              WHY BLUE FEATHER
            </p>

            <h2>
              Recruitment with
              <br />
              <span>People at the Centre.</span>
            </h2>

            <p className="services-why-description">
              We believe successful recruitment starts with understanding
              people, business requirements, and the value of meaningful
              professional connections.
            </p>

            <div className="services-strength-list">
              {strengths.map((strength) => (
                <div className="services-strength-item" key={strength}>
                  <CheckCircle2 size={20} />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="services-why-visual">
            <div className="services-why-icon">
              <Handshake size={100} strokeWidth={1.1} />
            </div>
            <p>People. Purpose. Possibilities.</p>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="services-contact">
          <div>
            <p className="services-kicker">LET'S CONNECT</p>

            <h2>
              Looking for the
              <br />
              <span>Right Talent?</span>
            </h2>

            <p>
              Let's discuss your recruitment requirements and explore how
              we can work together.
            </p>
          </div>

          <Link to="/contact" className="services-button services-button-light">
            CONTACT OUR TEAM
            <ArrowRight size={17} />
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="services-footer">
        <Link to="/" className="services-footer-brand">
          BLUE FEATHER
          <span>Staffing Solutions LLP</span>
        </Link>

        <p>Connecting people with opportunities.</p>

        <span>
          © {new Date().getFullYear()} Blue Feather Staffing Solutions LLP. All
          rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default Services;