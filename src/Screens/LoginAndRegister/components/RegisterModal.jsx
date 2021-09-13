import {Button, DialogActions, DialogContent, DialogTitle, Slide} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {MODAL, STRING, TYPE_ERROR} from "../../../Contant";
import {InputField} from "../../../Components/InputField";
import Logo from "../../../Assets/logo.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .required(TYPE_ERROR.isEmpty)
    .matches(/^[A-z0-9-]{6,16}$/, TYPE_ERROR.usernameError),
  phone: yup
    .string()
    .required(TYPE_ERROR.isEmpty)
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, TYPE_ERROR.phoneError),
  email: yup.string().required(TYPE_ERROR.isEmpty).email(TYPE_ERROR.emailError),
  password: yup.string().required(TYPE_ERROR.isEmpty),
  rePassword: yup
    .string()
    .required(TYPE_ERROR.isEmpty)
    .oneOf([yup.ref("password"), null], TYPE_ERROR.rePasswordError),
});

export const RegisterModal = (props) => {
  const {handleRegister, handleChangeModalType} = props;
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const confirmRegister = (data) => {
    handleRegister(data);
  };

  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
      maxWidth='sm'
      fullWidth={true}
    >
      <form onSubmit={handleSubmit(confirmRegister)}>
        <DialogTitle id='alert-dialog-slide-title' style={{textAlign: "center"}}>
          <div>
            <img src={Logo} />
          </div>
          {STRING.register}
        </DialogTitle>
        <DialogContent>
          <div className='mb-2'>
            <b>{STRING.username}</b>
            <InputField type='text' placeholder={STRING.username} register={register} name='username' />
            {errors.username && <p className='text-danger'>{errors.username.message}</p>}
          </div>

          <div className='mb-2'>
            <b>{STRING.phone}</b>
            <InputField type='text' placeholder={STRING.phone} register={register} name='phone' />
            {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
          </div>

          <div className='mb-2'>
            <b>{STRING.email}</b>
            <InputField type='text' placeholder={STRING.email} register={register} name='email' />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
          </div>

          <div className='mb-2'>
            <b>{STRING.password}</b>
            <InputField type='password' placeholder={STRING.password} register={register} name='password' />
            {errors.password && <p className='text-danger'>{errors.password.message}</p>}
          </div>

          <div className='mb-2'>
            <b>{STRING.re_password}</b>
            <InputField type='password' placeholder={STRING.re_password} register={register} name='rePassword' />
            {errors.rePassword && <p className='text-danger'>{errors.rePassword.message}</p>}
          </div>
        </DialogContent>
        <DialogActions style={{justifyContent: "center", flexDirection: "column"}}>
          <Button variant='contained' color='secondary' type='submit'>
            {STRING.register}
          </Button>
          <small style={{fontSize: "0.8rem", marginTop: "0.4rem"}}>Hoặc</small>
          <b className='mt-2 register_link' onClick={() => handleChangeModalType(MODAL.login)}>
            {STRING.login}
          </b>
        </DialogActions>
      </form>
    </Dialog>
  );
};
