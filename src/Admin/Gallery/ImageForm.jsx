// ImageForm.js
import React, { useState, useContext } from "react";
import GalleryContext from "../../context/Gallery/GalleryContext";

const ImageForm = () => {
  const [formData, setFormData] = useState({
    imageID: "",
    imageURL: "",
    imageLocation: "",
    imgDescription: "",
  });

  const galleryContext = useContext(GalleryContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the addImage function from the context to submit the data
    galleryContext.addImage(formData);

    // Optional: You can clear the form after submission
    setFormData({
      imageID: "",
      imageURL: "",
      imageLocation: "",
      imgDescription: "",
    });
  };

  return (
    <div className="m-40">
      <h2>Add Image</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Image ID:
          <input
            type="text"
            name="imageID"
            value={formData.imageID}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Image URL:
          <input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Image Title:
          <input
            type="text"
            name="imageLocation"
            value={formData.imageLocation}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Image Description:
          <input
            type="text"
            name="imgDescription"
            value={formData.imgDescription}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageForm;
