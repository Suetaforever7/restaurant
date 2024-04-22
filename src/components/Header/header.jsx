import "./header.css";
import logo from "../../images/logo.png";
import cart from "../../images/cart.png";
import phone from "../../images/phone.png";
function header() {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
            <img src={logo} alt="logo" className="relative" />
          </div>
          <div className="navbar-line">
            <div className="left">
              <ul>
                <li>
                  <a href="#">ГЛАВНАЯ</a>
                </li>
                <li>
                  <a href="#">МЕНЮ</a>
                </li>
                <li>
                  <a href="#">О НАС</a>
                </li>
                <li>
                  <a href="#">БРОНЬ</a>
                </li>
              </ul>
            </div>
            <div className="cart-box">
              <img src={cart} alt="cart" />
            </div>
            <div className="right">
              <div className="information-box">
                <div className="number">
                  <img src={phone} alt="phone-logo" />
                  <span>+999-888-76-54</span>
                </div>
              </div>
            </div>
            <button className="order">ЗАКАЗ СТОЛИКА</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
