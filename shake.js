/**
 * shake.speed  速度值越小越快
 * shake.init()	  开始
 * shake.clear()  停止
 * 最外层 增加 attr   data-type="scroll"
 * 子集增加 attr  	  data-type="scroll-item"
 */


var shake = {
	speed : 3,
	init: init,
	clear: clear
}

var time = null
var speed = shake.speed
var scorll = document.querySelector("[data-type='scroll']")
var length = scorll.scrollWidth
var dom_width = scorll.clientWidth			
var reverse = false

function clear(){
	clearInterval(time)			
}


function init(){
	time = setInterval(function(){				
		var left = scorll.scrollLeft;										
		reverse ? left-- : left++					
		scorll.scrollLeft = left
		var cond =  left == 0 || left >= length - dom_width;					
		if(cond){
			reverse = !reverse
			clear()
			return init();
		}
	},speed)
}		

var child = document.querySelectorAll("[data-type='scroll-item']")
for(var i in child){
	child[i].onmouseout = function(){
		clear()
		init()
	}
	child[i].onmouseover = function(){
		clear()					
	}
}