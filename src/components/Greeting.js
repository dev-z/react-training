import React from 'react';
import PropTypes from 'prop-types';
/**
 * My First Component
 * @author Ishtiaque
 * @description Returns a greeting
 * @prop {String} username Name of the user
 * 
 * Stateless Function
 */

const Greeting = (props) => (
  <h1>Hello, {props.username}</h1>
);

/*
const Greeting = () => {
  const nameUpper = props.username.toUpperCase();
  return (
    <h1>Hello, {nameUpper}</h1>
  );
}
*/
/*
function Greeting(props) {
  // do something here
  // const nameUppercase = props.username.toUpperCase();
  // return jsx to be rendered
  return (
    <h1>Hello, {props.username}</h1>
  );
}
*/
Greeting.propTypes = {
  username: PropTypes.string.isRequired
}

export default Greeting;
