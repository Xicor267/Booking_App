import { Breadcrumb } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';

export const Breadcrumbs: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const breadcrumbNameMap: { [key: string]: string } = {
    '/': 'Home',
    '/content': 'Content',
    '/content/room': "Room list",
  };

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    }),
  ];

  return (
    <div className="breadcrumb-container">
      <Breadcrumb separator=">" className="breadcrumb-item">
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  );
}
