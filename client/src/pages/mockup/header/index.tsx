import { Link } from "react-router-dom";

export const menuCategory = [
  {
    name: 'page.header.home',
    items: [
      { key: '1', label: <Link to={"/"}>Homepage</Link> },
    ],
  },
  {
    name: 'page.header.room',
    items: [
      { key: '1', label: <Link to={"/content/room"}>Room list</Link> },
    ],
  },
  {
    name: 'page.header.destination',
    items: [
      { key: '1', label: <a href="https://www.antgroup.com">1st menu item</a> },
      { key: '2', label: <a href="https://www.aliyun.com">2nd menu item</a> },
    ],
  },
  // {
  //   name: 'page.header.service',
  //   items: [
  //     { key: '1', label: <a href="https://www.antgroup.com">1st menu item</a> },
  //     { key: '2', label: <a href="https://www.aliyun.com">2nd menu item</a> },
  //   ],
  // },
  // {
  //   name: 'page.header.blog',
  //   items: [
  //     { key: '1', label: <a href="https://www.antgroup.com">1st menu item</a> },
  //     { key: '2', label: <a href="https://www.aliyun.com">2nd menu item</a> },
  //   ],
  // },
  {
    name: 'page.header.contact',
    items: [
      { key: '1', label: <a href="https://www.antgroup.com">1st menu item</a> },
      { key: '2', label: <a href="https://www.aliyun.com">2nd menu item</a> },
    ],
  },
];
