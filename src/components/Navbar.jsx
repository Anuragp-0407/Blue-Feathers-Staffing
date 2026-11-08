import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/", end: true },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="main-header">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/assets/blue-feathers-logo.png"
            alt="Blue Feathers Staffing Solutions"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Contact Button */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "nav-contact nav-contact-active"
                : "nav-contact"
            }
            onClick={closeMenu}
          >
            Contact Us
            <ArrowUpRight size={16} />
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;