export default function validate(values) {
  const errors = {};

  if (!values.nameItem || values.nameItem.length < 1) {
    errors.nameItem = true;
  }

  if (!values.nameDescription || values.nameDescription.length < 1) {
    errors.nameDescription = true;
  }

  if (!values.tags || values.tags.length < 1) {
    errors.tags = true;
  }

  return errors;
}
