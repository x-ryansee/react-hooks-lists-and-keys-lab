import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const anchorLinks = links.map(link => {
    <a key= {link} href={link}>{link}</a>
  })
  console.log(anchorLinks);
  return <nav>{/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
