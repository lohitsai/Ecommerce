import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/login" Component={LoginScreen} />
            <Route path="/register" Component={RegisterScreen} />
            <Route path="/profile" Component={ProfileScreen} />
            <Route path="/shipping" Component={ShippingScreen} />
            <Route path="/placeorder" Component={PlaceOrderScreen} />
            <Route path="/order/:id" Component={OrderScreen} />
            <Route path="/payment" Component={PaymentScreen} />
            <Route path="/product/:id" Component={ProductScreen} />
            <Route path="/cart/:id?" Component={CartScreen} />

            <Route path="/admin/userlist" Component={UserListScreen} />
            <Route path="/admin/user/:id/edit" Component={UserEditScreen} />

            <Route path="/admin/productlist" Component={ProductListScreen} />
            <Route
              path="/admin/product/:id/edit"
              Component={ProductEditScreen}
            />
            <Route path="/admin/orderlist" Component={OrderListScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
