import {Layout, Menu} from "antd";
import {DesktopOutlined, PieChartOutlined, TeamOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {ROUTER} from "../Contant";
import {useHistory, useLocation} from "react-router-dom";

const {Sider} = Layout;

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setKey(location.pathname);
  }, [location.pathname]);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleChangeTab = (url) => {
    history.push(url);
    setKey(url);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className='logo' />
      <Menu theme='light' defaultSelectedKeys={[key]} selectedKeys={[key]}>
        <Menu.Item key={ROUTER.overView} icon={<PieChartOutlined />} onClick={() => handleChangeTab(ROUTER.overView)}>
          Trang chủ
        </Menu.Item>

        <Menu.Item key={ROUTER.products} icon={<DesktopOutlined />} onClick={() => handleChangeTab(ROUTER.products)}>
          Sản phẩm
        </Menu.Item>

        <Menu.Item key={ROUTER.users} icon={<TeamOutlined />} onClick={() => handleChangeTab(ROUTER.users)}>
          Người dùng
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
