import React from "react";

export default function MainContent({ content }) {
  return (
    <article className="tracking- mx-auto mt-12 pl-10 font-HankenGrotesk text-xl leading-relaxed text-gray-700 max-md:text-lg">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
