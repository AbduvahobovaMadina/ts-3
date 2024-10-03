import  { FC, useState } from 'react'
import Products from '../../components/products/Products';
import { useFetch } from '../../hooks/useFetch';

const Home: FC = () => {
     const [category, setCategory] = useState<string>("");


  const { data } = useFetch(
    `/products${category ? `/category/${category}` : ""}`,
    { limit: 10 },
    [category]
    );

  const products = (
    <div className="container mx-auto py-4 mt-10">
      <ul className="flex whitespace-nowrap overflow-x-auto scroll-none gap-4">
        <li>
          <button
            onClick={() => setCategory("")}
            className="px-4 py-1 bg-green-500 rounded-3xl text-white"
          >
            All
          </button>
        </li>
      </ul>
    </div>
    );
    console.log(products);
    

    return (
  <>
            {products}
            
        <Products data={data}/>
  </>
  )
 
}

export default Home