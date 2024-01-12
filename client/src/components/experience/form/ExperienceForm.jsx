/* eslint-disable no-unused-vars */
// import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { position_validation } from './validations';
import PropTypes from 'prop-types';

// import components
import PulseLoader from 'react-spinners/PulseLoader';
import FormHeader from '../../form/FormHeader';
import FormContent from '../../form/FormContent';
import FormSection from '../../form/FormSection';
import FormGroup from '../../form/FormGroup';
import Input from '../../form/Input';

// import state
import {
  useCreateExperienceMutation,
  useUpdateExperienceMutation,
} from '../../../store/slices/resume/api-experience';

const ExperienceForm = ({ edit }) => {
  // react-hook-form validation
  const methods = useForm();
  const [createExperience, { createIsLoading }] = useCreateExperienceMutation();
  const [updateExperience, { updateIsLoading }] = useUpdateExperienceMutation();

  const onSubmit = methods.handleSubmit((data) => {
    if (!edit) {
      console.log('Create Experience');
      console.log(data);
    } else {
      console.log(data);
      console.log('Update Experience');
    }
  });

  /* const [state, setState] = useState({
    position: '',
    description: '',
    startDate: '',
    endDate: '',
    highlighted: false,
    companyName: '',
    companyPhone: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  }; */

  return (
    <FormProvider {...methods}>
      <form
        className='form'
        id='experience'
        noValidate
        onSubmit={(e) => e.preventDefault()}
      >
        <FormHeader
          title={!edit ? 'Add Experience' : 'Update Experience'}
          subtitle={
            !edit
              ? 'Add work experience to your resume'
              : 'Update work experience on your resume'
          }
        />
        <FormContent>
          <FormSection size='full'>
            <FormGroup>
              <Input {...position_validation} />
              <textarea
                id='description'
                cols='30'
                rows='10'
                placeholder='Description'
                // value={state.description}
                // onChange={handleInputChange}
              ></textarea>
            </FormGroup>
          </FormSection>
          <FormSection>
            <FormGroup label='Start Date'>
              <input
                id='startdate'
                className='input'
                type='date'
                // value={state.startDate}
                // onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup label='End Date'>
              <input
                id='enddate'
                className='input'
                type='date'
                // value={state.endDate}
                // onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <div className='checkbox'>
                <input
                  id='highlighted'
                  className='input checkbox'
                  type='checkbox'
                  //   value={state.highlighted}
                  //   onChange={handleInputChange}
                />
                <label htmlFor='highlighted'>Highlighted?</label>
              </div>
            </FormGroup>
          </FormSection>
          <FormSection>
            <FormGroup>
              <input
                id='companyname'
                className='input'
                type='text'
                placeholder='Company name'
                // value={state.companyName}
                // onChange={handleInputChange}
              />
              <input
                id='companyphone'
                className='input'
                type='tel'
                placeholder='Phone'
                // value={state.companyPhone}
                // onChange={handleInputChange}
              />
              <input
                id='address'
                className='input'
                type='text'
                placeholder='Address'
                // value={state.address}
                // onChange={handleInputChange}
              />
              <input
                id='city'
                className='input'
                type='text'
                placeholder='City'
                // value={state.city}
                // onChange={handleInputChange}
              />
              <input
                id='state'
                className='input'
                type='text'
                placeholder='State'
                // value={state.state}
                // onChange={handleInputChange}
              />
              <input
                id='postcode'
                className='input'
                type='text'
                placeholder='Post code'
                // value={state.postcode}
                // onChange={handleInputChange}
              />
            </FormGroup>
          </FormSection>
        </FormContent>

        <button className='button' type='submit' onClick={onSubmit}>
          {!edit ? (
            createIsLoading ? (
              <PulseLoader
                className='loader-button'
                loading={createIsLoading}
                size={10}
                color='#f4f4f4'
              />
            ) : (
              'Add Experience'
            )
          ) : updateIsLoading ? (
            <PulseLoader
              className='loader-button'
              loading={updateIsLoading}
              size={10}
              color='#f4f4f4'
            />
          ) : (
            'Update Experience'
          )}
        </button>
      </form>
    </FormProvider>
  );
};
ExperienceForm.propTypes = {
  edit: PropTypes.bool.isRequired,
};
export default ExperienceForm;
