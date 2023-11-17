import { useState } from "react";

export default function useForm(initialValues) {
  const [value, setValue] = useState(initialValues);

  const handleToggle = (value) => {
    setValue(currentValue => typeof value === 'boolean' ? value : !currentValue);
  };

  return [value, handleToggle];
}
