import Todo from "./components/Todo";
import { useEffect, useState } from "react";

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
  return (
    <>
      <h2>Todo List</h2>
      <input
        type={"text"}
        placeholder={"추가할 할 일을 입력해주세요"}
        value={textTodo}
        onChange={(e) => {
          setTextTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let TodoADDCheck: boolean = window.confirm(
            textTodo + "를 할 일에 추가하시겠습니까?"
          );
          if (TodoADDCheck) {
            let todoValueADD: string[] = [...todoContext, textTodo];
            setTodoContext([...todoValueADD]);
            const JSONConversion: string = JSON.stringify(todoValueADD);
            localStorage.setItem("todoContext", JSONConversion);
            setTextTodo("");
          }
        }}
      >
        추가
      </button>
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
    </>
  );
}

export default App;
