import * as React from "react";
import CodeSnippet from "../components/CodeSnippet";
import "../assets/css/main.css";

export default function Home() {
  React.useEffect(() => {
    document.title = "Joshua Kabo | Experiment";
  }, []);
  return (
    <main className="page">
      <section className="experiment-page">
        {/* <article className="contact-info">
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
        </article> */}
        <article>{CodeSnippet()}</article>
      </section>
    </main>
  );
}
