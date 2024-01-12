const position_validation = {
  id: 'position',
  type: 'text',
  placeholder: 'Position title',
  validation: {
    required: { value: true, message: 'required' },
    maxLength: { value: 60, message: 'max 60 characters' },
  },
};

const description_validation = {
  id: 'description',
  rows: 10,
  cols: 30,
  placeholder: 'Description',
  validation: {
    required: { value: true, message: 'required' },
  },
};

export { position_validation, description_validation };
