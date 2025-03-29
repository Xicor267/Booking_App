import { Flex, Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import "./Search.scss";

const { Search } = Input;
export const SearchHeader: FC = () => {
  const { t } = useTranslation()
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <Flex align='center'>
      <Search placeholder={t("page.header.search")} allowClear onSearch={onSearch} style={{ width: 300 }} />
    </Flex>
  )
}
