import React, { Component } from "react";
import AWSCertifiedLogo from "./AWS_Certified_Logo_294x230_Black.png";
import AWSCertifiedCloudPractitionerTag from "./AWS_Certified_Logo__CloudPractitioner_294x230-Black.png";
import "./AWSCertified.css";

class AWSCertified extends Component {
  render() {
    return (
      <div className="awsLogoTag">
        <div className="awsCertifiedLogo">
          <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2018-11-02&ci=AWS00334004">
            <img alt="" src={AWSCertifiedLogo} />
          </a>
        </div>
        <div className="awsCertifiedTag">
          <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2018-11-02&ci=AWS00334004">
            <img alt="" src={AWSCertifiedCloudPractitionerTag} />
          </a>
        </div>
      </div>
    );
  }
}

export default AWSCertified;
