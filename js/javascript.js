window.onscroll = function() 
{
	var height = Math.max(
  		document.body.scrollHeight, document.documentElement.scrollHeight,
  		document.body.offsetHeight, document.documentElement.offsetHeight,
 	 	document.body.clientHeight, document.documentElement.clientHeight
	);


	var wh = document.documentElement;

	var height_scroll = document.documentElement.scrollHeight;
	var height_client = document.documentElement.clientHeight;
  	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  	//alert('height_scroll='+height_scroll+'  height_client='+height_client+'  scrolled='+scrolled +'   height='+height);
  	document.getElementById('line_scroll').style.width =  scrolled/(document.documentElement.body.style.height-height_client)+'px';
}

function showDialogWindow(id)
{
	alert(id.name);
}