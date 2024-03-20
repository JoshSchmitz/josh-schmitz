import { BsNodePlusFill } from 'react-icons/bs';
import {
  FaWrench,
  FaPencil,
  FaHandHoldingDollar,
  FaPeopleLine,
} from 'react-icons/fa6';
import { IoColorPalette } from 'react-icons/io5';
import {
  DiAndroid,
  DiAngularSimple,
  DiAppstore,
  DiAtlassian,
  DiAws,
  DiBootstrap,
  DiChrome,
  DiCode,
  DiCodeBadge,
  DiCodepen,
  DiCreativecommons,
  DiCss3,
  DiCss3Full,
  DiDatabase,
  DiDotnet,
  DiFirefox,
  DiGit,
  DiGithub,
  DiGithubBadge,
  DiGoogleAnalytics,
  DiGoogleDrive,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiJsBadge,
  DiLaravel,
  DiLess,
  DiMarkdown,
  DiMongodb,
  DiNodejs,
  DiNodejsSmall,
  DiNpm,
  DiPhotoshop,
  DiPhp,
  DiReact,
  DiSass,
  DiTerminal,
  DiTerminalBadge,
  DiVisualstudio,
  DiWordpress,
} from 'react-icons/di';
import { nanoid } from '@reduxjs/toolkit';

// field definitions and validations for SkillForm

// title
const title_validation = {
  id: 'title',
  type: 'text',
  placeholder: 'Title',
  validation: {
    required: { value: true, message: 'required' },
    maxLength: { value: 60, message: 'max 60 characters' },
  },
};

// years
const startDate_validation = {
  id: 'startDate',
  label: 'Start Date',
  type: 'date',
  validation: {},
};

// experience
const experience_validation = {
  id: 'experience',
  label: 'Level of Experience',
  min: 1,
  max: 6,
  step: 1,
  defaultValue: 1,
  validation: {
    required: { value: true, message: 'required' },
    min: { value: 1, message: 'minimum is 1' },
    max: { value: 6, message: 'maximum is 6' },
  },
};

// icon
const icon_validation = {
  id: 'icon',
  placeholder: 'Select Icon ...',
  isClearable: true,
  isSearchable: true,
  listmode: 'tile',
  options: [
    {
      value: 'BsNodePlusFill',
      label: (
        <div className='option-content' key={nanoid()}>
          <BsNodePlusFill className='icon' />
        </div>
      ),
    },
    {
      value: 'FaWrench',
      label: (
        <div className='option-content' key={nanoid()}>
          <FaWrench className='icon' />
        </div>
      ),
    },
    {
      value: 'FaPencil',
      label: (
        <div className='option-content' key={nanoid()}>
          <FaPencil className='icon' />
        </div>
      ),
    },
    {
      value: 'IoColorPalette',
      label: (
        <div className='option-content' key={nanoid()}>
          <IoColorPalette className='icon' />
        </div>
      ),
    },
    {
      value: 'FaHandHoldingDollar',
      label: (
        <div className='option-content' key={nanoid()}>
          <FaHandHoldingDollar className='icon' />
        </div>
      ),
    },
    {
      value: 'FaPeopleLine',
      label: (
        <div className='option-content' key={nanoid()}>
          <FaPeopleLine className='icon' />
        </div>
      ),
    },
    {
      value: 'DiCode',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiCode className='icon' />
        </div>
      ),
    },
    {
      value: 'DiCodeBadge',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiCodeBadge className='icon' />
        </div>
      ),
    },
    {
      value: 'DiAndroid',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiAndroid className='icon' />
        </div>
      ),
    },
    {
      value: 'DiAngularSimple',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiAngularSimple className='icon' />
        </div>
      ),
    },
    {
      value: 'DiAppstore',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiAppstore className='icon' />
        </div>
      ),
    },
    {
      value: 'DiAtlassian',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiAtlassian className='icon' />
        </div>
      ),
    },
    {
      value: 'DiAws',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiAws className='icon' />
        </div>
      ),
    },
    {
      value: 'DiBootstrap',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiBootstrap className='icon' />
        </div>
      ),
    },
    {
      value: 'DiChrome',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiChrome className='icon' />
        </div>
      ),
    },
    {
      value: 'DiCodepen',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiCodepen className='icon' />
        </div>
      ),
    },
    {
      value: 'DiCreativecommons',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiCreativecommons className='icon' />
        </div>
      ),
    },
    {
      value: 'DiCss3',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiCss3 className='icon' />
        </div>
      ),
    },
    {
      value: 'DiCss3Full',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiCss3Full className='icon' />
        </div>
      ),
    },
    {
      value: 'DiDatabase',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiDatabase className='icon' />
        </div>
      ),
    },
    {
      value: 'DiDotnet',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiDotnet className='icon' />
        </div>
      ),
    },
    {
      value: 'DiFirefox',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiFirefox className='icon' />
        </div>
      ),
    },
    {
      value: 'DiGit',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiGit className='icon' />
        </div>
      ),
    },
    {
      value: 'DiGithub',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiGithub className='icon' />
        </div>
      ),
    },
    {
      value: 'DiGithubBadge',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiGithubBadge className='icon' />
        </div>
      ),
    },
    {
      value: 'DiGoogleAnalytics',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiGoogleAnalytics className='icon' />
        </div>
      ),
    },
    {
      value: 'DiGoogleDrive',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiGoogleDrive className='icon' />
        </div>
      ),
    },
    {
      value: 'DiHtml5',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiHtml5 className='icon' />
        </div>
      ),
    },
    {
      value: 'DiJava',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiJava className='icon' />
        </div>
      ),
    },
    {
      value: 'DiJavascript1',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiJavascript1 className='icon' />
        </div>
      ),
    },
    {
      value: 'DiJsBadge',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiJsBadge className='icon' />
        </div>
      ),
    },
    {
      value: 'DiLaravel',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiLaravel className='icon' />
        </div>
      ),
    },
    {
      value: 'DiLess',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiLess className='icon' />
        </div>
      ),
    },
    {
      value: 'DiMarkdown',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiMarkdown className='icon' />
        </div>
      ),
    },
    {
      value: 'DiMongodb',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiMongodb className='icon' />
        </div>
      ),
    },
    {
      value: 'DiNodejs',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiNodejs className='icon' />
        </div>
      ),
    },
    {
      value: 'DiNodejsSmall',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiNodejsSmall className='icon' />
        </div>
      ),
    },
    {
      value: 'DiNpm',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiNpm className='icon' />
        </div>
      ),
    },
    {
      value: 'DiPhotoshop',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiPhotoshop className='icon' />
        </div>
      ),
    },
    {
      value: 'DiPhp',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiPhp className='icon' />
        </div>
      ),
    },
    {
      value: 'DiSass',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiSass className='icon' />
        </div>
      ),
    },
    {
      value: 'DiReact',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiReact className='icon' />
        </div>
      ),
    },
    {
      value: 'DiTerminal',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiTerminal className='icon' />
        </div>
      ),
    },
    {
      value: 'DiTerminalBadge',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiTerminalBadge className='icon' />
        </div>
      ),
    },
    {
      value: 'DiVisualstudio',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiVisualstudio className='icon' />
        </div>
      ),
    },
    {
      value: 'DiWordpress',
      label: (
        <div className='option-content' key={nanoid()}>
          <DiWordpress className='icon' />
        </div>
      ),
    },
  ],
  validation: {
    required: { value: true, message: 'required' },
  },
};

// icon
const category_validation = {
  id: 'category',
  placeholder: 'Select Category ...',
  isClearable: true,
  isSearchable: true,
  validation: {
    required: { value: true, message: 'required' },
  },
};

// highlighted
const highlighted_validation = {
  id: 'highlighted',
  label: 'Highlighted?',
  validation: {},
};

export {
  title_validation,
  startDate_validation,
  experience_validation,
  icon_validation,
  category_validation,
  highlighted_validation,
};
