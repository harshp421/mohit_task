import { useState } from "react";
import Logo from "../icons/Logo"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Register from "./auth/Register";
import { ModalHeader } from "react-bootstrap";
import Login from "./auth/Login";

const Header = ({ authState, setAuthState }: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar">
      <div className="container-fluid d-flex justify-content-between  align-items-center ">
        <a className="navbar-brand">
          <Logo />
        </a>
        <form className="d-flex" role="search">
          <input style={{ width: "500px", borderRadius: '20px' }} className="form-control me-2 " type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />

        </form>
        <p className="mb-0 text-color" onClick={handleShow}>Create Account. <span className="text-primary">It's Free !</span></p>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"

      >
        <ModalHeader className="alert  alert-success">
           
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now
          <div  className="ps-6" onClick={handleClose}>
           <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_2255)">
              <path d="M14 2.33331C7.54838 2.33331 2.33337 7.54831 2.33337 14C2.33337 20.4516 7.54838 25.6666 14 25.6666C20.4517 25.6666 25.6667 20.4516 25.6667 14C25.6667 7.54831 20.4517 2.33331 14 2.33331ZM19.8334 18.1883L18.1884 19.8333L14 15.645L9.81171 19.8333L8.16671 18.1883L12.355 14L8.16671 9.81164L9.81171 8.16665L14 12.355L18.1884 8.16665L19.8334 9.81164L15.645 14L19.8334 18.1883Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1_2255">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>

           </div>
        </ModalHeader>
        <Modal.Body>
          {
            authState === "Login" ? <Login setAuthState={setAuthState} /> : <Register setAuthState={setAuthState} />
          }
        </Modal.Body>

      </Modal>
    </nav>
  )
}

export default Header