import { Dispatch, SetStateAction, useState } from "react";
import { Tododiv, TodoDel, TodoContent } from "../style/TodoStyle";

interface ITodoContent {
  context: string;
  index: number;
  entireTodoContext: string[];
  setEntireTodoContext: Dispatch<SetStateAction<string[]>>;
}

const Todo = (props: ITodoContent) => {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <>
      <Tododiv>
        <input
          type="checkbox"
          checked={check}
          onChange={() => {
            setCheck(!check);
          }}
        />
        <TodoContent isCheck={check}>{props.context}</TodoContent>
        <TodoDel
          isDone={check}
          onClick={() => {
            let DeleteCheck: boolean = window.confirm(
              "'" + props.context + "'을(를) 삭제하실건가요?"
            );
            if (DeleteCheck) {
              props.entireTodoContext.splice(props.index, 1);
              let array: string[] = [...props.entireTodoContext];
              props.setEntireTodoContext([...array]);
              const JSONConversion: string = JSON.stringify(array);
              localStorage.setItem("todoContext", JSONConversion);
            }
          }}
        >
          ✕
        </TodoDel>
      </Tododiv>
    </>
  );
};

export default Todo;
