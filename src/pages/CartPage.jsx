import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SaveInCartAction, removeItemFromCart, decreaseItemQuantity } from '../store/CartSlice'; // Adjust path
import { Link } from 'react-router-dom';

function CartPage() {

    const dispatch = useDispatch();
  const { cart, totalProduct, totalPrice } = useSelector(state => state.cartStore);
  console.log("Cart from Redux:", cart);  // Log the cart state to check if it updates

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
        <div className='flex flex-col items-center justify-between'>
            <h1 className="text-4xl font-extrabold mb-6 m-3 text-center">Your Cart</h1>
    
            <div className="container mx-auto p-2 flex justify-between flex-col lg:flex-row gap-4">
    
                <div className="space-y-4 w-full flex flex-col lg:w-[65%] border border-gray-300 rounded-lg">
                    <div className='w-full h-[40px] bg-primaryColor flex justify-between items-center p-6 rounded-lg'>
                        <div className='text-white'>Product</div>
                        <div className='text-white'>Price</div>
                        <div className='text-white'>Quantaty</div>
                        <div className='text-white'>Remove</div>
                    </div>
                    {cart.length === 0 ? (
                        <div>
                            <p className="text-lg">Your cart is empty.</p>
                            <p className="text-md text-gray-500">Please add items to your cart.</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center p-4 border-b">
                                <div className="flex items-center justify-between w-[40%] space-x-4">
                                    <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover" />
                                    <div>
                                        <p className="font-medium">{item.title}</p>
                                        <p className="text-sm text-gray-600"><span className="font-bold">Price:</span> ${item.price}</p>
                                    </div>
                                </div>
    
                                <div className="flex items-center space-x-4">
                                    <button onClick={() => handleDecreaseQuantity(item)} className='bg-gray-400 text-white py-1 px-3 rounded-md hover:bg-gray-500 transition'>-</button>
                                    <span className="font-medium">{item.count}</span>
                                    <button onClick={() => handleAddToCart(item)} className='bg-gray-400 text-white py-1 px-3 rounded-md hover:bg-gray-500 transition'>+</button>
                                    <button onClick={() => handleRemoveItem(item.id)} className="px-3 py-1 text-red-600 font-semibold rounded hover:text-red-800 transition">Remove</button>
                                </div>
                            </div>
                            
                        ))
                    )}
                    <div className='flex justify-between px-[30px]'>
                    <Link to='/' className='bg-secondaryColor px-6 mt-6 text-white p-2 m-3 rounded-full font-semibold hover:bg-orange-500 transition'>
                        Continue Shopping
                    </Link>
                    <Link to='/' className='border border-gray-300 px-6  mt-6 m-3 text-gray-700 p-2 rounded-full font-semibold '>
                        Update Cart
                   </Link>
                    <button className='border border-red-500 px-6  m-3 mt-6 text-red-500 p-2 rounded-full font-semibold '>
                        Clear Cart
                  </button>
                    </div>  
                </div>
    
                <div className='w-full lg:w-[30%] border border-gray-300 rounded-lg gap-4 flex flex-col'>
                <div className='w-full h-[40px] bg-primaryColor flex justify-between items-center p-6 rounded-lg'>
                        <div className='text-white flex items-ceter justify-center'>Card Total</div>
                    </div>
                    <div className='p-4'>
                    {cart.length > 0 && (
                        <div>
                            <div className="flex flex-col justify-between gap-4 ">
                                <p >Total Items: <span className="font-bold">{totalProduct}</span></p>
                                <p className="font-bold py-4">Total Price: ${totalPrice.toFixed(2)}</p>
                            </div>
                            <div className='flex flex-row bg-gray-200' >
                                <input type="text" placeholder='Enter coupon code' />
                                <button className='bg-secondaryColor rounded-lg px-4 py-2'>Apply</button>
                            </div>
                            <button className="bg-secondaryColor mt-6 text-white p-2 rounded-full font-semibold w-full hover:bg-orange-500 transition">Proceed to Checkout</button>
                        </div>
                    )}
                    </div>
                </div>
            </div>
    
        </div>
    );
}    

export default CartPage;
