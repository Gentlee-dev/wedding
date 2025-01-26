import React from 'react';

const Text = ({ children }: { children: string }) => {
  const strArr = children.split('\n').map((el, idx, arr) => {
    return (
      <React.Fragment key={el}>
        {el}
        {arr.length - 1 !== idx && <br />}
      </React.Fragment>
    );
  });

  return <div>{strArr}</div>;
};

export default Text;
