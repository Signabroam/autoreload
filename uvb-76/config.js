const kiwilistDay = [
    { url: "http://oh3aa.dy.fi:18073/", timeout: 180, timelimit: null },
    { url: "http://sdxl-loh.ddns.net:8073/", timeout: 180, timelimit: null },
    { url: "http://kiwi-kuo.aprs.fi:8073/", timeout: 180, timelimit: null },
    { url: "http://oh6hps.ddns.net:8073/", timeout: 180, timelimit: null },
    { url: "http://rha2sdr.ddns.net:8074/", timeout: 180, timelimit: null },
    { url: "http://21612.proxy.kiwisdr.com:8073/", timeout: 180, timelimit: null }
];

const kiwilistNight = [
    { url: "http://oh3aa.dy.fi:18073/", timeout: 180, timelimit: null },
    { url: "http://sdxl-loh.ddns.net:8073/", timeout: 180, timelimit: null },
    { url: "http://kiwi-kuo.aprs.fi:8073/", timeout: 180, timelimit: null },
    { url: "http://oh6hps.ddns.net:8073/", timeout: 180, timelimit: null },
    { url: "http://rha2sdr.ddns.net:8074/", timeout: 180, timelimit: null },
    { url: "http://21612.proxy.kiwisdr.com:8073/", timeout: 180, timelimit: null }
];

const reloadMinutes = 30; // adjusted to retry connections sooner
const retryMinutes = 0.1; // retry failed connections after 5 minutes
const kiwiConfig = {
    freq: "4625",
    mode: "usb",
    zoom: "11",
    startPass: "0",
    endPass: "3650",
    colormap: "1",
    volume: "180",
};

const config = {
    timeout: 20000, // increased timeout for probing kiwi SDRs
    scoreSNRMult: 1, 
    scoreUsageMult: 20,
    scoreTimeMult: 1, 
    usageDisallowTolerance: 2, 
};

const fallback = true; // enable fallback
const fallbackUrl = "http://kiwi-kuo.aprs.fi:8073/"; // fallback URL
const fallbackReloadMinutes = 30;