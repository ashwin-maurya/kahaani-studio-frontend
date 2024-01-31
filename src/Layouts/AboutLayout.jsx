import React from "react";
import About from "../section/About/AboutContent/About";
import Hero from "../section/About/Hero/Hero";
import { Helmet } from "react-helmet";
export default function AboutLayout() {
  const title = "About Shikha Gautam";
  const metaDescription = "This is some description";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" key="description" content={metaDescription} />
        <meta name="title" key="title" content={title} />
        <meta property="og:title" key="og:title" content={title} />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta charSet="utf-8" />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content={metaDescription}
        />
        <meta
          property="og:image"
          key="og:image"
          content="https://content.presspage.com/uploads/2338/1920_selfie-auf-der-reise-copypeopleimages.com-adobestock-493554509.jpeg?10000"
        />
      </Helmet>
      <div className="pt-16">
        <div>
          <Hero />
        </div>
        <div className="mt-14">
          <About />
        </div>
      </div>
    </>
  );
}
