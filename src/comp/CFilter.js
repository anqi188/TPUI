import React from "react";
import { Component } from "react";
import { Select } from "antd";
import { Slider, InputNumber, Row, Col } from "antd";

import "../css/CFilter.less";

const { Option } = Select;

class SRFilter extends Component {
  state = {
    inputValue: [0, 100],
  };

  onChange = (value) => {
    console.log(value);
    this.setState({
      inputValue: value,
    });
  };

  onChange1 = (value) => {
    console.log(tmp);
    var tmp = this.state.inputValue;
    tmp[0] = value;

    this.setState({
      inputValue: tmp,
    });
  };

  onChange2 = (value) => {
    console.log(tmp);
    var tmp = this.state.inputValue;
    tmp[1] = value;

    this.setState({
      inputValue: tmp,
    });
  };

  render() {
    const marks = {
      26: "",
      37: "",
      100: "",
    };

    const { inputValue } = this.state;

    return (
        <div className="myfilter">
          <Select
            showSearch
            style={{ width: 240 }}
            placeholder="Select a feature"
            defaultValue="wpm"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            size="large"
          >
            <Option value="iki">Inter-key interval</Option>
            <Option value="wpm">Words per minute</Option>
            <Option value="bs">Number of backspaces</Option>
            <Option value="uer">Uncorrected error rate</Option>
            <Option value="cer">Corrected error rate</Option>
            <Option value="fx">Number of fixations</Option>
            <Option value="fd">Fixation duration</Option>
            <Option value="gs">Number of gaze shift</Option>
            <Option value="gk">Time ratio for gaze on keyboard</Option>
            <Option value="ds">Distance to the next key</Option>
          </Select>
          <div>
            <Slider
              className="cslider"
              range
              step={0.001}
              marks={marks}
              defaultValue={[26, 37]}
              onChange={this.onChange}
              value={typeof inputValue === "object" ? inputValue : [0, 100]}
            />
          </div>
          <div className="myinput">
            <InputNumber
              className="cinput"
              range
              style={{ margin: "0 16px" }}
              value={inputValue[0]}
              onChange={this.onChange1}
              size="large"
            />
            <span>-</span>
            <InputNumber
              className="cinput"
              range
              style={{ margin: "0 16px" }}
              value={inputValue[1]}
              onChange={this.onChange2}
              size="large"
            />
          </div>
        </div>
    );
  }
}

export { SRFilter };
