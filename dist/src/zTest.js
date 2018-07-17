'use strict';

var sdk = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var sdk, page, prevPage;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _swarmSdk.Swarm.create('https://api-stage.swarm.fund');

          case 2:
            sdk = _context.sent;
            _context.next = 5;
            return sdk.horizon.balances.getPage();

          case 5:
            page = _context.sent;

            console.log('Page', page.data);

            _context.next = 9;
            return page.fetchPrev();

          case 9:
            prevPage = _context.sent;

            console.log('Previous page', prevPage.data);

            //let page = await sdk.horizon.balances.getPage();
            return _context.abrupt('return', sdk);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sdk() {
    return _ref.apply(this, arguments);
  };
}();

var _swarmSdk = require('swarm-sdk');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

document.write('Quick Test');
console.log('app loaded');

console.log('starting...');

sdk();
//# sourceMappingURL=zTest.js.map