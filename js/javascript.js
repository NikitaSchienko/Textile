window.onscroll = function() 
{
	var height = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
	var height2 = document.documentElement.clientHeight;
  	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  	document.getElementById('line_scroll').style.width =  scrolled/(height-height2)*100+ '%';
}