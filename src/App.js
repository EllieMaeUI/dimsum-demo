import React from "react";
import DSButton from '@elliemae/ds-basic/Button'
import "./App.scss";

export default () => (
  <DSButton 
    labelText='Dimsum' 
    size='l' 
    onClick={console.log('Hello Dimsum')}
  />
);
