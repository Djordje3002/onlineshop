import axios from "axios";

class CategoryService {
  // Static method to get all categories
  static getAllCategory = () => axios.get('/products/category-list');
}

export default CategoryService;
