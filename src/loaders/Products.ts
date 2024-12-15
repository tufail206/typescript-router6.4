// import { Product } from "../pages/products/ProductSchema"

export let Loader=async() =>{

    let response = await fetch("https://fakestoreapi.com/products")

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    //show skelaton loading
   


    return {
        products: await response.json(),
    };

}