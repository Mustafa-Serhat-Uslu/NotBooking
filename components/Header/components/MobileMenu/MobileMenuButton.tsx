"use client";

import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const MobileMenuButton = ({ setMobileMenuOpen }) => {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default MobileMenuButton;
