import { CalendarOutlined, DownOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Button, DatePicker, Flex, Select } from 'antd';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLocationOutline } from "react-icons/io5";
import { BookingRoom } from '~/pages/common/content/bookingroomcard/BookingRoom';
import "./RegisterRoom.scss";
import { HotelTable } from './table/HotelTable';

export const RegisterRoom: FC = () => {
  const [checkInDate, setCheckInDate] = useState<string>('03/29/2025');
  const [checkOutDate, setCheckOutDate] = useState<string>('03/29/2025');
  const [guests, setGuests] = useState<number>(2);
  const [children, setChildren] = useState<number>(1);
  const [location, setLocation] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleCheckRoom = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  const itemBookingRoomCard = [
    {
      icon: <IoLocationOutline style={{ fontSize: 20, color: '#6B7280' }} />,
      title: "Location",
      dropdown: (
        <Select
          value={location}
          onChange={(value) => setLocation(value)}
          suffixIcon={<DownOutlined style={{ color: '#6B7280' }} />}
          style={{ width: '140px', border: 'none' }}
          options={[
            { value: 0, label: 'Da Nang' },
            { value: 1, label: 'Ha Noi' },
            { value: 2, label: 'Ho Chi Minh' },
            { value: 3, label: 'Hai Phong' },
          ]}
        />
      ),
    },
    {
      icon: <CalendarOutlined style={{ fontSize: 20, color: '#6B7280' }} />,
      title: 'page.content.form.booking.room.checkin',
      dropdown: (
        <DatePicker
          value={checkInDate ? dayjs(checkInDate, 'MM/DD/YYYY') : null}
          format="MM/DD/YYYY"
          onChange={(_, dateString) => {
            if (typeof dateString === 'string') {
              setCheckInDate(dateString);
            }
          }}
          suffixIcon={<DownOutlined style={{ color: '#6B7280' }} />}
          style={{ width: '100%', border: 'none' }}
        />
      ),
    },
    {
      icon: <CalendarOutlined style={{ fontSize: 20, color: '#6B7280' }} />,
      title: 'page.content.form.booking.room.checkout',
      dropdown: (
        <DatePicker
          value={checkOutDate ? dayjs(checkOutDate, 'MM/DD/YYYY') : null}
          format="MM/DD/YYYY"
          onChange={(_, dateString) => {
            if (typeof dateString === 'string') {
              setCheckOutDate(dateString);
            }
          }}
          suffixIcon={<DownOutlined style={{ color: '#6B7280' }} />}
          style={{ width: '100%', border: 'none' }}
        />
      ),
    },
    {
      icon: <UserOutlined style={{ fontSize: 20, color: '#6B7280' }} />,
      title: 'page.content.form.booking.room.guest',
      dropdown: (
        <Select
          value={guests}
          onChange={(value) => setGuests(value)}
          suffixIcon={<DownOutlined style={{ color: '#6B7280' }} />}
          style={{ width: '100%', border: 'none' }}
          options={[
            { value: 1, label: '01' },
            { value: 2, label: '02' },
            { value: 3, label: '03' },
            { value: 4, label: '04' },
          ]}
        />
      ),
    },
    {
      icon: <TeamOutlined style={{ fontSize: 20, color: '#6B7280' }} />,
      title: 'page.content.form.booking.room.children',
      dropdown: (
        <Select
          value={children}
          onChange={(value) => setChildren(value)}
          suffixIcon={<DownOutlined style={{ color: '#6B7280' }} />}
          style={{ width: '100%', border: 'none' }}
          options={[
            { value: 0, label: '00' },
            { value: 1, label: '01' },
            { value: 2, label: '02' },
            { value: 3, label: '03' },
          ]}
        />
      ),
    },
  ];

  return (
    <Flex vertical>
      <Flex vertical={false} gap={16} className="register-room">
        <Flex className="register-room--cards-container">
          {itemBookingRoomCard.map((item, index) => (
            <Flex key={index} className="register-room--card">
              <BookingRoom
                icon={item.icon}
                title={item.title}
                dropdown={item.dropdown} />
            </Flex>
          ))}
        </Flex>
        <Button type="primary" loading={loading} onClick={handleCheckRoom} className="check-availability-btn">
          {t("page.content.form.booking.room.check")}
        </Button>
      </Flex>
      <HotelTable />
    </Flex>
  );
};