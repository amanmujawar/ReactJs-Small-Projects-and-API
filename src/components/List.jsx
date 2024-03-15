import React from 'react';

const List = ({ items }) => {
  const listItems = items.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default List;
