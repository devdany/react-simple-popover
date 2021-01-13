"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Popover = require("./Popover");

Object.keys(_Popover).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Popover[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Popover[key];
    }
  });
});
//# sourceMappingURL=index.js.map