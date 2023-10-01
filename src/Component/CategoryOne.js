
import React, { useState } from 'react'

const CategoryOne = () => {

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
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 col-md-2 sidebar">
                        <ul class="nav nav-sidebar">
                            <ol class="c">
                                <li id='gss'>Product one</li>
                                <li id='gss'>Product two</li>
                                <li id='gss'>Product three</li>
                                <li id='gss'>Product four</li>

                            </ol>
                        </ul>
                    </div>
                    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

                        <div class="container gs" id="product-cards">
                            <br />
                            <h1 class="text-center" id='gs7'>PRODUCT</h1>
                            <div class="row" style=
                                {{ marginTop: "30px;" }}>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">

                                            <img src="./image/p13.png" alt="" />
                                            <div class="card-body" >
                                                <h3>Men T-Shirt</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$32.60  <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p14.png" alt="" />
                                            <div class="card-body">
                                                <h3>Purple Heel</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$56.50  <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p15.png" alt="" />
                                            <div class="card-body">
                                                <h3>Men Shoes</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$150.5  <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p16.png" alt="" />
                                            <div class="card-body">
                                                <h3>Men Jacket</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$50.60  <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                            </div>
                            <br />
                            <div class="row" style={{ marginTop: "30px;" }}>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p17.png" alt="" />
                                            <div class="card-body">
                                                <h3>Blue T-Shirt</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$5.60 <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p18.png" alt="" />
                                            <div class="card-body">
                                                <h3>Girls Sandal</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$2.30 <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p19.png" alt="" />
                                            <div class="card-body">
                                                <h3>Men Jacket</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$3.2 <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p20.png" alt="" />
                                            <div class="card-body">
                                                <h3>Men T-SHirt</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$10.50  <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                            </div><br />
                            <div class="row" style=
                                {{ marginTop: "30px;" }}>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p13.png" alt="" />
                                            <div class="card-body">
                                                <h3>Men T-Shirt</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$32.60 <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p14.png" alt="" />
                                            <div class="card-body">
                                                <h3>Purple Heel</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$56.50<span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p15.png" alt="" />
                                            <div class="card-body">
                                                <h3>Men Shoes</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$150.5 <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                                <div class="col-md-3 py-3 py-md-0">
                                    <a href="/Details" style={{ textDecoration: "none" }}>
                                        <div class="card" id="gs6">
                                            <img src="./image/p16.png" alt="" />
                                            <div class="card-body">
                                                <h3>Men Jacket</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div class="star">
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                    <i class="fas fa-star checked"></i>
                                                </div>
                                                <h5>$50.60 <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                                            </div>
                                        </div></a>
                                </div>
                            </div>


                            <nav data-pagination id='page'>
                                <a href="#"><i class="fa fa-angle-double-left" style={{ fontSize: "20px" }}></i></a>
                                <ul>
                                    <li class="current"><a href="#1">1</a></li>
                                    <li ><a href="#1">1</a></li>
                                    <li><a href="#2">2</a></li>
                                    <li><a href="#3">3</a></li>
                                    <li><a href="#4">4</a></li>
                                    <li><a href="#5">5</a></li>
                                    <li><a href="#6">6</a></li>

                                    <li><a href="#10">…</a></li>
                                    <li><a href="#41">20</a></li>
                                </ul>
                                <a href="#2"><i class="fa fa-angle-double-right" style={{ fontSize: "20px" }}></i></a>
                            </nav>
                            <br /><br />
                        </div>


                    </div>
                </div>
            </div>


            <a href="#" class="arrow"><i><img src="./image/up-arrow.png" alt="" width="50px" /></i></a>

        </div>
    )
}

export default CategoryOne
