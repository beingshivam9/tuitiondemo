import { Link } from "react-router-dom"
import { FaHome, FaBook, FaPhone } from "react-icons/fa"

function Navbar() {
  return (
    <div style={navStyle}>
      <Link to="/" style={linkStyle}>
        <FaHome size={22} />
        <span>Home</span>
      </Link>

      <Link to="/courses" style={linkStyle}>
        <FaBook size={22} />
        <span>Courses</span>
      </Link>

      <Link to="/contact" style={linkStyle}>
        <FaPhone size={22} />
        <span>Contact</span>
      </Link>
    </div>
  )
}

const navStyle = {
  position: "fixed",
  bottom: "0",
  left: "0",
  right: "0",
  height: "60px",
  background: "#ffffff",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  borderTop: "1px solid #ddd",
  boxShadow: "0 -2px 10px rgba(0,0,0,0.1)"
}

const linkStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "none",
  color: "#333",
  fontSize: "12px"
}

export default Navbar