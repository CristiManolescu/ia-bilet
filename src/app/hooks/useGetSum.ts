import { useAppSelector } from "../redux/store";

const useGetSum = () => {
  const cart = useAppSelector((store) => store.cart.cartItems);
  let initialValue = 0;
  cart.forEach((item) => (initialValue += item.ticketPrice * item.quantity));
  return initialValue;
};

export default useGetSum;
