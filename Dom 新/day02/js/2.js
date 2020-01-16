//查找触发事件的元素
//绑定事件
	//查找要修改的元素
	//修改元素

//查找thead下第一个th中的input
var chbAll=document.querySelector(
	"thead th:first-child>input"
);
//为其绑定单击事件
chbAll.onclick=function(){
	//查找tbody下每行第一个td中的input
	var chbs=document.querySelectorAll(
		"tbody td:first-child>input"
	);
	//遍历所有input
	for(var chb of chbs){
		//设置当前input的checked等于thead中input的checked
		chb.checked=this.checked
	}
}
//查找tbody下每行第一个td中的input
var chbs=document.querySelectorAll(
	"tbody td:first-child>input"
);
//为每行的input绑定单击事件
for(var chb of chbs){
	chb.onclick=function(){
		//如果当前chb是未选中
		if(!this.checked)
			chbAll.checked=false;//则chbAll也未选中
		else{//否则
			//查找tbody td:first-child>input:not(:checked)
			var unchecked=document.querySelector(
				"tbody td:first-child>input:not(:checked)"
			);
//			if(unchecked!==null)//如果找到
//				chbAll.checked=false;//chbAll就不选
//			else//否则
//				chbAll.checked=true;//chbAll就选中
			chbAll.checked=unchecked===null;
		}
	}
}