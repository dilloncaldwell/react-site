import { useContext } from 'react';
import SectionContext from './SectionContext';

const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) throw new Error('Section components must be used within <Section>');
  return context;
};

export default useSectionContext;
