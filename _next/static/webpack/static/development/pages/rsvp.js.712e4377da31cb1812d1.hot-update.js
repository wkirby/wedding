webpackHotUpdate("static/development/pages/rsvp.js",{

/***/ "./components/RsvpForm.js":
/*!********************************!*\
  !*** ./components/RsvpForm.js ***!
  \********************************/
/*! exports provided: RsvpForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsvpForm", function() { return RsvpForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _GuestFields__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./GuestFields */ "./components/GuestFields.js");
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SubmitButton */ "./components/SubmitButton.js");











var _jsxFileName = "/Users/wyattkirby/Dev/personal/wedding/components/RsvpForm.js";







var RSVP_URL = "https://2r2x4brgci.execute-api.us-east-1.amazonaws.com/dev/rsvp";
var GUEST_SCHEMA = yup__WEBPACK_IMPORTED_MODULE_15__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required("Please provide a name."),
  attending: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required("Please indicate whether you will be attending."),
  mealOption: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().when("attending", {
    is: "Will Attend",
    then: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required("Please indicate a meal selection."),
    otherwise: yup__WEBPACK_IMPORTED_MODULE_15__["string"]()
  }),
  email: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().email("Please provide a valid email."),
  phone: yup__WEBPACK_IMPORTED_MODULE_15__["string"]()
});
var GUESTS_SCHEMA = yup__WEBPACK_IMPORTED_MODULE_15__["object"]().shape({
  invitedGuest: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required(),
  guests: yup__WEBPACK_IMPORTED_MODULE_15__["array"]().of(GUEST_SCHEMA)
});
var RsvpForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(RsvpForm, _React$Component);

  function RsvpForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, RsvpForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(RsvpForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      error: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "formatGuest", function (name) {
      return {
        name: name,
        attending: "",
        mealOption: "",
        email: "",
        phone: ""
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(values, actions) {
        var afterSubmit, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                afterSubmit = _this.props.afterSubmit;

                _this.setState({
                  error: null
                });

                _context.prev = 2;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(RSVP_URL, values);

              case 5:
                res = _context.sent;

                if (afterSubmit) {
                  afterSubmit(res.data);
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

                if (_context.t0.response && _context.t0.response.status === 404) {
                  _this.setState({
                    error: "Sorry, we couldn't find any guests by that name."
                  });
                } else {
                  console.log(_context.t0);

                  _this.setState({
                    error: "Sorry, something went wrong. Please try again later!"
                  });
                }

              case 12:
                _context.prev = 12;
                actions.setSubmitting(false);
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9, 12, 15]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(RsvpForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          guestName = _this$props.guestName,
          partnerName = _this$props.partnerName,
          _this$props$plusOne = _this$props.plusOne,
          plusOne = _this$props$plusOne === void 0 ? false : _this$props$plusOne,
          props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["guestName", "partnerName", "plusOne"]);

      var error = this.state.error;
      var guests = [];

      if (guestName) {
        guests.push(this.formatGuest(guestName));
      }

      if (partnerName) {
        guests.push(this.formatGuest(partnerName));
      }

      if (plusOne) {
        guests.push(this.formatGuest("Plus One"));
      }

      if (guests.length < 1) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, null, error && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Alert"], {
        color: "warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, error), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_12__["Formik"], {
        validateOnBlur: false,
        falidateOnChange: false,
        initialValues: {
          invitedGuest: guestName,
          guests: guests
        },
        validationSchema: GUESTS_SCHEMA,
        onSubmit: this.onSubmit,
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Form"], {
            onSubmit: props.handleSubmit,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_12__["Field"], {
            type: "hidden",
            name: "invitedGuest",
            onChange: props.handleChange,
            onBlur: props.handleBlur,
            value: props.values.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          }), props.values.guests && props.values.guests.length > 0 && props.values.guests.map(function (guest, index) {
            return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Card"], {
              key: index,
              className: "mb-3",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__["CardBody"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }, props.values.guests.length > 1 && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__["CardTitle"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h5", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              },
              __self: this
            }, "Guest ", index + 1)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_GuestFields__WEBPACK_IMPORTED_MODULE_16__["GuestFields"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
              guest: guest,
              index: index
            }, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121
              },
              __self: this
            }))));
          }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_SubmitButton__WEBPACK_IMPORTED_MODULE_17__["SubmitButton"], {
            block: !props.isSubmitting,
            submitting: props.isSubmitting,
            label: "Send RSVP",
            submittingLabel: "Sending...",
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }));
    }
  }]);

  return RsvpForm;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

/***/ })

})
//# sourceMappingURL=rsvp.js.712e4377da31cb1812d1.hot-update.js.map