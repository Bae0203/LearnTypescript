import React, { ChangeEvent, useEffect, useState } from "react";

const UploadImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.getItem("Image")) {
      const existingImage = localStorage.getItem("Image");
      setImageUrl(existingImage);
    }
  }, []);

  const ImageOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    const reader = new FileReader();
    if (file) {
      const fileResource = file[0];

      reader.onload = () => {
        const Image = URL.createObjectURL(fileResource);
        setImageUrl(Image);
      };
      reader.readAsDataURL(fileResource);
    }
  };

  const SaveImage = () => {
    if (imageUrl == null) {
      alert("비어 있습니다!");
    } else {
      alert("저장되었습니다!");
      localStorage.setItem("Image", imageUrl);
    }
  };

  return (
    <>
      <div>dd</div>
      {imageUrl ? (
        <>
          <img src={imageUrl} alt="유감" />
          <button onClick={SaveImage}>Save</button>
          <button onClick={() => localStorage.removeItem("Image")}>삭제</button>
        </>
      ) : null}
      <input type="file" onChange={ImageOnChangeHandler} accept="image/*" />
    </>
  );
};

export default UploadImage;
