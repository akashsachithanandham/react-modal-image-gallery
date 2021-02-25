import React, { Component } from "react";
import "./photos.scss";
import Modal from "./Modal.js";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    console.log("inside photos", this.props.url);
    return (
      <React.Fragment>
        <div class="row">
          <div className="col-12">
            <img
              onClick={this.showModal}
              src={this.props.url[this.props.index].url}
              height="300px"
              width="100%"
            />
          </div>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>{this.props.url}</p>
          <p>{this.props.index}</p>
          {/* <p>hello</p> */}
        </Modal>
      </React.Fragment>
    );
  }
}

export default Photos;
