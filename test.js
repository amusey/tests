var pageUrl = encodeURIComponent(window.location.href);
const puzzleDiv = document.getElementById("puzzle-div");
var urlParams = new URLSearchParams(window.location.search);
var set= puzzleDiv.dataset.set;
var embed =puzzleDiv.dataset.embed;
var iframeURL = "https://amuselabs.com/pmm/" + embed + "?set=" + set + "&embed=wp&src=" + pageUrl;
if (urlParams.has('id'))
{
	var id =urlParams.get('id');
	iframeURL = iframeURL + '&id=' + id;
}
if (urlParams.has('playId'))
{
	var playId =urlParams.get('playId');
	iframeURL = iframeURL + '&playId=' + playId;
}
const node = document.createElement("iframe");
node.src = iframeURL;
node.width = "700px";
node.height = "700px";
document.getElementById("puzzle-div").appendChild(node);
