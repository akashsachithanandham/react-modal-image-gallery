import React, { Component } from "react";
import "./photos.scss";
import Modal from "./Modal";
class Photos2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showSecond:false
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
  showSecondModal = () => {
    this.setState({ showSecond: true,show:false });
  };

  hideSecondModal = () => {
    this.setState({ showSecond: false,show:false });
  };

  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div className="col-6">
            <img
              onClick={this.showModal}
              src={this.props.url[this.props.index].url}
              height="300px"
              width="100%"
            />
          </div>
          <div className="col-6">
            <img
              onClick={this.showSecondModal}
              src={this.props.url[this.props.index + 1].url}
              height="300px"
              width="100%"
            />
          </div>
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>{this.props.url}</p>
          <p>{this.props.index}</p>
        </Modal>
        <Modal show={this.state.showSecond} handleClose={this.hideSecondModal}>
          <p>{this.props.url}</p>
          <p>{this.props.index + 1}</p>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Photos2;
