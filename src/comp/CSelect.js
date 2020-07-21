import React from "react";
import { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

class EvCS_S1 extends Component {
  render() {
    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a corpus"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        size="large"
        style={{ display: "block", width: "400px", marginTop: "10px" }}
      >
        <Option value="E1">English 1</Option>
        <Option value="E2">English 2</Option>
        <Option value="F1">Finnish 1</Option>
        <Option value="F2">Finnish 2</Option>
      </Select>
    );
  }
}

class EvCS_S1_d extends Component {
  render() {
    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a corpus"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        size="large"
        style={{ display: "block", width: "400px", marginTop: "10px" }}
        disabled
      >
        <Option value="E1">English 1</Option>
        <Option value="E2">English 2</Option>
        <Option value="F1">Finnish 1</Option>
        <Option value="F2">Finnish 2</Option>
      </Select>
    );
  }
}

class EvMS_S1 extends Component {
  render() {
    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a model"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        size="large"
        style={{ display: "block", width: "400px", marginTop: "10px" }}
      >
        <Option value="M1">Default</Option>
        <Option value="M2">Novice (high error rate)</Option>
        <Option value="M3">Expert (low error rate)</Option>
        <Option value="M4">Tremor</Option>
        <Option value="M5">Dyslexia</Option>
      </Select>
    );
  }
}

class EvMS_S1_d extends Component {
  render() {
    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a model"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        size="large"
        style={{ display: "block", width: "400px", marginTop: "10px" }}
        disabled
      >
        <Option value="M1">Default</Option>
        <Option value="M2">Novice (high error rate)</Option>
        <Option value="M3">Expert (low error rate)</Option>
        <Option value="M4">Tremor</Option>
        <Option value="M5">Dyslexia</Option>
      </Select>
    );
  }
}

export { EvCS_S1, EvCS_S1_d, EvMS_S1, EvMS_S1_d };
