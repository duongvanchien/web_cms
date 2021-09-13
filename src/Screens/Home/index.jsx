import React from "react";
import {useSelector} from "react-redux";
import {TabName} from "../../Components/TabName";
import {currentUser} from "../../Redux/slices/userSlice";

export const HomeScreen = () => {
  return (
    <>
      <TabName name='Trang chủ' />
    </>
  );
};
