import React from "react";
import { useFormik } from "formik";
import swal from '@sweetalert/with-react';
import * as Yup from "yup";
import './modal.css'

export const Modal = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: '',
            email: "",
            passport_number: "",
            phone: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Введте свое имя'),
            lastName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Введите свою фамилию'),
            email: Yup.string()
                .email("Invalid email format")
                .required("Введите адресс электронной почты"),
            passport_number: Yup.string()
                .min(11, "Minimum 8 characters")
                .required("Введите номер паспорта"),
            phone: Yup.string()
                .min(12, "Minimum 12 characters")
                .max(13, "If use '+' 13 characters")
                .required("Введите номер телефона"),
        }),
        onSubmit: values => {
            swal({
                icon: "success",
                buttons: {
                    cancel: 'Close'
                },
                content: <h1>Thank you!</h1>
            });
        }

    });

    return (
        <div>
            <h1>Buy ticket</h1>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label className='validate_text'  htmlFor='name'>First Name</label>
                    <input className='validate_input'
                           id='name'
                        type="text"
                        name="firstName"
                           placeholder='Например: Ексакустодиан'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.firstName && formik.touched.firstName && (
                        <p className='error_text'>{formik.errors.firstName}</p>
                    )}
                </div>

                <div>
                    <label className='validate_text' htmlFor='lastName'>Second Name</label>
                    <input className='validate_input'
                        type="text"
                           id='lastName'
                        name="lastName"
                           placeholder='Например: Хачапури'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.lastName && formik.touched.lastName && (
                        <p className='error_text'>{formik.errors.lastName}</p>
                    )}
                </div>
                <div>
                    <label className='validate_text' htmlFor='passport_number'>Passport Number</label>
                    <input className='validate_input'
                           id='passport_number'
                        type="text"
                        name="passport_number"
                           placeholder='Например: 00011133377'
                        value={formik.values.passport_number}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.passport_number && formik.touched.passport_number && (
                        <p className='error_text'>{formik.errors.passport_number}</p>
                    )}
                </div>
                <div>
                    <label className='validate_text' htmlFor='phone'>Phone number</label>
                    <input className='validate_input'
                        type="text"
                           id='phone'
                        name="phone"
                           placeholder='Например: 380667778899'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.phone && formik.touched.phone && (
                        <p className='error_text'>{formik.errors.phone}</p>
                    )}
                </div>
                <div>
                    <label className='validate_text' htmlFor='email'>Email</label>
                    <input className='validate_input'
                           id='email'
                        type="email"
                        name="email"
                           placeholder='Например: name@gmail.com'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p className='error_text'>{formik.errors.email}</p>
                    )}
                </div><br/>


                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}
