import { useAppSelector } from "../Hooks/hooks";

import GridList from "../components/GridList/GridList";
import Loading from "../components/Loading/Loading";

import { getTotalPrice } from "../store/cart/cartSlice";

const ShoppingCard = () => {
  const products = useAppSelector((state) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector(getTotalPrice);
  const checkoutState = useAppSelector((state) => state.cart.checkoutState);
  const { loading, error } = useAppSelector((state) => state.cart);
  const errorMessage = useAppSelector((state) => state.cart.errorMessage);

  return (
    <div>
      <Loading loading={loading} error={error}>
        <GridList
          items={items}
          products={products}
          totalPrice={totalPrice}
          checkoutState={checkoutState}
          errorMessage={errorMessage}
        />
      </Loading>
    </div>
  );
};

export default ShoppingCard;
