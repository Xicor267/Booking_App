import { Button, Card, Flex, Image, Space, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IRoomList } from '~/api/types/bookingroom/IRoomList';
import { Images } from '~/utils/imageLoader';
import './VerticalRoomList.scss';

const { Text, Title } = Typography;

const VerticalRoomList: React.FC<IRoomList> = (props) => {
  const navigate = useNavigate();

  const handleTextLong = (item: string) => {
    if (item.length > 50) {
      return item.slice(0, 120) + '...';
    } else {
      return item;
    }
  }

  const handleClickButton = () => {
    navigate(`/content/room/${props.roomId}`, { state: props });
  }

  return (
    <Space direction="vertical" size="large" className="vertical-room-list" style={{ width: '100%' }}>
      <Card hoverable>
        <Flex style={{ width: '100%' }} align="end" justify="space-between">
          <Flex style={{ width: '100%' }} align="start" wrap="nowrap">
            <div style={{ flex: '0 0 300px', minWidth: '300px' }}>
              <Image
                src={Images[`${props.imageUrls[0]}`]}
                alt={props.name}
                style={{ width: '100%', height: "100%", borderRadius: '8px' }}
              />
            </div>
            <Flex vertical style={{ flex: 1, marginLeft: '16px', minWidth: 0 }}>
              <Title level={4} onClick={handleClickButton} className='vertical-room-list--title'>{props.name}</Title>
              <Text type="secondary" style={{ wordBreak: 'break-word' }}>
                {handleTextLong(props.description)}
              </Text>
              <div style={{ marginTop: '8px' }}>
                <Text strong>${props.price.toFixed(0)} per night</Text>
              </div>
              <div style={{ marginTop: '8px' }}>
                <Text>
                  Capacity: {props.capacity} (Adults: {props.maxAdults}, Children: {props.maxChildren})
                </Text>
              </div>
              <div style={{ marginTop: '8px' }}>
                <Text type={props.isAvailable ? 'success' : 'danger'}>
                  {props.isAvailable ? 'Available' : 'Not Available'}
                </Text>
              </div>
            </Flex>
          </Flex>
          <Flex justify="flex-end">
            <Button className="vertical-room-list--button" onClick={handleClickButton}>See details</Button>
          </Flex>
        </Flex>
      </Card>
    </Space>
  );
};

export default VerticalRoomList;
