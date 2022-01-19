import React from 'react';

interface IProps {
  courseParts: {
    name: string;
    exerciseCount: number;
  }[];
}

const Total = (props: IProps) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </>
  );
};

export default Total;
