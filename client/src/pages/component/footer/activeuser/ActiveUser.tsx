import { Flex, Skeleton, Statistic } from 'antd';
import { FC, useCallback, useEffect, useState } from 'react';
import activeUserCountService from '~/api/content/activeusercount/activeUserCount';
import { IActiveUserCount } from '~/api/types/activeusercount/IActiveUserCount';
import "./ActiveUser.scss";

export const ActiveUser: FC = () => {
  const [activeUser, setActiveUser] = useState<IActiveUserCount>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getActiveUserCount();
  }, [])

  const getActiveUserCount = useCallback(() => {
    setIsLoading(true);
    activeUserCountService.getActiveUserCount()
      .then((response) => {
        setActiveUser(response);
        setIsLoading(false);
      })
  }, [])

  if (isLoading) {
    return <Skeleton.Input active={true} size="small" block={false} />
  }

  return (
    <Flex className='active-user-count'>
      <Statistic valueStyle={{ color: '#fff' }} title="Active Users" value={activeUser?.count} />
    </Flex>
  )
}
