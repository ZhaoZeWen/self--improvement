//查找触发事件的元素:
//绑定事件处理函数
  //在事件处理函数中，查找要修改的元素
	//修改元素(内容,属性,样式)

//查找id为data的table
var table=document.getElementById("data");
//在table下查找所有button
var btns=table.getElementsByTagName("button");
//遍历btns，绑定单击事件:
for(var i=0,len=btns.length;i<len;i++){
	btns[i].onclick=function(){
		//this->当前按钮
		//查找当前元素的父元素下的第2个孩子
		var span=this.parentNode.children[1];
		var n=parseInt(span.innerHTML);
		//如果当前按钮的内容为+
		if(this.innerHTML=="+")
			n++
		else if(n>1)//否则,如果n>1
			n--
		//设置span的内容为n
		span.innerHTML=n;

		//计算小计:
		//获得当前按钮的父元素td
		var td=this.parentNode;
		//获得td的前一个兄弟元素的内容，去掉¥转为浮点数保存在price中
		var price=parseFloat(
			td.previousElementSibling.innerHTML.slice(1)
		);
		//计算小计subTotal=price*n
		var subTotal=price*n;
		//设置td的后一个兄弟元素的内容为¥+subTotal
		td.nextElementSibling.innerHTML=
			"¥"+subTotal.toFixed(2);

		//找到每行最后一个td
		var tds=table.querySelectorAll(
			"tbody td:last-child");
		//累加每行最后一个td的内容
		var total=0;
		for(var td of tds){
			total+=parseFloat(td.innerHTML.slice(1))
		}
		//将累加结果保存到tfoot中最后一个td
		table.querySelector(
			"tfoot td:last-child"
		).innerHTML="¥"+total.toFixed(2)
	}
}