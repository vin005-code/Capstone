import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">AlgoPilot</h2>

      <div className="navbar-links">
        <a href="#">Dashboard</a>
        <a href="#">Problems</a>
        <a href="#">Progress</a>
      </div>

      <button className="profile-button">Profile</button>
    </nav>
  )
}

export default Navbar