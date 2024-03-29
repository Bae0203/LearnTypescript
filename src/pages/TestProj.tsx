import React, { ChangeEvent, useEffect, useState } from "react";
import * as S from "../style/TestProjStyle";
import FileImage from "../style/asset/file.svg";
const TestProj = () => {
  const Link =
    /(http[s]?|ftp):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/;

  const [value1, setValue1] = useState<string>("");
  const [value1Error, setValue1Error] = useState<boolean | null>(null);
  const [value2, setValue2] = useState<string | null>(null);
  const [value2Error, setValue2Error] = useState<boolean | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [value3, setValue3] = useState<string>("");
  const [isUrl, setIsUrl] = useState<boolean | null>(null);

  const OnChangeFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    const reader = new FileReader();
    if (file) {
      const fileResource = file[0];
      setFileName(fileResource.name);
      reader.onload = () => {
        const value = URL.createObjectURL(fileResource);

        setValue2(value);
      };
      reader.readAsDataURL(fileResource);
    }
  };

  useEffect(() => {
    if (value1Error != null) {
      if (value1 === "") {
        setValue1Error(false);
      } else {
        setValue1Error(true);
      }
    }

    if (value2Error != null) {
      if (value2) {
        setValue2Error(false);
      } else {
        setValue2Error(true);
      }
    }

    if (value3 !== "") {
      if (Link.test(value3)) {
        setIsUrl(true);
      } else {
        setIsUrl(false);
      }
    }
  }, [value1, value2, value3]);

  return (
    <S.EntireWrapTag>
      <div>input 테스트용</div>
      <S.InputWrap>
        <S.InputTitleWrap>
          <p>일반 input</p>
          <S.EssentialContent>*</S.EssentialContent>
        </S.InputTitleWrap>
        <S.InputStyle
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="정보를 입력해주세요."
          onClick={() =>
            value1 === "" ? setValue1Error(false) : setValue1Error(true)
          }
          isError={value1Error}
        />
        <S.ErrorAlert isError={value1Error}>필수 입력 항목입니다.</S.ErrorAlert>
      </S.InputWrap>
      <S.InputWrap>
        <S.InputTitleWrap>
          <p>file input</p>
          <S.EssentialContent>*</S.EssentialContent>
        </S.InputTitleWrap>
        <S.FileInputLabel isError={value2Error}>
          <S.FileInputStyle
            type="file"
            onChange={(e) => OnChangeFileHandler(e)}
            onClick={() =>
              value2 === "" ? setValue2Error(false) : setValue2Error(true)
            }
          />
          <S.FileImageStyle src={FileImage} alt="" />
          <S.FileInputContext>
            {fileName == null ? "pdf형식을 권장합니다." : fileName}
          </S.FileInputContext>
        </S.FileInputLabel>
        <S.ErrorAlert isError={!value2Error}>
          필수 입력 항목입니다.
        </S.ErrorAlert>
      </S.InputWrap>
      <S.InputWrap>
        <S.InputTitleWrap>
          <p>링크 input</p>
        </S.InputTitleWrap>
        <S.InputStyle
          type="url"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
          placeholder="https://"
          isError={isUrl}
        />
        <S.ErrorAlert isError={isUrl}>정확한 url을 입력해주세요.</S.ErrorAlert>
      </S.InputWrap>
      <p>
        <S.ButtonStyle>제출하기</S.ButtonStyle>
      </p>
    </S.EntireWrapTag>
  );
};

export default TestProj;
