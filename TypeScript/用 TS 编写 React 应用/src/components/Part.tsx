/**
 * 渲染每种类型的课程章节的所有属性
 */

import React from "react";
import { CoursePart } from "../types";

interface IProps {
  courseParts: CoursePart;
}

const Part = (props: IProps) => {
  const { courseParts } = props;

  switch (courseParts.type) {
    case "normal":
      return <div>{courseParts.description}</div>;
    case "groupProject":
      return <div>project exercises {courseParts.groupProjectCount}</div>;
    case "submission":
      return (
        <>
          <div>{courseParts.description}</div>
          <div>{courseParts.exerciseSubmissionLink}</div>
        </>
      );
  }
};

export default Part;
