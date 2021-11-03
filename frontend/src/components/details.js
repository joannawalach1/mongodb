import React, { Component } from "react";
import axios from "axios";
import "./details.css";

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
              <div>
              <table>
                         <tr className = "table_heading">
                           <th className = "table_name">NAME</th>
                           <th className = "table_surname">SURNAME</th>
                           <th className = "table_age">AGE</th>
                           <th className = "table_position">POSITION</th>
                           <th className = "table_action">ACTION</th>
                         </tr>
                       </table>
              </div>
              {this.state.buttonClicked
                ? this.state.data.map(data => {
                    return (
                      <React.Fragment>
                       <table>
                         <tr className = "table_row">
                           <th className = "table_name">{data.name}</th>
                           <th className = "table_surname">{data.surname}</th>
                           <th className = "table_age">{data.age}</th>
                           <th className = "table_position">{data.position}</th>
                           <th>
                             <button>edit</button>
                             <button>remove</button>
                           </th>
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