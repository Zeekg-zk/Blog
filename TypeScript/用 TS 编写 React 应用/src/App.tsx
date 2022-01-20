import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

import {CoursePart} from "./types"

/*
  Header组件应负责显示课程名称
  Content 应渲染不同章节的名称和该部分的练习题数量
  Total 应显示所有部分的练习总和。
 */

const App: React.FC = () => {
  const courseName = "Half Stack app development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is the leisured course part",
      type: "normal",
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      description: "This is the harded course part",
      type: "normal",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject",
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission",
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
