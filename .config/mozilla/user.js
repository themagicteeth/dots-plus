// VR and gamepad
lockPref("dom.gamepad.enabled", false);
lockPref("dom.vr.enabled", false);
lockPref("dom.vr.oculus.enabled", false);
lockPref("dom.vr.osvr.enabled", false);
lockPref("dom.vr.openvr.enabled", false);
lockPref("dom.vr.poseprediction.enabled", false);
lockPref("dom.vr.navigation.timeout", 1);
lockPref("dom.vr.oculus.present.timeout", 1);
lockPref("dom.vr.oculus.quit.timeout", 1);

// HTTPS / TLS / OCSP / Certs
lockPref("security.tls.enable_0rtt_data", false); 
lockPref("security.ssl.enable_ocsp_stapling", true);
lockPref("security.OCSP.enabled", 1);
lockPref("network.stricttransportsecurity.preloadlist", true);
lockPref("security.mixed_content.send_hsts_priming", false);
lockPref("browser.ssl_override_behavior", 1);
lockPref("browser.xul.error_pages.expert_bad_cert", true);

// Geolocation
pref("geo.enabled", false);
pref("geo.wifi.uri", "");
pref("geo.wifi.xhr.timeout", 1);
pref("geo.wifi.logging.enabled", false);
pref("browser.search.geoip.url", "");
pref("browser.search.geoip.timeout", 1);
pref("browser.search.countryCode", "US");
pref("browser.search.region", "US");
pref("intl.locale.matchOS", false);
pref("general.useragent.locale", "en-US");
pref("browser.search.geoSpecificDefaults", false);
pref("browser.search.geoSpecificDefaults.url", "");
pref("intl.accept_languages", "en-US, en");
pref("javascript.use_us_english_locale", true);

// DRM
pref("browser.eme.ui.enabled", false);
pref("browser.eme.ui.enabled", false);
pref("media.eme.chromium-api.enabled", false);

// GMP
pref("media.gmp-provider.enabled", false);
pref("media.gmp.trial-create.enabled", false);
pref("media.gmp-manager.url", "data:text/plain,");
pref("media.gmp-manager.url.override", "data:text/plain,");
pref("media.gmp-manager.updateEnabled", false);
pref("media.gmp-widevinecdm.enabled", false);
pref("media.gmp-widevinecdm.visible", false);
pref("media.gmp-widevinecdm.autoupdate", false);
pref("media.gmp-gmpopenh264.enabled", false);
pref("media.gmp-gmpopenh264.autoupdate", false);

// WebRTC
pref("media.peerconnection.enabled", false);
pref("media.peerconnection.use_document_iceservers", false);
pref("media.peerconnection.video.enabled", false);
pref("media.peerconnection.identity.enabled", false);
pref("media.peerconnection.identity.timeout", 1);
pref("media.peerconnection.turn.disable", true);
pref("media.peerconnection.ice.tcp", false);
pref("media.navigator.video.enabled", false);
pref("media.peerconnection.ice.default_address_only", true);
pref("media.peerconnection.ice.no_host", true);

// WebGL
pref("webgl.disabled", true);
pref("pdfjs.enableWebGL", false);
pref("webgl.min_capability_mode", true);
pref("webgl.disable-extensions", true);
pref("webgl.disable-fail-if-major-performance-caveat", true);
pref("webgl.enable-debug-renderer-info", false);
pref("webgl.dxgl.enabled", false);
pref("webgl.enable-webgl2", false);


// Fingerprintins
pref("privacy.resistFingerprinting", true); 
pref("device.sensors.enabled", false);
pref("media.ondevicechange.enabled", false);
pref("dom.webaudio.enabled", false);
pref("dom.w3c_touch_events.enabled", 0);
pref("media.video_stats.enabled", false);
pref("dom.netinfo.enabled", false);
pref("media.navigator.enabled", false);

// Presentation API
lockPref("dom.presentation.enabled", false);
lockPref("dom.presentation.controller.enabled", false);
lockPref("dom.presentation.discoverable", false);
lockPref("dom.presentation.discovery.enabled", false);
lockPref("dom.presentation.receiver.enabled", false);
lockPref("dom.presentation.session_transport.data_channel.enable", false);





