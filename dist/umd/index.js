(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Popover"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Popover"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Popover);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Popover) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Popover).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Popover[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map