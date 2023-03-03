import Todo from "./components/Todo";
import Location from "./components/Location";
import { useEffect, useState, KeyboardEvent } from "react";
import * as S from "./style/AppStyled";

function App() {
  const [textTodo, setTextTodo] = useState<string>("");
  const [todoContext, setTodoContext] = useState<string[]>([]);
  useEffect(() => {
    const isContext: string | null = localStorage.getItem("todoContext");
    if (isContext) {
      const LocalStorageTodoContext: string[] = JSON.parse(isContext);
      setTodoContext([...LocalStorageTodoContext]);
    }
  }, []);

  const ADDTodohandler = () => {
    if (textTodo === "") {
      alert("내용을 제대로 입력해주세요");
    } else {
      let TodoADDCheck: boolean = window.confirm(
        textTodo + "를 할 일에 추가하시겠습니까?"
      );
      if (TodoADDCheck) {
        if (textTodo.length > 25) {
          alert("내용이 너무 깁니다.");
        } else {
          let todoValueADD: string[] = [...todoContext, textTodo];
          setTodoContext([...todoValueADD]);
          const JSONConversion: string = JSON.stringify(todoValueADD);
          localStorage.setItem("todoContext", JSONConversion);
          setTextTodo("");
        }
      }
    }
  };
  const Enterhandler = (KeyDownChecker: KeyboardEvent<HTMLInputElement>) => {
    if (KeyDownChecker.key === "Enter") {
      ADDTodohandler();
    }
  };

  const AllDeleteButton = () => {
    let CheckDelete = window.confirm("정말 다 삭제하실건가요?");
    console.log(CheckDelete);
    if (CheckDelete) {
      setTodoContext([]);
      localStorage.clear();
    }
  };

  return (
    <>
      <S.TodoArea>
        <S.Title>Todo List</S.Title>
        <S.TodoInput
          type={"text"}
          placeholder={"추가할 할 일을 입력해주세요"}
          value={textTodo}
          onChange={(e) => {
            setTextTodo(e.target.value);
          }}
          onKeyDown={Enterhandler}
        />
        <S.TodoButton onClick={ADDTodohandler}>추가</S.TodoButton>
        <S.TodoContentArea>
          {todoContext.map((value: string, index: number) => {
            return (
              <Todo
                context={value}
                index={index}
                entireTodoContext={todoContext}
                setEntireTodoContext={setTodoContext}
              ></Todo>
            );
          })}
        </S.TodoContentArea>
        <S.TodoButton onClick={AllDeleteButton}>전체 삭제</S.TodoButton>
      </S.TodoArea>

      <Location></Location>
    </>
  );
}

export default App;
