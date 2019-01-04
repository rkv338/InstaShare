var tab_id;
browser.browserAction.onClicked.addListener((tab) => {
	tab_id = tab.url;
	document.getElementById("qrcode").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + tab_url;
	title();
});

function title () {
	browser.browserAction.setTitle({
		title: 'QR Code 1',
		tabId: tab_id 
	});
}

