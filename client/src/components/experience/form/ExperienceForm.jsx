/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
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
import Form from '../../form/Form';
import FormHeader from '../../form/FormHeader';
import FormContent from '../../form/FormContent';
import FormSection from '../../form/FormSection';
import FormGroup from '../../form/FormGroup';
import Input from '../../form/Input';
import Textarea from '../../form/Textarea';
import Checkbox from '../../form/Checkbox';
import Button from '../../form/Button';

// import state
import {
  useCreateExperienceMutation,
  useUpdateExperienceMutation,
  useGetExperienceQuery,
} from '../../../store/slices/resume/api-experience';

const ExperienceForm = ({ resumeId, experienceId, edit, toggleModal }) => {
  // react-hook-form validation
  const methods = useForm({ mode: 'onChange' });
  const [createExperience, { createIsLoading }] = useCreateExperienceMutation();
  const [updateExperience, { updateIsLoading }] = useUpdateExperienceMutation();
  const { data: experience, isSuccess } = useGetExperienceQuery({
    resumeId,
    experienceId,
  });

  useEffect(() => {
    async function loadData() {
      const phone = experience.company.phone;
      const xp = await {
        position: experience.position,
        description: experience.description,
        startDate:
          experience.startDate === ''
            ? null
            : dayjs(experience.startDate).add(1, 'day').format('YYYY-MM-DD'),
        endDate:
          experience.endDate === ''
            ? null
            : dayjs(experience.endDate).add(1, 'day').format('YYYY-MM-DD'),
        highlighted: experience.highlighted,
        companyname: experience.company.name,
        phone: `(${phone.substring(0, 3)}) ${phone.substring(
          3,
          6
        )}-${phone.substring(6)}`,
        address: experience.company.location.address,
        city: experience.company.location.city,
        state: experience.company.location.state,
        postcode: experience.company.location.postcode,
      };
      methods.reset(xp);
    }
    if (experienceId) {
      if (isSuccess) {
        loadData();
      }
    }
  }, [methods, isSuccess, experience, experienceId]);

  const onSubmit = methods.handleSubmit(async (data) => {
    if (!edit) {
      try {
        const res = await createExperience({
          resumeId,
          ...data,
          phone: data.phone.replaceAll(/[^0-9]/g, ''),
        }).unwrap();
        if (res) {
          toast.success('Experience created');
          toggleModal();
        } else {
          toast.error('Could not create experience');
        }
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    } else {
      try {
        const res = await updateExperience({
          resumeId,
          experienceId,
          ...data,
          phone: data.phone.replaceAll(/[^0-9]/g, ''),
        }).unwrap();
        if (res) {
          toast.success('Experience updated');
          toggleModal();
        } else {
          toast.error('Could not update experience');
        }
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  });

  return (
    <FormProvider {...methods}>
      <Form name='experience'>
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
        {!edit ? (
          <Button
            label='Create Experience'
            loading={createIsLoading}
            onSubmit={onSubmit}
          />
        ) : (
          <Button
            label='Update Experience'
            loading={updateIsLoading}
            onSubmit={onSubmit}
          />
        )}
      </Form>
    </FormProvider>
  );
};
ExperienceForm.propTypes = {
  resumeId: PropTypes.string.isRequired,
  experienceId: PropTypes.string,
  edit: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default ExperienceForm;
