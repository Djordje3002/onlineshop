/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../services/ProductService';
import LoadingPage from '../utils/LoadingPage';
import { Rating } from '@mui/material';
import { FaCheck } from "react-icons/fa";
import { IoClose, IoCartOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { SaveInCartAction } from '../store/CartSlice';
import { Link } from 'react-router-dom';

function SingleProductPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const [currentImg, setCurrentImg] = useState(0);
  const [countProduct, setCountProduct] = useState(1);

  const dispatch = useDispatch();
  const { id } = useParams();

  function handleImg(index) {
    setCurrentImg(index);
  }

  useEffect(() => {
    ProductService.getSingleProductService(id)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setIsLoading(false);
      });
  }, [id]);

  function handleProductCart() {
    const productWithQuantity = {
      ...singleProduct,
      quantity: countProduct
    };
    dispatch(SaveInCartAction(productWithQuantity));
  }

  function increaseQuantity() {
    setCountProduct(prevCount => prevCount + 1);
  }

  function decreaseQuantity() {
    setCountProduct(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  }

  return (
    <div className="flex justify-center m-[3rem]">
      {isLoading ? (
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
            <img
              className="w-full max-w-[500px] object-cover"
              src={singleProduct.images?.[currentImg]}
              alt=""
            />
            <div className="flex flex-wrap justify-center gap-2 mt-4 border border-blue-950">
              {singleProduct.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product Image ${index}`}
                  onClick={() => handleImg(index)}
                  className={`w-[80px] h-[80px] object-cover cursor-pointer border ${
                    currentImg === index ? 'border-4 border-blue-500' : 'border-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center p-6 w-full lg:w-1/2">
            <h1 className="text-2xl lg:text-2xl font-bold text-center lg:text-left">
              {singleProduct.title}
            </h1>
            <h2 className="text-xl lg:text-2xl font-bold text-primaryColor py-3 text-center lg:text-left">
              ${singleProduct.price}
            </h2>
            <Rating name="read-only" value={singleProduct.rating} readOnly />
            {singleProduct.stock > 0 ? (
              <div className='flex items-center gap-2 pt-3'>
                <FaCheck />
                <p className="text-sm font-semibold text-green-600 text-center lg:text-left">
                  In Stock
                </p>
              </div>
            ) : (
              <div className='flex items-center gap-2 pt-3'>
                <IoClose />
                <p className="text-sm font-semibold text-red-600 text-center lg:text-left">
                  Out of Stock
                </p>
              </div>
            )}
            <p className="my-4 text-sm lg:text-base text-gray-700 text-center lg:text-left">
              {singleProduct.description}
            </p>
            <p>Hurry up! Only <span className='font-bold'>{singleProduct.stock}</span> left in stock.</p>
            <div>
              <p>Tags:</p>
              <ul>
                {singleProduct.tags?.map((tag, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    #{tag}
                  </li> 
                ))}
              </ul>
            </div>
            <div className='py-2 flex gap-3 mb-2'>
              <p className='my-2'>Quantity:</p>
              <div className='flex items-center border border-gray-600 rounded-md'>
                <button onClick={decreaseQuantity} className='bg-gray-400 text-white py-2 px-4 rounded-md'>-</button>
                <span className='mx-3'>{countProduct}</span>
                <button onClick={increaseQuantity} className='bg-gray-400 text-white py-2 px-4 rounded-md'>+</button>
              </div>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <Link to={'/cart'} onClick={handleProductCart} className="bg-secondaryColor text-white py-2 px-4 rounded-md">Add to Cart</Link>
            </div>
            <div className='h-[2px] w-[100%] bg-gray-300 my-3'></div>
            <div className="flex items-center gap-2 py-2">
              <IoCartOutline />
              <span>{singleProduct.shippingInformation}</span>
            </div>
            <p>{singleProduct.returnPolicy}</p>
          </div>
        </div>
      ) : (
        <LoadingPage className="w-[100%] h-[100%]" />
      )}
    </div>
  );
}

export default SingleProductPage;
