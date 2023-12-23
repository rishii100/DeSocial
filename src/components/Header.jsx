import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
function Header() {
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(true);
  };
  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div className="header">
      <nav className="nav">
        <img
          onClick={() => {
            window.location.reload();
          }}
          className="brand-logo"
          src="https://gateway.pinata.cloud/ipfs/QmNv3ckYu8fzn8roHni3Qpqbz6c14myMMsW6AiXAA6V15x"
          alt="Brand Logo"
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          style={{
            cursor: hovered ? "pointer" : null,
          }}
        />
        <div className="connect-button">
          <ConnectButton showBalance={false} chainStatus="icon" />
        </div>
      </nav>
    </div>
  );
}
export default Header;
