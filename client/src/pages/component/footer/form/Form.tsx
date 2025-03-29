import { CheckOutlined, CloseOutlined, ContactsOutlined, PhoneOutlined } from '@ant-design/icons'
import emailjs from '@emailjs/browser'
import { Button, Flex, Form, Input } from 'antd'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaRegMap } from "react-icons/fa6"
import { useDispatch } from 'react-redux'
import { showNotification } from '../../../../redux/slice/notificationSlice'
import { CardInfo } from '../../../common/footer/cardinfo/CardInfo'
import { ContactCard } from '../../../common/footer/contactcard/ContactCard'
import "./Form.scss"

export const FormFooter: FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const getContactCard = [
    {
      icon: <ContactsOutlined style={{ fontSize: 40, color: "#2c98f0" }} />,
      content: "nguyennamnvl267@gmail.com"
    },
    {
      icon: <PhoneOutlined style={{ fontSize: 40, color: "#2c98f0" }} />,
      content: "+84372928669"
    },
    {
      icon: <FaRegMap style={{ fontSize: 40, color: "#2c98f0" }} />,
      content: t("page.footer.form.address")
    },
  ]

  const onFinish = (values: any) => {
    setLoadingSubmit(true);

    const templateParams = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message
    };

    setLoadingSubmit(true);
    emailjs
      .send(
        'service_h706brt',
        'template_f2q9i5j',
        templateParams,
        'bkQzHOiUXlXROLIkI'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result);
          setLoadingSubmit(false);
          dispatch(showNotification({
            message: t("page.footer.form.submit.send.successful"),
            description: t("page.footer.form.submit.send.desc"),
            icon: <CheckOutlined style={{ background: '#52c41a', borderRadius: '50%', color: '#fff' }} />,
          }));
        },
      ).catch((error) => {
        console.error('FAILED...', error.text);
        dispatch(showNotification({
          message: t("page.footer.form.submit.send.failed"),
          description: t("page.footer.form.submit.send.desc"),
          icon: <CloseOutlined style={{ background: '#ff4d4f', borderRadius: '50%', color: '#fff' }} />,
        }));
      }).finally(() => {
        setLoadingSubmit(false)
      }
      )
  };

  const renderForm = () => {
    return (
      <Flex vertical gap={"2rem"}>
        <Flex justify='center'>
          <div style={{ fontStyle: "italic", color: "#FA5F5F", fontSize: 15 }}>{t("page.footer.form.submit.send.hint")}</div>
        </Flex>
        <Form
          {...formItemLayout}
          id="contact-form"
          form={form}
          name="submit"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          scrollToFirstError
          size="large"
        >
          <Form.Item
            name="name"
            label={t("page.footer.form.name.input")}
            rules={[
              {
                required: true,
                message: t("page.footer.form.name.validation"),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label={t("page.footer.form.email")}
            rules={[
              {
                type: 'email',
                message: t("page.footer.form.email.notvalid"),
              },
              {
                required: true,
                message: t("page.footer.form.email.validation"),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="subject"
            label={t("page.footer.form.subject")}
            rules={[
              {
                required: true,
                message: t("page.footer.form.subject.validation"),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="message"
            label={t("page.footer.form.message")}
            rules={[
              {
                required: true,
                message: t("page.footer.form.object.validation"),
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" loading={loadingSubmit}>
              {t("page.footer.form.submit.form")}
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    )
  }

  return (
    <Flex vertical gap={"1rem"} className="contact">
      <CardInfo
        title={'page.footer.form'}
        chidren={renderForm()}
      />
    </Flex>
  )
}
