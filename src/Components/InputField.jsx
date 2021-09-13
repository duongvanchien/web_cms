import {TextField} from "@material-ui/core";
import React from "react";

export const InputField = (props) => {
  const {inputRef, type, placeholder, name, register, multiline, rows, defaultValue, disabled} = props;
  return (
    <TextField
      type={type}
      id='outlined-error-helper-text'
      variant='outlined'
      size='small'
      style={{width: "100%"}}
      inputRef={inputRef}
      placeholder={placeholder}
      {...register(name)}
      multiline={multiline}
      rows={rows}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
};
