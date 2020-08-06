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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\r\n * BLOCK: my-block\r\n *\r\n * Registering a basic block with Gutenberg.\r\n * Simple block, renders and saves the same content without any interactivity.\r\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,\n    BlockControls = _wp$blockEditor.BlockControls;\nvar _wp$components = wp.components,\n    Toolbar = _wp$components.Toolbar,\n    DropdownMenu = _wp$components.DropdownMenu;\nvar Fragment = wp.element.Fragment;\n\n\nregisterBlockType(\"cgb/block-my-block\", {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __(\"CRAIG - FIRST\"), // Block title.\n\ticon: wp.element.createElement(\n\t\t\"svg\",\n\t\t{\n\t\t\txmlns: \"http://www.w3.org/2000/svg\",\n\t\t\twidth: \"24\",\n\t\t\theight: \"24\",\n\t\t\tviewBox: \"0 0 24 24\"\n\t\t},\n\t\twp.element.createElement(\"path\", { d: \"M0 0h24v24H0z\", fill: \"none\" }),\n\t\twp.element.createElement(\"path\", { d: \"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\" })\n\t), // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: \"common\", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__(\"CW my-block\"), __(\"CGB Example\"), __(\"create-guten-block\")],\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: \"string\",\n\t\t\tsource: \"html\",\n\t\t\tselector: \"p\"\n\t\t},\n\t\talignment: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"none\"\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className,\n\t\t    attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\t// Creates a <p class='wp-block-cgb-block-my-block'></p>.\n\t\t//console.log(attributes);\n\t\t// const { content } = attributes;\n\t\tvar onChangeContent = function onChangeContent(content) {\n\t\t\tsetAttributes({ content: content });\n\t\t};\n\t\tvar content = attributes.content,\n\t\t    alignment = attributes.alignment;\n\n\n\t\tvar onChangeAlignment = function onChangeAlignment(newAlignment) {\n\t\t\tsetAttributes({\n\t\t\t\talignment: newAlignment === undefined ? \"none\" : newAlignment\n\t\t\t});\n\t\t};\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\t{\n\t\t\t\t\tcontrols: [[{\n\t\t\t\t\t\ticon: \"editor-alignright\",\n\t\t\t\t\t\ttitle: __(\"JS TEST\", \"mytheme-blocks\"),\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn onChangeAlignment(\"right\");\n\t\t\t\t\t\t},\n\t\t\t\t\t\tisActive: false\n\t\t\t\t\t}], [{\n\t\t\t\t\t\ticon: \"admin-generic\",\n\t\t\t\t\t\ttitle: __(\"ADMIN\", \"mytheme-blocks\"),\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn alert(\"ADMIN\");\n\t\t\t\t\t\t},\n\t\t\t\t\t\tisActive: false\n\t\t\t\t\t}]]\n\t\t\t\t},\n\t\t\t\twp.element.createElement(Toolbar, {\n\t\t\t\t\tisCollapsed: true,\n\t\t\t\t\tcontrols: [[{\n\t\t\t\t\t\ticon: \"admin-post\",\n\t\t\t\t\t\ttitle: __(\"POST\", \"mytheme-blocks\"),\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn alert(true);\n\t\t\t\t\t\t},\n\t\t\t\t\t\tisActive: false\n\t\t\t\t\t}], [{\n\t\t\t\t\t\ticon: \"admin-tools\",\n\t\t\t\t\t\ttitle: __(\"TOOLS\", \"mytheme-blocks\"),\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn alert(\"ADMIN\");\n\t\t\t\t\t\t},\n\t\t\t\t\t\tisActive: false\n\t\t\t\t\t}]]\n\t\t\t\t}),\n\t\t\t\tcontent && content.length > 0 && wp.element.createElement(\n\t\t\t\t\tToolbar,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(DropdownMenu, {\n\t\t\t\t\t\tcontrols: [[{\n\t\t\t\t\t\t\ticon: \"twitter\",\n\t\t\t\t\t\t\ttitle: __(\"TWITTER\", \"mytheme-blocks\"),\n\t\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\t\treturn alert(true);\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tisActive: false\n\t\t\t\t\t\t}], [{\n\t\t\t\t\t\t\ticon: \"facebook\",\n\t\t\t\t\t\t\ttitle: __(\"FACEBOOK\", \"mytheme-blocks\"),\n\t\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\t\treturn alert(\"ADMIN\");\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tisActive: false\n\t\t\t\t\t\t}]]\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(AlignmentToolbar, { value: alignment, onChange: onChangeAlignment })\n\t\t\t),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\ttagName: \"p\",\n\t\t\t\tclassName: className,\n\t\t\t\tonChange: onChangeContent,\n\t\t\t\tvalue: content,\n\t\t\t\tstyle: { textAlign: alignment },\n\t\t\t\tplaceholder: \"add your text here...\"\n\t\t\t\t// formattingControls={[\"bold\", \"italic\"]}\n\t\t\t})\n\t\t);\n\t},\n\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\t\tvar content = attributes.content,\n\t\t    alignment = attributes.alignment;\n\n\n\t\treturn wp.element.createElement(RichText.Content, {\n\t\t\ttagName: \"p\",\n\t\t\tvalue: content,\n\t\t\tstyle: { textAlign: alignment }\n\t\t\t// className={`gutenberg-examples-align-${alignment}`}\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCTE9DSzogbXktYmxvY2tcclxuICpcclxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cclxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXHJcbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgX3dwJGJsb2NrRWRpdG9yID0gd3AuYmxvY2tFZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkYmxvY2tFZGl0b3IuUmljaFRleHQsXG4gICAgQWxpZ25tZW50VG9vbGJhciA9IF93cCRibG9ja0VkaXRvci5BbGlnbm1lbnRUb29sYmFyLFxuICAgIEJsb2NrQ29udHJvbHMgPSBfd3AkYmxvY2tFZGl0b3IuQmxvY2tDb250cm9scztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgVG9vbGJhciA9IF93cCRjb21wb25lbnRzLlRvb2xiYXIsXG4gICAgRHJvcGRvd25NZW51ID0gX3dwJGNvbXBvbmVudHMuRHJvcGRvd25NZW51O1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcblxuXG5yZWdpc3RlckJsb2NrVHlwZShcImNnYi9ibG9jay1teS1ibG9ja1wiLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oXCJDUkFJRyAtIEZJUlNUXCIpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFwic3ZnXCIsXG5cdFx0e1xuXHRcdFx0eG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcblx0XHRcdHdpZHRoOiBcIjI0XCIsXG5cdFx0XHRoZWlnaHQ6IFwiMjRcIixcblx0XHRcdHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcblx0XHR9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0wIDBoMjR2MjRIMHpcIiwgZmlsbDogXCJub25lXCIgfSksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6XCIgfSlcblx0KSwgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogXCJjb21tb25cIiwgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oXCJDVyBteS1ibG9ja1wiKSwgX18oXCJDR0IgRXhhbXBsZVwiKSwgX18oXCJjcmVhdGUtZ3V0ZW4tYmxvY2tcIildLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y29udGVudDoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdHNvdXJjZTogXCJodG1sXCIsXG5cdFx0XHRzZWxlY3RvcjogXCJwXCJcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGRlZmF1bHQ6IFwibm9uZVwiXG5cdFx0fVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXHRcdC8vIENyZWF0ZXMgYSA8cCBjbGFzcz0nd3AtYmxvY2stY2diLWJsb2NrLW15LWJsb2NrJz48L3A+LlxuXHRcdC8vY29uc29sZS5sb2coYXR0cmlidXRlcyk7XG5cdFx0Ly8gY29uc3QgeyBjb250ZW50IH0gPSBhdHRyaWJ1dGVzO1xuXHRcdHZhciBvbkNoYW5nZUNvbnRlbnQgPSBmdW5jdGlvbiBvbkNoYW5nZUNvbnRlbnQoY29udGVudCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG5cdFx0fTtcblx0XHR2YXIgY29udGVudCA9IGF0dHJpYnV0ZXMuY29udGVudCxcblx0XHQgICAgYWxpZ25tZW50ID0gYXR0cmlidXRlcy5hbGlnbm1lbnQ7XG5cblxuXHRcdHZhciBvbkNoYW5nZUFsaWdubWVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlQWxpZ25tZW50KG5ld0FsaWdubWVudCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGFsaWdubWVudDogbmV3QWxpZ25tZW50ID09PSB1bmRlZmluZWQgPyBcIm5vbmVcIiA6IG5ld0FsaWdubWVudFxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRCbG9ja0NvbnRyb2xzLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29udHJvbHM6IFtbe1xuXHRcdFx0XHRcdFx0aWNvbjogXCJlZGl0b3ItYWxpZ25yaWdodFwiLFxuXHRcdFx0XHRcdFx0dGl0bGU6IF9fKFwiSlMgVEVTVFwiLCBcIm15dGhlbWUtYmxvY2tzXCIpLFxuXHRcdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG9uQ2hhbmdlQWxpZ25tZW50KFwicmlnaHRcIik7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlXG5cdFx0XHRcdFx0fV0sIFt7XG5cdFx0XHRcdFx0XHRpY29uOiBcImFkbWluLWdlbmVyaWNcIixcblx0XHRcdFx0XHRcdHRpdGxlOiBfXyhcIkFETUlOXCIsIFwibXl0aGVtZS1ibG9ja3NcIiksXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYWxlcnQoXCJBRE1JTlwiKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRpc0FjdGl2ZTogZmFsc2Vcblx0XHRcdFx0XHR9XV1cblx0XHRcdFx0fSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRvb2xiYXIsIHtcblx0XHRcdFx0XHRpc0NvbGxhcHNlZDogdHJ1ZSxcblx0XHRcdFx0XHRjb250cm9sczogW1t7XG5cdFx0XHRcdFx0XHRpY29uOiBcImFkbWluLXBvc3RcIixcblx0XHRcdFx0XHRcdHRpdGxlOiBfXyhcIlBPU1RcIiwgXCJteXRoZW1lLWJsb2Nrc1wiKSxcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBhbGVydCh0cnVlKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRpc0FjdGl2ZTogZmFsc2Vcblx0XHRcdFx0XHR9XSwgW3tcblx0XHRcdFx0XHRcdGljb246IFwiYWRtaW4tdG9vbHNcIixcblx0XHRcdFx0XHRcdHRpdGxlOiBfXyhcIlRPT0xTXCIsIFwibXl0aGVtZS1ibG9ja3NcIiksXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYWxlcnQoXCJBRE1JTlwiKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRpc0FjdGl2ZTogZmFsc2Vcblx0XHRcdFx0XHR9XV1cblx0XHRcdFx0fSksXG5cdFx0XHRcdGNvbnRlbnQgJiYgY29udGVudC5sZW5ndGggPiAwICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRUb29sYmFyLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KERyb3Bkb3duTWVudSwge1xuXHRcdFx0XHRcdFx0Y29udHJvbHM6IFtbe1xuXHRcdFx0XHRcdFx0XHRpY29uOiBcInR3aXR0ZXJcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IF9fKFwiVFdJVFRFUlwiLCBcIm15dGhlbWUtYmxvY2tzXCIpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBhbGVydCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XSwgW3tcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJmYWNlYm9va1wiLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogX18oXCJGQUNFQk9PS1wiLCBcIm15dGhlbWUtYmxvY2tzXCIpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBhbGVydChcIkFETUlOXCIpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRpc0FjdGl2ZTogZmFsc2Vcblx0XHRcdFx0XHRcdH1dXVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChBbGlnbm1lbnRUb29sYmFyLCB7IHZhbHVlOiBhbGlnbm1lbnQsIG9uQ2hhbmdlOiBvbkNoYW5nZUFsaWdubWVudCB9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHR0YWdOYW1lOiBcInBcIixcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUNvbnRlbnQsXG5cdFx0XHRcdHZhbHVlOiBjb250ZW50LFxuXHRcdFx0XHRzdHlsZTogeyB0ZXh0QWxpZ246IGFsaWdubWVudCB9LFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogXCJhZGQgeW91ciB0ZXh0IGhlcmUuLi5cIlxuXHRcdFx0XHQvLyBmb3JtYXR0aW5nQ29udHJvbHM9e1tcImJvbGRcIiwgXCJpdGFsaWNcIl19XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblx0XHR2YXIgY29udGVudCA9IGF0dHJpYnV0ZXMuY29udGVudCxcblx0XHQgICAgYWxpZ25tZW50ID0gYXR0cmlidXRlcy5hbGlnbm1lbnQ7XG5cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwge1xuXHRcdFx0dGFnTmFtZTogXCJwXCIsXG5cdFx0XHR2YWx1ZTogY29udGVudCxcblx0XHRcdHN0eWxlOiB7IHRleHRBbGlnbjogYWxpZ25tZW50IH1cblx0XHRcdC8vIGNsYXNzTmFtZT17YGd1dGVuYmVyZy1leGFtcGxlcy1hbGlnbi0ke2FsaWdubWVudH1gfVxuXHRcdH0pO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

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