import {yupResolver} from "@hookform/resolvers/yup";
import {Button, DialogActions} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {InputField} from "../../../Components/InputField";
import {MODAL, STRING, TYPE_ERROR} from "../../../Contant";
import "../styles.css";
import Logo from "../../../Assets/logo.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const SignInSchema = yup.object().shape({
  username: yup.string().required(TYPE_ERROR.isEmpty),
  password: yup.string().required(TYPE_ERROR.isEmpty),
});

export const LoginModal = (props) => {
  const {handleLogin, handleChangeModalType} = props;
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const confirmLogin = (data) => {
    handleLogin(data);
  };

  return (
    <div>
      <Dialog
        open={true}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        maxWidth='xs'
        fullWidth={true}
      >
        <form onSubmit={handleSubmit(confirmLogin)}>
          <DialogTitle id='alert-dialog-slide-title' style={{textAlign: "center"}}>
            <div>
              <img src={Logo} />
            </div>
            {STRING.login}
          </DialogTitle>
          <DialogContent>
            <div className='mb-2'>
              <b>{STRING.username}</b>
              <InputField type='text' placeholder={STRING.username} register={register} name='username' />
              {errors.username && <p className='text-danger'>{errors.username.message}</p>}
            </div>

            <div className='mb-2'>
              <b>{STRING.password}</b>
              <InputField type='password' placeholder={STRING.password} register={register} name='password' />
              {errors.password && <p className='text-danger'>{errors.password.message}</p>}
            </div>
          </DialogContent>
          <DialogActions style={{justifyContent: "center", flexDirection: "column"}}>
            <Button variant='contained' color='primary' type='submit'>
              {STRING.login}
            </Button>
            <small style={{fontSize: "0.8rem", marginTop: "0.4rem"}}>Hoặc</small>
            <b className='mt-2 register_link' onClick={() => handleChangeModalType(MODAL.register)}>
              {STRING.register_now}
            </b>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
