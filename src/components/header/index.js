import React from "react";

const Header = () => {
    return (
      <>
        <header className="login-header">
          <div className="container-fluid p-2">
            <div className="col-md-12">
              <div className="d-flex justify-content-between">
                <img
                  src="/assets/images/redButtonLogo.jpeg"
                  alt="RED BUTTON"
                  className="logo"
                />
                {/* <span
                  className="text-danger text-bold"
                  style={{fontWeight: "bold",
                fontSize:"20px"}}
                >
                  RED BUTTON
                </span> */}
                <button className="btn blogs-round">BLOGS</button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
};

export default Header;