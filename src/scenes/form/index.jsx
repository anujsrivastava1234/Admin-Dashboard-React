import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'
import React from 'react'

const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)')

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        address1: '',
        address2: '',
    }
    const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    const userSchema = yup.object().shape({
        firstName: yup.string().required('required'),
        lastName: yup.string().required('required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        contact: yup
            .string()
            .matches(phoneRegExp, 'Phone number is not Valid')
            .required('required'),
        address1: yup.string().required('required'),
        address2: yup.string().required('required')
    });

    return (
        <Box m='20px'>
            <Header title='Create User' subTitle='Create a New User Profile' />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}>
                {({
                    values,
                    errors,
                    touched,
                    handleblur,
                    handleChange,
                    handleFormSubmit,
                }) => (
                    <form onSubmit={handleFormSubmit}>
                        <Box
                            display='grid'
                            gap='30px'
                            gridTemplateColumns='repeat(4 ,minmax(0,1fr))'
                            sx={{
                                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' }
                            }}
                        >
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='First Name'
                                onBlur={handleblur}
                                onChange={handleChange}
                                value={values.firstName}
                                name='firstName'
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            {/* <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Last Name'
                                onBlur={handleblur}
                                onChange={handleChange}
                                value={values.lastName}
                                name='lastname'
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: 'span 2' }}
                            /> */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Email'
                                onBlur={handleblur}
                                onChange={handleChange}
                                value={values.email}
                                name='email'
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Contact'
                                onBlur={handleblur}
                                onChange={handleChange}
                                value={values.contact}
                                name='contact'
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Address1'
                                onBlur={handleblur}
                                onChange={handleChange}
                                value={values.address1}
                                name='address1'
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Address2'
                                onBlur={handleblur}
                                onChange={handleChange}
                                value={values.address2}
                                name='address2'
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{ gridColumn: 'span 4' }}
                            />
                        </Box>
                        <Box display='flex' justifyContent='end' mt='20px'>
                            <Button type='submit' color='secondary' variant='contained'>
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form
