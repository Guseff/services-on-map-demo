import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  changeName,
  changeTitle,
  changeCost,
  changeText,
  regNewTask,
} from '../../actions/MarkerActions'

import './style.css';

class NewMarkerForm extends Component {
  constructor() {
    super();

    this.nameChange = this.nameChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.textChange = this.textChange.bind(this);
    this.costChange = this.costChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  nameChange(e) {
    this.props.changeName(e.target.value);
  }
  titleChange(e) {
    this.props.changeTitle(e.target.value);
  }
  textChange(e) {
    this.props.changeText(e.target.value);
  }
  costChange(e) {
    this.props.changeCost(e.target.value);
  }
  handleSubmitForm() {
    this.props.regNewTask('1', '2', 4, '3', this.props.clickCoords);
    this.props.handleCloseModal();
  }

  render() {
    const { handleCloseModal } = this.props;
    return (
      <form>
        <div>
          <label>
            Name:<br/>
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Title:<br/>
            <input type="text" name="title" />
          </label>
        </div>
        <div>
          <label>
            Cost:<br/>
            <input type="text" name="cost" />
          </label>
        </div>
        <div>
          <label>
            Text:<br/>
            <textarea type="text" name="text" />
          </label>
        </div>
        <div>
          <input className="button" type="button" value="Submit" onClick={this.handleSubmitForm} />
          <input className="button" type="reset" value="Cansel" onClick={handleCloseModal} />
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    clickCoords: state.map.clickCoords,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeName: bindActionCreators(changeName, dispatch),
    changeTitle: bindActionCreators(changeTitle, dispatch),
    changeText: bindActionCreators(changeText, dispatch),
    changeCost: bindActionCreators(changeCost, dispatch),
    regNewTask: bindActionCreators(regNewTask, dispatch),
  };
}

NewMarkerForm.propTypes = {
  clickCoords: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMarkerForm);