// useFormValidation.js
import { useSelector } from 'react-redux';

const useFormValidation = validationRules => {
    const formData = useSelector(state => state.formData);

    const validateForm = () => {
        const errors = {};
        Object.keys(validationRules).forEach(fieldName => {
            if (validationRules[fieldName](formData[fieldName])) {
                errors[fieldName] = 'Please enter Company name';
            }
        });

        if (!formData.employed) {
            errors.employed = 'Please select "Yes" or "No"';
        }

        return errors;
    };

    return validateForm;
};

export default useFormValidation;