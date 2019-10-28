import React from 'react';
import { Formik } from 'formik';
import { ManageTaskFormStyle, FormRow, FormActions } from './style';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ManageTaskForm = (props) => {

    return (
        <ManageTaskFormStyle>
            <Formik
                initialValues={{ name: '', description: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(values);
                        props.addTask(values);
                        setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <FormRow>
                            <TextField
                                fullWidth
                                id="standard-name"
                                label="Name"
                                value={values.name}
                                onChange={handleChange}
                                name="name"
                                margin="normal" />
                        </FormRow>
                        <FormRow>
                            <TextField
                                fullWidth
                                id="standard-desc"
                                label="Description"
                                value={values.description}
                                name="description"
                                onChange={handleChange}
                                margin="normal" />
                        </FormRow>
                        <FormActions>
                            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>Add</Button>
                        </FormActions>
                    </form>
                )}
                </Formik>
        </ManageTaskFormStyle>
    );
}

export default ManageTaskForm;