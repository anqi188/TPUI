import React from "react";
import { Component } from "react";
import { Steps } from "antd";

import "../css/CSteps.less";

const { Step } = Steps;

class EStep1 extends Component {
  state = {
    current: 0,
  };

  onChange = (current) => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Steps
          type="navigation"
          current={current}
          onChange={this.onChange}
          className="site-navigation-steps"
        >
          <Step status="process" title="Model and Corpus Selection" />
          <Step status="wait" title="Model Evaluating" />
          <Step status="wait" title="Model Performance" />
        </Steps>
      </>
    );
  }
}

class EStep2 extends Component {
  state = {
    current: 0,
  };

  onChange = (current) => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Steps
          type="navigation"
          current={1}
          // current={current}
          // onChange={this.onChange}
          className="site-navigation-steps"
        >
          <Step status="finish" title="Model and Corpus Selection" />
          <Step status="process" title="Model Evaluating" />
          <Step status="wait" title="Model Performance" />
        </Steps>
      </>
    );
  }
}

class EStep3 extends Component {
  state = {
    current: 0,
  };

  onChange = (current) => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Steps
          type="navigation"
          current={1}
          // onChange={this.onChange}
          className="site-navigation-steps"
        >
          <Step status="finish" title="Model and Corpus Selection" />
          <Step status="finish" title="Model Evaluating" />
          <Step status="wait" title="Model Performance" />
        </Steps>
      </>
    );
  }
}

class EStep4 extends Component {
  state = {
    current: 0,
  };

  onChange = (current) => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Steps
          type="navigation"
          current={current}
          onChange={this.onChange}
          className="site-navigation-steps"
        >
          <Step status="finish" title="Model and Corpus Selection" />
          <Step status="finish" title="Model Evaluating" />
          <Step status="finish" title="Model Performance" />
        </Steps>
      </>
    );
  }
}

class EStepV extends Component {
  render() {
    return (
      <Steps progressDot direction="vertical" style={{height: "500px", width:"200px", fontSize:"18px", marginTop:"10px"}} >
        <Step title="Stage 1" status="finish" />
        <Step title="Stage 2" status="finish" />
        <Step title="Stage 3" status="process" />
        <Step title="Stage 4" status="wait" />
        <Step title="Stage 5" status="wait" />
      </Steps>
    );
  }
}

export { EStep1, EStep2, EStep3, EStep4, EStepV };
