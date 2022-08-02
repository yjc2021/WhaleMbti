import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import styles from "../home.module.css";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" expand="md" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Navbar.Toggle
            className={styles.toggleButton}
            aria-controls="offcanvasNavbar-expand-lg"
          >
            <FontAwesomeIcon icon={solid("user")} />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            style={{ width: "60vw" }}
            placement="end"
          >
            <Offcanvas.Header
              style={{
                height: "40vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="d-flex d-sm-none"
            >
              <div
                onClick={() => navigate("/login")}
                style={{
                  width: "20vw",
                  height: "20vw",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="p-3 fluid"
              >
                <FontAwesomeIcon
                  icon={solid("user")}
                  style={{ width: "5vw", height: "5vw" }}
                />
              </div>
              <span className="mt-3">로그인이 필요합니다</span>
            </Offcanvas.Header>
            <Offcanvas.Body className="flex-column align-items-center">
              <Nav className="d-flex align-items-center">
                <Nav.Link href="/user/history">테스트 기록 보기</Nav.Link>
                <Nav.Link href="/notify">공지사항</Nav.Link>
                <Nav.Link href="/user/settings">설정</Nav.Link>
                <Navbar.Text>1,234,567 </Navbar.Text>
                <Nav.Link href="/login" className={`d-none d-sm-flex`}>
                  <div className={`d-flex-column`}>
                    <div className={styles.toggleButton}>
                      <FontAwesomeIcon
                        icon={solid("user")}
                        style={{ width: "1.2rem", height: "1.2rem" }}
                      />
                    </div>
                    <div style={{ textAlign: "center", fontSize: "0.5rem" }}>
                      로그인
                    </div>
                  </div>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
