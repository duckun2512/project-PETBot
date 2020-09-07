<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Products</title>

    <link rel="stylesheet" href="css/1.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <a class="navbar-brand" href="#"><img src="im/logo%20demo1.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Products</a>
            <a class="nav-item nav-link" href="#">LookBook</a>
            <a class="nav-item nav-link" href="#">Contact</a>
            <a class="nav-item nav-link" href="#">About</a>
        </div>
    </div>
</nav>

<div class="container single-product">
    <div class="row">
        <div class="col-6">
            <img src="img/pexels-burst-373882.jpg" width="100%%">

            <div class="small-img-row">
                <div class="small-img-col-2">
                    <img src="img/pexels-burst-373882.jpg" width="80%">
                </div>
                <div class="small-img-col-2">
                    <img src="img/pexels-burst-373882.jpg" width="80%">
                </div>
                <div class="small-img-col-2">
                    <img src="img/pexels-burst-373882.jpg" width="80%">
                </div>
                <div class="small-img-col-2">
                    <img src="img/pexels-burst-373882.jpg" width="80%">
                </div>



            </div>
        </div>
        <div class="col-6">
            <p>Home/Product</p>
            <h1>P.E.T Bottle</h1>
            <h4>Material: P.E.T</h4>
            <h4>Objective: </h4>
            <h4 id="item-price">$50.00</h4>
            <select class="form-control calculate" id="size" name="size">
                <option>Select Size</option>
                <option data-price="5.00" value="Small">M</option>
                <option data-price="10.00" value="Medium">L</option>
                <option data-price="15.00" value="Large">XL</option>
            </select> <br>
            <a href=""class="btn btn-danger">Buy Now &#8594</a>
            <p class="infor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
        </div>
    </div>
</div>

<div class="small-container">
    <h2 class="title">Featured Products</h2>
    <div class="row">
        <div class="col-3">
            <img src="img/pexels-burst-373882.jpg">
            <h4>P.E.T Bottle</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>

        <div class="col-3">
            <img src="img/pexels-burst-373882.jpg">
            <h4>P.E.T Bottle</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>$50.00</p>
        </div>

        <div class="col-3">
            <img src="img/pexels-burst-373882.jpg">
            <h4>P.E.T Bottle</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>

        <div class="col-3">
            <img src="img/pexels-burst-373882.jpg">
            <h4>P.E.T Bottle</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>
    </div>
</div>

<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <h3>ABOUT</h3>
                <p>PET is used as a raw material for making packaging materials such as bottles and containers for packaging a wide range of food products and other consumer goods</p>
            </div>

            <div class="col-3">
                <h3>INFOR</h3>
                <ul>
                    <li>Shipping & Return</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>Another</li>
                </ul>
            </div>

            <div class="col-3">
                <h3>CONTACT</h3>
                <ul>
                    <li>Telephone</li>
                    <li>Gmail</li>
                </ul>
            </div>

            <div class="col-3">
                <h3>ADDRESS</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.095182298646!2d105.77955771533217!3d21.02887719314929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b3260b1a8b%3A0x862052392e3f478e!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIFThu6sgTGnDqm0sIEjDoCBO4buZaSAxMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1599163507958!5m2!1svi!2s" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </div>
</div>











<script src="js/1.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

</body>
</html>
