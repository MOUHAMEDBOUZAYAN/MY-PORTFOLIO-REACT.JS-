import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=61566829267014" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/siimo.bz9?igsh=MWhqZDUwcXduZTJpcQ==" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/MOUHAMEDBOUZAYAN" target="_blank"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved MOUHAMED BOUZAYAN</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
