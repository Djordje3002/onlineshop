import { useEffect, useState } from "react";
import CategoryService from "../services/CategoryService";
import LoadingPage from "../utils/LoadingPage";
import { saveSelectCategoryAction } from "../store/ProductSlice";
import { useDispatch } from "react-redux";

function CategoryComponent() {
  const [toggleCategory, setToggleCategory] = useState(false);
  const [allCategory, setAllCategory] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true); // Start loading
    CategoryService.getAllCategory()
      .then((response) => {
        setAllCategory(response.data); // Set local state
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);  
      });
  }, []);

  return (
    <div className="bg-gray-300 h-auto w-full flex flex-col justify-center items-center pt-4">
      <div className="flex flex-col w-full justify-between items-center ">
        <button
          className="bg-secondaryColor px-5 py-3 font-bold mb-3 text-white rounded"
          onClick={() => setToggleCategory(!toggleCategory)} // Toggle category display
        >
          {toggleCategory ? "Hide Categories" : "Show Categories"}
        </button>

        {isLoading ? (
          <LoadingPage className="w-full" />
        ) : (
          toggleCategory && (
            <div  className="flex flex-col gap-2">
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
                <li className="text-white bg-primaryColor hover:bg-secondaryColor transition duration-300 text-center p-2 rounded cursor-pointer"
                  onClick={() => dispatch(saveSelectCategoryAction(''))}
                  >
                  All Cetgory
                </li>
                {allCategory.length > 0 ? ( // Check if allCategory has elements
                  allCategory.map((category, index) => (

                    <li className="text-white bg-primaryColor hover:bg-secondaryColor transition duration-300 text-center p-2 rounded cursor-pointer"
                      key={index}
                      onClick={() => dispatch(saveSelectCategoryAction(category))}
                    >
                      {category}
                    </li>
                  ))
                ) : (
                  <p>No categories available</p> // Fallback if no categories
                )}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CategoryComponent;
