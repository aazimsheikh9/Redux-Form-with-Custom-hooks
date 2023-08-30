import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useConditionalLogic from '../hooks/useConditionalLogic';
import useFormValidation from '../hooks/useFormValidation';
import { updateFieldValue, submitForm } from '../state/action-creators/actions';

const Form = () => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.formData);
    const fieldVisibility = useSelector(state => state.fieldVisibility);

    const [successMessage, setSuccessMessage] = useState('');

    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        setErrorMessages([]); // Clear error messages whenever the form data changes
        setSuccessMessage([])
    }, [formData]);

    const handleInputChange = (fieldName, value) => {
        dispatch(updateFieldValue(fieldName, value));
    };

    const validateForm = useFormValidation({
        companyName: value => formData.employed === 'Yes' && !value
    });

    const updateCompanyNameVisibility = useConditionalLogic(
        'employed',
        employed => employed === 'No',
        'companyName'
    );

    const handleSubmit = () => {
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            dispatch(submitForm());
            setErrorMessages([]); // Clear error messages if submission is successful
            setSuccessMessage('Form submitted successfully!');
        } else {
            const errorMessages = Object.values(errors);
            setErrorMessages(errorMessages);
            setSuccessMessage('');
        }
    }

    return (
        <div className="p-4 rounded-lg border-gray-600 border-2">
            <label className="block mb-2">Are you employed?</label>
            <select
                className="block w-full p-2 mb-4"
                value={formData.employed}
                onChange={e => {
                    handleInputChange('employed', e.target.value);
                    updateCompanyNameVisibility();
                }}
            >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            {fieldVisibility && formData.employed === 'Yes' && (
                <div className="mb-4">
                    <label className="block mb-2">Company Name:</label>
                    <input
                        type="text"
                        className="block w-full p-2 border rounded"
                        value={formData.companyName}
                        onChange={e => handleInputChange('companyName', e.target.value)}
                    />
                </div>
            )}

            {errorMessages.length > 0 && (
                <div className="mt-4 text-red-500">
                    {errorMessages.map((errorMsg, index) => (
                        <p key={index} className='mb-1'>
                            {errorMsg}
                        </p>
                    ))}
                </div>
            )}

            <div className="mt-4 text-green-500">
                {successMessage && <p>{successMessage}</p>}
            </div>

            <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default Form;