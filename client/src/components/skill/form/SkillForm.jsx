import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {
  title_validation,
  startDate_validation,
  experience_validation,
  icon_validation,
  category_validation,
  highlighted_validation,
} from './validation';

// import icons
import * as BsIcons from 'react-icons/bs';
import * as DiIcons from 'react-icons/di';
import * as FaIcons from 'react-icons/fa6';
import * as IoIcons from 'react-icons/io5';

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
import Range from '../../form/Range';

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
  const { data: skills } = useGetSkillQuery({ resumeId });
  const { data: skill, isSuccess } = useGetSkillQuery({
    resumeId,
    skillId,
  });

  useEffect(() => {
    async function loadData() {
      let Icon = '';
      const lib = await skill.icon.substring(0, 2);
      switch (lib) {
        case 'Bs':
          Icon = BsIcons[`${skill.icon}`];
          break;
        case 'Di':
          Icon = DiIcons[`${skill.icon}`];
          break;
        case 'Fa':
          Icon = FaIcons[`${skill.icon}`];
          break;
        case 'Io':
          Icon = IoIcons[`${skill.icon}`];
          break;
        default:
          break;
      }

      const s = await {
        title: skill.title,
        startDate:
          skill.startDate === ''
            ? null
            : dayjs(skill.startDate).add(1, 'day').format('YYYY-MM-DD'),
        experience: skill.experience,
        icon: {
          value: skill.icon,
          label: (
            <div className='option-content' key={skill.icon.toLowerCase()}>
              <Icon className='icon' />
              <p className='label'>
                {skill.icon
                  .substring(2)
                  .replace(/[0-9]/g, '')
                  .replace(/([A-Z])/g, ' $1')
                  .trim()}
              </p>
            </div>
          ),
        },
        category: {
          key: nanoid(),
          label: skill.category,
          value: skill.category,
        },
        highlighted: skill.highlighted,
      };
      methods.reset(s);
    }
    async function loadOptions() {
      const sk = await skills;
      const options = [{ key: nanoid(), label: 'Skill', value: 'Skill' }];
      sk.forEach((s) => {
        if (!options.find((o) => o.label === s.category)) {
          options.push({ key: nanoid(), label: s.category, value: s.category });
        }
      });
      setCategoryOptions(options);
    }
    loadOptions();
    if (skillId) {
      if (isSuccess) {
        loadData();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skill]);

  const onSubmit = methods.handleSubmit(async (data) => {
    if (!edit) {
      // create submit
      try {
        const res = await createSkill({
          resumeId,
          ...data,
          icon: data.icon.value,
          category: data.category.label,
        }).unwrap();
        if (res) {
          toggleModal();
          toast.success('Skill created');
        } else {
          toast.error('Could not create skill');
        }
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    } else {
      // update submit
      try {
        const res = await updateSkill({
          resumeId,
          skillId,
          ...data,
          icon: data.icon.value,
          category: data.category.label,
        }).unwrap();
        if (res) {
          toggleModal();
          toast.success('Skill updated');
        } else {
          toast.error('Could not update skill');
        }
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
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
            <Input {...startDate_validation} />
            <Range {...experience_validation} />
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
