import React from "react";
import "./ChatUI.scss";

export default function ChatUI({ messages, onSend, header }) {
  const [input, setInput] = React.useState("");
  const messagesRef = React.useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  React.useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-ui">
      {header ? <div className="chat-ui__header">{header}</div> : null}
      <div className="chat-ui__messages" ref={messagesRef}>
        {messages.map((msg, i) => (
          <article key={i} className={`chat-ui__message chat-ui__message--${msg.sender}`}>
            <div className="chat-ui__message-label">
              {msg.sender === "hacker" ? "Interpol" : "Jij"}
            </div>
            <div className="chat-ui__message-body">{msg.text}</div>
          </article>
        ))}
      </div>
      <form className="chat-ui__input" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Typ je antwoord..."
          autoFocus
        />
        <button type="submit">Verstuur</button>
      </form>
    </div>
  );
}
