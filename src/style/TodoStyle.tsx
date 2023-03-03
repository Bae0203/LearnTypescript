import styled from "styled-components";

export const Tododiv = styled.div`
  margin: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ITodoContent {
  isCheck: boolean;
}

export const TodoContent = styled.p`
  margin: 0rem 0.5rem;
  font-size: 1.2rem;
  color: ${(props: ITodoContent) => (props.isCheck ? "gray" : "black")};
  text-decoration: ${(props: ITodoContent) =>
    props.isCheck ? "line-through gray" : "none"};
`;

interface ITodoDelBtn {
  isDone: boolean;
}

export const TodoDel = styled.p`
  color: ${(props: ITodoDelBtn) => (props.isDone ? "rgb(230,0,0)" : "black")};
  font-size: 1.2rem;
  &:hover {
    color: ${(props: ITodoDelBtn) =>
      props.isDone ? "rgb(255,100,0)" : "gray"};
  }
`;
