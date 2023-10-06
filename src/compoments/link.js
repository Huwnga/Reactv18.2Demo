import { useState } from "react";
import { Link } from "react-router-dom";

export function LinkText({ href, children, classMore }) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Link
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={
          hover
            ? `link-primary link-underline-opacity-0 ${classMore}`
            : `link-dark link-underline-opacity-0 ${classMore}`
        }
        to={href}
      >
        {children}
      </Link>
    </>
  );
}
