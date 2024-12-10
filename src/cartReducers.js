const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.find((product) => product.id === action.payload.id);
      if (existingProduct) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: Math.min(product.quantity + 1, 100) } // لا تسمح بزيادة الكمية عن 100
            : product
        );
      }
      return [...state, { ...action.payload, quantity: 1 }]; // كمية افتراضية 1
    
    
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload.id);

    case "UPDATE_QUANTITY":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product
      );

    default:
      return state;
  }
};

export default cartReducer;
