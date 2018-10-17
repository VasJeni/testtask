!function () {
    var e, t, n, o = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);

    function a(e, t) {
        var n = e.getAttribute("href");
        n += n.indexOf("?") > -1 ? "&" : "?", e.setAttribute("href", n + t)
    }

    function i(o) {
        if ("A" === o.target.tagName) {
            var i = o.target.getAttribute("href");
            i.indexOf(t) > -1 && (n ? i.indexOf(n) < 0 && (a(o.target, n), window.location.assign(o.target.getAttribute("href"))) : (o.preventDefault(), o.stopImmediatePropagation(), e = o.target))
        }
    }

    function r(e, t, n) {
        t.addEventListener ? t.addEventListener(e, n, !0) : t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
    }

    function c(e, t, n, o) {
        n.removeEventListener ? (n.removeEventListener(e, o, !0), n.removeEventListener(t, o, !0)) : n.detachEvent && (n.detachEvent("on" + e, o), n.detachEvent("on" + t, o))
    }

    function f(e) {
        for (var n = document.querySelectorAll('a[href*="' + t + '"]'), o = 0; o < n.length; o++) a(n[o], e);
        c("click", "contextmenu", document, i)
    }

    !function (d, s, u, l) {
        var m, v, p, h = (m = d, (v = document.createElement("a")).href = m, v),
            g = "https:" === window.location.protocol ? "https:" : h.protocol, w = function (e) {
                var t = e.split("#")[0].split("?")[1], n = {};
                if (t) {
                    var o = t.split("&");
                    if (o.length) for (var a = 0; a < o.length; a++) {
                        var i = o[a].split("=");
                        n[i[0]] = i[1]
                    }
                }
                return n
            }(window.location.href).cpid;
        w && o.test(w) ? p = "/" + w : 0 !== (p = h.pathname).lastIndexOf("/") && (p = "/" + p);
        var b = g + "//" + h.hostname + "/p" + p + "?lpid=" + s;
        t = u || h.hostname + "/click";
        var E, x = !!window.XDomainRequest;

        function k(t) {
            if (t.responseText) {
                var o = JSON.parse(t.responseText);
                if (o.clickParams) if (n = o.clickParams, e) a(e, n), window.location.assign(e.getAttribute("href")); else {
                    var d = document.readyState;
                    "loaded" === d || "interactive" === d || "complete" === d ? f(n) : r("DOMContentLoaded", document, function () {
                        f(n)
                    })
                }
                l(o)
            } else e && window.location.assign(e.getAttribute("href")), c("click", "contextmenu", document, i)
        }

        r("click", document, i), r("contextmenu", document, i), x ? ((E = new window.XDomainRequest).onprogress = function () {
        }, E.ontimeout = function () {
        }, E.onload = function () {
            k(E)
        }) : (E = new XMLHttpRequest).onreadystatechange = function () {
            4 === E.readyState && k(E)
        }, E.open("POST", b + "&lpurl=" + encodeURIComponent(location.href), !0), E.send(null)
    }("http://t.tchnl.com/<?php echo $vol;?>", "<?php echo $lander_id;?>", "t.tchnl.com/click", function (e) {/* callback function */
    })
}();