import React from "react";
import ColorfulMessage from "./components/colorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  //関数でstyleをあてる
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

//他のファイルで関数を使うために
export default App;
