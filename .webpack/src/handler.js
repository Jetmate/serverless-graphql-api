(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boilerplate = __webpack_require__(2);

var _boilerplate2 = _interopRequireDefault(_boilerplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableName = 'artists';

exports.default = (0, _boilerplate2.default)(TableName);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (TableName) {
  var _this = this;

  var boilerplate = {};

  boilerplate.batchGet = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ids) {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return db.batchGet({ RequestItems: _defineProperty({}, TableName, { Keys: ids.map(function (id) {
                    return { id: id };
                  }) }) });

            case 2:
              result = _context.sent;


              console.log(result);
              return _context.abrupt('return', result[TableName]);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  boilerplate.batchPut = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(items) {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return db.batchWrite({ RequestItems: items.map(function (Item) {
                  return { PutRequest: { Item: Item } };
                })
              });

            case 2:
              result = _context2.sent;


              console.log(result);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  boilerplate.batchDel = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ids) {
      var result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return db.batchWrite({ RequestItems: ids.map(function (id) {
                  return { DeleteRequest: { Key: { id: id } } };
                })
              });

            case 2:
              result = _context3.sent;


              console.log(result);

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  boilerplate.getAll = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var result;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return db.scan({ TableName: TableName, limit: limit });

            case 2:
              result = _context4.sent;


              console.log(result);
              return _context4.abrupt('return', result.Items);

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this);
    }));

    return function () {
      return _ref4.apply(this, arguments);
    };
  }();

  boilerplate.get = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
      var result;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return db.get({ TableName: TableName, Key: { id: id } });

            case 2:
              result = _context5.sent;


              console.log(result);
              return _context5.abrupt('return', result.Item);

            case 5:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  boilerplate.put = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(item) {
      var result;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return db.put({
                TableName: TableName,
                Item: _extends({}, item)
              });

            case 2:
              result = _context6.sent;


              console.log(result);

            case 4:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();

  boilerplate.update = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id, update) {
      var _Object$keys$reduce, _Object$keys$reduce2, UpdateExpression, ExpressionAttributeValues, result;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _Object$keys$reduce = Object.keys(update).reduce(function (_ref8, val, i) {
                var _ref9 = _slicedToArray(_ref8, 2),
                    expression = _ref9[0],
                    values = _ref9[1];

                return [expression + (val + ' = :' + val) + (i === Object.keys(update).length - 1 ? '' : ', '), _extends({}, values, _defineProperty({}, ':' + val, update[val]))];
              }, ['SET ', {}]), _Object$keys$reduce2 = _slicedToArray(_Object$keys$reduce, 2), UpdateExpression = _Object$keys$reduce2[0], ExpressionAttributeValues = _Object$keys$reduce2[1];
              _context7.next = 3;
              return db.update({
                TableName: TableName,
                Key: { id: id },
                UpdateExpression: UpdateExpression,
                ExpressionAttributeValues: ExpressionAttributeValues
              });

            case 3:
              result = _context7.sent;


              console.log(result);

            case 5:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this);
    }));

    return function (_x7, _x8) {
      return _ref7.apply(this, arguments);
    };
  }();

  boilerplate.del = function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id) {
      var result;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return db.del({ TableName: TableName, Key: { id: id } });

            case 2:
              result = _context8.sent;


              console.log(result);

            case 4:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this);
    }));

    return function (_x9) {
      return _ref10.apply(this, arguments);
    };
  }();

  return boilerplate;
};

var _dynamo = __webpack_require__(14);

var db = _interopRequireWildcard(_dynamo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boilerplate = __webpack_require__(2);

var _boilerplate2 = _interopRequireDefault(_boilerplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableName = 'songs';

exports.default = (0, _boilerplate2.default)(TableName);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db, name) {
  var _Query, _Mutation;

  return {
    Query: (_Query = {}, _defineProperty(_Query, name + 's', function () {
      return db.getAll();
    }), _defineProperty(_Query, name, function (_, args) {
      return db.get(args.id);
    }), _Query),
    Mutation: (_Mutation = {}, _defineProperty(_Mutation, 'create' + capitalize(name), function (_, args) {
      return db.put(args);
    }), _defineProperty(_Mutation, 'update' + capitalize(name), function (_, args) {
      var id = args.id,
          item = _objectWithoutProperties(args, ['id']);

      db.update(id, item);
    }), _defineProperty(_Mutation, 'delete' + capitalize(name), function (_, args) {
      return db.delete(args.id);
    }), _Mutation)
  };
};

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

var _apolloServerLambda = __webpack_require__(8);

var _graphqlTools = __webpack_require__(9);

var _mergeGraphqlSchemas = __webpack_require__(10);

var _artist = __webpack_require__(11);

var _artist2 = _interopRequireDefault(_artist);

var _song = __webpack_require__(12);

var _song2 = _interopRequireDefault(_song);

var _artist3 = __webpack_require__(13);

var _artist4 = _interopRequireDefault(_artist3);

var _song3 = __webpack_require__(17);

var _song4 = _interopRequireDefault(_song3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Resolvers


// Types
var typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)([_artist2.default, _song2.default]);
var resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_artist4.default, _song4.default]);

var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});

exports.graphql = function (event, context, callback) {
  var callbackFilter = function callbackFilter(error, output) {
    var outputWithHeader = Object.assign({}, output, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    callback(error, outputWithHeader);
  };

  (0, _apolloServerLambda.graphqlLambda)({ schema: schema })(event, context, callbackFilter);
};

exports.graphiql = (0, _apolloServerLambda.graphiqlLambda)({
  endpointURL: '/graphql'
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-lambda");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("merge-graphql-schemas");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Artist {\n    id: ID!\n    first_name: String!\n    last_name: String!\n    songs: [Song]!\n  }\n\n  type Query {\n    artists: [Artist]!\n    artist(id: ID!): Artist\n  }\n\n  type Mutation {\n    createArtist(\n      first_name: String!\n      last_name: String!\n      songs: [Song]!\n    ): Artist\n    updateArtist(\n      id: ID!\n      first_name: String\n      last_name: String\n      songs: [ID]\n    ): Artist\n    deleteArtist(\n      id: ID!\n    ): Artist\n  }\n";


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Song {\n    id: ID!\n    title: String!\n    artist: Artist!\n    duration: Int!\n  }\n\n  type Query {\n    songs: [Song]!\n    song(id: ID!): Song\n  }\n\n  type Mutation {\n    createSong(\n      title: String!\n      artist: ID!\n      duration: Int!\n    ): Song\n    updateSong(\n      id: ID!\n      title: String\n      artist: ID\n      duration: Int\n    ): Song\n    deleteSong(\n      id: ID!\n    ): Song\n  }\n";


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _artists = __webpack_require__(1);

var _artists2 = _interopRequireDefault(_artists);

var _songs = __webpack_require__(3);

var _songs2 = _interopRequireDefault(_songs);

var _boilerplate = __webpack_require__(4);

var _boilerplate2 = _interopRequireDefault(_boilerplate);

var _uuid = __webpack_require__(16);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boiler = (0, _boilerplate2.default)(_artists2.default, 'artist');

exports.default = {
  Query: _extends({}, boiler.Query),
  Mutation: _extends({}, boiler.Mutation, {
    createArtist: function createArtist(_, args) {
      return _artists2.default.put(_extends({}, args, { id: (0, _uuid2.default)() }));
    }
  }),
  Artist: {
    songs: function songs(artist) {
      return _songs2.default.batchGet(artist.songs);
    }
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scan = scan;
exports.get = get;
exports.put = put;
exports.update = update;
exports.del = del;

var _awsSdk = __webpack_require__(15);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dynamoDb = new _awsSdk2.default.DynamoDB.DocumentClient(process.env.IS_OFFLINE ? {
  region: 'localhost',
  endpoint: 'http://localhost:8000'
} : {});

function scan(args) {
  return dynamoDb.scan(args).promise();
}

function get(args) {
  return dynamoDb.get(args).promise();
}

function put(args) {
  return dynamoDb.put(args).promise();
}

function update(args) {
  return dynamoDb.update(args).promise();
}

function del(args) {
  return dynamoDb.delete(args).promise();
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _songs = __webpack_require__(3);

var _songs2 = _interopRequireDefault(_songs);

var _artists = __webpack_require__(1);

var _artists2 = _interopRequireDefault(_artists);

var _boilerplate = __webpack_require__(4);

var _boilerplate2 = _interopRequireDefault(_boilerplate);

var _uuid = __webpack_require__(16);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boiler = (0, _boilerplate2.default)(_songs2.default, 'song');

exports.default = {
  Query: _extends({}, boiler.Query),
  Mutation: _extends({}, boiler.Mutation, {
    createSong: function createSong(_, args) {
      return _songs2.default.put(_extends({}, args, { id: (0, _uuid2.default)() }));
    }
  }),
  Song: {
    artist: function artist(song) {
      return _artists2.default.get(song.artist);
    }
  }
};


/***/ })
/******/ ])));