import { Fragment, useEffect, useState } from "react";

const Nav = ({ close, trigger }) => {
  const [toggle_, setToggle_] = useState("");
  useEffect(() => {
    !trigger && setToggle_("");
    setTimeout(() => {
      trigger ? setToggle_("ready") : setToggle_("");
    }, 2000);
  }, [trigger]);

  return (
    <Fragment>
      <a href="#" className="resumo_fn_nav_overlay" onClick={() => close()} />
      <div className="resumo_fn_navigation">
        <a href="#" className="closer" onClick={() => close()} />
        {/* Navigation Content */}
        <div className="nav_in">
          <nav id="nav">
            <h3 className="label">Menu</h3>
            <ul>
              <li style={{ transitionDelay: !trigger ? "0ms" : "700ms" }}>
                <a href="#home" onClick={() => close()}>
                  Home
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "900ms" }}>
                <a onClick={() => close()} href="#about">
                  About
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1100ms" }}>
                <a onClick={() => close()} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1300ms" }}>
                <a onClick={() => close()} href="#services">
                  Services
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1900ms" }}>
                <a onClick={() => close()} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className={`nav_footer ${toggle_}`}>
            <div className="social">
              <ul>
                <li>
                  <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/bob-le/" target="_blank">
                    <i style={{fontSize:"24px"}} className="fa fa-linkedin-square"></i>
                  </a>
                </li>
                <li>
                  <a style={{textDecoration:"none"}} href="mailto:bob.hoangle@gmail.com">
                    <i style={{fontSize:"24px"}} className="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a style={{textDecoration:"none"}} href="https://www.facebook.com/kaaabob/" target="_blank">
                    <i style={{fontSize:"24px"}} className="fa fa-facebook-official"></i>
                  </a>
                </li>
                <li>
                  <a style={{textDecoration:"none"}} href="https://instagram.com/onlyboble" target="_blank">
                    <i style={{fontSize:"24px"}} className="fa fa-instagram	"></i>
                  </a>
                </li>
                <li>
                  <a style={{textDecoration:"none"}} href="https://github.com/boba1007" target="_blank">
                    <i style={{fontSize:"24px"}} className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              {" "}
              Developed by &nbsp;
              <a
                href="https://stellarcapture.com/"
                target="_blank"
                rel="noreferrer"
              >
                Stellar Capture
              </a>
            </div>
          </div>
        </div>

        {/* /Navigation Content */}
      </div>
    </Fragment>
  );
};

export default Nav;
