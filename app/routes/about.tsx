import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to="/">Home</Link>
      <h1>About</h1>
      <p>A small experiment with launching and serving assets</p>
      <img
        src="./images/frederic-paulussen-776bX3KFp38-unsplash.jpg"
        width="450"
        alt="Photo by Frédéric Paulussen"
      />
      <div>
        Photo by{" "}
        <a href="https://unsplash.com/es/@fredography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Frédéric Paulussen
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/leiden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </div>
  );
}
