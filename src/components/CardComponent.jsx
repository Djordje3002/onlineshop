/* eslint-disable react/prop-types */
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom';

function CardComponent({ product , isGrid}) {
    return (
          <div className={isGrid ? 'max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300' : 'w-full flex items-center border border-gray-400 justify-between px-[10px] '} 
            >
            <img
              className="w-full h-48 object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="p-4 flex items-center flex-col justify-center">
              <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
              <Rating name="read-only" value={product.rating} readOnly />
              <p className="text-xl font-bold text-primaryColor mt-4">${product.price}</p>
              <Link to={`/singleProduct/${product.id}`} className="mt-4 flex  items-center justify-center w-full bg-secondaryColor text-white py-2 rounded-lg hover:bg-orange-500 transition-all duration-200">
                View More
              </Link>
            </div>
          </div>
      );
      
  }

export default CardComponent
