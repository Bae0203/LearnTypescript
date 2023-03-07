import React, { ChangeEvent, useState } from "react";

const UploadImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const ImageOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    const reader = new FileReader();
    console.log(file);
    if (file) {
      const fileResource = file[0];

      reader.onload = () => {
        const Image = URL.createObjectURL(fileResource);
        setImageUrl(Image);
        console.log(typeof Image);
      };
      reader.readAsDataURL(fileResource);
    }
  };

  return (
    <>
      <div>dd</div>
      {imageUrl ? (
        <>
          <img src={imageUrl} alt="유감" />
        </>
      ) : null}
      <input type="file" onChange={ImageOnChangeHandler} accept="image/*" />
    </>
  );
};

export default UploadImage;
