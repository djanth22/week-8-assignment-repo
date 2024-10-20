import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="flex items-center justify-center">
          <Logo />
          <h1 className="title">The Gilded Serpent</h1>

          <Logo />
        </div>
        <h2 className="sub-title">A community like no other</h2>
      </div>

      <Navbar />
    </>
  );
}
