import "./Footer.css"
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa"
import ReactCountryFlag from "react-country-flag"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* COL 1 */}
        <div className="footer-col">
          <h2 className="footer-logo">DevHiep</h2>

          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaPhoneAlt /></a>
            <a href="#"><FaEnvelope /></a>
          </div>

          <div className="footer-location">
            <ReactCountryFlag
              svg
              countryCode="VN"
              className="vn-flag"
            />
            <span>Việt Nam</span>
          </div>
        </div>

        {/* COL 2 */}
        <div className="footer-col">
          <h4>Website thành viên</h4>
          <ul>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog cá nhân</a></li>
            <li><a href="#">GitHub Pages</a></li>
          </ul>
        </div>

        {/* COL 3 */}
        <div className="footer-col">
          <h4>Hợp tác & Liên hệ</h4>
          <p><FaPhoneAlt /> 0985.xxx.xxx</p>
          <p><FaEnvelope /> luu.........@gmail.com</p>
        </div>

        {/* COL 4 */}
        <div className="footer-col qr-col">
          <h4>QR Connect</h4>
          <img src="/server/uploads/QR.jpg" alt="QR Connect" />
          <span>Scan to connect</span>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 DevHiep. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
