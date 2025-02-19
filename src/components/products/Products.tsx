import  { FC } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
interface Product {
  id: number;
  title: string;
  images: string[];
  rating: number;
  brand: string; // Changed from `number` to `string` for a more appropriate type
  price: number;
  percentageCount: number; // Corrected to `number`
  category: string;
  discountPercentage: number;
}
interface ProductsProps {
  data: Product[]; // Expecting an array of Product items
  title: string;
}
const Products: FC<ProductsProps>  = ({data, title}: any) => {
  console.log(data);
  
    let items = data?.map((product:Product): JSX.Element => {

    return (
      <div className="rounded-[15px] border mb-7 relative" key={product.id}>
        <div className="w-full h-60  rounded-lg">
          <Link to={`/products/${product.id}`}>
            <img
              className="w-full h-full object-contain duration-300 hover:scale-105"
              src={product.images[0]}
              alt="Photo"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 p-[5px_0_25px_16px] items-start justify-end">
          <p className="text-start text-[12px] text-[#ADADAD]">
            {product.category}
          </p>
          <p className="text-[16px] font-[700] text-[#253D4E] text-start">
            {product.title.slice(0, 20)}...
          </p>
          <div className="flex gap-6 items-baseline">
            <FaStar className="text-yellow-400" />
            <p className="text-[#B6B6B6] text-[14px] font-[400]">
              ({product.rating})
            </p>
          </div>
          
          <div className="absolute top-0 right-0">
            <button
              className="rounded-[0_15px] px-[10px] text-[16px] text-[#fff] py-[5px] bg-[#3BB77E]"
            >
              <FaHeart />
            </button>
          </div>
          <div>
            <div className="flex">
              <p className="text-[#B6B6B6] text-[14px]">By</p>
              <p className="text-[#3BB77E] text-[14px] font-[400]">
                {" "}
                {product.brand}
              </p>
            </div>
            <div className="flex  gap-[20px]">
              <div className="flex gap-2 mt-2 items-center">
                <strong className="text-[18px] text-[#3BB77E] font-[700]">
                  ${product.price}
                </strong>
             
              </div>
              <button
              
                className="border bg-[#DEF9EC] py-[2px] px-[10px] text-[#fff] flex items-center rounded-[4px]"
              >
                <IoCartOutline className="text-[#3BB77E]" />{" "}
                <p className="text-[13px] text-[#3BB77E] font-[500]">Add</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-10 mt-10">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {items}
      </div>
    </div>  
  )
}

export default Products