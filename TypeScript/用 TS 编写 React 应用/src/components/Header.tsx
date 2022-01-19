import React from 'react';

interface IProps {
  name: string;
}

const Header = (props: IProps) => {
  return <h1>{props.name}</h1>;
};

export default Header;
