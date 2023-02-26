import styled from "styled-components";

export const Tododiv = styled.div`
  display: flex;
`;

interface ITodoContent {
  isCheck: boolean;
}

export const TodoContent = styled.p`
  margin-left: 0.3rem;
  font-size: 1.2rem;
  color: ${(props: ITodoContent) => (props.isCheck ? "gray" : "black")};
  text-decoration: ${(props: ITodoContent) =>
    props.isCheck ? "line-through gray" : "none"};
`;

interface ITodoDelBtn {
  isDone: boolean;
}

export const TodoDel = styled.p`
  font-weight: bold;
  color: ${(props: ITodoDelBtn) => (props.isDone ? "red" : "black")};
  font-size: 1.2rem;
  margin-left: 10px;
  &:hover {
    color: ${(props: ITodoDelBtn) => (props.isDone ? "rgb(205,0,0)" : "gray")};
  }
`;
