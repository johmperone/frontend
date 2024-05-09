// ModalPage1.tsx

import React, { useRef, useState, useEffect } from 'react';

const Game: React.FC = () => {
  const [activeDiv, setActiveDiv] = useState<number | null>(null);

  const openDiv = (divNumber: number) => {
    setActiveDiv(divNumber);
  };
  
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const secretQuestionRef = useRef<HTMLInputElement>(null);

  const handleReset = () => {
    if (loginRef.current) loginRef.current.value = '';
    if (passwordRef.current) passwordRef.current.value = '';
    if (passwordCRef.current) passwordCRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
    if (secretQuestionRef.current) secretQuestionRef.current.value = '';
  };




  useEffect(() => {
    openDiv(1); // Open Div 1 when component mounts
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <div className="modal-content">
      
      <div className="navbargame-container">
      <button onClick={() => openDiv(1)}>
        REGSTER {activeDiv === 1 && "⬇"}
      </button>
      <button  onClick={() => openDiv(2)}>RECOVERY PASSWORD {activeDiv === 2 && "⬇"}</button>
      <button  onClick={() => openDiv(3)}>RECOVERY EMAIL {activeDiv === 3 && "⬇"}</button>
    </div>
      {activeDiv === 1 && (
        <div className="modal-div">
          
          <div className="register-container">
          <h2>Register Account </h2>
      <div className="form-column">
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" name="login" ref={loginRef} />
      </div>
      <div className="form-column">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" ref={passwordRef} />
      </div>
      <div className="form-column">
        <label htmlFor="password">Confirm Password:</label>
        <input type="password" id="password" name="password" ref={passwordCRef} />
      </div>
      <div className="form-column">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={emailRef}/>
      </div>
      <div className="form-column">
        <label htmlFor="question">Secret Question:</label>
        <input type="text" id="question" name="question" ref={secretQuestionRef} />
      </div>
      <div className="form-column">
        <label htmlFor="verify">Verify code:</label>
        <input type="text" id="question" name="verify" />
      </div>
      <div className="form-row">
  <button type="submit">Register</button>
  <button type="button" onClick={handleReset}>Reset</button>
</div>
<br />
<p>
Security Tips:<br />
 
Please DO NOT share your account information with others.<br />
Only accessing Weapons Of War Awakening websites / game from computers that you trust.<br />
Not using your Weapons Of War Awakening account / password for other games or websites.<br />
<br />
Having problem with your register:<br />
If you have any questions concerning account register, please feel 
free to contact us via the mail support@wowawakening.com<br />
</p>
    </div> 
    
    </div>
      )}

      {activeDiv === 2 && (
        <div className="modal-div">
          
          <div className="register-container">
          <h2>Recovery Password </h2>
      <div className="form-column">
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" name="login" ref={loginRef} />
      </div>
      <div className="form-column">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" ref={passwordRef} />
      </div>
      <div className="form-column">
        <label htmlFor="password">Confirm Password:</label>
        <input type="password" id="password" name="password" ref={passwordCRef} />
      </div>
      <div className="form-column">
        <label htmlFor="question">Secret Question:</label>
        <input type="text" id="question" name="question" ref={secretQuestionRef} />
      </div>
      <div className="form-column">
        <label htmlFor="verify">Verify code:</label>
        <input type="text" id="question" name="verify" />
      </div>
      <div className="form-row">
  <button type="submit">Recovery</button>

</div>
<br />
<p>
Security Tips:<br />
 
Please DO NOT share your account information with others.<br />
Only accessing Weapons Of War Awakening websites / game from computers that you trust.<br />
Not using your Weapons Of War Awakening account / password for other games or websites.<br />
<br />
Having problem with your register:<br />
If you have any questions concerning account register, please feel 
free to contact us via the mail support@wowawakening.com<br />
</p>
    </div> 
      </div>
      )}

{activeDiv === 3 && (
        <div className="modal-div">
          
          <div className="register-container">
          <h2>Recovery Email </h2>
      <div className="form-column">
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" name="login" ref={loginRef} />
      </div>

      <div className="form-column">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={emailRef}/>
      </div>
      <div className="form-column">
        <label htmlFor="question">Secret Question:</label>
        <input type="text" id="question" name="question" ref={secretQuestionRef} />
      </div>
      <div className="form-column">
        <label htmlFor="verify">Verify code:</label>
        <input type="text" id="question" name="verify" />
      </div>
      <div className="form-row">
  <button type="submit">Recovery</button>

</div>
<br />
<p>
Security Tips:<br />
 
Please DO NOT share your account information with others.<br />
Only accessing Weapons Of War Awakening websites / game from computers that you trust.<br />
Not using your Weapons Of War Awakening account / password for other games or websites.<br />
<br />
Having problem with your register:<br />
If you have any questions concerning account register, please feel 
free to contact us via the mail support@wowawakening.com<br />
</p>
    </div> 
      </div>
      )}
    </div>
  );
}

export default Game;
