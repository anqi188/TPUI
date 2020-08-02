import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { Col, Row, InputNumber, Input } from "antd";
import { Divider, Form } from "antd";
import { TrKS_S1 } from "../comp/CSelect";
import { CRow, CRowV, AKOAdd } from "../comp/CConfig";
import { TCollapseMin } from "../comp/CCollapse";

import PropTypes from "prop-types";

import "../css/Tr/TrKS.less";

class AKO1 extends Component {
  formRef = React.createRef();
  render() {
    const { fields, onChange } = this.context; // 获取context的值

    return (
      <div className="ako">
        <Form
          ref={this.formRef}
          name="control-ref"
          fields={fields}
          onFieldsChange={(changedFields, allFields) => {
            onChange(allFields);
          }}
        >
          <Row id="r1">
            <Col className="akocol" span={4}>
              <label>Row 1</label>
              {/* <Form.Item name="row1" label="Row 1"></Form.Item> */}
            </Col>
            <Col className="akocol" span={8}>
              <Form.Item
                name="nk1"
                label="Number of Keys"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Input
                  // defaultValue={10}
                  size="large"
                  style={{ margin: "auto 20px", width: 100 }}
                  min={1}
                  max={1}
                  placeholder={10}
                />
              </Form.Item>
            </Col>
            <Col className="akocol" span={8}>
              <Form.Item
                name="lt1"
                label="Letters"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Input
                  // defaultValue={"QWERTYUIOP"}
                  size="large"
                  style={{ margin: "0px 20px", width: 200 }}
                  min={1}
                  max={10}
                  placeholder={10}
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider style={{ margin: "0 0 " }}></Divider>

          <Row id="r2">
            <Col className="akocol" span={4}>
              <label>Row 2</label>
              {/* <Form.Item name="row1" label="Row 1"></Form.Item> */}
            </Col>
            <Col className="akocol" span={8}>
              <Form.Item
                name="nk2"
                label="Number of Keys"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Input
                  // defaultValue={9}
                  size="large"
                  style={{ margin: "auto 20px", width: 100 }}
                  min={1}
                  max={11}
                  placeholder={9}
                />
              </Form.Item>
            </Col>
            <Col className="akocol" span={8}>
              <Form.Item
                name="lt2"
                label="Letters"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Input
                  // defaultValue={"ASDFGHJKL"}
                  size="large"
                  style={{ margin: "0px 20px", width: 200 }}
                  min={1}
                  max={10}
                  placeholder={10}
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider style={{ margin: "0 0 " }}></Divider>

          <Row id="r3">
            <Col className="akocol" span={4}>
              <label>Row 3</label>
              {/* <Form.Item name="row1" label="Row 1"></Form.Item> */}
            </Col>
            <Col className="akocol" span={8}>
              <Form.Item
                name="nk3"
                label="Number of Keys"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Input
                  defaultValue={7}
                  size="large"
                  style={{ margin: "auto 20px", width: 100 }}
                  min={1}
                  max={11}
                  placeholder={7}
                />
              </Form.Item>
            </Col>
            <Col className="akocol" span={8}>
              <Form.Item
                name="lt3"
                label="Letters"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Input
                  defaultValue={"ZXCVBNM"}
                  size="large"
                  style={{ margin: "0px 20px", width: 200 }}
                  min={1}
                  max={10}
                  placeholder={10}
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider style={{ margin: "0 0 " }}></Divider>
        </Form>
        <AKOAdd />
      </div>
    );
  }
}

AKO1.contextTypes = {
  fields: PropTypes.array,
  onChange: PropTypes.func,
};

class TrKS extends Component {
  render() {
    return (
      <div>
        <CRow title="Keyboard Language">
          <TrKS_S1 />
        </CRow>
        <TCollapseMin header="Advanced">
          <CRowV className="myako" title="Alphabetical Key Order">
            <AKO1 />
          </CRowV>
        </TCollapseMin>
      </div>
    );
  }
}

export { TrKS };
