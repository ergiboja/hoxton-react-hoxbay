import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";




function Products() {

    const [product, setProduct] = useState<any[]>([]
        
    );
    useEffect(() => {

        fetch('http://localhost:4000/products')

            .then(response => {
                return response.json()
            })

            .then(data => {
                // console.log(data);
                setProduct(data);

                 

            })
            
    },[])


    console.log(product)


  function showprices(){
    alert('hj');
  }




    return (
        <section className="products-container main-wrapper">
            <ul className="products-container__list">
            {product.map((producti,i) =>  

                <li id={producti.id} onClick={showprices}>
                    <a href="/products/" >
                        <article className="product-item">
                            <img
                                src={producti.image}
                                // alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                            />
                            <h3>{producti.title}</h3>
                        </article>
                        </a>
                </li>
)
}

        


            </ul>
        </section>

    )
};

export default Products;