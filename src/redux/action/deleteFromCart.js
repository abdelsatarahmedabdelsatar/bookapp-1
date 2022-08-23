export function DeleteCart(index) {
    return {
      type: "DEL_FROM_CART",
      payload:index
    };
  }