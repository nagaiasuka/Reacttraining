import React from "react";

const App = () => {
  const onClickButton = () => alert();
  //関数でstyleをあてる
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>あすか</h1>
      <p style={contentStyle}>nagai</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

//他のファイルで関数を使うために
export default App;
