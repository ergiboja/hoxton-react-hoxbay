import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'


function Productpage() {
    let id = useParams();
   console.log(id)


   const [product, setProduct] = useState<any[]>([]
        
    );
    useEffect(() => {

        fetch(`http://localhost:4000/products/${id}`)

            .then(response => {
                return response.json()
            })

            .then(data => {
                // console.log(data);
                setProduct(data);
                console.log(data);
               

                 

            })
            
    },[])


console.log(product)


  return (
    <h1>xaku</h1>
//     <main>
//   <section className="product-detail main-wrapper">
//     <img
//       src={product.image}
//       alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
//     />
//     <div className="product-detail__side" >
//       <h3></h3>
//       <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
//       <p>
//         Your perfect pack for everyday use and walks in the forest. Stash your
//         laptop (up to 15 inches) in the padded sleeve, your everyday
//       </p>
//       <p>£109.95</p>
//       <!-- Once you click in this button, the user should be redirected to the Basket page -->
//       <button>Add to basket</button>
//     </div>
//   </section>
// </main>
  )
}

export default Productpage;