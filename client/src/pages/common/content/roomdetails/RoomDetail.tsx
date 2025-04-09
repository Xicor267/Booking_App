import { CarOutlined, CoffeeOutlined, HeartOutlined, ShopOutlined, TeamOutlined, WifiOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Image, Rate, Space, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import roomService from '~/api/content/bookingroom/roomlist';
import { Images } from '~/utils/imageLoader';
import { Breadcrumbs } from '../../breadcrumb/Breadcrumbs';

const { Title, Text, Paragraph } = Typography;

// Interface IRoomList
export interface IRoomList {
  roomId: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  maxAdults: number;
  maxChildren: number;
  isAvailable: boolean;
  imageUrls: string[];
}

const RoomDetails: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [roomDetails, setRoomDetails] = useState<IRoomList | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      if (!roomId) {
        setError('Room ID not found.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await roomService.getRoomListById(roomId);
        setRoomDetails(response);
      } catch (error) {
        setError('Failed to load room information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [roomId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !roomDetails) {
    return <div>{error || 'No room data available.'}</div>;
  }
  return (
    <div style={{ padding: '0 20px', maxWidth: "1400px", margin: "0 auto" }}>
      <Breadcrumbs roomName={roomDetails.name} />
      <Flex justify="space-between" align="center" style={{ marginBottom: '16px', marginTop: '16px' }}>
        <div>
          <Flex align="center" gap={8}>
            <Rate disabled defaultValue={5} style={{ fontSize: '16px' }} />
            <Tag color="blue">Xe đưa đón sân bay</Tag>
          </Flex>
          <Title level={2} style={{ margin: '8px 0' }}>
            {roomDetails.name}
          </Title>
          <Text type="secondary" style={{ fontSize: 16 }}>
            17 Phạm Văn Đồng, Đà Nẵng, Việt Nam — Vị trí tuyệt vời — Hiển thị bản đồ
          </Text>
        </div>
        <Button type="primary" size="large">
          Đặt ngay
        </Button>
      </Flex>

      <Flex gap={8} style={{ marginBottom: '24px' }}>
        <Image
          src={Images[roomDetails.imageUrls[0]]}
          alt={roomDetails.name}
          style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }}
        />
        <Flex wrap="wrap" gap={8} style={{ flex: 1 }}>
          {roomDetails.imageUrls.slice(1).map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`Room Image ${index + 2}`}
              style={{ width: 'calc(50% - 4px)', borderRadius: '8px', objectFit: 'cover', height: '146px' }}
            />
          ))}
        </Flex>
      </Flex>

      <Flex justify="space-between" style={{ marginBottom: '24px' }}>
        <div>
          <Text strong style={{ fontSize: '18px' }}>
            Rất tốt
          </Text>
          <br />
          <Text style={{ fontSize: 18 }}>1,155 đánh giá</Text>
        </div>
        <Flex vertical gap={8}>
          <Text strong>Khách lưu trú đánh giá điều gì?</Text>
          <Text style={{ fontSize: '18px' }}>
            "Gần tiện nghi xung quanh, sạch sẽ, nhân viên nhiệt tình, quy trình nhận phòng nhanh, mọi thứ rất tuyệt!"
          </Text>
          <Text strong style={{ color: '#1890ff' }}>
            ĐÁNH TỐT NHẤT
          </Text>
          <Text strong>Tuyệt vời, Việt Nam</Text>
          <Text strong style={{ color: '#faad14' }}>
            Bãi biển được đánh giá hàng đầu 9.0
          </Text>
        </Flex>
      </Flex>

      <Flex gap={24}>
        <div style={{ flex: 2 }}>
          <Title level={4}>Bạn sẽ được giảm giá Genius tại {roomDetails.name}!</Title>
          <Paragraph style={{ whiteSpace: 'pre-line', fontSize: 18 }}>{roomDetails.description}</Paragraph>

          <Title level={4}>Điểm nổi bật của chỗ nghỉ</Title>
          <Flex gap={16} wrap="wrap" style={{ marginBottom: '24px', fontSize: 18 }}>
            <Flex align="center" gap={8}>
              <CarOutlined />
              <Text style={{ fontSize: 18 }}>Chỗ đậu xe</Text>
            </Flex>
            <Flex align="center" gap={8}>
              <WifiOutlined />
              <Text style={{ fontSize: 18 }}>Wi-Fi miễn phí</Text>
            </Flex>
            <Flex align="center" gap={8}>
              <ShopOutlined />
              <Text style={{ fontSize: 18 }}>Phòng không hút thuốc</Text>
            </Flex>
            <Flex align="center" gap={8}>
              <CoffeeOutlined />
              <Text style={{ fontSize: 18 }}>Phòng gia đình</Text>
            </Flex>
            <Flex align="center" gap={8}>
              <TeamOutlined />
              <Text style={{ fontSize: 18 }}>Nhà hàng</Text>
            </Flex>
          </Flex>

          <Title level={4}>Tiện nghi nổi bật của chỗ nghỉ</Title>
          <Flex gap={16} wrap="wrap">
            <Tag color="blue" style={{ fontSize: 14 }}>Xe đưa đón sân bay</Tag>
            <Tag color="blue" style={{ fontSize: 14 }}>Wi-Fi miễn phí</Tag>
            <Tag color="blue" style={{ fontSize: 14 }}>Phòng không hút thuốc</Tag>
            <Tag color="blue" style={{ fontSize: 14 }}>Dịch vụ phòng</Tag>
            <Tag color="blue" style={{ fontSize: 14 }}>Lễ tân 24 giờ</Tag>
            <Tag color="blue" style={{ fontSize: 14 }}>Nhà hàng</Tag>
          </Flex>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ background: '#f0f0f0', height: '200px', borderRadius: '8px', textAlign: 'center', lineHeight: '200px' }}>
            Placeholder for Map
          </div>
          <Text style={{ color: '#1890ff', display: 'block', marginTop: '8px' }}>Hiển thị trên bản đồ</Text>
        </div>
      </Flex>

      {/* Footer */}
      <Divider />
      <Flex justify="space-between" align="center">
        <Text>
          Lựa chọn rẻ nhất tại chỗ nghỉ này với chính sách hủy miễn phí cho 2 người lớn, 2 trẻ em
        </Text>
        <Space>
          <Button type="primary">Đặt ngay</Button>
          <Button icon={<HeartOutlined />}>Lưu chỗ nghỉ</Button>
        </Space>
      </Flex>
    </div>
  );
};

export default RoomDetails;