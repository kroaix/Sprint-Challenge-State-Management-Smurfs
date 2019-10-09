import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const SmurfForm = ({ postSmurf }) => {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const handleChanges = event => {
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setSmurf({ name: "", age: "", height: "" });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newSmurf = {
      ...smurf,
      id: Date.now()
    };
    postSmurf(newSmurf);
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
    resetForm();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2>Add a new Smurf!</h2>
        <Input
          type="text"
          name="name"
          value={smurf.name}
          onChange={handleChanges}
          placeholder="Name"
        />
        <Input
          type="text"
          name="age"
          value={smurf.age}
          onChange={handleChanges}
          placeholder="Age"
        />
        <Input
          type="text"
          name="height"
          value={smurf.height}
          onChange={handleChanges}
          placeholder="Height"
        />
        <Button color="green">
          Add
        </Button>
      </Form>
    </>
  );
};

export default SmurfForm;