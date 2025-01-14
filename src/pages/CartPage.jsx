import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SaveInCartAction, removeItemFromCart, decreaseItemQuantity } from '../store/CartSlice'; // Adjust path

function CartPage() {
  const { cart, totalProduct, totalPrice } = useSelector(state => state.cartStore);
  console.log("Cart from Redux:", cart);  // Log the cart state to check if it updates
      const dispatch = useDispatch();

    const handleAddToCart = (product) => {
      console.log("Dispatching Add to Cart with product:", product);
      dispatch(SaveInCartAction(product));
  };
  

    const handleRemoveItem = (id) => {
        dispatch(removeItemFromCart(id));
    };

    const handleDecreaseQuantity = (product) => {
        dispatch(decreaseItemQuantity(product));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            <div className="space-y-4">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center p-4 border-b">
                            <div className="flex items-center space-x-4">
                                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover" />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <button onClick={() => handleDecreaseQuantity(item)} className="px-3 py-1">-</button>
                                <span>{item.count}</span>
                                <button onClick={() => handleAddToCart(item)} className="px-3 py-1">+</button>
                                <button onClick={() => handleRemoveItem(item.id)} className="px-3 py-1 bg-red-500 text-white">Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {cart.length > 0 && (
                <div className="mt-6 p-4 border-t">
                    <div className="flex justify-between">
                        <p>Total Items: {totalProduct}</p>
                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    </div>
                    <button className="bg-blue-600 text-white p-2 rounded">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
}

export default CartPage;
