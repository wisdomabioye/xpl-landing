import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="XPL Developers — home">
      <span className="logo-mark">
        <span className="x-p">XP</span>L
      </span>
      <span className="logo-sub">Developers</span>
    </Link>
  );
}
