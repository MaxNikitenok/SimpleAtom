import { useEffect, useRef, useState } from 'react';
import { ConversationalForm } from 'conversational-form';
import './Form.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const Form = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const { form_name } = useParams();
  const [tempData, setTempData] = useState({});

  const utm = Object.fromEntries(
    (window.location.href.match(/(?<=utm_).+?=[^&]*/g) || []).map((n) =>
      n.split('=')
    )
  );

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://4dev.itcoty.ru/forms/questions/?form_name=${form_name}`)
        .then((e) => {
          setData(e.data[0].questions);
          setMessage(e.data[0].message);
          // console.log('data======>', e.data[0]);
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

  const submitCallback = () => {
    const formDataSerialized = cf.getFormData(true);
    const dataForPost = { ...formDataSerialized, label: utm };

    const postData = async () => {
      await axios
        .post('https://4dev.itcoty.ru/forms/form_data/', dataForPost)
        .then((res) => {
          const postTGData = async (resp) => {
            await axios
              .post('https://4dev.itcoty.ru/forms/send/', {
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

    console.log('Formdata, obj:', dataForPost);
    cf.addRobotChatResponse(
      "Thanks! We'll use your info to find the ideal manager for you. We'll reach you as soon as possible."
    );
    setTempData({});
  };

  const flowCallback = function (dto, success, error) {
    //Подгрузка и добавление вопроса сюда
    console.log('dto....', dto);

    setTempData({
      ...tempData,
      [dto.tag.questions[0] === 'Email'
        ? dto.tag.questions[0].toLowerCase()
        : dto.tag.questions[0]]: dto.text,
      label: utm,
    });

    console.log('tempData===>>>', tempData);

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
        .post('https://4dev.itcoty.ru/forms/form_data/', tempData)
        .then((res) => {
          const postTGData = async (resp) => {
            await axios
              .post('https://4dev.itcoty.ru/forms/send/', {
                id: res.data.id,
                form_data: resp.data,
              })
              .catch((error) => {
                console.log(`ERROR! ${error.message}`);
                throw new Error(error);
              });
          };
          postTGData(res);
          setTempData({});
        })
        .catch((error) => {
          console.log(`ERROR! ${error.message}`);
          throw new Error(error);
        });
    }
  };

  const formFields = data.map((item) => {
    if (item.type === 'inputfield') {
      if (item.question === 'Email') {
        return {
          tag: 'input',
          type: 'email',
          name: item.question.toLowerCase(),
          'cf-questions': item.question,
          required: 'required',
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
          navigate(-1);
        }}
      >
        Close
      </p>
    </div>
  );
};
