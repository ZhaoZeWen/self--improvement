//查找触发事件的元素
//绑定事件
	//查找要修改的元素
	//修改元素

//查找两个文本框:
var txtName=
			document.getElementsByName("username")[0],
		txtPwd=document.getElementsByName("pwd")[0];
txtName.onfocus=txtPwd.onfocus=function(){
	this.className="txt_focus";
	var div=this.parentNode
							.nextElementSibling.children[0];
	div.className="";
}
txtName.onblur=function(){
	vali(this,/^\w{1,10}$/)
}
function vali(txt,reg){
	txt.className="";
	var div=txt.parentNode
							.nextElementSibling.children[0];
	if(reg.test(txt.value))
		div.className="vali_success";
	else
		div.className="vali_fail";
}
txtPwd.onblur=function(){
	vali(this,/^\d{6}$/)
}