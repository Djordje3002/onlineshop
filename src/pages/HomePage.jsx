import { useEffect } from "react"
import ProductService from "../services/ProductService"
import { useDispatch } from "react-redux"
import { saveAllProductsAction } from "../store/ProductSlice"
import { useSelector } from "react-redux"
import LoadingPage from "../utils/LoadingPage";
import CardComponent from "../components/CardComponent";

import { MdOutlineGridView } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { useState } from "react"

function HomePage() {
  
  const { allProduct, isLoading, selectCategory, searchProduct } = useSelector((state) => state.productStore);
  const dispatch = useDispatch()
  const [isGrid, setIsGrid] = useState(true);
  const [limitProduct, setLimitProduct] = useState(10)

    useEffect(() => {

      if(selectCategory){
        ProductService.getAllProductsByCategory(selectCategory)
      .then(res => {
        dispatch(saveAllProductsAction(res.data.products))
      })
      .catch(err => console.log(err))
      }else{
        ProductService.getAllProductsService(limitProduct)
        .then(res => {
          dispatch(saveAllProductsAction(res.data.products));
        })
        .catch(err => console.log(err))
    }
  }, [selectCategory, limitProduct])


  useEffect(() => {
      if(searchProduct){
        ProductService.getSearchProducts(searchProduct)
      .then(res => {
        console.log(res)
        dispatch(saveAllProductsAction(res.data.products))
      })
      .catch(err => console.log(err))
      }
  }, [searchProduct])

  return (
    <div>
      <div className="flex items-center gap-[20px] py-[20px] justify-end pr-2">
        <MdOutlineGridView size={30} className={isGrid ? 'bg-secondaryColor p-1 rounded-sm' : 'cursor-pointer'}  onClick={() => setIsGrid(!isGrid)} />
        <CiBoxList size={30}  className={!isGrid ? 'bg-secondaryColor p-1 rounded-sm' : 'cursor-pointer'} onClick={() => setIsGrid(!isGrid)} />
      </div>
      {isLoading ? (
        <div className={isGrid ? "flex flex-wrap items-center justify-center gap-4 mt-6" : "flex flex-col items-center gap-2"}>
        {allProduct.map((product) => { 
          return <CardComponent key={product.id} product={product} isGrid={isGrid} setIsGrid={setIsGrid}/>
        }
        )}
        {!selectCategory && <div className="flex items-center justify-center w-full">
        <button
        onClick={() => setLimitProduct(limitProduct + 10)}
          className="mt-4 flex  items-center justify-center px-8 bg-secondaryColor text-white py-2 rounded-lg hover:bg-orange-500 transition-all duration-200">View More Products</button>
        </div>}
      </div>
      ) : (
        <LoadingPage className="w-full h-full" />
      )}
    </div>
  );
  
}

export default HomePage
