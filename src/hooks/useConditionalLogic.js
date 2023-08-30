import { useDispatch, useSelector } from 'react-redux';
import { toggleFieldVisibility } from '../state/action-creators/actions';

const useConditionalLogic = (dependentFieldName, condition, targetFieldName) => {
    const dispatch = useDispatch();
    const dependentFieldValue = useSelector(state => state.formData[dependentFieldName]);

    const updateVisibility = () => {
        const isVisible = condition(dependentFieldValue);
        dispatch(toggleFieldVisibility(targetFieldName, isVisible));
    };

    return updateVisibility;
};

export default useConditionalLogic;