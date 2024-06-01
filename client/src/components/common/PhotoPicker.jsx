import React from "react";
import { Component } from "react/cjs/react.production.min";
import {ReactDOM} from "react-dom";

function PhotoPicker({onChange}) {
  const component =(

   <input type= "file" hidden id= "photo-picker" onChange={onChange}/>
  );
  return ReactDOM.createPortal(component,document.getElementById("photo-picker-element")
);
}

export default PhotoPicker;
