import React from "react";
import { Component } from "react";
import { Radio, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { EvCard3 } from "../comp/CCard";
import { SRFilter } from "../comp/CFilter";

import "../css/EvSR.less";

class  extends Component {

  render() { 
    return (           <div className="statfilter">
    <SRFilter />
    <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
  </div> );
  }
}
 

class EvSR extends Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      // display: 'block',
      height: "80px",
      lineHeight: "30px",
    };

    const { value } = this.state;

    return (
      <div className="evsr">
        <EvCard3 title="Filter">
          <Radio.Group
            className="radioG1"
            onChange={this.onChange}
            value={value}
          >
            <div className="corpus">
              <Radio style={radioStyle} value={1}>
                Sentence
                {value === 1 ? <EvCS_S1 /> : <EvCS_S1_d/>}
              </Radio>
              <Radio style={radioStyle} value={2}>
                Statistic feature
              </Radio>
            </div>
          </Radio.Group>
{/*           <div className="statfilter">
            <SRFilter />
            <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
          </div> */}
          
          
        </EvCard3>
      </div>
    );
  }
}

export { EvSR };
