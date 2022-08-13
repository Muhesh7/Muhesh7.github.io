export const SECTION = 'SECTION';

export const selectSection = (section) => (dispatch) => {
  dispatch({
    type: SECTION,
    payload: section
  });
};
