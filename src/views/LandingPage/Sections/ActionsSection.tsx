import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle";
import { useContentfulContext } from "lib/contentful";

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const { landing, getColorEntry } = useContentfulContext();

  return (
    <div className={classes.section}>
      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            Want to help our cause? We are working to get a hold on all of the price-gouging etc... going on in the marketplace and secure more favorable pricing through our network to maximize the amount of masks and protective gear that our healthcare workers are receiving than you would on the open market or with just a small order. The Healthcare system and Government is not moving fast enough and we’re trying to help get healthcare workers the gear that they desperately need. Prices are changing constantly, sea freight is taking too long for supplies which are needed today. Air freight is in limited supply coming from overseas there are a lack of flights due to travel restrictions. This is a multi-layered problem we are trying to solve with healthcare workers caught in the middle. Help us help them.
          </h5>
          <h5 className={classes.description}>
            Due to global demand, there is an abundance of manufacturers whom have popped up overnight to fill the demand, some with inconsistent quality and practices.  All supplies we source are carefully vetted to check certifications and manufacturing sources to confirm they comply with U.S. regulations.  Even with all of that said, there is still a shortage of supplies and the Federal government has eased restrictions to allow protective gear certified from other countries.  We have familiarized ourselves with the nuances of these regulations and regulatory bodies and will do our best to get in quality protective equipment to our healthcare workers so desperately in need.
          </h5>
        </GridItem>
      </GridContainer> */}
      <div>
        <GridContainer css={css`justify-content: center;`}>
          {landing?.fields.actions.map(action => (
            <GridItem xs={12} sm={12} md={4} key={action.sys.id}>
              <InfoArea
                title={action.fields.title ?? ''}
                description={action.fields.description ?? ''}
                iconContent={iconClasses =>
                  action.fields.iconImage
                    ? <img
                        src={action.fields.iconImage?.fields.file.url}
                        alt={action.fields.title}
                        className={iconClasses}
                      /> :
                  action.fields.fontAwesomeIcon
                    ? <i
                        className={`${iconClasses} ${action.fields.fontAwesomeIcon}`}
                        css={css`
                          ${(() => {
                            const color = getColorEntry(action.fields.iconColor?.sys.id)?.fields?.code;
                            return color ? `color: ${color};` : '';
                          })()}
                          display: inline-flex;
                          align-items: center;
                          justify-content: center;
                          &:before { font-size: 3.8rem; }
                        `}
                      /> :
                  ''
                }
                iconColor="info"
                vertical
              />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
