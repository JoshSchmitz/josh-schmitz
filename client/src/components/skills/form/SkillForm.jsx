import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';
import {
  title_validation,
  years_validation,
  experience_validation,
  icon_validation,
  category_validation,
  highlighted_validation,
} from './validation';

// import components
import Form from '../../form/Form';
import FormHeader from '../../form/FormHeader';
import FormContent from '../../form/FormContent';
import FormSection from '../../form/FormSection';
import FormGroup from '../../form/FormGroup';
import Input from '../../form/Input';
import Button from '../../form/Button';
import SingleSelect from '../../form/SingleSelect';
import CreatableSingleSelect from '../../form/CreatableSingleSelect';
import Checkbox from '../../form/Checkbox';

// import state
import {
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useGetSkillQuery,
} from '../../../store/slices/resume/api-skill';

const SkillForm = ({ resumeId, skillId, edit, toggleModal }) => {
  // react-hook-form validation
  const methods = useForm({ mode: 'onChange' });

  // state
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [createSkill, { createIsLoading }] = useCreateSkillMutation();
  const [updateSkill, { updateIsLoading }] = useUpdateSkillMutation();
  const { data: skill, isSuccess } = useGetSkillQuery({
    resumeId,
    skillId,
  });

  useEffect(() => {
    async function loadOptions() {
      const sk = await skill;
      const options = [{ label: 'Skill', value: 'Skill' }];
      sk.forEach((sk) => {
        if (!options.find((o) => o.label === sk.category)) {
          options.push({ label: sk.category, value: sk.category });
        }
      });
      console.log(options);
      setCategoryOptions(options);
    }
    loadOptions();
  }, [skill]);

  const onSubmit = methods.handleSubmit(async (data) => {
    if (!edit) {
      // create submit
    } else {
      // update submit
    }
  });

  return (
    <FormProvider {...methods}>
      <Form name='skill'>
        <FormHeader
          title={!edit ? 'Add Skill' : 'Update Skill'}
          subtitle={
            !edit ? 'Add skill to your resume' : 'Update skill on your resume'
          }
        />
        <FormContent>
          <FormSection>
            <Input {...title_validation} />
            <Input {...years_validation} />
            <Input {...experience_validation} />
            <FormGroup>
              <SingleSelect {...icon_validation} />
              <CreatableSingleSelect
                {...category_validation}
                options={categoryOptions}
              />
            </FormGroup>
            <FormGroup>
              <Checkbox {...highlighted_validation} />
            </FormGroup>
          </FormSection>
        </FormContent>
        {!edit ? (
          <Button
            label='Create Skill'
            loading={createIsLoading}
            onSubmit={onSubmit}
          />
        ) : (
          <Button
            label='Update Skill'
            loading={updateIsLoading}
            onSubmit={onSubmit}
          />
        )}
      </Form>
    </FormProvider>
  );
};
SkillForm.propTypes = {
  resumeId: PropTypes.string.isRequired,
  skillId: PropTypes.string,
  edit: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
};
export default SkillForm;
