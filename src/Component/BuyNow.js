import React from 'react'

const BuyNow = () => {
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
                            <form action="/action_page.php">

                                <div class="row">
                                    <div class="col-50">
                                        <h3>Billing Address</h3>
                                        <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                        <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                        <input type="text" id="email" name="email" placeholder="john@example.com" />
                                        <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                        <label for="city"><i class="fa fa-institution"></i> City</label>
                                        <input type="text" id="city" name="city" placeholder="New York" />

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
                                    </div>

                                    <div class="col-50">
                                        <h3>Payment</h3>
                                        <label for="fname">Accepted Cards</label>
                                        <div class="icon-container">
                                            <i class="fa fa-cc-visa" style={{ color: "navy" }}></i>
                                            <i class="fa fa-cc-amex" style={{ color: "blue" }}></i>
                                            <i class="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                                            <i class="fa fa-cc-discover" style={{ color: "orange" }}></i>
                                        </div>
                                        <label for="cname">Name on Card</label>
                                        <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                        <label for="ccnum">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                        <label for="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                                        <div class="row">
                                            <div class="col-50">
                                                <label for="expyear">Exp Year</label>
                                                <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                            </div>
                                            <div class="col-50">
                                                <label for="cvv">CVV</label>
                                                <input type="text" id="cvv" name="cvv" placeholder="352" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <label>
                                    <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                                </label>
                                <input type="submit" value="Continue to checkout" class="btn btn-primary" />
                            </form>
                        </div>
                    </div>
                    {/* <div class="col-25">
                        <div class="container">
                            <h4>Cart <span class="price" style={{ color: "black" }}><i class="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                            <p><a href="#">Product 1</a> <span class="price">$15</span></p>
                            <p><a href="#">Product 2</a> <span class="price">$5</span></p>
                            <p><a href="#">Product 3</a> <span class="price">$8</span></p>
                            <p><a href="#">Product 4</a> <span class="price">$2</span></p>
                            <hr />
                            <p>Total <span class="price" style={{ color: "black" }}><b>$30</b></span></p>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default BuyNow
