import React from 'react';
import { useSelector } from 'react-redux';

const Main = () => {
  const data = useSelector((state) => state.LoginReducers.data);

  const handleclick = () => {
    console.log(data);
  };
  return (
    <div>
      <h1>hi</h1>
      <button onClick={handleclick}>basdas</button>
    </div>
  );
};

export default Main;
