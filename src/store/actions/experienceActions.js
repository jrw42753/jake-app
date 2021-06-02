export const createExperience = (experience) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asyn call to DB
        dispatch({ type: 'CREATE_PROJECT', project: project });
    }
}