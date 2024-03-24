<template>
    
    <div class="table-responsive">
 
 <form action="" method="post">
   <table class="table table-bordered" border="0">
  
                     
    <tr>
       <td colspan="4">
         <h2 style="color: red;"><b>HÓA ĐƠN</b></h2>
       </td>
     </tr>
   <tr>
       <td colspan="2"><b>Số Hóa đơn: </b>
       
       </td>
       <td colspan="2"> <b>Ngày lập: </b> </td>
     </tr>
    <tr>
       <td colspan="2"><b>Họ và tên: </b></td>
       <td colspan="2"></td>
     </tr>
    <tr>
       <td colspan="2"><b>Địa chỉ: </b></td>
       <td colspan="2"></td>
     </tr>
     <tr>
       <td colspan="2"><b>Số điện thoại: </b></td>
       <td colspan="2"></td>
     </tr>
   </table>
 </form>
</div>
<div class="table-responsive">
    <!-- <a value="index.php?action=cart_detele" action="index.php?action=cart_detele"> -->
    <form action="" method="post">
      <table class="table table-bordered">
        <thead>
          <tr>
            <td colspan="5">
                <h1 style="color: red;" class="text-center mt-3 mb-3"></h1>
            </td>
          </tr>
          <tr class="table-success">
            <th><div class="form-check mb-2">
              STT
            </div>
          </th>
            <th><h5><b>Thông Tin Sản Phẩm</b></h5></th>
            <th><h5><b>Tùy Chọn Của Bạn</b></h5></th>
            <th colspan="2"><h5><b>Giá</b></h5></th>
          </tr>
        </thead>
        <tbody>
            <tr> <td>
                <div class="form-check mb-auto">
                  <label class="form-check-label ml-2 mt-5">
                    
                  </label>
                </div>
              </td>
              <td>
                <img width="140px" height="140px" src="Content/imgCOFFEE/">
                <font color="red" style="font-size: 13px;"><b></b></font>
              </td>
              <td>
                <b><span style="font-size: 14px;">Size:</span></b>
                <span>
                
                </span>
                <br>
                <b><span style="font-size: 14px;">Topping:</span></b>
               
              </td>
              <td>
                <b><span style="font-size: 14px;">Đơn Giá:</span></b>
                <br>
                <font color="red" style="font-size: 13px;" class="ml-2">
                  <b><i></i></b>
                </font>
                
                  <strike style="font-size: 13px;" ></strike>

                <br>
                <span style="font-size: 14px;"><b>Số Lượng:</b></span>
                <div class="form-group">
                  <input type="number" style="width:125px;height:30px;font-size:13px;"
                  class="form-control mt-1 ml-2" name="newqty[]" id="" aria-describedby="helpId"
                  value='' disabled>
                  <p style="float: right;" class='mb-5'> Thành Tiền: 

                  </p>
                  </div>
              </td>

            </tr>
          </div>

            <tr>
            <td colspan="3">
              <b>Tổng Tiền</b>
            </td>
            <td style="float: right;">
             
            </td>
          </tr>

      </table>
    </form>
  </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderPage',
  props: {
    
  }
}
</script>