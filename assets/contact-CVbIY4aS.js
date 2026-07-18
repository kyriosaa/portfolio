(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();function Js(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hs={exports:{}},xi={},ms={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd;function rg(){if(dd)return se;dd=1;var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),k=Symbol.iterator;function P(E){return E===null||typeof E!="object"?null:(E=k&&E[k]||E["@@iterator"],typeof E=="function"?E:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,N={};function D(E,b,te){this.props=E,this.context=b,this.refs=N,this.updater=te||L}D.prototype.isReactComponent={},D.prototype.setState=function(E,b){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,b,"setState")},D.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function q(){}q.prototype=D.prototype;function O(E,b,te){this.props=E,this.context=b,this.refs=N,this.updater=te||L}var A=O.prototype=new q;A.constructor=O,T(A,D.prototype),A.isPureReactComponent=!0;var Q=Array.isArray,re=Object.prototype.hasOwnProperty,U={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function ue(E,b,te){var ie,oe={},ae=null,ge=null;if(b!=null)for(ie in b.ref!==void 0&&(ge=b.ref),b.key!==void 0&&(ae=""+b.key),b)re.call(b,ie)&&!G.hasOwnProperty(ie)&&(oe[ie]=b[ie]);var fe=arguments.length-2;if(fe===1)oe.children=te;else if(1<fe){for(var he=Array(fe),Ge=0;Ge<fe;Ge++)he[Ge]=arguments[Ge+2];oe.children=he}if(E&&E.defaultProps)for(ie in fe=E.defaultProps,fe)oe[ie]===void 0&&(oe[ie]=fe[ie]);return{$$typeof:r,type:E,key:ae,ref:ge,props:oe,_owner:U.current}}function ke(E,b){return{$$typeof:r,type:E.type,key:b,ref:E.ref,props:E.props,_owner:E._owner}}function ce(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function Je(E){var b={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(te){return b[te]})}var He=/\/+/g;function we(E,b){return typeof E=="object"&&E!==null&&E.key!=null?Je(""+E.key):b.toString(36)}function Qe(E,b,te,ie,oe){var ae=typeof E;(ae==="undefined"||ae==="boolean")&&(E=null);var ge=!1;if(E===null)ge=!0;else switch(ae){case"string":case"number":ge=!0;break;case"object":switch(E.$$typeof){case r:case o:ge=!0}}if(ge)return ge=E,oe=oe(ge),E=ie===""?"."+we(ge,0):ie,Q(oe)?(te="",E!=null&&(te=E.replace(He,"$&/")+"/"),Qe(oe,b,te,"",function(Ge){return Ge})):oe!=null&&(ce(oe)&&(oe=ke(oe,te+(!oe.key||ge&&ge.key===oe.key?"":(""+oe.key).replace(He,"$&/")+"/")+E)),b.push(oe)),1;if(ge=0,ie=ie===""?".":ie+":",Q(E))for(var fe=0;fe<E.length;fe++){ae=E[fe];var he=ie+we(ae,fe);ge+=Qe(ae,b,te,he,oe)}else if(he=P(E),typeof he=="function")for(E=he.call(E),fe=0;!(ae=E.next()).done;)ae=ae.value,he=ie+we(ae,fe++),ge+=Qe(ae,b,te,he,oe);else if(ae==="object")throw b=String(E),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ge}function Xe(E,b,te){if(E==null)return E;var ie=[],oe=0;return Qe(E,ie,"","",function(ae){return b.call(te,ae,oe++)}),ie}function $e(E){if(E._status===-1){var b=E._result;b=b(),b.then(function(te){(E._status===0||E._status===-1)&&(E._status=1,E._result=te)},function(te){(E._status===0||E._status===-1)&&(E._status=2,E._result=te)}),E._status===-1&&(E._status=0,E._result=b)}if(E._status===1)return E._result.default;throw E._result}var de={current:null},$={transition:null},V={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:$,ReactCurrentOwner:U};function F(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:Xe,forEach:function(E,b,te){Xe(E,function(){b.apply(this,arguments)},te)},count:function(E){var b=0;return Xe(E,function(){b++}),b},toArray:function(E){return Xe(E,function(b){return b})||[]},only:function(E){if(!ce(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},se.Component=D,se.Fragment=a,se.Profiler=c,se.PureComponent=O,se.StrictMode=s,se.Suspense=h,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,se.act=F,se.cloneElement=function(E,b,te){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var ie=T({},E.props),oe=E.key,ae=E.ref,ge=E._owner;if(b!=null){if(b.ref!==void 0&&(ae=b.ref,ge=U.current),b.key!==void 0&&(oe=""+b.key),E.type&&E.type.defaultProps)var fe=E.type.defaultProps;for(he in b)re.call(b,he)&&!G.hasOwnProperty(he)&&(ie[he]=b[he]===void 0&&fe!==void 0?fe[he]:b[he])}var he=arguments.length-2;if(he===1)ie.children=te;else if(1<he){fe=Array(he);for(var Ge=0;Ge<he;Ge++)fe[Ge]=arguments[Ge+2];ie.children=fe}return{$$typeof:r,type:E.type,key:oe,ref:ae,props:ie,_owner:ge}},se.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:f,_context:E},E.Consumer=E},se.createElement=ue,se.createFactory=function(E){var b=ue.bind(null,E);return b.type=E,b},se.createRef=function(){return{current:null}},se.forwardRef=function(E){return{$$typeof:g,render:E}},se.isValidElement=ce,se.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:$e}},se.memo=function(E,b){return{$$typeof:y,type:E,compare:b===void 0?null:b}},se.startTransition=function(E){var b=$.transition;$.transition={};try{E()}finally{$.transition=b}},se.unstable_act=F,se.useCallback=function(E,b){return de.current.useCallback(E,b)},se.useContext=function(E){return de.current.useContext(E)},se.useDebugValue=function(){},se.useDeferredValue=function(E){return de.current.useDeferredValue(E)},se.useEffect=function(E,b){return de.current.useEffect(E,b)},se.useId=function(){return de.current.useId()},se.useImperativeHandle=function(E,b,te){return de.current.useImperativeHandle(E,b,te)},se.useInsertionEffect=function(E,b){return de.current.useInsertionEffect(E,b)},se.useLayoutEffect=function(E,b){return de.current.useLayoutEffect(E,b)},se.useMemo=function(E,b){return de.current.useMemo(E,b)},se.useReducer=function(E,b,te){return de.current.useReducer(E,b,te)},se.useRef=function(E){return de.current.useRef(E)},se.useState=function(E){return de.current.useState(E)},se.useSyncExternalStore=function(E,b,te){return de.current.useSyncExternalStore(E,b,te)},se.useTransition=function(){return de.current.useTransition()},se.version="18.3.1",se}var pd;function Xs(){return pd||(pd=1,ms.exports=rg()),ms.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function ig(){if(hd)return xi;hd=1;var r=Xs(),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(g,h,y){var x,k={},P=null,L=null;y!==void 0&&(P=""+y),h.key!==void 0&&(P=""+h.key),h.ref!==void 0&&(L=h.ref);for(x in h)s.call(h,x)&&!f.hasOwnProperty(x)&&(k[x]=h[x]);if(g&&g.defaultProps)for(x in h=g.defaultProps,h)k[x]===void 0&&(k[x]=h[x]);return{$$typeof:o,type:g,key:P,ref:L,props:k,_owner:c.current}}return xi.Fragment=a,xi.jsx=p,xi.jsxs=p,xi}var md;function og(){return md||(md=1,hs.exports=ig()),hs.exports}var S=og(),X=Xs();const ze=Js(X);var Wo={},gs={exports:{}},ct={},vs={exports:{}},ys={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function ag(){return gd||(gd=1,(function(r){function o($,V){var F=$.length;$.push(V);e:for(;0<F;){var E=F-1>>>1,b=$[E];if(0<c(b,V))$[E]=V,$[F]=b,F=E;else break e}}function a($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var V=$[0],F=$.pop();if(F!==V){$[0]=F;e:for(var E=0,b=$.length,te=b>>>1;E<te;){var ie=2*(E+1)-1,oe=$[ie],ae=ie+1,ge=$[ae];if(0>c(oe,F))ae<b&&0>c(ge,oe)?($[E]=ge,$[ae]=F,E=ae):($[E]=oe,$[ie]=F,E=ie);else if(ae<b&&0>c(ge,F))$[E]=ge,$[ae]=F,E=ae;else break e}}return V}function c($,V){var F=$.sortIndex-V.sortIndex;return F!==0?F:$.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var p=Date,g=p.now();r.unstable_now=function(){return p.now()-g}}var h=[],y=[],x=1,k=null,P=3,L=!1,T=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var V=a(y);V!==null;){if(V.callback===null)s(y);else if(V.startTime<=$)s(y),V.sortIndex=V.expirationTime,o(h,V);else break;V=a(y)}}function Q($){if(N=!1,A($),!T)if(a(h)!==null)T=!0,$e(re);else{var V=a(y);V!==null&&de(Q,V.startTime-$)}}function re($,V){T=!1,N&&(N=!1,q(ue),ue=-1),L=!0;var F=P;try{for(A(V),k=a(h);k!==null&&(!(k.expirationTime>V)||$&&!Je());){var E=k.callback;if(typeof E=="function"){k.callback=null,P=k.priorityLevel;var b=E(k.expirationTime<=V);V=r.unstable_now(),typeof b=="function"?k.callback=b:k===a(h)&&s(h),A(V)}else s(h);k=a(h)}if(k!==null)var te=!0;else{var ie=a(y);ie!==null&&de(Q,ie.startTime-V),te=!1}return te}finally{k=null,P=F,L=!1}}var U=!1,G=null,ue=-1,ke=5,ce=-1;function Je(){return!(r.unstable_now()-ce<ke)}function He(){if(G!==null){var $=r.unstable_now();ce=$;var V=!0;try{V=G(!0,$)}finally{V?we():(U=!1,G=null)}}else U=!1}var we;if(typeof O=="function")we=function(){O(He)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Xe=Qe.port2;Qe.port1.onmessage=He,we=function(){Xe.postMessage(null)}}else we=function(){D(He,0)};function $e($){G=$,U||(U=!0,we())}function de($,V){ue=D(function(){$(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function($){$.callback=null},r.unstable_continueExecution=function(){T||L||(T=!0,$e(re))},r.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<$?Math.floor(1e3/$):5},r.unstable_getCurrentPriorityLevel=function(){return P},r.unstable_getFirstCallbackNode=function(){return a(h)},r.unstable_next=function($){switch(P){case 1:case 2:case 3:var V=3;break;default:V=P}var F=P;P=V;try{return $()}finally{P=F}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function($,V){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var F=P;P=$;try{return V()}finally{P=F}},r.unstable_scheduleCallback=function($,V,F){var E=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?E+F:E):F=E,$){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=F+b,$={id:x++,callback:V,priorityLevel:$,startTime:F,expirationTime:b,sortIndex:-1},F>E?($.sortIndex=F,o(y,$),a(h)===null&&$===a(y)&&(N?(q(ue),ue=-1):N=!0,de(Q,F-E))):($.sortIndex=b,o(h,$),T||L||(T=!0,$e(re))),$},r.unstable_shouldYield=Je,r.unstable_wrapCallback=function($){var V=P;return function(){var F=P;P=V;try{return $.apply(this,arguments)}finally{P=F}}}})(ys)),ys}var vd;function lg(){return vd||(vd=1,vs.exports=ag()),vs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function sg(){if(yd)return ct;yd=1;var r=Xs(),o=lg();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function f(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(c[e]=t,e=0;e<t.length;e++)s.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},k={};function P(e){return h.call(k,e)?!0:h.call(x,e)?!1:y.test(e)?k[e]=!0:(x[e]=!0,!1)}function L(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,t,n,i){if(t===null||typeof t>"u"||L(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function N(e,t,n,i,l,u,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=d}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new N(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q,O);D[t]=new N(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q,O);D[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q,O);D[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function A(e,t,n,i){var l=D.hasOwnProperty(t)?D[t]:null;(l!==null?l.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T(t,n,l,i)&&(n=null),i||l===null?P(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,i=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Q=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),U=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),ke=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),Je=Symbol.for("react.context"),He=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),Xe=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),$=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,E;function b(e){if(E===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var te=!1;function ie(e,t){if(!e||te)return"";te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var i=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){i=j}e.call(t.prototype)}else{try{throw Error()}catch(j){i=j}e()}}catch(j){if(j&&i&&typeof j.stack=="string"){for(var l=j.stack.split(`
`),u=i.stack.split(`
`),d=l.length-1,m=u.length-1;1<=d&&0<=m&&l[d]!==u[m];)m--;for(;1<=d&&0<=m;d--,m--)if(l[d]!==u[m]){if(d!==1||m!==1)do if(d--,m--,0>m||l[d]!==u[m]){var v=`
`+l[d].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=d&&0<=m);break}}}finally{te=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?b(e):""}function oe(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case U:return"Portal";case ke:return"Profiler";case ue:return"StrictMode";case we:return"Suspense";case Qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Je:return(e.displayName||"Context")+".Consumer";case ce:return(e._context.displayName||"Context")+".Provider";case He:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xe:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(t);case 8:return t===ue?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function he(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ge(e){var t=he(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){i=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){e._valueTracker||(e._valueTracker=Ge(e))}function Et(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=he(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sa(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yu(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=fe(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xu(e,t){t=t.checked,t!=null&&A(e,"checked",t,!1)}function ka(e,t){xu(e,t);var n=fe(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ea(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ea(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ea(e,t,n){(t!=="number"||Oi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function Xn(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+fe(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function _a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(Rr(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fe(n)}}function ku(e,t){var n=fe(t.value),i=fe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Eu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_u(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ri,Cu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ri=Ri||document.createElement("div"),Ri.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lh=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){lh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function Pu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,l=ju(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,l):e[n]=l}}var sh=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ja(e,t){if(t){if(sh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function Ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Na=null,Zn=null,er=null;function bu(e){if(e=ii(e)){if(typeof Na!="function")throw Error(a(280));var t=e.stateNode;t&&(t=ro(t),Na(e.stateNode,e.type,t))}}function Tu(e){Zn?er?er.push(e):er=[e]:Zn=e}function Nu(){if(Zn){var e=Zn,t=er;if(er=Zn=null,bu(e),t)for(e=0;e<t.length;e++)bu(t[e])}}function zu(e,t){return e(t)}function Iu(){}var za=!1;function Ou(e,t,n){if(za)return e(t,n);za=!0;try{return zu(e,t,n)}finally{za=!1,(Zn!==null||er!==null)&&(Iu(),Nu())}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var i=ro(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Ia=!1;if(g)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Ia=!1}function uh(e,t,n,i,l,u,d,m,v){var j=Array.prototype.slice.call(arguments,3);try{t.apply(n,j)}catch(I){this.onError(I)}}var $r=!1,Li=null,Mi=!1,Oa=null,ch={onError:function(e){$r=!0,Li=e}};function fh(e,t,n,i,l,u,d,m,v){$r=!1,Li=null,uh.apply(ch,arguments)}function dh(e,t,n,i,l,u,d,m,v){if(fh.apply(this,arguments),$r){if($r){var j=Li;$r=!1,Li=null}else throw Error(a(198));Mi||(Mi=!0,Oa=j)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lu(e){if(Pn(e)!==e)throw Error(a(188))}function ph(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return Lu(l),e;if(u===i)return Lu(l),t;u=u.sibling}throw Error(a(188))}if(n.return!==i.return)n=l,i=u;else{for(var d=!1,m=l.child;m;){if(m===n){d=!0,n=l,i=u;break}if(m===i){d=!0,i=l,n=u;break}m=m.sibling}if(!d){for(m=u.child;m;){if(m===n){d=!0,n=u,i=l;break}if(m===i){d=!0,i=u,n=l;break}m=m.sibling}if(!d)throw Error(a(189))}}if(n.alternate!==i)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function Mu(e){return e=ph(e),e!==null?Du(e):null}function Du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Du(e);if(t!==null)return t;e=e.sibling}return null}var Au=o.unstable_scheduleCallback,$u=o.unstable_cancelCallback,hh=o.unstable_shouldYield,mh=o.unstable_requestPaint,Oe=o.unstable_now,gh=o.unstable_getCurrentPriorityLevel,Ra=o.unstable_ImmediatePriority,Fu=o.unstable_UserBlockingPriority,Di=o.unstable_NormalPriority,vh=o.unstable_LowPriority,Bu=o.unstable_IdlePriority,Ai=null,Ot=null;function yh(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:Sh,xh=Math.log,wh=Math.LN2;function Sh(e){return e>>>=0,e===0?32:31-(xh(e)/wh|0)|0}var $i=64,Fi=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,u=e.pingedLanes,d=n&268435455;if(d!==0){var m=d&~l;m!==0?i=Fr(m):(u&=d,u!==0&&(i=Fr(u)))}else d=n&~l,d!==0?i=Fr(d):u!==0&&(i=Fr(u));if(i===0)return 0;if(t!==0&&t!==i&&(t&l)===0&&(l=i&-i,u=t&-t,l>=u||l===16&&(u&4194240)!==0))return t;if((i&4)!==0&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-_t(t),l=1<<n,i|=e[n],t&=~l;return i}function kh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eh(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-_t(u),m=1<<d,v=l[d];v===-1?((m&n)===0||(m&i)!==0)&&(l[d]=kh(m,t)):v<=t&&(e.expiredLanes|=m),u&=~m}}function La(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uu(){var e=$i;return $i<<=1,($i&4194240)===0&&($i=64),e}function Ma(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function _h(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-_t(n),u=1<<l;t[l]=0,i[l]=-1,e[l]=-1,n&=~u}}function Da(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-_t(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}var xe=0;function Wu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Vu,Aa,Hu,Qu,Gu,$a=!1,Ui=[],en=null,tn=null,nn=null,Ur=new Map,Wr=new Map,rn=[],Ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yu(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function Vr(e,t,n,i,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[l]},t!==null&&(t=ii(t),t!==null&&Aa(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function jh(e,t,n,i,l){switch(t){case"focusin":return en=Vr(en,e,t,n,i,l),!0;case"dragenter":return tn=Vr(tn,e,t,n,i,l),!0;case"mouseover":return nn=Vr(nn,e,t,n,i,l),!0;case"pointerover":var u=l.pointerId;return Ur.set(u,Vr(Ur.get(u)||null,e,t,n,i,l)),!0;case"gotpointercapture":return u=l.pointerId,Wr.set(u,Vr(Wr.get(u)||null,e,t,n,i,l)),!0}return!1}function Ku(e){var t=bn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ru(n),t!==null){e.blockedOn=t,Gu(e.priority,function(){Hu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ba=i,n.target.dispatchEvent(i),ba=null}else return t=ii(n),t!==null&&Aa(t),e.blockedOn=n,!1;t.shift()}return!0}function qu(e,t,n){Wi(e)&&n.delete(t)}function Ph(){$a=!1,en!==null&&Wi(en)&&(en=null),tn!==null&&Wi(tn)&&(tn=null),nn!==null&&Wi(nn)&&(nn=null),Ur.forEach(qu),Wr.forEach(qu)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,$a||($a=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ph)))}function Qr(e){function t(l){return Hr(l,e)}if(0<Ui.length){Hr(Ui[0],e);for(var n=1;n<Ui.length;n++){var i=Ui[n];i.blockedOn===e&&(i.blockedOn=null)}}for(en!==null&&Hr(en,e),tn!==null&&Hr(tn,e),nn!==null&&Hr(nn,e),Ur.forEach(t),Wr.forEach(t),n=0;n<rn.length;n++)i=rn[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Ku(n),n.blockedOn===null&&rn.shift()}var tr=Q.ReactCurrentBatchConfig,Vi=!0;function bh(e,t,n,i){var l=xe,u=tr.transition;tr.transition=null;try{xe=1,Fa(e,t,n,i)}finally{xe=l,tr.transition=u}}function Th(e,t,n,i){var l=xe,u=tr.transition;tr.transition=null;try{xe=4,Fa(e,t,n,i)}finally{xe=l,tr.transition=u}}function Fa(e,t,n,i){if(Vi){var l=Ba(e,t,n,i);if(l===null)il(e,t,i,Hi,n),Yu(e,i);else if(jh(l,e,t,n,i))i.stopPropagation();else if(Yu(e,i),t&4&&-1<Ch.indexOf(e)){for(;l!==null;){var u=ii(l);if(u!==null&&Vu(u),u=Ba(e,t,n,i),u===null&&il(e,t,i,Hi,n),u===l)break;l=u}l!==null&&i.stopPropagation()}else il(e,t,i,null,n)}}var Hi=null;function Ba(e,t,n,i){if(Hi=null,e=Ta(i),e=bn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ru(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hi=e,null}function Ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gh()){case Ra:return 1;case Fu:return 4;case Di:case vh:return 16;case Bu:return 536870912;default:return 16}default:return 16}}var on=null,Ua=null,Qi=null;function Xu(){if(Qi)return Qi;var e,t=Ua,n=t.length,i,l="value"in on?on.value:on.textContent,u=l.length;for(e=0;e<n&&t[e]===l[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===l[u-i];i++);return Qi=l.slice(e,1<i?1-i:void 0)}function Gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yi(){return!0}function Zu(){return!1}function ft(e){function t(n,i,l,u,d){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Yi:Zu,this.isPropagationStopped=Zu,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=ft(nr),Gr=F({},nr,{view:0,detail:0}),Nh=ft(Gr),Va,Ha,Yr,Ki=F({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(Va=e.screenX-Yr.screenX,Ha=e.screenY-Yr.screenY):Ha=Va=0,Yr=e),Va)},movementY:function(e){return"movementY"in e?e.movementY:Ha}}),ec=ft(Ki),zh=F({},Ki,{dataTransfer:0}),Ih=ft(zh),Oh=F({},Gr,{relatedTarget:0}),Qa=ft(Oh),Rh=F({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=ft(Rh),Mh=F({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dh=ft(Mh),Ah=F({},nr,{data:0}),tc=ft(Ah),$h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bh[e])?!!t[e]:!1}function Ga(){return Uh}var Wh=F({},Gr,{key:function(e){if(e.key){var t=$h[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ga,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vh=ft(Wh),Hh=F({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nc=ft(Hh),Qh=F({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ga}),Gh=ft(Qh),Yh=F({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kh=ft(Yh),qh=F({},Ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jh=ft(qh),Xh=[9,13,27,32],Ya=g&&"CompositionEvent"in window,Kr=null;g&&"documentMode"in document&&(Kr=document.documentMode);var Zh=g&&"TextEvent"in window&&!Kr,rc=g&&(!Ya||Kr&&8<Kr&&11>=Kr),ic=" ",oc=!1;function ac(e,t){switch(e){case"keyup":return Xh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function em(e,t){switch(e){case"compositionend":return lc(t);case"keypress":return t.which!==32?null:(oc=!0,ic);case"textInput":return e=t.data,e===ic&&oc?null:e;default:return null}}function tm(e,t){if(rr)return e==="compositionend"||!Ya&&ac(e,t)?(e=Xu(),Qi=Ua=on=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rc&&t.locale!=="ko"?null:t.data;default:return null}}var nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nm[e.type]:t==="textarea"}function uc(e,t,n,i){Tu(i),t=eo(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var qr=null,Jr=null;function rm(e){Pc(e,0)}function qi(e){var t=sr(e);if(Et(t))return e}function im(e,t){if(e==="change")return t}var cc=!1;if(g){var Ka;if(g){var qa="oninput"in document;if(!qa){var fc=document.createElement("div");fc.setAttribute("oninput","return;"),qa=typeof fc.oninput=="function"}Ka=qa}else Ka=!1;cc=Ka&&(!document.documentMode||9<document.documentMode)}function dc(){qr&&(qr.detachEvent("onpropertychange",pc),Jr=qr=null)}function pc(e){if(e.propertyName==="value"&&qi(Jr)){var t=[];uc(t,Jr,e,Ta(e)),Ou(rm,t)}}function om(e,t,n){e==="focusin"?(dc(),qr=t,Jr=n,qr.attachEvent("onpropertychange",pc)):e==="focusout"&&dc()}function am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Jr)}function lm(e,t){if(e==="click")return qi(t)}function sm(e,t){if(e==="input"||e==="change")return qi(t)}function um(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:um;function Xr(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!h.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var n=hc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hc(n)}}function gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vc(){for(var e=window,t=Oi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oi(e.document)}return t}function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cm(e){var t=vc(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gc(n.ownerDocument.documentElement,n)){if(i!==null&&Ja(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,u=Math.min(i.start,l);i=i.end===void 0?u:Math.min(i.end,l),!e.extend&&u>i&&(l=i,i=u,u=l),l=mc(n,u);var d=mc(n,i);l&&d&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),u>i?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fm=g&&"documentMode"in document&&11>=document.documentMode,ir=null,Xa=null,Zr=null,Za=!1;function yc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Za||ir==null||ir!==Oi(i)||(i=ir,"selectionStart"in i&&Ja(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zr&&Xr(Zr,i)||(Zr=i,i=eo(Xa,"onSelect"),0<i.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ir)))}function Ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var or={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},el={},xc={};g&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Xi(e){if(el[e])return el[e];if(!or[e])return e;var t=or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xc)return el[e]=t[n];return e}var wc=Xi("animationend"),Sc=Xi("animationiteration"),kc=Xi("animationstart"),Ec=Xi("transitionend"),_c=new Map,Cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){_c.set(e,t),f(t,[e])}for(var tl=0;tl<Cc.length;tl++){var nl=Cc[tl],dm=nl.toLowerCase(),pm=nl[0].toUpperCase()+nl.slice(1);an(dm,"on"+pm)}an(wc,"onAnimationEnd"),an(Sc,"onAnimationIteration"),an(kc,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(Ec,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hm=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function jc(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,dh(i,t,void 0,e),e.currentTarget=null}function Pc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var d=i.length-1;0<=d;d--){var m=i[d],v=m.instance,j=m.currentTarget;if(m=m.listener,v!==u&&l.isPropagationStopped())break e;jc(l,m,j),u=v}else for(d=0;d<i.length;d++){if(m=i[d],v=m.instance,j=m.currentTarget,m=m.listener,v!==u&&l.isPropagationStopped())break e;jc(l,m,j),u=v}}}if(Mi)throw e=Oa,Mi=!1,Oa=null,e}function Ee(e,t){var n=t[cl];n===void 0&&(n=t[cl]=new Set);var i=e+"__bubble";n.has(i)||(bc(t,e,2,!1),n.add(i))}function rl(e,t,n){var i=0;t&&(i|=4),bc(n,e,i,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[Zi]){e[Zi]=!0,s.forEach(function(n){n!=="selectionchange"&&(hm.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,rl("selectionchange",!1,t))}}function bc(e,t,n,i){switch(Ju(t)){case 1:var l=bh;break;case 4:l=Th;break;default:l=Fa}n=l.bind(null,t,n,e),l=void 0,!Ia||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function il(e,t,n,i,l){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var m=i.stateNode.containerInfo;if(m===l||m.nodeType===8&&m.parentNode===l)break;if(d===4)for(d=i.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===l||v.nodeType===8&&v.parentNode===l))return;d=d.return}for(;m!==null;){if(d=bn(m),d===null)return;if(v=d.tag,v===5||v===6){i=u=d;continue e}m=m.parentNode}}i=i.return}Ou(function(){var j=u,I=Ta(n),R=[];e:{var z=_c.get(e);if(z!==void 0){var B=Wa,H=e;switch(e){case"keypress":if(Gi(n)===0)break e;case"keydown":case"keyup":B=Vh;break;case"focusin":H="focus",B=Qa;break;case"focusout":H="blur",B=Qa;break;case"beforeblur":case"afterblur":B=Qa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Gh;break;case wc:case Sc:case kc:B=Lh;break;case Ec:B=Kh;break;case"scroll":B=Nh;break;case"wheel":B=Jh;break;case"copy":case"cut":case"paste":B=Dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=nc}var Y=(t&4)!==0,Re=!Y&&e==="scroll",_=Y?z!==null?z+"Capture":null:z;Y=[];for(var w=j,C;w!==null;){C=w;var M=C.stateNode;if(C.tag===5&&M!==null&&(C=M,_!==null&&(M=Dr(w,_),M!=null&&Y.push(ni(w,M,C)))),Re)break;w=w.return}0<Y.length&&(z=new B(z,H,null,n,I),R.push({event:z,listeners:Y}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&n!==ba&&(H=n.relatedTarget||n.fromElement)&&(bn(H)||H[Wt]))break e;if((B||z)&&(z=I.window===I?I:(z=I.ownerDocument)?z.defaultView||z.parentWindow:window,B?(H=n.relatedTarget||n.toElement,B=j,H=H?bn(H):null,H!==null&&(Re=Pn(H),H!==Re||H.tag!==5&&H.tag!==6)&&(H=null)):(B=null,H=j),B!==H)){if(Y=ec,M="onMouseLeave",_="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(Y=nc,M="onPointerLeave",_="onPointerEnter",w="pointer"),Re=B==null?z:sr(B),C=H==null?z:sr(H),z=new Y(M,w+"leave",B,n,I),z.target=Re,z.relatedTarget=C,M=null,bn(I)===j&&(Y=new Y(_,w+"enter",H,n,I),Y.target=C,Y.relatedTarget=Re,M=Y),Re=M,B&&H)t:{for(Y=B,_=H,w=0,C=Y;C;C=ar(C))w++;for(C=0,M=_;M;M=ar(M))C++;for(;0<w-C;)Y=ar(Y),w--;for(;0<C-w;)_=ar(_),C--;for(;w--;){if(Y===_||_!==null&&Y===_.alternate)break t;Y=ar(Y),_=ar(_)}Y=null}else Y=null;B!==null&&Tc(R,z,B,Y,!1),H!==null&&Re!==null&&Tc(R,Re,H,Y,!0)}}e:{if(z=j?sr(j):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var K=im;else if(sc(z))if(cc)K=sm;else{K=am;var Z=om}else(B=z.nodeName)&&B.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(K=lm);if(K&&(K=K(e,j))){uc(R,K,n,I);break e}Z&&Z(e,z,j),e==="focusout"&&(Z=z._wrapperState)&&Z.controlled&&z.type==="number"&&Ea(z,"number",z.value)}switch(Z=j?sr(j):window,e){case"focusin":(sc(Z)||Z.contentEditable==="true")&&(ir=Z,Xa=j,Zr=null);break;case"focusout":Zr=Xa=ir=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,yc(R,n,I);break;case"selectionchange":if(fm)break;case"keydown":case"keyup":yc(R,n,I)}var ee;if(Ya)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else rr?ac(e,n)&&(ne="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ne="onCompositionStart");ne&&(rc&&n.locale!=="ko"&&(rr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&rr&&(ee=Xu()):(on=I,Ua="value"in on?on.value:on.textContent,rr=!0)),Z=eo(j,ne),0<Z.length&&(ne=new tc(ne,e,null,n,I),R.push({event:ne,listeners:Z}),ee?ne.data=ee:(ee=lc(n),ee!==null&&(ne.data=ee)))),(ee=Zh?em(e,n):tm(e,n))&&(j=eo(j,"onBeforeInput"),0<j.length&&(I=new tc("onBeforeInput","beforeinput",null,n,I),R.push({event:I,listeners:j}),I.data=ee))}Pc(R,t)})}function ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=Dr(e,n),u!=null&&i.unshift(ni(e,u,l)),u=Dr(e,t),u!=null&&i.push(ni(e,u,l))),e=e.return}return i}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tc(e,t,n,i,l){for(var u=t._reactName,d=[];n!==null&&n!==i;){var m=n,v=m.alternate,j=m.stateNode;if(v!==null&&v===i)break;m.tag===5&&j!==null&&(m=j,l?(v=Dr(n,u),v!=null&&d.unshift(ni(n,v,m))):l||(v=Dr(n,u),v!=null&&d.push(ni(n,v,m)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var mm=/\r\n?/g,gm=/\u0000|\uFFFD/g;function Nc(e){return(typeof e=="string"?e:""+e).replace(mm,`
`).replace(gm,"")}function to(e,t,n){if(t=Nc(t),Nc(e)!==t&&n)throw Error(a(425))}function no(){}var ol=null,al=null;function ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sl=typeof setTimeout=="function"?setTimeout:void 0,vm=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,ym=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(xm)}:sl;function xm(e){setTimeout(function(){throw e})}function ul(e,t){var n=t,i=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(i===0){e.removeChild(l),Qr(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=l}while(n);Qr(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),Rt="__reactFiber$"+lr,ri="__reactProps$"+lr,Wt="__reactContainer$"+lr,cl="__reactEvents$"+lr,wm="__reactListeners$"+lr,Sm="__reactHandles$"+lr;function bn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ic(e);e!==null;){if(n=e[Rt])return n;e=Ic(e)}return t}e=n,n=e.parentNode}return null}function ii(e){return e=e[Rt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function ro(e){return e[ri]||null}var fl=[],ur=-1;function sn(e){return{current:e}}function _e(e){0>ur||(e.current=fl[ur],fl[ur]=null,ur--)}function Se(e,t){ur++,fl[ur]=e.current,e.current=t}var un={},Ze=sn(un),ot=sn(!1),Tn=un;function cr(e,t){var n=e.type.contextTypes;if(!n)return un;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in n)l[u]=t[u];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function at(e){return e=e.childContextTypes,e!=null}function io(){_e(ot),_e(Ze)}function Oc(e,t,n){if(Ze.current!==un)throw Error(a(168));Se(Ze,t),Se(ot,n)}function Rc(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var l in i)if(!(l in t))throw Error(a(108,ge(e)||"Unknown",l));return F({},n,i)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,Tn=Ze.current,Se(Ze,e),Se(ot,ot.current),!0}function Lc(e,t,n){var i=e.stateNode;if(!i)throw Error(a(169));n?(e=Rc(e,t,Tn),i.__reactInternalMemoizedMergedChildContext=e,_e(ot),_e(Ze),Se(Ze,e)):_e(ot),Se(ot,n)}var Vt=null,ao=!1,dl=!1;function Mc(e){Vt===null?Vt=[e]:Vt.push(e)}function km(e){ao=!0,Mc(e)}function cn(){if(!dl&&Vt!==null){dl=!0;var e=0,t=xe;try{var n=Vt;for(xe=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Vt=null,ao=!1}catch(l){throw Vt!==null&&(Vt=Vt.slice(e+1)),Au(Ra,cn),l}finally{xe=t,dl=!1}}return null}var fr=[],dr=0,lo=null,so=0,gt=[],vt=0,Nn=null,Ht=1,Qt="";function zn(e,t){fr[dr++]=so,fr[dr++]=lo,lo=e,so=t}function Dc(e,t,n){gt[vt++]=Ht,gt[vt++]=Qt,gt[vt++]=Nn,Nn=e;var i=Ht;e=Qt;var l=32-_t(i)-1;i&=~(1<<l),n+=1;var u=32-_t(t)+l;if(30<u){var d=l-l%5;u=(i&(1<<d)-1).toString(32),i>>=d,l-=d,Ht=1<<32-_t(t)+l|n<<l|i,Qt=u+e}else Ht=1<<u|n<<l|i,Qt=e}function pl(e){e.return!==null&&(zn(e,1),Dc(e,1,0))}function hl(e){for(;e===lo;)lo=fr[--dr],fr[dr]=null,so=fr[--dr],fr[dr]=null;for(;e===Nn;)Nn=gt[--vt],gt[vt]=null,Qt=gt[--vt],gt[vt]=null,Ht=gt[--vt],gt[vt]=null}var dt=null,pt=null,Pe=!1,jt=null;function Ac(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $c(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,pt=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Ht,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,pt=null,!0):!1;default:return!1}}function ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gl(e){if(Pe){var t=pt;if(t){var n=t;if(!$c(e,t)){if(ml(e))throw Error(a(418));t=ln(n.nextSibling);var i=dt;t&&$c(e,t)?Ac(i,n):(e.flags=e.flags&-4097|2,Pe=!1,dt=e)}}else{if(ml(e))throw Error(a(418));e.flags=e.flags&-4097|2,Pe=!1,dt=e}}}function Fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function uo(e){if(e!==dt)return!1;if(!Pe)return Fc(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ll(e.type,e.memoizedProps)),t&&(t=pt)){if(ml(e))throw Bc(),Error(a(418));for(;t;)Ac(e,t),t=ln(t.nextSibling)}if(Fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=dt?ln(e.stateNode.nextSibling):null;return!0}function Bc(){for(var e=pt;e;)e=ln(e.nextSibling)}function pr(){pt=dt=null,Pe=!1}function vl(e){jt===null?jt=[e]:jt.push(e)}var Em=Q.ReactCurrentBatchConfig;function oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var i=n.stateNode}if(!i)throw Error(a(147,e));var l=i,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(d){var m=l.refs;d===null?delete m[u]:m[u]=d},t._stringRef=u,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function co(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Uc(e){var t=e._init;return t(e._payload)}function Wc(e){function t(_,w){if(e){var C=_.deletions;C===null?(_.deletions=[w],_.flags|=16):C.push(w)}}function n(_,w){if(!e)return null;for(;w!==null;)t(_,w),w=w.sibling;return null}function i(_,w){for(_=new Map;w!==null;)w.key!==null?_.set(w.key,w):_.set(w.index,w),w=w.sibling;return _}function l(_,w){return _=yn(_,w),_.index=0,_.sibling=null,_}function u(_,w,C){return _.index=C,e?(C=_.alternate,C!==null?(C=C.index,C<w?(_.flags|=2,w):C):(_.flags|=2,w)):(_.flags|=1048576,w)}function d(_){return e&&_.alternate===null&&(_.flags|=2),_}function m(_,w,C,M){return w===null||w.tag!==6?(w=ss(C,_.mode,M),w.return=_,w):(w=l(w,C),w.return=_,w)}function v(_,w,C,M){var K=C.type;return K===G?I(_,w,C.props.children,M,C.key):w!==null&&(w.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===$e&&Uc(K)===w.type)?(M=l(w,C.props),M.ref=oi(_,w,C),M.return=_,M):(M=Lo(C.type,C.key,C.props,null,_.mode,M),M.ref=oi(_,w,C),M.return=_,M)}function j(_,w,C,M){return w===null||w.tag!==4||w.stateNode.containerInfo!==C.containerInfo||w.stateNode.implementation!==C.implementation?(w=us(C,_.mode,M),w.return=_,w):(w=l(w,C.children||[]),w.return=_,w)}function I(_,w,C,M,K){return w===null||w.tag!==7?(w=$n(C,_.mode,M,K),w.return=_,w):(w=l(w,C),w.return=_,w)}function R(_,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return w=ss(""+w,_.mode,C),w.return=_,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case re:return C=Lo(w.type,w.key,w.props,null,_.mode,C),C.ref=oi(_,null,w),C.return=_,C;case U:return w=us(w,_.mode,C),w.return=_,w;case $e:var M=w._init;return R(_,M(w._payload),C)}if(Rr(w)||V(w))return w=$n(w,_.mode,C,null),w.return=_,w;co(_,w)}return null}function z(_,w,C,M){var K=w!==null?w.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return K!==null?null:m(_,w,""+C,M);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case re:return C.key===K?v(_,w,C,M):null;case U:return C.key===K?j(_,w,C,M):null;case $e:return K=C._init,z(_,w,K(C._payload),M)}if(Rr(C)||V(C))return K!==null?null:I(_,w,C,M,null);co(_,C)}return null}function B(_,w,C,M,K){if(typeof M=="string"&&M!==""||typeof M=="number")return _=_.get(C)||null,m(w,_,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case re:return _=_.get(M.key===null?C:M.key)||null,v(w,_,M,K);case U:return _=_.get(M.key===null?C:M.key)||null,j(w,_,M,K);case $e:var Z=M._init;return B(_,w,C,Z(M._payload),K)}if(Rr(M)||V(M))return _=_.get(C)||null,I(w,_,M,K,null);co(w,M)}return null}function H(_,w,C,M){for(var K=null,Z=null,ee=w,ne=w=0,Ue=null;ee!==null&&ne<C.length;ne++){ee.index>ne?(Ue=ee,ee=null):Ue=ee.sibling;var me=z(_,ee,C[ne],M);if(me===null){ee===null&&(ee=Ue);break}e&&ee&&me.alternate===null&&t(_,ee),w=u(me,w,ne),Z===null?K=me:Z.sibling=me,Z=me,ee=Ue}if(ne===C.length)return n(_,ee),Pe&&zn(_,ne),K;if(ee===null){for(;ne<C.length;ne++)ee=R(_,C[ne],M),ee!==null&&(w=u(ee,w,ne),Z===null?K=ee:Z.sibling=ee,Z=ee);return Pe&&zn(_,ne),K}for(ee=i(_,ee);ne<C.length;ne++)Ue=B(ee,_,ne,C[ne],M),Ue!==null&&(e&&Ue.alternate!==null&&ee.delete(Ue.key===null?ne:Ue.key),w=u(Ue,w,ne),Z===null?K=Ue:Z.sibling=Ue,Z=Ue);return e&&ee.forEach(function(xn){return t(_,xn)}),Pe&&zn(_,ne),K}function Y(_,w,C,M){var K=V(C);if(typeof K!="function")throw Error(a(150));if(C=K.call(C),C==null)throw Error(a(151));for(var Z=K=null,ee=w,ne=w=0,Ue=null,me=C.next();ee!==null&&!me.done;ne++,me=C.next()){ee.index>ne?(Ue=ee,ee=null):Ue=ee.sibling;var xn=z(_,ee,me.value,M);if(xn===null){ee===null&&(ee=Ue);break}e&&ee&&xn.alternate===null&&t(_,ee),w=u(xn,w,ne),Z===null?K=xn:Z.sibling=xn,Z=xn,ee=Ue}if(me.done)return n(_,ee),Pe&&zn(_,ne),K;if(ee===null){for(;!me.done;ne++,me=C.next())me=R(_,me.value,M),me!==null&&(w=u(me,w,ne),Z===null?K=me:Z.sibling=me,Z=me);return Pe&&zn(_,ne),K}for(ee=i(_,ee);!me.done;ne++,me=C.next())me=B(ee,_,ne,me.value,M),me!==null&&(e&&me.alternate!==null&&ee.delete(me.key===null?ne:me.key),w=u(me,w,ne),Z===null?K=me:Z.sibling=me,Z=me);return e&&ee.forEach(function(ng){return t(_,ng)}),Pe&&zn(_,ne),K}function Re(_,w,C,M){if(typeof C=="object"&&C!==null&&C.type===G&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case re:e:{for(var K=C.key,Z=w;Z!==null;){if(Z.key===K){if(K=C.type,K===G){if(Z.tag===7){n(_,Z.sibling),w=l(Z,C.props.children),w.return=_,_=w;break e}}else if(Z.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===$e&&Uc(K)===Z.type){n(_,Z.sibling),w=l(Z,C.props),w.ref=oi(_,Z,C),w.return=_,_=w;break e}n(_,Z);break}else t(_,Z);Z=Z.sibling}C.type===G?(w=$n(C.props.children,_.mode,M,C.key),w.return=_,_=w):(M=Lo(C.type,C.key,C.props,null,_.mode,M),M.ref=oi(_,w,C),M.return=_,_=M)}return d(_);case U:e:{for(Z=C.key;w!==null;){if(w.key===Z)if(w.tag===4&&w.stateNode.containerInfo===C.containerInfo&&w.stateNode.implementation===C.implementation){n(_,w.sibling),w=l(w,C.children||[]),w.return=_,_=w;break e}else{n(_,w);break}else t(_,w);w=w.sibling}w=us(C,_.mode,M),w.return=_,_=w}return d(_);case $e:return Z=C._init,Re(_,w,Z(C._payload),M)}if(Rr(C))return H(_,w,C,M);if(V(C))return Y(_,w,C,M);co(_,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,w!==null&&w.tag===6?(n(_,w.sibling),w=l(w,C),w.return=_,_=w):(n(_,w),w=ss(C,_.mode,M),w.return=_,_=w),d(_)):n(_,w)}return Re}var hr=Wc(!0),Vc=Wc(!1),fo=sn(null),po=null,mr=null,yl=null;function xl(){yl=mr=po=null}function wl(e){var t=fo.current;_e(fo),e._currentValue=t}function Sl(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){po=e,yl=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(po===null)throw Error(a(308));mr=e,po.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var In=null;function kl(e){In===null?In=[e]:In.push(e)}function Hc(e,t,n,i){var l=t.interleaved;return l===null?(n.next=n,kl(t)):(n.next=l.next,l.next=n),t.interleaved=n,Gt(e,i)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fn=!1;function El(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(pe&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,Gt(e,n)}return l=i.interleaved,l===null?(t.next=t,kl(i)):(t.next=l.next,l.next=t),i.interleaved=t,Gt(e,n)}function ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Da(e,n)}}function Gc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?l=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?l=u=t:u=u.next=t}else l=u=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,i){var l=e.updateQueue;fn=!1;var u=l.firstBaseUpdate,d=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var v=m,j=v.next;v.next=null,d===null?u=j:d.next=j,d=v;var I=e.alternate;I!==null&&(I=I.updateQueue,m=I.lastBaseUpdate,m!==d&&(m===null?I.firstBaseUpdate=j:m.next=j,I.lastBaseUpdate=v))}if(u!==null){var R=l.baseState;d=0,I=j=v=null,m=u;do{var z=m.lane,B=m.eventTime;if((i&z)===z){I!==null&&(I=I.next={eventTime:B,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var H=e,Y=m;switch(z=t,B=n,Y.tag){case 1:if(H=Y.payload,typeof H=="function"){R=H.call(B,R,z);break e}R=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=Y.payload,z=typeof H=="function"?H.call(B,R,z):H,z==null)break e;R=F({},R,z);break e;case 2:fn=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,z=l.effects,z===null?l.effects=[m]:z.push(m))}else B={eventTime:B,lane:z,tag:m.tag,payload:m.payload,callback:m.callback,next:null},I===null?(j=I=B,v=R):I=I.next=B,d|=z;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;z=m,m=z.next,z.next=null,l.lastBaseUpdate=z,l.shared.pending=null}}while(!0);if(I===null&&(v=R),l.baseState=v,l.firstBaseUpdate=j,l.lastBaseUpdate=I,t=l.shared.interleaved,t!==null){l=t;do d|=l.lane,l=l.next;while(l!==t)}else u===null&&(l.shared.lanes=0);Ln|=d,e.lanes=d,e.memoizedState=R}}function Yc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],l=i.callback;if(l!==null){if(i.callback=null,i=n,typeof l!="function")throw Error(a(191,l));l.call(i)}}}var ai={},Lt=sn(ai),li=sn(ai),si=sn(ai);function On(e){if(e===ai)throw Error(a(174));return e}function _l(e,t){switch(Se(si,t),Se(li,e),Se(Lt,ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ca(t,e)}_e(Lt),Se(Lt,t)}function vr(){_e(Lt),_e(li),_e(si)}function Kc(e){On(si.current);var t=On(Lt.current),n=Ca(t,e.type);t!==n&&(Se(li,e),Se(Lt,n))}function Cl(e){li.current===e&&(_e(Lt),_e(li))}var be=sn(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jl=[];function Pl(){for(var e=0;e<jl.length;e++)jl[e]._workInProgressVersionPrimary=null;jl.length=0}var vo=Q.ReactCurrentDispatcher,bl=Q.ReactCurrentBatchConfig,Rn=0,Te=null,De=null,Fe=null,yo=!1,ui=!1,ci=0,_m=0;function et(){throw Error(a(321))}function Tl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Nl(e,t,n,i,l,u){if(Rn=u,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?bm:Tm,e=n(i,l),ui){u=0;do{if(ui=!1,ci=0,25<=u)throw Error(a(301));u+=1,Fe=De=null,t.updateQueue=null,vo.current=Nm,e=n(i,l)}while(ui)}if(vo.current=So,t=De!==null&&De.next!==null,Rn=0,Fe=De=Te=null,yo=!1,t)throw Error(a(300));return e}function zl(){var e=ci!==0;return ci=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Te.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function xt(){if(De===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Fe===null?Te.memoizedState:Fe.next;if(t!==null)Fe=t,De=e;else{if(e===null)throw Error(a(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?Te.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function fi(e,t){return typeof t=="function"?t(e):t}function Il(e){var t=xt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var i=De,l=i.baseQueue,u=n.pending;if(u!==null){if(l!==null){var d=l.next;l.next=u.next,u.next=d}i.baseQueue=l=u,n.pending=null}if(l!==null){u=l.next,i=i.baseState;var m=d=null,v=null,j=u;do{var I=j.lane;if((Rn&I)===I)v!==null&&(v=v.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),i=j.hasEagerState?j.eagerState:e(i,j.action);else{var R={lane:I,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};v===null?(m=v=R,d=i):v=v.next=R,Te.lanes|=I,Ln|=I}j=j.next}while(j!==null&&j!==u);v===null?d=i:v.next=m,Ct(i,t.memoizedState)||(lt=!0),t.memoizedState=i,t.baseState=d,t.baseQueue=v,n.lastRenderedState=i}if(e=n.interleaved,e!==null){l=e;do u=l.lane,Te.lanes|=u,Ln|=u,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ol(e){var t=xt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,u=t.memoizedState;if(l!==null){n.pending=null;var d=l=l.next;do u=e(u,d.action),d=d.next;while(d!==l);Ct(u,t.memoizedState)||(lt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function qc(){}function Jc(e,t){var n=Te,i=xt(),l=t(),u=!Ct(i.memoizedState,l);if(u&&(i.memoizedState=l,lt=!0),i=i.queue,Rl(ef.bind(null,n,i,e),[e]),i.getSnapshot!==t||u||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,di(9,Zc.bind(null,n,i,l,t),void 0,null),Be===null)throw Error(a(349));(Rn&30)!==0||Xc(n,t,l)}return l}function Xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zc(e,t,n,i){t.value=n,t.getSnapshot=i,tf(t)&&nf(e)}function ef(e,t,n){return n(function(){tf(t)&&nf(e)})}function tf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function nf(e){var t=Gt(e,1);t!==null&&Nt(t,e,1,-1)}function rf(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:e},t.queue=e,e=e.dispatch=Pm.bind(null,Te,e),[t.memoizedState,e]}function di(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function of(){return xt().memoizedState}function xo(e,t,n,i){var l=Mt();Te.flags|=e,l.memoizedState=di(1|t,n,void 0,i===void 0?null:i)}function wo(e,t,n,i){var l=xt();i=i===void 0?null:i;var u=void 0;if(De!==null){var d=De.memoizedState;if(u=d.destroy,i!==null&&Tl(i,d.deps)){l.memoizedState=di(t,n,u,i);return}}Te.flags|=e,l.memoizedState=di(1|t,n,u,i)}function af(e,t){return xo(8390656,8,e,t)}function Rl(e,t){return wo(2048,8,e,t)}function lf(e,t){return wo(4,2,e,t)}function sf(e,t){return wo(4,4,e,t)}function uf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cf(e,t,n){return n=n!=null?n.concat([e]):null,wo(4,4,uf.bind(null,t,e),n)}function Ll(){}function ff(e,t){var n=xt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Tl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function df(e,t){var n=xt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Tl(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function pf(e,t,n){return(Rn&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n):(Ct(n,t)||(n=Uu(),Te.lanes|=n,Ln|=n,e.baseState=!0),t)}function Cm(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var i=bl.transition;bl.transition={};try{e(!1),t()}finally{xe=n,bl.transition=i}}function hf(){return xt().memoizedState}function jm(e,t,n){var i=gn(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},mf(e))gf(t,n);else if(n=Hc(e,t,n,i),n!==null){var l=it();Nt(n,e,i,l),vf(n,t,i)}}function Pm(e,t,n){var i=gn(e),l={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(mf(e))gf(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,m=u(d,n);if(l.hasEagerState=!0,l.eagerState=m,Ct(m,d)){var v=t.interleaved;v===null?(l.next=l,kl(t)):(l.next=v.next,v.next=l),t.interleaved=l;return}}catch{}finally{}n=Hc(e,t,l,i),n!==null&&(l=it(),Nt(n,e,i,l),vf(n,t,i))}}function mf(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function gf(e,t){ui=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vf(e,t,n){if((n&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Da(e,n)}}var So={readContext:yt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},bm={readContext:yt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:af,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xo(4194308,4,uf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return xo(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=Mt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=jm.bind(null,Te,e),[i.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:rf,useDebugValue:Ll,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=rf(!1),t=e[0];return e=Cm.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Te,l=Mt();if(Pe){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Be===null)throw Error(a(349));(Rn&30)!==0||Xc(i,t,n)}l.memoizedState=n;var u={value:n,getSnapshot:t};return l.queue=u,af(ef.bind(null,i,u,e),[e]),i.flags|=2048,di(9,Zc.bind(null,i,u,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Be.identifierPrefix;if(Pe){var n=Qt,i=Ht;n=(i&~(1<<32-_t(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_m++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tm={readContext:yt,useCallback:ff,useContext:yt,useEffect:Rl,useImperativeHandle:cf,useInsertionEffect:lf,useLayoutEffect:sf,useMemo:df,useReducer:Il,useRef:of,useState:function(){return Il(fi)},useDebugValue:Ll,useDeferredValue:function(e){var t=xt();return pf(t,De.memoizedState,e)},useTransition:function(){var e=Il(fi)[0],t=xt().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Jc,useId:hf,unstable_isNewReconciler:!1},Nm={readContext:yt,useCallback:ff,useContext:yt,useEffect:Rl,useImperativeHandle:cf,useInsertionEffect:lf,useLayoutEffect:sf,useMemo:df,useReducer:Ol,useRef:of,useState:function(){return Ol(fi)},useDebugValue:Ll,useDeferredValue:function(e){var t=xt();return De===null?t.memoizedState=e:pf(t,De.memoizedState,e)},useTransition:function(){var e=Ol(fi)[0],t=xt().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Jc,useId:hf,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ml(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:F({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ko={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=it(),l=gn(e),u=Yt(i,l);u.payload=t,n!=null&&(u.callback=n),t=dn(e,u,l),t!==null&&(Nt(t,e,l,i),ho(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=it(),l=gn(e),u=Yt(i,l);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=dn(e,u,l),t!==null&&(Nt(t,e,l,i),ho(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),i=gn(e),l=Yt(n,i);l.tag=2,t!=null&&(l.callback=t),t=dn(e,l,i),t!==null&&(Nt(t,e,i,n),ho(t,e,i))}};function yf(e,t,n,i,l,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,d):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,i)||!Xr(l,u):!0}function xf(e,t,n){var i=!1,l=un,u=t.contextType;return typeof u=="object"&&u!==null?u=yt(u):(l=at(t)?Tn:Ze.current,i=t.contextTypes,u=(i=i!=null)?cr(e,l):un),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),t}function wf(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,i){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},El(e);var u=t.contextType;typeof u=="object"&&u!==null?l.context=yt(u):(u=at(t)?Tn:Ze.current,l.context=cr(e,u)),l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Ml(e,t,u,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ko.enqueueReplaceState(l,l.state,null),mo(e,n,l,i),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function yr(e,t){try{var n="",i=t;do n+=oe(i),i=i.return;while(i);var l=n}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:l,digest:null}}function Al(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zm=typeof WeakMap=="function"?WeakMap:Map;function Sf(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){To||(To=!0,es=i),$l(e,t)},n}function kf(e,t,n){n=Yt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;n.payload=function(){return i(l)},n.callback=function(){$l(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){$l(e,t),typeof i!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function Ef(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new zm;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(l.add(n),e=Hm.bind(null,e,t,n),t.then(e,e))}function _f(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cf(e,t,n,i,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Im=Q.ReactCurrentOwner,lt=!1;function rt(e,t,n,i){t.child=e===null?Vc(t,null,n,i):hr(t,e.child,n,i)}function jf(e,t,n,i,l){n=n.render;var u=t.ref;return gr(t,l),i=Nl(e,t,n,i,u,l),n=zl(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Kt(e,t,l)):(Pe&&n&&pl(t),t.flags|=1,rt(e,t,i,l),t.child)}function Pf(e,t,n,i,l){if(e===null){var u=n.type;return typeof u=="function"&&!ls(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,bf(e,t,u,i,l)):(e=Lo(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&l)===0){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(d,i)&&e.ref===t.ref)return Kt(e,t,l)}return t.flags|=1,e=yn(u,i),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,n,i,l){if(e!==null){var u=e.memoizedProps;if(Xr(u,i)&&e.ref===t.ref)if(lt=!1,t.pendingProps=i=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Kt(e,t,l)}return Fl(e,t,n,i,l)}function Tf(e,t,n){var i=t.pendingProps,l=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(wr,ht),ht|=n;else{if((n&1073741824)===0)return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(wr,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:n,Se(wr,ht),ht|=i}else u!==null?(i=u.baseLanes|n,t.memoizedState=null):i=n,Se(wr,ht),ht|=i;return rt(e,t,l,n),t.child}function Nf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fl(e,t,n,i,l){var u=at(n)?Tn:Ze.current;return u=cr(t,u),gr(t,l),n=Nl(e,t,n,i,u,l),i=zl(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Kt(e,t,l)):(Pe&&i&&pl(t),t.flags|=1,rt(e,t,n,l),t.child)}function zf(e,t,n,i,l){if(at(n)){var u=!0;oo(t)}else u=!1;if(gr(t,l),t.stateNode===null)_o(e,t),xf(t,n,i),Dl(t,n,i,l),i=!0;else if(e===null){var d=t.stateNode,m=t.memoizedProps;d.props=m;var v=d.context,j=n.contextType;typeof j=="object"&&j!==null?j=yt(j):(j=at(n)?Tn:Ze.current,j=cr(t,j));var I=n.getDerivedStateFromProps,R=typeof I=="function"||typeof d.getSnapshotBeforeUpdate=="function";R||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==i||v!==j)&&wf(t,d,i,j),fn=!1;var z=t.memoizedState;d.state=z,mo(t,i,d,l),v=t.memoizedState,m!==i||z!==v||ot.current||fn?(typeof I=="function"&&(Ml(t,n,I,i),v=t.memoizedState),(m=fn||yf(t,n,m,i,z,v,j))?(R||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=v),d.props=i,d.state=v,d.context=j,i=m):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,Qc(e,t),m=t.memoizedProps,j=t.type===t.elementType?m:Pt(t.type,m),d.props=j,R=t.pendingProps,z=d.context,v=n.contextType,typeof v=="object"&&v!==null?v=yt(v):(v=at(n)?Tn:Ze.current,v=cr(t,v));var B=n.getDerivedStateFromProps;(I=typeof B=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==R||z!==v)&&wf(t,d,i,v),fn=!1,z=t.memoizedState,d.state=z,mo(t,i,d,l);var H=t.memoizedState;m!==R||z!==H||ot.current||fn?(typeof B=="function"&&(Ml(t,n,B,i),H=t.memoizedState),(j=fn||yf(t,n,j,i,z,H,v)||!1)?(I||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,H,v),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,H,v)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=H),d.props=i,d.state=H,d.context=v,i=j):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),i=!1)}return Bl(e,t,n,i,u,l)}function Bl(e,t,n,i,l,u){Nf(e,t);var d=(t.flags&128)!==0;if(!i&&!d)return l&&Lc(t,n,!1),Kt(e,t,u);i=t.stateNode,Im.current=t;var m=d&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&d?(t.child=hr(t,e.child,null,u),t.child=hr(t,null,m,u)):rt(e,t,m,u),t.memoizedState=i.state,l&&Lc(t,n,!0),t.child}function If(e){var t=e.stateNode;t.pendingContext?Oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oc(e,t.context,!1),_l(e,t.containerInfo)}function Of(e,t,n,i,l){return pr(),vl(l),t.flags|=256,rt(e,t,n,i),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rf(e,t,n){var i=t.pendingProps,l=be.current,u=!1,d=(t.flags&128)!==0,m;if((m=d)||(m=e!==null&&e.memoizedState===null?!1:(l&2)!==0),m?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Se(be,l&1),e===null)return gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=i.children,e=i.fallback,u?(i=t.mode,u=t.child,d={mode:"hidden",children:d},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=d):u=Mo(d,i,0,null),e=$n(e,i,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Wl(n),t.memoizedState=Ul,e):Vl(t,d));if(l=e.memoizedState,l!==null&&(m=l.dehydrated,m!==null))return Om(e,t,d,i,m,l,n);if(u){u=i.fallback,d=t.mode,l=e.child,m=l.sibling;var v={mode:"hidden",children:i.children};return(d&1)===0&&t.child!==l?(i=t.child,i.childLanes=0,i.pendingProps=v,t.deletions=null):(i=yn(l,v),i.subtreeFlags=l.subtreeFlags&14680064),m!==null?u=yn(m,u):(u=$n(u,d,n,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,i=u,u=t.child,d=e.child.memoizedState,d=d===null?Wl(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~n,t.memoizedState=Ul,i}return u=e.child,e=u.sibling,i=yn(u,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Vl(e,t){return t=Mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Eo(e,t,n,i){return i!==null&&vl(i),hr(t,e.child,null,n),e=Vl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Om(e,t,n,i,l,u,d){if(n)return t.flags&256?(t.flags&=-257,i=Al(Error(a(422))),Eo(e,t,d,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=i.fallback,l=t.mode,i=Mo({mode:"visible",children:i.children},l,0,null),u=$n(u,l,d,null),u.flags|=2,i.return=t,u.return=t,i.sibling=u,t.child=i,(t.mode&1)!==0&&hr(t,e.child,null,d),t.child.memoizedState=Wl(d),t.memoizedState=Ul,u);if((t.mode&1)===0)return Eo(e,t,d,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var m=i.dgst;return i=m,u=Error(a(419)),i=Al(u,i,void 0),Eo(e,t,d,i)}if(m=(d&e.childLanes)!==0,lt||m){if(i=Be,i!==null){switch(d&-d){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(i.suspendedLanes|d))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Gt(e,l),Nt(i,e,l,-1))}return as(),i=Al(Error(a(421))),Eo(e,t,d,i)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Qm.bind(null,e),l._reactRetry=t,null):(e=u.treeContext,pt=ln(l.nextSibling),dt=t,Pe=!0,jt=null,e!==null&&(gt[vt++]=Ht,gt[vt++]=Qt,gt[vt++]=Nn,Ht=e.id,Qt=e.overflow,Nn=t),t=Vl(t,i.children),t.flags|=4096,t)}function Lf(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Sl(e.return,t,n)}function Hl(e,t,n,i,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=n,u.tailMode=l)}function Mf(e,t,n){var i=t.pendingProps,l=i.revealOrder,u=i.tail;if(rt(e,t,i.children,n),i=be.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lf(e,n,t);else if(e.tag===19)Lf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Se(be,i),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Hl(t,!1,l,n,u);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&go(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Hl(t,!0,n,null,u);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _o(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rm(e,t,n){switch(t.tag){case 3:If(t),pr();break;case 5:Kc(t);break;case 1:at(t.type)&&oo(t);break;case 4:_l(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,l=t.memoizedProps.value;Se(fo,i._currentValue),i._currentValue=l;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Se(be,be.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Rf(e,t,n):(Se(be,be.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);Se(be,be.current&1);break;case 19:if(i=(n&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Mf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Se(be,be.current),i)break;return null;case 22:case 23:return t.lanes=0,Tf(e,t,n)}return Kt(e,t,n)}var Df,Ql,Af,$f;Df=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ql=function(){},Af=function(e,t,n,i){var l=e.memoizedProps;if(l!==i){e=t.stateNode,On(Lt.current);var u=null;switch(n){case"input":l=Sa(e,l),i=Sa(e,i),u=[];break;case"select":l=F({},l,{value:void 0}),i=F({},i,{value:void 0}),u=[];break;case"textarea":l=_a(e,l),i=_a(e,i),u=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=no)}ja(n,i);var d;n=null;for(j in l)if(!i.hasOwnProperty(j)&&l.hasOwnProperty(j)&&l[j]!=null)if(j==="style"){var m=l[j];for(d in m)m.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(c.hasOwnProperty(j)?u||(u=[]):(u=u||[]).push(j,null));for(j in i){var v=i[j];if(m=l!=null?l[j]:void 0,i.hasOwnProperty(j)&&v!==m&&(v!=null||m!=null))if(j==="style")if(m){for(d in m)!m.hasOwnProperty(d)||v&&v.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in v)v.hasOwnProperty(d)&&m[d]!==v[d]&&(n||(n={}),n[d]=v[d])}else n||(u||(u=[]),u.push(j,n)),n=v;else j==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,m=m?m.__html:void 0,v!=null&&m!==v&&(u=u||[]).push(j,v)):j==="children"?typeof v!="string"&&typeof v!="number"||(u=u||[]).push(j,""+v):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(c.hasOwnProperty(j)?(v!=null&&j==="onScroll"&&Ee("scroll",e),u||m===v||(u=[])):(u=u||[]).push(j,v))}n&&(u=u||[]).push("style",n);var j=u;(t.updateQueue=j)&&(t.flags|=4)}},$f=function(e,t,n,i){n!==i&&(t.flags|=4)};function pi(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Lm(e,t,n){var i=t.pendingProps;switch(hl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return at(t.type)&&io(),tt(t),null;case 3:return i=t.stateNode,vr(),_e(ot),_e(Ze),Pl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jt!==null&&(rs(jt),jt=null))),Ql(e,t),tt(t),null;case 5:Cl(t);var l=On(si.current);if(n=t.type,e!==null&&t.stateNode!=null)Af(e,t,n,i,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(a(166));return tt(t),null}if(e=On(Lt.current),uo(t)){i=t.stateNode,n=t.type;var u=t.memoizedProps;switch(i[Rt]=t,i[ri]=u,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(l=0;l<ei.length;l++)Ee(ei[l],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":yu(i,u),Ee("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},Ee("invalid",i);break;case"textarea":Su(i,u),Ee("invalid",i)}ja(n,u),l=null;for(var d in u)if(u.hasOwnProperty(d)){var m=u[d];d==="children"?typeof m=="string"?i.textContent!==m&&(u.suppressHydrationWarning!==!0&&to(i.textContent,m,e),l=["children",m]):typeof m=="number"&&i.textContent!==""+m&&(u.suppressHydrationWarning!==!0&&to(i.textContent,m,e),l=["children",""+m]):c.hasOwnProperty(d)&&m!=null&&d==="onScroll"&&Ee("scroll",i)}switch(n){case"input":Ut(i),wu(i,u,!0);break;case"textarea":Ut(i),Eu(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=no)}i=l,t.updateQueue=i,i!==null&&(t.flags|=4)}else{d=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_u(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(n,{is:i.is}):(e=d.createElement(n),n==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,n),e[Rt]=t,e[ri]=i,Df(e,t,!1,!1),t.stateNode=e;e:{switch(d=Pa(n,i),n){case"dialog":Ee("cancel",e),Ee("close",e),l=i;break;case"iframe":case"object":case"embed":Ee("load",e),l=i;break;case"video":case"audio":for(l=0;l<ei.length;l++)Ee(ei[l],e);l=i;break;case"source":Ee("error",e),l=i;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),l=i;break;case"details":Ee("toggle",e),l=i;break;case"input":yu(e,i),l=Sa(e,i),Ee("invalid",e);break;case"option":l=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},l=F({},i,{value:void 0}),Ee("invalid",e);break;case"textarea":Su(e,i),l=_a(e,i),Ee("invalid",e);break;default:l=i}ja(n,l),m=l;for(u in m)if(m.hasOwnProperty(u)){var v=m[u];u==="style"?Pu(e,v):u==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Cu(e,v)):u==="children"?typeof v=="string"?(n!=="textarea"||v!=="")&&Lr(e,v):typeof v=="number"&&Lr(e,""+v):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?v!=null&&u==="onScroll"&&Ee("scroll",e):v!=null&&A(e,u,v,d))}switch(n){case"input":Ut(e),wu(e,i,!1);break;case"textarea":Ut(e),Eu(e);break;case"option":i.value!=null&&e.setAttribute("value",""+fe(i.value));break;case"select":e.multiple=!!i.multiple,u=i.value,u!=null?Xn(e,!!i.multiple,u,!1):i.defaultValue!=null&&Xn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=no)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)$f(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(a(166));if(n=On(si.current),On(Lt.current),uo(t)){if(i=t.stateNode,n=t.memoizedProps,i[Rt]=t,(u=i.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:to(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&to(i.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Rt]=t,t.stateNode=i}return tt(t),null;case 13:if(_e(be),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Bc(),pr(),t.flags|=98560,u=!1;else if(u=uo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[Rt]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),u=!1}else jt!==null&&(rs(jt),jt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(be.current&1)!==0?Ae===0&&(Ae=3):as())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return vr(),Ql(e,t),e===null&&ti(t.stateNode.containerInfo),tt(t),null;case 10:return wl(t.type._context),tt(t),null;case 17:return at(t.type)&&io(),tt(t),null;case 19:if(_e(be),u=t.memoizedState,u===null)return tt(t),null;if(i=(t.flags&128)!==0,d=u.rendering,d===null)if(i)pi(u,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=go(e),d!==null){for(t.flags|=128,pi(u,!1),i=d.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)u=n,e=i,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(be,be.current&1|2),t.child}e=e.sibling}u.tail!==null&&Oe()>Sr&&(t.flags|=128,i=!0,pi(u,!1),t.lanes=4194304)}else{if(!i)if(e=go(d),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pi(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Pe)return tt(t),null}else 2*Oe()-u.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,i=!0,pi(u,!1),t.lanes=4194304);u.isBackwards?(d.sibling=t.child,t.child=d):(n=u.last,n!==null?n.sibling=d:t.child=d,u.last=d)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Oe(),t.sibling=null,n=be.current,Se(be,i?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return os(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(ht&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Mm(e,t){switch(hl(t),t.tag){case 1:return at(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),_e(ot),_e(Ze),Pl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Cl(t),null;case 13:if(_e(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(be),null;case 4:return vr(),null;case 10:return wl(t.type._context),null;case 22:case 23:return os(),null;case 24:return null;default:return null}}var Co=!1,nt=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,W=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ne(e,t,i)}else n.current=null}function Gl(e,t,n){try{n()}catch(i){Ne(e,t,i)}}var Ff=!1;function Am(e,t){if(ol=Vi,e=vc(),Ja(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,m=-1,v=-1,j=0,I=0,R=e,z=null;t:for(;;){for(var B;R!==n||l!==0&&R.nodeType!==3||(m=d+l),R!==u||i!==0&&R.nodeType!==3||(v=d+i),R.nodeType===3&&(d+=R.nodeValue.length),(B=R.firstChild)!==null;)z=R,R=B;for(;;){if(R===e)break t;if(z===n&&++j===l&&(m=d),z===u&&++I===i&&(v=d),(B=R.nextSibling)!==null)break;R=z,z=R.parentNode}R=B}n=m===-1||v===-1?null:{start:m,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(al={focusedElem:e,selectionRange:n},Vi=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var H=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var Y=H.memoizedProps,Re=H.memoizedState,_=t.stateNode,w=_.getSnapshotBeforeUpdate(t.elementType===t.type?Y:Pt(t.type,Y),Re);_.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(M){Ne(t,t.return,M)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return H=Ff,Ff=!1,H}function hi(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&Gl(t,n,u)}l=l.next}while(l!==i)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bf(e){var t=e.alternate;t!==null&&(e.alternate=null,Bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[ri],delete t[cl],delete t[wm],delete t[Sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uf(e){return e.tag===5||e.tag===3||e.tag===4}function Wf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=no));else if(i!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}function ql(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}var Ye=null,bt=!1;function pn(e,t,n){for(n=n.child;n!==null;)Vf(e,t,n),n=n.sibling}function Vf(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Ai,n)}catch{}switch(n.tag){case 5:nt||xr(n,t);case 6:var i=Ye,l=bt;Ye=null,pn(e,t,n),Ye=i,bt=l,Ye!==null&&(bt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(bt?(e=Ye,n=n.stateNode,e.nodeType===8?ul(e.parentNode,n):e.nodeType===1&&ul(e,n),Qr(e)):ul(Ye,n.stateNode));break;case 4:i=Ye,l=bt,Ye=n.stateNode.containerInfo,bt=!0,pn(e,t,n),Ye=i,bt=l;break;case 0:case 11:case 14:case 15:if(!nt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var u=l,d=u.destroy;u=u.tag,d!==void 0&&((u&2)!==0||(u&4)!==0)&&Gl(n,t,d),l=l.next}while(l!==i)}pn(e,t,n);break;case 1:if(!nt&&(xr(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(m){Ne(n,t,m)}pn(e,t,n);break;case 21:pn(e,t,n);break;case 22:n.mode&1?(nt=(i=nt)||n.memoizedState!==null,pn(e,t,n),nt=i):pn(e,t,n);break;default:pn(e,t,n)}}function Hf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dm),t.forEach(function(i){var l=Gm.bind(null,e,i);n.has(i)||(n.add(i),i.then(l,l))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];try{var u=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 5:Ye=m.stateNode,bt=!1;break e;case 3:Ye=m.stateNode.containerInfo,bt=!0;break e;case 4:Ye=m.stateNode.containerInfo,bt=!0;break e}m=m.return}if(Ye===null)throw Error(a(160));Vf(u,d,l),Ye=null,bt=!1;var v=l.alternate;v!==null&&(v.return=null),l.return=null}catch(j){Ne(l,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qf(t,e),t=t.sibling}function Qf(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Dt(e),i&4){try{hi(3,e,e.return),jo(3,e)}catch(Y){Ne(e,e.return,Y)}try{hi(5,e,e.return)}catch(Y){Ne(e,e.return,Y)}}break;case 1:Tt(t,e),Dt(e),i&512&&n!==null&&xr(n,n.return);break;case 5:if(Tt(t,e),Dt(e),i&512&&n!==null&&xr(n,n.return),e.flags&32){var l=e.stateNode;try{Lr(l,"")}catch(Y){Ne(e,e.return,Y)}}if(i&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,d=n!==null?n.memoizedProps:u,m=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{m==="input"&&u.type==="radio"&&u.name!=null&&xu(l,u),Pa(m,d);var j=Pa(m,u);for(d=0;d<v.length;d+=2){var I=v[d],R=v[d+1];I==="style"?Pu(l,R):I==="dangerouslySetInnerHTML"?Cu(l,R):I==="children"?Lr(l,R):A(l,I,R,j)}switch(m){case"input":ka(l,u);break;case"textarea":ku(l,u);break;case"select":var z=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var B=u.value;B!=null?Xn(l,!!u.multiple,B,!1):z!==!!u.multiple&&(u.defaultValue!=null?Xn(l,!!u.multiple,u.defaultValue,!0):Xn(l,!!u.multiple,u.multiple?[]:"",!1))}l[ri]=u}catch(Y){Ne(e,e.return,Y)}}break;case 6:if(Tt(t,e),Dt(e),i&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(Y){Ne(e,e.return,Y)}}break;case 3:if(Tt(t,e),Dt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(Y){Ne(e,e.return,Y)}break;case 4:Tt(t,e),Dt(e);break;case 13:Tt(t,e),Dt(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(Zl=Oe())),i&4&&Hf(e);break;case 22:if(I=n!==null&&n.memoizedState!==null,e.mode&1?(nt=(j=nt)||I,Tt(t,e),nt=j):Tt(t,e),Dt(e),i&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!I&&(e.mode&1)!==0)for(W=e,I=e.child;I!==null;){for(R=W=I;W!==null;){switch(z=W,B=z.child,z.tag){case 0:case 11:case 14:case 15:hi(4,z,z.return);break;case 1:xr(z,z.return);var H=z.stateNode;if(typeof H.componentWillUnmount=="function"){i=z,n=z.return;try{t=i,H.props=t.memoizedProps,H.state=t.memoizedState,H.componentWillUnmount()}catch(Y){Ne(i,n,Y)}}break;case 5:xr(z,z.return);break;case 22:if(z.memoizedState!==null){Kf(R);continue}}B!==null?(B.return=z,W=B):Kf(R)}I=I.sibling}e:for(I=null,R=e;;){if(R.tag===5){if(I===null){I=R;try{l=R.stateNode,j?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(m=R.stateNode,v=R.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null,m.style.display=ju("display",d))}catch(Y){Ne(e,e.return,Y)}}}else if(R.tag===6){if(I===null)try{R.stateNode.nodeValue=j?"":R.memoizedProps}catch(Y){Ne(e,e.return,Y)}}else if((R.tag!==22&&R.tag!==23||R.memoizedState===null||R===e)&&R.child!==null){R.child.return=R,R=R.child;continue}if(R===e)break e;for(;R.sibling===null;){if(R.return===null||R.return===e)break e;I===R&&(I=null),R=R.return}I===R&&(I=null),R.sibling.return=R.return,R=R.sibling}}break;case 19:Tt(t,e),Dt(e),i&4&&Hf(e);break;case 21:break;default:Tt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uf(n)){var i=n;break e}n=n.return}throw Error(a(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(Lr(l,""),i.flags&=-33);var u=Wf(e);ql(e,u,l);break;case 3:case 4:var d=i.stateNode.containerInfo,m=Wf(e);Kl(e,m,d);break;default:throw Error(a(161))}}catch(v){Ne(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $m(e,t,n){W=e,Gf(e)}function Gf(e,t,n){for(var i=(e.mode&1)!==0;W!==null;){var l=W,u=l.child;if(l.tag===22&&i){var d=l.memoizedState!==null||Co;if(!d){var m=l.alternate,v=m!==null&&m.memoizedState!==null||nt;m=Co;var j=nt;if(Co=d,(nt=v)&&!j)for(W=l;W!==null;)d=W,v=d.child,d.tag===22&&d.memoizedState!==null?qf(l):v!==null?(v.return=d,W=v):qf(l);for(;u!==null;)W=u,Gf(u),u=u.sibling;W=l,Co=m,nt=j}Yf(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,W=u):Yf(e)}}function Yf(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||jo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!nt)if(n===null)i.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);i.componentDidUpdate(l,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Yc(t,u,i);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yc(t,d,n)}break;case 5:var m=t.stateNode;if(n===null&&t.flags&4){n=m;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&n.focus();break;case"img":v.src&&(n.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var I=j.memoizedState;if(I!==null){var R=I.dehydrated;R!==null&&Qr(R)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}nt||t.flags&512&&Yl(t)}catch(z){Ne(t,t.return,z)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Kf(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function qf(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(v){Ne(t,n,v)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var l=t.return;try{i.componentDidMount()}catch(v){Ne(t,l,v)}}var u=t.return;try{Yl(t)}catch(v){Ne(t,u,v)}break;case 5:var d=t.return;try{Yl(t)}catch(v){Ne(t,d,v)}}}catch(v){Ne(t,t.return,v)}if(t===e){W=null;break}var m=t.sibling;if(m!==null){m.return=t.return,W=m;break}W=t.return}}var Fm=Math.ceil,Po=Q.ReactCurrentDispatcher,Jl=Q.ReactCurrentOwner,wt=Q.ReactCurrentBatchConfig,pe=0,Be=null,Le=null,Ke=0,ht=0,wr=sn(0),Ae=0,mi=null,Ln=0,bo=0,Xl=0,gi=null,st=null,Zl=0,Sr=1/0,qt=null,To=!1,es=null,hn=null,No=!1,mn=null,zo=0,vi=0,ts=null,Io=-1,Oo=0;function it(){return(pe&6)!==0?Oe():Io!==-1?Io:Io=Oe()}function gn(e){return(e.mode&1)===0?1:(pe&2)!==0&&Ke!==0?Ke&-Ke:Em.transition!==null?(Oo===0&&(Oo=Uu()),Oo):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Ju(e.type)),e)}function Nt(e,t,n,i){if(50<vi)throw vi=0,ts=null,Error(a(185));Br(e,n,i),((pe&2)===0||e!==Be)&&(e===Be&&((pe&2)===0&&(bo|=n),Ae===4&&vn(e,Ke)),ut(e,i),n===1&&pe===0&&(t.mode&1)===0&&(Sr=Oe()+500,ao&&cn()))}function ut(e,t){var n=e.callbackNode;Eh(e,t);var i=Bi(e,e===Be?Ke:0);if(i===0)n!==null&&$u(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&$u(n),t===1)e.tag===0?km(Xf.bind(null,e)):Mc(Xf.bind(null,e)),ym(function(){(pe&6)===0&&cn()}),n=null;else{switch(Wu(i)){case 1:n=Ra;break;case 4:n=Fu;break;case 16:n=Di;break;case 536870912:n=Bu;break;default:n=Di}n=ad(n,Jf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jf(e,t){if(Io=-1,Oo=0,(pe&6)!==0)throw Error(a(327));var n=e.callbackNode;if(kr()&&e.callbackNode!==n)return null;var i=Bi(e,e===Be?Ke:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Ro(e,i);else{t=i;var l=pe;pe|=2;var u=ed();(Be!==e||Ke!==t)&&(qt=null,Sr=Oe()+500,Dn(e,t));do try{Wm();break}catch(m){Zf(e,m)}while(!0);xl(),Po.current=u,pe=l,Le!==null?t=0:(Be=null,Ke=0,t=Ae)}if(t!==0){if(t===2&&(l=La(e),l!==0&&(i=l,t=ns(e,l))),t===1)throw n=mi,Dn(e,0),vn(e,i),ut(e,Oe()),n;if(t===6)vn(e,i);else{if(l=e.current.alternate,(i&30)===0&&!Bm(l)&&(t=Ro(e,i),t===2&&(u=La(e),u!==0&&(i=u,t=ns(e,u))),t===1))throw n=mi,Dn(e,0),vn(e,i),ut(e,Oe()),n;switch(e.finishedWork=l,e.finishedLanes=i,t){case 0:case 1:throw Error(a(345));case 2:An(e,st,qt);break;case 3:if(vn(e,i),(i&130023424)===i&&(t=Zl+500-Oe(),10<t)){if(Bi(e,0)!==0)break;if(l=e.suspendedLanes,(l&i)!==i){it(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=sl(An.bind(null,e,st,qt),t);break}An(e,st,qt);break;case 4:if(vn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,l=-1;0<i;){var d=31-_t(i);u=1<<d,d=t[d],d>l&&(l=d),i&=~u}if(i=l,i=Oe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Fm(i/1960))-i,10<i){e.timeoutHandle=sl(An.bind(null,e,st,qt),i);break}An(e,st,qt);break;case 5:An(e,st,qt);break;default:throw Error(a(329))}}}return ut(e,Oe()),e.callbackNode===n?Jf.bind(null,e):null}function ns(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=st,st=n,t!==null&&rs(t)),e}function rs(e){st===null?st=e:st.push.apply(st,e)}function Bm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var l=n[i],u=l.getSnapshot;l=l.value;try{if(!Ct(u(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~Xl,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),i=1<<n;e[n]=-1,t&=~i}}function Xf(e){if((pe&6)!==0)throw Error(a(327));kr();var t=Bi(e,0);if((t&1)===0)return ut(e,Oe()),null;var n=Ro(e,t);if(e.tag!==0&&n===2){var i=La(e);i!==0&&(t=i,n=ns(e,i))}if(n===1)throw n=mi,Dn(e,0),vn(e,t),ut(e,Oe()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,st,qt),ut(e,Oe()),null}function is(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Sr=Oe()+500,ao&&cn())}}function Mn(e){mn!==null&&mn.tag===0&&(pe&6)===0&&kr();var t=pe;pe|=1;var n=wt.transition,i=xe;try{if(wt.transition=null,xe=1,e)return e()}finally{xe=i,wt.transition=n,pe=t,(pe&6)===0&&cn()}}function os(){ht=wr.current,_e(wr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vm(n)),Le!==null)for(n=Le.return;n!==null;){var i=n;switch(hl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&io();break;case 3:vr(),_e(ot),_e(Ze),Pl();break;case 5:Cl(i);break;case 4:vr();break;case 13:_e(be);break;case 19:_e(be);break;case 10:wl(i.type._context);break;case 22:case 23:os()}n=n.return}if(Be=e,Le=e=yn(e.current,null),Ke=ht=t,Ae=0,mi=null,Xl=bo=Ln=0,st=gi=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],i=n.interleaved,i!==null){n.interleaved=null;var l=i.next,u=n.pending;if(u!==null){var d=u.next;u.next=l,i.next=d}n.pending=i}In=null}return e}function Zf(e,t){do{var n=Le;try{if(xl(),vo.current=So,yo){for(var i=Te.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}yo=!1}if(Rn=0,Fe=De=Te=null,ui=!1,ci=0,Jl.current=null,n===null||n.return===null){Ae=1,mi=t,Le=null;break}e:{var u=e,d=n.return,m=n,v=t;if(t=Ke,m.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var j=v,I=m,R=I.tag;if((I.mode&1)===0&&(R===0||R===11||R===15)){var z=I.alternate;z?(I.updateQueue=z.updateQueue,I.memoizedState=z.memoizedState,I.lanes=z.lanes):(I.updateQueue=null,I.memoizedState=null)}var B=_f(d);if(B!==null){B.flags&=-257,Cf(B,d,m,u,t),B.mode&1&&Ef(u,j,t),t=B,v=j;var H=t.updateQueue;if(H===null){var Y=new Set;Y.add(v),t.updateQueue=Y}else H.add(v);break e}else{if((t&1)===0){Ef(u,j,t),as();break e}v=Error(a(426))}}else if(Pe&&m.mode&1){var Re=_f(d);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),Cf(Re,d,m,u,t),vl(yr(v,m));break e}}u=v=yr(v,m),Ae!==4&&(Ae=2),gi===null?gi=[u]:gi.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var _=Sf(u,v,t);Gc(u,_);break e;case 1:m=v;var w=u.type,C=u.stateNode;if((u.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(hn===null||!hn.has(C)))){u.flags|=65536,t&=-t,u.lanes|=t;var M=kf(u,m,t);Gc(u,M);break e}}u=u.return}while(u!==null)}nd(n)}catch(K){t=K,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function ed(){var e=Po.current;return Po.current=So,e===null?So:e}function as(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Be===null||(Ln&268435455)===0&&(bo&268435455)===0||vn(Be,Ke)}function Ro(e,t){var n=pe;pe|=2;var i=ed();(Be!==e||Ke!==t)&&(qt=null,Dn(e,t));do try{Um();break}catch(l){Zf(e,l)}while(!0);if(xl(),pe=n,Po.current=i,Le!==null)throw Error(a(261));return Be=null,Ke=0,Ae}function Um(){for(;Le!==null;)td(Le)}function Wm(){for(;Le!==null&&!hh();)td(Le)}function td(e){var t=od(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?nd(e):Le=t,Jl.current=null}function nd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Lm(n,t,ht),n!==null){Le=n;return}}else{if(n=Mm(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Ae===0&&(Ae=5)}function An(e,t,n){var i=xe,l=wt.transition;try{wt.transition=null,xe=1,Vm(e,t,n,i)}finally{wt.transition=l,xe=i}return null}function Vm(e,t,n,i){do kr();while(mn!==null);if((pe&6)!==0)throw Error(a(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(_h(e,u),e===Be&&(Le=Be=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||No||(No=!0,ad(Di,function(){return kr(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=wt.transition,wt.transition=null;var d=xe;xe=1;var m=pe;pe|=4,Jl.current=null,Am(e,n),Qf(n,e),cm(al),Vi=!!ol,al=ol=null,e.current=n,$m(n),mh(),pe=m,xe=d,wt.transition=u}else e.current=n;if(No&&(No=!1,mn=e,zo=l),u=e.pendingLanes,u===0&&(hn=null),yh(n.stateNode),ut(e,Oe()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],i(l.value,{componentStack:l.stack,digest:l.digest});if(To)throw To=!1,e=es,es=null,e;return(zo&1)!==0&&e.tag!==0&&kr(),u=e.pendingLanes,(u&1)!==0?e===ts?vi++:(vi=0,ts=e):vi=0,cn(),null}function kr(){if(mn!==null){var e=Wu(zo),t=wt.transition,n=xe;try{if(wt.transition=null,xe=16>e?16:e,mn===null)var i=!1;else{if(e=mn,mn=null,zo=0,(pe&6)!==0)throw Error(a(331));var l=pe;for(pe|=4,W=e.current;W!==null;){var u=W,d=u.child;if((W.flags&16)!==0){var m=u.deletions;if(m!==null){for(var v=0;v<m.length;v++){var j=m[v];for(W=j;W!==null;){var I=W;switch(I.tag){case 0:case 11:case 15:hi(8,I,u)}var R=I.child;if(R!==null)R.return=I,W=R;else for(;W!==null;){I=W;var z=I.sibling,B=I.return;if(Bf(I),I===j){W=null;break}if(z!==null){z.return=B,W=z;break}W=B}}}var H=u.alternate;if(H!==null){var Y=H.child;if(Y!==null){H.child=null;do{var Re=Y.sibling;Y.sibling=null,Y=Re}while(Y!==null)}}W=u}}if((u.subtreeFlags&2064)!==0&&d!==null)d.return=u,W=d;else e:for(;W!==null;){if(u=W,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:hi(9,u,u.return)}var _=u.sibling;if(_!==null){_.return=u.return,W=_;break e}W=u.return}}var w=e.current;for(W=w;W!==null;){d=W;var C=d.child;if((d.subtreeFlags&2064)!==0&&C!==null)C.return=d,W=C;else e:for(d=w;W!==null;){if(m=W,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:jo(9,m)}}catch(K){Ne(m,m.return,K)}if(m===d){W=null;break e}var M=m.sibling;if(M!==null){M.return=m.return,W=M;break e}W=m.return}}if(pe=l,cn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Ai,e)}catch{}i=!0}return i}finally{xe=n,wt.transition=t}}return!1}function rd(e,t,n){t=yr(n,t),t=Sf(e,t,1),e=dn(e,t,1),t=it(),e!==null&&(Br(e,1,t),ut(e,t))}function Ne(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hn===null||!hn.has(i))){e=yr(n,e),e=kf(t,e,1),t=dn(t,e,1),e=it(),t!==null&&(Br(t,1,e),ut(t,e));break}}t=t.return}}function Hm(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ke&n)===n&&(Ae===4||Ae===3&&(Ke&130023424)===Ke&&500>Oe()-Zl?Dn(e,0):Xl|=n),ut(e,t)}function id(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fi,Fi<<=1,(Fi&130023424)===0&&(Fi=4194304)));var n=it();e=Gt(e,t),e!==null&&(Br(e,t,n),ut(e,n))}function Qm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),id(e,n)}function Gm(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(a(314))}i!==null&&i.delete(t),id(e,n)}var od;od=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return lt=!1,Rm(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,Pe&&(t.flags&1048576)!==0&&Dc(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;_o(e,t),e=t.pendingProps;var l=cr(t,Ze.current);gr(t,n),l=Nl(null,t,i,e,l,n);var u=zl();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(i)?(u=!0,oo(t)):u=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,El(t),l.updater=ko,t.stateNode=l,l._reactInternals=t,Dl(t,i,e,n),t=Bl(null,t,i,!0,u,n)):(t.tag=0,Pe&&u&&pl(t),rt(null,t,l,n),t=t.child),t;case 16:i=t.elementType;e:{switch(_o(e,t),e=t.pendingProps,l=i._init,i=l(i._payload),t.type=i,l=t.tag=Km(i),e=Pt(i,e),l){case 0:t=Fl(null,t,i,e,n);break e;case 1:t=zf(null,t,i,e,n);break e;case 11:t=jf(null,t,i,e,n);break e;case 14:t=Pf(null,t,i,Pt(i.type,e),n);break e}throw Error(a(306,i,""))}return t;case 0:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Pt(i,l),Fl(e,t,i,l,n);case 1:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Pt(i,l),zf(e,t,i,l,n);case 3:e:{if(If(t),e===null)throw Error(a(387));i=t.pendingProps,u=t.memoizedState,l=u.element,Qc(e,t),mo(t,i,null,n);var d=t.memoizedState;if(i=d.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){l=yr(Error(a(423)),t),t=Of(e,t,i,n,l);break e}else if(i!==l){l=yr(Error(a(424)),t),t=Of(e,t,i,n,l);break e}else for(pt=ln(t.stateNode.containerInfo.firstChild),dt=t,Pe=!0,jt=null,n=Vc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),i===l){t=Kt(e,t,n);break e}rt(e,t,i,n)}t=t.child}return t;case 5:return Kc(t),e===null&&gl(t),i=t.type,l=t.pendingProps,u=e!==null?e.memoizedProps:null,d=l.children,ll(i,l)?d=null:u!==null&&ll(i,u)&&(t.flags|=32),Nf(e,t),rt(e,t,d,n),t.child;case 6:return e===null&&gl(t),null;case 13:return Rf(e,t,n);case 4:return _l(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=hr(t,null,i,n):rt(e,t,i,n),t.child;case 11:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Pt(i,l),jf(e,t,i,l,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,l=t.pendingProps,u=t.memoizedProps,d=l.value,Se(fo,i._currentValue),i._currentValue=d,u!==null)if(Ct(u.value,d)){if(u.children===l.children&&!ot.current){t=Kt(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var m=u.dependencies;if(m!==null){d=u.child;for(var v=m.firstContext;v!==null;){if(v.context===i){if(u.tag===1){v=Yt(-1,n&-n),v.tag=2;var j=u.updateQueue;if(j!==null){j=j.shared;var I=j.pending;I===null?v.next=v:(v.next=I.next,I.next=v),j.pending=v}}u.lanes|=n,v=u.alternate,v!==null&&(v.lanes|=n),Sl(u.return,n,t),m.lanes|=n;break}v=v.next}}else if(u.tag===10)d=u.type===t.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(a(341));d.lanes|=n,m=d.alternate,m!==null&&(m.lanes|=n),Sl(d,n,t),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===t){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}rt(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,i=t.pendingProps.children,gr(t,n),l=yt(l),i=i(l),t.flags|=1,rt(e,t,i,n),t.child;case 14:return i=t.type,l=Pt(i,t.pendingProps),l=Pt(i.type,l),Pf(e,t,i,l,n);case 15:return bf(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Pt(i,l),_o(e,t),t.tag=1,at(i)?(e=!0,oo(t)):e=!1,gr(t,n),xf(t,i,l),Dl(t,i,l,n),Bl(null,t,i,!0,e,n);case 19:return Mf(e,t,n);case 22:return Tf(e,t,n)}throw Error(a(156,t.tag))};function ad(e,t){return Au(e,t)}function Ym(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,i){return new Ym(e,t,n,i)}function ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Km(e){if(typeof e=="function")return ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===He)return 11;if(e===Xe)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,i,l,u){var d=2;if(i=e,typeof e=="function")ls(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case G:return $n(n.children,l,u,t);case ue:d=8,l|=8;break;case ke:return e=St(12,n,t,l|2),e.elementType=ke,e.lanes=u,e;case we:return e=St(13,n,t,l),e.elementType=we,e.lanes=u,e;case Qe:return e=St(19,n,t,l),e.elementType=Qe,e.lanes=u,e;case de:return Mo(n,l,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:d=10;break e;case Je:d=9;break e;case He:d=11;break e;case Xe:d=14;break e;case $e:d=16,i=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=St(d,n,t,l),t.elementType=e,t.type=i,t.lanes=u,t}function $n(e,t,n,i){return e=St(7,e,i,t),e.lanes=n,e}function Mo(e,t,n,i){return e=St(22,e,i,t),e.elementType=de,e.lanes=n,e.stateNode={isHidden:!1},e}function ss(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function us(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qm(e,t,n,i,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ma(0),this.expirationTimes=Ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ma(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function cs(e,t,n,i,l,u,d,m,v){return e=new qm(e,t,n,m,v),t===1?(t=1,u===!0&&(t|=8)):t=0,u=St(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},El(u),e}function Jm(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function ld(e){if(!e)return un;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(at(n))return Rc(e,n,t)}return t}function sd(e,t,n,i,l,u,d,m,v){return e=cs(n,i,!0,e,l,u,d,m,v),e.context=ld(null),n=e.current,i=it(),l=gn(n),u=Yt(i,l),u.callback=t??null,dn(n,u,l),e.current.lanes=l,Br(e,l,i),ut(e,i),e}function Do(e,t,n,i){var l=t.current,u=it(),d=gn(l);return n=ld(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(u,d),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=dn(l,t,d),e!==null&&(Nt(e,l,d,u),ho(e,l,d)),d}function Ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fs(e,t){ud(e,t),(e=e.alternate)&&ud(e,t)}function Xm(){return null}var cd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ds(e){this._internalRoot=e}$o.prototype.render=ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));Do(e,t,null,null)},$o.prototype.unmount=ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){Do(null,e,null,null)}),t[Wt]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Ku(e)}};function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(){}function Zm(e,t,n,i,l){if(l){if(typeof i=="function"){var u=i;i=function(){var j=Ao(d);u.call(j)}}var d=sd(t,i,e,0,null,!1,!1,"",fd);return e._reactRootContainer=d,e[Wt]=d.current,ti(e.nodeType===8?e.parentNode:e),Mn(),d}for(;l=e.lastChild;)e.removeChild(l);if(typeof i=="function"){var m=i;i=function(){var j=Ao(v);m.call(j)}}var v=cs(e,0,!1,null,null,!1,!1,"",fd);return e._reactRootContainer=v,e[Wt]=v.current,ti(e.nodeType===8?e.parentNode:e),Mn(function(){Do(t,v,n,i)}),v}function Bo(e,t,n,i,l){var u=n._reactRootContainer;if(u){var d=u;if(typeof l=="function"){var m=l;l=function(){var v=Ao(d);m.call(v)}}Do(t,d,e,l)}else d=Zm(n,t,e,l,i);return Ao(d)}Vu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(Da(t,n|1),ut(t,Oe()),(pe&6)===0&&(Sr=Oe()+500,cn()))}break;case 13:Mn(function(){var i=Gt(e,1);if(i!==null){var l=it();Nt(i,e,1,l)}}),fs(e,1)}},Aa=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=it();Nt(t,e,134217728,n)}fs(e,134217728)}},Hu=function(e){if(e.tag===13){var t=gn(e),n=Gt(e,t);if(n!==null){var i=it();Nt(n,e,t,i)}fs(e,t)}},Qu=function(){return xe},Gu=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},Na=function(e,t,n){switch(t){case"input":if(ka(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=ro(i);if(!l)throw Error(a(90));Et(i),ka(i,l)}}}break;case"textarea":ku(e,n);break;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}},zu=is,Iu=Mn;var eg={usingClientEntryPoint:!1,Events:[ii,sr,ro,Tu,Nu,is]},yi={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tg={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mu(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||Xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{Ai=Uo.inject(tg),Ot=Uo}catch{}}return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eg,ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(t))throw Error(a(200));return Jm(e,t,null,n)},ct.createRoot=function(e,t){if(!ps(e))throw Error(a(299));var n=!1,i="",l=cd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=cs(e,1,!1,null,null,n,!1,i,l),e[Wt]=t.current,ti(e.nodeType===8?e.parentNode:e),new ds(t)},ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Mu(t),e=e===null?null:e.stateNode,e},ct.flushSync=function(e){return Mn(e)},ct.hydrate=function(e,t,n){if(!Fo(t))throw Error(a(200));return Bo(null,e,t,!0,n)},ct.hydrateRoot=function(e,t,n){if(!ps(e))throw Error(a(405));var i=n!=null&&n.hydratedSources||null,l=!1,u="",d=cd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=sd(t,null,e,1,n??null,l,!1,u,d),e[Wt]=t.current,ti(e),i)for(e=0;e<i.length;e++)n=i[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new $o(t)},ct.render=function(e,t,n){if(!Fo(t))throw Error(a(200));return Bo(null,e,t,!1,n)},ct.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(a(40));return e._reactRootContainer?(Mn(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},ct.unstable_batchedUpdates=is,ct.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Fo(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Bo(e,t,n,!1,i)},ct.version="18.3.1-next-f1338f8080-20240426",ct}var xd;function ep(){if(xd)return gs.exports;xd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),gs.exports=sg(),gs.exports}var wd;function ug(){if(wd)return Wo;wd=1;var r=ep();return Wo.createRoot=r.createRoot,Wo.hydrateRoot=r.hydrateRoot,Wo}var mx=ug();function ta(){return ta=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var s in a)({}).hasOwnProperty.call(a,s)&&(r[s]=a[s])}return r},ta.apply(null,arguments)}function Zs(r,o){if(r==null)return{};var a={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(o.includes(s))continue;a[s]=r[s]}return a}function Ls(r,o){return Ls=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,s){return a.__proto__=s,a},Ls(r,o)}function eu(r,o){r.prototype=Object.create(o.prototype),r.prototype.constructor=r,Ls(r,o)}var xs={exports:{}},ws,Sd;function cg(){if(Sd)return ws;Sd=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ws=r,ws}var Ss,kd;function fg(){if(kd)return Ss;kd=1;var r=cg();function o(){}function a(){}return a.resetWarningCache=o,Ss=function(){function s(p,g,h,y,x,k){if(k!==r){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}s.isRequired=s;function c(){return s}var f={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:a,resetWarningCache:o};return f.PropTypes=f,f},Ss}var Ed;function dg(){return Ed||(Ed=1,xs.exports=fg()()),xs.exports}var pg=dg();const Bt=Js(pg);function hg(r,o){return r.classList?!!o&&r.classList.contains(o):(" "+(r.className.baseVal||r.className)+" ").indexOf(" "+o+" ")!==-1}function mg(r,o){r.classList?r.classList.add(o):hg(r,o)||(typeof r.className=="string"?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o))}function _d(r,o){return r.replace(new RegExp("(^|\\s)"+o+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function gg(r,o){r.classList?r.classList.remove(o):typeof r.className=="string"?r.className=_d(r.className,o):r.setAttribute("class",_d(r.className&&r.className.baseVal||"",o))}var vg=ep();const Vo=Js(vg),Cd={disabled:!1},na=ze.createContext(null);var tp=function(o){return o.scrollTop},Si="unmounted",Fn="exited",Bn="entering",Cr="entered",Ms="exiting",Zt=(function(r){eu(o,r);function o(s,c){var f;f=r.call(this,s,c)||this;var p=c,g=p&&!p.isMounting?s.enter:s.appear,h;return f.appearStatus=null,s.in?g?(h=Fn,f.appearStatus=Bn):h=Cr:s.unmountOnExit||s.mountOnEnter?h=Si:h=Fn,f.state={status:h},f.nextCallback=null,f}o.getDerivedStateFromProps=function(c,f){var p=c.in;return p&&f.status===Si?{status:Fn}:null};var a=o.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(c){var f=null;if(c!==this.props){var p=this.state.status;this.props.in?p!==Bn&&p!==Cr&&(f=Bn):(p===Bn||p===Cr)&&(f=Ms)}this.updateStatus(!1,f)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var c=this.props.timeout,f,p,g;return f=p=g=c,c!=null&&typeof c!="number"&&(f=c.exit,p=c.enter,g=c.appear!==void 0?c.appear:p),{exit:f,enter:p,appear:g}},a.updateStatus=function(c,f){if(c===void 0&&(c=!1),f!==null)if(this.cancelNextCallback(),f===Bn){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Vo.findDOMNode(this);p&&tp(p)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Fn&&this.setState({status:Si})},a.performEnter=function(c){var f=this,p=this.props.enter,g=this.context?this.context.isMounting:c,h=this.props.nodeRef?[g]:[Vo.findDOMNode(this),g],y=h[0],x=h[1],k=this.getTimeouts(),P=g?k.appear:k.enter;if(!c&&!p||Cd.disabled){this.safeSetState({status:Cr},function(){f.props.onEntered(y)});return}this.props.onEnter(y,x),this.safeSetState({status:Bn},function(){f.props.onEntering(y,x),f.onTransitionEnd(P,function(){f.safeSetState({status:Cr},function(){f.props.onEntered(y,x)})})})},a.performExit=function(){var c=this,f=this.props.exit,p=this.getTimeouts(),g=this.props.nodeRef?void 0:Vo.findDOMNode(this);if(!f||Cd.disabled){this.safeSetState({status:Fn},function(){c.props.onExited(g)});return}this.props.onExit(g),this.safeSetState({status:Ms},function(){c.props.onExiting(g),c.onTransitionEnd(p.exit,function(){c.safeSetState({status:Fn},function(){c.props.onExited(g)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(c,f){f=this.setNextCallback(f),this.setState(c,f)},a.setNextCallback=function(c){var f=this,p=!0;return this.nextCallback=function(g){p&&(p=!1,f.nextCallback=null,c(g))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},a.onTransitionEnd=function(c,f){this.setNextCallback(f);var p=this.props.nodeRef?this.props.nodeRef.current:Vo.findDOMNode(this),g=c==null&&!this.props.addEndListener;if(!p||g){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],y=h[0],x=h[1];this.props.addEndListener(y,x)}c!=null&&setTimeout(this.nextCallback,c)},a.render=function(){var c=this.state.status;if(c===Si)return null;var f=this.props,p=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var g=Zs(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ze.createElement(na.Provider,{value:null},typeof p=="function"?p(c,g):ze.cloneElement(ze.Children.only(p),g))},o})(ze.Component);Zt.contextType=na;Zt.propTypes={};function Er(){}Zt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Er,onEntering:Er,onEntered:Er,onExit:Er,onExiting:Er,onExited:Er};Zt.UNMOUNTED=Si;Zt.EXITED=Fn;Zt.ENTERING=Bn;Zt.ENTERED=Cr;Zt.EXITING=Ms;var yg=function(o,a){return o&&a&&a.split(" ").forEach(function(s){return mg(o,s)})},ks=function(o,a){return o&&a&&a.split(" ").forEach(function(s){return gg(o,s)})},_n=(function(r){eu(o,r);function o(){for(var s,c=arguments.length,f=new Array(c),p=0;p<c;p++)f[p]=arguments[p];return s=r.call.apply(r,[this].concat(f))||this,s.appliedClasses={appear:{},enter:{},exit:{}},s.onEnter=function(g,h){var y=s.resolveArguments(g,h),x=y[0],k=y[1];s.removeClasses(x,"exit"),s.addClass(x,k?"appear":"enter","base"),s.props.onEnter&&s.props.onEnter(g,h)},s.onEntering=function(g,h){var y=s.resolveArguments(g,h),x=y[0],k=y[1],P=k?"appear":"enter";s.addClass(x,P,"active"),s.props.onEntering&&s.props.onEntering(g,h)},s.onEntered=function(g,h){var y=s.resolveArguments(g,h),x=y[0],k=y[1],P=k?"appear":"enter";s.removeClasses(x,P),s.addClass(x,P,"done"),s.props.onEntered&&s.props.onEntered(g,h)},s.onExit=function(g){var h=s.resolveArguments(g),y=h[0];s.removeClasses(y,"appear"),s.removeClasses(y,"enter"),s.addClass(y,"exit","base"),s.props.onExit&&s.props.onExit(g)},s.onExiting=function(g){var h=s.resolveArguments(g),y=h[0];s.addClass(y,"exit","active"),s.props.onExiting&&s.props.onExiting(g)},s.onExited=function(g){var h=s.resolveArguments(g),y=h[0];s.removeClasses(y,"exit"),s.addClass(y,"exit","done"),s.props.onExited&&s.props.onExited(g)},s.resolveArguments=function(g,h){return s.props.nodeRef?[s.props.nodeRef.current,g]:[g,h]},s.getClassNames=function(g){var h=s.props.classNames,y=typeof h=="string",x=y&&h?h+"-":"",k=y?""+x+g:h[g],P=y?k+"-active":h[g+"Active"],L=y?k+"-done":h[g+"Done"];return{baseClassName:k,activeClassName:P,doneClassName:L}},s}var a=o.prototype;return a.addClass=function(c,f,p){var g=this.getClassNames(f)[p+"ClassName"],h=this.getClassNames("enter"),y=h.doneClassName;f==="appear"&&p==="done"&&y&&(g+=" "+y),p==="active"&&c&&tp(c),g&&(this.appliedClasses[f][p]=g,yg(c,g))},a.removeClasses=function(c,f){var p=this.appliedClasses[f],g=p.base,h=p.active,y=p.done;this.appliedClasses[f]={},g&&ks(c,g),h&&ks(c,h),y&&ks(c,y)},a.render=function(){var c=this.props;c.classNames;var f=Zs(c,["classNames"]);return ze.createElement(Zt,ta({},f,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o})(ze.Component);_n.defaultProps={classNames:""};_n.propTypes={};function xg(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function tu(r,o){var a=function(f){return o&&X.isValidElement(f)?o(f):f},s=Object.create(null);return r&&X.Children.map(r,function(c){return c}).forEach(function(c){s[c.key]=a(c)}),s}function wg(r,o){r=r||{},o=o||{};function a(x){return x in o?o[x]:r[x]}var s=Object.create(null),c=[];for(var f in r)f in o?c.length&&(s[f]=c,c=[]):c.push(f);var p,g={};for(var h in o){if(s[h])for(p=0;p<s[h].length;p++){var y=s[h][p];g[s[h][p]]=a(y)}g[h]=a(h)}for(p=0;p<c.length;p++)g[c[p]]=a(c[p]);return g}function Un(r,o,a){return a[o]!=null?a[o]:r.props[o]}function Sg(r,o){return tu(r.children,function(a){return X.cloneElement(a,{onExited:o.bind(null,a),in:!0,appear:Un(a,"appear",r),enter:Un(a,"enter",r),exit:Un(a,"exit",r)})})}function kg(r,o,a){var s=tu(r.children),c=wg(o,s);return Object.keys(c).forEach(function(f){var p=c[f];if(X.isValidElement(p)){var g=f in o,h=f in s,y=o[f],x=X.isValidElement(y)&&!y.props.in;h&&(!g||x)?c[f]=X.cloneElement(p,{onExited:a.bind(null,p),in:!0,exit:Un(p,"exit",r),enter:Un(p,"enter",r)}):!h&&g&&!x?c[f]=X.cloneElement(p,{in:!1}):h&&g&&X.isValidElement(y)&&(c[f]=X.cloneElement(p,{onExited:a.bind(null,p),in:y.props.in,exit:Un(p,"exit",r),enter:Un(p,"enter",r)}))}}),c}var Eg=Object.values||function(r){return Object.keys(r).map(function(o){return r[o]})},_g={component:"div",childFactory:function(o){return o}},Gn=(function(r){eu(o,r);function o(s,c){var f;f=r.call(this,s,c)||this;var p=f.handleExited.bind(xg(f));return f.state={contextValue:{isMounting:!0},handleExited:p,firstRender:!0},f}var a=o.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(c,f){var p=f.children,g=f.handleExited,h=f.firstRender;return{children:h?Sg(c,g):kg(c,p,g),firstRender:!1}},a.handleExited=function(c,f){var p=tu(this.props.children);c.key in p||(c.props.onExited&&c.props.onExited(f),this.mounted&&this.setState(function(g){var h=ta({},g.children);return delete h[c.key],{children:h}}))},a.render=function(){var c=this.props,f=c.component,p=c.childFactory,g=Zs(c,["component","childFactory"]),h=this.state.contextValue,y=Eg(this.state.children).map(p);return delete g.appear,delete g.enter,delete g.exit,f===null?ze.createElement(na.Provider,{value:h},y):ze.createElement(na.Provider,{value:h},ze.createElement(f,g,y))},o})(ze.Component);Gn.propTypes={};Gn.defaultProps=_g;var Ve=function(){return Ve=Object.assign||function(o){for(var a,s=1,c=arguments.length;s<c;s++){a=arguments[s];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(o[f]=a[f])}return o},Ve.apply(this,arguments)};function Pi(r,o,a){if(a||arguments.length===2)for(var s=0,c=o.length,f;s<c;s++)(f||!(s in o))&&(f||(f=Array.prototype.slice.call(o,0,s)),f[s]=o[s]);return r.concat(f||Array.prototype.slice.call(o))}var Ce="-ms-",_i="-moz-",ve="-webkit-",np="comm",fa="rule",nu="decl",Cg="@import",rp="@keyframes",jg="@layer",ip=Math.abs,ru=String.fromCharCode,Ds=Object.assign;function Pg(r,o){return We(r,0)^45?(((o<<2^We(r,0))<<2^We(r,1))<<2^We(r,2))<<2^We(r,3):0}function op(r){return r.trim()}function Jt(r,o){return(r=o.exec(r))?r[0]:r}function le(r,o,a){return r.replace(o,a)}function Ko(r,o,a){return r.indexOf(o,a)}function We(r,o){return r.charCodeAt(o)|0}function br(r,o,a){return r.slice(o,a)}function At(r){return r.length}function ap(r){return r.length}function ki(r,o){return o.push(r),r}function bg(r,o){return r.map(o).join("")}function jd(r,o){return r.filter(function(a){return!Jt(a,o)})}var da=1,Tr=1,lp=0,kt=0,Me=0,Ir="";function pa(r,o,a,s,c,f,p,g){return{value:r,root:o,parent:a,type:s,props:c,children:f,line:da,column:Tr,length:p,return:"",siblings:g}}function Sn(r,o){return Ds(pa("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},o)}function _r(r){for(;r.root;)r=Sn(r.root,{children:[r]});ki(r,r.siblings)}function Tg(){return Me}function Ng(){return Me=kt>0?We(Ir,--kt):0,Tr--,Me===10&&(Tr=1,da--),Me}function It(){return Me=kt<lp?We(Ir,kt++):0,Tr++,Me===10&&(Tr=1,da++),Me}function Hn(){return We(Ir,kt)}function qo(){return kt}function ha(r,o){return br(Ir,r,o)}function As(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zg(r){return da=Tr=1,lp=At(Ir=r),kt=0,[]}function Ig(r){return Ir="",r}function Es(r){return op(ha(kt-1,$s(r===91?r+2:r===40?r+1:r)))}function Og(r){for(;(Me=Hn())&&Me<33;)It();return As(r)>2||As(Me)>3?"":" "}function Rg(r,o){for(;--o&&It()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return ha(r,qo()+(o<6&&Hn()==32&&It()==32))}function $s(r){for(;It();)switch(Me){case r:return kt;case 34:case 39:r!==34&&r!==39&&$s(Me);break;case 40:r===41&&$s(r);break;case 92:It();break}return kt}function Lg(r,o){for(;It()&&r+Me!==57;)if(r+Me===84&&Hn()===47)break;return"/*"+ha(o,kt-1)+"*"+ru(r===47?r:It())}function Mg(r){for(;!As(Hn());)It();return ha(r,kt)}function Dg(r){return Ig(Jo("",null,null,null,[""],r=zg(r),0,[0],r))}function Jo(r,o,a,s,c,f,p,g,h){for(var y=0,x=0,k=p,P=0,L=0,T=0,N=1,D=1,q=1,O=0,A="",Q=c,re=f,U=s,G=A;D;)switch(T=O,O=It()){case 40:if(T!=108&&We(G,k-1)==58){Ko(G+=le(Es(O),"&","&\f"),"&\f",ip(y?g[y-1]:0))!=-1&&(q=-1);break}case 34:case 39:case 91:G+=Es(O);break;case 9:case 10:case 13:case 32:G+=Og(T);break;case 92:G+=Rg(qo()-1,7);continue;case 47:switch(Hn()){case 42:case 47:ki(Ag(Lg(It(),qo()),o,a,h),h);break;default:G+="/"}break;case 123*N:g[y++]=At(G)*q;case 125*N:case 59:case 0:switch(O){case 0:case 125:D=0;case 59+x:q==-1&&(G=le(G,/\f/g,"")),L>0&&At(G)-k&&ki(L>32?bd(G+";",s,a,k-1,h):bd(le(G," ","")+";",s,a,k-2,h),h);break;case 59:G+=";";default:if(ki(U=Pd(G,o,a,y,x,c,g,A,Q=[],re=[],k,f),f),O===123)if(x===0)Jo(G,o,U,U,Q,f,k,g,re);else switch(P===99&&We(G,3)===110?100:P){case 100:case 108:case 109:case 115:Jo(r,U,U,s&&ki(Pd(r,U,U,0,0,c,g,A,c,Q=[],k,re),re),c,re,k,g,s?Q:re);break;default:Jo(G,U,U,U,[""],re,0,g,re)}}y=x=L=0,N=q=1,A=G="",k=p;break;case 58:k=1+At(G),L=T;default:if(N<1){if(O==123)--N;else if(O==125&&N++==0&&Ng()==125)continue}switch(G+=ru(O),O*N){case 38:q=x>0?1:(G+="\f",-1);break;case 44:g[y++]=(At(G)-1)*q,q=1;break;case 64:Hn()===45&&(G+=Es(It())),P=Hn(),x=k=At(A=G+=Mg(qo())),O++;break;case 45:T===45&&At(G)==2&&(N=0)}}return f}function Pd(r,o,a,s,c,f,p,g,h,y,x,k){for(var P=c-1,L=c===0?f:[""],T=ap(L),N=0,D=0,q=0;N<s;++N)for(var O=0,A=br(r,P+1,P=ip(D=p[N])),Q=r;O<T;++O)(Q=op(D>0?L[O]+" "+A:le(A,/&\f/g,L[O])))&&(h[q++]=Q);return pa(r,o,a,c===0?fa:g,h,y,x,k)}function Ag(r,o,a,s){return pa(r,o,a,np,ru(Tg()),br(r,2,-2),0,s)}function bd(r,o,a,s,c){return pa(r,o,a,nu,br(r,0,s),br(r,s+1,-1),s,c)}function sp(r,o,a){switch(Pg(r,o)){case 5103:return ve+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+r+r;case 4789:return _i+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+r+_i+r+Ce+r+r;case 5936:switch(We(r,o+11)){case 114:return ve+r+Ce+le(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return ve+r+Ce+le(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return ve+r+Ce+le(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return ve+r+Ce+r+r;case 6165:return ve+r+Ce+"flex-"+r+r;case 5187:return ve+r+le(r,/(\w+).+(:[^]+)/,ve+"box-$1$2"+Ce+"flex-$1$2")+r;case 5443:return ve+r+Ce+"flex-item-"+le(r,/flex-|-self/g,"")+(Jt(r,/flex-|baseline/)?"":Ce+"grid-row-"+le(r,/flex-|-self/g,""))+r;case 4675:return ve+r+Ce+"flex-line-pack"+le(r,/align-content|flex-|-self/g,"")+r;case 5548:return ve+r+Ce+le(r,"shrink","negative")+r;case 5292:return ve+r+Ce+le(r,"basis","preferred-size")+r;case 6060:return ve+"box-"+le(r,"-grow","")+ve+r+Ce+le(r,"grow","positive")+r;case 4554:return ve+le(r,/([^-])(transform)/g,"$1"+ve+"$2")+r;case 6187:return le(le(le(r,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),r,"")+r;case 5495:case 3959:return le(r,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return le(le(r,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+r+r;case 4200:if(!Jt(r,/flex-|baseline/))return Ce+"grid-column-align"+br(r,o)+r;break;case 2592:case 3360:return Ce+le(r,"template-","")+r;case 4384:case 3616:return a&&a.some(function(s,c){return o=c,Jt(s.props,/grid-\w+-end/)})?~Ko(r+(a=a[o].value),"span",0)?r:Ce+le(r,"-start","")+r+Ce+"grid-row-span:"+(~Ko(a,"span",0)?Jt(a,/\d+/):+Jt(a,/\d+/)-+Jt(r,/\d+/))+";":Ce+le(r,"-start","")+r;case 4896:case 4128:return a&&a.some(function(s){return Jt(s.props,/grid-\w+-start/)})?r:Ce+le(le(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return le(r,/(.+)-inline(.+)/,ve+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(r)-1-o>6)switch(We(r,o+1)){case 109:if(We(r,o+4)!==45)break;case 102:return le(r,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+_i+(We(r,o+3)==108?"$3":"$2-$3"))+r;case 115:return~Ko(r,"stretch",0)?sp(le(r,"stretch","fill-available"),o,a)+r:r}break;case 5152:case 5920:return le(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,f,p,g,h,y){return Ce+c+":"+f+y+(p?Ce+c+"-span:"+(g?h:+h-+f)+y:"")+r});case 4949:if(We(r,o+6)===121)return le(r,":",":"+ve)+r;break;case 6444:switch(We(r,We(r,14)===45?18:11)){case 120:return le(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ve+(We(r,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+Ce+"$2box$3")+r;case 100:return le(r,":",":"+Ce)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(r,"scroll-","scroll-snap-")+r}return r}function ra(r,o){for(var a="",s=0;s<r.length;s++)a+=o(r[s],s,r,o)||"";return a}function $g(r,o,a,s){switch(r.type){case jg:if(r.children.length)break;case Cg:case nu:return r.return=r.return||r.value;case np:return"";case rp:return r.return=r.value+"{"+ra(r.children,s)+"}";case fa:if(!At(r.value=r.props.join(",")))return""}return At(a=ra(r.children,s))?r.return=r.value+"{"+a+"}":""}function Fg(r){var o=ap(r);return function(a,s,c,f){for(var p="",g=0;g<o;g++)p+=r[g](a,s,c,f)||"";return p}}function Bg(r){return function(o){o.root||(o=o.return)&&r(o)}}function Ug(r,o,a,s){if(r.length>-1&&!r.return)switch(r.type){case nu:r.return=sp(r.value,r.length,a);return;case rp:return ra([Sn(r,{value:le(r.value,"@","@"+ve)})],s);case fa:if(r.length)return bg(a=r.props,function(c){switch(Jt(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_r(Sn(r,{props:[le(c,/:(read-\w+)/,":"+_i+"$1")]})),_r(Sn(r,{props:[c]})),Ds(r,{props:jd(a,s)});break;case"::placeholder":_r(Sn(r,{props:[le(c,/:(plac\w+)/,":"+ve+"input-$1")]})),_r(Sn(r,{props:[le(c,/:(plac\w+)/,":"+_i+"$1")]})),_r(Sn(r,{props:[le(c,/:(plac\w+)/,Ce+"input-$1")]})),_r(Sn(r,{props:[c]})),Ds(r,{props:jd(a,s)});break}return""})}}var Wg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mt={},Nr=typeof process<"u"&&mt!==void 0&&(mt.REACT_APP_SC_ATTR||mt.SC_ATTR)||"data-styled",up="active",cp="data-styled-version",ma="6.1.14",iu=`/*!sc*/
`,ia=typeof window<"u"&&"HTMLElement"in window,Vg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&mt!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==""?mt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&mt!==void 0&&mt.SC_DISABLE_SPEEDY!==void 0&&mt.SC_DISABLE_SPEEDY!==""&&mt.SC_DISABLE_SPEEDY!=="false"&&mt.SC_DISABLE_SPEEDY),Hg={},ga=Object.freeze([]),zr=Object.freeze({});function fp(r,o,a){return a===void 0&&(a=zr),r.theme!==a.theme&&r.theme||o||a.theme}var dp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gg=/(^-|-$)/g;function Td(r){return r.replace(Qg,"-").replace(Gg,"")}var Yg=/(a)(d)/gi,Ho=52,Nd=function(r){return String.fromCharCode(r+(r>25?39:97))};function Fs(r){var o,a="";for(o=Math.abs(r);o>Ho;o=o/Ho|0)a=Nd(o%Ho)+a;return(Nd(o%Ho)+a).replace(Yg,"$1-$2")}var _s,pp=5381,jr=function(r,o){for(var a=o.length;a;)r=33*r^o.charCodeAt(--a);return r},hp=function(r){return jr(pp,r)};function mp(r){return Fs(hp(r)>>>0)}function Kg(r){return r.displayName||r.name||"Component"}function Cs(r){return typeof r=="string"&&!0}var gp=typeof Symbol=="function"&&Symbol.for,vp=gp?Symbol.for("react.memo"):60115,qg=gp?Symbol.for("react.forward_ref"):60112,Jg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zg=((_s={})[qg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_s[vp]=yp,_s);function zd(r){return("type"in(o=r)&&o.type.$$typeof)===vp?yp:"$$typeof"in r?Zg[r.$$typeof]:Jg;var o}var ev=Object.defineProperty,tv=Object.getOwnPropertyNames,Id=Object.getOwnPropertySymbols,nv=Object.getOwnPropertyDescriptor,rv=Object.getPrototypeOf,Od=Object.prototype;function xp(r,o,a){if(typeof o!="string"){if(Od){var s=rv(o);s&&s!==Od&&xp(r,s,a)}var c=tv(o);Id&&(c=c.concat(Id(o)));for(var f=zd(r),p=zd(o),g=0;g<c.length;++g){var h=c[g];if(!(h in Xg||a&&a[h]||p&&h in p||f&&h in f)){var y=nv(o,h);try{ev(r,h,y)}catch{}}}}return r}function Yn(r){return typeof r=="function"}function ou(r){return typeof r=="object"&&"styledComponentId"in r}function Wn(r,o){return r&&o?"".concat(r," ").concat(o):r||o||""}function Bs(r,o){if(r.length===0)return"";for(var a=r[0],s=1;s<r.length;s++)a+=r[s];return a}function bi(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Us(r,o,a){if(a===void 0&&(a=!1),!a&&!bi(r)&&!Array.isArray(r))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)r[s]=Us(r[s],o[s]);else if(bi(o))for(var s in o)r[s]=Us(r[s],o[s]);return r}function au(r,o){Object.defineProperty(r,"toString",{value:o})}function Kn(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var iv=(function(){function r(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return r.prototype.indexOfGroup=function(o){for(var a=0,s=0;s<o;s++)a+=this.groupSizes[s];return a},r.prototype.insertRules=function(o,a){if(o>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,f=c;o>=f;)if((f<<=1)<0)throw Kn(16,"".concat(o));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var p=c;p<f;p++)this.groupSizes[p]=0}for(var g=this.indexOfGroup(o+1),h=(p=0,a.length);p<h;p++)this.tag.insertRule(g,a[p])&&(this.groupSizes[o]++,g++)},r.prototype.clearGroup=function(o){if(o<this.length){var a=this.groupSizes[o],s=this.indexOfGroup(o),c=s+a;this.groupSizes[o]=0;for(var f=s;f<c;f++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(o){var a="";if(o>=this.length||this.groupSizes[o]===0)return a;for(var s=this.groupSizes[o],c=this.indexOfGroup(o),f=c+s,p=c;p<f;p++)a+="".concat(this.tag.getRule(p)).concat(iu);return a},r})(),Xo=new Map,oa=new Map,Zo=1,Qo=function(r){if(Xo.has(r))return Xo.get(r);for(;oa.has(Zo);)Zo++;var o=Zo++;return Xo.set(r,o),oa.set(o,r),o},ov=function(r,o){Zo=o+1,Xo.set(r,o),oa.set(o,r)},av="style[".concat(Nr,"][").concat(cp,'="').concat(ma,'"]'),lv=new RegExp("^".concat(Nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sv=function(r,o,a){for(var s,c=a.split(","),f=0,p=c.length;f<p;f++)(s=c[f])&&r.registerName(o,s)},uv=function(r,o){for(var a,s=((a=o.textContent)!==null&&a!==void 0?a:"").split(iu),c=[],f=0,p=s.length;f<p;f++){var g=s[f].trim();if(g){var h=g.match(lv);if(h){var y=0|parseInt(h[1],10),x=h[2];y!==0&&(ov(x,y),sv(r,x,h[3]),r.getTag().insertRules(y,c)),c.length=0}else c.push(g)}}},Rd=function(r){for(var o=document.querySelectorAll(av),a=0,s=o.length;a<s;a++){var c=o[a];c&&c.getAttribute(Nr)!==up&&(uv(r,c),c.parentNode&&c.parentNode.removeChild(c))}};function cv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wp=function(r){var o=document.head,a=r||o,s=document.createElement("style"),c=(function(g){var h=Array.from(g.querySelectorAll("style[".concat(Nr,"]")));return h[h.length-1]})(a),f=c!==void 0?c.nextSibling:null;s.setAttribute(Nr,up),s.setAttribute(cp,ma);var p=cv();return p&&s.setAttribute("nonce",p),a.insertBefore(s,f),s},fv=(function(){function r(o){this.element=wp(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){if(a.sheet)return a.sheet;for(var s=document.styleSheets,c=0,f=s.length;c<f;c++){var p=s[c];if(p.ownerNode===a)return p}throw Kn(17)})(this.element),this.length=0}return r.prototype.insertRule=function(o,a){try{return this.sheet.insertRule(a,o),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},r.prototype.getRule=function(o){var a=this.sheet.cssRules[o];return a&&a.cssText?a.cssText:""},r})(),dv=(function(){function r(o){this.element=wp(o),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(o,a){if(o<=this.length&&o>=0){var s=document.createTextNode(a);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},r.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},r})(),pv=(function(){function r(o){this.rules=[],this.length=0}return r.prototype.insertRule=function(o,a){return o<=this.length&&(this.rules.splice(o,0,a),this.length++,!0)},r.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},r.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},r})(),Ld=ia,hv={isServer:!ia,useCSSOMInjection:!Vg},aa=(function(){function r(o,a,s){o===void 0&&(o=zr),a===void 0&&(a={});var c=this;this.options=Ve(Ve({},hv),o),this.gs=a,this.names=new Map(s),this.server=!!o.isServer,!this.server&&ia&&Ld&&(Ld=!1,Rd(this)),au(this,function(){return(function(f){for(var p=f.getTag(),g=p.length,h="",y=function(k){var P=(function(q){return oa.get(q)})(k);if(P===void 0)return"continue";var L=f.names.get(P),T=p.getGroup(k);if(L===void 0||!L.size||T.length===0)return"continue";var N="".concat(Nr,".g").concat(k,'[id="').concat(P,'"]'),D="";L!==void 0&&L.forEach(function(q){q.length>0&&(D+="".concat(q,","))}),h+="".concat(T).concat(N,'{content:"').concat(D,'"}').concat(iu)},x=0;x<g;x++)y(x);return h})(c)})}return r.registerId=function(o){return Qo(o)},r.prototype.rehydrate=function(){!this.server&&ia&&Rd(this)},r.prototype.reconstructWithOptions=function(o,a){return a===void 0&&(a=!0),new r(Ve(Ve({},this.options),o),this.gs,a&&this.names||void 0)},r.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(a){var s=a.useCSSOMInjection,c=a.target;return a.isServer?new pv(c):s?new fv(c):new dv(c)})(this.options),new iv(o)));var o},r.prototype.hasNameForId=function(o,a){return this.names.has(o)&&this.names.get(o).has(a)},r.prototype.registerName=function(o,a){if(Qo(o),this.names.has(o))this.names.get(o).add(a);else{var s=new Set;s.add(a),this.names.set(o,s)}},r.prototype.insertRules=function(o,a,s){this.registerName(o,a),this.getTag().insertRules(Qo(o),s)},r.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},r.prototype.clearRules=function(o){this.getTag().clearGroup(Qo(o)),this.clearNames(o)},r.prototype.clearTag=function(){this.tag=void 0},r})(),mv=/&/g,gv=/^\s*\/\/.*$/gm;function Sp(r,o){return r.map(function(a){return a.type==="rule"&&(a.value="".concat(o," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(o," ")),a.props=a.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Sp(a.children,o)),a})}function vv(r){var o,a,s,c=zr,f=c.options,p=f===void 0?zr:f,g=c.plugins,h=g===void 0?ga:g,y=function(P,L,T){return T.startsWith(a)&&T.endsWith(a)&&T.replaceAll(a,"").length>0?".".concat(o):P},x=h.slice();x.push(function(P){P.type===fa&&P.value.includes("&")&&(P.props[0]=P.props[0].replace(mv,a).replace(s,y))}),p.prefix&&x.push(Ug),x.push($g);var k=function(P,L,T,N){L===void 0&&(L=""),T===void 0&&(T=""),N===void 0&&(N="&"),o=N,a=L,s=new RegExp("\\".concat(a,"\\b"),"g");var D=P.replace(gv,""),q=Dg(T||L?"".concat(T," ").concat(L," { ").concat(D," }"):D);p.namespace&&(q=Sp(q,p.namespace));var O=[];return ra(q,Fg(x.concat(Bg(function(A){return O.push(A)})))),O};return k.hash=h.length?h.reduce(function(P,L){return L.name||Kn(15),jr(P,L.name)},pp).toString():"",k}var yv=new aa,Ws=vv(),kp=ze.createContext({shouldForwardProp:void 0,styleSheet:yv,stylis:Ws});kp.Consumer;ze.createContext(void 0);function Vs(){return X.useContext(kp)}var xv=(function(){function r(o,a){var s=this;this.inject=function(c,f){f===void 0&&(f=Ws);var p=s.name+f.hash;c.hasNameForId(s.id,p)||c.insertRules(s.id,p,f(s.rules,p,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=a,au(this,function(){throw Kn(12,String(s.name))})}return r.prototype.getName=function(o){return o===void 0&&(o=Ws),this.name+o.hash},r})(),wv=function(r){return r>="A"&&r<="Z"};function Md(r){for(var o="",a=0;a<r.length;a++){var s=r[a];if(a===1&&s==="-"&&r[0]==="-")return r;wv(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var Ep=function(r){return r==null||r===!1||r===""},_p=function(r){var o,a,s=[];for(var c in r){var f=r[c];r.hasOwnProperty(c)&&!Ep(f)&&(Array.isArray(f)&&f.isCss||Yn(f)?s.push("".concat(Md(c),":"),f,";"):bi(f)?s.push.apply(s,Pi(Pi(["".concat(c," {")],_p(f),!1),["}"],!1)):s.push("".concat(Md(c),": ").concat((o=c,(a=f)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||o in Wg||o.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return s};function kn(r,o,a,s){if(Ep(r))return[];if(ou(r))return[".".concat(r.styledComponentId)];if(Yn(r)){if(!Yn(f=r)||f.prototype&&f.prototype.isReactComponent||!o)return[r];var c=r(o);return kn(c,o,a,s)}var f;return r instanceof xv?a?(r.inject(a,s),[r.getName(s)]):[r]:bi(r)?_p(r):Array.isArray(r)?Array.prototype.concat.apply(ga,r.map(function(p){return kn(p,o,a,s)})):[r.toString()]}function Cp(r){for(var o=0;o<r.length;o+=1){var a=r[o];if(Yn(a)&&!ou(a))return!1}return!0}var Sv=hp(ma),kv=(function(){function r(o,a,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Cp(o),this.componentId=a,this.baseHash=jr(Sv,a),this.baseStyle=s,aa.registerId(a)}return r.prototype.generateAndInjectStyles=function(o,a,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,a,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))c=Wn(c,this.staticRulesId);else{var f=Bs(kn(this.rules,o,a,s)),p=Fs(jr(this.baseHash,f)>>>0);if(!a.hasNameForId(this.componentId,p)){var g=s(f,".".concat(p),void 0,this.componentId);a.insertRules(this.componentId,p,g)}c=Wn(c,p),this.staticRulesId=p}else{for(var h=jr(this.baseHash,s.hash),y="",x=0;x<this.rules.length;x++){var k=this.rules[x];if(typeof k=="string")y+=k;else if(k){var P=Bs(kn(k,o,a,s));h=jr(h,P+x),y+=P}}if(y){var L=Fs(h>>>0);a.hasNameForId(this.componentId,L)||a.insertRules(this.componentId,L,s(y,".".concat(L),void 0,this.componentId)),c=Wn(c,L)}}return c},r})(),Ti=ze.createContext(void 0);Ti.Consumer;function Ev(r){var o=ze.useContext(Ti),a=X.useMemo(function(){return(function(s,c){if(!s)throw Kn(14);if(Yn(s)){var f=s(c);return f}if(Array.isArray(s)||typeof s!="object")throw Kn(8);return c?Ve(Ve({},c),s):s})(r.theme,o)},[r.theme,o]);return r.children?ze.createElement(Ti.Provider,{value:a},r.children):null}var js={};function _v(r,o,a){var s=ou(r),c=r,f=!Cs(r),p=o.attrs,g=p===void 0?ga:p,h=o.componentId,y=h===void 0?(function(Q,re){var U=typeof Q!="string"?"sc":Td(Q);js[U]=(js[U]||0)+1;var G="".concat(U,"-").concat(mp(ma+U+js[U]));return re?"".concat(re,"-").concat(G):G})(o.displayName,o.parentComponentId):h,x=o.displayName,k=x===void 0?(function(Q){return Cs(Q)?"styled.".concat(Q):"Styled(".concat(Kg(Q),")")})(r):x,P=o.displayName&&o.componentId?"".concat(Td(o.displayName),"-").concat(o.componentId):o.componentId||y,L=s&&c.attrs?c.attrs.concat(g).filter(Boolean):g,T=o.shouldForwardProp;if(s&&c.shouldForwardProp){var N=c.shouldForwardProp;if(o.shouldForwardProp){var D=o.shouldForwardProp;T=function(Q,re){return N(Q,re)&&D(Q,re)}}else T=N}var q=new kv(a,P,s?c.componentStyle:void 0);function O(Q,re){return(function(U,G,ue){var ke=U.attrs,ce=U.componentStyle,Je=U.defaultProps,He=U.foldedComponentIds,we=U.styledComponentId,Qe=U.target,Xe=ze.useContext(Ti),$e=Vs(),de=U.shouldForwardProp||$e.shouldForwardProp,$=fp(G,Xe,Je)||zr,V=(function(oe,ae,ge){for(var fe,he=Ve(Ve({},ae),{className:void 0,theme:ge}),Ge=0;Ge<oe.length;Ge+=1){var Ut=Yn(fe=oe[Ge])?fe(he):fe;for(var Et in Ut)he[Et]=Et==="className"?Wn(he[Et],Ut[Et]):Et==="style"?Ve(Ve({},he[Et]),Ut[Et]):Ut[Et]}return ae.className&&(he.className=Wn(he.className,ae.className)),he})(ke,G,$),F=V.as||Qe,E={};for(var b in V)V[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&V.theme===$||(b==="forwardedAs"?E.as=V.forwardedAs:de&&!de(b,F)||(E[b]=V[b]));var te=(function(oe,ae){var ge=Vs(),fe=oe.generateAndInjectStyles(ae,ge.styleSheet,ge.stylis);return fe})(ce,V),ie=Wn(He,we);return te&&(ie+=" "+te),V.className&&(ie+=" "+V.className),E[Cs(F)&&!dp.has(F)?"class":"className"]=ie,ue&&(E.ref=ue),X.createElement(F,E)})(A,Q,re)}O.displayName=k;var A=ze.forwardRef(O);return A.attrs=L,A.componentStyle=q,A.displayName=k,A.shouldForwardProp=T,A.foldedComponentIds=s?Wn(c.foldedComponentIds,c.styledComponentId):"",A.styledComponentId=P,A.target=s?c.target:r,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=s?(function(re){for(var U=[],G=1;G<arguments.length;G++)U[G-1]=arguments[G];for(var ue=0,ke=U;ue<ke.length;ue++)Us(re,ke[ue],!0);return re})({},c.defaultProps,Q):Q}}),au(A,function(){return".".concat(A.styledComponentId)}),f&&xp(A,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function Dd(r,o){for(var a=[r[0]],s=0,c=o.length;s<c;s+=1)a.push(o[s],r[s+1]);return a}var Ad=function(r){return Object.assign(r,{isCss:!0})};function qe(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];if(Yn(r)||bi(r))return Ad(kn(Dd(ga,Pi([r],o,!0))));var s=r;return o.length===0&&s.length===1&&typeof s[0]=="string"?kn(s):Ad(kn(Dd(s,o)))}function Hs(r,o,a){if(a===void 0&&(a=zr),!o)throw Kn(1,o);var s=function(c){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return r(o,a,qe.apply(void 0,Pi([c],f,!1)))};return s.attrs=function(c){return Hs(r,o,Ve(Ve({},a),{attrs:Array.prototype.concat(a.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return Hs(r,o,Ve(Ve({},a),c))},s}var jp=function(r){return Hs(_v,r)},ye=jp;dp.forEach(function(r){ye[r]=jp(r)});var Cv=(function(){function r(o,a){this.rules=o,this.componentId=a,this.isStatic=Cp(o),aa.registerId(this.componentId+1)}return r.prototype.createStyles=function(o,a,s,c){var f=c(Bs(kn(this.rules,a,s,c)),""),p=this.componentId+o;s.insertRules(p,p,f)},r.prototype.removeStyles=function(o,a){a.clearRules(this.componentId+o)},r.prototype.renderStyles=function(o,a,s,c){o>2&&aa.registerId(this.componentId+o),this.removeStyles(o,s),this.createStyles(o,a,s,c)},r})();function jv(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];var s=qe.apply(void 0,Pi([r],o,!1)),c="sc-global-".concat(mp(JSON.stringify(s))),f=new Cv(s,c),p=function(h){var y=Vs(),x=ze.useContext(Ti),k=ze.useRef(y.styleSheet.allocateGSInstance(c)).current;return y.styleSheet.server&&g(k,h,y.styleSheet,x,y.stylis),ze.useLayoutEffect(function(){if(!y.styleSheet.server)return g(k,h,y.styleSheet,x,y.stylis),function(){return f.removeStyles(k,y.styleSheet)}},[k,h,y.styleSheet,x,y.stylis]),null};function g(h,y,x,k,P){if(f.isStatic)f.renderStyles(h,Hg,x,P);else{var L=Ve(Ve({},y),{theme:fp(y,k,p.defaultProps)});f.renderStyles(h,L,x,P)}}return ze.memo(p)}const Ni=(r="/")=>"/portfolio/"+r.replace(/^\//,""),Pv=1e3,la=2e3,Ci={ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ESCAPE:"Escape",ESCAPE_IE11:"Esc",TAB:"Tab"},bv=qe`
  color: var(--yellow);
  background-color: transparent;
  border: 1px solid var(--yellow);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  padding: 1.25rem 1.75rem;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--yellow);
    transform: translate(-5px, -5px);
  }
  &:after {
    display: none !important;
  }
`,Tv={flexCenter:qe`
    display: flex;
    justify-content: center;
    align-items: center;
  `,flexBetween:qe`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,link:qe`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--yellow);
      outline: 0;
    }
  `,inlineLink:qe`
    display: inline-block;
    position: relative;
    color: var(--yellow);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--yellow);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--yellow) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--yellow);
      opacity: 0.5;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,button:bv,smallButton:qe`
    color: var(--yellow);
    background-color: transparent;
    border: 1px solid var(--yellow);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 3px 3px 0 0 var(--yellow);
      transform: translate(-4px, -4px);
    }
    &:after {
      display: none !important;
    }
  `,bigButton:qe`
    color: var(--yellow);
    background-color: transparent;
    border: 1px solid var(--yellow);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--yellow);
      transform: translate(-5px, -5px);
    }
    &:after {
      display: none !important;
    }
  `,boxShadow:qe`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  `,fancyList:qe`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--yellow);
      }
    }
  `,resetList:qe`
    list-style: none;
    padding: 0;
    margin: 0;
  `},Nv={bp:{mobileS:"max-width: 330px",mobileM:"max-width: 400px",mobileL:"max-width: 480px",tabletS:"max-width: 600px",tabletL:"max-width: 768px",desktopXS:"max-width: 900px",desktopS:"max-width: 1080px",desktopM:"max-width: 1200px",desktopL:"max-width: 1400px"},mixins:Tv},zv="/portfolio/assets/Calibre-Regular--1hlrhWf.woff",Iv="/portfolio/assets/Calibre-Regular-BF8rtuU2.woff2",Ov="/portfolio/assets/Calibre-Medium-CLLEtnc8.woff",Rv="/portfolio/assets/Calibre-Medium-Dr3uPw4d.woff2",Lv="/portfolio/assets/Calibre-Semibold-4458Tx-4.woff",Mv="/portfolio/assets/Calibre-Semibold-ctWswtER.woff2",Dv="/portfolio/assets/Calibre-RegularItalic-CjzLnpHV.woff",Av="/portfolio/assets/Calibre-RegularItalic-iX0Te0iB.woff2",$v="/portfolio/assets/Calibre-MediumItalic-BO9nraGd.woff",Fv="/portfolio/assets/Calibre-MediumItalic-bP60ilMe.woff2",Bv="/portfolio/assets/Calibre-SemiboldItalic-27xyafhv.woff",Uv="/portfolio/assets/Calibre-SemiboldItalic-bSpOXIzM.woff2",Wv="/portfolio/assets/SFMono-Regular-pHQ7OiT5.woff",Vv="/portfolio/assets/SFMono-Regular-CefSygqP.woff2",Hv="/portfolio/assets/SFMono-Semibold-GntYHmax.woff",Qv="/portfolio/assets/SFMono-Semibold-Cbwo1XB1.woff2",Gv="/portfolio/assets/SFMono-RegularItalic-D-2lWrQW.woff",Yv="/portfolio/assets/SFMono-RegularItalic-Bqi1mbuH.woff2",Kv="/portfolio/assets/SFMono-SemiboldItalic-DwkXiFFS.woff",qv="/portfolio/assets/SFMono-SemiboldItalic-dYysnNTL.woff2",Jv={400:[zv,Iv],500:[Ov,Rv],600:[Lv,Mv]},Xv={400:[Dv,Av],500:[$v,Fv],600:[Bv,Uv]},Zv={400:[Wv,Vv],600:[Hv,Qv]},e0={400:[Gv,Yv],600:[Kv,qv]},Pp={name:"Calibre",normal:Jv,italic:Xv},bp={name:"SF Mono",normal:Zv,italic:e0},va=(r,o="normal")=>{let a="";for(const[s,c]of Object.entries(r[o])){const f=c[0],p=c[1];a+=`
      @font-face {
        font-family: '${r.name}';
        src: url(${p}) format('woff2'),
            url(${f}) format('woff');
        font-weight: ${s};
        font-style: ${o};
        font-display: auto;
      }
    `}return a},t0=va(Pp),n0=va(Pp,"italic"),r0=va(bp),i0=va(bp,"italic"),o0=qe`
  ${t0+n0+r0+i0}
`,a0=qe`
  :root {
    --dark-navy: #020c1b;
    --navy: #14213d;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --yellow: #ffb703;
    --yellow-tint: #fca311;
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`,l0=qe`
  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition:
      opacity 300ms var(--easing),
      transform 300ms var(--easing);
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition:
      opacity 300ms var(--easing),
      transform 300ms var(--easing);
  }

  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition:
      opacity 300ms var(--easing),
      transform 300ms var(--easing);
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition:
      opacity 300ms var(--easing),
      transform 300ms var(--easing);
  }

  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }
`,s0=jv`
  ${o0};
  ${a0};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--yellow);
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--yellow);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--navy);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--yellow);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  img,
  svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--yellow);
    }

    &.inline-link {
      ${({theme:r})=>r.mixins.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({theme:r})=>r.mixins.inlineLink};
    }

    & > code {
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--yellow);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--yellow);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .skip-to-content {
    ${({theme:r})=>r.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:hover,
    &:focus {
      background-color: var(--yellow);
      color: var(--navy);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
      box-shadow: none;
      transform: none;
    }
  }

  #logo {
    color: var(--yellow);
  }

  .overline {
    color: var(--yellow);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--yellow);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${({theme:r})=>r.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--yellow);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({theme:r})=>r.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  ${l0};
`,u0=ye.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,c0=({children:r,isHome:o=!1})=>{const[a,s]=X.useState(o),c=()=>{const f=Array.from(document.querySelectorAll("a"));f.length>0&&f.forEach(p=>{p.host!==window.location.host&&(p.setAttribute("rel","noopener noreferrer"),p.setAttribute("target","_blank"))})};return X.useEffect(()=>{if(!a){if(window.location.hash){const f=window.location.hash.substring(1);setTimeout(()=>{const p=document.getElementById(f);p&&(p.scrollIntoView(),p.focus())},0)}c()}},[a]),S.jsx("div",{id:"root",children:S.jsxs(Ev,{theme:Nv,children:[S.jsx(s0,{}),S.jsx("a",{className:"skip-to-content",href:"#content",children:"Skip to Content"}),a&&o?S.jsx(Qp,{finishLoading:()=>s(!1)}):S.jsxs(u0,{children:[S.jsx(Yp,{isHome:o}),S.jsx(qp,{isHome:o}),S.jsxs("div",{id:"content",children:[r,S.jsx(Jp,{})]})]})]})})};c0.propTypes={children:Bt.node.isRequired,isHome:Bt.bool};var Tp={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},lu={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},f0=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],sa={CSS:{},springs:{}};function $t(r,o,a){return Math.min(Math.max(r,o),a)}function ji(r,o){return r.indexOf(o)>-1}function Ps(r,o){return r.apply(null,o)}var J={arr:function(r){return Array.isArray(r)},obj:function(r){return ji(Object.prototype.toString.call(r),"Object")},pth:function(r){return J.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||J.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return J.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return J.hex(r)||J.rgb(r)||J.hsl(r)},key:function(r){return!Tp.hasOwnProperty(r)&&!lu.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function Np(r){var o=/\(([^)]+)\)/.exec(r);return o?o[1].split(",").map(function(a){return parseFloat(a)}):[]}function zp(r,o){var a=Np(r),s=$t(J.und(a[0])?1:a[0],.1,100),c=$t(J.und(a[1])?100:a[1],.1,100),f=$t(J.und(a[2])?10:a[2],.1,100),p=$t(J.und(a[3])?0:a[3],.1,100),g=Math.sqrt(c/s),h=f/(2*Math.sqrt(c*s)),y=h<1?g*Math.sqrt(1-h*h):0,x=1,k=h<1?(h*g+-p)/y:-p+g;function P(T){var N=o?o*T/1e3:T;return h<1?N=Math.exp(-N*h*g)*(x*Math.cos(y*N)+k*Math.sin(y*N)):N=(x+k*N)*Math.exp(-N*g),T===0||T===1?T:1-N}function L(){var T=sa.springs[r];if(T)return T;for(var N=1/6,D=0,q=0;;)if(D+=N,P(D)===1){if(q++,q>=16)break}else q=0;var O=D*N*1e3;return sa.springs[r]=O,O}return o?P:L}function d0(r){return r===void 0&&(r=10),function(o){return Math.ceil($t(o,1e-6,1)*r)*(1/r)}}var p0=(function(){var r=11,o=1/(r-1);function a(x,k){return 1-3*k+3*x}function s(x,k){return 3*k-6*x}function c(x){return 3*x}function f(x,k,P){return((a(k,P)*x+s(k,P))*x+c(k))*x}function p(x,k,P){return 3*a(k,P)*x*x+2*s(k,P)*x+c(k)}function g(x,k,P,L,T){var N,D,q=0;do D=k+(P-k)/2,N=f(D,L,T)-x,N>0?P=D:k=D;while(Math.abs(N)>1e-7&&++q<10);return D}function h(x,k,P,L){for(var T=0;T<4;++T){var N=p(k,P,L);if(N===0)return k;var D=f(k,P,L)-x;k-=D/N}return k}function y(x,k,P,L){if(!(0<=x&&x<=1&&0<=P&&P<=1))return;var T=new Float32Array(r);if(x!==k||P!==L)for(var N=0;N<r;++N)T[N]=f(N*o,x,P);function D(q){for(var O=0,A=1,Q=r-1;A!==Q&&T[A]<=q;++A)O+=o;--A;var re=(q-T[A])/(T[A+1]-T[A]),U=O+re*o,G=p(U,x,P);return G>=.001?h(q,U,x,P):G===0?U:g(q,O,O+o,x,P)}return function(q){return x===k&&P===L||q===0||q===1?q:f(D(q),k,L)}}return y})(),Ip=(function(){var r={linear:function(){return function(s){return s}}},o={Sine:function(){return function(s){return 1-Math.cos(s*Math.PI/2)}},Expo:function(){return function(s){return s?Math.pow(2,10*s-10):0}},Circ:function(){return function(s){return 1-Math.sqrt(1-s*s)}},Back:function(){return function(s){return s*s*(3*s-2)}},Bounce:function(){return function(s){for(var c,f=4;s<((c=Math.pow(2,--f))-1)/11;);return 1/Math.pow(4,3-f)-7.5625*Math.pow((c*3-2)/22-s,2)}},Elastic:function(s,c){s===void 0&&(s=1),c===void 0&&(c=.5);var f=$t(s,1,10),p=$t(c,.1,2);return function(g){return g===0||g===1?g:-f*Math.pow(2,10*(g-1))*Math.sin((g-1-p/(Math.PI*2)*Math.asin(1/f))*(Math.PI*2)/p)}}},a=["Quad","Cubic","Quart","Quint"];return a.forEach(function(s,c){o[s]=function(){return function(f){return Math.pow(f,c+2)}}}),Object.keys(o).forEach(function(s){var c=o[s];r["easeIn"+s]=c,r["easeOut"+s]=function(f,p){return function(g){return 1-c(f,p)(1-g)}},r["easeInOut"+s]=function(f,p){return function(g){return g<.5?c(f,p)(g*2)/2:1-c(f,p)(g*-2+2)/2}},r["easeOutIn"+s]=function(f,p){return function(g){return g<.5?(1-c(f,p)(1-g*2))/2:(c(f,p)(g*2-1)+1)/2}}}),r})();function su(r,o){if(J.fnc(r))return r;var a=r.split("(")[0],s=Ip[a],c=Np(r);switch(a){case"spring":return zp(r,o);case"cubicBezier":return Ps(p0,c);case"steps":return Ps(d0,c);default:return Ps(s,c)}}function Op(r){try{var o=document.querySelectorAll(r);return o}catch{return}}function ya(r,o){for(var a=r.length,s=arguments.length>=2?arguments[1]:void 0,c=[],f=0;f<a;f++)if(f in r){var p=r[f];o.call(s,p,f,r)&&c.push(p)}return c}function xa(r){return r.reduce(function(o,a){return o.concat(J.arr(a)?xa(a):a)},[])}function $d(r){return J.arr(r)?r:(J.str(r)&&(r=Op(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function uu(r,o){return r.some(function(a){return a===o})}function cu(r){var o={};for(var a in r)o[a]=r[a];return o}function Qs(r,o){var a=cu(r);for(var s in r)a[s]=o.hasOwnProperty(s)?o[s]:r[s];return a}function wa(r,o){var a=cu(r);for(var s in o)a[s]=J.und(r[s])?o[s]:r[s];return a}function h0(r){var o=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return o?"rgba("+o[1]+",1)":r}function m0(r){var o=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=r.replace(o,function(g,h,y,x){return h+h+y+y+x+x}),s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a),c=parseInt(s[1],16),f=parseInt(s[2],16),p=parseInt(s[3],16);return"rgba("+c+","+f+","+p+",1)"}function g0(r){var o=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),a=parseInt(o[1],10)/360,s=parseInt(o[2],10)/100,c=parseInt(o[3],10)/100,f=o[4]||1;function p(P,L,T){return T<0&&(T+=1),T>1&&(T-=1),T<1/6?P+(L-P)*6*T:T<1/2?L:T<2/3?P+(L-P)*(2/3-T)*6:P}var g,h,y;if(s==0)g=h=y=c;else{var x=c<.5?c*(1+s):c+s-c*s,k=2*c-x;g=p(k,x,a+1/3),h=p(k,x,a),y=p(k,x,a-1/3)}return"rgba("+g*255+","+h*255+","+y*255+","+f+")"}function v0(r){if(J.rgb(r))return h0(r);if(J.hex(r))return m0(r);if(J.hsl(r))return g0(r)}function Xt(r){var o=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(o)return o[1]}function y0(r){if(ji(r,"translate")||r==="perspective")return"px";if(ji(r,"rotate")||ji(r,"skew"))return"deg"}function Gs(r,o){return J.fnc(r)?r(o.target,o.id,o.total):r}function Ft(r,o){return r.getAttribute(o)}function fu(r,o,a){var s=Xt(o);if(uu([a,"deg","rad","turn"],s))return o;var c=sa.CSS[o+a];if(!J.und(c))return c;var f=100,p=document.createElement(r.tagName),g=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;g.appendChild(p),p.style.position="absolute",p.style.width=f+a;var h=f/p.offsetWidth;g.removeChild(p);var y=h*parseFloat(o);return sa.CSS[o+a]=y,y}function Rp(r,o,a){if(o in r.style){var s=o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),c=r.style[o]||getComputedStyle(r).getPropertyValue(s)||"0";return a?fu(r,c,a):c}}function du(r,o){if(J.dom(r)&&!J.inp(r)&&(!J.nil(Ft(r,o))||J.svg(r)&&r[o]))return"attribute";if(J.dom(r)&&uu(f0,o))return"transform";if(J.dom(r)&&o!=="transform"&&Rp(r,o))return"css";if(r[o]!=null)return"object"}function Lp(r){if(J.dom(r)){for(var o=r.style.transform||"",a=/(\w+)\(([^)]*)\)/g,s=new Map,c;c=a.exec(o);)s.set(c[1],c[2]);return s}}function x0(r,o,a,s){var c=ji(o,"scale")?1:0+y0(o),f=Lp(r).get(o)||c;return a&&(a.transforms.list.set(o,f),a.transforms.last=o),s?fu(r,f,s):f}function pu(r,o,a,s){switch(du(r,o)){case"transform":return x0(r,o,s,a);case"css":return Rp(r,o,a);case"attribute":return Ft(r,o);default:return r[o]||0}}function hu(r,o){var a=/^(\*=|\+=|-=)/.exec(r);if(!a)return r;var s=Xt(r)||0,c=parseFloat(o),f=parseFloat(r.replace(a[0],""));switch(a[0][0]){case"+":return c+f+s;case"-":return c-f+s;case"*":return c*f+s}}function Mp(r,o){if(J.col(r))return v0(r);if(/\s/g.test(r))return r;var a=Xt(r),s=a?r.substr(0,r.length-a.length):r;return o?s+o:s}function mu(r,o){return Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2))}function w0(r){return Math.PI*2*Ft(r,"r")}function S0(r){return Ft(r,"width")*2+Ft(r,"height")*2}function k0(r){return mu({x:Ft(r,"x1"),y:Ft(r,"y1")},{x:Ft(r,"x2"),y:Ft(r,"y2")})}function Dp(r){for(var o=r.points,a=0,s,c=0;c<o.numberOfItems;c++){var f=o.getItem(c);c>0&&(a+=mu(s,f)),s=f}return a}function E0(r){var o=r.points;return Dp(r)+mu(o.getItem(o.numberOfItems-1),o.getItem(0))}function Ap(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return w0(r);case"rect":return S0(r);case"line":return k0(r);case"polyline":return Dp(r);case"polygon":return E0(r)}}function _0(r){var o=Ap(r);return r.setAttribute("stroke-dasharray",o),o}function C0(r){for(var o=r.parentNode;J.svg(o)&&J.svg(o.parentNode);)o=o.parentNode;return o}function $p(r,o){var a=o||{},s=a.el||C0(r),c=s.getBoundingClientRect(),f=Ft(s,"viewBox"),p=c.width,g=c.height,h=a.viewBox||(f?f.split(" "):[0,0,p,g]);return{el:s,viewBox:h,x:h[0]/1,y:h[1]/1,w:p,h:g,vW:h[2],vH:h[3]}}function j0(r,o){var a=J.str(r)?Op(r)[0]:r,s=o||100;return function(c){return{property:c,el:a,svg:$p(a),totalLength:Ap(a)*(s/100)}}}function P0(r,o,a){function s(x){x===void 0&&(x=0);var k=o+x>=1?o+x:0;return r.el.getPointAtLength(k)}var c=$p(r.el,r.svg),f=s(),p=s(-1),g=s(1),h=a?1:c.w/c.vW,y=a?1:c.h/c.vH;switch(r.property){case"x":return(f.x-c.x)*h;case"y":return(f.y-c.y)*y;case"angle":return Math.atan2(g.y-p.y,g.x-p.x)*180/Math.PI}}function Fd(r,o){var a=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,s=Mp(J.pth(r)?r.totalLength:r,o)+"";return{original:s,numbers:s.match(a)?s.match(a).map(Number):[0],strings:J.str(r)||o?s.split(a):[]}}function gu(r){var o=r?xa(J.arr(r)?r.map($d):$d(r)):[];return ya(o,function(a,s,c){return c.indexOf(a)===s})}function Fp(r){var o=gu(r);return o.map(function(a,s){return{target:a,id:s,total:o.length,transforms:{list:Lp(a)}}})}function b0(r,o){var a=cu(o);if(/^spring/.test(a.easing)&&(a.duration=zp(a.easing)),J.arr(r)){var s=r.length,c=s===2&&!J.obj(r[0]);c?r={value:r}:J.fnc(o.duration)||(a.duration=o.duration/s)}var f=J.arr(r)?r:[r];return f.map(function(p,g){var h=J.obj(p)&&!J.pth(p)?p:{value:p};return J.und(h.delay)&&(h.delay=g?0:o.delay),J.und(h.endDelay)&&(h.endDelay=g===f.length-1?o.endDelay:0),h}).map(function(p){return wa(p,a)})}function T0(r){for(var o=ya(xa(r.map(function(f){return Object.keys(f)})),function(f){return J.key(f)}).reduce(function(f,p){return f.indexOf(p)<0&&f.push(p),f},[]),a={},s=function(f){var p=o[f];a[p]=r.map(function(g){var h={};for(var y in g)J.key(y)?y==p&&(h.value=g[y]):h[y]=g[y];return h})},c=0;c<o.length;c++)s(c);return a}function N0(r,o){var a=[],s=o.keyframes;s&&(o=wa(T0(s),o));for(var c in o)J.key(c)&&a.push({name:c,tweens:b0(o[c],r)});return a}function z0(r,o){var a={};for(var s in r){var c=Gs(r[s],o);J.arr(c)&&(c=c.map(function(f){return Gs(f,o)}),c.length===1&&(c=c[0])),a[s]=c}return a.duration=parseFloat(a.duration),a.delay=parseFloat(a.delay),a}function I0(r,o){var a;return r.tweens.map(function(s){var c=z0(s,o),f=c.value,p=J.arr(f)?f[1]:f,g=Xt(p),h=pu(o.target,r.name,g,o),y=a?a.to.original:h,x=J.arr(f)?f[0]:y,k=Xt(x)||Xt(h),P=g||k;return J.und(p)&&(p=y),c.from=Fd(x,P),c.to=Fd(hu(p,x),P),c.start=a?a.end:0,c.end=c.start+c.delay+c.duration+c.endDelay,c.easing=su(c.easing,c.duration),c.isPath=J.pth(f),c.isPathTargetInsideSVG=c.isPath&&J.svg(o.target),c.isColor=J.col(c.from.original),c.isColor&&(c.round=1),a=c,c})}var Bp={css:function(r,o,a){return r.style[o]=a},attribute:function(r,o,a){return r.setAttribute(o,a)},object:function(r,o,a){return r[o]=a},transform:function(r,o,a,s,c){if(s.list.set(o,a),o===s.last||c){var f="";s.list.forEach(function(p,g){f+=g+"("+p+") "}),r.style.transform=f}}};function Up(r,o){var a=Fp(r);a.forEach(function(s){for(var c in o){var f=Gs(o[c],s),p=s.target,g=Xt(f),h=pu(p,c,g,s),y=g||Xt(h),x=hu(Mp(f,y),h),k=du(p,c);Bp[k](p,c,x,s.transforms,!0)}})}function O0(r,o){var a=du(r.target,o.name);if(a){var s=I0(o,r),c=s[s.length-1];return{type:a,property:o.name,animatable:r,tweens:s,duration:c.end,delay:s[0].delay,endDelay:c.endDelay}}}function R0(r,o){return ya(xa(r.map(function(a){return o.map(function(s){return O0(a,s)})})),function(a){return!J.und(a)})}function Wp(r,o){var a=r.length,s=function(f){return f.timelineOffset?f.timelineOffset:0},c={};return c.duration=a?Math.max.apply(Math,r.map(function(f){return s(f)+f.duration})):o.duration,c.delay=a?Math.min.apply(Math,r.map(function(f){return s(f)+f.delay})):o.delay,c.endDelay=a?c.duration-Math.max.apply(Math,r.map(function(f){return s(f)+f.duration-f.endDelay})):o.endDelay,c}var Bd=0;function L0(r){var o=Qs(Tp,r),a=Qs(lu,r),s=N0(a,r),c=Fp(r.targets),f=R0(c,s),p=Wp(f,a),g=Bd;return Bd++,wa(o,{id:g,children:[],animatables:c,animations:f,duration:p.duration,delay:p.delay,endDelay:p.endDelay})}var zt=[],Vp=(function(){var r;function o(){!r&&(!Ud()||!Ie.suspendWhenDocumentHidden)&&zt.length>0&&(r=requestAnimationFrame(a))}function a(c){for(var f=zt.length,p=0;p<f;){var g=zt[p];g.paused?(zt.splice(p,1),f--):(g.tick(c),p++)}r=p>0?requestAnimationFrame(a):void 0}function s(){Ie.suspendWhenDocumentHidden&&(Ud()?r=cancelAnimationFrame(r):(zt.forEach(function(c){return c._onDocumentVisibility()}),Vp()))}return typeof document<"u"&&document.addEventListener("visibilitychange",s),o})();function Ud(){return!!document&&document.hidden}function Ie(r){r===void 0&&(r={});var o=0,a=0,s=0,c,f=0,p=null;function g(O){var A=window.Promise&&new Promise(function(Q){return p=Q});return O.finished=A,A}var h=L0(r);g(h);function y(){var O=h.direction;O!=="alternate"&&(h.direction=O!=="normal"?"normal":"reverse"),h.reversed=!h.reversed,c.forEach(function(A){return A.reversed=h.reversed})}function x(O){return h.reversed?h.duration-O:O}function k(){o=0,a=x(h.currentTime)*(1/Ie.speed)}function P(O,A){A&&A.seek(O-A.timelineOffset)}function L(O){if(h.reversePlayback)for(var Q=f;Q--;)P(O,c[Q]);else for(var A=0;A<f;A++)P(O,c[A])}function T(O){for(var A=0,Q=h.animations,re=Q.length;A<re;){var U=Q[A],G=U.animatable,ue=U.tweens,ke=ue.length-1,ce=ue[ke];ke&&(ce=ya(ue,function(ae){return O<ae.end})[0]||ce);for(var Je=$t(O-ce.start-ce.delay,0,ce.duration)/ce.duration,He=isNaN(Je)?1:ce.easing(Je),we=ce.to.strings,Qe=ce.round,Xe=[],$e=ce.to.numbers.length,de=void 0,$=0;$<$e;$++){var V=void 0,F=ce.to.numbers[$],E=ce.from.numbers[$]||0;ce.isPath?V=P0(ce.value,He*F,ce.isPathTargetInsideSVG):V=E+He*(F-E),Qe&&(ce.isColor&&$>2||(V=Math.round(V*Qe)/Qe)),Xe.push(V)}var b=we.length;if(!b)de=Xe[0];else{de=we[0];for(var te=0;te<b;te++){we[te];var ie=we[te+1],oe=Xe[te];isNaN(oe)||(ie?de+=oe+ie:de+=oe+" ")}}Bp[U.type](G.target,U.property,de,G.transforms),U.currentValue=de,A++}}function N(O){h[O]&&!h.passThrough&&h[O](h)}function D(){h.remaining&&h.remaining!==!0&&h.remaining--}function q(O){var A=h.duration,Q=h.delay,re=A-h.endDelay,U=x(O);h.progress=$t(U/A*100,0,100),h.reversePlayback=U<h.currentTime,c&&L(U),!h.began&&h.currentTime>0&&(h.began=!0,N("begin")),!h.loopBegan&&h.currentTime>0&&(h.loopBegan=!0,N("loopBegin")),U<=Q&&h.currentTime!==0&&T(0),(U>=re&&h.currentTime!==A||!A)&&T(A),U>Q&&U<re?(h.changeBegan||(h.changeBegan=!0,h.changeCompleted=!1,N("changeBegin")),N("change"),T(U)):h.changeBegan&&(h.changeCompleted=!0,h.changeBegan=!1,N("changeComplete")),h.currentTime=$t(U,0,A),h.began&&N("update"),O>=A&&(a=0,D(),h.remaining?(o=s,N("loopComplete"),h.loopBegan=!1,h.direction==="alternate"&&y()):(h.paused=!0,h.completed||(h.completed=!0,N("loopComplete"),N("complete"),!h.passThrough&&"Promise"in window&&(p(),g(h)))))}return h.reset=function(){var O=h.direction;h.passThrough=!1,h.currentTime=0,h.progress=0,h.paused=!0,h.began=!1,h.loopBegan=!1,h.changeBegan=!1,h.completed=!1,h.changeCompleted=!1,h.reversePlayback=!1,h.reversed=O==="reverse",h.remaining=h.loop,c=h.children,f=c.length;for(var A=f;A--;)h.children[A].reset();(h.reversed&&h.loop!==!0||O==="alternate"&&h.loop===1)&&h.remaining++,T(h.reversed?h.duration:0)},h._onDocumentVisibility=k,h.set=function(O,A){return Up(O,A),h},h.tick=function(O){s=O,o||(o=s),q((s+(a-o))*Ie.speed)},h.seek=function(O){q(x(O))},h.pause=function(){h.paused=!0,k()},h.play=function(){h.paused&&(h.completed&&h.reset(),h.paused=!1,zt.push(h),k(),Vp())},h.reverse=function(){y(),h.completed=!h.reversed,k()},h.restart=function(){h.reset(),h.play()},h.remove=function(O){var A=gu(O);Hp(A,h)},h.reset(),h.autoplay&&h.play(),h}function Wd(r,o){for(var a=o.length;a--;)uu(r,o[a].animatable.target)&&o.splice(a,1)}function Hp(r,o){var a=o.animations,s=o.children;Wd(r,a);for(var c=s.length;c--;){var f=s[c],p=f.animations;Wd(r,p),!p.length&&!f.children.length&&s.splice(c,1)}!a.length&&!s.length&&o.pause()}function M0(r){for(var o=gu(r),a=zt.length;a--;){var s=zt[a];Hp(o,s)}}function D0(r,o){o===void 0&&(o={});var a=o.direction||"normal",s=o.easing?su(o.easing):null,c=o.grid,f=o.axis,p=o.from||0,g=p==="first",h=p==="center",y=p==="last",x=J.arr(r),k=parseFloat(x?r[0]:r),P=x?parseFloat(r[1]):0,L=Xt(x?r[1]:r)||0,T=o.start||0+(x?k:0),N=[],D=0;return function(q,O,A){if(g&&(p=0),h&&(p=(A-1)/2),y&&(p=A-1),!N.length){for(var Q=0;Q<A;Q++){if(!c)N.push(Math.abs(p-Q));else{var re=h?(c[0]-1)/2:p%c[0],U=h?(c[1]-1)/2:Math.floor(p/c[0]),G=Q%c[0],ue=Math.floor(Q/c[0]),ke=re-G,ce=U-ue,Je=Math.sqrt(ke*ke+ce*ce);f==="x"&&(Je=-ke),f==="y"&&(Je=-ce),N.push(Je)}D=Math.max.apply(Math,N)}s&&(N=N.map(function(we){return s(we/D)*D})),a==="reverse"&&(N=N.map(function(we){return f?we<0?we*-1:-we:Math.abs(D-we)}))}var He=x?(P-k)/D:k;return T+He*(Math.round(N[O]*100)/100)+L}}function A0(r){r===void 0&&(r={});var o=Ie(r);return o.duration=0,o.add=function(a,s){var c=zt.indexOf(o),f=o.children;c>-1&&zt.splice(c,1);function p(P){P.passThrough=!0}for(var g=0;g<f.length;g++)p(f[g]);var h=wa(a,Qs(lu,r));h.targets=h.targets||r.targets;var y=o.duration;h.autoplay=!1,h.direction=o.direction,h.timelineOffset=J.und(s)?y:hu(s,y),p(o),o.seek(h.timelineOffset);var x=Ie(h);p(x),f.push(x);var k=Wp(f,r);return o.delay=k.delay,o.endDelay=k.endDelay,o.duration=k.duration,o.seek(0),o.reset(),o.autoplay&&o.play(),o},o}Ie.version="3.2.1";Ie.speed=1;Ie.suspendWhenDocumentHidden=!0;Ie.running=zt;Ie.remove=M0;Ie.get=pu;Ie.set=Up;Ie.convertPx=fu;Ie.path=j0;Ie.setDashoffset=_0;Ie.stagger=D0;Ie.timeline=A0;Ie.easing=su;Ie.penner=Ip;Ie.random=function(r,o){return Math.floor(Math.random()*(o-r+1))+r};const $0=ye.div`
  ${({theme:r})=>r.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${r=>r.isMounted?1:0};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }

  .text-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name-text {
    margin-right: 8px;
  }

  .portfolio-text {
    color: var(--yellow);
  }
`,Qp=({finishLoading:r})=>{const[o,a]=X.useState(!1),s=()=>{Ie.timeline({complete:()=>r()}).add({targets:".text-wrapper h1",delay:300,duration:1e3,easing:"easeInOutQuart",opacity:1}).add({targets:".text-wrapper h2",duration:1e3,easing:"easeInOutQuart",opacity:1,offset:"-=500"}).add({targets:".text-wrapper",delay:500,duration:1e3,easing:"easeInOutQuart",opacity:0,scale:.9}).add({targets:".loader",duration:200,easing:"easeInOutQuart",opacity:0,zIndex:-1})};return X.useEffect(()=>{const c=setTimeout(()=>a(!0),10);return s(),()=>clearTimeout(c)},[]),X.useEffect(()=>(document.body.classList.add("hidden"),()=>document.body.classList.remove("hidden")),[]),S.jsx($0,{className:"loader",isMounted:o,children:S.jsx("div",{className:"logo-wrapper",children:S.jsxs("div",{className:"text-div",children:[S.jsx("h1",{className:"name-text",children:"Purit"})," ",S.jsx("h1",{className:"name-text",children:"Hongjirakul"}),S.jsx("h2",{className:"portfolio-text",children:"Portfolio"})]})})})};Qp.propTypes={finishLoading:Bt.func.isRequired};const Vd="kyriosaaph@gmail.com",ua=[{name:"GitHub",url:"https://github.com/kyriosaa"},{name:"Linkedin",url:"https://www.linkedin.com/in/kyriosaa/"}],Pr=[{name:"About",url:"/#about"},{name:"Experience",url:"/#jobs"},{name:"Projects",url:"/#projects"},{name:"Contact",url:"/#contact"}],qn=(r=200,o=.25)=>({origin:"bottom",distance:"20px",duration:500,delay:r,rotate:{x:0,y:0,z:0},opacity:0,scale:1,easing:"cubic-bezier(0.645, 0.045, 0.355, 1)",mobile:!0,reset:!1,useDelay:"always",viewFactor:o,viewOffset:{top:0,right:0,bottom:0,left:0}}),F0=(r,o)=>{X.useEffect(()=>{const a=s=>{!r.current||r.current.contains(s.target)||o(s)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[r,o])},Gp="(prefers-reduced-motion: no-preference)",B0=typeof window>"u",U0=()=>B0?!0:!window.matchMedia(Gp).matches;function Cn(){const[r,o]=X.useState(U0);return X.useEffect(()=>{const a=window.matchMedia(Gp),s=c=>{o(!c.matches)};return a.addListener(s),()=>{a.removeListener(s)}},[]),r}const W0="up",V0="down",H0=({initialDirection:r,thresholdPixels:o,off:a}={})=>{const[s,c]=X.useState(r);return X.useEffect(()=>{const f=o||0;let p=window.pageYOffset,g=!1;const h=()=>{const x=window.pageYOffset;if(Math.abs(x-p)<f){g=!1;return}c(x>p?V0:W0),p=x>0?x:0,g=!1},y=()=>{g||(window.requestAnimationFrame(h),g=!0)};return a?c(r):window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[r,o,a]),s},Q0=ye.header`
  ${({theme:r})=>r.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: #14213d;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${r=>r.scrollDirection==="up"&&!r.scrolledToTop&&qe`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${r=>r.scrollDirection==="down"&&!r.scrolledToTop&&qe`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`,G0=ye.nav`
  ${({theme:r})=>r.mixins.flexBetween};
  position: relative;
  justify-content: right;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
`,Hd=ye.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({theme:r})=>r.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--yellow);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({theme:r})=>r.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`,Yp=({isHome:r})=>{const[o,a]=X.useState(!r),s=H0("down"),[c,f]=X.useState(!0),p=Cn(),g=()=>{f(window.pageYOffset<50)};X.useEffect(()=>{if(p)return;const k=setTimeout(()=>{a(!0)},100);return window.addEventListener("scroll",g),()=>{clearTimeout(k),window.removeEventListener("scroll",g)}},[]);const h=r?la:0,y=r?"fade":"",x=r?"fadedown":"";return S.jsx(Q0,{scrollDirection:s,scrolledToTop:c,children:S.jsx(G0,{children:p?S.jsxs(S.Fragment,{children:[S.jsx(Hd,{children:S.jsx("ol",{children:Pr&&Pr.map(({url:k,name:P},L)=>S.jsx("li",{children:S.jsx("a",{href:Ni(k),children:P})},L))})}),S.jsx(Qd,{})]}):S.jsxs(S.Fragment,{children:[S.jsx(Hd,{children:S.jsx("ol",{children:S.jsx(Gn,{component:null,children:o&&Pr&&Pr.map(({url:k,name:P},L)=>S.jsx(_n,{classNames:x,timeout:h,children:S.jsx("li",{style:{transitionDelay:`${r?L*100:0}ms`},children:S.jsx("a",{href:Ni(k),children:P})},L)},L))})})}),S.jsx(Gn,{component:null,children:o&&S.jsx(_n,{classNames:y,timeout:h,children:S.jsx(Qd,{})})})]})})})};Yp.propTypes={isHome:Bt.bool};const Y0=ye.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,K0=ye.button`
  display: none;

  @media (max-width: 768px) {
    ${({theme:r})=>r.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--yellow);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${r=>r.menuOpen?"0.12s":"0s"};
    transform: rotate(${r=>r.menuOpen?"225deg":"0deg"});
    transition-timing-function: cubic-bezier(
      ${r=>r.menuOpen?"0.215, 0.61, 0.355, 1":"0.55, 0.055, 0.675, 0.19"}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--yellow);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${r=>r.menuOpen?"100%":"120%"};
      top: ${r=>r.menuOpen?"0":"-10px"};
      opacity: ${r=>r.menuOpen?0:1};
      transition: ${({menuOpen:r})=>r?"var(--ham-before-active)":"var(--ham-before)"};
    }
    &:after {
      width: ${r=>r.menuOpen?"100%":"80%"};
      bottom: ${r=>r.menuOpen?"0":"-10px"};
      transform: rotate(${r=>r.menuOpen?"-90deg":"0"});
      transition: ${({menuOpen:r})=>r?"var(--ham-after-active)":"var(--ham-after)"};
    }
  }
`,q0=ye.aside`
  display: none;

  @media (max-width: 768px) {
    ${({theme:r})=>r.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${r=>r.menuOpen?0:100}vw);
    visibility: ${r=>r.menuOpen?"visible":"hidden"};
    transition: var(--transition);
  }

  nav {
    ${({theme:r})=>r.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--yellow);
        font-size: var(--fz-sm);
      }
    }

    a {
      ${({theme:r})=>r.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-link {
    ${({theme:r})=>r.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`,Qd=()=>{const[r,o]=X.useState(!1),a=()=>o(!r),s=X.useRef(null),c=X.useRef(null);let f,p,g;const h=()=>{f=[s.current,...Array.from(c.current.querySelectorAll("a"))],p=f[0],g=f[f.length-1]},y=T=>{document.activeElement===p&&(T.preventDefault(),g.focus())},x=T=>{document.activeElement===g&&(T.preventDefault(),p.focus())},k=T=>{switch(T.key){case Ci.ESCAPE:case Ci.ESCAPE_IE11:{o(!1);break}case Ci.TAB:{if(f&&f.length===1){T.preventDefault();break}T.shiftKey?y(T):x(T);break}}},P=T=>{T.currentTarget.innerWidth>768&&o(!1)};X.useEffect(()=>(document.addEventListener("keydown",k),window.addEventListener("resize",P),h(),()=>{document.removeEventListener("keydown",k),window.removeEventListener("resize",P)}),[]);const L=X.useRef();return F0(L,()=>o(!1)),X.useEffect(()=>(document.body.classList.toggle("blur",r),()=>document.body.classList.remove("blur")),[r]),S.jsx(Y0,{children:S.jsxs("div",{ref:L,children:[S.jsx(K0,{onClick:a,menuOpen:r,ref:s,"aria-label":"Menu",children:S.jsx("div",{className:"ham-box",children:S.jsx("div",{className:"ham-box-inner"})})}),S.jsx(q0,{menuOpen:r,"aria-hidden":!r,tabIndex:r?1:-1,children:S.jsx("nav",{ref:c,children:Pr&&S.jsx("ol",{children:Pr.map(({url:T,name:N},D)=>S.jsx("li",{children:S.jsx("a",{href:Ni(T),onClick:()=>o(!1),children:N})},D))})})})]})})},J0=ye.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${r=>r.orientation==="left"?"40px":"auto"};
  right: ${r=>r.orientation==="left"?"auto":"40px"};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${r=>r.orientation==="left"?"20px":"auto"};
    right: ${r=>r.orientation==="left"?"auto":"20px"};
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Kp=({children:r,isHome:o,orientation:a})=>{const[s,c]=X.useState(!o),f=Cn();return X.useEffect(()=>{if(!o||f)return;const p=setTimeout(()=>c(!0),la);return()=>clearTimeout(p)},[]),S.jsx(J0,{orientation:a,children:f?S.jsx(S.Fragment,{children:r}):S.jsx(Gn,{component:null,children:s&&S.jsx(_n,{classNames:o?"fade":"",timeout:o?la:0,children:r})})})};Kp.propTypes={children:Bt.node.isRequired,isHome:Bt.bool,orientation:Bt.string};const En=({name:r})=>{switch(r){case"External":return S.jsx(Gd,{});case"Folder":return S.jsx(X0,{});case"GitHub":return S.jsx(Z0,{});case"Linkedin":return S.jsx(ey,{});default:return S.jsx(Gd,{})}};En.propTypes={name:Bt.string.isRequired};const Gd=()=>S.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-external-link",children:[S.jsx("title",{children:"External Link"}),S.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),S.jsx("polyline",{points:"15 3 21 3 21 9"}),S.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),X0=()=>S.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-folder",children:[S.jsx("title",{children:"Folder"}),S.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),Z0=()=>S.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-github",children:[S.jsx("title",{children:"GitHub"}),S.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})]}),ey=()=>S.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-linkedin",children:[S.jsx("title",{children:"LinkedIn"}),S.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),S.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),S.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),ty=ye.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`,ny=ye.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 0px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`,qp=({isHome:r})=>S.jsx(Kp,{isHome:r,orientation:"right",children:S.jsxs("div",{children:[S.jsx(ty,{children:S.jsx("a",{href:`mailto:${Vd}`,children:Vd})}),S.jsx(ny,{children:ua&&ua.map(({url:o,name:a},s)=>S.jsx("li",{children:S.jsx("a",{href:o,"aria-label":a,target:"_blank",rel:"noreferrer",children:S.jsx(En,{name:a})})},s))})]})});qp.propTypes={isHome:Bt.bool};const ry=ye.footer`
  ${({theme:r})=>r.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`,iy=ye.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({theme:r})=>r.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`,oy=ye.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
    font-size: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;function Jp(){return S.jsxs(ry,{children:[S.jsx(iy,{children:S.jsx("ul",{children:ua&&ua.map(({name:r,url:o},a)=>S.jsx("li",{children:S.jsx("a",{href:o,"aria-label":r,children:S.jsx(En,{name:r})})},a))})}),S.jsxs(oy,{tabindex:"-1",children:[S.jsx("p",{children:"© 2025 Purit Hongjirakul"}),S.jsx("a",{href:"https://brittanychiang.com/",children:S.jsx("div",{children:"Thank you Brittany Chiang for the template!"})})]})]})}Jp.propTypes={githubInfo:Bt.object};const ay=ye.section`
  ${({theme:r})=>r.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--yellow);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({theme:r})=>r.mixins.bigButton};
    margin-top: 50px;
  }
`,gx=()=>{const[r,o]=X.useState(!1),a=Cn();X.useEffect(()=>{if(a)return;const h=setTimeout(()=>o(!0),Pv);return()=>clearTimeout(h)},[]);const s=S.jsx("h1",{children:"Hello! I'm"}),c=S.jsx("h2",{className:"big-heading",children:"Purit Hongjirakul."}),f=S.jsxs(S.Fragment,{children:[S.jsx("p",{children:"I'm an electrical engineering and computer science student that is very interested in embedded systems and machine learning."}),S.jsx("p",{children:"If you like my work or have any questions, please send me an email!"})]}),g=[s,c,f,S.jsx("a",{className:"email-link",href:"mailto:kyriosaaph@gmail.com",children:"Email Me!"})];return S.jsx(ay,{children:a?S.jsx(S.Fragment,{children:g.map((h,y)=>S.jsx("div",{children:h},y))}):S.jsx(Gn,{component:null,children:r&&g.map((h,y)=>S.jsx(_n,{classNames:"fadeup",timeout:la,children:S.jsx("div",{style:{transitionDelay:`${y+1}00ms`},children:h})},y))})})},ly="/portfolio/assets/me-DS5Sex5G.jpg";/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function Ys(r){return typeof window.Node=="object"?r instanceof window.Node:r!==null&&typeof r=="object"&&typeof r.nodeType=="number"&&typeof r.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function sy(r){var o=Object.prototype.toString.call(r),a=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?r instanceof window.NodeList:r!==null&&typeof r=="object"&&typeof r.length=="number"&&a.test(o)&&(r.length===0||Ys(r[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function zi(r,o){if(o===void 0&&(o=document),r instanceof Array)return r.filter(Ys);if(Ys(r))return[r];if(sy(r))return Array.prototype.slice.call(r);if(typeof r=="string")try{var a=o.querySelectorAll(r);return Array.prototype.slice.call(a)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function Ks(r){if(r.constructor!==Array)throw new TypeError("Expected array.");if(r.length===16)return r;if(r.length===6){var o=jn();return o[0]=r[0],o[1]=r[1],o[4]=r[2],o[5]=r[3],o[12]=r[4],o[13]=r[5],o}throw new RangeError("Expected array with either 6 or 16 values.")}function jn(){for(var r=[],o=0;o<16;o++)o%5==0?r.push(1):r.push(0);return r}function uy(r,o){for(var a=Ks(r),s=Ks(o),c=[],f=0;f<4;f++)for(var p=[a[f],a[f+4],a[f+8],a[f+12]],g=0;g<4;g++){var h=g*4,y=[s[h],s[h+1],s[h+2],s[h+3]],x=p[0]*y[0]+p[1]*y[1]+p[2]*y[2]+p[3]*y[3];c[f+h]=x}return c}function cy(r){if(typeof r=="string"){var o=r.match(/matrix(3d)?\(([^)]+)\)/);if(o){var a=o[2].split(", ").map(parseFloat);return Ks(a)}}return jn()}function fy(r){var o=Math.PI/180*r,a=jn();return a[5]=a[10]=Math.cos(o),a[6]=a[9]=Math.sin(o),a[9]*=-1,a}function dy(r){var o=Math.PI/180*r,a=jn();return a[0]=a[10]=Math.cos(o),a[2]=a[8]=Math.sin(o),a[2]*=-1,a}function py(r){var o=Math.PI/180*r,a=jn();return a[0]=a[5]=Math.cos(o),a[1]=a[4]=Math.sin(o),a[4]*=-1,a}function Yd(r,o){var a=jn();return a[0]=r,a[5]=r,a}function hy(r){var o=jn();return o[12]=r,o}function my(r){var o=jn();return o[13]=r,o}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var Xp=(function(){var r=Date.now();return function(o){var a=Date.now();a-r>16?(r=a,o(a)):setTimeout(function(){return Xp(o)},0)}})(),gy=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Xp;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var Zp={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function vy(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function yy(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var wi={success:yy,failure:vy};function ea(r){return r!==null&&r instanceof Object&&(r.constructor===Object||Object.prototype.toString.call(r)==="[object Object]")}function je(r,o){if(ea(r)){var a=Object.keys(r);return a.forEach(function(s){return o(r[s],s,r)})}if(r instanceof Array)return r.forEach(function(s,c){return o(s,c,r)});throw new TypeError("Expected either an array or object literal.")}function Vn(r){for(var o=[],a=arguments.length-1;a-- >0;)o[a]=arguments[a+1];if(this.constructor.debug&&console){var s="%cScrollReveal: "+r;o.forEach(function(c){return s+=`
 — `+c}),console.log(s,"color: #ea654b;")}}function eh(){var r=this,o=function(){return{active:[],stale:[]}},a=o(),s=o(),c=o();try{je(zi("[data-sr-id]"),function(f){var p=parseInt(f.getAttribute("data-sr-id"));a.active.push(p)})}catch(f){throw f}je(this.store.elements,function(f){a.active.indexOf(f.id)===-1&&a.stale.push(f.id)}),je(a.stale,function(f){return delete r.store.elements[f]}),je(this.store.elements,function(f){c.active.indexOf(f.containerId)===-1&&c.active.push(f.containerId),f.hasOwnProperty("sequence")&&s.active.indexOf(f.sequence.id)===-1&&s.active.push(f.sequence.id)}),je(this.store.containers,function(f){c.active.indexOf(f.id)===-1&&c.stale.push(f.id)}),je(c.stale,function(f){var p=r.store.containers[f].node;p.removeEventListener("scroll",r.delegate),p.removeEventListener("resize",r.delegate),delete r.store.containers[f]}),je(this.store.sequences,function(f){s.active.indexOf(f.id)===-1&&s.stale.push(f.id)}),je(s.stale,function(f){return delete r.store.sequences[f]})}var Kd=(function(){var r={},o=document.documentElement.style;function a(s,c){if(c===void 0&&(c=o),s&&typeof s=="string"){if(r[s])return r[s];if(typeof c[s]=="string")return r[s]=s;if(typeof c["-webkit-"+s]=="string")return r[s]="-webkit-"+s;throw new RangeError('Unable to find "'+s+'" style property.')}throw new TypeError("Expected a string.")}return a.clearCache=function(){return r={}},a})();function xy(r){var o=window.getComputedStyle(r.node),a=o.position,s=r.config,c={},f=r.node.getAttribute("style")||"",p=f.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];c.computed=p?p.map(function(ue){return ue.trim()}).join("; ")+";":"",c.generated=p.some(function(ue){return ue.match(/visibility\s?:\s?visible/i)})?c.computed:p.concat(["visibility: visible"]).map(function(ue){return ue.trim()}).join("; ")+";";var g=parseFloat(o.opacity),h=isNaN(parseFloat(s.opacity))?parseFloat(o.opacity):parseFloat(s.opacity),y={computed:g!==h?"opacity: "+g+";":"",generated:g!==h?"opacity: "+h+";":""},x=[];if(parseFloat(s.distance)){var k=s.origin==="top"||s.origin==="bottom"?"Y":"X",P=s.distance;(s.origin==="top"||s.origin==="left")&&(P=/^-/.test(P)?P.substr(1):"-"+P);var L=P.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),T=L[0],N=L[1];switch(N){case"em":P=parseInt(o.fontSize)*T;break;case"px":P=T;break;case"%":P=k==="Y"?r.node.getBoundingClientRect().height*T/100:r.node.getBoundingClientRect().width*T/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}k==="Y"?x.push(my(P)):x.push(hy(P))}s.rotate.x&&x.push(fy(s.rotate.x)),s.rotate.y&&x.push(dy(s.rotate.y)),s.rotate.z&&x.push(py(s.rotate.z)),s.scale!==1&&(s.scale===0?x.push(Yd(2e-4)):x.push(Yd(s.scale)));var D={};if(x.length){D.property=Kd("transform"),D.computed={raw:o[D.property],matrix:cy(o[D.property])},x.unshift(D.computed.matrix);var q=x.reduce(uy);D.generated={initial:D.property+": matrix3d("+q.join(", ")+");",final:D.property+": matrix3d("+D.computed.matrix.join(", ")+");"}}else D.generated={initial:"",final:""};var O={};if(y.generated||D.generated.initial){O.property=Kd("transition"),O.computed=o[O.property],O.fragments=[];var A=s.delay,Q=s.duration,re=s.easing;y.generated&&O.fragments.push({delayed:"opacity "+Q/1e3+"s "+re+" "+A/1e3+"s",instant:"opacity "+Q/1e3+"s "+re+" 0s"}),D.generated.initial&&O.fragments.push({delayed:D.property+" "+Q/1e3+"s "+re+" "+A/1e3+"s",instant:D.property+" "+Q/1e3+"s "+re+" 0s"});var U=O.computed&&!O.computed.match(/all 0s|none 0s/);U&&O.fragments.unshift({delayed:O.computed,instant:O.computed});var G=O.fragments.reduce(function(ue,ke,ce){return ue.delayed+=ce===0?ke.delayed:", "+ke.delayed,ue.instant+=ce===0?ke.instant:", "+ke.instant,ue},{delayed:"",instant:""});O.generated={delayed:O.property+": "+G.delayed+";",instant:O.property+": "+G.instant+";"}}else O.generated={delayed:"",instant:""};return{inline:c,opacity:y,position:a,transform:D,transition:O}}function Or(r,o){o.split(";").forEach(function(a){var s=a.split(":"),c=s[0],f=s.slice(1);c&&f&&(r.style[c.trim()]=f.join(":"))})}function vu(r){var o=this,a;try{je(zi(r),function(s){var c=s.getAttribute("data-sr-id");if(c!==null){a=!0;var f=o.store.elements[c];f.callbackTimer&&window.clearTimeout(f.callbackTimer.clock),Or(f.node,f.styles.inline.generated),s.removeAttribute("data-sr-id"),delete o.store.elements[c]}})}catch(s){return Vn.call(this,"Clean failed.",s.message)}if(a)try{eh.call(this)}catch(s){return Vn.call(this,"Clean failed.",s.message)}}function wy(){var r=this;je(this.store.elements,function(o){Or(o.node,o.styles.inline.generated),o.node.removeAttribute("data-sr-id")}),je(this.store.containers,function(o){var a=o.node===document.documentElement?window:o.node;a.removeEventListener("scroll",r.delegate),a.removeEventListener("resize",r.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function Ii(r){for(var o=[],a=arguments.length-1;a-- >0;)o[a]=arguments[a+1];if(ea(r))return je(o,function(s){je(s,function(c,f){ea(c)?((!r[f]||!ea(r[f]))&&(r[f]={}),Ii(r[f],c)):r[f]=c})}),r;throw new TypeError("Target must be an object literal.")}function ca(r){return r===void 0&&(r=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(r)}var qs=(function(){var r=0;return function(){return r++}})();function th(){var r=this;eh.call(this),je(this.store.elements,function(o){var a=[o.styles.inline.generated];o.visible?(a.push(o.styles.opacity.computed),a.push(o.styles.transform.generated.final),o.revealed=!0):(a.push(o.styles.opacity.generated),a.push(o.styles.transform.generated.initial),o.revealed=!1),Or(o.node,a.filter(function(s){return s!==""}).join(" "))}),je(this.store.containers,function(o){var a=o.node===document.documentElement?window:o.node;a.addEventListener("scroll",r.delegate),a.addEventListener("resize",r.delegate)}),this.delegate(),this.initTimeout=null}function Ei(r,o){o===void 0&&(o={});var a=o.pristine||this.pristine,s=r.config.useDelay==="always"||r.config.useDelay==="onload"&&a||r.config.useDelay==="once"&&!r.seen,c=r.visible&&!r.revealed,f=!r.visible&&r.revealed&&r.config.reset;if(o.reveal||c)return Sy.call(this,r,s);if(o.reset||f)return ky.call(this,r)}function Sy(r,o){var a=[r.styles.inline.generated,r.styles.opacity.computed,r.styles.transform.generated.final];o?a.push(r.styles.transition.generated.delayed):a.push(r.styles.transition.generated.instant),r.revealed=r.seen=!0,Or(r.node,a.filter(function(s){return s!==""}).join(" ")),nh.call(this,r,o)}function ky(r){var o=[r.styles.inline.generated,r.styles.opacity.generated,r.styles.transform.generated.initial,r.styles.transition.generated.instant];r.revealed=!1,Or(r.node,o.filter(function(a){return a!==""}).join(" ")),nh.call(this,r)}function nh(r,o){var a=this,s=o?r.config.duration+r.config.delay:r.config.duration,c=r.revealed?r.config.beforeReveal:r.config.beforeReset,f=r.revealed?r.config.afterReveal:r.config.afterReset,p=0;r.callbackTimer&&(p=Date.now()-r.callbackTimer.start,window.clearTimeout(r.callbackTimer.clock)),c(r.node),r.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){f(r.node),r.callbackTimer=null,r.revealed&&!r.config.reset&&r.config.cleanup&&vu.call(a,r.node)},s-p)}}function rh(r,o){if(o===void 0&&(o=this.pristine),!r.visible&&r.revealed&&r.config.reset)return Ei.call(this,r,{reset:!0});var a=this.store.sequences[r.sequence.id],s=r.sequence.index;if(a){var c=new qd(a,"visible",this.store),f=new qd(a,"revealed",this.store);if(a.models={visible:c,revealed:f},!f.body.length){var p=a.members[c.body[0]],g=this.store.elements[p];if(g)return Go.call(this,a,c.body[0],-1,o),Go.call(this,a,c.body[0],1,o),Ei.call(this,g,{reveal:!0,pristine:o})}if(!a.blocked.head&&s===[].concat(f.head).pop()&&s>=[].concat(c.body).shift())return Go.call(this,a,s,-1,o),Ei.call(this,r,{reveal:!0,pristine:o});if(!a.blocked.foot&&s===[].concat(f.foot).shift()&&s<=[].concat(c.body).pop())return Go.call(this,a,s,1,o),Ei.call(this,r,{reveal:!0,pristine:o})}}function Ey(r){var o=Math.abs(r);if(!isNaN(o))this.id=qs(),this.interval=Math.max(o,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function qd(r,o,a){var s=this;this.head=[],this.body=[],this.foot=[],je(r.members,function(c,f){var p=a.elements[c];p&&p[o]&&s.body.push(f)}),this.body.length&&je(r.members,function(c,f){var p=a.elements[c];p&&!p[o]&&(f<s.body[0]?s.head.push(f):s.foot.push(f))})}function Go(r,o,a,s){var c=this,f=["head",null,"foot"][1+a],p=r.members[o+a],g=this.store.elements[p];r.blocked[f]=!0,setTimeout(function(){r.blocked[f]=!1,g&&rh.call(c,g,s)},r.interval)}function ih(r,o,a){var s=this;o===void 0&&(o={}),a===void 0&&(a=!1);var c=[],f,p=o.interval||Zp.interval;try{p&&(f=new Ey(p));var g=zi(r);if(!g.length)throw new Error("Invalid reveal target.");var h=g.reduce(function(y,x){var k={},P=x.getAttribute("data-sr-id");P?(Ii(k,s.store.elements[P]),Or(k.node,k.styles.inline.computed)):(k.id=qs(),k.node=x,k.seen=!1,k.revealed=!1,k.visible=!1);var L=Ii({},k.config||s.defaults,o);if(!L.mobile&&ca()||!L.desktop&&!ca())return P&&vu.call(s,k),y;var T=zi(L.container)[0];if(!T)throw new Error("Invalid container.");if(!T.contains(x))return y;var N;return N=_y(T,c,s.store.containers),N===null&&(N=qs(),c.push({id:N,node:T})),k.config=L,k.containerId=N,k.styles=xy(k),f&&(k.sequence={id:f.id,index:f.members.length},f.members.push(k.id)),y.push(k),y},[]);je(h,function(y){s.store.elements[y.id]=y,y.node.setAttribute("data-sr-id",y.id)})}catch(y){return Vn.call(this,"Reveal failed.",y.message)}je(c,function(y){s.store.containers[y.id]={id:y.id,node:y.node}}),f&&(this.store.sequences[f.id]=f),a!==!0&&(this.store.history.push({target:r,options:o}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(th.bind(this),0))}function _y(r){for(var o=[],a=arguments.length-1;a-- >0;)o[a]=arguments[a+1];var s=null;return je(o,function(c){je(c,function(f){s===null&&f.node===r&&(s=f.id)})}),s}function Cy(){var r=this;je(this.store.history,function(o){ih.call(r,o.target,o.options,!0)}),th.call(this)}var jy=function(r){return(r>0)-(r<0)||+r},Jd=Math.sign||jy;function Xd(r,o){var a=o?r.node.clientHeight:r.node.offsetHeight,s=o?r.node.clientWidth:r.node.offsetWidth,c=0,f=0,p=r.node;do isNaN(p.offsetTop)||(c+=p.offsetTop),isNaN(p.offsetLeft)||(f+=p.offsetLeft),p=p.offsetParent;while(p);return{bounds:{top:c,right:f+s,bottom:c+a,left:f},height:a,width:s}}function Py(r){var o,a;return r.node===document.documentElement?(o=window.pageYOffset,a=window.pageXOffset):(o=r.node.scrollTop,a=r.node.scrollLeft),{top:o,left:a}}function by(r){r===void 0&&(r={});var o=this.store.containers[r.containerId];if(o){var a=Math.max(0,Math.min(1,r.config.viewFactor)),s=r.config.viewOffset,c={top:r.geometry.bounds.top+r.geometry.height*a,right:r.geometry.bounds.right-r.geometry.width*a,bottom:r.geometry.bounds.bottom-r.geometry.height*a,left:r.geometry.bounds.left+r.geometry.width*a},f={top:o.geometry.bounds.top+o.scroll.top+s.top,right:o.geometry.bounds.right+o.scroll.left-s.right,bottom:o.geometry.bounds.bottom+o.scroll.top-s.bottom,left:o.geometry.bounds.left+o.scroll.left+s.left};return c.top<f.bottom&&c.right>f.left&&c.bottom>f.top&&c.left<f.right||r.styles.position==="fixed"}}function Ty(r,o){var a=this;r===void 0&&(r={type:"init"}),o===void 0&&(o=this.store.elements),gy(function(){var s=r.type==="init"||r.type==="resize";je(a.store.containers,function(c){s&&(c.geometry=Xd.call(a,c,!0));var f=Py.call(a,c);c.scroll&&(c.direction={x:Jd(f.left-c.scroll.left),y:Jd(f.top-c.scroll.top)}),c.scroll=f}),je(o,function(c){(s||c.geometry===void 0)&&(c.geometry=Xd.call(a,c)),c.visible=by.call(a,c)}),je(o,function(c){c.sequence?rh.call(a,c):Ei.call(a,c)}),a.pristine=!1})}function Ny(){var r=document.documentElement.style;return"transform"in r||"WebkitTransform"in r}function zy(){var r=document.documentElement.style;return"transition"in r||"WebkitTransition"in r}var Iy="4.0.9",bs,Ts,Ns,zs,Is,wn,Os,Rs;function Qn(r){r===void 0&&(r={});var o=typeof this>"u"||Object.getPrototypeOf(this)!==Qn.prototype;if(o)return new Qn(r);if(!Qn.isSupported())return Vn.call(this,"Instantiation failed.","This browser is not supported."),wi.failure();var a;try{a=wn?Ii({},wn,r):Ii({},Zp,r)}catch(c){return Vn.call(this,"Invalid configuration.",c.message),wi.failure()}try{var s=zi(a.container)[0];if(!s)throw new Error("Invalid container.")}catch(c){return Vn.call(this,c.message),wi.failure()}return wn=a,!wn.mobile&&ca()||!wn.desktop&&!ca()?(Vn.call(this,"This device is disabled.","desktop: "+wn.desktop,"mobile: "+wn.mobile),wi.failure()):(wi.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,bs=bs||Ty.bind(this),Ts=Ts||wy.bind(this),Ns=Ns||ih.bind(this),zs=zs||vu.bind(this),Is=Is||Cy.bind(this),Object.defineProperty(this,"delegate",{get:function(){return bs}}),Object.defineProperty(this,"destroy",{get:function(){return Ts}}),Object.defineProperty(this,"reveal",{get:function(){return Ns}}),Object.defineProperty(this,"clean",{get:function(){return zs}}),Object.defineProperty(this,"sync",{get:function(){return Is}}),Object.defineProperty(this,"defaults",{get:function(){return wn}}),Object.defineProperty(this,"version",{get:function(){return Iy}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Rs||(Rs=this))}Qn.isSupported=function(){return Ny()&&zy()};Object.defineProperty(Qn,"debug",{get:function(){return Os||!1},set:function(r){return Os=typeof r=="boolean"?r:Os}});Qn();const Oy=typeof window>"u",Jn=Oy?null:Qn(),Ry=ye.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`,Ly=ye.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      min-width: 0;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      overflow-wrap: break-word;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--yellow);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`,My=ye.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({theme:r})=>r.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--yellow);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      display: block;
      width: 100%;
      height: auto;
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: normal;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--yellow);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`,vx=()=>{const r=X.useRef(null),o=Cn();X.useEffect(()=>{o||Jn.reveal(r.current,qn())},[]);const a=["C/C++/Python","Embedded Systems",`ESP32/Arduino/
Raspberry Pi`,"PCB Design (Altium/KiCad)","IoT & Cloud Security","Digital Twins"];return S.jsxs(Ry,{id:"about",ref:r,children:[S.jsx("h2",{className:"numbered-heading",children:"About Me"}),S.jsxs("div",{className:"inner",children:[S.jsxs(Ly,{children:[S.jsxs("div",{children:[S.jsx("p",{children:`Hello! My name is Purit and I am an electrical engineering and computer science student mainly focused on embedded systems and IoT. I started working on embedded systems when I bought an Arduino Uno board at the store because it "looked cool" and started making simple LED projects. From there, I've moved onto more complex projects and designing my own PCBs.`}),S.jsxs("p",{children:["Since then, I've been lucky enough to have the opportunity to work at"," ",S.jsx("a",{href:"https://www.pegatroncorp.com/",children:"Pegatron"})," and"," ",S.jsx("a",{href:"https://www.houjuenergy.com/en/home",children:"Hou Ju Energy"}),". Currently, I am enrolled in an Electrical Engineering and Computer Science Masters degree."]}),S.jsx("p",{children:"Concepts I am most familiar with include:"})]}),S.jsx("ul",{className:"skills-list",children:a&&a.map((s,c)=>S.jsx("li",{children:s},c))})]}),S.jsx(My,{children:S.jsx("div",{className:"wrapper",children:S.jsx("img",{className:"img",src:ly,width:"500",alt:"Headshot"})})})]})]})},Dy={date:"2024-06-01",title:"Vehicle and Backstage Systems Engineer Intern",company:"Chailease Holding",location:"Taipei, Taiwan",range:"Apr 2024 - May 2024",url:"https://www.chaileaseholding.com/en"},Ay=`<ul>
<li>Used the .NET framework to design backend vehicle systems.</li>
<li>Helped project engineers with troubleshooting and debugging to make sure that the system works seamlessly.</li>
</ul>
`,$y=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:Dy,html:Ay},Symbol.toStringTag,{value:"Module"})),Fy={date:"2025-03-01",title:"AP Computer Science Professor",company:"GIS",location:"Chiang Mai, Thailand",range:"Mar 2025 - Aug 2025",url:"https://gisthailand.org/"},By=`<ul>
<li>Taught AP Computer Science A &amp; P curriculum at Grace International School, focusing on Java &amp; JavaScript programming, algorithms, data structures, and object-oriented design.</li>
<li>Helped students through lectures and coding exercises that are aligned with College Board standards.</li>
</ul>
`,Uy=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:Fy,html:By},Symbol.toStringTag,{value:"Module"})),Wy={date:"2025-10-01",title:"Project Engineer",company:"Hou Ju Energy",location:"Taipei, Taiwan",range:"Oct 2025 - Present",url:"https://www.houjuenergy.com/en/home"},Vy=`<ul>
<li>Managed daily and monthly energy reports across 7 AFC battery sites, keeping each one compliant with Taipower&#39;s E-dReg regulations.</li>
<li>Built in-house Python and Power Automate scripts that automate the team&#39;s recurring reporting and data-entry tasks.</li>
<li>Audited the O&amp;M team&#39;s monthly inspection reports for both solar and AFC battery farms, along with pre- and post-typhoon O&amp;M checklists across all sites during Typhoon Bavi.</li>
</ul>
`,Hy=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:Wy,html:Vy},Symbol.toStringTag,{value:"Module"})),Qy={date:"2024-10-01",title:"Digital Twin R&D Engineer Intern",company:"Pegatron",location:"Taipei, Taiwan",range:"May 2024 - Oct 2024",url:"https://www.pegatroncorp.com/"},Gy=`<ul>
<li>Developed a digital twin of a glue dispensing robot in NVIDIA Isaac Sim for faster prototyping and a reduction in potential production errors.</li>
<li>Created a dynamic AI-powered web application with REST APIs, JavaScript, and Python that interacts with the digital twin so users can interact with the robot through the web.</li>
<li>Work alongside project engineers to research and develop the robot to meet requirements.</li>
</ul>
`,Yy=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:Qy,html:Gy},Symbol.toStringTag,{value:"Module"})),Ky={date:"2025-05-31",title:"BitTheater",github:"https://github.com/kyriosaa/bittheater",tech:["C++","Arduino","KiCad"],showInProjects:!0,image:"/images/bittheater.jpg"},qy=`<p>A compact device that displays custom animations, displaying up to 4 unique animations in a sleek, pocket-sized design.</p>
`,Jy=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:Ky,html:qy},Symbol.toStringTag,{value:"Module"})),Xy={date:"2025-05-06",title:"Ditto Bot",github:"https://github.com/kyriosaa/ditto-bot",tech:["Python"],showInProjects:!0,image:"/images/dittobot.png"},Zy=`<p>A custom Discord bot built for the Pokemon Trading Card Game community Discord using Python and discord.py. Features include automated moderation, user interaction commands, automatic regex checking, and integration with external APIs. Currently being used in a community of over 32,000 members and actively maintained.</p>
`,e1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:Xy,html:Zy},Symbol.toStringTag,{value:"Module"})),t1={date:"2025-10-02",title:"LP4200 LiPo Battery Charger",github:"https://github.com/kyriosaa/lp4200",tech:["Electronics","PCB","Altium Designer"],showInProjects:!0,image:"/images/lp4200.png"},n1=`<p>A compact lithium polymer (LiPo) battery charging board with integrated safety features. For charging single-cell LiPo batteries used in IoT devices.</p>
`,r1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:t1,html:n1},Symbol.toStringTag,{value:"Module"})),i1={date:"2025-07-10",title:"Pong Wars",github:"https://github.com/kyriosaa/pong-wars",tech:["C++","ESP32"],showInProjects:!0,image:"/images/pongwars.jpeg"},o1=`<p>A tactile multiplayer gaming device that fits in your pocket. Initially started as a weekend project for me to practice making C programs that have their own window to display graphics. From there, I made a physical device for users to play pong against each other.</p>
`,a1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:i1,html:o1},Symbol.toStringTag,{value:"Module"})),l1={date:"2024-06-01",title:"SnackStore",github:"https://github.com/kyriosaa/snack-store",tech:["TypeScript","C#",".NET","React"],showInProjects:!0,image:"/images/snackstore.jpg"},s1=`<p>A modern e-commerce store mockup made using TypeScript, C#, .NET, and React. This website sells Taiwanese snacks and has features such as a database, membership login, website cookies, store item management, and Stripe payments.</p>
`,u1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:l1,html:s1},Symbol.toStringTag,{value:"Module"})),c1={date:"2024-10-01",title:"Wipeout",external:"https://kyriosaa.github.io/wipeout/",tech:["JavaScript","Three.js"],showInProjects:!1,image:"/images/wipeout.png"},f1=`<p>A simple obstacle course game on the web. I made this while learning how to use Three.js to make websites.</p>
`,d1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:c1,html:f1},Symbol.toStringTag,{value:"Module"})),p1={date:"2025-02-03",title:"Axis",github:"https://github.com/kyriosaa/axis",tech:["C++","ESP32"],showInProjects:!0,image:"/images/axis.JPG"},h1=`<p>A gyroscope-controlled RC car that I built in my free time. I wanted to put my own spin on the traditional RC Car project that many electronics enthusiasts create, so I decided that sending gyroscope data through Bluetooth would be interesting and also teach me some new things.</p>
`,m1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:p1,html:h1},Symbol.toStringTag,{value:"Module"})),g1={date:"2024-11-01",title:"7 Segment Display Binary Decoder",github:"https://github.com/kyriosaa/7binary",tech:["Electronics"],showInProjects:!1,image:"/images/binary_decoder.jpg"},v1=`<p>A device that translates binary inputs into decimal outputs. A binary input is converted to a decimal output using the 7447 BCD decoder.</p>
`,y1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:g1,html:v1},Symbol.toStringTag,{value:"Module"})),x1={date:"2026-06-14",title:"CLM-UAV",github:"https://github.com/kyriosaa/clm-uav",company:"National Taipei University of Technology",tech:["MicroPython","Google Cloud","Firebase"],showInProjects:!1,image:"/images/clm_uav.png"},w1=`<p>A real-time UAV telemetry system built on a Raspberry Pi Pico 2 W using MicroPython. Streams data to Google Cloud over MQTT with mutual TLS and visualized live on a Firebase-authenticated web dashboard with an interactive 3D drone model. Built with an emphasis on end-to-end IoT security: mTLS device authentication, per-device topic restrictions, and Firestore security rules.</p>
`,S1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:x1,html:w1},Symbol.toStringTag,{value:"Module"})),k1={date:"2025-04-10",title:"Collision Prevention System",github:"https://github.com/kyriosaa/cps",tech:["C","C++","Arduino"],showInProjects:!0,image:"/images/cps.JPG"},E1=`<p>Built for robotic vehicles, this Collision Prevention System helps smart vehicles navigate their surroundings and avoid potential obstacles.</p>
`,_1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:k1,html:E1},Symbol.toStringTag,{value:"Module"})),C1={date:"2025-10-22",title:"DC-10 LED Chaser Board",github:"https://github.com/kyriosaa/dc-10",tech:["Electronics","PCB","Altium Designer"],showInProjects:!0,image:"/images/dc10.png"},j1=`<p>A 10-LED chaser that sequentially illuminates LEDs using a CD74HC4017E decade counter with adjustable speed control.</p>
`,P1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:C1,html:j1},Symbol.toStringTag,{value:"Module"})),b1={date:"2024-05-01",title:"AI-Enhanced Website Biography",github:"https://github.com/kyriosaa/itdl-biography",external:"https://itdl-biography.vercel.app/",tech:["JavaScript","React"],company:"National Taipei University of Technology",showInProjects:!1,image:"/images/itdl_biography.png"},T1=`<p>A website that gives the biography of Taiwanese scientist Lyn Shun-Lien Shung by incorporating different AI elements such as a chatbot and image generation.</p>
`,N1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:b1,html:T1},Symbol.toStringTag,{value:"Module"})),z1={date:"2025-08-19",title:"Digital Twin - Fluid Dispenser",github:"https://github.com/kyriosaa/sap-1",external:"https://developer.nvidia.com/blog/pegatron-simulates-and-optimizes-factory-operations-with-ai-enabled-digital-twins/",company:"Pegatron Corportation",tech:["JavaScript","Python","NVIDIA Isaac Sim","ANSYS"],showInProjects:!1,image:"/images/pegatron_dt.jpg"},I1=`<p>AI-integrated digital twin of a robotic fluid dispensing arm featuring AI-controlled commands, physics simulation, and a user-friendly control interface.</p>
<p>Read more about this project on <a href="https://developer.nvidia.com/blog/pegatron-simulates-and-optimizes-factory-operations-with-ai-enabled-digital-twins/">NVIDIA Developer</a>.</p>
`,O1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:z1,html:I1},Symbol.toStringTag,{value:"Module"})),R1={date:"2025-12-29",title:"PicoPark",github:"https://github.com/kyriosaa/picopark",company:"National Taipei University of Technology",tech:["Raspberry Pi Pico","MicroPython"],showInProjects:!0,image:"/images/picopark.jpg"},L1=`<p>A smart parking lot management system using networked Raspberry Pi Pico 2 W microcontrollers. The system is designed as a distributed IoT application where a sensor node communicates wirelessly with a central gate controller.</p>
`,M1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:R1,html:L1},Symbol.toStringTag,{value:"Module"})),D1={date:"2025-01-01",title:"Raspberry Pi Game Console",external:"https://www.youtube.com/watch?v=S4q6FUawJAY&ab_channel=PuritHongjirakul",tech:["Raspberry Pi","Linux"],showInProjects:!1,image:"/images/rpi_game_console.jpg"},A1=`<p>A portable Raspberry Pi retro gaming console. Able to emulate games ranging from the Atari 2600 all the way to the original Playstation.</p>
`,$1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:D1,html:A1},Symbol.toStringTag,{value:"Module"})),F1={date:"2025-08-19",title:"SAP-1 8-bit Breadboard Computer",github:"https://github.com/kyriosaa/sap-1",tech:["Assembly","Digital Logic","Computer Architecture"],showInProjects:!1,image:"/images/sap1.JPG"},B1=`<p>A Turing-complete 8-bit computer built entirely on breadboards using discrete logic chips. Includes an instruction set with manual programming functions and core components such as a clock, ALU, registers, program counter, etc.</p>
<p>I built the SAP-1 because I wanted to challenge myself on working with only logic gates to create a functional system and to dive deeper into how computers work at a fundamental level, and what is most fundamental other than manipulating electricity itself?</p>
`,U1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:F1,html:B1},Symbol.toStringTag,{value:"Module"})),W1={date:"3",title:"CLM-UAV",cover:"./clm_uav.png",external:"https://github.com/kyriosaa/clm-uav",cta:"https://github.com/kyriosaa/clm-uav",tech:["Raspberry Pi Pico","MicroPython","Google Cloud"]},V1=`<p>A real-time UAV telemetry system built on a Raspberry Pi Pico 2 W using MicroPython. Streams data to Google Cloud over MQTT with mutual TLS and visualized live on a Firebase-authenticated web dashboard with an interactive 3D drone model. Built with an emphasis on end-to-end IoT security: mTLS device authentication, per-device topic restrictions, and Firestore security rules.</p>
`,H1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:W1,html:V1},Symbol.toStringTag,{value:"Module"})),Q1={date:"1",title:"Digital Twin - Fluid Dispenser",cover:"./pegatron_dt.jpg",external:"https://developer.nvidia.com/blog/pegatron-simulates-and-optimizes-factory-operations-with-ai-enabled-digital-twins/",cta:"https://developer.nvidia.com/blog/pegatron-simulates-and-optimizes-factory-operations-with-ai-enabled-digital-twins/",tech:["JavaScript","Python","NVIDIA Isaac Sim","ANSYS"]},G1=`<p>AI-integrated digital twin of a robotic fluid dispensing arm featuring AI-controlled commands, physics simulation, and a user-friendly control interface.</p>
<p>Read more about this project on <a href="https://developer.nvidia.com/blog/pegatron-simulates-and-optimizes-factory-operations-with-ai-enabled-digital-twins/">NVIDIA Developer</a>.</p>
`,Y1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:Q1,html:G1},Symbol.toStringTag,{value:"Module"})),K1={date:"2",title:"SAP-1",cover:"./sap1.JPG",external:"https://github.com/kyriosaa/sap-1",cta:"https://github.com/kyriosaa/sap-1",tech:["Assembly","Digital Logic","Computer Architecture"]},q1=`<p>A Turing-complete 8-bit computer built entirely on breadboards using discrete logic chips. Includes an instruction set with manual programming functions and core components such as a clock, ALU, registers, program counter, etc.</p>
<p>I built the SAP-1 because I wanted to challenge myself on working with only logic gates to create a functional system and to dive deeper into how computers work at a fundamental level, and what is most fundamental other than manipulating electricity itself?</p>
`,J1=Object.freeze(Object.defineProperty({__proto__:null,frontmatter:K1,html:q1},Symbol.toStringTag,{value:"Module"})),X1="/portfolio/assets/clm_uav-BlhIxNB5.png",Z1="/portfolio/assets/pegatron_dt-CYciwYTg.jpg",ex="/portfolio/assets/sap1-Iq8TNvYn.JPG",oh=r=>Object.values(r).map(({frontmatter:o,html:a})=>({frontmatter:o,html:a})),ah=(r,o)=>new Date(o.frontmatter.date)-new Date(r.frontmatter.date),Yo=oh(Object.assign({"../content/jobs/ChaileaseHolding/index.md":$y,"../content/jobs/GIS/index.md":Uy,"../content/jobs/HoujuEnergy/index.md":Hy,"../content/jobs/Pegatron/index.md":Yy})).sort(ah),tx=oh(Object.assign({"../content/projects/BitTheater.md":Jy,"../content/projects/DittoBot.md":e1,"../content/projects/LP4200.md":r1,"../content/projects/PongWars.md":a1,"../content/projects/SnackStore.md":u1,"../content/projects/Wipeout.md":d1,"../content/projects/axis.md":m1,"../content/projects/binary_decoder.md":y1,"../content/projects/clm_uav.md":S1,"../content/projects/cps.md":_1,"../content/projects/dc10.md":P1,"../content/projects/itdl_biography.md":N1,"../content/projects/pegatron_dt.md":O1,"../content/projects/picopark.md":M1,"../content/projects/rpi_game_console.md":$1,"../content/projects/sap1.md":U1})).sort(ah),nx=Object.assign({"../content/featured/clm_uav/index.md":H1,"../content/featured/pegatron_dt/index.md":Y1,"../content/featured/sap1/index.md":J1}),rx=Object.assign({"../content/featured/clm_uav/clm_uav.png":X1,"../content/featured/pegatron_dt/pegatron_dt.jpg":Z1,"../content/featured/sap1/sap1.JPG":ex}),ix=Object.entries(nx).map(([r,{frontmatter:o,html:a}])=>{const s=r.slice(0,r.lastIndexOf("/")+1),c=o.cover?rx[s+o.cover.replace(/^\.\//,"")]:null;return{frontmatter:o,html:a,cover:c}}).sort((r,o)=>Number(r.frontmatter.date)-Number(o.frontmatter.date)),ox=ye.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`,ax=ye.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`,lx=ye.button`
  ${({theme:r})=>r.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({isActive:r})=>r?"var(--yellow)":"var(--slate)"};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({theme:r})=>r.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`,sx=ye.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--yellow);
  transform: translateY(calc(${({activeTabId:r})=>r} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    margin-right: 50px;

    transform: translateX(calc(${({activeTabId:r})=>r} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`,ux=ye.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`,cx=ye.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({theme:r})=>r.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--yellow);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`,yx=()=>{const[r,o]=X.useState(0),[a,s]=X.useState(null),c=X.useRef([]),f=X.useRef(null),p=Cn();X.useEffect(()=>{p||Jn.reveal(f.current,qn())},[]);const g=()=>{if(c.current[a]){c.current[a].focus();return}a>=c.current.length&&s(0),a<0&&s(c.current.length-1)};X.useEffect(()=>g(),[a]);const h=y=>{switch(y.key){case Ci.ARROW_UP:{y.preventDefault(),s(a-1);break}case Ci.ARROW_DOWN:{y.preventDefault(),s(a+1);break}}};return S.jsxs(ox,{id:"jobs",ref:f,children:[S.jsx("h2",{className:"numbered-heading",children:"Experience"}),S.jsxs("div",{className:"inner",children:[S.jsxs(ax,{role:"tablist","aria-label":"Job tabs",onKeyDown:y=>h(y),children:[Yo&&Yo.map((y,x)=>{const{company:k}=y.frontmatter;return S.jsx(lx,{isActive:r===x,onClick:()=>o(x),ref:P=>c.current[x]=P,id:`tab-${x}`,role:"tab",tabIndex:r===x?"0":"-1","aria-selected":r===x,"aria-controls":`panel-${x}`,children:S.jsx("span",{children:k})},x)}),S.jsx(sx,{activeTabId:r})]}),S.jsx(ux,{children:Yo&&Yo.map((y,x)=>{const{frontmatter:k,html:P}=y,{title:L,url:T,company:N,range:D}=k;return S.jsx(_n,{in:r===x,timeout:250,classNames:"fade",children:S.jsxs(cx,{id:`panel-${x}`,role:"tabpanel",tabIndex:r===x?"0":"-1","aria-labelledby":`tab-${x}`,"aria-hidden":r!==x,hidden:r!==x,children:[S.jsxs("h3",{children:[S.jsx("span",{children:L}),S.jsxs("span",{className:"company",children:[" @ ",S.jsx("a",{href:T,className:"inline-link",children:N})]})]}),S.jsx("p",{className:"range",children:D}),S.jsx("div",{dangerouslySetInnerHTML:{__html:P}})]})},x)})})]})]})},fx=ye.ul`
  ${({theme:r})=>r.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`,dx=ye.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({theme:r})=>r.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--yellow);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({theme:r})=>r.mixins.boxShadow};
    position: relative;
    z-index: 2;
    text-align: left;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({theme:r})=>r.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({theme:r})=>r.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      ${({theme:r})=>r.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({theme:r})=>r.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--yellow);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: var(--border-radius);
      mix-blend-mode: normal;
      filter: grayscale(100%) contrast(1);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`,xx=()=>{const r=ix,o=X.useRef(null),a=X.useRef([]),s=Cn();return X.useEffect(()=>{s||(Jn.reveal(o.current,qn()),a.current.forEach((c,f)=>Jn.reveal(c,qn(f*100))))},[]),S.jsxs("section",{id:"projects",children:[S.jsx("h2",{className:"numbered-heading",ref:o,children:"Projects"}),S.jsx(fx,{children:r&&r.map(({frontmatter:c,html:f,cover:p},g)=>{const{external:h,title:y,tech:x,github:k,cta:P}=c;return S.jsxs(dx,{ref:L=>a.current[g]=L,children:[S.jsx("div",{className:"project-content",children:S.jsxs("div",{children:[S.jsx("p",{className:"project-overline",children:"Featured Project"}),S.jsx("h3",{className:"project-title",children:S.jsx("a",{href:h||k,children:y})}),S.jsx("div",{className:"project-description",dangerouslySetInnerHTML:{__html:f}}),x.length&&S.jsx("ul",{className:"project-tech-list",children:x.map((L,T)=>S.jsx("li",{children:L},T))}),S.jsxs("div",{className:"project-links",children:[P&&S.jsx("a",{href:P,"aria-label":"Course Link",className:"cta",children:"Learn More"}),k&&S.jsx("a",{href:k,"aria-label":"GitHub Link",children:S.jsx(En,{name:"GitHub"})}),h&&!P&&S.jsx("a",{href:h,"aria-label":"External Link",className:"external",children:S.jsx(En,{name:"External"})})]})]})}),S.jsx("div",{className:"project-image",children:S.jsx("a",{href:h||k||"#",children:S.jsx("img",{src:p,alt:y,className:"img",loading:"lazy"})})})]},g)})})]})},px=ye.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .projects-grid {
    ${({theme:r})=>r.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 20px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({theme:r})=>r.mixins.button};
    margin: 80px auto 0;
  }
`,Zd=ye.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
      .project-image {
        filter: grayscale(0%) contrast(1) brightness(100%);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({theme:r})=>r.mixins.boxShadow};
    ${({theme:r})=>r.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .project-top {
    ${({theme:r})=>r.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--yellow);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({theme:r})=>r.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .project-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({theme:r})=>r.mixins.inlineLink};
    }
  }

  .project-image {
    width: 100%;
    height: auto;
    margin-top: 15px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    filter: grayscale(100%) contrast(1) brightness(90%);
    transition: var(--transition);
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`,wx=()=>{const[r,o]=X.useState(!1),a=X.useRef(null),s=X.useRef([]),c=Cn();X.useEffect(()=>{c||(Jn.reveal(a.current,qn()),s.current.forEach((x,k)=>Jn.reveal(x,qn(k*100))))},[]);const f=9,p=tx.filter(({frontmatter:x})=>x.showInProjects!==!1),g=p.slice(0,f),h=r?p:g,y=x=>{const{frontmatter:k,html:P}=x,{github:L,external:T,title:N,tech:D,image:q}=k;return S.jsxs("div",{className:"project-inner",children:[S.jsxs("div",{className:"project-body",children:[S.jsxs("header",{children:[S.jsxs("div",{className:"project-top",children:[S.jsx("div",{className:"folder",children:S.jsx(En,{name:"Folder"})}),S.jsxs("div",{className:"project-links",children:[L&&S.jsx("a",{href:L,"aria-label":"GitHub Link",target:"_blank",rel:"noreferrer",children:S.jsx(En,{name:"GitHub"})}),T&&S.jsx("a",{href:T,"aria-label":"External Link",className:"external",target:"_blank",rel:"noreferrer",children:S.jsx(En,{name:"External"})})]})]}),S.jsx("h3",{className:"project-title",children:S.jsx("a",{href:T||L,target:"_blank",rel:"noreferrer",children:N})})]}),S.jsxs("div",{className:"project-content",children:[S.jsx("div",{className:"project-description",dangerouslySetInnerHTML:{__html:P}}),q&&S.jsx("img",{src:Ni(q),alt:N,className:"project-image"})]})]}),S.jsx("footer",{children:D&&S.jsx("ul",{className:"project-tech-list",children:D.map((O,A)=>S.jsx("li",{children:O},A))})})]})};return S.jsxs(px,{children:[S.jsx("h2",{ref:a,children:"More Projects"}),S.jsx("ul",{className:"projects-grid",children:c?S.jsx(S.Fragment,{children:h&&h.map((x,k)=>S.jsx(Zd,{children:y(x)},k))}):S.jsx(Gn,{component:null,children:h&&h.map((x,k)=>S.jsx(_n,{classNames:"fadeup",timeout:k>=f?(k-f)*300:300,exit:!1,children:S.jsx(Zd,{ref:P=>s.current[k]=P,style:{transitionDelay:`${k>=f?(k-f)*100:0}ms`},children:y(x)},k)},k))})}),S.jsx("a",{className:"more-button",href:Ni("/archive/"),children:"View All Projects"})]})},hx=ye.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: left;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--yellow);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .socials-link {
    ${({theme:r})=>r.mixins.smallButton};
    margin-top: 50px;
    margin-right: 10px;
  }
`,Sx=()=>{const r=X.useRef(null),o=Cn();return X.useEffect(()=>{o||Jn.reveal(r.current,qn())},[]),S.jsxs(hx,{id:"contact",ref:r,children:[S.jsx("h2",{className:"numbered-heading",children:"Contact"}),S.jsxs("p",{children:["Location: Taipei City, Taiwan ",S.jsx("br",{})," Email: kyriosaaph@gmail.com"]}),S.jsx("a",{className:"socials-link",href:"https://www.linkedin.com/in/kyriosaa/",children:"Linkedin"}),S.jsx("a",{className:"socials-link",href:"https://github.com/kyriosaa",children:"GitHub"})]})};export{vx as A,_n as C,xx as F,gx as H,En as I,yx as J,c0 as L,wx as P,Gn as T,qn as a,Sx as b,mx as c,ye as d,S as j,Pv as n,tx as p,X as r,Jn as s,Cn as u,Ni as w};
