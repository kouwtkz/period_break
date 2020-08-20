var browser = browser||chrome;
browser.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request == "periodBreakAction") {
        periodBreak();
    }
    return true;
});
function periodBreak() {
    var n = document.getSelection().baseNode;
    n.parentElement.style.whiteSpace = "pre-wrap";
    n.data = n.data
        .replace(/(。|[.!?！？]\s+)(\n|)/g, function(m, p1, p2){return p1+(p2===''?"\n":p2);})
        .replace(/^\s+/, " ");
}