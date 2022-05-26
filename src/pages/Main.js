import React from 'react';
import { useSelector } from 'react-redux';

const Main = () => {
  const { data } = useSelector((state) => state.LoginReducer);
  return <div>Main</div>;
};

export default Main;
