import { useRef, useEffect } from "react";
import StorySlider from "./StorySlider";
export default function StoryModal(props) {
  const { setShowStories, ShowStories } = props;
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      setShowStories();
    }
  };
  useEffect(() => {
    if (ShowStories) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [ShowStories]);

  return (
    <>
      <div
        id="myModal"
        className={`${
          ShowStories
            ? " opacity-100 translate-y-0 "
            : " opacity-0 -translate-y-full"
        } fixed inset-0 flex items-center transition-all  z-[99999999999] ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack select-none `}
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="w-auto max-lg:w-[100%] flex rounded-lg h-screen overflow-hidden bg-white shadow-xl">
          <StorySlider />
        </div>
      </div>
    </>
  );
}
