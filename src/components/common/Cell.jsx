import useSectionContext from './useSectionContext';

function Cell({ span, role, children, index }) {
  const { baseId } = useSectionContext();

  return (
    <div id={`${baseId}-cell-${index + 1}`} className={`cell span-${span}`} role={role || undefined}>
      <div className="inner">{children}</div>
    </div>
  );
}

export default Cell;
