import React from 'react';

const RedHoc = (props) => (
  <div className="bg-red">
    {props.children}
  </div>
);

export default RedHoc;