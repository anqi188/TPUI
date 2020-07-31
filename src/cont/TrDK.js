import React from "react";
import { Component } from "react";
import { Col, Row, InputNumber } from "antd";
import { Divider } from "antd";
import { TrKS_S1 } from "../comp/CSelect";
import { CRow, CRowV, AKOAdd } from "../comp/CConfig";
import { TCollapseMin } from "../comp/CCollapse";

import { List, Avatar, Space } from "antd";

import "../css/Tr/TrDK.less";

class Key extends Component {
  render() {
    return <div className="key"></div>;
  }
}

class Keyboard extends Component {
  renderKey(i) {
    return <Key />;
  }

  render() {
    return (
      <div className="keyboard">
        <div className="board-row">
          {/* {this.renderKey(0)}
          {this.renderKey(1)}
          {this.renderKey(2)} */}
        </div>
      </div>
    );
  }
}

class Device extends Component {
  render() {
    return (
      <div className="device">
        <Keyboard />
      </div>
    );
  }
}

class TrDK extends Component {
  render() {
    return (
      <div className="trdk">
        <Device>
          <Keyboard></Keyboard>
        </Device>
      </div>
    );
  }
}

export { TrDK };
