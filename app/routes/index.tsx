import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <h2>Deployable to Firebase Functions (Google Cloud Functions)</h2>

      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
