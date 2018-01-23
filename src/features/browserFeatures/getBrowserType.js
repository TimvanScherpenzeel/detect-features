import UAParser from 'ua-parser-js';

export default (() => {
    const userAgentParser = new UAParser();
    const userAgent = userAgentParser.getResult();

    console.log(userAgent);

    const features = {
        browserName: userAgent.browser.name || 'Unknown',
        browserVersion: userAgent.browser.version || 'Unknown',
        browserEngineName: userAgent.engine.name || 'Unknown',
        browserEngineVersion: userAgent.engine.version || 'Unknown',
        operatingSystemName: userAgent.os.name || 'Unknown',
        operatingSystemVersion: userAgent.os.version || 'Unknown',
        deviceModel: userAgent.device.model || 'Unknown',
        deviceType: userAgent.device.type || 'Unknown',
        deviceVendor: userAgent.device.vendor || 'Unknown',
	};

	return features;
})();
