import { useEffect, useState } from "react"
const Products = () => {
    const [products, setProducts]=useState([])
    const getProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data)
    }
    useEffect(()=>{
        getProducts()
    },[])
    return (
        <>
            <h1>Products</h1>
            <div>
                {products.map((product) => (
                    <>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} width="100" height="100" />
                        <p>{product.price}</p>
                        <Link to={'/productDetails/${product.id}'}>View Details</Link>
                    </>
                ))}
            </div>
        </>
    )
}
export default Products 
