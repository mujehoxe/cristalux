import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import wilayasList from "../components/checkout/wilayasList";
const initialState = {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};


const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`increased ${state.cartItems[itemIndex].name} quantity`, {
                    position: "bottom-left"
                })
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} is added to cart`, {
                    position: "bottom-left"
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeItem(state, action) {
            const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id );
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
                toast.error(`${action.payload.name} removed from cart`, {
                    position: "bottom-left"
                })
            },
            decreaseCart(state, action) {
                const itemsIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id)
                if(state.cartItems[itemsIndex].cartQuantity > 1) {
                    state.cartItems[itemsIndex].cartQuantity -= 1
                    toast.info(`decreased ${action.payload.name} cart quantity`, {
                        position: "bottom-left"
                    })
            } else if (state.cartItems[itemsIndex].cartQuantity === 1) {
            const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id );
            state.cartItems = nextCartItems;
            toast.error(`${action.payload.name} removed from cart`, {
                position: "bottom-left"
            })
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        
        clearCart(state, action) {
            state.cartItems = []
            toast.error(`Cart cleared`, {
                position: "bottom-left"
            });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },


      addToCartWithQuantity(state, action) {
      const { product, quantity } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === product.id);

      if (itemIndex >= 0) {
        // Check if adding quantity exceeds the available quantity
        if (state.cartItems[itemIndex].cartQuantity + quantity > product.quantity) {
          toast.error(`Cannot add more than available quantity for ${product.name}`, {
            position: "bottom-left",
          });
          return; // Do not add to cart if it exceeds available quantity
        }

        state.cartItems[itemIndex].cartQuantity += quantity;
        toast.info(`Added ${quantity} ${state.cartItems[itemIndex].name}(s) to cart`, {
          position: "bottom-left",
        });
      } else {
        // Check if adding quantity exceeds the available quantity
        if (quantity > product.quantity) {
          toast.error(`Cannot add more than available quantity for ${product.name}`, {
            position: "bottom-left",
          });
          return; // Do not add to cart if it exceeds available quantity
        }

        const tempProduct = { ...product, cartQuantity: quantity };
        state.cartItems.push(tempProduct);
        toast.success(`${quantity} ${product.name}(s) added to cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }, 

     getTotal(state, action) {
      // Calculate the total price of products without shipping
      const { cartItems } = state;
      state.cartTotalAmount = cartItems.reduce((subtotal, cartItem) => {
        return subtotal + cartItem.price * cartItem.cartQuantity;
      }, 0);
      state.cartTotalQuantity = cartItems.reduce((quantity, cartItem) => {
        return quantity + cartItem.cartQuantity;
      }, 0);
    },

    setTotal(state, action, amount) {
      state.cartTotalAmount += amount
    }
  },
});

export const {
  addToCart,
  removeItem,
  decreaseCart,
  clearCart,
  getTotal,
  setTotal,
  addToCartWithQuantity,
  updateTotalWithShipping,
} = cartSlice.actions;

export default cartSlice.reducer;





