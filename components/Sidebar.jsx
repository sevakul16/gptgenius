import React from "react";
import SidebarHedaer from "./SidebarHedaer";
import NavLinks from "./NavLinks";
import MemberProfile from "./MemberProfile";

const Sidebar = () => {
  return (
    <div className="px-4 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]">
      {/* first row */}
      <SidebarHedaer />
      {/* second row */}
      <NavLinks />
      {/* third row */}
      <MemberProfile />
    </div>
  );
};
export default Sidebar;
