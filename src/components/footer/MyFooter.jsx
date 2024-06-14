import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';

export function MyFooter() {
  return (
   <footer className="bg-dark text-white mt-4">
   <Container>
     <Row className="pt-4 pb-2">
       <Col md={4}>
         <h5>About Us</h5>
         <p>
           We are dedicated to providing the best products and services. Your satisfaction is our priority.
         </p>
       </Col>
       <Col md={4}>
         <h5>Contact</h5>
         <p>Email: support@example.com</p>
         <p>Phone: +1 234 567 890</p>
         <p>Address: 123 Main Street, Anytown, USA</p>
       </Col>
       <Col md={4}>
         <h5>Follow Us</h5>
         <ul className="list-unstyled d-flex">
           <li className="me-3">
             <a href="#" className="text-white">
               {/* <FaFacebookF size="1.5em" /> */}
             </a>
           </li>
           <li className="me-3">
             <a href="#" className="text-white">
               {/* <FaTwitter size="1.5em" /> */}
             </a>
           </li>
           <li className="me-3">
             <a href="#" className="text-white">
               {/* <FaInstagram size="1.5em" /> */}
             </a>
           </li>
           <li className="me-3">
             <a href="#" className="text-white">
               {/* <FaLinkedin size="1.5em" /> */}
             </a>
           </li>
         </ul>
       </Col>
     </Row>
     <Row className="py-2">
       <Col md={4}>
         <h5>Quick Links</h5>
         <ul className="list-unstyled">
           <li><a href="#" className="text-white">Home</a></li>
           <li><a href="#" className="text-white">Products</a></li>
           <li><a href="#" className="text-white">Services</a></li>
           <li><a href="#" className="text-white">Contact Us</a></li>
         </ul>
       </Col>
       <Col md={4}>
         <h5>Legal</h5>
         <ul className="list-unstyled">
           <li><a href="#" className="text-white">Privacy Policy</a></li>
           <li><a href="#" className="text-white">Terms of Service</a></li>
           <li><a href="#" className="text-white">Disclaimer</a></li>
         </ul>
       </Col>
       <Col md={4}>
         <h5>Newsletter</h5>
         <p>Subscribe to our newsletter to get the latest updates and offers.</p>
         <form>
           <div className="input-group mb-3">
             <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
             <button className="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
           </div>
         </form>
       </Col>
     </Row>
     <Row>
       <Col className="text-center py-3">
         &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
       </Col>
     </Row>
   </Container>
 </footer>
);
}
