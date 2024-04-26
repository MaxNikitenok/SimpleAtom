import { useEffect, useRef, useState } from 'react';
import { ConversationalForm } from 'conversational-form';
import './Form.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { formUrl } from '../../api';

export const Form = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const { form_name, partner_country } = useParams();

  let tempData = {};

  const utm = Object.fromEntries(
    (window.location.href.match(/(?<=utm_).+?=[^&]*/g) || []).map((n) =>
      n.split('=')
    )
  );

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${formUrl}questions/?form_name=${form_name}`)
        .then((e) => {
          setData(e.data[0].questions);
          setMessage(e.data[0].message);
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
        flowStepCallback: flowCallback,
        preventAutoFocus: true,
        loadExternalStyleSheet: true,
      },
      tags: formFields,
    });

    ref.current.appendChild(cf.el);
    cf.addRobotChatResponse(message);

    return () => {
      cf.remove();
    };
  }, [data]);

  window.onbeforeunload = function(e) {
    postTempData()
    e.returnValue = 'There are unsaved changes! Are you sure you want to delete the page?';
    return e.returnValue;
  };

  const submitCallback = () => {
    const formDataSerialized = cf.getFormData(true);
    const dataForPost = { ...formDataSerialized, label: utm, partner_country };

    const postData = async () => {
      await axios
        .post(`${formUrl}form_data/`, dataForPost)
        .then((res) => {
          const postTGData = async (resp) => {
            await axios
              .post(`${formUrl}send/`, {
                id: resp.data.id,
                form_data: resp.data.data,
              })
              .catch((error) => {
                console.log(`ERROR! ${error.message}`);
                throw new Error(error);
              });
          };
          postTGData(res);
        })
        .catch((error) => {
          console.log(`ERROR! ${error.message}`);
          throw new Error(error);
        });
    };

    postData();

    cf.addRobotChatResponse(
      "Thanks! We'll use your info to find the ideal manager for you. We'll reach you as soon as possible."
    );
    tempData = {};
  };

  const flowCallback = function (dto, success, error) {
    //Подгрузка и добавление вопроса сюда
    tempData = {
      ...tempData,

      [dto.tag.questions[0] ===
      'Your email (by providing this information you agree to receive email notifications, release can be in any of the emails)'
        ? 'email'
        : dto.tag.questions[0]]: dto.text,
      label: utm,
      partner_country,
    };

    // cf.addTags([
    //   {
    //     tag: 'input',
    //     type: 'text',
    //     name: 'firstname',
    //     'cf-questions': 'What is your firstname?',
    //   },
    // ]);
    return success();
  };

  const postTempData = async () => {
    if (tempData.email) {
      await axios
        .post(`${formUrl}form_data/`, tempData)
        .then((res) => {
          const postTGData = async (resp) => {
            await axios
              .post(`${formUrl}send/`, {
                id: res.data.id,
                form_data: resp.data,
              })
              .catch((error) => {
                console.log(`ERROR! ${error.message}`);
                throw new Error(error);
              });
          };
          postTGData(res);
          tempData = {};
        })
        .catch((error) => {
          console.log(`ERROR! ${error.message}`);
          throw new Error(error);
        });
    }
  };

  const formFields = data.map((item) => {
    if (item.type === 'inputfield') {
      if (
        item.question ===
        'Your email (by providing this information you agree to receive email notifications, release can be in any of the emails)'
      ) {
        return {
          tag: 'input',
          type: 'email',
          name: 'email',
          'cf-questions': item.question,
          required: 'required',
        };
      } else if (item.question === 'Your contact phone number') {
        return {
          tag: 'input',
          type: 'tel',
          pattern: '[0-9]',
          name: item.question,
          'cf-questions': item.question,
        };
      } else {
        return {
          tag: 'input',
          type: 'text',
          name: item.question,
          'cf-questions': item.question,
        };
      }
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
    <div className="form-page">
      <div ref={ref} />
      <p
        className="closeButton"
        onClick={() => {
          postTempData();
          if (form_name === 'simpleatom-from-site') navigate(-1);
          if (form_name === 'simpleatom-direсt-link') navigate('/main');
        }}
      >
        Close
      </p>
    </div>
  );
};
