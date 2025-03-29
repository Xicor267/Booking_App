import { Flex, Typography } from 'antd';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import "./CardInfo.scss";

interface ICardInfo {
  title: string;
  chidren?: ReactNode;
}

export const CardInfo: FC<ICardInfo> = (props) => {
  const { Title } = Typography;
  const { t } = useTranslation();

  return (
    <Flex vertical className='card-info'>
      <Title style={{ color: "#fff" }} level={3}>{t(props.title)}</Title>
      {props.chidren}
    </Flex>
  )
}
