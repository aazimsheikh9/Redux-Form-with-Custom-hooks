const initialState = {
    formData: {
        employed: '',
        companyName: '',
    },
    fieldVisibility: {
        companyName: false,
    },
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD_VALUE':
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.fieldName]: action.payload.value,
                },
            };
        case 'TOGGLE_FIELD_VISIBILITY':
            return {
                ...state,
                fieldVisibility: {
                    ...state.fieldVisibility,
                    [action.payload.fieldName]: action.payload.isVisible,
                },
            };
        case 'SUBMIT_FORM':
            // Handle form submission and validation
            return state;
        default:
            return state;
    }
};

export default formReducer;