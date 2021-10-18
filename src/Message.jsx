import logo from './logo.svg';
import './Message.css';

function Message(props) {
  return (
    <div className="Message">
      <header className="Message-header">
        <img src={logo} className="Message-logo" alt="logo" />
        <p>
          {props.text}
        </p>
        <a
          className="Message-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Message;
