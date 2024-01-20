import React from "react";
export default function BlogCards() {
  (function () {
    var i,
      e,
      d = document,
      s = "script";
    i = d.createElement("script");
    i.async = 1;
    i.charset = "UTF-8";
    i.src =
      "https://cdn.curator.io/published/434aefdc-9a83-463d-bee4-f4f7adcbee3c.js";
    e = d.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(i, e);
  })();
  return (
    <>
      <div className="mt-40 px-12 max-md:px-0 max-sm:mt-20">
        <div id="curator-feed-new-feed-layout">
          <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">
            Powered by Curator.io
          </a>
        </div>
      </div>
    </>
  );
}
