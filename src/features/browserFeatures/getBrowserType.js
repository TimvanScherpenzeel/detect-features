import UAParser from 'ua-parser-js';

export default (() => {
    const userAgentParser = new UAParser();
    const userAgent = userAgentParser.getResult();

    const features = {
        browserEngineName: userAgent.engine.name || 'Unknown',
        browserEngineVersion: userAgent.engine.version || 'Unknown',
        browserName: userAgent.browser.name || 'Unknown',
        browserVersion: userAgent.browser.version || 'Unknown',
        deviceModel: userAgent.device.model || 'Unknown',
        deviceType: userAgent.device.type || 'Unknown',
        deviceVendor: userAgent.device.vendor || 'Unknown',
        operatingSystemName: userAgent.os.name || 'Unknown',
        operatingSystemVersion: userAgent.os.version || 'Unknown',
	};

	return features;
})();
