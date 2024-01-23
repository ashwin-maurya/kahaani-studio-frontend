import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = () => {
  const handleImageUpload = async (blobInfo, success, failure, progress) => {
    try {
      const formData = new FormData();
      formData.append("file", blobInfo.blob(), blobInfo.filename());

      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dhktoeo0l/upload/demo_kahaani_studio`;

      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const data = await response.json();
      if (data.secure_url) {
        success(data.secure_url);
      } else {
        failure("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      failure("Image upload failed");
    }
  };

  return (
    <div className="m-40">
      <Editor
        apiKey="5ut6u9dgrcqt2984hizk9fjum5vun8f704k2usewa1yf1fqu"
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
