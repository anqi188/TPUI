import React from "react";
import { Component } from "react";
import { Button } from "antd";
import "./css/Tr/TrModel.less";

import { TStep1 } from "./comp/CSteps";
import { ECollapse, TCollapseNxt } from "./comp/CCollapse";
import { EvCard5 } from "./comp/CCard";
import { TrCS } from "./cont/TrCS";
import { TrMC } from "./cont/TrMC";
import { TrDS } from "./cont/TrDS";
import { TrKS } from "./cont/TrKS";
import { TrDK } from "./cont/TrDK";

class TrModel extends Component {
  render() {
    return (
      <div>
        <TStep1 />
        <TCollapseNxt header="Corpus Selection">
          <TrCS />
        </TCollapseNxt>
        <TCollapseNxt header="Model Configuration">
          <TrMC />
        </TCollapseNxt>
        <TCollapseNxt header="Device Specification">
          <TrDS />
        </TCollapseNxt>
        <TCollapseNxt header="Keyboard Setting">
          <TrKS />
        </TCollapseNxt>
        <EvCard5 title="Device and Keyboard Preview">
          <TrDK />
        </EvCard5>
        <div className="start-ev-btn">
          <Button className="button" type="primary" size="large">
            Start Training
          </Button>
        </div>
      </div>
    );
  }
}

export default TrModel;
