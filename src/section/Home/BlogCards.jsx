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
      "https://cdn.curator.io/published/9fa3e694-e4ae-4f51-86c2-8e5c44c9d93e.js";
    e = d.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(i, e);
  })();
  return (
    <>
      <div className="mt-40 px-12 max-md:px-0 max-sm:mt-20">
        <div id="curator-feed-new-feed-layout1">
          <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">
            Powered by Curator.io
          </a>
        </div>
      </div>
    </>
  );
}
