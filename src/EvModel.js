import React from "react";
import { Component } from "react";
import { Button } from "antd";
import "./css/EvModel.less";

import { EStep1 } from "./comp/CSteps";
import { ECollapse } from "./comp/CCollapse";
import { EvCS } from "./cont/EvCS";
import { EvMS } from "./cont/EvMS";

class Demo extends Component {
  render() {
    const bgStyle = {
      backgroundColor: "#fff",
      marginTop: 40,
      padding: "30px 30px",
    };
    return (
      <div>
        <EStep1 />
        <ECollapse header="Corpus Selection">
          <EvCS />
        </ECollapse>
        <ECollapse header="Model Selection">
          <EvMS />
        </ECollapse>
        <div className="start-ev-btn" style={bgStyle}>
          <Button className="button" type="primary" size="large">
            Start Evaluating
          </Button>
        </div>
      </div>
    );
  }
}

export default Demo;
