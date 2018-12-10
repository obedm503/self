if (typeof self === "undefined") {
  (function() {
    var g;
    if (typeof global !== "undefined") {
      g = global;
    } else {
      g = Function("return this")();
    }
    g.self = g;
  })();
}
