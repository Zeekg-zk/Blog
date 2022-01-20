import React from "react";
import Part from "./Part";
import { CoursePart } from "../types";

interface IProps {
  courseParts: Array<CoursePart>;
}

const Content = (props: IProps) => {
  return (
    <>
      {props.courseParts.map((item, index) => {
        return (
          <>
            <p>
              <h3>
                {item.name} {item.exerciseCount}
              </h3>
              <Part courseParts={item}></Part>
            </p>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default Content;
