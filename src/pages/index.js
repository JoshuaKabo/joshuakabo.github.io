import * as React from "react";
import "../assets/css/main.css";

export default function Home() {
  React.useEffect(() => {
    document.title = "Joshua Kabo | Contact";
  }, []);
  return (
    <main className="page">
      <section className="contact-page">
        <article className="contact-info">
          <h3>Let's Connect!</h3>
          <p>I'm Josh, a Software Developer living in Seattle Washington</p>
          <p>
            Language Experience: Java, C, C#, C++ Python, Javascript, HTML, CSS,
            Ada, Dart
          </p>
          <p>
            Professional Experience: Web development, Avionics Software
            Engineering, Software Testing
          </p>
          <p>
            Other Interests: AI, Game Development, Computer Graphics, Teamwork
          </p>
        </article>
        <article>
          <form
            className="form contact-form"
            action="https://formspree.io/f/mpzgwjnz"
            method="POST"
          >
            <div className="form-row">
              <label htmlFor="name">your name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">your email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" className="btn block">
              submit
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
