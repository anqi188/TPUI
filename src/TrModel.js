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

import PropTypes from "prop-types";
import emitter from "./events"; //引入创建的events.js文件

class TrModel extends Component {
  state = {
    fields: [
      {
        name: ["nk1"],
        value: 10,
      },
      {
        name: ["lt1"],
        value: "QWERTYUIOP",
      },
      {
        name: ["nk2"],
        value: 9,
      },
      {
        name: ["lt2"],
        value: "ASDFGHJKL",
      },
      {
        name: ["nk3"],
        value: 7,
      },
      {
        name: ["lt3"],
        value: "ZXCVBNM",
      },
    ],
  };

  // Keyboard setting values pass to here (onChange):
  setFields = (newFields) => {
    this.setState({
      fields: newFields,
    });
  };

  // 给定义context赋值
  getChildContext = () => {
    return {
      fields: this.state.fields,
      onChange: this.setFields,
    };
  };

  // Button to pas the KS values to D&K
  handleClick = () => {
    emitter.emit("kbPara", this.state.fields);
    // console.log(this.state.fields);
  };

  render() {
    // console.log(this.state.fields);
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

        <ECollapse header="Keyboard Setting">
          <TrKS />
          <div className="nxt">
            <Button
              className="button"
              type="primary"
              ghost
              onClick={this.handleClick}
            >
              Preview
            </Button>
            <Button className="button">Clear</Button>
          </div>
        </ECollapse>

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

TrModel.childContextTypes = {
  fields: PropTypes.array,
  onChange: PropTypes.func,
};

export default TrModel;
