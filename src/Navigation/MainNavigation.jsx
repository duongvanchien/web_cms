import {Layout} from "antd";
import {Route} from "react-router-dom";
import HeaderPage from "../Components/Header";
import {Navbar} from "../Components/Navbar";
import {ROUTER} from "../Contant";
import {HomeScreen} from "../Screens/Home";
import {ProductsScreen} from "../Screens/Products";
import {UsersScreen} from "../Screens/Users";

const {Content, Header} = Layout;

export const MainNavigation = () => {
  return (
    <Layout style={{minHeight: "100vh"}}>
      <Navbar />
      <Layout className='site-layout' style={{background: "#fff", color: "black"}}>
        <HeaderPage />
        {/* <Header className='site-layout-background' style={{padding: 0}} /> */}
        <Content style={{margin: "0 16px"}}>
          <Route path={ROUTER.overView} exact component={HomeScreen} />
          <Route path={ROUTER.products} exact component={ProductsScreen} />
          <Route path={ROUTER.users} exact component={UsersScreen} />
        </Content>
      </Layout>
    </Layout>
  );
};
