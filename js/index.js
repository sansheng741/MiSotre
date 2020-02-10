$(".shopping_cart").hover(
	function() {
		$(".shopping_cart").css({
			"background-color": "#fff"
		});
		$(".shopping_cart em,.shopping_cart span").css({
			"color": "red"
		});
		$(".iconfont-cart img").attr({
			"src": "./img/692a6c3b0a93a24f74a29c0f9d68ec71.png"
		});
	},
	function() {
		$(".shopping_cart").css({
			"background-color": "rgb(66,66,66)"
		});
		$(".shopping_cart em,.shopping_cart span").css({
			"color": "#b0b0b0"
		});
		$(".iconfont-cart img").attr({
			"src": "./img/d7db56d1d850113f016c95e289e36efa.png"
		});
	}
);

$(".search_sub").hover(
	function() {
		$(".search-icon").attr({
			"src": "./img/search1.png"
		});
	},
	function() {
		$(".search-icon").attr({
			"src": "./img/search2.png"
		});
	}

);
var index = 0;
$(".lt-btn").on("click", function(e) {
	$(".lb-point ol li").eq(index).removeClass("hoverPoint");
	$(".lb-right ul li").eq(index--).removeClass("lb-display");
	if (index < 0) {
		index = 4;
	}
	$(".lb-right ul li").eq(index).addClass("lb-display");
	$(".lb-point ol li").eq(index).addClass("hoverPoint");
});

$(".gt-btn").on("click", function(e) {
	$(".lb-point ol li").eq(index).removeClass("hoverPoint");
	$(".lb-right ul li").eq(index++).removeClass("lb-display");
	if (index > 4) {
		index = 0;
	}
	$(".lb-right ul li").eq(index).addClass("lb-display");
	$(".lb-point ol li").eq(index).addClass("hoverPoint");
});

$(".lb-left ul li").hover(
	function() {
		$(".goods-list").css({
			"display": "block"
		});
	},
	function() {
		$(".goods-list").css({
			"display": "none"
		});
	}
);

$(".lb-point ol li").click(function(){
	//删除所有class
	$(".lb-point ol li").removeClass("hoverPoint");
	//被点击的标签赋予class
	$(this).addClass("hoverPoint");
	//将轮播图换为对应的图片,并改变index
	$(".lb-right ul li").eq(index).removeClass("lb-display");
	index = $(this).index();
	$(".lb-right ul li").eq(index).addClass("lb-display");
});