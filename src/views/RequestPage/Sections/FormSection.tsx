import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { useContentfulContext } from "lib/contentful";

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

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

  const { colorCodes } = useContentfulContext();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Please submit your needs here</h2>
          <h4 className={classes.description}>
            We are making every effort to match donors with the requests.
          </h4>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Your Name"
                id="name"
                formControlProps={{ fullWidth: true }}
                inputProps={{ name: 'name', onChange: setName }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Your Email"
                id="email"
                formControlProps={{ fullWidth: true }}
                inputProps={{ name: 'email', type: 'email', onChange: setEmail }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Your Phone"
                id="phone"
                formControlProps={{ fullWidth: true }}
                inputProps={{ name: 'phone', type: 'tel', onChange: setPhone }}
              />
            </GridItem>
            <CustomInput
              labelText="Your Message"
              id="message"
              formControlProps={{ fullWidth: true, className: classes.textArea }}
              inputProps={{ multiline: true, rows: 5, name: 'message', onChange: setMessage }}
            />
            <GridItem xs={12} sm={12} md={4}>
              {console.log(colorCodes.blue)}
              <Button css={css`background-color: ${colorCodes.blue} !important;`}>Send Message</Button>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
