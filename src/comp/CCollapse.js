import React from "react";
import styled from "styled-components";
import { Component } from "react";

import "../css/CCollapse.less";

import { Collapse } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function callback(key) {
  console.log(key);
}

class ECollapse extends Component {
  state = {
    expandIconPosition: "left",
  };

  render() {
    return (
      <Collapse className="ECollapse" defaultActiveKey={["1"]} onChange={callback}>
        <Panel header={this.props.header} key="1">
          {this.props.children}
        </Panel>
      </Collapse>
    );
  }
}

export { ECollapse };
