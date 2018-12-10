if (typeof self === "undefined") {
  (function() {
    var self = typeof global !== "undefined" 
      ? global 
      : Function("return this")();

    self.self = self;
  })();
}
