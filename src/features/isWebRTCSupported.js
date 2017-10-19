export default (() => {
	return (!!window.RTCPeerConnection && !!window.RTCDataChannelEvent) || false;
})();
