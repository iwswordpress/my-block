/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\r\n * BLOCK: my-block\r\n *\r\n * Registering a basic block with Gutenberg.\r\n * Simple block, renders and saves the same content without any interactivity.\r\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,\n    BlockControls = _wp$blockEditor.BlockControls;\nvar _wp$components = wp.components,\n    Toolbar = _wp$components.Toolbar,\n    DropdownMenu = _wp$components.DropdownMenu;\n\n\nregisterBlockType(\"cgb/block-my-block\", {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __(\"CW my-block\"), // Block title.\n\ticon: \"shield\", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: \"common\", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__(\"CW my-block\"), __(\"CGB Example\"), __(\"create-guten-block\")],\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: \"string\",\n\t\t\tsource: \"html\",\n\t\t\tselector: \"p\"\n\t\t},\n\t\talignment: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"none\"\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className,\n\t\t    attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\t// Creates a <p class='wp-block-cgb-block-my-block'></p>.\n\t\t//console.log(attributes);\n\t\t// const { content } = attributes;\n\t\tvar onChangeContent = function onChangeContent(content) {\n\t\t\tsetAttributes({ content: content });\n\t\t};\n\t\tvar content = attributes.content,\n\t\t    alignment = attributes.alignment;\n\n\n\t\tvar onChangeAlignment = function onChangeAlignment(newAlignment) {\n\t\t\tsetAttributes({\n\t\t\t\talignment: newAlignment === undefined ? \"none\" : newAlignment\n\t\t\t});\n\t\t};\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\t{\n\t\t\t\t\tcontrols: [[{\n\t\t\t\t\t\ticon: \"wordpress\",\n\t\t\t\t\t\ttitle: __(\"JS TEST\", \"mytheme-blocks\"),\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn alert(true);\n\t\t\t\t\t\t},\n\t\t\t\t\t\tisActive: false\n\t\t\t\t\t}], [{\n\t\t\t\t\t\ticon: \"admin-generic\",\n\t\t\t\t\t\ttitle: __(\"ADMIN\", \"mytheme-blocks\"),\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn alert(\"ADMIN\");\n\t\t\t\t\t\t},\n\t\t\t\t\t\tisActive: false\n\t\t\t\t\t}]]\n\t\t\t\t},\n\t\t\t\twp.element.createElement(Toolbar, {\n\t\t\t\t\tisCollapsed: true,\n\t\t\t\t\tcontrols: [[{\n\t\t\t\t\t\ticon: \"admin-post\",\n\t\t\t\t\t\ttitle: __(\"POST\", \"mytheme-blocks\"),\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn alert(true);\n\t\t\t\t\t\t},\n\t\t\t\t\t\tisActive: false\n\t\t\t\t\t}], [{\n\t\t\t\t\t\ticon: \"admin-tools\",\n\t\t\t\t\t\ttitle: __(\"TOOLS\", \"mytheme-blocks\"),\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn alert(\"ADMIN\");\n\t\t\t\t\t\t},\n\t\t\t\t\t\tisActive: false\n\t\t\t\t\t}]]\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tToolbar,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(DropdownMenu, {\n\t\t\t\t\t\tcontrols: [[{\n\t\t\t\t\t\t\ticon: \"twitter\",\n\t\t\t\t\t\t\ttitle: __(\"TWITTER\", \"mytheme-blocks\"),\n\t\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\t\treturn alert(true);\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tisActive: false\n\t\t\t\t\t\t}], [{\n\t\t\t\t\t\t\ticon: \"facebook\",\n\t\t\t\t\t\t\ttitle: __(\"FACEBOOK\", \"mytheme-blocks\"),\n\t\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\t\treturn alert(\"ADMIN\");\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tisActive: false\n\t\t\t\t\t\t}]]\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(AlignmentToolbar, { value: alignment, onChange: onChangeAlignment })\n\t\t\t),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\ttagName: \"p\",\n\t\t\t\tclassName: className,\n\t\t\t\tonChange: onChangeContent,\n\t\t\t\tvalue: content,\n\t\t\t\tplaceholder: \"add your text here...\"\n\t\t\t\t// formattingControls={[\"bold\", \"italic\"]}\n\t\t\t})\n\t\t);\n\t},\n\n\t/**\r\n  * The save function defines the way in which the different attributes should be combined\r\n  * into the final markup, which is then serialized by Gutenberg into post_content.\r\n  *\r\n  * The \"save\" property must be specified and must be a valid function.\r\n  *\r\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\r\n  *\r\n  * @param {Object} props Props.\r\n  * @returns {Mixed} JSX Frontend HTML.\r\n  */\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\t\tvar content = attributes.content,\n\t\t    alignment = attributes.alignment;\n\n\n\t\treturn wp.element.createElement(RichText.Content, {\n\t\t\ttagName: \"p\",\n\t\t\tvalue: content,\n\t\t\tclassName: \"gutenberg-examples-align-\" + alignment\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCTE9DSzogbXktYmxvY2tcclxuICpcclxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cclxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXHJcbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgX3dwJGJsb2NrRWRpdG9yID0gd3AuYmxvY2tFZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkYmxvY2tFZGl0b3IuUmljaFRleHQsXG4gICAgQWxpZ25tZW50VG9vbGJhciA9IF93cCRibG9ja0VkaXRvci5BbGlnbm1lbnRUb29sYmFyLFxuICAgIEJsb2NrQ29udHJvbHMgPSBfd3AkYmxvY2tFZGl0b3IuQmxvY2tDb250cm9scztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgVG9vbGJhciA9IF93cCRjb21wb25lbnRzLlRvb2xiYXIsXG4gICAgRHJvcGRvd25NZW51ID0gX3dwJGNvbXBvbmVudHMuRHJvcGRvd25NZW51O1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiY2diL2Jsb2NrLW15LWJsb2NrXCIsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXyhcIkNXIG15LWJsb2NrXCIpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogXCJzaGllbGRcIiwgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogXCJjb21tb25cIiwgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oXCJDVyBteS1ibG9ja1wiKSwgX18oXCJDR0IgRXhhbXBsZVwiKSwgX18oXCJjcmVhdGUtZ3V0ZW4tYmxvY2tcIildLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y29udGVudDoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdHNvdXJjZTogXCJodG1sXCIsXG5cdFx0XHRzZWxlY3RvcjogXCJwXCJcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGRlZmF1bHQ6IFwibm9uZVwiXG5cdFx0fVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXHRcdC8vIENyZWF0ZXMgYSA8cCBjbGFzcz0nd3AtYmxvY2stY2diLWJsb2NrLW15LWJsb2NrJz48L3A+LlxuXHRcdC8vY29uc29sZS5sb2coYXR0cmlidXRlcyk7XG5cdFx0Ly8gY29uc3QgeyBjb250ZW50IH0gPSBhdHRyaWJ1dGVzO1xuXHRcdHZhciBvbkNoYW5nZUNvbnRlbnQgPSBmdW5jdGlvbiBvbkNoYW5nZUNvbnRlbnQoY29udGVudCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG5cdFx0fTtcblx0XHR2YXIgY29udGVudCA9IGF0dHJpYnV0ZXMuY29udGVudCxcblx0XHQgICAgYWxpZ25tZW50ID0gYXR0cmlidXRlcy5hbGlnbm1lbnQ7XG5cblxuXHRcdHZhciBvbkNoYW5nZUFsaWdubWVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlQWxpZ25tZW50KG5ld0FsaWdubWVudCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGFsaWdubWVudDogbmV3QWxpZ25tZW50ID09PSB1bmRlZmluZWQgPyBcIm5vbmVcIiA6IG5ld0FsaWdubWVudFxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEJsb2NrQ29udHJvbHMsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjb250cm9sczogW1t7XG5cdFx0XHRcdFx0XHRpY29uOiBcIndvcmRwcmVzc1wiLFxuXHRcdFx0XHRcdFx0dGl0bGU6IF9fKFwiSlMgVEVTVFwiLCBcIm15dGhlbWUtYmxvY2tzXCIpLFxuXHRcdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGFsZXJ0KHRydWUpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGlzQWN0aXZlOiBmYWxzZVxuXHRcdFx0XHRcdH1dLCBbe1xuXHRcdFx0XHRcdFx0aWNvbjogXCJhZG1pbi1nZW5lcmljXCIsXG5cdFx0XHRcdFx0XHR0aXRsZTogX18oXCJBRE1JTlwiLCBcIm15dGhlbWUtYmxvY2tzXCIpLFxuXHRcdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGFsZXJ0KFwiQURNSU5cIik7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlXG5cdFx0XHRcdFx0fV1dXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb29sYmFyLCB7XG5cdFx0XHRcdFx0aXNDb2xsYXBzZWQ6IHRydWUsXG5cdFx0XHRcdFx0Y29udHJvbHM6IFtbe1xuXHRcdFx0XHRcdFx0aWNvbjogXCJhZG1pbi1wb3N0XCIsXG5cdFx0XHRcdFx0XHR0aXRsZTogX18oXCJQT1NUXCIsIFwibXl0aGVtZS1ibG9ja3NcIiksXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYWxlcnQodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlXG5cdFx0XHRcdFx0fV0sIFt7XG5cdFx0XHRcdFx0XHRpY29uOiBcImFkbWluLXRvb2xzXCIsXG5cdFx0XHRcdFx0XHR0aXRsZTogX18oXCJUT09MU1wiLCBcIm15dGhlbWUtYmxvY2tzXCIpLFxuXHRcdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGFsZXJ0KFwiQURNSU5cIik7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlXG5cdFx0XHRcdFx0fV1dXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0VG9vbGJhcixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChEcm9wZG93bk1lbnUsIHtcblx0XHRcdFx0XHRcdGNvbnRyb2xzOiBbW3tcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJ0d2l0dGVyXCIsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBfXyhcIlRXSVRURVJcIiwgXCJteXRoZW1lLWJsb2Nrc1wiKSxcblx0XHRcdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gYWxlcnQodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGlzQWN0aXZlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fV0sIFt7XG5cdFx0XHRcdFx0XHRcdGljb246IFwiZmFjZWJvb2tcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IF9fKFwiRkFDRUJPT0tcIiwgXCJteXRoZW1lLWJsb2Nrc1wiKSxcblx0XHRcdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gYWxlcnQoXCJBRE1JTlwiKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XV1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQWxpZ25tZW50VG9vbGJhciwgeyB2YWx1ZTogYWxpZ25tZW50LCBvbkNoYW5nZTogb25DaGFuZ2VBbGlnbm1lbnQgfSlcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0dGFnTmFtZTogXCJwXCIsXG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50LFxuXHRcdFx0XHR2YWx1ZTogY29udGVudCxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiYWRkIHlvdXIgdGV4dCBoZXJlLi4uXCJcblx0XHRcdFx0Ly8gZm9ybWF0dGluZ0NvbnRyb2xzPXtbXCJib2xkXCIsIFwiaXRhbGljXCJdfVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxyXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcclxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cclxuICAqXHJcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cclxuICAqXHJcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXHJcbiAgKlxyXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxyXG4gICogQHJldHVybnMge01peGVkfSBKU1ggRnJvbnRlbmQgSFRNTC5cclxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXHRcdHZhciBjb250ZW50ID0gYXR0cmlidXRlcy5jb250ZW50LFxuXHRcdCAgICBhbGlnbm1lbnQgPSBhdHRyaWJ1dGVzLmFsaWdubWVudDtcblxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG5cdFx0XHR0YWdOYW1lOiBcInBcIixcblx0XHRcdHZhbHVlOiBjb250ZW50LFxuXHRcdFx0Y2xhc3NOYW1lOiBcImd1dGVuYmVyZy1leGFtcGxlcy1hbGlnbi1cIiArIGFsaWdubWVudFxuXHRcdH0pO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);