/* eslint-disable react/prop-types */


function CardComponent({ product }) {
    return (
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              className="w-full h-48 object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
              <p className="text-xl font-bold text-blue-600 mt-4">${product.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-200">
                Add to Cart
              </button>
            </div>
          </div>
      );
      
  }

export default CardComponent
