import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Book</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add">Add Contact</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
