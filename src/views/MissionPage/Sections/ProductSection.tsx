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

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Want to help our cause?</h2>
          <h5 className={classes.description}>
            We are working to maximize the amount of masks and protective gear that our healthcare workers are receiving and to get a hold on the price-gouging happening within in the marketplace to secure more favorable pricing through our network
          </h5>
          <h5 className={classes.description}>
            {/* This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more. */}
            By increasing the amount of masks and protective gear that our healthcare workers would receive compared to small orders placed within the open market, we can maximize the amount of masks and protective gear that our healthcare workers are receiving.
          </h5>
          <h5 className={classes.description}>
            The Healthcare system and Government are not moving fast enough and we’re trying to get healthcare workers the gear they urgently need. Prices are changing constantly, sea freight is taking too long for supplies which are needed today. Air freight is in limited supply coming from overseas there are a lack of flights due to travel restrictions. This is a multi-layered problem we are trying to solve with healthcare workers caught in the middle. Help us help them.
          </h5>
          <h5 className={classes.description}>
            Due to global demand, there is an abundance of manufacturers whom have popped up overnight to fill the demand, some with inconsistent quality and practices.  All supplies we source are carefully vetted to check certifications and manufacturing sources to confirm they comply with U.S. regulations.  Even with all of that said, there is still a shortage of supplies and the Federal government has eased restrictions to allow protective gear certified from other countries. We have familiarized ourselves with the nuances of these regulations and regulatory bodies and will supply the quality protective equipment our healthcare workers so desperately need.
          </h5>
        </GridItem>
      </GridContainer>
      {/* <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div> */}
    </div>
  );
}
