//获得页面中第2个样式表对象
var sheet=document.styleSheets[1];
//获得要修改的属性所在的keyframe rule
var sFrames=sheet.cssRules[4];
var mFrames=sheet.cssRules[5];
var hFrames=sheet.cssRules[6];
//进入frames获得开始和结束rule
var sFrames_0=sFrames.cssRules[0];
var sFrames_100=sFrames.cssRules[1];
var mFrames_0=mFrames.cssRules[0];
var mFrames_100=mFrames.cssRules[1];
var hFrames_0=hFrames.cssRules[0];
var hFrames_100=hFrames.cssRules[1];

//根据当前时间，计算每个指针的角度
var now=new Date();
var s=now.getSeconds(), 
    m=now.getMinutes(),
		h=now.getHours();

var sDeg=s/60*360,
    mDeg=(m*60+s)/3600*360,
		hDeg=(h*3600+m*60+s)/(3600*12)*360;

sFrames_0.style.transform=`rotate(${sDeg}deg)`;
sFrames_100.style.transform=`rotate(${sDeg+360}deg)`;
mFrames_0.style.transform=`rotate(${mDeg}deg)`;
mFrames_100.style.transform=`rotate(${mDeg+360}deg)`;
hFrames_0.style.transform=`rotate(${hDeg}deg)`;
hFrames_100.style.transform=`rotate(${hDeg+360}deg)`;