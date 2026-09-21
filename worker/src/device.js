// device.js — lightweight User-Agent → {device, browser, os} for the Visitors
// analytics pivot dimensions. Coarse buckets only (no fingerprinting): this is
// aggregate, cookieless analytics. Empty UA → 'unknown'.

/** @param {string} ua raw User-Agent header (may be empty) */
export function deviceInfo(ua) {
  const s = ua || '';
  if (!s) return { device: 'unknown', browser: 'Other', os: 'Other' };

  // Order matters: tablets (iPad / Android-without-"Mobile") before phones.
  const device = /\biPad\b|\bTablet\b|Kindle|PlayBook|(?:Android(?!.*\bMobile\b))/i.test(s) ? 'tablet'
    : /\bMobi(?:le)?\b|\biPhone\b|\biPod\b|Windows Phone|BlackBerry|BB10/i.test(s) ? 'mobile'
      : 'desktop';

  // Browser — check the specific tokens before the generic ones they contain
  // (Edge/Opera/Chrome all carry "Safari"; Chrome carries "Safari" too).
  const browser = /\bEdg(?:e|A|iOS)?\//i.test(s) ? 'Edge'
    : /\bOPR\/|\bOpera\b/i.test(s) ? 'Opera'
      : /\bSamsungBrowser\//i.test(s) ? 'Samsung Internet'
        : /\bFirefox\/|\bFxiOS\//i.test(s) ? 'Firefox'
          : /\bChrome\/|\bCriOS\//i.test(s) && !/\bChromium\//i.test(s) ? 'Chrome'
            : /\bSafari\//i.test(s) && /\bVersion\//i.test(s) ? 'Safari'
              : 'Other';

  const os = /\bWindows NT\b|\bWindows Phone\b/i.test(s) ? 'Windows'
    : /\bAndroid\b/i.test(s) ? 'Android'
      : /\biPhone\b|\biPad\b|\biPod\b|\biOS\b|\bCPU OS\b/i.test(s) ? 'iOS'
        : /\bMac OS X\b|\bMacintosh\b/i.test(s) ? 'macOS'
          : /\bCrOS\b/i.test(s) ? 'ChromeOS'
            : /\bLinux\b/i.test(s) ? 'Linux'
              : 'Other';

  return { device, browser, os };
}
