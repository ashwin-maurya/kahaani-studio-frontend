import React from "react";
import MainContent from "../section/Photography/MainContent";
import GalleryHero from "../section/Photography/Hero/GalleryHero";
export default function PhotographyLayout() {
  return (
    <>
      <div className="pt-16">
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
