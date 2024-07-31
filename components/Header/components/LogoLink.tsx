import React from "react";
import Link from "next/link";

const LogoLink = () => {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">NotBooking.com</span>
        <img
          className="h-12 w-auto"
          src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
          alt=""
        />
      </Link>
    </div>
  );
};

export default LogoLink;
