import "./formulario.css";
import { useState } from "react";

function Formulario() {
  const [respForm, setRespForm] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  const sendData = (ev) => {
    ev.preventDefault();
    setRespForm(data);
  };

  return (
    <>
      <div className="capsule">
        <form onSubmit={sendData}>
          <h2>Leave us message</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            value={data.name}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleInputChange}
            value={data.email}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Message"
            onChange={handleInputChange}
            value={data.message}
          ></textarea>
          <button type="submit">SEND</button>
        </form>
        <div className="data">
          <h2>Form Data:</h2>
          <p>name: {respForm.name}</p>
          <p>email: {respForm.email}</p>
          <p>affair: {respForm.message}</p>
        </div>
      </div>
    </>
  );
}

export default Formulario;
