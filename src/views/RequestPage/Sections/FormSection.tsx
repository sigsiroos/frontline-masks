import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { useContentfulContext } from "contexts/contentful";
import { DOMAttributes } from 'react';

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

  const [requestStatus, setRequestStatus] = useState(undefined as undefined | string | Error | Promise<any>);

  const { colorCodes } = useContentfulContext();

  /** @see {@tutorial https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/} */
  const handleSubmit: DOMAttributes<HTMLFormElement>['onSubmit'] = async e => {
    try {
      setRequestStatus(undefined);
      e.preventDefault();
      const { ORIGIN, wait } = await import('utils');
      const request = wait(fetch(`${ORIGIN}/`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "request", name, email, phone, message })
      }), 2222);
      setRequestStatus(request)
      await request;
      setRequestStatus('Message sent!');
    } catch (err) {
      setRequestStatus(err instanceof Error ? err : new Error(err));
    }
  };

  return (
    <div className={classes.section} css={css`
      .MuiInputBase-formControl::after {
        border-color: ${colorCodes.blue} !important;
      }
    `}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Please submit your PPE needs here</h2>
          {/* <h4 className={classes.description}>
            We are making every effort to match donors with the requests.
          </h4> */}
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{ fullWidth: true }}
                  inputProps={{ name: 'name', onChange: e => setName((e.target as any)?.value) }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{ fullWidth: true }}
                  inputProps={{ name: 'email', type: 'email', onChange: e => setEmail((e.target as any)?.value) }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Your Phone"
                  id="phone"
                  formControlProps={{ fullWidth: true }}
                  inputProps={{ name: 'phone', type: 'tel', onChange: e => setPhone((e.target as any)?.value) }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{ fullWidth: true, className: classes.textArea }}
                inputProps={{ multiline: true, rows: 5, name: 'message', onChange: e => setMessage((e.target as any)?.value) }}
              />
              <GridItem xs={12} sm={12} md={12}>
                <Button type='submit' css={css`background-color: ${colorCodes.blue} !important;`}>
                  Send Message
                </Button>
                <span css={css`margin-left: 1rem; color: ${typeof requestStatus === 'string' ? colorCodes.success : colorCodes.text};`}>
                  {
                    requestStatus instanceof Error ? '' :
                    requestStatus instanceof Promise ? <i className="fas fa-circle-notch fa-spin" /> :
                    requestStatus
                  }
                </span>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
