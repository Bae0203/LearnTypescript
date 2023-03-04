import React, { useState } from "react";

const FILE_SIZE_MAX_LIMIT = 2 * 1024 * 1024;

const UploadImage = () => {
  const [file, setFile] = useState<File>();

  const FileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];

    if (files === undefined || files.size > FILE_SIZE_MAX_LIMIT) {
      if (files.size > FILE_SIZE_MAX_LIMIT) {
        alert("파일이 너무 큽니다!");
      }
      return;
    }

    setFile(files);
  };
  return (
    <>
      <div>파일 용량은 2mb이하로 올려주세요</div>
      <form method="post" encType="multipart/form-data">
        <input
          type="file"
          onChange={FileUploadHandler}
          accept="image/jpg, image/jpeg, image/png"
        />
      </form>
    </>
  );
};

export default UploadImage;
