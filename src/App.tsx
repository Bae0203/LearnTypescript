import "./style/App.css";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [textTodo, setTextTodo] = useState<string>("");
  return (
    <>
      <h2>Todo List</h2>
      <div className="content">
        <p>
          안녕하세요ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
        </p>
      </div>
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
          let a: boolean = window.confirm(
            textTodo + "를 할 일에 추가하시겠습니까?"
          );
        }}
      >
        추가
      </button>
      <Todo></Todo>
    </>
  );
}

export default App;
