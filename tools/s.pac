var domains = {
  "facebook.com":1,
  "github.com":1,
  "twimg.com":1,
  "t.co":1,
  "hackerone.com":1,
  "google.com": 1, 
  "twitter.com": 1,
  "googleapis.com": 1
};

var proxy = "SOCKS5 home.z0.hk:28080;DIRECT;";

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var lastPos = 0;
    var domain = host;
    while(lastPos >= 0) {
        if (domains[domain]) {
            return proxy;
        }
        lastPos = host.indexOf('.', lastPos + 1);
        domain = host.slice(lastPos + 1);
    }
    return direct;
}
