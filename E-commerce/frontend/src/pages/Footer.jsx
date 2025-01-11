import { motion} from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../CSS/Footer.css'



const Footer = () =>(
<footer className="footer">
         <div className="footer-content">
          <motion.div className="footer-section">
            <h4>About ShopHub</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
             <li><a href="#">Press Releases</a></li>
            <li><a href="#">Corporate Information</a></li>
        </ul>
         </motion.div>

           <motion.div className="footer-section">
           <h4>Help & Support</h4>
          <ul>
              <li><a href="#">Customer Service</a></li>
               <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact Us</a></li>
             </ul>
          </motion.div>

           <motion.div className="footer-section">
          <h4>Policy</h4>
           <ul>
             <li><a href="#">Return Policy</a></li>
             <li><a href="#">Terms of Use</a></li>
             <li><a href="#">Security</a></li>
               <li><a href="#">Privacy</a></li>
            </ul>
           </motion.div>

           <motion.div className="footer-section">
           <h4>Connect With Us</h4>
             <div className="social-links">
             <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
               <a href="#"><FaLinkedinIn /></a>
             </div>
           </motion.div>
         </div>

         <div className="footer-bottom">
           <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
       </footer>
  

);

export default Footer;