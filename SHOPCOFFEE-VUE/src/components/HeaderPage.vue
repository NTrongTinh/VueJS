<template>
    <header class="no-gutters">
        <section>
            <nav class="navbar navbar-expand-lg navbar-light text-white " style="background-color:#b1282f;">
                <ul class="navbar-nav">
                    <!-- Logo -->
                    <li>
                        <router-link to="/"><img height="75px" class='' src="../assets/imgCOFFEE/White_logo.png" alt=""></router-link>
                    </li>

                    <li class="nav-item mt-3">
                        <a href="" class="nav-link text-white" style="font-size:18px"><b></b></a>
                    </li>

                    <li class="nav-item mt-3">
                        <form class="form-inline my-2 my-lg-0" method="get">
                            <input class="form-control mb-3" name="action" type="text" value="sanpham" hidden>
                            <input class="form-control mb-3" name="act" type="text" value="timkiem" hidden>
                            <input class="form-control mb-3" name="search" type="text" placeholder="Tìm Kiếm">
                            <input class="btn btn-outline-info input-group-text mb-3" type="submit" id="btsearch" value="Tìm Kiếm"/>
                        </form>
                    </li>
                    <li class="nav-item mt-3">
                        <router-link to="/cart"><img src="../assets/imgCOFFEE/cartx2.png" width="30px" height="30px" alt=""></router-link>
                    </li>
                    <li class="nav-item header_action_on mt-3">

                    <div class="header_action_on">
                        <button type="button" class="btn text-white"><b>Đăng Nhập</b></button>
                        <div class="dropdown-menu header_action" style="font-size:18px;width:238px;height:95px;margin-right:100px">
                            <div class='ml-3 mb-1 header_action' style="font-size:15px">Vui lòng đăng nhập<br>
                                <button type="button" class="btn btn-info text-white mt-3 "><a href="" class='text-white'><b>Đăng nhập</b></a></button>
                                <button type="button" class="btn btn-info text-white ml-1 mt-3 "><a href="" class='text-white'><b>Đăng ký</b></a></button>
                            </div>
                        </div>
                    </div>

                    <div class="header_action_on" >
                        <button type="button" class="btn text-white"><b>Xin chào, </b></button>
                        <div class="dropdown-menu header_action" style="font-size:18px;width:277px;height:95px">
                            <div class='ml-3 mb-1' style="font-size:15px">Xin chào, </div>
                            <button type="button" class="btn btn-info text-white ml-3 mt-2"><a href="" class='text-white ml-2 mr-2'><b>Đăng xuất</b></a></button>
                            <button type="button" class="btn btn-info text-white ml-1 mt-2"><a href="" class='text-white ml-2 mr-2'><b>Đơn hàng</b></a></button>
                        </div>
                    </div>

                    </li>
                </ul>
            </nav>   
        </section>
    </header>
    <!-- hinh dộng -->
    <div id="carouselExampleIndicators" class="carousel slide mb-5" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/imgCOFFEE/a.jpg" style="height: 400px;" alt=" First slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="../assets/imgCOFFEE/c.jpg" style="height: 400px;" alt="Second slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="../assets/imgCOFFEE/b.png" alt="Third slide" style="height: 400px;">
        </div>
    </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: {
    
  }
}
</script>
<style type="text/css">
    .header_action_on
    {
        position: relative;
        display: inline-block;
    }
    .header_action
    {
        display:none;
    }
    .header_action_on:hover .header_action
    {
        display: block;
    }
    
</style>