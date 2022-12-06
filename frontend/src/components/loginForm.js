import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {

    const initialValues = {
        username: '',
        password: '',
    }
    const onSubmit = values => {
        console.log('Values', values);
    }
    // const validate = values => {
    //     // values.name
    //     let errors = {};

    //     if(!values.username) {
    //         errors.username = 'Required';
    //     }
    //     if(!values.password) {
    //         errors.password = 'Required';
    //     }
    //     console.log('Errors', errors);
    //     return errors;
    // }

    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().min(6).required('Required'),
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    console.log('Visited Fields', formik.touched);

    return (
        <form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
            <h1 className="text-center mb-4">Войти</h1>
            <div className="form-floating mb-3">
            <input name="username" autocomplete="username"
                onChange={formik.handleChange} value={formik.values.username}
                onBlur={formik.handleBlur}
                required="" placeholder="Ваш ник" id="username" className="form-control"
                />
                { formik.errors.username && formik.touched.username ? (
                <div className="text-danger">{formik.errors.username}</div>
                ) : null }
            <label for="username">Ваш ник</label>
            </div>
            <div className="form-floating mb-4">
            <input name="password" autocomplete="current-password"
            onChange={formik.handleChange} value={formik.values.password}
            onBlur={formik.handleBlur}
            required="" placeholder="Пароль" type="password" id="password"
            className="form-control"/>
                { 
                (formik.errors.password && formik.touched.password) ? (
                <div className="text-danger">{formik.errors.password}</div>
                ) : null }
            <label className="form-label" for="password">Пароль</label>
            </div>
            <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
      </form>
    );
}   

export default LoginForm;