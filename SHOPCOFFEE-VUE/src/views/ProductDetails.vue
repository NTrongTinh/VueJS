<template>

<div class="container">
    <div class="row text-center">
        <div class="col-12">
            <h4 class="font-weight-bold text-center" style="color: red;">CHI TIẾT SẢN PHẨM</h4>
        </div>
    </div>
</div>
<article class="col-12">
<!-- <div class="card"> -->
<div class="container-fliud">
    <div class="wrapper row">
        
        <form action="" method="post">
            <!-- <input type="hidden" name="action" value="giohang&add_cart"/> -->
            <div class="row">
                <div class="tab-content col-lg-6">
                    <!-- <div class="tab-pane active" id=""> -->
                        <img src="Content\imgCOFFEE\" class="img-fluid" alt="">
                    <!-- </div> -->
                    <div class="container">
                        <div class="container">
                            <div class="container">
                                <div class="container">
                                    <ul class="preview-thumbnail nav nav-tabs"><h4><b>Mô tả</b></h4></ul>
                                        <span style="font-size:16px;"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="details col-lg-6 ">
                        <h3 class="font-weight-bold mt-5 mb-3"></h3>
                    <!-- <h3 class="product-title"> </h3> -->
                    <!-- <div class="rating"> -->
                        <div class="stars mb-2"> 
                            <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span>
                        </div>
                    <!-- </div> -->
                    <span class="font-weight-bold">
                        <span class="price" style="font-size:18px;">Giá bán:</span>
                        <!-- truyền giá vào script -->
                        <input type="text" id='giagoc' value='' hidden>
                        <input type="text" id='gia' value='' hidden>
                        <!-- truyền giá từ script vào php (sau submit) -->
                        <input type="text" name="thanhtien" id="htgiaT" hidden>
                        <input type="text" name="thanhtiengoc" id="htgiagocT" hidden>
                        <!-- hiển thị giá -->
                        <font id="htgia" style="font-size:20px;" class='ml-1 mt-5 ' color="red"></font>
                        
                            <strike id='htgiagoc' style="font-size:20px;"></strike>
                        
                            <strike id='htgiagoc' style="font-size:20px;" hidden></strike >
                        
                    </span>
                    <h5 class="colors font-weight-bold"></h5>
                    <div style="padding-bottom: 10px;padding-top: 15px;font-size:15px;">Size:</div>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                           
                            <span class="btn-group-toggle" >
                                <label
                                    
                                    class="btn btn-info mr-2 mb-4 "
                                    style="width:140px;height:44px;"
                                >
                                    <input 
                                        type="radio"
                                        name="size" 
                                        autocomplete="off"
                                        
                                        value="">
                                    <div style="font-size:15px;padding-top: 4px;">
                                        
                                    </div>
                                </label>
                            </span>
                        </div>
                            
                        <div style="padding-bottom: 10px;font-size:15px;">Topping:</div>
                        
                      
                        <span class="btn-group-toggle " data-toggle="buttons" >
                            <label  class="mb-2 btn btn-info" style="height:44px;">
                                <input type="checkbox" id="" 
                                autocomplete="off" name="">
                                <div style="font-size:15px;padding-top: 4px;padding-right: 4px;padding-left: 4px;"></div>
                            </label>
                        </span>
                    
                        <div style="padding-bottom: 10px;padding-top: 15px;font-size:15px;">Số Lượng:</div>
                        <input class="form-control font-weight-bold" style="width:90px;height:30px; font-size:13px;" type="number" id="soluong" name="soluong" 
                        min="1" max="100" value="" size="10" />
                    <div class="action">
                        <button class="add-to-cart btn btn-info mt-3" style="height:50px;" type="submit" data-toggle="modal" data-target="#myModal">
                            <div style="font-size:15px;padding-right: 4px;padding-left: 4px;">
                                <b>Thêm vào giỏ hàng</b>
                            </div>
                        </button>
                        <a href="#" target="_blank"> <button class="like btn btn-info mt-3" style="height:50px;" type="button"><span class="fa fa-heart ml-1 mr-1"></span></button></a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<!-- </div> -->
</article>
<div class="container">
    <div class="container">
        <div class="container">
            <div class="container">
                <div class="container">
                    <br>
                    <ul class="preview-thumbnail nav nav-tabs mb-3"><h4><b>Bình luận</b></h4></ul>
                    <p class="float-left"><b> </b></p>
                        <form action="" method="post">
                            <div class="row">
                                <input type="hidden" name="txtmasp" value=""/>
                                <img src="Content/imgCOFFEE/people.png" width="40px" height="40px" class="mr-3 ml-5 mt-2 mb-1"/>
                                <textarea class="form-control font-weight-bold input-field mt-2 mb-2" style="width:500px;height:50px; font-size:13px;" type="text" name="comment" rows="2" cols="70" id="comment" placeholder="Thêm bình luận" maxlength="197"></textarea>
                                <input  type="submit" class="btn btn-primary ml-3" style="height: 50px;" id="submitButton" value="Bình Luận" />           
                            </div>
                        </form>
                    <br>
                    <ul class="preview-thumbnail nav nav-tabs"><h4><b>Các bình luận</b></h4></ul>
                    <p class="float-left"><b> </b></p>
                        
                        <div class="row ">
                            <div class="mt-3 mb-3 text-left col-lg-8 ">
                                <div class="row">
                                    <div class="col-lg-1 ml-3">
                                        <img src="Content/imgCOFFEE/people.png" width="40px" height="40px" class="mr-5 mt-2 mb-1"/>
                                    </div>
                                    <div class="col-lg-10 ml-1 form-control" style='padding-bottom:95px;'>
                                        <h5 class=""></h5>
                                        <div class="stars mb-2">
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                        <!-- <?php echo $set['luotthich'] ?> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>