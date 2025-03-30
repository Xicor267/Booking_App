import { Flex, Typography } from 'antd';
import { FC, ReactNode } from 'react';
import "./BookingRoom.scss";
import { useTranslation } from 'react-i18next';

interface IBookingRoomCard {
  icon: ReactNode;
  title: string;
  dropdown: ReactNode;
}

export const BookingRoom: FC<IBookingRoomCard> = (props) => {
  const { Text } = Typography
  const { t } = useTranslation();

  return (
    <Flex vertical className='booking-room-card'>
      <Flex vertical={false} gap={8} align='center' style={{ paddingBottom: 24 }}>
        {props.icon}
        <Text className='booking-room-card--text'>{t(props.title)}</Text>
      </Flex>
      {props.dropdown}
    </Flex>
  )
}
