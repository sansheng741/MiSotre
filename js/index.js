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

// 轮播图图片下标
var index = 0;
$(".lt-btn").on("click", function(e) {
	$(".lb-point ol li").eq(index).removeClass("hoverPoint");
	$(".lb-right ul li").eq(index--).removeClass("lb-display");
	if (index < 0) {
		index = 4;
	}
	$(".lb-right ul li").eq(index).addClass("lb-display");
	$(".lb-point ol li").eq(index).addClass("hoverPoint");

	fun_fun_Interval();
});

$(".gt-btn").on("click", function(e) {
	$(".lb-point ol li").eq(index).removeClass("hoverPoint");
	$(".lb-right ul li").eq(index++).removeClass("lb-display");
	if (index > 4) {
		index = 0;
	}
	$(".lb-right ul li").eq(index).addClass("lb-display");
	$(".lb-point ol li").eq(index).addClass("hoverPoint");

	fun_fun_Interval();
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

$(".lb-point ol li").click(function() {
	//删除所有class
	$(".lb-point ol li").removeClass("hoverPoint");
	//被点击的标签赋予class
	$(this).addClass("hoverPoint");
	//将轮播图换为对应的图片,并改变index
	$(".lb-right ul li").eq(index).removeClass("lb-display");
	index = $(this).index();
	$(".lb-right ul li").eq(index).addClass("lb-display");

	fun_fun_Interval();
});

// 定时器 使轮播图自动滑动
fun_Interval(); //调用
var lb_Interval;

function fun_Interval() {
	lb_Interval = setInterval(function() {
		$(".lb-point ol li").eq(index).removeClass("hoverPoint");
		$(".lb-right ul li").eq(index++).removeClass("lb-display");
		if (index > 4) {
			index = 0;
		}
		$(".lb-right ul li").eq(index).addClass("lb-display");
		$(".lb-point ol li").eq(index).addClass("hoverPoint");
	}, 5000);
}

function fun_fun_Interval() {
	clearInterval(lb_Interval);
	fun_Interval();
}

// 闪购
$(".flash-btn span").eq(0).click(function() {
	$(".flashsale-demo ul").css({
		marginLeft: function(index, value) {
			var move = parseInt(value);
			if (key && move < 0) {
				key = false;
				$(".flashsale-demo ul").animate({
					marginLeft: "+=992" //移动图片,累加
				}, 500, function() {
					key = true;
				});
			}
		}
	});

});

var key = true;
$(".flash-btn span").eq(1).click(function() {
	$(".flashsale-demo ul").css({
		marginLeft: function(index, value) {
			var move = parseInt(value);
			if (move >= -992 * 4 && key) {
				key = false;
				$(".flashsale-demo ul").animate({
					marginLeft: "-=992" //移动图片,累加
				}, 500, function() {
					key = true;
				});
			}
		}
	});
	
});

// 家电
$(".jd-selected span").hover(function(){
	// 改变导航属性
	$(".jd-selected span").removeClass("tab-active");
	$(this).addClass("tab-active");
	
	//切换显示图片
	$(".jd-span2 ul").removeClass("jd-show");
	$(".jd-span2 ul").eq($(this).index()).addClass("jd-show");
});

// 智能
$(".intelligence-selected span").hover(function(){
	// 改变导航属性
	$(".intelligence-selected span").removeClass("tab-active");
	$(this).addClass("tab-active");
	
	//切换显示图片
	$(".intelligence-span2 ul").removeClass("intelligence-show");
	$(".intelligence-span2 ul").eq($(this).index()).addClass("intelligence-show");
});

// 搭配
$(".collocation-selected span").hover(function(){
	// 改变导航属性
	$(".collocation-selected span").removeClass("tab-active");
	$(this).addClass("tab-active");
	
	//切换显示图片
	$(".collocation-span2 ul").removeClass("collocation-show");
	$(".collocation-span2 ul").eq($(this).index()).addClass("collocation-show");
});

// 配件
$(".parts-selected span").hover(function(){
	// 改变导航属性
	$(".parts-selected span").removeClass("tab-active");
	$(this).addClass("tab-active");
	
	//切换显示图片
	$(".parts-span2 ul").removeClass("parts-show");
	$(".parts-span2 ul").eq($(this).index()).addClass("parts-show");
});

// 周边
// 配件
$(".periphery-selected span").hover(function(){
	// 改变导航属性
	$(".periphery-selected span").removeClass("tab-active");
	$(this).addClass("tab-active");
	
	//切换显示图片
	$(".periphery-span2 ul").removeClass("periphery-show");
	$(".periphery-span2 ul").eq($(this).index()).addClass("periphery-show");
});