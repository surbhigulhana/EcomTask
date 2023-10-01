import React, { useState } from 'react';


const Address = () => {
    const [show, setShow] = useState(false)

    const [show1, setShow1] = useState(true)
    function sg() {
        setShow(true);
        setShow1(false);
    }


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
            <div class="container" id='gs1'>
                <div class="row">
                    <div class="col-75">
                    
                        <div class="container">
                         <div class="row">
                                <div class="col-lg-9 mx-auto">

                                    <div id="accordionExample" class="accordion shadow">


                                        <div class="card">
                                            <div id="headingOne" class="card-header bg-white shadow-sm border-0">
                                                <h2 class="mb-0">
                                                    <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne"
                                                        class="btn btn-link text-dark font-weight-bold text-uppercase collapsible-link">Billing Address</button>
                                                </h2>
                                            </div>
                                            <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" class="collapse show">
                                                <div class="card-body p-5">
                                                    <p class="font-weight-light m-0">
                                                        <label for="fname"><i class="fa fa-location"></i> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</label>
                                                        {show1 &&
                                                            <input value="Add New Address" class="btn btn-primary" onClick={sg} readOnly />}
                                                        {show && <div class="row">
                                                            <div class="col-50">
                                                                <h6> Address</h6>
                                                                <label for="fname"> <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                                                </label>
                                                                <h6> Landmark</h6>
                                                                <label for="fname"> <input type="text" id="fname" name="firstname" placeholder="Landmark" />
                                                                </label>
                                                                <div class="row">
                                                                    <div class="col-50">
                                                                        <label for="state">State</label>
                                                                        <input type="text" id="state" name="state" placeholder="NY" />
                                                                    </div>
                                                                    <div class="col-50">
                                                                        <label for="zip">Zip</label>
                                                                        <input type="text" id="zip" name="zip" placeholder="10001" />
                                                                    </div>
                                                                </div>
                                                                <button class="btn btn-primary" >Save & Deliver Here</button>



                                                            </div>


                                                        </div>}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div id="headingTwo" class="card-header bg-white shadow-sm border-0">
                                                <h2 class="mb-0">
                                                    <button type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                                        aria-controls="collapseTwo"
                                                        class="btn btn-link collapsed text-dark font-weight-bold text-uppercase collapsible-link">Payment Mode</button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" class="collapse">
                                                <div class="card-body p-5">
                                                    <p class="font-weight-light m-0">

                                                        <input type='checkbox' name='a' ></input>&nbsp;&nbsp; BHIM /UPI <i class="fa fa-shopping-cart" aria-hidden="true"></i><br/>
                                                        <input type='checkbox' name='a' ></input>&nbsp;&nbsp; Debit /Credit <i class="fa fa-credit-card" aria-hidden="true"></i><br/>
                                                        <input type='checkbox' name='a'></input>&nbsp;&nbsp; Cash On Delivery <i class="fa fa-money" aria-hidden="true"></i><br/>


                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div id="headingThreee" class="card-header bg-white shadow-sm border-0">
                                                <h2 class="mb-0">
                                                    <button type="button" data-toggle="collapse" data-target="#collapseThreee" aria-expanded="false"
                                                        aria-controls="collapseThreee"
                                                        class="btn btn-link collapsed text-dark font-weight-bold text-uppercase collapsible-link">Order Summary</button>
                                                </h2>
                                            </div>
                                            <div id="collapseThreee" aria-labelledby="headingThree" data-parent="#accordionExample" class="collapse">
                                                <div class="card-body p-5">
                                                    <p class="font-weight-light m-0">

                                                        <div class="row no-gutters mt-3">
                                                          
                                                            <div class="col-9 col-md-8 pr-0 pr-md-3">
                                                                <h6 class="text-charcoal mb-2 mb-md-1">
                                                                    
                                                                </h6>
                                                                <ul class="list-unstyled text-pebble mb-2 small">
                                                                    <img src='./image/p2.png' style={{ height: "40px", width: "40px" }}></img>
                                                                    <a href="/TrackOrder" class="text-charcoal">1 x URGE Basics iPhone 6/</a>
                                                                    <li class="">
                                                                        <b>Color:</b> Red &nbsp;   <b>Size:</b> L
                                                                    </li>
                                                                   
                                                                </ul>
                                                                <h6 class="text-charcoal text-left mb-0 mb-md-2"><b>$19.54</b></h6>
                                                            </div>

                                                        </div>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div id="headingThree" class="card-header bg-white shadow-sm border-0">
                                                <h2 class="mb-0">
                                                    <button type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                                        aria-controls="collapseThree"
                                                        class="btn btn-link collapsed text-dark font-weight-bold text-uppercase collapsible-link">Coupen Code</button>
                                                </h2>
                                            </div>
                                            <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" class="collapse">
                                                <div class="card-body p-5">
                                                    <p class="font-weight-light m-0">  <label for="fname"> <input className='form-controle' type="text" id="fname" name="firstname" placeholder="Code" />
                                                    </label></p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-25">
                        <div class="container">
                            <h4>Cart <span class="price" style={{ color: "black" }}><i class="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                            <p><a href="#">Product 1</a> <span class="price">$15</span></p>
                            <p><a href="#">Product 2</a> <span class="price">$5</span></p>
                            <p><a href="#">Product 3</a> <span class="price">$8</span></p>
                            <p><a href="#">Product 4</a> <span class="price">$2</span></p>
                            <hr />
                            <p>Total <span class="price" style={{ color: "black" }}><b>$30</b></span></p>
                            <button className='btn btn-danger'> Continue</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Address
