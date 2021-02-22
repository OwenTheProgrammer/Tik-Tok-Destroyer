var elements = document.getElementsByTagName("*");
for(var i = 0; i < elements.length; i++) {
    for(var j = 0; j < elements[i].childNodes.length; j++) {
        var node = elements[i].childNodes[j];
        if(node.nodeType === 3) {
            var nodetext = node.nodeValue;
            var reptext = nodetext.replace(/TikTok/gi, 'A Bad App');
            if(reptext !== nodetext) {
                elements[i].replaceChild(document.createTextNode(reptext), node);
            }
        }
    }
}