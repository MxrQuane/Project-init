import { Dropdown } from "antd"
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Space } from "antd";

export function DropDownMenu(props) {
  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const menuProps = {
    items,
    onClick: (e) => {
      console.log('click', e);
    }
  };
  
  return (
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Dropdown
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  )
}
