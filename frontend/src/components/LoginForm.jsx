import axios from 'axios';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './auth';


const LoginForm = () => {
    const [username, setUser] = useState(''); 
    const auth =  useAuth();
    const navigate = useNavigate();
    const initialValues = {
        username,
        password: '',
    }
    const onSubmit = async (values, formikBag) => {
            axios.post('/api/v1/login',{
                username: values.username,
                password: values.password,
            })
            .then( (response) => {
                const { token, username } = response.data;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                setUser(username);
                auth.login(username);
                navigate('/');
                })
            .catch((error) => {
                // console.log(formikBag);
                formikBag.setStatus(true);
                values.error = error.response.data.error
            })
    }

    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({status}) => (
            <Form className="col-12 col-md-6 mt-3 mt-mb-0">
                <h1 className="text-center mb-4">Войти</h1>
                <div className="form-floating mb-3 ">
                    <Field
                        className="form-control"
                        name="username"
                        autocomplete="username"
                        required=""
                        placeholder="Ваш ник"
                        id="username"
                    />
                    <ErrorMessage name='username'>
                    {(errorMsg) => <div className='text-danger'>{errorMsg}</div>}
                    </ErrorMessage>
                    <label for="username">Ваш ник</label>
                </div>
                <div className="form-floating mb-4">
                    <Field
                        className="form-control"
                        name="password"
                        autocomplete="current-password"
                        required="" placeholder="Пароль"
                        type="password"
                        id="password"
                    />
                    <ErrorMessage name='password'>
                    {(errorMsg) => <div className='text-danger'>{errorMsg}</div>}
                    </ErrorMessage>
                    {status ? <div className="text-danger">Неверные имя пользователя или пароль</div> : null }
                    <label className="form-label" for="password">Пароль</label>
                </div>
                <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
               
            </Form>
        )}
      </Formik>
    );
}   

export default LoginForm;
