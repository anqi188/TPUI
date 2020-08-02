import React from "react";
import { Component } from "react";

import emitter from "../events"; //引入创建的events.js文件

import "../css/Tr/TrDK.less";

class Key extends Component {
  render() {
    return (
      <div className="key">
        <div className="keycap">
          <div className="keytext">{this.props.letter}</div>
        </div>
      </div>
    );
  }
}

class SpaceKey extends Component {
  render() {
    return (
      <div className="space">
        <div className="spacecap"></div>
      </div>
    );
  }
}

function ipValue(fields, name) {
  return fields.filter((item) => item.name[0] === name)[0].value;
}

class MyKeyboard extends Component {
  renderKey(nk, lt) {
    var fields = this.props.fields;
    const rowData = [];

    if (JSON.stringify(fields[0]) != undefined) {
      // console.log(fields);

      var numRowKey = ipValue(fields, nk);
      const rowLetters = ipValue(fields, lt).toUpperCase().split("");

      for (let j = 0; j < numRowKey; j++) {
        rowData.push({
          index: `${j}`,
          letter: rowLetters[j],
        });
      }

      const keyItems = rowData.map((k) => (
        <Key key={k.index} letter={k.letter} />
      ));

      return <div className="board-row">{keyItems}</div>;
    }
  }

  renderSpace() {
    return (
      <div className="board-row">
        <SpaceKey />
      </div>
    );
  }

  render() {
    // const fields = this.props.fields;
    // console.log(fields);
    return (
      <div className="keyboard">
        {/* {this.renderKey(0)} */}
        {this.renderKey("nk3", "lt3")}

        {/* {this.renderKey("nk1", "lt1")}
        {this.renderKey("nk2", "lt2")}
        {this.renderKey("nk3", "lt3")} */}

        {this.renderSpace()}
      </div>
    );
  }
}

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
    };
  }

  // 创造监听事件
  componentDidMount() {
    this.eventEmitter = emitter.addListener("kbPara", (data) => {
      this.setState({
        fields: data,
      });
    });
  }

  // 销毁监听事件
  componentWillUnmount() {
    emitter.removeListener("kbPara", (data) => {
      this.setState({
        data,
      });
    });
  }

  render() {
    const { fields } = this.state;
    // console.log(fields);
    return (
      <div className="device">
        <div className="board-row">
          <MyKeyboard fields={fields} />
        </div>
      </div>
    );
  }
}

class TrDK extends Component {
  render() {
    return (
      <div className="trdk">
        <Device></Device>
      </div>
    );
  }
}

export { TrDK };
