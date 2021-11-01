import React, { Component } from "react";
import axios from "axios";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      buttonClicked: false
    };
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:4000/getData").then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  getDetails() {
    if (!this.state.buttonClicked) {
      this.setState({
        buttonClicked: true
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.getDetails}
            >
              Click
            </button>
            <div
              className="container-fluid"
              style={{
                position: "absolute",
                textAlign: "center",
                marginTop: "50px"
              }}
            >
              {this.state.buttonClicked
                ? this.state.data.map(data => {
                    return (
                      <React.Fragment>
                        <p>
                          {" "}
                          <b>name</b> : {data.name}
                        </p>
                        <p>
                          <b>surname</b> : {data.surname}
                        </p>
                        <p>
                          <b>age</b> : {data.age}
                        </p>
                        <p>
                          <b>position</b> : {data.position}
                        </p>
                        <hr />
                      </React.Fragment>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}