
import React, { useState,useEffect } from 'react'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'; // Import the CSS file (optional)

const CategoryOne = () => {
    const showSweetAlert = () => {
       
      };
      
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch("http://localhost:3000/api/data").then((result) => {
            result.json().then((resp) => {
                setData(resp);
            });
        });
    }, []);




    const handlePurchase = (selectedProduct) => {
        // Send the selected product data to the server
        fetch('http://localhost:3000/api/purchase', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedProduct),
        })
          .then((response) => response.json())
          .then((data) => {
            Swal.fire({
                title: 'Thankyou For Purchase',
                text: 'We will get back to you soon 😊',
                icon: 'success', // The icon to display (success, error, warning, info, question)
                confirmButtonText: 'OK',
              });
            // console.log(data.message);
            // Handle the response from the server
          })
          .catch((error) => {
            console.error('Error:', error);
            // Handle errors here
          });
      };
      

    return (
        <div>
            <div class="top-navbar fixed-top">
                <div class="top-icons">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div class="other-links">
                    <button id="btn-login"><a href="/login">Login</a></button>&nbsp;&nbsp;
                    <button id="btn-signup"><a href="/signup">Sign up</a></button>

                    <i class="fa-solid fa-user"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src="./image/logo.png" alt="" width="180px" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i class="fa-solid fa-bars" style={{ color: "white;" }}></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/CategoryOne">Product</a>
                                </li>
                               

                                <li class="nav-item">
                                    <a class="nav-link" href="/Contact">Contact</a>
                                </li>
                               
                            </ul>

                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
                                    setSearch(e.target.value);
                                }} />&nbsp;&nbsp;
                                <button class="btn btn-outline-success" type="submit" id="search-btn">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
          
<br/><br/>
                <div class="container" id="product-cards">
                <h1 class="text-center"></h1>
                <div class="row" id='as3' style=
                    {{ marginTop: "30px;" }}>


                    {data &&
                        data
                            .filter((val) => {
                                if (search == "") {
                                    return val;
                                } else if (
                                    val.name.toLowerCase().includes(
                                        search.toLowerCase()
                                    )
                                ) {
                                    return val;
                                }
                            })
                            .map((item, index) => (
                                <tr key={item._id}>
                                            <div class="card" id="gs6" style={{padding:"20px",margin:"20px"}}>

                                                <img width="100"
                                                    height="100"
                                                    src={item.image}
                                                    style={{marginLeft:"50px"}} />
                                                <div class="card-body" >
                                                    <h3>{item.name}</h3>
                                                    <p>Lorem ipsum dolor sit amet.</p>
                                                    <div class="star">
                                                       {item.average_rating} <i class="fas fa-star checked"></i>
                                                       
                                                    </div>
                                                    <h5>${item.price}  <span><i class="fa-solid fa-cart-shopping" onClick={() => handlePurchase(item)}></i></span></h5>
                                                </div>
                                            </div>


                                </tr>
                            ))}




                </div>
           
            </div>
            <a href="#" class="arrow"><i><img src="./image/up-arrow.png" alt="" width="50px" /></i></a>

        </div>
    )
}

export default CategoryOne
