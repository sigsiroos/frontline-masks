import React from "react";
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

/** @see {@tutorial https://docs.netlify.com/forms/setup/} */
export default function FormSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>I have PPE to donate</h2>
          <h4 className={classes.description}>
            If you have supply of PPE, please let us know so we can help you donate
          </h4>
          <form name="donate" method="POST" data-netlify="true">
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{ fullWidth: true }}
                  inputProps={{ name: 'name' }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{ fullWidth: true }}
                  inputProps={{ name: 'email', type: 'email' }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Your Phone"
                  id="phone"
                  formControlProps={{ fullWidth: true }}
                  inputProps={{ name: 'phone', type: 'tel' }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{ fullWidth: true, className: classes.textArea }}
                inputProps={{ multiline: true, rows: 5, name: 'message' }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button type="submit" color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
