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
              }}>
              <table>
              <tr>
                                <td>NAME</td>
                                <td>SURNAME</td>
                                <td>AGE</td>
                                <td>POSITION</td>
                            </tr>
                            </table>
            

              {this.state.buttonClicked
                ? this.state.data.map(data => {
                    return (
                      <React.Fragment>

                        <table>
                            
                            <tr>
                                <th>{data.name}</th>
                                <th>{data.surname}</th>
                                <th>{data.age}</th>
                                <th>{data.position}</th>
                            </tr>
                            </table>
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