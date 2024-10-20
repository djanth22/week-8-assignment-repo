import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        <Link className="nav" href="/">
          Home
        </Link>
        <Link className="nav" href="/posts">
          posts
        </Link>
        <Link className="nav" href="/newPost">
          New post
        </Link>
      </div>
    </>
  );
}
