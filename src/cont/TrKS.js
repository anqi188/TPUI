import React from "react";
import { Component } from "react";
import { Col, Row, InputNumber } from "antd";
import { Divider } from "antd";
import { TrKS_S1 } from "../comp/CSelect";
import { CRow, CRowV, AKOAdd } from "../comp/CConfig";
import { TCollapseMin } from "../comp/CCollapse";

import { List, Avatar, Space } from "antd";

import "../css/Tr/TrKS.less";

class AKO extends Component {
  render() {
    const listData = [];
    const numKey = [10, 9, 7];
    const letters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
    for (let i = 0; i < 3; i++) {
      listData.push({
        title: `Row ${i}`,
        title1: "Number of Keys",
        title2: "Letters",
        numKey: numKey[i],
        letters: letters[i],
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      });
    }

    return (
      <div className="ako">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={(item) => (
            <List.Item key={item.title}>
              <Row
                className="ant-list-item-meta-title"
                // strange: cannot change the last divider, have to use another div to affect it
                style={{ margin: "0px auto" }}
              >
                <Col className="akocol" span={4}>
                  {item.title}
                </Col>
                <Col className="akocol" span={8}>
                  <div>{item.title1}</div>
                  <InputNumber
                    size="large"
                    style={{ margin: "auto 20px" }}
                    defaultValue={item.numKey}
                  />
                </Col>
                <Col className="akocol" span={8}>
                  <div>{item.title2}</div>
                  <InputNumber
                    size="large"
                    style={{ margin: "auto 20px", width: 140 }}
                    defaultValue={item.letters}
                  />
                </Col>
              </Row>
            </List.Item>
          )}
        />
        <Divider style={{ margin: "0 0 " }}></Divider>
        <AKOAdd />
      </div>
    );
  }
}

class TrKS extends Component {
  render() {
    return (
      <div>
        <CRow title="Keyboard Language">
          <TrKS_S1 />
        </CRow>
        <TCollapseMin header="Advanced">
          <CRowV className="myako" title="Alphabetical Key Order">
            <AKO />
          </CRowV>
        </TCollapseMin>
      </div>
    );
  }
}

export { TrKS };
