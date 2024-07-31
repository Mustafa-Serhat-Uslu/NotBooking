"use client";
import React, { useState } from "react";

import MobileMenuButton from "./MobileMenuButton";
import MobileMenuDialog from "./MobileMenuDialog";

const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <MobileMenuButton setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenuDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
};

export default MobileMenu;
