import React from "react";
import { RWebShare } from "react-web-share";
import { FaShare } from "react-icons/fa";

const ShareWeb = ({ title }) => {
  const currentURL = window.location.href;

  return (
    <>
      <RWebShare
        data={{
          text: { title },
          url: currentURL,
          title: "Kahaani Studio",
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
