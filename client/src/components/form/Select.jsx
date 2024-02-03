import PropTypes from 'prop-types';
import SelectBox from 'react-select';
import { useFormContext, Controller } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { MdError } from 'react-icons/md';
import { isFormInvalid, findInputError, framer_error } from './utils/functions';

const Select = ({
  id,
  placeholder,
  isClearable,
  isSearchable,
  options,
  label,
  validation,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const inputError = findInputError(errors, id);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className='select'>
      {label && (
        <label className='label' htmlFor={id}>
          {label}
        </label>
      )}

      <Controller
        render={({ field }) => (
          <SelectBox
            {...field}
            className='select'
            classNamePrefix='select'
            unstyled={true}
            isClearable={isClearable}
            isSearchable={isSearchable}
            id={id}
            placeholder={placeholder ? placeholder : 'Select ...'}
            options={options}
          />
        )}
        name={id}
        control={control}
        rules={validation}
      ></Controller>
      <AnimatePresence mode='wait' initial={false}>
        {isInvalid && (
          <InputError
            type='error'
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  validation: PropTypes.object,
};

const InputError = ({ message, type }) => {
  return (
    <motion.p className={`message ${type}`} {...framer_error}>
      <MdError />
      {message}
    </motion.p>
  );
};
InputError.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Select;
