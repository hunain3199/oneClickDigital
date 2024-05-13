import React from 'react';
import { useForm } from 'react-hook-form';


const MyForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form inputs go here */}
      <input type="text" name="firstName" ref={register({ required: true })} />
      {errors.firstName && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default MyForm;
