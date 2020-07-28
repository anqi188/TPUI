import React from "react";
import { Component } from "react";
import "./css/EvResult.less";

import { EStep3, EStep4 } from "./comp/CSteps";
import { ECollapse } from "./comp/CCollapse";

import { EvMR } from "./cont/EvMR";
import { EvSR } from "./cont/EvSR";

class EvResult extends Component {
  render() {
    return (
      <div>
        <EStep4 />
        <ECollapse header="Main Result">
          <EvMR />
        </ECollapse>
        <ECollapse header="Sentence-level Results">
          <EvSR />
        </ECollapse>
      </div>
    );
  }
}

export default EvResult;
