import styled from "styled-components";

export const Title = styled.p`
  font-size: 1.5rem;
  margin: 1rem 1.5rem;
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
  width: 5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 0rem 1rem;
  font-weight: 500;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const TodoContentArea = styled.nav`
  margin: auto;
  margin-top: 1rem;
  width: 24rem;
  height: 12rem;
  overflow: auto;
`;

export const TodoArea = styled.nav`
  width: 26rem;
  height: 22rem;
  border: 1px solid black;
  margin: 2em;
  background-color: rgba(0, 0, 0, 0.1);
`;
