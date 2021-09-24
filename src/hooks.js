import * as React from 'react';

export const useColors = () => {
  const [colors, setColors] = React.useState([]);
  const addColor = (color) => {
    setColors([color, ...colors]);
  };
  return [colors, addColor];
};
