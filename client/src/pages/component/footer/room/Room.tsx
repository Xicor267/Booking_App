import { Flex, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CardInfo } from '../../../common/footer/cardinfo/CardInfo';
import { itemRoom } from '../../../mockup/footer';

export const Room: FC = () => {
  const { Text } = Typography;
  const { t } = useTranslation();

  const renderRoomCard = () => {
    return (
      <Flex vertical gap={8}>
        {itemRoom.map((item, index) => (
          <Flex vertical={false} gap={8} key={index}>
            {item.image}
            <Flex vertical gap={8}>
              <Text style={{ color: "#fff", fontSize: 18 }}>{t(item.hotelName)}</Text>
              <Text style={{ color: "#CCCCCC", fontSize: 14 }}>{t(item.reg)}</Text>
              <Text style={{ color: "rgb(2, 203, 137)", fontSize: 20, paddingTop: 8 }}>{t(item.price)}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    )
  }

  return (
    <Flex>
      <CardInfo
        title={'page.footer.destination'}
        chidren={renderRoomCard()}
      />
    </Flex>
  )
}
