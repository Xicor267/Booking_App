import { SmileOutlined } from '@ant-design/icons';
import { Flex, Typography, notification } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CardInfo } from '../../../common/footer/cardinfo/CardInfo';
import "./Links.scss"

export const Links: FC = () => {
  const { Text } = Typography;
  const { t } = useTranslation();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification',
      description:
        'Feature is under development. Please contact Nguyen Phuong Nam.',
      icon: <SmileOutlined style={{ color: 'rgb(0, 214, 144)' }} />,
    });
  };

  const itemLinks = [
    {
      link: "page.footer.usefullink.aboutus",
      onClick: openNotification
    },
    {
      link: "page.footer.usefullink.ouroffer",
      onClick: openNotification
    },
    {
      link: "page.footer.usefullink.howspread",
      onClick: openNotification
    },
    {
      link: "page.footer.usefullink.contactus",
      onClick: openNotification
    },
    {
      link: "page.footer.usefullink.outevent",
      onClick: openNotification
    },
  ]

  const renderLinkCard = () => {
    return (
      <Flex vertical gap={8}>
        {itemLinks.map((item, index) => (
          <Flex vertical gap={8} key={index}>
            <Text className="footer-link--text" onClick={item.onClick}>{t(item.link)}</Text>
          </Flex>
        ))}
      </Flex>
    )
  }

  return (
    <Flex>
      {contextHolder}
      <CardInfo
        title={'page.footer.usefullink'}
        chidren={renderLinkCard()}
      />
    </Flex>
  )
}
