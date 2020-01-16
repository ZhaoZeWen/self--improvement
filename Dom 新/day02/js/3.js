//查找触发事件的元素
//绑定事件
	//查找要修改的元素
	//修改元素

//查找data-toggle属性值为tab的所有元素
var tabs=document.querySelectorAll(
	"[data-toggle=tab]"
);
for(var tab of tabs){//遍历每个tab
	tab.onclick=function(){//为每个tab绑定单击事件
		//查找id为container下的有style属性的div
		var show=document.querySelector(
			"#container>div[style]"
		);
		if(show!=null)//如果找到
			//就移除该div上的style属性
			show.removeAttribute("style");
		//获得当前tab的href属性值
		var id=//this.href.split("#")[1];
					 this.dataset.target.slice(1);
		//用href属性值作为id选择器查找对应容器div
		var div=document.getElementById(id);
		//设置div的style中的zIndex为10
		div.style.zIndex=10;
	}
}