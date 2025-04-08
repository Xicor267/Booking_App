import { Col, Flex, Row, Spin, Switch } from 'antd'
import { FC, useEffect, useState } from 'react'
import roomService from '~/api/content/bookingroom/roomlist'
import { IRoomList } from '~/api/types/bookingroom/IRoomList'
import { Breadcrumbs } from '~/pages/common/breadcrumb/Breadcrumbs'
import HorizontalRoomList from '~/pages/common/content/horizontalroomlist/HorizontalRoomList'
import VerticalRoomList from '~/pages/common/content/verticalroomlist/VerticalRoomList'
import "./RoomList.scss"

export const RoomList: FC = () => {
  const [check, setCheck] = useState(true);
  const [layout, setLayout] = useState("list");
  const [roomList, setRoomList] = useState<IRoomList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRoomList();
  }, [])

  const getRoomList = async () => {
    try {
      setLoading(true);
      const response = await roomService.getRoomList();
      setRoomList(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  }

  const handleSwitchRoomLayout = () => {
    if (layout === "list") {
      return (
        <Flex vertical gap={16} wrap="wrap" className="room-list--list">
          {
            roomList?.map((item, index) => (
              <VerticalRoomList
                key={index}
                roomId={item.roomId}
                name={item.name}
                description={item.description}
                price={item.price}
                capacity={item.capacity}
                maxAdults={item.maxAdults}
                maxChildren={item.maxChildren}
                isAvailable={item.isAvailable}
                imageUrls={item.imageUrls}
              />
            ))
          }
        </Flex>
      );
    } else {
      return (
        <Flex gap={16} wrap="wrap" className="room-list--grid">
          {roomList?.map((item, index) => (
            <div
              style={{
                width: 'calc((100% - 32px) / 3)',
                boxSizing: 'border-box',
              }}
              key={index}
            >
              <HorizontalRoomList
                roomId={item.roomId}
                name={item.name}
                description={item.description}
                price={item.price}
                capacity={item.capacity}
                maxAdults={item.maxAdults}
                maxChildren={item.maxChildren}
                isAvailable={item.isAvailable}
                imageUrls={item.imageUrls}
              />
            </div>
          ))}
        </Flex>
      );
    }
  };

  const handleSwitchChange = (checked: boolean) => {
    setCheck(checked);
    setLayout(checked ? "list" : "grid");
  };

  return (
    <Flex vertical className='room-list'>
      <Breadcrumbs />
      <Row>
        <Col span={8}>
          <Flex className={"room-list--filter"}>
            Filter
          </Flex>
        </Col>
        <Col span={16}>
          {loading
            ? <Spin size="large" tip="Loading..."><Flex style={{ width: '100%', height: "100%" }}><></></Flex></Spin>
            : (
              <Flex vertical gap={16} className={"room-list--content"}>
                <Flex justify="space-between" align='center' className="room-list--view-switch">
                  <div className="room-list--available-rooms">
                    {roomList.filter((i) => i.isAvailable).length} rooms available
                  </div>
                  <Switch
                    className='room-list--switch'
                    checkedChildren="List"
                    unCheckedChildren="Grid"
                    checked={check}
                    onChange={handleSwitchChange}
                  />
                </Flex>
                {handleSwitchRoomLayout()}
              </Flex>
            )
          }

        </Col>
      </Row>
    </Flex>
  );
}
