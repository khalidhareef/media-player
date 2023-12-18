import React from "react";
import Landingpage from "../pages/Landingpage";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            
            <div className="footer d-flex align-items-center justify-content-evenly w-100">
                <div style={{width:'400px'}}>
            <h4 href="#home" style={{ color: 'white', fontSize: '25px' }}>
                <i class="fa-solid fa-video text-warning me-3"></i>
                Media Player</h4>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente 
                 commodi. Numquam nam harum saepe maxime. a quas doloresbr debitis.
                Quidem, facilis cum. Molestiae saepe exercitationem quisquam aspernnemo </h6>
            </div>
            <div>

                <h4>Links</h4>
                <Link to ={'/'} style={{textDecoration:'none'}}>
                <h6>Landing Page</h6>
                </Link>
                <Link to ={'/home'} style={{textDecoration:'none'}}>
                <h6>Home Page</h6>
                </Link>
                <Link to = {'/watch'} style={{textDecoration:'none'}}>
                <h6>History Page</h6>
                </Link>
            </div>
            <div>
                <h4>Guides</h4>
                <h6>React</h6>
                <h6>React Bootstrap</h6>
                <h6>Bootswatch</h6>
            </div>
            <div >
                <h4>Contact Us</h4>
                <div className="d-flex">
                <input type="text" placeholder="Enter your Email" className="form-control" />
                <button className="btn btn-warning ms-3">Subscribe</button>
                </div>
                <div className="d-flex mt-4 justify-content-evenly fs-3 ">
                
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
           
            </div>
            </div>
            </div>
            <div className="text-center">
                <p>Copyright &#169; 2023. Media player built with react</p>
            </div>
        </>
    )
}
export default Footer;