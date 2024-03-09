import { useEffect, useRef, useState } from 'react';
import { ConversationalForm } from 'conversational-form';
import './Form-modal.css';
import Close from '../../assets/Close_gray.png';
import axios from 'axios';

export const ConversationalFormModal = ({ setShowConversationalModal }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://4dev.itcoty.ru/forms/questions/?form_name=simpleatom`)
        .then((e) => {
          setData(e.data[0].questions);
          console.log('data======>', e.data[0].questions);
        })
        .catch((error) => {
          console.log(`ERROR! ${error.message}`);
          throw new Error(error);
        });
    };
    fetchData();
  }, []);
  
  let cf = null;
  const ref = useRef(null);

  useEffect(() => {
    cf = ConversationalForm.startTheConversation({
      options: {
        theme: 'dark',
        submitCallback: submitCallback,
        // flowStepCallback: flowCallback,
        preventAutoFocus: true,
        loadExternalStyleSheet: true,
      },
      tags: formFields,
    });

    ref.current.appendChild(cf.el);

    return () => {
      cf.remove();
    };
  }, [data]);

  const submitCallback = () => {
    var formDataSerialized = cf.getFormData(true);

    const postData = async () => {
      await axios
        .post('https://4dev.itcoty.ru/forms/form_data/', formDataSerialized)
        .then((e) => {
          console.log('post response======>', e);
        })
        .catch((error) => {
          console.log(`ERROR! ${error.message}`);
          throw new Error(error);
        });
    };
    postData();


    console.log('Formdata, obj:', formDataSerialized);
    cf.addRobotChatResponse(
      'You are done. Thank you for your responses.'
    );
  };

  const formFields = data.map((item) => {
    if (item.type === 'inputfield') {
      return {
        tag: 'input',
        type: 'text',
        name: item.question === 'Email *' ? item.question.toLowerCase().slice(0, -2) : item.question,
        'cf-questions': item.question,
      };
    }
    if (item.type === 'radio') {
      return {
        tag: 'select',
        name: item.question,
        'cf-questions': item.question,
        isMultiChoice: false,
        children: item.answers.map((item) => {
          return {
            tag: 'option',
            'cf-label': item,
            value: item,
          };
        }),
      };
    }
    if (item.type === 'checkbox') {
      return {
        tag: 'fieldset',
        type: 'Checkboxes',
        name: item.question,
        'cf-questions': item.question,
        children: item.answers.map((item) => {
          return {
            tag: 'input',
            type: 'checkbox',
            name: 'checkboxes-buttons-1',
            'cf-label': item,
            value: item,
          };
        }),
      };
    }
  });

  return (
    <div className="form-modal" ref={ref}>
      <img
        src={Close}
        className="closeButton"
        onClick={() => setShowConversationalModal(false)}
      />
    </div>
  );
};
