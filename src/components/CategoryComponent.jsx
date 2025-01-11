import CategoryService from "../services/CategoryService"
import { useEffect } from "react"
import { useState } from "react"

import LoadingPage from "../utils/LoadingPage"  
function CategoryComponent() {

    const [alllCategory, setAllCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        CategoryService.getAllCategory()
        .then((response) => {
            setAllCategory(response.data)
        })
        .catch((err) => console.log(err))
    }, [])

  return (
    <div className="bg-gray-300 h-auto flex justify-center items-center">
        <div className="flex flex-row justify-between items-center">
            <button className="bg-secondaryColor px-5 py-3 weight-bold text-white">Show Category</button>

            {isLoading ? <div>Category</div> : <LoadingPage />}
        </div>
    </div>
  )
}

export default CategoryComponent
