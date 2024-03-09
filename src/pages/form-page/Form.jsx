import { useEffect, useRef, useState } from 'react';
import { ConversationalForm } from 'conversational-form';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Form = () => {
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

  const navigate = useNavigate();
  let cf = null;
  const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    console.log('Formdata, obj:', formDataSerialized);
    cf.addRobotChatResponse(
      'You are done. Thank you for your responses.'
    );
  };

  // const flowCallback = function (dto, success, error) {
  //   //Подгрузка и добавление вопроса сюда
  //   console.log('dto....', dto, success, error);
  //   cf.addTags([
  //     {
  //       tag: 'input',
  //       type: 'text',
  //       name: 'firstname',
  //       'cf-questions': 'What is your firstname?',
  //     },
  //   ]);
  //   return success();
  // };

  const formFields = data.map((item) => {
    if (item.type === 'inputfield') {
      return {
        tag: 'input',
        type: 'text',
        name: item.question,
        'cf-questions': item.question,
      };
    }
    if (item.type === 'radio') {
      return {
        tag: 'select',
        // type: 'radio',
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

  // const formFields = [
  //   {
  //     tag: 'input',
  //     type: 'text',
  //     name: 'email',
  //     'cf-questions': 'What is your email?',
  //   },
  //   {
  //     tag: 'input',
  //     type: 'text',
  //     name: 'firstname',
  //     'cf-questions': 'What is your firstname?',
  //   },
  //   {
  //     tag: 'input',
  //     type: 'text',
  //     name: 'lastname',
  //     'cf-questions': 'What is your lastname?',
  //   },
  // ];

  return (
    <div className="form-page">
      <div ref={ref} />
      <p className="closeButton" onClick={() => navigate('/main')}>
        Close
      </p>
    </div>
  );
};
