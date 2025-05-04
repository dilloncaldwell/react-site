import React from 'react';
import useSectionContext from './useSectionContext';

function Row({ collapse = 1050, children }) {
  const { baseId } = useSectionContext();

  const childrenWithIndex = React.Children.map(children, (child, index) => (React.isValidElement(child) ? React.cloneElement(child, { index }) : child));

  return (
    <div id={`${baseId}-row`} className={`row collapse-${collapse}`}>
      {childrenWithIndex}
    </div>
  );
}

export default Row;
