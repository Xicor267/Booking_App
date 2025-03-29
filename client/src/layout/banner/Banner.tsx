import { Button, Carousel, Flex, Typography } from 'antd';
import { FC } from 'react';
import { Images } from '../../utils/imageLoader';
import "./Banner.scss";
import { useTranslation } from 'react-i18next';

export const Banner: FC = () => {
  const { Text, Title } = Typography;
  const { t } = useTranslation()

  const slideItem = [
    {
      src: Images["slide (4)"]
    },
    {
      src: Images["slide (3)"]
    },
    {
      src: Images["slide (1)"]
    },
    {
      src: Images["slide (2)"]
    },
  ]

  const renderBookingRoom = () => {
    return (
      <Flex vertical className='carousel--content'>
        <Title style={{ fontSize: 95, color: "#fff" }}>{t("page.banner.title")}</Title>
        <Text style={{ fontSize: 18, color: "#fff", marginBottom: "0.5rem" }}>{t("page.banner.slogan")}</Text>
        <Button className="carousel--button">{t("page.banner.booking.button")}</Button>
      </Flex>
    )
  }

  return (
    <Flex vertical className='carousel'>
      <Carousel arrows infinite={true} autoplay className='carousel--container'>
        {slideItem.map((item, index) => (
          <div className='carousel--banner' key={index}>
            <img src={item.src} className='carousel--slide' alt='' />
          </div>
        ))}
      </Carousel>
      {renderBookingRoom()}
    </Flex>
  )
}
