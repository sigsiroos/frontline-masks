import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

/** @see {@tutorial https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-a-stateful-react-form} */
const encode = (data: any) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

/** @see {@tutorial https://docs.netlify.com/forms/setup/} */
export default function FormSection() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          {/* <h2 className={classes.title}>I have PPE to donate</h2>
          <h4 className={classes.description}>
            If you have supply of PPE, please let us know so we can help you donate
          </h4> */}
          <form name="request" data-netlify>
            <input type="text" name="name" required />
            <input type="email" name="email" required />
            <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            <textarea name="message"></textarea>
            <button type="submit">Request</button>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
