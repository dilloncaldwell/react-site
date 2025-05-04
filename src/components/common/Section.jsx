import Cell from './Cell';
import Row from './Row';
import SectionContext from './SectionContext';

function Section({ baseId = 'body', className = '', children, role }) {
  return (
    <SectionContext.Provider value={{ baseId }}>
      <div id={`${baseId}-wrapper`} className={`section-wrapper ${className}`} role={role || undefined}>
        <div id={`${baseId}-container`} className="section-container">
          <div id={baseId} className="section">
            {children}
          </div>
        </div>
      </div>
    </SectionContext.Provider>
  );
}

Section.Row = Row;
Section.Cell = Cell;

export default Section;
