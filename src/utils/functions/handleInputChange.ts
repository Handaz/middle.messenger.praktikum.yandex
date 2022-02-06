import Input from '../../components/form/input';

const handleInputChange = (input: Input, e: FocusEvent) => {
  const element = e.target as HTMLInputElement;
  input.setProps({ value: element.value });
};

export default handleInputChange;
