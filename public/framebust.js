// Clickjacking defense.
//
// The real fix is an `X-Frame-Options` or `Content-Security-Policy:
// frame-ancestors` HTTP response header, but GitHub Pages serves static files
// and gives us no control over response headers. `frame-ancestors` is also one
// of the directives the CSP spec explicitly ignores when it arrives in a <meta>
// tag, so it cannot be expressed there either.
//
// This is the remaining option: notice that we are framed and break out. Be
// aware of its limit — an attacker who frames us with <iframe sandbox="allow-
// scripts"> blocks top-level navigation, which neutralizes this script. It
// raises the bar rather than closing the hole. Moving the site behind a proxy
// that can set real headers (e.g. a custom domain on Cloudflare) is what would
// actually close it.
(function () {
  try {
    if (window.top !== window.self) {
      window.top.location = window.self.location;
    }
  } catch (e) {
    // Cross-origin parents throw on access, which itself means we are framed.
    // Hide the content so a framed copy is not usable for clickjacking.
    document.documentElement.style.display = "none";
  }
})();
