(()=>{
var i=1;//记录当前第几张图片
function task(){
	i++;//换下一张
	if(i==4) i=1;//超范围，就改回1
	//查找所有div
	var divs=document.querySelectorAll(".box>div");
	var j=0,count=10,interval=50,dura=500;
	var timer=setInterval(()=>{
		var div=divs[j];//获得当前div
		div.style.backgroundImage=`url(imgs/${i}.jpg)`;
		div.className="shake";
		j++;//跳到下一个div的位置
		if(j==count) clearInterval(timer);//自动结束
	},50)//每隔50毫秒，才设置下一个div的震动
	setTimeout(()=>{//等最后一个div震完，才移除class
		for(var div of divs) div.className="";
		document.querySelector(".box>img").src="imgs/"+i+".jpg"
	},interval*count+dura)
}
setInterval(task,3000+1000);
})()