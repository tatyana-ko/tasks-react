import { useState } from "react";
import "./Greeting.css";

export default function Greeting() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(() => setName(event.target.value));
  };

  return (
    <form className="greeting-form">
      <input type="name" className="greeting-input" onChange={handleChange}/>
      <p className="greeting-msg">{name ? `Hey, ${name}` : "Hello, Guest"}</p>
    </form>
  );
}
