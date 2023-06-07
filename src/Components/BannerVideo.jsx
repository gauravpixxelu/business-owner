import React, { useState } from "react";
import ReactPlayer from "react-player";

function BannerVideo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  // Other code here

  return (
    <div>
      <img onClick={handleOpen} className="abxo" src="images/banner-img.png" alt="" />
      {isOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <ReactPlayer url="https://youtu.be/Rh-Uy4pZ0jI" />
            <button className="close-popup" onClick={() => setIsOpen(false)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BannerVideo;
