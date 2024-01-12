import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { MdError } from 'react-icons/md';
import { isFormInvalid, findInputError } from './utils/functions';

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { opacity: 1, y: 0 },
};

const Input = ({
  id,
  type,
  placeholder,
  label,
  value,
  onChange,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputError = findInputError(errors, id);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className='input'>
      {label && (
        <label className='label' htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...register(id, validation)}
      />
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
Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
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

export default Input;
