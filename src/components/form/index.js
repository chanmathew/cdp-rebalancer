import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action=''>
        <select type='text'>
          <option value='cdp1'>CDP 1</option>
          <option value='cdp2'>CDP 2</option>
        </select>
        <select type='text'>
          <option value='cdp1'>CDP 1</option>
          <option value='cdp2'>CDP 2</option>
        </select>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
