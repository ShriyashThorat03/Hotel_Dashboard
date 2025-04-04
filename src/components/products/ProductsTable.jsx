import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Edit, Search, Trash2 } from "lucide-react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "soup",
    category: "Starters",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Caesar salad",
    category: "Salads",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Fried chicken",
    category: "Main Courses",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Fries",
    category: "Side Dishes",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Mocktails",
    category: "Beverages",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];
const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
  const handleSearch = (e) => {
    const term = e.target.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Product img"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;
