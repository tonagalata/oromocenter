import React from "react";

const Footer = props => {
  return (
    <>
      <footer style={{ backgroundColor: "#6e9bee" }}>
        <p style={{marginLeft: '1rem', fontSize: '1rem', fontWeight: '600', display: 'flex', justifyContent: 'center', color: '#fff'}}>&copy; {new Date().getFullYear()} Oromo Resource Center</p>
      </footer>
    </>
  );
};

export default Footer;
