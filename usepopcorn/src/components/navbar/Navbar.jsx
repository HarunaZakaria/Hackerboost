import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Seach";

export default function Navbar({children}) {
  return (
    <nav className="nav-bar">
      {children}
    </nav>
  );
}
