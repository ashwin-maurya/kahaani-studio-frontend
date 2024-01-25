import React, { useState } from "react";
import { RWebShare } from "react-web-share";
import { useLocation } from "react-router-dom";
const ShareWeb = () => {
  const location = useLocation();
  return (
    <div>
      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "https://on.natgeo.com/2zHaNup",
          title: "Flamingos",
          sites: ["facebook", "twitter", "linkedin", "whatsapp"],
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button>Share 🔗</button>
      </RWebShare>
    </div>
  );
};

export default ShareWeb;
