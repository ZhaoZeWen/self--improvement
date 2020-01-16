//查找触发事件的元素
//绑定事件
	//查找要修改的元素
	//修改元素

//查找class为tree下的span
var spans=document.querySelectorAll(".tree span");
//遍历所有span，绑定单击事件
for(var span of spans){
	span.onclick=function(){
		//如果自己的class是open
		if(this.className==="open")
			this.className="";//清空自己的class
		else{//否则
			//查找class为tree下的class为open的span
			var openSpan=
				document.querySelector(".tree .open");
			if(openSpan!==null)//如果找到
				openSpan.className="";//就清除其class
			//将自己的class设置为open
			this.className="open";
		}
	}
}