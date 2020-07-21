import React from "react";
import { Component } from "react";
import { Card } from "antd";

class EvCard1 extends Component {
  render() {
    return (
      <Card style={{ width: "85%", height:450,fontSize: 18 }}>
        <p>The model training message will be presented here......</p>
        <p>The model training message will be presented here......</p>
        <p>The model training message will be presented here......</p>
      </Card>
    );
  }
}

export { EvCard1 };
