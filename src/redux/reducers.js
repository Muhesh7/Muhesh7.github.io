import { SECTION } from './actions';

const initialSection = {
  section: 0
};

const sectionReducer = (section = initialSection, action) => {
  switch (action.type) {
    case SECTION:
      return { ...section, section: action.payload };
    default:
      return section;
  }
};

export default sectionReducer;
