<template>
    <div class="row">
        <div class="col-md-6">
            <button class="btn btn-primary">Thêm</button>&emsp;
            <a href="/">Home</a>
        </div>
        <div class="col-md-6 text-right">
            <input type="text" name="" id="" placeholder="Tìm kiếm sản phẩm">&ensp;
            <button class="btn btn-primary">Tìm</button>
        </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th>STT</th>
                <th>Hình</th>
                <th>Tên</th>
                <th>Loại</th>
                <th>Topping</th>
                <th>Giá</th>
                <th colspan="2">Thao tác</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="a">1</td>
                <td><img :src="hinh" alt="" width="50px" height="50px"></td>
                <td class="a">Tên</td>
                <td class="a">Loại</td>
                <td class="a">Topping</td>
                <td class="a">Giá</td>
                <td class="button"><button class="btn btn-primary">Sửa</button></td>
                <td class="button"><button class="btn btn-danger">Xóa</button></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    export default{
        data(){
            return{
                hinh: require("@/assets/imgCOFFEE/2.jpg"),
            }
        }
    }
</script>
<style>
    tbody tr td.a{
        padding-top: 25px;
    }
    tbody tr td.button{
        padding-top: 20px;
    }
</style>