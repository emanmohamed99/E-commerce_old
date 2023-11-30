import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useAppSelector } from "../../Hooks/hooks";
import { getMemoizedNumItems } from "../../store/cart/cartSlice";
const Header = () => {
  const numItems = useAppSelector(getMemoizedNumItems);
  return (
    <div>
      <ul>
        <li>
          <NavLink className="active" to="/main">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/main/category">category</NavLink>
        </li>
        <li>
          <NavLink to="/main/products">product</NavLink>
        </li>
        <li className={styles.shoppingIcon}>
          <NavLink to="/main/shoppingCard">
            🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
