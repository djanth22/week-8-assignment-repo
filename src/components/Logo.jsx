import Image from "next/image";
import snake from "/public/snake.png";

export default function Logo() {
  return (
    <>
      <Image
        src={snake}
        alt="snake logo"
        className="snake"
        width={100}
        height={100}
        placeholder="blur"
      />
    </>
  );
}
