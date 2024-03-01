import React from 'react';
import { ConversationalForm } from 'conversational-form';
import './Form.css'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        'tag': 'input',
        'type': 'text',
        'name': 'email',
        'cf-questions': 'What is your email?'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'firstname',
        'cf-questions': 'What is your firstname?'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'lastname',
        'cf-questions': 'What is your lastname?'
      }
    ];
    
    this.submitCallback = this.submitCallback.bind(this);
  }
  
  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        theme: 'dark',
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
      },
      tags: this.formFields
    });
    this.elem.appendChild(this.cf.el);
  }
  
  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
  }
  
  render() {
    return (
      <div className='ty'>
        <div
          ref={ref => this.elem = ref}
        />
      </div>
    );
  }
}