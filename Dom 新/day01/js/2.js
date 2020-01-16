function getChildren1(parent){
	console.log(parent.nodeName);
	var children=parent.children;
	for(var i=0,len=children.length;i<len;i++){
		arguments.callee(children[i]);
	}
}
function getChildren2(parent){
	var iterator=document.createNodeIterator(
		parent, NodeFilter.SHOW_ELEMENT, null, false	
	);
	do{
		var curr=iterator.nextNode();
		if(curr!=null) console.log(curr.nodeName);
		else break;
	}while(true)
}
getChildren2(document.body);