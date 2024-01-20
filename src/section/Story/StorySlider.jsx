import React from "react";
import ReactInstaStories from "react-insta-stories";

function SeeMore() {
  return <div>see more</div>;
}

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};
const contentStyle = {
  background: "salmon",
  width: "100%",
  height: "100%",
  padding: 20,
  paddingTop: 60,
  color: "white",
};

const StorySlider = () => {
  const stories = [
    {
      content: ({ action, isPaused }) => {
        return (
          <div style={contentStyle}>
            <h1>Hey All 👋</h1>
            <h1>Check shikha's journey story.</h1>

            {/* <pre>
              <code style={code}>here they are 😄 -></code>
            </pre> */}
            <img
              style={image}
              src="https://i.ibb.co/fY1DmQW/8aacdef9ba37db60c7a96271877cfbb5.jpg"
            ></img>
            <h4>stories creted by Cubestop travel app</h4>
          </div>
        );
      },
    },
    {
      url: "https://picsum.photos/1080/1920",
      seeMore: <SeeMore />,
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 5h ago",
        profileImage: "https://picsum.photos/1000/1000",
      },
    },
    {
      url: "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 32m ago",
        profileImage: "https://picsum.photos/1080/1920",
      },
    },
    {
      url: "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
      header: {
        heading: "mohitk05/react-insta-stories",
        subheading: "Posted 32m ago",
        profileImage:
          "https://avatars0.githubusercontent.com/u/24852829?s=400&v=4",
      },
    },
    {
      url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
      type: "video",
      duration: 1000,
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      type: "video",
      seeMore: <SeeMore />,
    },
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      type: "video",
    },
    "https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
  ];

  return (
    <ReactInstaStories
      stories={stories}
      defaultInterval={1500}
      width={432}
      height={768}
    />
  );
};

export default StorySlider;
