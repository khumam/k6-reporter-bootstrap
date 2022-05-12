(()=>{var e={481:e=>{e.exports=function e(t,n,i){function s(a,c){if(!n[a]){if(!t[a]){if(r)return r(a,!0);var o=new Error("Cannot find module '"+a+"'");throw o.code="MODULE_NOT_FOUND",o}var l=n[a]={exports:{}};t[a][0].call(l.exports,(function(e){return s(t[a][1][e]||e)}),l,l.exports,e,t,n,i)}return n[a].exports}for(var r=void 0,a=0;a<i.length;a++)s(i[a]);return s}({1:[function(e,t,n){"use strict";var i=e("fs"),s=e("path"),r=e("./utils"),a=!1,c=e("../package.json").version,o="locals",l=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],d=l.concat("cache"),u=/^\uFEFF/,h=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;function m(e,t){var s;if(t.some((function(t){return s=n.resolveInclude(e,t,!0),i.existsSync(s)})))return s}function v(e,t){var i,s=e.filename,r=arguments.length>1;if(e.cache){if(!s)throw new Error("cache option requires a filename");if(i=n.cache.get(s))return i;r||(t=f(s).toString().replace(u,""))}else if(!r){if(!s)throw new Error("Internal EJS error: no file name or template provided");t=f(s).toString().replace(u,"")}return i=n.compile(t,e),e.cache&&n.cache.set(s,i),i}function p(e,t,i){var s;if(!i){if("function"==typeof n.promiseImpl)return new n.promiseImpl((function(n,i){try{n(s=v(e)(t))}catch(e){i(e)}}));throw new Error("Please provide a callback function")}try{s=v(e)(t)}catch(e){return i(e)}i(null,s)}function f(e){return n.fileLoader(e)}function g(e,t){var s=r.shallowCopy(r.createNullProtoObjWherePossible(),t);if(s.filename=function(e,t){var s,r,a=t.views,c=/^[A-Za-z]+:\\|^\//.exec(e);if(c&&c.length)e=e.replace(/^\/*/,""),s=Array.isArray(t.root)?m(e,t.root):n.resolveInclude(e,t.root||"/",!0);else if(t.filename&&(r=n.resolveInclude(e,t.filename),i.existsSync(r)&&(s=r)),!s&&Array.isArray(a)&&(s=m(e,a)),!s&&"function"!=typeof t.includer)throw new Error('Could not find the include file "'+t.escapeFunction(e)+'"');return s}(e,s),"function"==typeof t.includer){var a=t.includer(e,s.filename);if(a&&(a.filename&&(s.filename=a.filename),a.template))return v(s,a.template)}return v(s)}function b(e,t,n,i,s){var r=t.split("\n"),a=Math.max(i-3,0),c=Math.min(r.length,i+3),o=s(n),l=r.slice(a,c).map((function(e,t){var n=t+a+1;return(n==i?" >> ":"    ")+n+"| "+e})).join("\n");throw e.path=o,e.message=(o||"ejs")+":"+i+"\n"+l+"\n\n"+e.message,e}function _(e){return e.replace(/;(\s*$)/,"$1")}function y(e,t){t=t||r.createNullProtoObjWherePossible();var i=r.createNullProtoObjWherePossible();this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",i.client=t.client||!1,i.escapeFunction=t.escape||t.escapeFunction||r.escapeXML,i.compileDebug=!1!==t.compileDebug,i.debug=!!t.debug,i.filename=t.filename,i.openDelimiter=t.openDelimiter||n.openDelimiter||"<",i.closeDelimiter=t.closeDelimiter||n.closeDelimiter||">",i.delimiter=t.delimiter||n.delimiter||"%",i.strict=t.strict||!1,i.context=t.context,i.cache=t.cache||!1,i.rmWhitespace=t.rmWhitespace,i.root=t.root,i.includer=t.includer,i.outputFunctionName=t.outputFunctionName,i.localsName=t.localsName||n.localsName||o,i.views=t.views,i.async=t.async,i.destructuredLocals=t.destructuredLocals,i.legacyInclude=void 0===t.legacyInclude||!!t.legacyInclude,i.strict?i._with=!1:i._with=void 0===t._with||t._with,this.opts=i,this.regex=this.createRegex()}n.cache=r.cache,n.fileLoader=i.readFileSync,n.localsName=o,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(e,t,n){var i=s.dirname,r=s.extname,a=(0,s.resolve)(n?t:i(t),e);return r(e)||(a+=".ejs"),a},n.compile=function(e,t){return t&&t.scope&&(a||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),a=!0),t.context||(t.context=t.scope),delete t.scope),new y(e,t).compile()},n.render=function(e,t,n){var i=t||r.createNullProtoObjWherePossible(),s=n||r.createNullProtoObjWherePossible();return 2==arguments.length&&r.shallowCopyFromList(s,i,l),v(s,e)(i)},n.renderFile=function(){var e,t,n,i=Array.prototype.slice.call(arguments),s=i.shift(),a={filename:s};return"function"==typeof arguments[arguments.length-1]&&(e=i.pop()),i.length?(t=i.shift(),i.length?r.shallowCopy(a,i.pop()):(t.settings&&(t.settings.views&&(a.views=t.settings.views),t.settings["view cache"]&&(a.cache=!0),(n=t.settings["view options"])&&r.shallowCopy(a,n)),r.shallowCopyFromList(a,t,d)),a.filename=s):t=r.createNullProtoObjWherePossible(),p(a,t,e)},n.Template=y,n.clearCache=function(){n.cache.reset()},y.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},y.prototype={createRegex:function(){var e="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",t=r.escapeRegExpChars(this.opts.delimiter),n=r.escapeRegExpChars(this.opts.openDelimiter),i=r.escapeRegExpChars(this.opts.closeDelimiter);return e=e.replace(/%/g,t).replace(/</g,n).replace(/>/g,i),new RegExp(e)},compile:function(){var e,t,n,i=this.opts,a="",c="",o=i.escapeFunction,l=i.filename?JSON.stringify(i.filename):"undefined";if(!this.source){if(this.generateSource(),a+='  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n',i.outputFunctionName){if(!h.test(i.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");a+="  var "+i.outputFunctionName+" = __append;\n"}if(i.localsName&&!h.test(i.localsName))throw new Error("localsName is not a valid JS identifier.");if(i.destructuredLocals&&i.destructuredLocals.length){for(var d="  var __locals = ("+i.localsName+" || {}),\n",u=0;u<i.destructuredLocals.length;u++){var m=i.destructuredLocals[u];if(!h.test(m))throw new Error("destructuredLocals["+u+"] is not a valid JS identifier.");u>0&&(d+=",\n  "),d+=m+" = __locals."+m}a+=d+";\n"}!1!==i._with&&(a+="  with ("+i.localsName+" || {}) {\n",c+="  }\n"),c+="  return __output;\n",this.source=a+this.source+c}e=i.compileDebug?"var __line = 1\n  , __lines = "+JSON.stringify(this.templateText)+"\n  , __filename = "+l+";\ntry {\n"+this.source+"} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n":this.source,i.client&&(e="escapeFn = escapeFn || "+o.toString()+";\n"+e,i.compileDebug&&(e="rethrow = rethrow || "+b.toString()+";\n"+e)),i.strict&&(e='"use strict";\n'+e),i.debug&&console.log(e),i.compileDebug&&i.filename&&(e=e+"\n//# sourceURL="+l+"\n");try{if(i.async)try{n=new Function("return (async function(){}).constructor;")()}catch(e){throw e instanceof SyntaxError?new Error("This environment does not support async/await"):e}else n=Function;t=new n(i.localsName+", escapeFn, include, rethrow",e)}catch(e){throw e instanceof SyntaxError&&(i.filename&&(e.message+=" in "+i.filename),e.message+=" while compiling ejs\n\n",e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n",e.message+="https://github.com/RyanZim/EJS-Lint",i.async||(e.message+="\n",e.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),e}var v=i.client?t:function(e){return t.apply(i.context,[e||r.createNullProtoObjWherePossible(),o,function(t,n){var s=r.shallowCopy(r.createNullProtoObjWherePossible(),e);return n&&(s=r.shallowCopy(s,n)),g(t,i)(s)},b])};if(i.filename&&"function"==typeof Object.defineProperty){var p=i.filename,f=s.basename(p,s.extname(p));try{Object.defineProperty(v,"name",{value:f,writable:!1,enumerable:!1,configurable:!0})}catch(e){}}return v},generateSource:function(){this.opts.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var e=this,t=this.parseTemplateText(),n=this.opts.delimiter,i=this.opts.openDelimiter,s=this.opts.closeDelimiter;t&&t.length&&t.forEach((function(r,a){var c;if(0===r.indexOf(i+n)&&0!==r.indexOf(i+n+n)&&(c=t[a+2])!=n+s&&c!="-"+n+s&&c!="_"+n+s)throw new Error('Could not find matching close tag for "'+r+'".');e.scanLine(r)}))},parseTemplateText:function(){for(var e,t=this.templateText,n=this.regex,i=n.exec(t),s=[];i;)0!==(e=i.index)&&(s.push(t.substring(0,e)),t=t.slice(e)),s.push(i[0]),t=t.slice(i[0].length),i=n.exec(t);return t&&s.push(t),s},_addOutput:function(e){if(this.truncate&&(e=e.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!e)return e;e=(e=(e=(e=e.replace(/\\/g,"\\\\")).replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace(/"/g,'\\"'),this.source+='    ; __append("'+e+'")\n'},scanLine:function(e){var t,n=this.opts.delimiter,i=this.opts.openDelimiter,s=this.opts.closeDelimiter;switch(t=e.split("\n").length-1,e){case i+n:case i+n+"_":this.mode=y.modes.EVAL;break;case i+n+"=":this.mode=y.modes.ESCAPED;break;case i+n+"-":this.mode=y.modes.RAW;break;case i+n+"#":this.mode=y.modes.COMMENT;break;case i+n+n:this.mode=y.modes.LITERAL,this.source+='    ; __append("'+e.replace(i+n+n,i+n)+'")\n';break;case n+n+s:this.mode=y.modes.LITERAL,this.source+='    ; __append("'+e.replace(n+n+s,n+s)+'")\n';break;case n+s:case"-"+n+s:case"_"+n+s:this.mode==y.modes.LITERAL&&this._addOutput(e),this.mode=null,this.truncate=0===e.indexOf("-")||0===e.indexOf("_");break;default:if(this.mode){switch(this.mode){case y.modes.EVAL:case y.modes.ESCAPED:case y.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf("\n")&&(e+="\n")}switch(this.mode){case y.modes.EVAL:this.source+="    ; "+e+"\n";break;case y.modes.ESCAPED:this.source+="    ; __append(escapeFn("+_(e)+"))\n";break;case y.modes.RAW:this.source+="    ; __append("+_(e)+")\n";break;case y.modes.COMMENT:break;case y.modes.LITERAL:this._addOutput(e)}}else this._addOutput(e)}this.opts.compileDebug&&t&&(this.currentLine+=t,this.source+="    ; __line = "+this.currentLine+"\n")}},n.escapeXML=r.escapeXML,n.__express=n.renderFile,n.VERSION=c,n.name="ejs","undefined"!=typeof window&&(window.ejs=n)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(e,t,n){"use strict";var i=/[|\\{}()[\]^$+*?.]/g,s=Object.prototype.hasOwnProperty,r=function(e,t){return s.apply(e,[t])};n.escapeRegExpChars=function(e){return e?String(e).replace(i,"\\$&"):""};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function o(e){return a[e]||e}n.escapeXML=function(e){return null==e?"":String(e).replace(c,o)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'},n.shallowCopy=function(e,t){if(t=t||{},null!=e)for(var n in t)r(t,n)&&"__proto__"!==n&&"constructor"!==n&&(e[n]=t[n]);return e},n.shallowCopyFromList=function(e,t,n){if(n=n||[],t=t||{},null!=e)for(var i=0;i<n.length;i++){var s=n[i];if(void 0!==t[s]){if(!r(t,s))continue;if("__proto__"===s||"constructor"===s)continue;e[s]=t[s]}}return e},n.cache={_data:{},set:function(e,t){this._data[e]=t},get:function(e){return this._data[e]},remove:function(e){delete this._data[e]},reset:function(){this._data={}}},n.hyphenToCamel=function(e){return e.replace(/-[a-z]/g,(function(e){return e[1].toUpperCase()}))},n.createNullProtoObjWherePossible="function"==typeof Object.create?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}},{}],3:[function(e,t,n){},{}],4:[function(e,t,n){(function(e){function t(e,t){for(var n=0,i=e.length-1;i>=0;i--){var s=e[i];"."===s?e.splice(i,1):".."===s?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}n.resolve=function(){for(var n="",s=!1,r=arguments.length-1;r>=-1&&!s;r--){var a=r>=0?arguments[r]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,s="/"===a.charAt(0))}return(s?"/":"")+(n=t(i(n.split("/"),(function(e){return!!e})),!s).join("/"))||"."},n.normalize=function(e){var r=n.isAbsolute(e),a="/"===s(e,-1);return(e=t(i(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(i(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},n.relative=function(e,t){function i(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var s=i(e.split("/")),r=i(t.split("/")),a=Math.min(s.length,r.length),c=a,o=0;o<a;o++)if(s[o]!==r[o]){c=o;break}var l=[];for(o=c;o<s.length;o++)l.push("..");return(l=l.concat(r.slice(c))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,s=!0,r=e.length-1;r>=1;--r)if(47===(t=e.charCodeAt(r))){if(!s){i=r;break}}else s=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},n.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,i=-1,s=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!s){n=t+1;break}}else-1===i&&(s=!1,i=t+1);return-1===i?"":e.slice(n,i)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,i=-1,s=!0,r=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===i&&(s=!1,i=a+1),46===c?-1===t?t=a:1!==r&&(r=1):-1!==t&&(r=-1);else if(!s){n=a+1;break}}return-1===t||-1===i||0===r||1===r&&t===i-1&&t===n+1?"":e.slice(t,i)};var s=function(e,t,n){return e.substr(t,n)}}).call(this,e("_process"))},{_process:5}],5:[function(e,t,n){var i,s,r=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function o(e){if(i===setTimeout)return setTimeout(e,0);if((i===a||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:a}catch(e){i=a}try{s="function"==typeof clearTimeout?clearTimeout:c}catch(e){s=c}}();var l,d=[],u=!1,h=-1;function m(){u&&l&&(u=!1,l.length?d=l.concat(d):h=-1,d.length&&v())}function v(){if(!u){var e=o(m);u=!0;for(var t=d.length;t;){for(l=d,d=[];++h<t;)l&&l[h].run();h=-1,t=d.length}l=null,u=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===c||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new p(e,t)),1!==d.length||u||o(v)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}],6:[function(e,t,n){t.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.7",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.7","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha"}}},{}]},{},[1])(1)},548:e=>{"use strict";e.exports='<!doctype html>\n<html lang="en">\n\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">\n\n  <title>K6 Load Test: <%= title %></title>\n</head>\n\n<body>\n  <div class="container py-5">\n    <div class="row mb-3">\n      <div class="col-12">\n        <h2>K6 Load Test : <%= title %></h2>\n      </div>\n    </div>\n    <div class="row mb-3">\n      <div class="col-4">\n        <div class="card" style="min-height: 130px;">\n          <div class="card-body text-center">\n            <h5 class="card-title">Total Request</h5>\n            <h1><% if(data.metrics.http_reqs) { %> <%= data.metrics.http_reqs.values.count %> <% } %></h1>\n            <h1><% if(data.metrics.grpc_reqs) { %> <%= data.metrics.grpc_reqs.values.count %> <% } %> </h1>\n          </div>\n        </div>\n      </div>\n      <div class="col-4">\n        <div class="card" style="min-height: 130px;">\n          <div class="card-body text-center">\n            <h5 class="card-title">Breached Thresholds</h5>\n            <h1><%= thresholdFailures %></h1>\n          </div>\n        </div>\n      </div>\n      <div class="col-4">\n        <div class="card <% if(thresholdFailures > 0) { %> bg-danger text-white <% } %>" style="min-height: 130px;">\n          <div class="card-body text-center">\n            <h5 class="card-title">Failed Checks</h5>\n            <h1><%= checkFailures %></h1>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-12">\n        <ul class="nav nav-tabs" id="myTab" role="tablist">\n          <li class="nav-item" role="presentation">\n            <button class="nav-link active" id="request-metrics-tab" data-bs-toggle="tab" data-bs-target="#request-metrics"\n              type="button" role="tab" aria-controls="request-metrics" aria-selected="true">Request Metrics</button>\n          </li>\n          <li class="nav-item" role="presentation">\n            <button class="nav-link" id="other-stats-tab" data-bs-toggle="tab" data-bs-target="#other-stats" type="button"\n              role="tab" aria-controls="other-stats" aria-selected="false">Other Stats</button>\n          </li>\n          <li class="nav-item" role="presentation">\n            <button class="nav-link" id="checks-and-group-tab" data-bs-toggle="tab" data-bs-target="#checks-and-groups"\n              type="button" role="tab" aria-controls="checks-and-group" aria-selected="false">Checks & Groups</button>\n          </li>\n        </ul>\n\n        <div class="tab-content mt-3">\n          <div class="tab-pane active" id="request-metrics" role="tabpanel" aria-labelledby="request-metrics-tab">\n            <div class="row">\n              <div class="col-12 mb-3">\n                <div class="table-responsive">\n                  <table class="table table-striped">\n                    <thead>\n                      <th></th>\n                      <th>Count</th>\n                      <th>Rate</th>\n                      <th>Average</th>\n                      <th>Minimum</th>\n                      <th>Median</th>\n                      <th>Maximum</th>\n                      <th>90th Percentile</th>\n                      <th>95th Percentile</th>\n                    </thead>\n                    <tbody>\n                      <% function checkFailed(metric, valName) { \n                          if(!metric.thresholds) return \'\' \n                          for(thres in metric.thresholds) {\n                            if(thres.includes(valName)) { \n                              if(!metric.thresholds[thres].ok) return \'bg-danger text-white\' \n                              return \'bg-success\' \n                            } \n                          } \n                        } \n                        \n                        for(metricName of standardMetrics) { \n                          if(!data.metrics[metricName]) { continue } \n                          var metric=data.metrics[metricName] %>\n                        <tr>\n                          <td><b><%= metricName %></b></td>\n                          <% if(metric.values.count) { %> <td class="<%= checkFailed(metric, \'count\') %>"><%= metric.values.count.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                          <% if(metric.values.rate) { %> <td class="<%= checkFailed(metric, \'rate\') %>"><%= metric.values.rate.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                          <% if(metric.values.avg) { %> <td class="<%= checkFailed(metric, \'avg\') %>"><%= metric.values.avg.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                          <% if(metric.values.max) { %> <td class="<%= checkFailed(metric, \'max\') %>"><%= metric.values.max.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                          <% if(metric.values.med) { %> <td class="<%= checkFailed(metric, \'med\') %>"><%= metric.values.med.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                          <% if(metric.values.min) { %> <td class="<%= checkFailed(metric, \'min\') %>"><%= metric.values.min.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                          <% if(metric.values[\'p(90)\']) { %> <td class="<%= checkFailed(metric, \'p(90)\') %>"><%= metric.values[\'p(90)\'].toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                          <% if(metric.values[\'p(95)\']) { %> <td class="<%= checkFailed(metric, \'p(95)\') %>"><%= metric.values[\'p(95)\'].toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                        </tr>\n                      <% } %>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n\n              <% first=true \n                var sortedMetrics={} \n                Object.keys(data.metrics).sort().forEach(function(k) {\n                  sortedMetrics[k]=data.metrics[k] \n                }); \n                \n                for(metricName in sortedMetrics) { \n                  if(standardMetrics.includes(metricName) || otherMetrics.includes(metricName)) { continue } \n                  var metric=sortedMetrics[metricName] %>\n\n              <div class="col-md-12 mb-3">\n                <% if(first) { first=false %> <h2>Custom Metrics</h2> <% } %>\n                <div class="table-responsive">\n                  <table class="table striped">\n                    <% if(first) { first=false %>\n                    <thead>\n                      <th></th>\n                      <th>Count</th>\n                      <th>Rate</th>\n                      <th>Average</th>\n                      <th>Maximum</th>\n                      <th>Median</th>\n                      <th>Minimum</th>\n                      <th>90th Percentile</th>\n                      <th>95th Percentile</th>\n                    </thead>\n                    <% } %>\n                    <tbody>\n                      <tr>\n                        <td><b><%= metricName %></b></td>\n                        <% if(metric.values.count) { %> <td class="<%= checkFailed(metric, \'count\') %>"><%= metric.values.count.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                        <% if(metric.values.rate) { %> <td class="<%= checkFailed(metric, \'rate\') %>"><%= metric.values.rate.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                        <% if(metric.values.avg) { %> <td class="<%= checkFailed(metric, \'avg\') %>"><%= metric.values.avg.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                        <% if(metric.values.max) { %> <td class="<%= checkFailed(metric, \'max\') %>"><%= metric.values.max.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                        <% if(metric.values.med) { %> <td class="<%= checkFailed(metric, \'med\') %>"><%= metric.values.med.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                        <% if(metric.values.min) { %> <td class="<%= checkFailed(metric, \'min\') %>"><%= metric.values.min.toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                        <% if(metric.values[\'p(90)\']) { %> <td class="<%= checkFailed(metric, \'p(90)\') %>"><%= metric.values[\'p(90)\'].toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                        <% if(metric.values[\'p(95)\']) { %> <td class="<%= checkFailed(metric, \'p(95)\') %>"><%= metric.values[\'p(95)\'].toFixed(2) %></td> <% } else { %> <td>-</td> <% } %>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <% } %>\n              <div class="col-12">\n                <span class="text-muted"><b>Note</b> All times are in milli-seconds</span>\n              </div>\n            </div>\n          </div>\n          <div class="tab-pane" id="other-stats" role="tabpanel" aria-labelledby="other-stats-tab">\n            <div class="row">\n              <% if (data.metrics.checks) { %>\n              <div class="col-4 mb-3">\n                <div class="card text-center">\n                  <div class="card-header">\n                    Checks\n                  </div>\n                  <div class="card-body">\n                    <div class="d-flex justify-content-between">\n                      <div>Passed</div>\n                      <div class="text-right"><%= data.metrics.checks.values.passes %></div>\n                    </div>\n                    <div class="d-flex justify-content-between">\n                      <div>Failed</div>\n                      <div class="text-right"><%= data.metrics.checks.values.fails %></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <% } %>\n              <% if (data.metrics.iterations) { %>\n              <div class="col-4 mb-3">\n                <div class="card text-center">\n                  <div class="card-header">\n                    Iterations\n                  </div>\n                  <div class="card-body">\n                    <div class="d-flex justify-content-between">\n                      <div>Total</div>\n                      <div class="text-right"><%= data.metrics.iterations.values.count %></div>\n                    </div>\n                    <div class="d-flex justify-content-between">\n                      <div>Rate</div>\n                      <div class="text-right"><%= data.metrics.iterations.values.rate.toFixed(2) %>/s</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <% } %>\n              <div class="col-4 mb-3">\n                <div class="card text-center">\n                  <div class="card-header">\n                    Virtual Users\n                  </div>\n                  <div class="card-body">\n                    <div class="d-flex justify-content-between">\n                      <div>Min</div>\n                      <div class="text-right"><%= data.metrics.vus ? data.metrics.vus.values.min : 1 %></div>\n                    </div>\n                    <div class="d-flex justify-content-between">\n                      <div>Max</div>\n                      <div class="text-right"><%= data.metrics.vus ? data.metrics.vus.values.max : 1 %></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-4 mb-3">\n                <div class="card text-center">\n                  <div class="card-header">\n                    Requests\n                  </div>\n                  <div class="card-body">\n                    <div class="d-flex justify-content-between">\n                      <div>Total</div>\n                      <div class="text-right"><%= data.metrics.http_reqs ? data.metrics.http_reqs.values.count : \'-\' %></div>\n                    </div>\n                    <div class="d-flex justify-content-between">\n                      <div>Rate</div>\n                      <div class="text-right"><%= data.metrics.http_reqs ? data.metrics.http_reqs.values.rate.toFixed(2) : \'-\' %>/s</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-4 mb-3">\n                <div class="card text-center">\n                  <div class="card-header">\n                    Data Received\n                  </div>\n                  <div class="card-body">\n                    <div class="d-flex justify-content-between">\n                      <div>Total</div>\n                      <div class="text-right"><%= (data.metrics.data_received.values.count/1000000).toFixed(2) %> MB</div>\n                    </div>\n                    <div class="d-flex justify-content-between">\n                      <div>Rate</div>\n                      <div class="text-right"><%= (data.metrics.data_received.values.rate/1000000).toFixed(2) %> mB/s</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-4 mb-3">\n                <div class="card text-center">\n                  <div class="card-header">\n                    Data Sent\n                  </div>\n                  <div class="card-body">\n                    <div class="d-flex justify-content-between">\n                      <div>Total</div>\n                      <div class="text-right"><%= (data.metrics.data_sent.values.count/1000000).toFixed(2) %> MB</div>\n                    </div>\n                    <div class="d-flex justify-content-between">\n                      <div>Rate</div>\n                      <div class="text-right"><%= (data.metrics.data_sent.values.rate/1000000).toFixed(2) %> mB/s</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="tab-pane" id="checks-and-groups" role="tabpanel" aria-labelledby="checks-and-group-tab">\n            <div class="row">\n              <% for(group of data.root_group.groups) { %>\n              <div class="col-12 mb-3">\n                <h2 class="mb-3">Group - <%= group.name %></h2>\n                <div class="table-responsive">\n                  <table class="table table-striped">\n                    <thead>\n                      <th>Check</th>\n                      <th class="text-right">Passes</th>\n                      <th class="text-right">Failures</th>\n                    </thead>\n                    <tbody>\n                      <% for(check of group.checks) { %>\n                      <tr class="<% if(check.fails > 0) { %> bg-danger <% } %>">\n                        <td class="<% if(check.fails > 0) { %> text-white <% } %>"><%= check.name %></td>\n                        <td class="text-right <% if(check.fails > 0) { %> text-white <% } %>"><%= check.passes %></td>\n                        <td class="text-right <% if(check.fails > 0) { %> text-white <% } %>"><%= check.fails %></td>\n                      </tr>\n                      <% } %>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <% } %>\n              <div class="col-12 mb-3">\n                <h2 class="mb-3">Other Checks</h2>\n                <div class="table-responsive">\n                  <table class="table table-striped">\n                    <thead>\n                      <th>Check</th>\n                      <th class="text-right">Passes</th>\n                      <th class="text-right">Failures</th>\n                    </thead>\n                    <tbody>\n                      <% for(check of data.root_group.checks) { %>\n                      <tr class="<% if(check.fails > 0) { %> bg-danger <% } %>">\n                        <td class="<% if(check.fails > 0) { %> text-white <% } %>"><%= check.name %></td>\n                        <td class="text-right <% if(check.fails > 0) { %> text-white <% } %>"><%= check.passes %></td>\n                        <td class="text-right <% if(check.fails > 0) { %> text-white <% } %>"><%= check.fails %></td>\n                      </tr>\n                      <% } %>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"><\/script>\n</body>\n\n</html>'}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i),n.d(i,{htmlReport:()=>r});var e=n(481),t=n.n(e),s=n(548);function r(e,n={}){n.title||(n.title=(new Date).toISOString().slice(0,16).replace("T"," ")),n.hasOwnProperty("debug")||(n.debug=!1),console.log("[k6-reporter v2.3.0] Generating HTML summary report");let i=[];n.debug&&console.log(JSON.stringify(e,null,2));let r=0,c=0;for(let t in e.metrics)if(i.push(t),e.metrics[t].thresholds){c++;let n=e.metrics[t].thresholds;for(let e in n)n[e].ok||r++}let o=0,l=0;if(e.root_group.checks){let{passes:t,fails:n}=a(e.root_group.checks);o+=n,l+=t}for(let t of e.root_group.groups)if(t.checks){let{passes:e,fails:n}=a(t.checks);o+=n,l+=e}return t().render(s,{data:e,title:n.title,standardMetrics:["grpc_req_duration","http_req_duration","http_req_waiting","http_req_connecting","http_req_tls_handshaking","http_req_sending","http_req_receiving","http_req_blocked","iteration_duration","group_duration","ws_connecting","ws_msgs_received","ws_msgs_sent","ws_sessions"],otherMetrics:["iterations","data_sent","checks","http_reqs","data_received","vus_max","vus","http_req_failed","http_req_duration{expected_response:true}"],thresholdFailures:r,thresholdCount:c,checkFailures:o,checkPasses:l,version:"2.3.0"})}function a(e){let t=0,n=0;for(let i of e)t+=parseInt(i.passes),n+=parseInt(i.fails);return{passes:t,fails:n}}})();var s=exports;for(var r in i)s[r]=i[r];i.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();