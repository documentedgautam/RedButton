import Header from "../../components/header";


const LoginView = (props) => {
    const {
      expanded,
      inputValue,
      activeButton,
      handleButtonClick,
      handleInputChange,
      handleActiveButton,
    } = props;

    return (
      <div className="login-bg">
        <div style={{ background: "#000000a8", height: "100vh" }}>
          <Header />
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-6">
                <h4 className="text-light">
                  <span className="text-danger">RED</span> BUTTON
                </h4>
                <p className="text-light">
                  One step solution for improving your mental health and make
                  you feel better and happy
                </p>
                <h4 className="text-light">
                  What issues are you dealing with?
                </h4>
                <div
                  className="btn-group option-list"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck1"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary options-btn"
                    htmlFor="btncheck1"
                  >
                    Anxiety
                  </label>

                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary options-btn"
                    htmlFor="btncheck2"
                  >
                    Depression
                  </label>

                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary options-btn"
                    htmlFor="btncheck3"
                  >
                    Loneliness
                  </label>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck4"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary options-btn"
                    htmlFor="btncheck4"
                  >
                    Trauma
                  </label>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck5"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary options-btn"
                    htmlFor="btncheck5"
                  >
                    Stress
                  </label>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck6"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary options-btn"
                    htmlFor="btncheck6"
                  >
                    Work Load
                  </label>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck7"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary options-btn"
                    htmlFor="btncheck7"
                  >
                    Bad Mood
                  </label>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck8"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary options-btn"
                    htmlFor="btncheck8"
                  >
                    Heart Break
                  </label>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck9"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary options-btn"
                    htmlFor="btncheck9"
                  >
                    Loss & Grief
                  </label>
                </div>
                <div className="others">
                  <button
                    className="btn btn-outline-primary options-btn"
                    onClick={handleButtonClick}
                  >
                    Others
                  </button>
                  {expanded && (
                    <div>
                      <input
                        type="text"
                        className="underline-input"
                        id="inputPassword"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                  <button className="transparent-btn chat-icon">
                    <i class="fa-brands fa-rocketchat">
                      <span style={{ fontSize: "10px" }}>Chat</span>
                    </i>
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tab-center">
                      <button
                        className={
                          activeButton === "signup"
                            ? "left-btn-active"
                            : "left-btn-inactive text-light"
                        }
                        onClick={() => handleActiveButton("signup")}
                      >
                        SIGN UP
                      </button>
                      <button
                        className={
                          activeButton === "login"
                            ? "right-btn-active"
                            : "right-btn-inactive text-light"
                        }
                        onClick={() => handleActiveButton("login")}
                      >
                        LOGIN
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className={
                        activeButton === "signup" ? "signup" : "d-none"
                      }
                    >
                      <form>
                        <div className="mb-3 row">
                          <label
                            htmlFor="name"
                            className="col-sm-2 col-form-label text-light"
                          >
                            Name
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control text-light"
                              id="name"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="email"
                            className="col-sm-2 col-form-label text-light"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control text-light"
                              id="email"
                              placeholder="email@example.com"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label text-light"
                          >
                            New Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="confirmInpPswd"
                            className="col-sm-2 col-form-label text-light"
                          >
                            Confirm Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              className="form-control"
                              id="confirmInpPswd"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn blogs-round">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className={
                        activeButton === "login" ? "login" : "d-none"
                      }
                    >
                      <form>
                        <div className="mb-3 row">
                          <label
                            htmlFor="name"
                            className="col-sm-2 col-form-label text-light"
                          >
                            Name
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control text-light"
                              id="name"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="email"
                            className="col-sm-2 col-form-label text-light"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control text-light"
                              id="email"
                              placeholder="email@example.com"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label text-light"
                          >
                            Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn blogs-round">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LoginView;