import styled from "styled-components";
import FileImage from "../style/asset/file.svg";

export const InputWrap = styled.nav`
  margin-bottom: 1rem;
`;

export const InputTitleWrap = styled.nav`
  display: flex;
  margin-bottom: 0.5rem;
  margin-top: 2.375rem;
  font-size: 13px;
  color: #666;
`;

export const EssentialContent = styled.p`
  color: #e03b3b;
  margin-left: 0.2rem;
  font-size: 1rem;
`;

export const InputStyle = styled.input`
  padding: 0.8rem 0.5rem;
  font-size: 0.8rem;
  width: 22.125rem;
  box-shadow: none;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  color: #666;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c0c0c0;
  }
  :-ms-input-placeholder {
    color: #c0c0c0;
  }
  &:hover {
    border: 1px solid #a9c0f6;
  }
  &:active{
    border 1px solid #1556F7;
  }
`;

export const FileInputStyle = styled.input`
  position: absolute;
  opacity: 0;
`;

export const FileInputLabel = styled.label`
  display: flex;
  padding: 0.8rem 0.5rem;
  font-size: 0.8rem;
  width: 22.125rem;
  box-shadow: none;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  color: #c0c0c0;
  &:hover {
    border: 1px solid #a9c0f6;
  }
  &:active{
    border 1px solid #1556F7;
  }
`;

export const FileImageStyle = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 0rem 0.5rem;
`;

export const ButtonStyle = styled.button`
  background-color: rgba(21, 86, 247, 0.8);
  padding: 1rem;
  box-shadow: none;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rgba(21, 86, 247, 0.9);
  }
  &:active {
    background-color: rgba(21, 86, 247);
  }
  margin-top: 3rem;
`;

export const EntireWrapTag = styled.div`
  margin-left: 38%;
`;
