import { useEffect } from "react"
import ProductService from "../services/ProductService"
import { useDispatch } from "react-redux"
import { saveAllProductsAction } from "../store/productSlice"
import { useSelector } from "react-redux"
import LoadingPage from "../utils/LoadingPage";
import CardComponent from "../components/CardComponent";

function HomePage() {
  
  const { allProduct, isLoading } = useSelector((state) => state.productStore);
  const dispatch = useDispatch()

  useEffect(() => {
    ProductService.getAllProductsService()
    .then(res => {
      dispatch(saveAllProductsAction(res.data.products))
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        {allProduct.map((product) => { 
          return <CardComponent key={product.id} product={product} />
        }
        )}
      </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
  
}

export default HomePage
