import React from "react";

const UpdateProduct =()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const[company,setCompany]=React.useState('');
    // 21 left(eror msg inout box)
    // const [error,setError]=React.useState(false);
    const updateProduct =async()=>{
        console.warn(name,price,category,company)

//         console.warn(!name);
//         if(!name || !price || !category || !company)
// {
//     setError(true);
//     return false;

// }       
//         console.warn(name,price,category,company)
        // const userId=JSON.parse(localStorage.getItem('user'))._id;
        // console.warn(userId)
        // let result= await fetch('http://localhost:5000/add-product',{
        //     method:'post',
        //     body:JSON.stringify({name,price,category,company,userId}),
        //     headers:{
        //       'Content-Type':'application/json'
        //     }
        //         });
        //         result=await result.json();
        //         console.warn(result)
        
    }
    return(
        <div className="product">
            <h1>update Proudcts</h1>
            <input
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)} // <-- Here is the corrected line
        type="text"
        placeholder="Enter product name"
      />
      <input
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}  type="text" placeholder="Enter product price"
      />
      <input
        className="inputBox"
        value={category}
        onChange={(e) => setCategory(e.target.value)} // <-- Here is the corrected line
        type="text"
        placeholder="Enter product category"
      />
      <input
        className="inputBox"
        value={company}
        onChange={(e) => setCompany(e.target.value)} // <-- Here is the corrected line
        type="text"
        placeholder="Enter company name"
      />
        <button onClick={updateProduct} className="appButton" type="submit">
        ADD
      </button>
        </div>
    )
}
export default UpdateProduct;