chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if (message == "periodBreakAction") {
        periodBreak();
    }
    sendResponse();
    return;
});
var replacePeriodBreak = (n)=>{
    return n.replace(/([。]+|[.!?！？]\s+)(\n|)/g, function(m, p1, p2){return p1+(p2===''?"\n":p2);})
    .replace(/^\s+/, " ");
};
function periodBreak() {
    var n = null, textareaMode = (document.activeElement.tagName === 'TEXTAREA');
    if (textareaMode) {
        n = document.activeElement;
        n.value = replacePeriodBreak(n.value);
    } else {
        n = getSelection().baseNode;
        n.parentElement.style.whiteSpace = "pre-wrap";
        n.data = replacePeriodBreak(n.data);
    }
}