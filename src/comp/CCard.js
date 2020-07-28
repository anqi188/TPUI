import React from "react";
import { Component } from "react";
import { Card, Button } from "antd";

import "../css/CCard.less";

class EvCard1 extends Component {
  render() {
    return (
      <Card style={{ width: "85%", height: 450, fontSize: 18 }}>
        <p>The model training message will be presented here......</p>
        <p>The model training message will be presented here......</p>
        <p>The model training message will be presented here......</p>
      </Card>
    );
  }
}

class EvCard2 extends Component {
  render() {
    var title = (
      <ul>
        <li>{this.props.title}</li>
      </ul>
    );
    return (
      <Card
        className="evcard2"
        title={title}
        headStyle={{ height: 63, fontSize: 20 }}
        style={{ margin: "30px 30px", fontSize: 18 }}
      >
        {this.props.children}
      </Card>
    );
  }
}

// with actions
class EvCard3 extends Component {
  render() {
    var title = (
      <ul>
        <li>{this.props.title}</li>
      </ul>
    );
    return (
      <Card
        className="evcard3"
        title={this.props.title}
        headStyle={{ height: 63, fontSize: 20 }}
        style={{ margin: "30px 30px", fontSize: 18 }}
        actions={[
          <Button className="button" type="primary" ghost>
            Fliter
          </Button>,
          <Button className="button">Clear</Button>,
        ]}
      >
        {this.props.children}
      </Card>
    );
  }
}

export { EvCard1, EvCard2, EvCard3 };
