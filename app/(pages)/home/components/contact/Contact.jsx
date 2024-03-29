import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="text-white">
      <p className="text-3xl font-semibold">Contacto 📩</p>
      <p>
        Para contactarme, no dudes en hacerlo por{" "}
        <Link
          href="https://www.linkedin.com/in/gabriel-saldana00/"
          className="text-greenpf font-semibold underline"
        >
          Linkedin
        </Link>{" "}
        o por{" "}
        <Link
          href="mailto:gabrielsal00@hotmail.com"
          className="text-greenpf font-semibold underline"
        >
          correo
        </Link>
      </p>
      <div>
        <p>
          Para{" "}
          <Link
            href="./cv.pdf"
            className="text-greenpf font-semibold underline"
            download="Gabriel Saldaña CV"
            target="_blank"
          >
              descargar
          </Link>{" "}
          mi CV
        </p>
      </div>
    </div>
  );
}

export default Contact;
