
window.addEventListener('load', onLoad, false);

function onLoad()
{
	document.getElementById("box").addEventListener("blur", createNewTab, false);
	document.getElementById("box").addEventListener("keypress", validateText, false);
}

function createNewTab()
{
	var windowObj = window.open("");
	windowObj.document.write("<title>New window</title>");
	windowObj.document.write("<script type='text/javascript' src='script.js'></script>");
	for(var i = 0; i < document.getElementById("box").value.length; i++)
	{
		windowObj.document.write("<button onclick='introduce(\""+document.getElementById("box").value.charAt(i)+"\")'>" + document.getElementById("box").value.charAt(i) + "</button>");
	}
	windowObj.document.write("<p><textarea></textarea></p>");
}

function validateText()
{
	 if(document.getElementById("box").value.length >= 10)
	 {
		document.getElementById("box").value = document.getElementById("box").value.substring(0, 10);
	 }
}
function introduce(e)
{
		document.getElementsByTagName("textarea")[0].value += e;
}
