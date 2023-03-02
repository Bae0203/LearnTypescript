import styled from "styled-components";

export const Title = styled.p`
  font-size: 1.5rem;
  margin: 1rem;
`;

export const TodoInput = styled.input`
  box-shadow: none;
  background-color: white;
  padding: 0.5rem;
  width: 15rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 0rem 1rem;
`;

export const TodoButton = styled.button`
  box-shadow: none;
  background-color: white;
  padding: 0.5rem;
  width: 4rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 0rem 1rem;
  font-weight: 500;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
