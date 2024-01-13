/* eslint-disable no-unused-vars */
// import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  position_validation,
  description_validation,
  startdate_validation,
  enddate_validation,
  highlighted_validation,
  companyname_validation,
  companyphone_validation,
  address_validation,
  city_validation,
  state_validation,
  postcode_validation,
} from './validations';

// import components
import PulseLoader from 'react-spinners/PulseLoader';
import FormHeader from '../../form/FormHeader';
import FormContent from '../../form/FormContent';
import FormSection from '../../form/FormSection';
import FormGroup from '../../form/FormGroup';
import Input from '../../form/Input';
import Textarea from '../../form/Textarea';
import Checkbox from '../../form/Checkbox';

// import state
import {
  useCreateExperienceMutation,
  useUpdateExperienceMutation,
} from '../../../store/slices/resume/api-experience';

const ExperienceForm = ({ resume, edit, toggleModal }) => {
  // react-hook-form validation
  const methods = useForm();
  const [createExperience, { createIsLoading }] = useCreateExperienceMutation();
  const [updateExperience, { updateIsLoading }] = useUpdateExperienceMutation();

  const onSubmit = methods.handleSubmit(async (data) => {
    if (!edit) {
      try {
        const res = await createExperience({
          resumeId: resume,
          ...data,
          phone: data.phone.replaceAll(/[^0-9]/g, ''),
        }).unwrap();
        toast.success('Experience created');
        toggleModal();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    } else {
      console.log(data);
      console.log('Update Experience');
    }
  });

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
              <Textarea {...description_validation} />
            </FormGroup>
          </FormSection>
          <FormSection>
            <Input {...startdate_validation} />
            <Input {...enddate_validation} />
            <FormGroup>
              <Checkbox {...highlighted_validation} />
            </FormGroup>
          </FormSection>
          <FormSection>
            <FormGroup>
              <Input {...companyname_validation} />
              <Input {...companyphone_validation} />
              <Input {...address_validation} />
              <Input {...city_validation} />
              <Input {...state_validation} />
              <Input {...postcode_validation} />
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
  resume: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default ExperienceForm;
