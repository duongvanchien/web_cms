import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {MODAL, ROUTER} from "../../Contant";
import {LoginModal} from "./components/LoginModal";
import {RegisterModal} from "./components/RegisterModal";
import {useSnackbar} from "notistack";

export const LoginAndRegisterScreen = () => {
  const history = useHistory();
  const {enqueueSnackbar} = useSnackbar();
  const [modal, setModal] = useState(MODAL.login);

  const handleChangeModalType = (modalType) => {
    setModal(modalType);
  };

  const handleLogin = async (data) => {
    history.push(ROUTER.overView);
  };

  const handleRegister = async (data) => {
    enqueueSnackbar("Đăng ký tài khoản thành công", {variant: "success"}); //options: error, success, warning, info
  };

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      {modal === MODAL.login ? (
        <LoginModal
          handleLogin={(data) => handleLogin(data)}
          handleChangeModalType={(modalType) => handleChangeModalType(modalType)}
        />
      ) : (
        <RegisterModal
          handleRegister={(data) => handleRegister(data)}
          handleChangeModalType={(modalType) => handleChangeModalType(modalType)}
        />
      )}
    </div>
  );
};
