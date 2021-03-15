import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import user from "../../assets/signuplogo.png";
import "./Signup.css";


function Signup() {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  const [Error, setError] = useState(false);

  const history = useHistory();

  const navigateto = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      UserName === "" ||
      Email === "" ||
      Password === "" ||
      cPassword === "" ||
      Password !== cPassword
    ) {
      setError(true);
    } else {
      var data = {
        email: Email,
        user_name: UserName,
        password: Password,
      };
    }
  };
  return (
    <div className="UpperBox">
      <div className="BoxShadow">
        <Col sm={1}></Col>

        <Col sm={4}>
          <h1 className="imageheading">Signup</h1>
          <Image src={user} className="image" />
        </Col>

        <Col sm={1}></Col>
        <Row>
          <Col sm={5}>
            {Error === true ? (
              <p className="error">Please enter the data correctly</p>
            ) : null}
            <div className="upperinput">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  UserName
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={UserName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>

            <div className="otherinput">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Email
                </span>
              </div>
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                value={Email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="otherinput">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Password
                </span>
              </div>
              <input
                type="Password"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                value={Password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="otherinput">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Confirm Password
                </span>
              </div>
              <input
                type="Password"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                required="true"
                value={cPassword}
                onChange={(event) => setcPassword(event.target.value)}
              />
            </div>

            <div className="logindiv">
              <button className="login" onClick={handleSubmit}>
                Signup
              </button>
            </div>
            <h5 className="createAccount" onClick={() => navigateto()}>
              Already have an account?
            </h5>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Signup;
