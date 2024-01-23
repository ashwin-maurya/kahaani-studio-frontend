import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = () => {
  const handleImageUpload = async (blobInfo) => {
    try {
      const formData = new FormData();
      formData.append("file", blobInfo.blob(), blobInfo.filename());
      formData.append("upload_preset", "demo_kahaani_studio");
      formData.append("cloud_name", "dhktoeo0l");
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dhktoeo0l/image/upload`;

      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const imageUrl = data.secure_url;

      console.log("Image URL:", imageUrl);

      // Return just the URL as a string
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      // Return an empty string or handle the error as needed
      return "";
    }
  };

  return (
    <div className="m-40">
      <Editor
        apiKey="YOUR_TINYMCE_API_KEY"
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help | image",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          images_upload_handler: handleImageUpload,
        }}
      />
    </div>
  );
};

export default TextEditor;
