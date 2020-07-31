import React from "react";
import { Component } from "react";
import { Button } from "antd";
import "./css/Ev/EvModel.less";

import { EStep1 } from "./comp/CSteps";
import { ECollapse } from "./comp/CCollapse";
import { EvCS } from "./cont/EvCS";
import { EvMS } from "./cont/EvMS";

class Demo extends Component {
  render() {
    return (
      <div>
        <EStep1 />
        <ECollapse header="Corpus Selection">
          <EvCS />
        </ECollapse>
        <ECollapse header="Model Selection">
          <EvMS />
        </ECollapse>
        <div className="start-ev-btn">
          <Button className="button" type="primary" size="large">
            Start Evaluating
          </Button>
        </div>
      </div>
    );
  }
}

export default Demo;
