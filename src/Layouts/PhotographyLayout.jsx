import React from "react";
import MainContent from "../section/Photography/Gallery/MainContent";
import GalleryHero from "../section/Photography/Hero/GalleryHero";
export default function PhotographyLayout() {
  return (
    <>
      <div className="pt-20">
        <div>
          <GalleryHero />
        </div>
        <div className="pt-10">
          <MainContent />
        </div>
      </div>
    </>
  );
}
