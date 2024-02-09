// field definitions and validations for EducationForm

// institution name
const institutionname_validation = {
  id: 'institutionname',
  type: 'text',
  placeholder: 'Institution',
  validation: {
    required: { value: true, message: 'required' },
    maxLength: { value: 60, message: 'max 60 characters' },
  },
};

// institution phone
const institutionphone_validation = {
  id: 'phone',
  type: 'tel',
  placeholder: 'Phone',
  validation: {
    required: { value: true, message: 'required' },
    pattern: {
      value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i,
      message: '10 digit phone with separators',
    },
  },
};

//  institution address
const address_validation = {
  id: 'address',
  type: 'text',
  placeholder: 'Address',
  validation: {
    required: { value: true, message: 'required' },
    maxLength: { value: 60, message: 'max 60 characters' },
  },
};

//  institution city
const city_validation = {
  id: 'city',
  type: 'text',
  placeholder: 'City',
  validation: {
    required: { value: true, message: 'required' },
    maxLength: { value: 60, message: 'max 30 characters' },
  },
};

// institution state
const state_validation = {
  id: 'state',
  type: 'text',
  placeholder: 'State',
  validation: {
    required: { value: true, message: 'required' },
    minLength: { value: 2, message: '2 character state abreviation' },
    maxLength: { value: 2, message: '2 character state abreviation' },
  },
};

// institution postcode
const postcode_validation = {
  id: 'postcode',
  type: 'text',
  placeholder: 'Postcode',
  validation: {
    required: { value: true, message: 'required' },
    pattern: { value: /^\d{5}/i, message: '5 digit number' },
  },
};

// degree name
const degree_validation = {
  id: 'degree',
  placeholder: 'Select Degree ...',
  isClearable: true,
  isSearchable: true,
  options: [
    { value: 'aa', label: 'Associates of Arts' },
    { value: 'as', label: 'Associates of Science' },
    {
      value: 'ba',
      label: 'Bachelors of Arts',
    },
    {
      value: 'bs',
      label: 'Bachelors of Science',
    },
  ],
  validation: {
    required: { value: true, message: 'required' },
  },
};

// majors
const majors_validation = {
  id: 'majors',
  placeholder: 'Select Major(s) ...',
  validation: {
    required: { value: true, message: 'required' },
  },
};

// minors
const minors_validation = {
  id: 'minors',
  placeholder: 'Select Minor(s) ...',
  validation: {
    required: { value: true, message: 'required' },
  },
};

// gpa
const gpa_validation = {
  id: 'gpa',
  type: 'number',
  label: 'GPA',
  min: 0,
  max: 5,
  step: 0.01,
  default: '1',
  validation: {
    required: { value: true, message: 'required' },
    min: { value: 1.0, message: 'minimum is 1.0' },
    max: { value: 4.5, message: 'maximum is 4.5' },
  },
};

// start date
const startdate_validation = {
  id: 'startDate',
  label: 'Start Date',
  type: 'date',
  validation: {
    required: { value: true, message: 'required' },
  },
};

// end date
const enddate_validation = {
  id: 'endDate',
  label: 'End Date',
  type: 'date',
  validation: {},
};

// highlighted
const highlighted_validation = {
  id: 'highlighted',
  label: 'Highlighted?',
  validation: {},
};

export {
  institutionname_validation,
  institutionphone_validation,
  address_validation,
  city_validation,
  state_validation,
  postcode_validation,
  degree_validation,
  majors_validation,
  minors_validation,
  startdate_validation,
  gpa_validation,
  enddate_validation,
  highlighted_validation,
};
