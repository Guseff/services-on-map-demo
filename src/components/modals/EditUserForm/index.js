import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '../Form';
import {  } from '../../../actions/ModalActions';

class EditUserForm extends Form {
  constructor(props) {
    super(props);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm() {

  }
  
  render() {
    const { handleCloseModal, loggedUser } = this.props;
    return (
      <form>
        <h2>Edit Your Information, {loggedUser.name}:</h2>
        <div>

        </div>
        <br/><br/>
        <div>
          <input className="button" type="button" value="Approve" onClick={this.handleSubmitForm} />
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