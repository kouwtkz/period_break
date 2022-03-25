//コンテキストメニューに拡張のメニューを追加
const activeOption = {
    active: true,
    currentWindow: true,
};
function sendCurMessage(message, url_re = null, response = null) {
    if (!response) response = () => {};
    chrome.tabs.query(activeOption, (tabs) => {
        var tab = tabs[0];
        if (tab.url && (!url_re || tab.url.match(url_re))) {
            chrome.tabs.sendMessage(tabs[0].id, message, response);
        } else {
            response(null);
        }
    });
}
chrome.contextMenus.create({
    id: "periodBreakSelection",
    title: "句読点の次を改行する",
    contexts: ["selection", "editable"], //選択しているときのみメニューに表示される
    onclick: (info, tab) => {
        sendCurMessage("periodBreakAction");
    },
});
