(()=>{
	var canMove=false;
	var offsetX,offsetY;
	pop.onmousedown=function(e){
		canMove=true;
		offsetX=e.offsetX;
		offsetY=e.offsetY;
	}
	window.onmousemove=function(e){
		if(canMove){
			var top=e.clientY-offsetY,
					left=e.clientX-offsetX;
			pop.style.left=left+"px";
			pop.style.top=top+"px";
		}
	}
	pop.onmouseup=function(){
		canMove=false;
	}
})()