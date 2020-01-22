(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\nh1\n{\n    margin: 0 auto; \n    margin-top: 5%;\n    width: 350px;\n    color: black;\n}\n\nh3\n{\n    font-style: italic;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    text-decoration: underline;\n}\n\ntable {\n    border: 2px solid black;\n    border-spacing: 5px , 2px;\n    width: 90%;\n    border-collapse: separate;    \n       \n}\n\ntr   {padding: 50px;}\n\nbutton {\n    background-color: #807f7f;\n    color: white;\n    border: 2px solid #555555;\n    cursor: pointer;\n    \n  }\n\nbutton:hover {\n      background-color: #000000c0 ;\n      color: white;\n  }\n\n/* --------------------------------------------------------------------------------------------*/\n\n.login-body {\n    /* background-image: url(\"assets/ce-travel.jpg\");   */\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n    background-position: center;\n    background-size: 100%; \n    \n  }\n\ninput[type=text]:focus,input[type=email]:focus, input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n}\n\n.comment-table\n{\n    background-color: rgb(201, 248, 250);\n    width: 90%;\n    padding-bottom: 1%;\n}\n\n.registerbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    opacity: 0.9;\n}\n\n.login-button {\n    position: absolute;\n    right: 50px;\n    background-color: #4CAF50;\n    color: white;\n    border: 2px solid #555555;\n    cursor: pointer;\n    width: 100px;\n    height: 25px;\n    \n}\n\n.chageProfile-button {\n    position: absolute;\n    right: 200px;\n    background-color: #4CAF50;\n    color: white;\n    border: 2px solid #555555;\n    cursor: pointer;\n    width: 100px;\n    height: 25px;\n    \n}\n\n.deletebtn {\n    background-color: rgb(175, 34, 34);\n    color: white;\n    padding: 16px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    opacity: 0.9;\n}\n\n.normal-form\n{\n    margin-left: 5%;\n    margin-top: 5%;\n    width: 250px;\n}\n\n.login-form\n{\n    margin: 0 auto; \n    margin-top: 10%;\n    width: 250px;\n}\n\n.link-login-style\n{\n    \n    color: dodgerblue;\n}\n\n.login100-form-btn {\n    font-family: Montserrat-Bold;\n    font-size: 15px;\n    line-height: 1.5;\n    color: #fff;\n    text-transform: uppercase;\n  \n    width: 100%;\n    height: 50px;\n    border-radius: 25px;\n    background: #57b846;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 25px;\n    transition: all 0.4s;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTs7QUFFOUU7O0lBRUksY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIscURBQXFEO0lBQ3JELDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLHlCQUF5Qjs7QUFFN0I7O0FBQ0EsTUFBTSxhQUFhLENBQUM7O0FBRXBCO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTs7RUFFakI7O0FBQ0E7TUFDSSw0QkFBNEI7TUFDNUIsWUFBWTtFQUNoQjs7QUFJRixnR0FBZ0c7O0FBRWhHO0lBQ0kscURBQXFEO0lBQ3JELDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLHFCQUFxQjs7RUFFdkI7O0FBRUY7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7O0FBRWhCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7O0FBRWhCOztBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5Qjs7SUFFekIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBS25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFLZixvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbmgxXG57XG4gICAgbWFyZ2luOiAwIGF1dG87IFxuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5oM1xue1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbnRhYmxlIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItc3BhY2luZzogNXB4ICwgMnB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTsgICAgXG4gICAgICAgXG59XG50ciAgIHtwYWRkaW5nOiA1MHB4O31cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA3ZjdmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1NTU1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbiAgfVxuICBidXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGMwIDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5sb2dpbi1ib2R5IHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvY2UtdHJhdmVsLmpwZ1wiKTsgICAqL1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTsgXG4gICAgXG4gIH1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxpbnB1dFt0eXBlPWVtYWlsXTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5jb21tZW50LXRhYmxlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMjQ4LCAyNTApO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZy1ib3R0b206IDElO1xufVxuLnJlZ2lzdGVyYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDAuOTtcbn1cbi5sb2dpbi1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1NTU1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIFxufVxuLmNoYWdlUHJvZmlsZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTU1NTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBcbn1cbi5kZWxldGVidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDM0LCAzNCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMC45O1xufVxuXG4ubm9ybWFsLWZvcm1cbntcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4ubG9naW4tZm9ybVxue1xuICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4ubGluay1sb2dpbi1zdHlsZVxue1xuICAgIFxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG4ge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogIzU3Yjg0NjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB9XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Fax\6.Semestar\Web\Projekat\AirBnb_Web1\AirBnbAngular\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map