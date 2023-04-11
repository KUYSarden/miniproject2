import React from "react";
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';


const Footer=()=>{
    return (




       <div className="footer-body">
         <div className="footer">
            <div className="sb__footer-links_div">
                <h4>For Business</h4>
                <a href="/employer">
                       <p>Employer</p>
                       </a>
                       <a href="/healthplan">
                        <p>Health Plan</p>
                          </a>
                        <a href="/individual">
                        <p>Individual</p>
                       </a>
            </div>

            <div className="sb__footer-links_div">
                <h4>Resources</h4>
                <a href="/resource">
                         <p>Resource Center</p>
                   </a>
                     <a href="/resource">
                         <p>Testimonials</p>
                     </a>
                     <a href="/resource">
                         <p>STV</p>
                     </a>
            </div>

            <div className="sb__footer-links_div">
                <h4>Company</h4>
                <a href="/About">
                     <p>About</p>
                 </a>
                 <a href="/press">
                     <p>Press</p>
                 </a>
                 <a href="/career">
                     <p>Career</p>
                     <a href="/Contact">
                         <p>Contact</p>
                     </a>
                 </a>
            </div>

            <div className="sb__footer-links_div">
                <h4>Coming Soon on</h4>
                <div className="social_media">
                    <p><img src={fb} alt="" /></p>
                    <p><img src={twitter} alt="" /></p>
                     <p><img src={linkedin} alt="" /></p>
                     <p><img src={instagram} alt="" /></p>
                 </div>
             </div>

         <div>
            
         </div>
 </div>
<hr />
 <div className="sb__footer-below">
         <div className="sb__footer-copyright">
             <p>
            @ {new Date().getFullYear()} CodeInn. All Right Reserved.
             </p>
         </div>
         <div className="sb__footer-below-links">
                 <a href="/terms"><div><p>Terms and Conditions</p></div></a>
                 <a href="/privacy"><div><p>Privacy</p></div></a>
                 <a href="/security"><div><p>Security</p></div></a>
                 <a href="/cookie"><div><p>Cookies and Declaration</p></div></a>
         </div>
 </div>

 
       </div>
         
       















//         <div className="footer">
//             <div className="sb__footer section__padding">
//                 <div className="sb__footer-links">
//                     <div className="sb__footer-links-div">
//                      <h4>For Business</h4>
//                       <a href="/employer">
//                         <p>Employer</p>
//                      </a>
//                         <a href="/healthplan">
//                         <p>Health Plan</p>
//                          </a>
//                         <a href="/individual">
//                         <p>Individual</p>
//                          </a>
//                 </div>
//                 <div className="sb__footer-links_div">
//                     <h4>Resources</h4>
//                     <a href="/resource">
//                         <p>Resource Center</p>
//                     </a>
//                     <a href="/resource">
//                         <p>Testimonials</p>
//                     </a>
//                     <a href="/resource">
//                         <p>STV</p>
//                     </a>
//                 </div>
//                 <div className="sb__footer-links-div">
//                     <h4>Partners</h4>
//                     <a href="/Employer">
//                     <p>Swing Tech</p>
//                 </a>
//             </div>
//             <div className="sb__footer-links_div">
//                 <h4>Company</h4>
//                 <a href="/About">
//                     <p>About</p>
//                 </a>
//                 <a href="/press">
//                     <p>Press</p>
//                 </a>
//                 <a href="/career">
//                     <p>Career</p>
//                     <a href="/Contact">
//                         <p>Contact</p>
//                     </a>
//                 </a>
//             <div className="sb_footer-links_div">
//                 <h4>Coming Soon on</h4>
//                 <div className="social media">
//                     <p><img src={fb} alt="" /></p>
//                     <p><img src={twitter} alt="" /></p>
//                     <p><img src={linkedin} alt="" /></p>
//                     <p><img src={instagram} alt="" /></p>
//                 </div>
//             </div>
//         </div>
//         <div className="sb__footer-below">
//         <div className="sb__footer-copyright">
//             <p>
//             @ {new Date().getFullYear()} CodeInn. All Right Reserved.
//             </p>
//         </div>
//         <div className="sb__footer-below-links">
//                 <a href="/terms"><div><p>Terms and Conditions</p></div></a>
//                 <a href="/privacy"><div><p>Privacy</p></div></a>
//                 <a href="/security"><div><p>Security</p></div></a>
//                 <a href="/cookie"><div><p>Cookies and Declaration</p></div></a>
//         </div>
// </div>
// </div>
//         </div>
//     </div>
    )
}

export default Footer;