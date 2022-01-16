import React from "react";

const ColorfulMessage = (props) => {
  //分割代入でpropsを入力節約
  const { color, children } = props;
  const contentStyle = {
    //オブジェクトとプロパティ名同じときはオブジェクト名を入力しなくてよい
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
