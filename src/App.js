import logo from './asset/logokoding1.jpg';
import './App.css';
import LoginButton from './componen/button';
import JsFundamental from './componen/jsFundamental';
import { JsEs6 } from './componen/JsEs6';
import { Assignment2 } from './componen/assignment2';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row1">
          <img className="logoKoding" src={logo} c alt="logo" />
          <div className="logoButton">
            <LoginButton />
          </div>
        </div>
        <h2>Selamat Datang di React App pertama saya</h2>
        <i>Copyright 2022</i>
      </div>
      <div>
        <JsFundamental />
        <JsEs6 />
        <Assignment2 />
      </div>
    </div>
  );
}

export default App;
