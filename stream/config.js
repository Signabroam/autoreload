const kiwilistDay = [
    { url: "http://kiwi-vih.aprs.fi:8073", timeout: 30, timelimit: 120 }, 
    { url: "http://oh5ae.dyndns.org:8073/", timeout: 60, timelimit: 120 },
    { url: "http://kar.proxy.kiwisdr.com:8073/", timeout: null, timelimit: null },
    { url: "http://sdxlkiwi7.proxy.kiwisdr.com:8073/", timeout: 30, timelimit: 120 },
    { url: "http://oh3aa.dy.fi:18073/", timeout: 30, timelimit: 120 },
];

const kiwilistNight = [
    { url: "http://kiwi-vih.aprs.fi:8073", timeout: 30, timelimit: 120 }, 
    { url: "http://oh5ae.dyndns.org:8073/", timeout: 60, timelimit: 120 },
    { url: "http://kar.proxy.kiwisdr.com:8073/", timeout: null, timelimit: null },
    { url: "http://sdxlkiwi7.proxy.kiwisdr.com:8073/", timeout: 30, timelimit: 120 },
    { url: "http://oh3aa.dy.fi:18073/", timeout: 30, timelimit: 120 },
];

const reloadMinutes = 30; // adjusted to retry connections sooner
const retryMinutes = 0.1; // retry failed connections after 5 minutes

const kiwiConfig = {
    freq: "8514",
    mode: "usb",
    zoom: "11",
    startPass: "0",
    endPass: "3500",
    colormap: "1",
    volume: "180&u=TheShortwaveChannel&keys=yyyxs",
};

const config = {
    timeout: 20000, // increased timeout for probing kiwi SDRs
    scoreSNRMult: 1, 
    scoreUsageMult: 20,
    scoreTimeMult: 1, 
    usageDisallowTolerance: 2, 
};

const fallback = true; // enable fallback
const fallbackUrl = "http://kar.proxy.kiwisdr.com:8073/"; 
const fallbackReloadMinutes = 30;
