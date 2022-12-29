import React, { useState } from "react";
import {
  Tododiv,
  TodoContentGray,
  TodoDel,
  TodoContent,
} from "../style/TodoStyle";

const Todo = () => {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <>
      <Tododiv>
        <input
          type="checkbox"
          checked={check}
          onChange={() => {
            setCheck(!check);
            console.log(check);
          }}
        />
        {check ? (
          <TodoContentGray>Content</TodoContentGray>
        ) : (
          <TodoContent>Content</TodoContent>
        )}
        <TodoDel>✕</TodoDel>
      </Tododiv>
    </>
  );
};

export default Todo;
