import React from 'react'
import '../css/style.scss'
const Trackorder = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg fixed-top" id="navbar1">
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

      <div class="container mt-3 mt-md-5">
        <br /><br />
        <h2 class="text-charcoal hidden-sm-down">Your Orders</h2>
        {/* <h5 class="text-charcoal hidden-md-up">Your Orders</h5>s */}
        <div class="row">
          <div class="col-12">
            <div class="list-group mb-5">
              <div class="list-group-item p-3 bg-snow" style={{ position: "relative;" }}>
                <div class="row w-100 no-gutters">
                  <div class="col-6 col-md">
                    <h6 class="text-charcoal mb-0 w-100">Order Number</h6>
                    <a href="" class="text-pebble mb-0 w-100 mb-2 mb-md-0">#A915AFLE4FO</a>
                  </div>
                  <div class="col-6 col-md">
                    <h6 class="text-charcoal mb-0 w-100">Date</h6>
                    <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">Aug 5th, 2017</p>
                  </div>
                  <div class="col-6 col-md">
                    <h6 class="text-charcoal mb-0 w-100">Total</h6>
                    <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">$19.54</p>
                  </div>
                  <div class="col-6 col-md">
                    <h6 class="text-charcoal mb-0 w-100">Shipped To</h6>
                    <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">Late M. Night</p>
                  </div>
                  <div class="col-12 col-md-3">
                    <a href="" class="btn btn-primary w-100">View Order</a>
                  </div>
                </div>

              </div>
              <div class="list-group-item p-3 bg-white">
                <div class="row no-gutters">
                  <div class="col-12 col-md-9 pr-0 pr-md-3">
                    <div class="alert p-2 alert-success w-100 mb-0">
                      <h6 class="text-green mb-0"><b>Shipped</b></h6>
                      <p class="text-green hidden-sm-down mb-0">Est. delivery between Aug 5 – Aug 9th, 2017</p>
                    </div>
                    <div class="col-3 col-md-1">
                      <img class="img-fluid pr-3" src="https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2Ffc79d08c12dc.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=c9a50d474788f2658d13b21aa62edd6c" alt="" />
                    </div>
                    <div class="col-9 col-md-8 pr-0 pr-md-3">
                      <h6 class="text-charcoal mb-2 mb-md-1">
                        <img src='./image/p2.png' style={{ height: "40px", width: "40px" }}></img>
                        <a href="" class="text-charcoal">1 x URGE Basics iPhone 6/iPhone 6 Plus Magnetic Wallet Case</a>
                      </h6>
                      <ul class="list-unstyled text-pebble mb-2 small">
                        <li class="">
                          <b>Color:</b> Red
                        </li>
                        <li class="">
                          <b>Size:</b> L
                        </li>
                      </ul>
                      <h6 class="text-charcoal text-left mb-0 mb-md-2"><b>$19.54</b></h6>
                    </div>
                    <div class="col-12 col-md-3 hidden-sm-down">
                      <a href="" class="btn btn-secondary w-100 mb-2">Buy It Again</a>
                      <a href="" class="btn btn-secondary w-100">Request a Return</a>
                    </div>
                    <br/>
                    <div class="col-3 col-md-1">
                      <img class="img-fluid pr-3" src="https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2Ffc79d08c12dc.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=c9a50d474788f2658d13b21aa62edd6c" alt="" />
                    </div>
                    <div class="col-9 col-md-8 pr-0 pr-md-3">
                      <h6 class="text-charcoal mb-2 mb-md-1">
                        <img src='./image/p1.png' style={{ height: "40px", width: "40px" }}></img>
                        <a href="" class="text-charcoal">1 x URGE Basics iPhone 6/iPhone 6 Plus Magnetic Wallet Case</a>
                      </h6>
                      <ul class="list-unstyled text-pebble mb-2 small">
                        <li class="">
                          <b>Color:</b> Red
                        </li>
                        <li class="">
                          <b>Size:</b> L
                        </li>
                      </ul>
                      <h6 class="text-charcoal text-left mb-0 mb-md-2"><b>$19.54</b></h6>
                    </div>
                    <div class="col-12 col-md-3 hidden-sm-down">
                      <a href="" class="btn btn-secondary w-100 mb-2">Buy It Again</a>
                      <a href="" class="btn btn-secondary w-100">Request a Return</a>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <a href="" class="btn btn-secondary w-100 mb-2">Track Shipment</a>
                    <div class="list-group mb-3">
                      <div class="list-group-item p-3 bg-snow">
                        <h6 class="mb-0">Order Summary</h6>
                      </div>
                      <div class="list-group-item py-2 px-3 bg-white">
                        <div class="row w-100 no-gutters">
                          <div class="col-6 text-pebble">
                            Subtotal
                          </div>
                          <div class="col-6 text-right text-charcoal">
                            $54.97
                          </div>
                        </div>
                      </div>
                      <div class="list-group-item py-2 px-3 bg-white">
                        <div class="row w-100 no-gutters">
                          <div class="col-6 text-pebble">
                            Sales Tax
                          </div>
                          <div class="col-6 text-right text-charcoal">
                            $4.30
                          </div>
                        </div>
                      </div>
                      <div class="list-group-item py-2 px-3 bg-white">
                        <div class="row w-100 no-gutters">
                          <div class="col-6 text-pebble">
                            Shipping
                          </div>
                          <div class="col-6 text-right text-charcoal">
                            FREE
                          </div>
                        </div>
                      </div>
                      <div class="list-group-item py-2 px-3 bg-white">
                        <div class="row w-100 no-gutters">
                          <div class="col-8 text-pebble">
                            Gift certificate
                          </div>
                          <div class="col-4 text-right text-red text-charcoal">
                            -$5.55
                          </div>
                        </div>
                      </div>
                      <div class="list-group-item py-2 px-3 bg-snow">
                        <div class="row w-100 no-gutters">
                          <div class="col-8 text-charcoal">
                            <b>Total</b>
                          </div>
                          <div class="col-4 text-right text-green">
                            <b>$53.65</b>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
              
               

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Trackorder
