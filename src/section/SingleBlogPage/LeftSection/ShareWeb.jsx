import React from "react";
import { RWebShare } from "react-web-share";
import { FaShare } from "react-icons/fa";

const ShareWeb = () => {
  const currentURL = window.location.href;

  return (
    <>
      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: currentURL,
          title: "Flamingos",
        }}
        sites={["facebook", "twitter", "linkedin", "whatsapp"]}
        onClick={() => console.log("shared successfully!")}
      >
        <FaShare />
      </RWebShare>
    </>
  );
};

export default ShareWeb;
