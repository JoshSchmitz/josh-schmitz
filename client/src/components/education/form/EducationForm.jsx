/* eslint-disable no-unused-vars */
import { useEffect, KeyboardEventHandler } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import {
  institutionname_validation,
  institutionphone_validation,
  address_validation,
  city_validation,
  state_validation,
  postcode_validation,
  degree_validation,
  majors_validation,
  startdate_validation,
  enddate_validation,
} from './validations';

// import components
import Form from '../../form/Form';
import FormHeader from '../../form/FormHeader';
import FormContent from '../../form/FormContent';
import FormSection from '../../form/FormSection';
import FormGroup from '../../form/FormGroup';
import Input from '../../form/Input';
import Button from '../../form/Button';
import BasicSingleSelect from '../../form/BasicSingleSelect';
import MultivalueText from '../../form/MultiValueText';

// import state
import {
  useCreateEducationMutation,
  useUpdateEducationMutation,
  useGetEducationQuery,
} from '../../../store/slices/resume/api-education';

const EducationForm = ({ resumeId, educationId, edit, toggleModal }) => {
  // react-hook-form validation
  const methods = useForm({ mode: 'onChange' });

  // state
  const [createEducation, { createIsLoading }] = useCreateEducationMutation();
  const [updateEducation, { updateIsLoading }] = useUpdateEducationMutation();
  const { data: education, isSuccess } = useGetEducationQuery({
    resumeId,
    educationId,
  });

  useEffect(() => {
    async function loadData() {}
    if (educationId) {
      if (isSuccess) {
        loadData();
      }
    }
  }, [methods, isSuccess, education, educationId]);

  const onSubmit = methods.handleSubmit(async (data) => {
    if (!edit) {
      // create submit
    } else {
      // update submit
    }
  });

  // display
  return (
    <FormProvider {...methods}>
      <Form name='education'>
        <FormHeader
          title={!edit ? 'Add Education' : 'Update Education'}
          subtitle={
            !edit
              ? 'Add education to your resume'
              : 'Update education on your resume'
          }
        />
        <FormContent>
          <FormSection size='full'>
            <FormGroup>
              <BasicSingleSelect {...degree_validation} />
              <MultivalueText {...majors_validation} />
            </FormGroup>
          </FormSection>
          <FormSection>
            <FormGroup>
              <Input {...institutionname_validation} />
              <Input {...institutionphone_validation} />
              <Input {...address_validation} />
              <Input {...city_validation} />
              <Input {...state_validation} />
              <Input {...postcode_validation} />
            </FormGroup>
          </FormSection>
          <FormSection>
            <Input {...startdate_validation} />
            <Input {...enddate_validation} />
          </FormSection>
        </FormContent>
        {!edit ? (
          <Button
            label='Create Education'
            loading={createIsLoading}
            onSubmit={onSubmit}
          />
        ) : (
          <Button
            label='Update Education'
            loading={updateIsLoading}
            onSubmit={onSubmit}
          />
        )}
      </Form>
    </FormProvider>
  );
};
EducationForm.propTypes = {
  resumeId: PropTypes.string.isRequired,
  educationId: PropTypes.string,
  edit: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default EducationForm;
