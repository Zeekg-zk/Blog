import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

/*
  Header组件应负责显示课程名称
  Content 应渲染不同章节的名称和该部分的练习题数量
  Total 应显示所有部分的练习总和。
 */

const App: React.FC = () => {
  const courseName = "Half Stack app development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
    },
  ];

  return (
    <div>
      <Header name={courseName}></Header>
      <Content courseParts={courseParts}></Content>
      <Total courseParts={courseParts}></Total>
    </div>
  );
};

export default App;
