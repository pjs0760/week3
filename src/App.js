import React, { useState } from "react";
import "./App.css";

function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{ backgroundColor: color, color: "white" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

function User({ user }) {
  return <div className="square-style">{user.contents}</div>;
}

const App = () => {
  //  useState 박스
  const [users, setUsers] = useState([
    { id: 1, contents: "리엑트를 만들어봅시다", isDone: true },
    { id: 2, contents: "useState를 배워봅시다", isDone: false },
  ]);
  const [contents, setContents] = useState("");
  // 추가버튼 핸들러
  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      contents: contents,
      isDone: false,
    };
    //요게 초기화
    setContents("");
    setUsers([...users, newUser]);
  };

  return (
    <div class="app-style">
      {users.map((user) => {
        return <User user={user} key={user.id}></User>;
      })}
      <div>
        <input
          value={contents}
          placeholder="내용을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 contents의 값으로 업데이트
          onChange={(e) => setContents(e.target.value)}
        />
      </div>
      <CustomButton color="green" onClick={addUserHandler}>
        추가하기
      </CustomButton>

      <h1>Todolist</h1>
    </div>
  );
};

export default App;
