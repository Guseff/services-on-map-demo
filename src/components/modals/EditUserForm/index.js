import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '../Form';
import {  } from '../../../actions/ModalActions';

class EditUserForm extends Form {
  constructor(props) {
    super(props);

    this.state = Object.assign(this.state, {
      inpName: props.loggedUser.name,
      inpTitle: props.loggedUser.email,
      inpText: props.loggedUser.phone,
    });

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm() {

  }

  render() {
    const { handleCloseModal, loggedUser } = this.props;
    const { inpName, inpTitle, inpNum, inpText, err } = this.state;
    return (
      <form>
        <h2>Edit Your Information, {loggedUser.name}:</h2>
        <div>
          <label>
            Name:<br/>
            <input
              className={(err.name ? 'red' : '')}
              type="text"
              name="name"
              value={inpName} 
              onChange={this.nameChange}
              placeholder=""
            />
            {this.renderErrMessage(err.name)}
          </label>  
        </div>
        <div>
          <label>
            E-mail:<br/>
            <input
              className={(err.name ? 'red' : '')}
              type="text"
              name="email"
              value={inpTitle} 
              onChange={this.titleChange}
              placeholder=""
            />
            {this.renderErrMessage(err.title)}
          </label>  
        </div>
        <div>
          <label>
            Phone number:<br/>
            <input
              className={(err.text ? 'red' : '')}
              type="text"
              name="phone"
              value={inpText} 
              onChange={this.phoneChange}
              placeholder=""
            />
            {this.renderErrMessage(err.phone)}
          </label>  
        </div>
        <br/><br/>
        <div>
          <input className="button" type="button" value="Save" onClick={this.handleSubmitForm} />
          <input className="button" type="reset" value="Cansel" onClick={handleCloseModal} />
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedUser: state.login.loggedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

EditUserForm.propTypes = {
  loggedUser: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);