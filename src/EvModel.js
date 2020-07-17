import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

class Demo extends React.Component {
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

export default Demo;

// ReactDOM.render(<Demo />, mountNode);
