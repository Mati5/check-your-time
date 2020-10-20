import React from 'react';
import { Formik } from 'formik';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ManageTimerFormStyle, FormRow, FormActions } from './style';

const ManageTimerForm = (props) => {

    return (
        <ManageTimerFormStyle>
            <Formik
                initialValues={{ 
                    title: props.selectedTimer ? props.selectedTimer.title : '', 
                    description: props.selectedTimer ? props.selectedTimer.description : '' 
                }}
                onSubmit={(values) => {
                    props.action(values);      
                }}>
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <FormRow>
                            <TextField
                                fullWidth
                                id="standard-name"
                                label="Name"
                                value={values.title}
                                onChange={handleChange}
                                name="title"
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
                            <Button variant="contained" color="primary" type="submit">Add</Button>
                        </FormActions>
                    </form>
                )}
                </Formik>
        </ManageTimerFormStyle>
    );
}

export default ManageTimerForm;