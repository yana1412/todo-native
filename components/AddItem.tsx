import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AddItemProps, formValues } from '../types/todo';

import { styles } from '../styles/AddItem.style';
import { ButtonStyled, TextStyled, TextInputStyled } from '../styles/AddItem.style';

export default function AddItem({ addNewItem }: AddItemProps) {
    const onPressHandler = (values: formValues, { resetForm }: any) => {
        addNewItem(values.name, values.description, values.date);
        resetForm({ values: initialValues });
    }

    const initialValues: formValues = {
        name: '',
        description: '',
        date: '',
    }

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .trim()
            .required('Please enter your full name'),
        description: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please enter description'),
        date: Yup.string().required('Required'),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, { resetForm }) => {
                onPressHandler(values, { resetForm });
            }}
        >
            {({ values, errors, touched, handleChange, handleSubmit, setFieldTouched, isValid, handleBlur }) => (

                <View style={styles.container}>
                    <View>
                        <View>
                            <TextInputStyled
                                value={values.name}
                                placeholder="add todo's name"
                                onChangeText={handleChange('name') as any}
                                onBlur={handleBlur('name') as any}
                            />
                            {errors.name && (
                                <Text style={{ color: 'red' }}>{errors.name as any}</Text>
                            )}
                        </View>
                        <TextInputStyled
                            value={values.description}
                            placeholder='add description'
                            onChangeText={handleChange('description') as any}
                            onBlur={handleBlur('description') as any}
                        />
                        {errors.description && (
                            <Text style={{ color: 'red' }}>{errors.description as any}</Text>
                        )}
                        <TextInputStyled
                            value={values.date}
                            placeholder='add date'
                            onChangeText={handleChange('date') as any}
                            onBlur={handleBlur('date') as any}
                        />
                        {errors.date && (
                            <Text style={{ color: 'red' }}>{errors.date as any}</Text>
                        )}
                    </View>
                    <ButtonStyled onPress={handleSubmit as any} size={'$6'} theme="active">
                        <TextStyled>Add item</TextStyled>
                    </ButtonStyled>

                </View>
            )}
        </Formik>
    )
}







