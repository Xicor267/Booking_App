import { Table, TableProps } from 'antd';
import { useEffect, useState } from 'react';
import hotelService from '~/api/content/bookingroom/hotelApi';
import { IHotelRoomType } from '~/api/types/bookingroom/IHotelRoomType';

export const HotelTable = () => {
  const [hotelList, setHotelList] = useState<IHotelRoomType[]>([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const response = await hotelService.getHotelRoom();
      setHotelList(response);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };
  
  const columns: TableProps<IHotelRoomType>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'hotelId',
      key: 'hotelId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
  ];

  const renderColumnData = hotelList?.map((item) => (
    {
      hotelId: item.hotelId,
      name: item.name,
      location: item.location,
      rating: item.rating
    }
  ))

  return (
    <Table<IHotelRoomType> columns={columns} dataSource={renderColumnData} />
  )
}
