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
const years_validation = {
  id: 'years',
  type: 'number',
  label: 'Years of Knowledge',
  min: 1,
  max: 50,
  step: 0.5,
  default: '1',
  validation: {
    required: { value: true, message: 'required' },
    min: { value: 1.0, message: 'minimum is 1' },
    max: { value: 50.0, message: 'maximum is 50' },
  },
};

// experience
const experience_validation = {
  id: 'experience',
  type: 'number',
  label: 'Level of Experience',
  min: 1,
  max: 6,
  step: 1,
  default: '1',
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
        <div className='option-content' key='bsnodeplusfill'>
          <BsNodePlusFill className='icon' />
          <p className='label'>Skill</p>
        </div>
      ),
    },
    {
      value: 'FaWrench',
      label: (
        <div className='option-content' key='fawrench'>
          <FaWrench className='icon' />
          <p className='label'>Fix</p>
        </div>
      ),
    },
    {
      value: 'FaPencil',
      label: (
        <div className='option-content' key='fapencil'>
          <FaPencil className='icon' />
          <p className='label'>Write</p>
        </div>
      ),
    },
    {
      value: 'IoColorPalette',
      label: (
        <div className='option-content' key='iocoloralette'>
          <IoColorPalette className='icon' />
          <p className='label'>Create</p>
        </div>
      ),
    },
    {
      value: 'FaHandHoldingDollar',
      label: (
        <div className='option-content' key='fahandholdingdollar'>
          <FaHandHoldingDollar className='icon' />
          <p className='label'>Finance</p>
        </div>
      ),
    },
    {
      value: 'FaPeopleLine',
      label: (
        <div className='option-content' key='fapeopleline'>
          <FaPeopleLine className='icon' />
          <p className='label'>Manage</p>
        </div>
      ),
    },
    {
      value: 'DiCode',
      label: (
        <div className='option-content' key='dicode'>
          <DiCode className='icon' />
          <p className='label'>Code</p>
        </div>
      ),
    },
    {
      value: 'DiCodeBadge',
      label: (
        <div className='option-content' key='dicodebadge'>
          <DiCodeBadge className='icon' />
          <p className='label'>Code Badge</p>
        </div>
      ),
    },
    {
      value: 'DiAndroid',
      label: (
        <div className='option-content' key='diandroid'>
          <DiAndroid className='icon' />
          <p className='label'>Android</p>
        </div>
      ),
    },
    {
      value: 'DiAngularSimple',
      label: (
        <div className='option-content' key='diangularsimple'>
          <DiAngularSimple className='icon' />
          <p className='label'>Angular</p>
        </div>
      ),
    },
    {
      value: 'DiAppstore',
      label: (
        <div className='option-content' key='diappstore'>
          <DiAppstore className='icon' />
          <p className='label'>Appstore</p>
        </div>
      ),
    },
    {
      value: 'DiAtlassian',
      label: (
        <div className='option-content' key='diatlassian'>
          <DiAtlassian className='icon' />
          <p className='label'>Atlassian</p>
        </div>
      ),
    },
    {
      value: 'DiAws',
      label: (
        <div className='option-content' key='diaws'>
          <DiAws className='icon' />
          <p className='label'>AWS</p>
        </div>
      ),
    },
    {
      value: 'DiBootstrap',
      label: (
        <div className='option-content' key='dibootstrap'>
          <DiBootstrap className='icon' />
          <p className='label'>Bootstrap</p>
        </div>
      ),
    },
    {
      value: 'DiChrome',
      label: (
        <div className='option-content' key='dichrome'>
          <DiChrome className='icon' />
          <p className='label'>Chrome</p>
        </div>
      ),
    },
    {
      value: 'DiCodepen',
      label: (
        <div className='option-content' key='dicodepen'>
          <DiCodepen className='icon' />
          <p className='label'>Codepen</p>
        </div>
      ),
    },
    {
      value: 'DiCreativecommons',
      label: (
        <div className='option-content' key='dicreativecommons'>
          <DiCreativecommons className='icon' />
          <p className='label'>Creative Commons</p>
        </div>
      ),
    },
    {
      value: 'DiCss3',
      label: (
        <div className='option-content' key='disss3'>
          <DiCss3 className='icon' />
          <p className='label'>CSS</p>
        </div>
      ),
    },
    {
      value: 'DiCss3Full',
      label: (
        <div className='option-content' key='dicss3full'>
          <DiCss3Full className='icon' />
          <p className='label'>CSS</p>
        </div>
      ),
    },
    {
      value: 'DiDatabase',
      label: (
        <div className='option-content' key='didatabase'>
          <DiDatabase className='icon' />
          <p className='label'>Database</p>
        </div>
      ),
    },
    {
      value: 'DiDotnet',
      label: (
        <div className='option-content' key='didotnet'>
          <DiDotnet className='icon' />
          <p className='label'>DotNet</p>
        </div>
      ),
    },
    {
      value: 'DiFirefox',
      label: (
        <div className='option-content' key='difirefox'>
          <DiFirefox className='icon' />
          <p className='label'>Firefox</p>
        </div>
      ),
    },
    {
      value: 'DiGit',
      label: (
        <div className='option-content' key='digit'>
          <DiGit className='icon' />
          <p className='label'>Git</p>
        </div>
      ),
    },
    {
      value: 'DiGithub',
      label: (
        <div className='option-content' key='digithub'>
          <DiGithub className='icon' />
          <p className='label'>Github</p>
        </div>
      ),
    },
    {
      value: 'DiGithubBadge',
      label: (
        <div className='option-content' key='digithubbadge'>
          <DiGithubBadge className='icon' />
          <p className='label'>Github</p>
        </div>
      ),
    },
    {
      value: 'DiGoogleAnalytics',
      label: (
        <div className='option-content' key='digoogleanalytics'>
          <DiGoogleAnalytics className='icon' />
          <p className='label'>Google Analytics</p>
        </div>
      ),
    },
    {
      value: 'DiGoogleDrive',
      label: (
        <div className='option-content' key='digoogledrive'>
          <DiGoogleDrive className='icon' />
          <p className='label'>Google Drive</p>
        </div>
      ),
    },
    {
      value: 'DiHtml5',
      label: (
        <div className='option-content' key='dihtml5'>
          <DiHtml5 className='icon' />
          <p className='label'>Html</p>
        </div>
      ),
    },
    {
      value: 'DiJava',
      label: (
        <div className='option-content' key='dijava'>
          <DiJava className='icon' />
          <p className='label'>Java</p>
        </div>
      ),
    },
    {
      value: 'DiJavascript1',
      label: (
        <div className='option-content' key='dijavascript1'>
          <DiJavascript1 className='icon' />
          <p className='label'>Javascript</p>
        </div>
      ),
    },
    {
      value: 'DiJsBadge',
      label: (
        <div className='option-content' key='dijsbadge'>
          <DiJsBadge className='icon' />
          <p className='label'>Javascript</p>
        </div>
      ),
    },
    {
      value: 'DiLaravel',
      label: (
        <div className='option-content' key='dilaravel'>
          <DiLaravel className='icon' />
          <p className='label'>Laravel</p>
        </div>
      ),
    },
    {
      value: 'DiLess',
      label: (
        <div className='option-content' key='diless'>
          <DiLess className='icon' />
          <p className='label'>Less</p>
        </div>
      ),
    },
    {
      value: 'DiMarkdown',
      label: (
        <div className='option-content' key='dimarkdown'>
          <DiMarkdown className='icon' />
          <p className='label'>Markdown</p>
        </div>
      ),
    },
    {
      value: 'DiMongodb',
      label: (
        <div className='option-content' key='dimongodb'>
          <DiMongodb className='icon' />
          <p className='label'>MongoDB</p>
        </div>
      ),
    },
    {
      value: 'DiNodejs',
      label: (
        <div className='option-content' key='dinodejs'>
          <DiNodejs className='icon' />
          <p className='label'>NodeJS</p>
        </div>
      ),
    },
    {
      value: 'DiNodejsSmall',
      label: (
        <div className='option-content' key='dinodejssmall'>
          <DiNodejsSmall className='icon' />
          <p className='label'>NodeJS</p>
        </div>
      ),
    },
    {
      value: 'DiNpm',
      label: (
        <div className='option-content' key='dinpm'>
          <DiNpm className='icon' />
          <p className='label'>NPM</p>
        </div>
      ),
    },
    {
      value: 'DiPhotoshop',
      label: (
        <div className='option-content' key='diphotoshop'>
          <DiPhotoshop className='icon' />
          <p className='label'>Photoshop</p>
        </div>
      ),
    },
    {
      value: 'DiPhp',
      label: (
        <div className='option-content' key='diphp'>
          <DiPhp className='icon' />
          <p className='label'>Php</p>
        </div>
      ),
    },
    {
      value: 'DiSass',
      label: (
        <div className='option-content' key='disass'>
          <DiSass className='icon' />
          <p className='label'>Sass</p>
        </div>
      ),
    },
    {
      value: 'DiReact',
      label: (
        <div className='option-content' key='direact'>
          <DiReact className='icon' />
          <p className='label'>React</p>
        </div>
      ),
    },
    {
      value: 'DiTerminal',
      label: (
        <div className='option-content' key='diterminal'>
          <DiTerminal className='icon' />
          <p className='label'>Terminal</p>
        </div>
      ),
    },
    {
      value: 'DiTerminalBadge',
      label: (
        <div className='option-content' key='diterminalbadge'>
          <DiTerminalBadge className='icon' />
          <p className='label'>Terminal</p>
        </div>
      ),
    },
    {
      value: 'DiVisualstudio',
      label: (
        <div className='option-content' key='DiVisualstudio'>
          <DiVisualstudio className='icon' />
          <p className='label'>VSCode</p>
        </div>
      ),
    },
    {
      value: 'DiWordpress',
      label: (
        <div className='option-content' key='diwordpress'>
          <DiWordpress className='icon' />
          <p className='label'>Wordpress</p>
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
  years_validation,
  experience_validation,
  icon_validation,
  category_validation,
  highlighted_validation,
};
