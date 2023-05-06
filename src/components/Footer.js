import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icongit.svg";
import navIcon3 from '../assets/img/nav-icongmail.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* <a href="#"><img src={navIcon1} alt="Icon" /></a> */}
              <a href="https://github.com/LordMaos"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto: samoryjoe@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>© CREATED BY TANKAM Samory</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
