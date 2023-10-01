import React, { useState } from 'react'

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
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
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />&nbsp;&nbsp;
                            <button class="btn btn-outline-success" type="submit" id="search-btn">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container-fluid mt-2 mb-3" id="gs10" >
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <div class="card">
                            <div class="demo" >
                                <img src={selectedImage || 'https://i.imgur.com/KZpuufK.jpg'} id='a' />

                            </div>
                        </div>
<br/><br/>
                        <div class="card mt-2" id='sss'>

                            <div class="similar-products mt-2 d-flex flex-row" id='dflex'>

                                {[
                                    { src: 'https://i.imgur.com/KZpuufK.jpg' },
                                    { src: 'https://i.imgur.com/GwiUmQA.jpg' },
                                    { src: 'https://i.imgur.com/c9uUysL.jpg' },
                                    { src: 'https://i.imgur.com/kYWqL7k.jpg' },
                                    { src: 'https://i.imgur.com/c9uUysL.jpg' },

                                ].map((item, index) => (
                                    <div class="card border p-1" key={index}>
                                        <img
                                            src={item.src}
                                            class="card-img-top"
                                            id="gs9"
                                            alt="..."
                                            onClick={() => handleImageClick(item.src)}

                                        />

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                        <div class="card" style={{ marginTop: "130px" }}>
                            <div class="d-flex flex-row align-items-center">
                                <div class="p-ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div> <span class="ml-1">5.0</span>
                            </div>
                            <div class="about"> <span class="font-weight-bold">IKEA x HAY Ypperlig Collection </span>
                                <h4 class="font-weight-bold">$3,444</h4>
                            </div>
                            <div class="buttons">
                                <a href='/Cart' style={{ textDecoration: "none" }}>
                                    <button class="btn btn-outline-warning btn-long cart">Add to Cart</button></a>
                                <a href='/Address' style={{ textDecoration: "none" }}> <button class="btn btn-warning btn-long buy">Buy it Now</button></a>&nbsp;
                                <button class="btn btn-light wishlist" id="gs8">
                                    <i class="fa fa-heart"></i> </button> </div>
                            <hr />
                            <div class="product-description">

                                <div class="d-flex flex-row align-items-left"> <i class="fa fa-calendar-check-o"></i> <span class="ml-1">Delivery, 15-45 days</span> </div>
                                <div class="mt-2"> <span class="font-weight-bold">Description</span>
                                    <p>The minimalist collaboration features chairs, lightening, Shelves, Sofas, Desks and various home accessories, all offering form and function at the same point.We use high-strength clamps and joinery techniques specially designed for engineered wood beds. Ergo, no irksome creaks - and you can sleep like a baby, well into adulthood!</p>
                                    <div class="bullets" >
                                        <div class="d-flex align-items-center" id='dflex1'> <span class="dot"></span> <span class="bullet-text">Best in Quality</span> </div>
                                        <div class="d-flex align-items-center" id='dflex1'> <span class="dot"></span> <span class="bullet-text">Anti-creak joinery</span> </div>
                                        <div class="d-flex align-items-center" id='dflex1'> <span class="dot"></span> <span class="bullet-text">Sturdy laminate surfaces</span> </div>
                                        <div class="d-flex align-items-center" id='dflex1'> <span class="dot"></span> <span class="bullet-text">Relocation friendly design</span> </div>
                                        <div class="d-flex align-items-center" id='dflex1'> <span class="dot"></span> <span class="bullet-text">High gloss, high style</span> </div>
                                        <div class="d-flex align-items-center" id='dflex1'> <span class="dot"></span> <span class="bullet-text">Easy-access hydraulic storage</span> </div>
                                    </div>
                                </div>

                            </div>
                            <div class="product-description">

                                <div class="d-flex flex-row align-items-left"> </div>
                                <div class="mt-2"> <span class="font-weight-bold">Color &nbsp;&nbsp;&nbsp;<button class="button button2">Red</button>
                                    <button class="button button2">Green</button>
                                    <button class="button button2">Blue</button>
                                </span>


                                </div>

                            </div>

                            <div class="product-description">

                                <div class="d-flex flex-row align-items-left"> </div>
                                <div class="mt-2"> <span class="font-weight-bold">Size &nbsp;&nbsp; &nbsp;&nbsp;<button class="button button2">M</button>
                                    <button class="button button2">XXl</button>
                                    <button class="button button2">Large</button> </span>


                                </div>

                            </div>
                            <div class="product-description">

                                <div class="d-flex flex-row align-items-left"> </div>
                                <div class="mt-2"> 
                                <span class="font-weight-bold">Quality  <button onClick={decreaseCount} class="button button2">-</button>
                                    <button class="button button2">{count}</button>
                                    <button onClick={increaseCount} class="button button2">+</button> </span>


                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <br /><br />
            <div class="card mt-2" id='similarhide'> <span>Similar items:</span>
                <div class="similar-products mt-2 d-flex flex-row" id='sg88' >
                    <div class="card  p-1" >
                        <img src="https://i.imgur.com/KZpuufK.jpg" class="card-img-top" id="gs99" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">$1,999</h6>
                        </div>
                    </div>&nbsp;&nbsp;
                    <div class="card  p-1" >
                        <img src="https://i.imgur.com/GwiUmQA.jpg" class="card-img-top" id="gs99" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">$1,699</h6>
                        </div>
                    </div>&nbsp;&nbsp;
                    <div class="card  p-1" > <img src="https://i.imgur.com/c9uUysL.jpg" class="card-img-top" id="gs99" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">$2,999</h6>
                        </div>
                    </div>&nbsp;&nbsp;
                    <div class="card  p-1" > <img src="https://i.imgur.com/kYWqL7k.jpg" class="card-img-top" id="gs99" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">$3,999</h6>
                        </div>
                    </div>&nbsp;&nbsp;
                    <div class="card  p-1"> <img src="https://i.imgur.com/DhKkTrG.jpg" class="card-img-top" id="gs99" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">$999</h6>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductDetails
