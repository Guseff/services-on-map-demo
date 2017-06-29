import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '../Form';
import { regNewTask } from '../../actions/MarkerActions';

class NewMarkerForm extends Form {
  constructor() {
    super();

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidMount() {
    this.setState({inpName: this.props.loggedUser.name});
  }

  handleSubmitForm() {
    if (this.nameCheck() || this.titleCheck()) return;
    const { inpName, inpTitle, inpNum, inpText } = this.state;
    this.props.regNewTask(
      'user_id',
      inpName,
      inpTitle,
      inpNum,
      inpText,
      this.props.clickCoords
    );
  }

  render() {
    const { handleCloseModal } = this.props;
    const { inpName, inpTitle, inpNum, inpText } = this.state;
    return (
      <form>
        <h2>To offer new service, please, fill form below:</h2>
        <div>
          <label>
            Name:<br/>
            <input className={(this.state.err.name ? 'red' : '')}
              type="text" name="name"
              value={inpName} 
              onChange={this.nameChange}
              placeholder="What is your name?" />
          </label>
        </div>
        <div>
          <label>
            Title:<br/>
            <input className={(this.state.err.title ? 'red' : '')}
              type="text" name="title"
              value={inpTitle} 
              onChange={this.titleChange}
              placeholder="What kind of help do you need?"/>
          </label>
        </div>
        <div>
          <label>
            Cost:<br/>
            <input className={('')}
              type="number" name="cost"
              value={inpNum} 
              onChange={this.costChange}
              placeholder="How much you are going to pay?" />
          </label>
        </div>
        <div>
          <label>
            Text:<br/>
            <textarea className={('')} 
              type="text" name="text"
              value={inpText} 
              onChange={this.textChange} 
              placeholder="Enter your comment here..." />
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
    loggedUser: state.login.loggedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    regNewTask: bindActionCreators(regNewTask, dispatch),
  };
}

NewMarkerForm.propTypes = {
  clickCoords: PropTypes.array.isRequired,
  loggedUser: PropTypes.object.isRequired,
  regNewTask: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMarkerForm);