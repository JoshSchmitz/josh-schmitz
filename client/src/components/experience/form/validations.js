const position_validation = {
  id: 'position',
  type: 'text',
  placeholder: 'Position title',
  validation: {
    required: { value: true, message: 'required' },
    maxLength: { value: 60, message: 'max 60 characters' },
  },
};

export { position_validation };
