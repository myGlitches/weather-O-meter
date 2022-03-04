import logo from "../assets/weatherLogo.png"

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarA">
        <div className="logo">
          <img className="logoImage" src={logo} alt="Logo" />
        </div>
        <div className="title">Weather-O-Meter</div>
      </div>
      <div className="navbarB">
        <div className="homeDiv">
          <button className="homeBtn">Home</button>
        </div>
        <div className="aboutDiv">
          <button className="aboutBtn">About</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
