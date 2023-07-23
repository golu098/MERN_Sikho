import React, { Link,useEffect,useState } from "react";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result)
    }
    console.warn("products",products);
  
    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE", // Method should be in uppercase
        });
      
        result = await result.json();
        if (result) {
          // alert("record deleted")
          getProducts();
        }
      };
      
   
    return (
        <div className="product-list"> 
            <h1>product list</h1>
            <ul>
            <li>s.No</li>
            <li>name</li>
            <li>price</li>
            <li>
                category
            </li>
            <li>Operation</li>
                </ul>
                {
                    products.map((item,index)=>
                    <ul>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>
              {item.category}
            </li>
            <li>
                <button onClick={()=>deleteProduct(item._id)}>delete</button> </li>
                <Link to={"/update/10"+item._id }>Update</Link>
                </ul>
                    )
                }
        </div>
    )
}
export default ProductList;