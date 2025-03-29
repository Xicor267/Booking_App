import { Flex, Typography } from 'antd'
import { FC } from 'react'
import { CardInfo } from '../../../common/footer/cardinfo/CardInfo'
import { useTranslation } from 'react-i18next';
import { itemContact } from '../../../mockup/footer';

export const Contact: FC = () => {
  const { Text } = Typography;
  const { t } = useTranslation();

  const renderContactCard = () => {
    return (
      <Flex vertical gap={8}>
        <Text style={{ paddingBottom: "0.5rem", color: "#fff", fontSize: 18 }}>{t("page.footer.contact.title")}</Text>
        {itemContact.map((item, index) => (
          <Flex vertical={false} align="center" gap={8} key={index}>
            {item.icon}
            <Text style={{ color: "#fff", fontSize: 18 }}>{t(item.desc)}</Text>
          </Flex>
        ))}
      </Flex>
    )
  }

  return (
    <Flex>
      <CardInfo
        title={'page.footer.contact'}
        chidren={renderContactCard()}
      />
    </Flex>
  )
}
