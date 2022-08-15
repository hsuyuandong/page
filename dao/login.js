//alert("歡迎來到coding kingdom");alert("快看看有沒有作業要上傳");
$('#showProdPage').click(showProdPage);
$('#showCartPage').click(showCartPage);
$('#showInfoPage').click(showInfoPage);
$('#showAdminPage').click(showAdminPage);
$('#showMessagePage').click(showMessagePage);

// 顯示課程列表頁面
function showProdPage () {
    $(".page").hide();
    $("#prodPage").show();
	$('.tab').removeClass('active');
    $('#showProdPage').addClass('active');
}

// 顯示課程影音頁面
function showCartPage () {
    $(".page").hide();
    $("#cartPage").show();
	$('.tab').removeClass('active');
    $('#showCartPage').addClass('active');
}

// 顯示訂單資訊頁面
function showInfoPage () {
    $(".page").hide();
    $("#infoPage").show();
	$('.tab').removeClass('active');
    $('#showInfoPage').addClass('active');
}

// 顯示管理後台頁面
function showAdminPage () {
    $(".page").hide();
    $("#adminPage").show();
	$('.tab').removeClass('active');
    $('#showAdminPage').addClass('active');
}

// 顯示留言板頁面
function showMessagePage () {
    $(".page").hide();
    $("#messagePage").show();
	$('.tab').removeClass('active');
    $('#showMessagePage').addClass('active');
}

var order = DB.table('order'); // 訂單的資料表
$('.buy').click(buy);
$('#submit').click(submit);
$('#search').click(search);
$('#cancel').click(cancel);
$('#updateAdminPage').click(updateAdminPage);
$('#updateOrderStatus').click(updateOrderStatus);


// 點擊「購買」按鈕
function buy () {

}

// 送出訂單
function submit () {

}

// 顯示訂單查詢資訊
function updateInfoPage (data) {

}

// 訂單查詢
function search () {

}

// 後台查詢所以訂單資訊
function updateAdminPage () {

}

// 管理後台將訂單資訊顯示在表格上
function updateTable (data) {

}

// 更新指定的訂單狀態
function updateOrderStatus () {

}

// 取消訂單
function cancel () {
}