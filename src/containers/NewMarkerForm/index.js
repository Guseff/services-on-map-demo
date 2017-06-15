import React, { Component } from 'react';

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
    
  }
  titleChange(e) {

  }
  textChange(e) {

  }
  costChange(e) {

  }
  handleSubmitForm() {
    
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

export default NewMarkerForm;