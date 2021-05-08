import { useState } from "react";

function useForm(initialValue) {
  const [formData, setFormData] = useState(initialValue);

  const setFormValue = (key, value) => {
    setFormData({ ...formData, [key]: value });
    console.log("formData", formData, key, value);
  };

  const resetFormValues = () => {
    setFormData(initialValue);
  };

  return [formData, setFormValue, resetFormValues];
}

export default useForm;
