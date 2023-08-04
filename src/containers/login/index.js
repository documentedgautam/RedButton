
    import React, { useState } from 'react';
    import LoginView from "../../views/login";

const Login = () => {
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [activeButton, setActiveButton] = useState("login"); // 'button1' is the default active button

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleActiveButton = (button) => {
    setActiveButton(button);
  };

  return <LoginView 
  expanded={expanded}
  inputValue={inputValue}
  activeButton={activeButton}
  handleButtonClick={handleButtonClick}
  handleInputChange={handleInputChange}
  handleActiveButton={handleActiveButton}/>
};

export default Login;