import { Card, Image, Typography } from 'antd';
import React from 'react';
import { IRoomList } from '~/api/types/bookingroom/IRoomList';
import { Images } from '~/utils/imageLoader';

const { Text, Title } = Typography;

const HorizontalRoomList: React.FC<IRoomList> = (props) => {
  const handleTextLong = (item: string) => {
    if (item.length > 50) {
      return item.slice(0, 50) + '...';
    } else {
      return item;
    }
  }

  return (
    <Card hoverable className="horizontal-room-list" style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
      <Image
        src={Images[`${props.imageUrls[0]}`]}
        alt={props.name}
        style={{ width: "100%", height: 100, borderRadius: '8px', objectFit: 'cover' }}
      />
      <div style={{ flex: 1 }}>
        <Title level={5}>{props.name}</Title>
        <Text type="secondary" style={{ display: 'block', marginBottom: '8px' }}>{handleTextLong(props.description)}</Text>
        <Text strong>${props.price.toFixed(2)} per night</Text>
        <div style={{ marginTop: '8px' }}>
          <Text>Capacity: {props.capacity} (Adults: {props.maxAdults}, Children: {props.maxChildren})</Text>
        </div>
        <div style={{ marginTop: '8px' }}>
          <Text type={props.isAvailable ? 'success' : 'danger'}>
            {props.isAvailable ? 'Available' : 'Not Available'}
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default HorizontalRoomList;