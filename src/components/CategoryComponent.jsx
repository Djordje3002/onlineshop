import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryService from "../services/CategoryService";
import { saveAllCategoryAction } from "../store/categorySlice";
import LoadingPage from "../utils/LoadingPage";

function CategoryComponent() {
  const [toggleCategory, setToggleCategory] = useState(false); // Toggles category display
  const { allCategory, isLoading } = useSelector((state) => state.categoryStore); // Access Redux state

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch categories and dispatch to Redux
    dispatch({ type: "category/setLoading", payload: true }); // Set loading to true
    CategoryService.getAllCategory()
      .then((response) => {
        dispatch(saveAllCategoryAction(response.data));
      })
      .catch((err) => console.error(err))
      .finally(() => {
        dispatch({ type: "category/setLoading", payload: false }); // Set loading to false
      });
  }, [dispatch]);

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
          toggleCategory && (
            <ul className="bg-white shadow rounded p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
              {allCategory.map((category, index) => (
                <li key={index} className="text-white bg-primaryColor hover:bg-secondaryColor transiotion duration-300 text-center  p-2 rounded">
                  {category}
                </li>
              ))}
            </ul>
          )
        ) : (
            <LoadingPage className="w-full" /> // Show loading page while fetching
        )}
      </div>
    </div>
  );
}

export default CategoryComponent;
