// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iKiqL":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _styleScss = require("./scss/style.scss");
var _appDomJs = require("./js/AppDom.js");
var _appDomJsDefault = parcelHelpers.interopDefault(_appDomJs);
window.onload = ()=>{
    new _appDomJsDefault.default();
};

},{"./scss/style.scss":"gPsar","./js/AppDom.js":"iQYdL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPsar":[function() {},{}],"iQYdL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _swipejs = require("swipejs");
var _swipejsDefault = parcelHelpers.interopDefault(_swipejs);
const IP = `192.168.1.239`;
class App {
    constructor(){
        this.isFullscreen = false;
        this.debug = document.getElementById("debug");
        this.handlers = {
            callback: this.onTransitionEnd.bind(this),
            open: this.onOpenWSConnection.bind(this),
            error: this.onWSError.bind(this),
            message: this.onWSMessage.bind(this)
        };
        window.mySwipe = new _swipejsDefault.default(document.getElementById("slider"), {
            stopPropagation: true,
            transitionEnd: this.handlers.callback
        });
        this.checkWebsocketAvailibility();
        this.initListeners();
    }
    onTransitionEnd(index, elem, dir) {
        this.debug.innerHTML = `${index},${elem},${dir}`;
        this.connection.send(JSON.stringify({
            project_id: index
        }));
    }
    checkWebsocketAvailibility() {
        window.WebSocket = window.WebSocket || window.MozWebSocket; // si le navigateur n'accepte pas les websocket
        if (!window.WebSocket) alert("Il faut utiliser un autre navigateur. Chrome par exemple.");
        else this.initConnection();
    }
    initConnection() {
        this.connection = new WebSocket("ws://" + IP + ":1337"); // on ouvre la connection
        this.connection.onopen = this.handlers.open;
        this.connection.onerror = this.handlers.error;
        this.connection.onmessage = this.handlers.message;
    }
    onOpenWSConnection(e) {
        console.log("::open connection::", e);
    }
    onWSError(error) {
        console("::error::", error);
    }
    onWSMessage(message) {
        console.log("::message::", message);
    }
    initListeners() {
    }
}
exports.default = App;

},{"swipejs":"iTdHw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTdHw":[function(require,module,exports) {
var global = arguments[3];
(function(root, factory) {
    root = root || {
    };
    // eslint-disable-next-line no-undef
    if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    // eslint-disable-next-line no-undef
    define([], function() {
        root.Swipe = factory();
        return root.Swipe;
    });
    else if (typeof module === 'object' && module.exports) // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
    else // Browser globals
    root.Swipe = factory();
})(this, function() {
    // Establish the root object, `window` (`self`) in the browser, `global`
    // on the server, or `this` in some virtual machines. We use `self`
    // instead of `window` for `WebWorker` support.
    var root = typeof self == 'object' && self.self === self && self || typeof global == 'object' && global.global === global && global || this;
    var _document = root.document;
    function Swipe(container, options) {
        options = options || {
        };
        // setup initial vars
        var start1 = {
        };
        var delta = {
        };
        var isScrolling;
        // setup auto slideshow
        var delay = options.auto || 0;
        var interval;
        var disabled = false;
        // utilities
        // simple no operation function
        var noop = function() {
        };
        // offload a functions execution
        var offloadFn = function(fn) {
            setTimeout(fn || noop, 0);
        };
        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered.
        var throttle = function(fn, threshhold) {
            threshhold = threshhold || 100;
            var timeout = null;
            function cancel() {
                if (timeout) clearTimeout(timeout);
            }
            function throttledFn() {
                var context = this;
                var args = arguments;
                cancel();
                timeout = setTimeout(function() {
                    timeout = null;
                    fn.apply(context, args);
                }, threshhold);
            }
            // allow remove throttled timeout
            throttledFn.cancel = cancel;
            return throttledFn;
        };
        // check whether event is cancelable
        var isCancelable = function(event) {
            if (!event) return false;
            return typeof event.cancelable !== 'boolean' || event.cancelable;
        };
        // polyfill for browsers that do not support Element.matches()
        if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
            while(--i >= 0 && matches.item(i) !== this);
            return i > -1;
        };
        // check browser capabilities
        var browser = {
            addEventListener: !!root.addEventListener,
            passiveEvents: function() {
                // Test via a getter in the options object to see if the passive property is accessed
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({
                    }, 'passive', {
                        // eslint-disable-next-line getter-return
                        get: function() {
                            supportsPassive = true;
                        }
                    });
                    root.addEventListener('testEvent', null, opts);
                    root.removeEventListener('testEvent', null, opts);
                } catch (e) {
                    supportsPassive = false;
                }
                return supportsPassive;
            }(),
            // eslint-disable-next-line no-undef
            touch: 'ontouchstart' in root || root.DocumentTouch && _document instanceof DocumentTouch,
            transitions: function(temp) {
                var props = [
                    'transitionProperty',
                    'WebkitTransition',
                    'MozTransition',
                    'OTransition',
                    'msTransition'
                ];
                for(var i in props){
                    if (temp.style[props[i]] !== undefined) return true;
                }
                return false;
            }(_document.createElement('swipe'))
        };
        // quit if no root element
        if (!container) return;
        var element = container.children[0];
        var slides, slidePos, width, length;
        var index1 = parseInt(options.startSlide, 10) || 0;
        var speed1 = options.speed || 300;
        options.continuous = options.continuous !== undefined ? options.continuous : true;
        // check text direction
        var slideDir = function(el, prop, dir) {
            if (el.currentStyle) dir = el.currentStyle[prop];
            else if (root.getComputedStyle) dir = root.getComputedStyle(el, null).getPropertyValue(prop);
            return 'rtl' === dir ? 'right' : 'left';
        }(container, 'direction');
        // AutoRestart option: auto restart slideshow after user's touch event
        options.autoRestart = options.autoRestart !== undefined ? options.autoRestart : false;
        // throttled setup
        var throttledSetup = throttle(setup);
        // setup event capturing
        var events = {
            handleEvent: function(event) {
                // allow bypass 'resize' event
                if (disabled && event.type !== 'resize') return;
                switch(event.type){
                    case 'mousedown':
                    case 'touchstart':
                        this.start(event);
                        break;
                    case 'mousemove':
                    case 'touchmove':
                        this.move(event);
                        break;
                    case 'mouseup':
                    case 'mouseleave':
                    case 'touchend':
                        this.end(event);
                        break;
                    case 'webkitTransitionEnd':
                    case 'msTransitionEnd':
                    case 'oTransitionEnd':
                    case 'otransitionend':
                    case 'transitionend':
                        this.transitionEnd(event);
                        break;
                    case 'resize':
                        throttledSetup();
                        break;
                }
                if (options.stopPropagation) event.stopPropagation();
            },
            start: function(event) {
                var touches;
                if (isMouseEvent(event)) touches = event;
                else touches = event.touches[0];
                // check if the user is swiping on an element that the options say to ignore (for example, a scrolling area)
                if (options.ignore && touches.target.matches(options.ignore)) return;
                // For desktop Safari drag
                // Fix #146
                if (isMouseEvent(event)) event.preventDefault();
                // measure start values
                start1 = {
                    // get initial touch coords
                    x: touches.pageX,
                    y: touches.pageY,
                    // store time to determine touch duration
                    time: +new Date()
                };
                // used for testing first move event
                isScrolling = undefined;
                // reset delta and end measurements
                delta = {
                };
                // attach touchmove and touchend listeners
                if (isMouseEvent(event)) {
                    element.addEventListener('mousemove', this, false);
                    element.addEventListener('mouseup', this, false);
                    element.addEventListener('mouseleave', this, false);
                } else {
                    element.addEventListener('touchmove', this, browser.passiveEvents ? {
                        passive: false
                    } : false);
                    element.addEventListener('touchend', this, false);
                }
                runDragStart(getPos(), slides[index1]);
            },
            move: function(event) {
                var touches;
                if (isMouseEvent(event)) touches = event;
                else {
                    // ensure swiping with one touch and not pinching
                    if (event.touches.length > 1 || event.scale && event.scale !== 1) return;
                    // we can disable scrolling unless it is already in progress
                    if (options.disableScroll && isCancelable(event)) event.preventDefault();
                    touches = event.touches[0];
                }
                // measure change in x and y
                delta = {
                    x: touches.pageX - start1.x,
                    y: touches.pageY - start1.y
                };
                // determine if scrolling test has run - one time test
                if (typeof isScrolling === 'undefined') isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
                // if user is not trying to scroll vertically
                if (!isScrolling) {
                    // if it is not already scrolling
                    if (isCancelable(event)) // prevent native scrolling
                    event.preventDefault();
                    // stop slideshow
                    stop();
                    // increase resistance if first or last slide
                    if (options.continuous) {
                        translate(circle(index1 - 1), delta.x + slidePos[circle(index1 - 1)], 0);
                        translate(index1, delta.x + slidePos[index1], 0);
                        translate(circle(index1 + 1), delta.x + slidePos[circle(index1 + 1)], 0);
                    } else {
                        delta.x = delta.x / (!index1 && delta.x > 0 || index1 === slides.length - 1 && delta.x < 0 // and if sliding at all
                         ? Math.abs(delta.x) / width + 1 : 1); // no resistance if false
                        // translate 1:1
                        translate(index1 - 1, delta.x + slidePos[index1 - 1], 0);
                        translate(index1, delta.x + slidePos[index1], 0);
                        translate(index1 + 1, delta.x + slidePos[index1 + 1], 0);
                    }
                }
            },
            end: function(event) {
                // measure duration
                var duration = +new Date() - start1.time;
                // determine if slide attempt triggers next/prev slide
                var isValidSlide = Number(duration) < 250 && Math.abs(delta.x) > 20 || Math.abs(delta.x) > width / 2; // or if slide amt is greater than half the width
                // determine if slide attempt is past start and end
                var isPastBounds = !index1 && delta.x > 0 || index1 === slides.length - 1 && delta.x < 0; // or if last slide and slide amt is less than 0
                if (options.continuous) isPastBounds = false;
                // OLD determine direction of swipe (true:right, false:left)
                // determine direction of swipe (1: backward, -1: forward)
                var direction = Math.abs(delta.x) / delta.x;
                // if not scrolling vertically
                if (!isScrolling) {
                    if (isValidSlide && !isPastBounds) {
                        // if we're moving right
                        if (direction < 0) {
                            if (options.continuous) {
                                move(circle(index1 - 1), -width, 0);
                                move(circle(index1 + 2), width, 0);
                            } else move(index1 - 1, -width, 0);
                            move(index1, slidePos[index1] - width, speed1);
                            move(circle(index1 + 1), slidePos[circle(index1 + 1)] - width, speed1);
                            index1 = circle(index1 + 1);
                        } else {
                            if (options.continuous) {
                                move(circle(index1 + 1), width, 0);
                                move(circle(index1 - 2), -width, 0);
                            } else move(index1 + 1, width, 0);
                            move(index1, slidePos[index1] + width, speed1);
                            move(circle(index1 - 1), slidePos[circle(index1 - 1)] + width, speed1);
                            index1 = circle(index1 - 1);
                        }
                        runCallback(getPos(), slides[index1], direction);
                    } else if (options.continuous) {
                        move(circle(index1 - 1), -width, speed1);
                        move(index1, 0, speed1);
                        move(circle(index1 + 1), width, speed1);
                    } else {
                        move(index1 - 1, -width, speed1);
                        move(index1, 0, speed1);
                        move(index1 + 1, width, speed1);
                    }
                }
                // kill touchmove and touchend event listeners until touchstart called again
                if (isMouseEvent(event)) {
                    element.removeEventListener('mousemove', events, false);
                    element.removeEventListener('mouseup', events, false);
                    element.removeEventListener('mouseleave', events, false);
                } else {
                    element.removeEventListener('touchmove', events, browser.passiveEvents ? {
                        passive: false
                    } : false);
                    element.removeEventListener('touchend', events, false);
                }
                runDragEnd(getPos(), slides[index1]);
            },
            transitionEnd: function(event) {
                var currentIndex = parseInt(event.target.getAttribute('data-index'), 10);
                if (currentIndex === index1) {
                    if (delay || options.autoRestart) restart();
                    runTransitionEnd(getPos(), slides[index1]);
                }
            }
        };
        // trigger setup
        setup();
        // start auto slideshow if applicable
        begin();
        // remove all event listeners
        function detachEvents() {
            if (browser.addEventListener) {
                // remove current event listeners
                element.removeEventListener('touchstart', events, browser.passiveEvents ? {
                    passive: true
                } : false);
                element.removeEventListener('mousedown', events, false);
                element.removeEventListener('webkitTransitionEnd', events, false);
                element.removeEventListener('msTransitionEnd', events, false);
                element.removeEventListener('oTransitionEnd', events, false);
                element.removeEventListener('otransitionend', events, false);
                element.removeEventListener('transitionend', events, false);
                root.removeEventListener('resize', events, false);
            } else {
                root.onresize = null;
            }
        }
        // add event listeners
        function attachEvents() {
            if (browser.addEventListener) {
                // set touchstart event on element
                if (browser.touch) {
                    element.addEventListener('touchstart', events, browser.passiveEvents ? {
                        passive: true
                    } : false);
                }
                if (options.draggable) {
                    element.addEventListener('mousedown', events, false);
                }
                if (browser.transitions) {
                    element.addEventListener('webkitTransitionEnd', events, false);
                    element.addEventListener('msTransitionEnd', events, false);
                    element.addEventListener('oTransitionEnd', events, false);
                    element.addEventListener('otransitionend', events, false);
                    element.addEventListener('transitionend', events, false);
                }
                // set resize event on window
                root.addEventListener('resize', events, false);
            } else {
                root.onresize = throttledSetup; // to play nice with old IE
            }
        }
        // clone nodes when there is only two slides
        function cloneNode(el) {
            var clone = el.cloneNode(true);
            element.appendChild(clone);
            // tag these slides as clones (to remove them on kill)
            clone.setAttribute('data-cloned', true);
            // Remove id from element
            clone.removeAttribute('id');
        }
        function setup(opts) {
            // Overwrite options if necessary
            if (opts != null) {
                for(var prop in opts){
                    options[prop] = opts[prop];
                }
            }
            // cache slides
            slides = element.children;
            length = slides.length;
            // slides length correction, minus cloned slides
            for(var i = 0; i < slides.length; i++){
                if (slides[i].getAttribute('data-cloned')) length--;
            }
            // set continuous to false if only one slide
            if (slides.length < 2) {
                options.continuous = false;
            }
            // special case if two slides
            if (browser.transitions && options.continuous && slides.length < 3) {
                cloneNode(slides[0]);
                cloneNode(slides[1]);
                slides = element.children;
            }
            // adjust style on rtl
            if ('right' === slideDir) {
                for(var j = 0; j < slides.length; j++){
                    slides[j].style.float = 'right';
                }
            }
            // create an array to store current positions of each slide
            slidePos = new Array(slides.length);
            // determine width of each slide
            width = container.getBoundingClientRect().width || container.offsetWidth;
            element.style.width = slides.length * width * 2 + 'px';
            // stack elements
            var pos = slides.length;
            while(pos--){
                var slide = slides[pos];
                slide.style.width = width + 'px';
                slide.setAttribute('data-index', pos);
                if (browser.transitions) {
                    slide.style[slideDir] = pos * -width + 'px';
                    move(pos, index1 > pos ? -width : index1 < pos ? width : 0, 0);
                }
            }
            // reposition elements before and after index
            if (options.continuous && browser.transitions) {
                move(circle(index1 - 1), -width, 0);
                move(circle(index1 + 1), width, 0);
            }
            if (!browser.transitions) {
                element.style[slideDir] = index1 * -width + 'px';
            }
            container.style.visibility = 'visible';
            // reinitialize events
            detachEvents();
            attachEvents();
        }
        function prev() {
            if (disabled) return;
            if (options.continuous) {
                slide1(index1 - 1);
            } else if (index1) {
                slide1(index1 - 1);
            }
        }
        function next() {
            if (disabled) return;
            if (options.continuous) {
                slide1(index1 + 1);
            } else if (index1 < slides.length - 1) {
                slide1(index1 + 1);
            }
        }
        function runCallback(pos, index, dir) {
            if (options.callback) {
                options.callback(pos, index, dir);
            }
        }
        function runTransitionEnd(pos, index) {
            if (options.transitionEnd) {
                options.transitionEnd(pos, index);
            }
        }
        function runDragStart(pos, index) {
            if (options.dragStart) {
                options.dragStart(pos, index);
            }
        }
        function runDragEnd(pos, index) {
            if (options.dragEnd) {
                options.dragEnd(pos, index);
            }
        }
        function circle(index) {
            // a simple positive modulo using slides.length
            return (slides.length + index % slides.length) % slides.length;
        }
        function getPos() {
            // Fix for the clone issue in the event of 2 slides
            var currentIndex = index1;
            if (currentIndex >= length) {
                currentIndex = currentIndex - length;
            }
            return currentIndex;
        }
        function slide1(to, slideSpeed) {
            // ensure to is of type 'number'
            to = typeof to !== 'number' ? parseInt(to, 10) : to;
            // do nothing if already on requested slide
            if (index1 === to) return;
            if (browser.transitions) {
                var direction = Math.abs(index1 - to) / (index1 - to); // 1: backward, -1: forward
                // get the actual position of the slide
                if (options.continuous) {
                    var natural_direction = direction;
                    direction = -slidePos[circle(to)] / width;
                    // if going forward but to < index, use to = slides.length + to
                    // if going backward but to > index, use to = -slides.length + to
                    if (direction !== natural_direction) {
                        to = -direction * slides.length + to;
                    }
                }
                var diff = Math.abs(index1 - to) - 1;
                // move all the slides between index and to in the right direction
                while(diff--){
                    move(circle((to > index1 ? to : index1) - diff - 1), width * direction, 0);
                }
                to = circle(to);
                move(index1, width * direction, slideSpeed || speed1);
                move(to, 0, slideSpeed || speed1);
                if (options.continuous) {
                    move(circle(to - direction), -(width * direction), 0);
                }
            } else {
                to = circle(to);
                animate(index1 * -width, to * -width, slideSpeed || speed1);
            // no fallback for a circular continuous if the browser does not accept transitions
            }
            index1 = to;
            offloadFn(function() {
                runCallback(getPos(), slides[index1], direction);
            });
        }
        function move(index, dist, speed) {
            translate(index, dist, speed);
            slidePos[index] = dist;
        }
        function translate(index, dist, speed) {
            var slide = slides[index];
            var style = slide && slide.style;
            if (!style) return;
            style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = speed + 'ms';
            style.webkitTransform = style.msTransform = style.MozTransform = style.OTransform = style.transform = 'translateX(' + dist + 'px)';
        }
        function animate(from, to, speed) {
            // if not an animation, just reposition
            if (!speed) {
                element.style[slideDir] = to + 'px';
                return;
            }
            var start = +new Date();
            var timer = setInterval(function() {
                var timeElap = +new Date() - start;
                if (timeElap > speed) {
                    element.style[slideDir] = to + 'px';
                    if (delay || options.autoRestart) restart();
                    runTransitionEnd(getPos(), slides[index1]);
                    clearInterval(timer);
                    return;
                }
                element.style[slideDir] = (to - from) * (Math.floor(timeElap / speed * 100) / 100) + from + 'px';
            }, 4);
        }
        function begin() {
            delay = options.auto || 0;
            if (delay) interval = setTimeout(next, delay);
        }
        function stop() {
            delay = 0;
            clearTimeout(interval);
        }
        function restart() {
            stop();
            begin();
        }
        function disable() {
            stop();
            disabled = true;
        }
        function enable() {
            disabled = false;
            restart();
        }
        function isMouseEvent(e) {
            return /^mouse/.test(e.type);
        }
        function kill() {
            // cancel slideshow
            stop();
            // remove inline styles
            container.style.visibility = '';
            // reset element
            element.style.width = '';
            element.style[slideDir] = '';
            // reset slides
            var pos = slides.length;
            while(pos--){
                if (browser.transitions) {
                    translate(pos, 0, 0);
                }
                var slide = slides[pos];
                // if the slide is tagged as clone, remove it
                if (slide.getAttribute('data-cloned')) {
                    var _parent = slide.parentElement;
                    _parent.removeChild(slide);
                }
                // remove styles
                slide.style.width = '';
                slide.style[slideDir] = '';
                slide.style.webkitTransitionDuration = slide.style.MozTransitionDuration = slide.style.msTransitionDuration = slide.style.OTransitionDuration = slide.style.transitionDuration = '';
                slide.style.webkitTransform = slide.style.msTransform = slide.style.MozTransform = slide.style.OTransform = '';
            // remove custom attributes (?)
            // slide.removeAttribute('data-index');
            }
            // remove all events
            detachEvents();
            // remove throttled function timeout
            throttledSetup.cancel();
        }
        // Expose the Swipe API
        return {
            // initialize
            setup: setup,
            // go to slide
            slide: function(to, speed) {
                stop();
                slide1(to, speed);
            },
            // move to previous
            prev: function() {
                stop();
                prev();
            },
            // move to next
            next: function() {
                stop();
                next();
            },
            // Restart slideshow
            restart: restart,
            // cancel slideshow
            stop: stop,
            // return current index position
            getPos: getPos,
            // disable slideshow
            disable: disable,
            // enable slideshow
            enable: enable,
            // return total number of slides
            getNumSlides: function() {
                return length;
            },
            // completely remove swipe
            kill: kill
        };
    }
    if (root.jQuery || root.Zepto) (function($) {
        $.fn.Swipe = function(params) {
            return this.each(function() {
                $(this).data('Swipe', new Swipe($(this)[0], params));
            });
        };
    })(root.jQuery || root.Zepto);
    return Swipe;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["iKiqL","bB7Pu"], "bB7Pu", "parcelRequire3c21")

//# sourceMappingURL=index.3d214d75.js.map
