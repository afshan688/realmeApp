import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "black",
        color: "white",
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "1rem",
        textAlign: "left",
      }}
    >
      {/* Column 1 */}
      <div>
        <h3>Recommonded</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>realme C75</li>
          <li>realme 50</li>
          <li>realme pro</li>
          <li>realme C75</li>
          <li>realme 50</li>
          <li>realme pro</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3>Support</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>FAQ</li>
          <li>Trouble shooting</li>
          <li></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3>About realme</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>FAQs</li>
          <li>Help Center</li>
          <li>Feedback</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h3>Contact realme</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Whatsapp</li>
          <li>Terms of Service</li>
          <li>Cookie Policy</li>
        </ul>
      </div>

      {/* Column 5 (Social Links) */}
      <div>
        <h2>Contact links</h2>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "1rem" }}>
          <li>
          <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Twitter
            </a>
            
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
