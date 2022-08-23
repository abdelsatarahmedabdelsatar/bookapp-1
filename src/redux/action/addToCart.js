export function changeCart(status) {
    return {
      type: "SET_TO_CART",
      payload: status,
    };
  }