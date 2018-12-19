var tab_id;
browser.browserAction.onClicked.addListener((tab) => {
	tab_id = tab.url;
	title();
});

function title () {
	browser.browserAction.setTitle({
		title: 'QR Code',
		tabId: tab_id 
	});
}