import React from "react";
import { Component } from "react";
import { Table } from "antd";

import "../css/CTable.less";

// BF
const columnsBF = [
  {
    title: " ",
    dataIndex: "tbname",
    width: 500,
  },
  {
    title: "Tremor",
    dataIndex: "tremor",
  },
  {
    title: "Expertise",
    dataIndex: "expertise",
  },
  {
    title: "Dyslexia",
    dataIndex: "dyslexia",
  },
];
const dataBF = [
  {
    key: "1",
    tbname: "Behavioural Feature",
    tremor: 0.3,
    expertise: 0.1,
    dyslexia: 0.0,
  },
];

class EvTable1 extends Component {
  render() {
    return (
      <div>
        {/* <h4>Behavioural Feature</h4> */}
        <Table
          pagination={false}
          columns={columnsBF}
          dataSource={dataBF}
          size="default"
        />
      </div>
    );
  }
}

// VM
const columnsVM = [
  {
    title: " ",
    dataIndex: "tbname",
    width: 500,
  },
  {
    title: "K",
    dataIndex: "k1",
  },
  {
    title: "k",
    dataIndex: "k2",
  },
  {
    title: "exec",
    dataIndex: "exec",
  },
  {
    title: "saccade",
    dataIndex: "saccade",
  },
  {
    title: "prep",
    dataIndex: "prep",
  },
];
const dataVM = [
  {
    key: "1",
    tbname: "Vison Model (EMMA)",
    k1: 0.3,
    k2: 0.1,
    exec: 0.0,
    saccade: 80,
    prep: 80,
  },
];

class EvTable2 extends Component {
  render() {
    return (
      <div>
        {/* <h4>Behavioural Feature</h4> */}
        <Table
          pagination={false}
          columns={columnsVM}
          dataSource={dataVM}
          size="default"
        />
      </div>
    );
  }
}

// FM
// VM
const columnsFM = [
  {
    title: " ",
    dataIndex: "tbname",
    width: 500,
  },
  {
    title: "x0",
    dataIndex: "x0",
  },
  {
    title: "y0",
    dataIndex: "y0",
  },
  {
    title: "alpha",
    dataIndex: "alpha",
  },
  {
    title: "x_min",
    dataIndex: "x_min",
  },
  {
    title: "x_max",
    dataIndex: "x_max",
  },
  {
    title: "k_alpha",
    dataIndex: "k_alpha",
  },
];
const dataFM = [
  {
    key: "1",
    tbname: "Finger Model (WHo)",
    x0: 0.3,
    y0: 0.1,
    alpha: 0.0,
    x_min: 80,
    x_max: 80,
    k_alpha: 0.0,
  },
];

class EvTable3 extends Component {
  render() {
    return (
      <div>
        {/* <h4>Behavioural Feature</h4> */}
        <Table
          pagination={false}
          columns={columnsFM}
          dataSource={dataFM}
          size="default"
        />
      </div>
    );
  }
}

export { EvTable1, EvTable2, EvTable3 };
