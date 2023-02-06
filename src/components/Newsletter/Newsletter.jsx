import React, { useRef } from "react";
import "./newsletter.scss";
import { addEmail } from "../../services/sendEmails.service";

const Newsletter = () => {
  const inputRef = useRef();

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    addEmail(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="container_newsletter">
      <h3>Newsletter</h3>
      <form onSubmit={handlerSubmit}>
        <div className="input_button">
          <input
            type="email"
            placeholder="Recibe información de nuevas postulaciones y eventos"
            ref={inputRef}
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M268 112l144 144-144 144M392 256H100"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
