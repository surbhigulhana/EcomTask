import React, { useEffect, useState } from 'react';
import Slider from './Slider'

const Home = () => {
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
            console.log(data.message);
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
                    <a href='/Cart'> <i class="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>


            <div class="home-section">

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

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: "#1c1c50;" }}>
                                        <li><a class="dropdown-item" href="/CategoryOne">T-Shirt</a></li>

                                        <li><a class="dropdown-item" href="/CategoryOne">Pants</a></li>
                                        <li><a class="dropdown-item" href="/CategoryOne">Cap</a></li>
                                        <li><a class="dropdown-item" href="/CategoryOne">Lowers</a></li>
                                        <li><a class="dropdown-item" href="/CategoryOne">Glasess</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="/Contact">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Myorder">MyOrder</a>
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
                <br /><br />

                <div id="carousel-2" class="carousel slide carousel-fade" data-ride="carousel" data-interval="6000">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-2" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-2" data-slide-to="1"></li>
                        <li data-target="#carousel-2" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">

                        <div class="carousel-item active">
                            <section class="home">
                                <div class="content">
                                    <h3>Biggest Clothe Sale
                                        <br /> <span>Up To 60% Off</span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, totam sed maxime animi facilis!</p>
                                    <button id="shopnow">Shop Now</button>
                                </div>
                                <div class="img">
                                    <img src="./image/b2.png" alt="" />
                                </div>
                            </section>
                        </div>


                        <div class="carousel-item">
                            <section class="home">
                                <div class="content">
                                    <h3>Biggest Clothe Sale
                                        <br /> <span>Up To 50% Off</span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, totam sed maxime animi facilis!</p>
                                    <button id="shopnow">Shop Now</button>
                                </div>
                                <div class="img">
                                    <img src="./image/b2.png" alt="" />
                                </div>
                            </section>
                        </div>

                        <div class="carousel-item">
                            <section class="home">
                                <div class="content">
                                    <h3>Biggest Clothe Sale
                                        <br /> <span>Up To 50% Off</span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, totam sed maxime animi facilis!</p>
                                    <button id="shopnow">Shop Now</button>
                                </div>
                                <div class="img">
                                    <img src="./image/b2.png" alt="" />
                                </div>
                            </section>
                        </div>

                    </div>

                    <a class="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>


            </div>



            <div class="container-fluid">

                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-2" ><br /><br /><br />
                        <h2><b> Top Offers</b></h2>
                        <button className='btn btn-outline-primary'> View All</button>
                        <br /><br />
                        <p style={{ textAlign: "justify" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div class="col-sm-9" id=''>
                        <section class="pt-5 pb-5">
                            <div class="container">



                                <div class="card col-md-12 mt-2">
                                    <div id="carouselExampleControls1" class="carousel slide" data-ride="carousel" data-interval="100000">
                                        <div class="w-100 carousel-inner mb-5" role="listbox">
                                            <div class="carousel-item active" id='sg3'>

                                                <div class="row" id='s'>
                                                    <div class="col-md-4">
                                                        <div class="carousel-caption">
                                                            <div class="row">

                                                                <div class="col-sm-9 col-8">
                                                                    <div class="card" style={{ backgroundColor: " #a9a9a926;" }}>
                                                                        <img src="./image/topcard1.png" alt="" id='gs3' />
                                                                        <div class="card-img-overlay">
                                                                            <h5 class="card-titel">Smart Watch</h5>
                                                                            <p><strong>$200.30 </strong></p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="carousel-caption">
                                                            <div class="row">

                                                                <div class="col-sm-9 col-8">
                                                                    <div class="card" style={{ backgroundColor: " #a9a9a926;" }}>
                                                                        <img src="./image/topcard2.png" alt="" id='gs3' />
                                                                        <div class="card-img-overlay">
                                                                            <h5 class="card-titel">Nike Shoes</h5>
                                                                            <p><strong>$150.10</strong></p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="carousel-caption">
                                                            <div class="row">

                                                                <div class="col-sm-9 col-8">
                                                                    <div class="card" style={{ backgroundColor: " #a9a9a926;" }}>
                                                                        <img src="./image/topcard1.png" alt="" id='gs3' />
                                                                        <div class="card-img-overlay">
                                                                            <h5 class="card-titel">Smart Watch</h5>
                                                                            <p><strong>$200.30 </strong></p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item" id='sg3'>
                                                <div class="bg"></div>
                                                <div class="row">
                                                    <div class="col-md-4 col-12">
                                                        <div class="carousel-caption">
                                                            <div class="row">

                                                                <div class="col-sm-9 col-8">
                                                                    <div class="card" style={{ backgroundColor: " #a9a9a926;" }}>
                                                                        <img src="./image/p6.png" alt="" id='gs3' />
                                                                        <div class="card-img-overlay">
                                                                            <h5 class="card-titel">Bag</h5>

                                                                            <p><strong>$50.10</strong></p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4 col-12">
                                                        <div class="carousel-caption">
                                                            <div class="row">

                                                                <div class="col-sm-9 col-8">
                                                                    <div class="card" style={{ backgroundColor: " #a9a9a926;" }}>
                                                                        <img src="./image/topcard2.png" alt="" id='gs3' />
                                                                        <div class="card-img-overlay">
                                                                            <h5 class="card-titel">Nike Shoes</h5>
                                                                            <p><strong>$150.10</strong></p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-12">
                                                        <div class="carousel-caption">
                                                            <div class="row">

                                                                <div class="col-sm-9 col-8">
                                                                    <div class="card" style={{ backgroundColor: " #a9a9a926;" }}>
                                                                        <img src="./image/p6.png" alt="" id='gs3' />
                                                                        <div class="card-img-overlay">
                                                                            <h5 class="card-titel">Bag</h5>

                                                                            <p><strong>$50.10</strong></p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon1" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon1" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div class="banner">
                <div class="content">
                    <h1>Get Up To 50% Off</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, animi?</p>
                    <div id="bannerbtn"><button>SHOP NOW</button></div>
                </div>
            </div>

            {/* <div class="container" id="product-cards">
                <h1 class="text-center">PRODUCT</h1>
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
                                                    height="80"
                                                    src={item.image} />
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
                <br /><br />

                <a href="clothe.html" id="viewmorebtn">View More</a>
            </div> */}

            <div class="container" style={{ marginTop: "100px;" }}>
                <hr />
            </div>
            <div class="container">
                <Slider />
            </div>
            <center>
                <div class="flex-container" style={{ marginTop: "100px" }}>
                    <div><i class="fa-solid fa-cart-shopping"></i>
                        <h5>Free Shipping</h5></div>
                    <div> <i class="fa-solid fa-truck"></i>
                        <h5>Fast Delivery</h5></div>
                    <div>  <i class="fa-solid fa-thumbs-up"></i>
                        <h5>Big Choice</h5></div>
                    <div><i class="fa-solid fa-clock"></i>
                        <h5>24/7</h5></div>
                </div></center>

            <br /><br />







            <footer id="footer" style={{ margintop: "50px;" }}>
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 footer-content">
                                <h3>Fashion</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, hic?</p>
                                <p>
                                    Karcahi <br />
                                    Sindh <br />
                                    Pakistan <br />
                                </p>
                                <strong><i class="fas fa-phone"></i> Phone: <strong>+000000000000000</strong></strong><br />
                                <strong><i class="fa-solid fa-envelope"></i> Email: <strong>example@gmail.com</strong></strong>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Usefull Links</h4>
                                <ul>
                                    <li><a href="/">Home</a></li>

                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Privacy policay</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, rem!</p>
                                <ul>
                                    <li><a href="#">Smart phone</a></li>
                                    <li><a href="#">Smart watch</a></li>
                                    <li><a href="#">Airpods</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Network</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ad?</p>
                                <div class="socail-links mt-3">
                                    <a href="#" class="twiiter"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#" class="twiiter"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#" class="twiiter"><i class="fa-brands fa-google-plus"></i></a>
                                    <a href="#" class="twiiter"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="#" class="twiiter"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="container py-4">
                    <div class="copyright">
                        &copy; Copyright <strong>Fashion</strong>.All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed By <a href="#">SA coding</a>
                    </div>
                </div>
            </footer>


            <a href="#" class="arrow"><i><img src="./image/up-arrow.png" alt="" width="50px" /></i></a>


        </div>
    )
}

export default Home
