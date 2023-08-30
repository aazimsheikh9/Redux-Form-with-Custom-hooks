export const updateFieldValue = (fieldName, value) => ({
    type: 'UPDATE_FIELD_VALUE',
    payload: { fieldName, value },
});

export const toggleFieldVisibility = (fieldName, isVisible) => ({
    type: 'TOGGLE_FIELD_VISIBILITY',
    payload: { fieldName, isVisible },
});

export const submitForm = () => ({
    type: 'SUBMIT_FORM',
});