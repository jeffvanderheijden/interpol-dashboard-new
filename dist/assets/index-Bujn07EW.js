(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Q_(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var If={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx;function MS(){if(xx)return Xo;xx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var d=null;if(c!==void 0&&(d=""+c),o.key!==void 0&&(d=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:d,ref:o!==void 0?o:null,props:c}}return Xo.Fragment=e,Xo.jsx=n,Xo.jsxs=n,Xo}var _x;function ES(){return _x||(_x=1,If.exports=MS()),If.exports}var x=ES(),Bf={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx;function TS(){if(vx)return dt;vx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(z,q,fe){this.props=z,this.context=q,this.refs=T,this.updater=fe||b}S.prototype.isReactComponent={},S.prototype.setState=function(z,q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,q,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function y(){}y.prototype=S.prototype;function A(z,q,fe){this.props=z,this.context=q,this.refs=T,this.updater=fe||b}var w=A.prototype=new y;w.constructor=A,M(w,S.prototype),w.isPureReactComponent=!0;var R=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},U=Object.prototype.hasOwnProperty;function I(z,q,fe,xe,Ce,Ie){return fe=Ie.ref,{$$typeof:a,type:z,key:q,ref:fe!==void 0?fe:null,props:Ie}}function H(z,q){return I(z.type,q,void 0,void 0,void 0,z.props)}function L(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function C(z){var q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(fe){return q[fe]})}var G=/\/+/g;function ee(z,q){return typeof z=="object"&&z!==null&&z.key!=null?C(""+z.key):q.toString(36)}function ce(){}function he(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(ce,ce):(z.status="pending",z.then(function(q){z.status==="pending"&&(z.status="fulfilled",z.value=q)},function(q){z.status==="pending"&&(z.status="rejected",z.reason=q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function J(z,q,fe,xe,Ce){var Ie=typeof z;(Ie==="undefined"||Ie==="boolean")&&(z=null);var ae=!1;if(z===null)ae=!0;else switch(Ie){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(z.$$typeof){case a:case e:ae=!0;break;case g:return ae=z._init,J(ae(z._payload),q,fe,xe,Ce)}}if(ae)return Ce=Ce(z),ae=xe===""?"."+ee(z,0):xe,R(Ce)?(fe="",ae!=null&&(fe=ae.replace(G,"$&/")+"/"),J(Ce,q,fe,"",function(Je){return Je})):Ce!=null&&(L(Ce)&&(Ce=H(Ce,fe+(Ce.key==null||z&&z.key===Ce.key?"":(""+Ce.key).replace(G,"$&/")+"/")+ae)),q.push(Ce)),1;ae=0;var be=xe===""?".":xe+":";if(R(z))for(var Te=0;Te<z.length;Te++)xe=z[Te],Ie=be+ee(xe,Te),ae+=J(xe,q,fe,Ie,Ce);else if(Te=_(z),typeof Te=="function")for(z=Te.call(z),Te=0;!(xe=z.next()).done;)xe=xe.value,Ie=be+ee(xe,Te++),ae+=J(xe,q,fe,Ie,Ce);else if(Ie==="object"){if(typeof z.then=="function")return J(he(z),q,fe,xe,Ce);throw q=String(z),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ae}function B(z,q,fe){if(z==null)return z;var xe=[],Ce=0;return J(z,xe,"","",function(Ie){return q.call(fe,Ie,Ce++)}),xe}function Y(z){if(z._status===-1){var q=z._result;q=q(),q.then(function(fe){(z._status===0||z._status===-1)&&(z._status=1,z._result=fe)},function(fe){(z._status===0||z._status===-1)&&(z._status=2,z._result=fe)}),z._status===-1&&(z._status=0,z._result=q)}if(z._status===1)return z._result.default;throw z._result}var K=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function ve(){}return dt.Children={map:B,forEach:function(z,q,fe){B(z,function(){q.apply(this,arguments)},fe)},count:function(z){var q=0;return B(z,function(){q++}),q},toArray:function(z){return B(z,function(q){return q})||[]},only:function(z){if(!L(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},dt.Component=S,dt.Fragment=n,dt.Profiler=o,dt.PureComponent=A,dt.StrictMode=r,dt.Suspense=p,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,dt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},dt.cache=function(z){return function(){return z.apply(null,arguments)}},dt.cloneElement=function(z,q,fe){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var xe=M({},z.props),Ce=z.key,Ie=void 0;if(q!=null)for(ae in q.ref!==void 0&&(Ie=void 0),q.key!==void 0&&(Ce=""+q.key),q)!U.call(q,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&q.ref===void 0||(xe[ae]=q[ae]);var ae=arguments.length-2;if(ae===1)xe.children=fe;else if(1<ae){for(var be=Array(ae),Te=0;Te<ae;Te++)be[Te]=arguments[Te+2];xe.children=be}return I(z.type,Ce,void 0,void 0,Ie,xe)},dt.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},dt.createElement=function(z,q,fe){var xe,Ce={},Ie=null;if(q!=null)for(xe in q.key!==void 0&&(Ie=""+q.key),q)U.call(q,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(Ce[xe]=q[xe]);var ae=arguments.length-2;if(ae===1)Ce.children=fe;else if(1<ae){for(var be=Array(ae),Te=0;Te<ae;Te++)be[Te]=arguments[Te+2];Ce.children=be}if(z&&z.defaultProps)for(xe in ae=z.defaultProps,ae)Ce[xe]===void 0&&(Ce[xe]=ae[xe]);return I(z,Ie,void 0,void 0,null,Ce)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(z){return{$$typeof:f,render:z}},dt.isValidElement=L,dt.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:Y}},dt.memo=function(z,q){return{$$typeof:h,type:z,compare:q===void 0?null:q}},dt.startTransition=function(z){var q=F.T,fe={};F.T=fe;try{var xe=z(),Ce=F.S;Ce!==null&&Ce(fe,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(ve,K)}catch(Ie){K(Ie)}finally{F.T=q}},dt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},dt.use=function(z){return F.H.use(z)},dt.useActionState=function(z,q,fe){return F.H.useActionState(z,q,fe)},dt.useCallback=function(z,q){return F.H.useCallback(z,q)},dt.useContext=function(z){return F.H.useContext(z)},dt.useDebugValue=function(){},dt.useDeferredValue=function(z,q){return F.H.useDeferredValue(z,q)},dt.useEffect=function(z,q,fe){var xe=F.H;if(typeof fe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xe.useEffect(z,q)},dt.useId=function(){return F.H.useId()},dt.useImperativeHandle=function(z,q,fe){return F.H.useImperativeHandle(z,q,fe)},dt.useInsertionEffect=function(z,q){return F.H.useInsertionEffect(z,q)},dt.useLayoutEffect=function(z,q){return F.H.useLayoutEffect(z,q)},dt.useMemo=function(z,q){return F.H.useMemo(z,q)},dt.useOptimistic=function(z,q){return F.H.useOptimistic(z,q)},dt.useReducer=function(z,q,fe){return F.H.useReducer(z,q,fe)},dt.useRef=function(z){return F.H.useRef(z)},dt.useState=function(z){return F.H.useState(z)},dt.useSyncExternalStore=function(z,q,fe){return F.H.useSyncExternalStore(z,q,fe)},dt.useTransition=function(){return F.H.useTransition()},dt.version="19.1.0",dt}var bx;function Tp(){return bx||(bx=1,Bf.exports=TS()),Bf.exports}var O=Tp();const $t=Q_(O);var kf={exports:{}},Wo={},jf={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx;function AS(){return yx||(yx=1,function(a){function e(B,Y){var K=B.length;B.push(Y);e:for(;0<K;){var ve=K-1>>>1,z=B[ve];if(0<o(z,Y))B[ve]=Y,B[K]=z,K=ve;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],K=B.pop();if(K!==Y){B[0]=K;e:for(var ve=0,z=B.length,q=z>>>1;ve<q;){var fe=2*(ve+1)-1,xe=B[fe],Ce=fe+1,Ie=B[Ce];if(0>o(xe,K))Ce<z&&0>o(Ie,xe)?(B[ve]=Ie,B[Ce]=K,ve=Ce):(B[ve]=xe,B[fe]=K,ve=fe);else if(Ce<z&&0>o(Ie,K))B[ve]=Ie,B[Ce]=K,ve=Ce;else break e}}return Y}function o(B,Y){var K=B.sortIndex-Y.sortIndex;return K!==0?K:B.id-Y.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();a.unstable_now=function(){return d.now()-f}}var p=[],h=[],g=1,v=null,_=3,b=!1,M=!1,T=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function R(B){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=B)r(h),Y.sortIndex=Y.expirationTime,e(p,Y);else break;Y=n(h)}}function F(B){if(T=!1,R(B),!M)if(n(p)!==null)M=!0,U||(U=!0,ee());else{var Y=n(h);Y!==null&&J(F,Y.startTime-B)}}var U=!1,I=-1,H=5,L=-1;function C(){return S?!0:!(a.unstable_now()-L<H)}function G(){if(S=!1,U){var B=a.unstable_now();L=B;var Y=!0;try{e:{M=!1,T&&(T=!1,A(I),I=-1),b=!0;var K=_;try{t:{for(R(B),v=n(p);v!==null&&!(v.expirationTime>B&&C());){var ve=v.callback;if(typeof ve=="function"){v.callback=null,_=v.priorityLevel;var z=ve(v.expirationTime<=B);if(B=a.unstable_now(),typeof z=="function"){v.callback=z,R(B),Y=!0;break t}v===n(p)&&r(p),R(B)}else r(p);v=n(p)}if(v!==null)Y=!0;else{var q=n(h);q!==null&&J(F,q.startTime-B),Y=!1}}break e}finally{v=null,_=K,b=!1}Y=void 0}}finally{Y?ee():U=!1}}}var ee;if(typeof w=="function")ee=function(){w(G)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=G,ee=function(){he.postMessage(null)}}else ee=function(){y(G,0)};function J(B,Y){I=y(function(){B(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var K=_;_=Y;try{return B()}finally{_=K}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=_;_=B;try{return Y()}finally{_=K}},a.unstable_scheduleCallback=function(B,Y,K){var ve=a.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ve+K:ve):K=ve,B){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=K+z,B={id:g++,callback:Y,priorityLevel:B,startTime:K,expirationTime:z,sortIndex:-1},K>ve?(B.sortIndex=K,e(h,B),n(p)===null&&B===n(h)&&(T?(A(I),I=-1):T=!0,J(F,K-ve))):(B.sortIndex=z,e(p,B),M||b||(M=!0,U||(U=!0,ee()))),B},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(B){var Y=_;return function(){var K=_;_=Y;try{return B.apply(this,arguments)}finally{_=K}}}}(Hf)),Hf}var Sx;function wS(){return Sx||(Sx=1,jf.exports=AS()),jf.exports}var Gf={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx;function RS(){if(Mx)return Nn;Mx=1;var a=Tp();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:h,implementation:g}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(p,h,null,g)},Nn.flushSync=function(p){var h=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=h,r.p=g,r.d.f()}},Nn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Nn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Nn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,v=f(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:b}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Nn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=f(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Nn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=f(g,h.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Nn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=f(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Nn.requestFormReset=function(p){r.d.r(p)},Nn.unstable_batchedUpdates=function(p,h){return p(h)},Nn.useFormState=function(p,h,g){return d.H.useFormState(p,h,g)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.1.0",Nn}var Ex;function CS(){if(Ex)return Gf.exports;Ex=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Gf.exports=RS(),Gf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx;function DS(){if(Tx)return Wo;Tx=1;var a=wS(),e=Tp(),n=CS();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function d(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var m=u.alternate;if(m===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===s)return f(u),t;if(m===l)return f(u),i;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=m;else{for(var E=!1,N=u.child;N;){if(N===s){E=!0,s=u,l=m;break}if(N===l){E=!0,l=u,s=m;break}N=N.sibling}if(!E){for(N=m.child;N;){if(N===s){E=!0,s=m,l=u;break}if(N===l){E=!0,l=m,s=u;break}N=N.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function h(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=h(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),w=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case F:return"Suspense";case U:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case w:return(t.displayName||"Context")+".Provider";case A:return(t._context.displayName||"Context")+".Consumer";case R:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case H:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}var J=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},ve=[],z=-1;function q(t){return{current:t}}function fe(t){0>z||(t.current=ve[z],ve[z]=null,z--)}function xe(t,i){z++,ve[z]=t.current,t.current=i}var Ce=q(null),Ie=q(null),ae=q(null),be=q(null);function Te(t,i){switch(xe(ae,i),xe(Ie,t),xe(Ce,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Xg(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Xg(i),t=Wg(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}fe(Ce),xe(Ce,t)}function Je(){fe(Ce),fe(Ie),fe(ae)}function Ve(t){t.memoizedState!==null&&xe(be,t);var i=Ce.current,s=Wg(i,t.type);i!==s&&(xe(Ie,t),xe(Ce,s))}function ct(t){Ie.current===t&&(fe(Ce),fe(Ie)),be.current===t&&(fe(be),ko._currentValue=K)}var en=Object.prototype.hasOwnProperty,ut=a.unstable_scheduleCallback,Ft=a.unstable_cancelCallback,V=a.unstable_shouldYield,mt=a.unstable_requestPaint,st=a.unstable_now,Pt=a.unstable_getCurrentPriorityLevel,He=a.unstable_ImmediatePriority,Gt=a.unstable_UserBlockingPriority,Xe=a.unstable_NormalPriority,ot=a.unstable_LowPriority,k=a.unstable_IdlePriority,D=a.log,ie=a.unstable_setDisableYieldValue,me=null,_e=null;function de(t){if(typeof D=="function"&&ie(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(me,t)}catch{}}var Pe=Math.clz32?Math.clz32:Ge,Ue=Math.log,Qe=Math.LN2;function Ge(t){return t>>>=0,t===0?32:31-(Ue(t)/Qe|0)|0}var Me=256,we=4194304;function Ye(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $e(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var u=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var N=l&134217727;return N!==0?(l=N&~m,l!==0?u=Ye(l):(E&=N,E!==0?u=Ye(E):s||(s=N&~t,s!==0&&(u=Ye(s))))):(N=l&~m,N!==0?u=Ye(N):E!==0?u=Ye(E):s||(s=l&~t,s!==0&&(u=Ye(s)))),u===0?0:i!==0&&i!==u&&(i&m)===0&&(m=u&-u,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:u}function Fe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function it(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),t}function Ne(){var t=we;return we<<=1,(we&62914560)===0&&(we=4194304),t}function De(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Re(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ee(t,i,s,l,u,m){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var N=t.entanglements,j=t.expirationTimes,ne=t.hiddenUpdates;for(s=E&~s;0<s;){var pe=31-Pe(s),ye=1<<pe;N[pe]=0,j[pe]=-1;var re=ne[pe];if(re!==null)for(ne[pe]=null,pe=0;pe<re.length;pe++){var se=re[pe];se!==null&&(se.lane&=-536870913)}s&=~ye}l!==0&&Se(t,l,0),m!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~i))}function Se(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Pe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function ke(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Pe(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}function at(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:dx(t.type))}function ri(t,i){var s=Y.p;try{return Y.p=t,i()}finally{Y.p=s}}var ln=Math.random().toString(36).slice(2),bn="__reactFiber$"+ln,An="__reactProps$"+ln,ji="__reactContainer$"+ln,_i="__reactEvents$"+ln,Ks="__reactListeners$"+ln,yl="__reactHandles$"+ln,Zs="__reactResources$"+ln,Li="__reactMarker$"+ln;function jr(t){delete t[bn],delete t[An],delete t[_i],delete t[Ks],delete t[yl]}function vi(t){var i=t[bn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ji]||s[bn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Zg(t);t!==null;){if(s=t[bn])return s;t=Zg(t)}return i}t=s,s=t.parentNode}return null}function Hi(t){if(t=t[bn]||t[ji]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function ya(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Sa(t){var i=t[Zs];return i||(i=t[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function cn(t){t[Li]=!0}var Sl=new Set,Ml={};function Gi(t,i){Ma(t,i),Ma(t+"Capture",i)}function Ma(t,i){for(Ml[t]=i,t=0;t<i.length;t++)Sl.add(i[t])}var P=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$={},le={};function ue(t){return en.call(le,t)?!0:en.call($,t)?!1:P.test(t)?le[t]=!0:($[t]=!0,!1)}function Q(t,i,s){if(ue(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ae(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Le(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var Be,ze;function Ke(t){if(Be===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Be=i&&i[1]||"",ze=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Be+t+ze}var et=!1;function We(t,i){if(!t||et)return"";et=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(se){var re=se}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(se){re=se}t.call(ye.prototype)}}else{try{throw Error()}catch(se){re=se}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(se){if(se&&re&&typeof se.stack=="string")return[se.stack,re.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],N=m[1];if(E&&N){var j=E.split(`
`),ne=N.split(`
`);for(u=l=0;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(l===j.length||u===ne.length)for(l=j.length-1,u=ne.length-1;1<=l&&0<=u&&j[l]!==ne[u];)u--;for(;1<=l&&0<=u;l--,u--)if(j[l]!==ne[u]){if(l!==1||u!==1)do if(l--,u--,0>u||j[l]!==ne[u]){var pe=`
`+j[l].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=l&&0<=u);break}}}finally{et=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ke(s):""}function gt(t){switch(t.tag){case 26:case 27:case 5:return Ke(t.type);case 16:return Ke("Lazy");case 13:return Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return We(t.type,!1);case 11:return We(t.type.render,!1);case 1:return We(t.type,!0);case 31:return Ke("Activity");default:return""}}function wt(t){try{var i="";do i+=gt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Lt(t){var i=Wt(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ze(t){t._valueTracker||(t._valueTracker=Lt(t))}function Vt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Wt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function _t(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fn=/[\n"\\]/g;function mn(t){return t.replace(Fn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function wn(t,i,s,l,u,m,E,N){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+yt(i)):t.value!==""+yt(i)&&(t.value=""+yt(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?jt(t,E,yt(i)):s!=null?jt(t,E,yt(s)):l!=null&&t.removeAttribute("value"),u==null&&m!=null&&(t.defaultChecked=!!m),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+yt(N):t.removeAttribute("name")}function Ea(t,i,s,l,u,m,E,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+yt(s):"",i=i!=null?""+yt(i):s,N||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=N?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function jt(t,i,s){i==="number"&&_t(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function tn(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+yt(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function Pn(t,i,s){if(i!=null&&(i=""+yt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+yt(s):""}function yn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(J(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=yt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function nn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var $s=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ni(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||$s.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Wp(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&Ni(t,u,l)}else for(var m in i)i.hasOwnProperty(m)&&Ni(t,m,i[m])}function Pu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(t){return Sb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var zu=null;function Iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hr=null,Gr=null;function qp(t){var i=Hi(t);if(i&&(t=i.stateNode)){var s=t[An]||null;e:switch(t=i.stateNode,i.type){case"input":if(wn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+mn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=l[An]||null;if(!u)throw Error(r(90));wn(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Vt(l)}break e;case"textarea":Pn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&tn(t,!!s.multiple,i,!1)}}}var Bu=!1;function Yp(t,i,s){if(Bu)return t(i,s);Bu=!0;try{var l=t(i);return l}finally{if(Bu=!1,(Hr!==null||Gr!==null)&&(cc(),Hr&&(i=Hr,t=Gr,Gr=Hr=null,qp(i),t)))for(i=0;i<t.length;i++)qp(t[i])}}function Qs(t,i){var s=t.stateNode;if(s===null)return null;var l=s[An]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=!1;if(Vi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{ku=!1}var Ta=null,ju=null,Tl=null;function Kp(){if(Tl)return Tl;var t,i=ju,s=i.length,l,u="value"in Ta?Ta.value:Ta.textContent,m=u.length;for(t=0;t<s&&i[t]===u[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===u[m-l];l++);return Tl=u.slice(t,1<l?1-l:void 0)}function Al(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Zp(){return!1}function kn(t){function i(s,l,u,m,E){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wl:Zp,this.isPropagationStopped=Zp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),i}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=kn(ur),eo=g({},ur,{view:0,detail:0}),Mb=kn(eo),Hu,Gu,to,Cl=g({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Hu=t.screenX-to.screenX,Gu=t.screenY-to.screenY):Gu=Hu=0,to=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),$p=kn(Cl),Eb=g({},Cl,{dataTransfer:0}),Tb=kn(Eb),Ab=g({},eo,{relatedTarget:0}),Vu=kn(Ab),wb=g({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Rb=kn(wb),Cb=g({},ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Db=kn(Cb),Lb=g({},ur,{data:0}),Qp=kn(Lb),Nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fb(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ob[t])?!!i[t]:!1}function Xu(){return Fb}var Pb=g({},eo,{key:function(t){if(t.key){var i=Nb[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ub[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zb=kn(Pb),Ib=g({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=kn(Ib),Bb=g({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),kb=kn(Bb),jb=g({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hb=kn(jb),Gb=g({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vb=kn(Gb),Xb=g({},ur,{newState:0,oldState:0}),Wb=kn(Xb),qb=[9,13,27,32],Wu=Vi&&"CompositionEvent"in window,no=null;Vi&&"documentMode"in document&&(no=document.documentMode);var Yb=Vi&&"TextEvent"in window&&!no,em=Vi&&(!Wu||no&&8<no&&11>=no),tm=" ",nm=!1;function im(t,i){switch(t){case"keyup":return qb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function Kb(t,i){switch(t){case"compositionend":return am(i);case"keypress":return i.which!==32?null:(nm=!0,tm);case"textInput":return t=i.data,t===tm&&nm?null:t;default:return null}}function Zb(t,i){if(Vr)return t==="compositionend"||!Wu&&im(t,i)?(t=Kp(),Tl=ju=Ta=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return em&&i.locale!=="ko"?null:i.data;default:return null}}var $b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!$b[t.type]:i==="textarea"}function sm(t,i,s,l){Hr?Gr?Gr.push(l):Gr=[l]:Hr=l,i=mc(i,"onChange"),0<i.length&&(s=new Rl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var io=null,ao=null;function Qb(t){kg(t,0)}function Dl(t){var i=ya(t);if(Vt(i))return t}function om(t,i){if(t==="change")return i}var lm=!1;if(Vi){var qu;if(Vi){var Yu="oninput"in document;if(!Yu){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),Yu=typeof cm.oninput=="function"}qu=Yu}else qu=!1;lm=qu&&(!document.documentMode||9<document.documentMode)}function um(){io&&(io.detachEvent("onpropertychange",dm),ao=io=null)}function dm(t){if(t.propertyName==="value"&&Dl(ao)){var i=[];sm(i,ao,t,Iu(t)),Yp(Qb,i)}}function Jb(t,i,s){t==="focusin"?(um(),io=i,ao=s,io.attachEvent("onpropertychange",dm)):t==="focusout"&&um()}function ey(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(ao)}function ty(t,i){if(t==="click")return Dl(i)}function ny(t,i){if(t==="input"||t==="change")return Dl(i)}function iy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var qn=typeof Object.is=="function"?Object.is:iy;function ro(t,i){if(qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!en.call(i,u)||!qn(t[u],i[u]))return!1}return!0}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,i){var s=fm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=fm(s)}}function pm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?pm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=_t(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=_t(t.document)}return i}function Ku(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var ay=Vi&&"documentMode"in document&&11>=document.documentMode,Xr=null,Zu=null,so=null,$u=!1;function gm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;$u||Xr==null||Xr!==_t(l)||(l=Xr,"selectionStart"in l&&Ku(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),so&&ro(so,l)||(so=l,l=mc(Zu,"onSelect"),0<l.length&&(i=new Rl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Xr)))}function dr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Wr={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},Qu={},xm={};Vi&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function fr(t){if(Qu[t])return Qu[t];if(!Wr[t])return t;var i=Wr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in xm)return Qu[t]=i[s];return t}var _m=fr("animationend"),vm=fr("animationiteration"),bm=fr("animationstart"),ry=fr("transitionrun"),sy=fr("transitionstart"),oy=fr("transitioncancel"),ym=fr("transitionend"),Sm=new Map,Ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ju.push("scrollEnd");function bi(t,i){Sm.set(t,i),Gi(i,[t])}var Mm=new WeakMap;function si(t,i){if(typeof t=="object"&&t!==null){var s=Mm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:wt(i)},Mm.set(t,i),i)}return{value:t,source:i,stack:wt(i)}}var oi=[],qr=0,ed=0;function Ll(){for(var t=qr,i=ed=qr=0;i<t;){var s=oi[i];oi[i++]=null;var l=oi[i];oi[i++]=null;var u=oi[i];oi[i++]=null;var m=oi[i];if(oi[i++]=null,l!==null&&u!==null){var E=l.pending;E===null?u.next=u:(u.next=E.next,E.next=u),l.pending=u}m!==0&&Em(s,u,m)}}function Nl(t,i,s,l){oi[qr++]=t,oi[qr++]=i,oi[qr++]=s,oi[qr++]=l,ed|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function td(t,i,s,l){return Nl(t,i,s,l),Ul(t)}function Yr(t,i){return Nl(t,null,null,i),Ul(t)}function Em(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var u=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(u=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,u&&i!==null&&(u=31-Pe(s),t=m.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=s|536870912),m):null}function Ul(t){if(50<No)throw No=0,lf=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Kr={};function ly(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,s,l){return new ly(t,i,s,l)}function nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,i){var s=t.alternate;return s===null?(s=Yn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Tm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ol(t,i,s,l,u,m){var E=0;if(l=t,typeof t=="function")nd(t)&&(E=1);else if(typeof t=="string")E=uS(t,s,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=Yn(31,s,i,u),t.elementType=L,t.lanes=m,t;case M:return hr(s.children,u,m,i);case T:E=8,u|=24;break;case S:return t=Yn(12,s,i,u|2),t.elementType=S,t.lanes=m,t;case F:return t=Yn(13,s,i,u),t.elementType=F,t.lanes=m,t;case U:return t=Yn(19,s,i,u),t.elementType=U,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case w:E=10;break e;case A:E=9;break e;case R:E=11;break e;case I:E=14;break e;case H:E=16,l=null;break e}E=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=Yn(E,s,i,u),i.elementType=t,i.type=l,i.lanes=m,i}function hr(t,i,s,l){return t=Yn(7,t,l,i),t.lanes=s,t}function id(t,i,s){return t=Yn(6,t,null,i),t.lanes=s,t}function ad(t,i,s){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Zr=[],$r=0,Fl=null,Pl=0,li=[],ci=0,pr=null,Wi=1,qi="";function mr(t,i){Zr[$r++]=Pl,Zr[$r++]=Fl,Fl=t,Pl=i}function Am(t,i,s){li[ci++]=Wi,li[ci++]=qi,li[ci++]=pr,pr=t;var l=Wi;t=qi;var u=32-Pe(l)-1;l&=~(1<<u),s+=1;var m=32-Pe(i)+u;if(30<m){var E=u-u%5;m=(l&(1<<E)-1).toString(32),l>>=E,u-=E,Wi=1<<32-Pe(i)+u|s<<u|l,qi=m+t}else Wi=1<<m|s<<u|l,qi=t}function rd(t){t.return!==null&&(mr(t,1),Am(t,1,0))}function sd(t){for(;t===Fl;)Fl=Zr[--$r],Zr[$r]=null,Pl=Zr[--$r],Zr[$r]=null;for(;t===pr;)pr=li[--ci],li[ci]=null,qi=li[--ci],li[ci]=null,Wi=li[--ci],li[ci]=null}var zn=null,Qt=null,Rt=!1,gr=null,Ui=!1,od=Error(r(519));function xr(t){var i=Error(r(418,""));throw co(si(i,t)),od}function wm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[bn]=t,i[An]=l,s){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(s=0;s<Oo.length;s++)bt(Oo[s],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":bt("invalid",i),Ea(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ze(i);break;case"select":bt("invalid",i);break;case"textarea":bt("invalid",i),yn(i,l.value,l.defaultValue,l.children),Ze(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Vg(i.textContent,s)?(l.popover!=null&&(bt("beforetoggle",i),bt("toggle",i)),l.onScroll!=null&&bt("scroll",i),l.onScrollEnd!=null&&bt("scrollend",i),l.onClick!=null&&(i.onclick=gc),i=!0):i=!1,i||xr(t)}function Rm(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:zn=zn.return}}function oo(t){if(t!==zn)return!1;if(!Rt)return Rm(t),Rt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Ef(t.type,t.memoizedProps)),s=!s),s&&Qt&&xr(t),Rm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){Qt=Si(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}Qt=null}}else i===27?(i=Qt,ja(t.type)?(t=Rf,Rf=null,Qt=t):Qt=i):Qt=zn?Si(t.stateNode.nextSibling):null;return!0}function lo(){Qt=zn=null,Rt=!1}function Cm(){var t=gr;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),gr=null),t}function co(t){gr===null?gr=[t]:gr.push(t)}var ld=q(null),_r=null,Yi=null;function Aa(t,i,s){xe(ld,i._currentValue),i._currentValue=s}function Ki(t){t._currentValue=ld.current,fe(ld)}function cd(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ud(t,i,s,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var m=u.dependencies;if(m!==null){var E=u.child;m=m.firstContext;e:for(;m!==null;){var N=m;m=u;for(var j=0;j<i.length;j++)if(N.context===i[j]){m.lanes|=s,N=m.alternate,N!==null&&(N.lanes|=s),cd(m.return,s,t),l||(E=null);break e}m=N.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(r(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),cd(E,s,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function uo(t,i,s,l){t=null;for(var u=i,m=!1;u!==null;){if(!m){if((u.flags&524288)!==0)m=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var N=u.type;qn(u.pendingProps.value,E.value)||(t!==null?t.push(N):t=[N])}}else if(u===be.current){if(E=u.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ko):t=[ko])}u=u.return}t!==null&&ud(i,t,s,l),i.flags|=262144}function zl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vr(t){_r=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Dm(_r,t)}function Il(t,i){return _r===null&&vr(t),Dm(t,i)}function Dm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Yi===null){if(t===null)throw Error(r(308));Yi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Yi=Yi.next=i;return s}var cy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},uy=a.unstable_scheduleCallback,dy=a.unstable_NormalPriority,gn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dd(){return{controller:new cy,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&uy(dy,function(){t.controller.abort()})}var ho=null,fd=0,Qr=0,Jr=null;function fy(t,i){if(ho===null){var s=ho=[];fd=0,Qr=mf(),Jr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return fd++,i.then(Lm,Lm),i}function Lm(){if(--fd===0&&ho!==null){Jr!==null&&(Jr.status="fulfilled");var t=ho;ho=null,Qr=0,Jr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function hy(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var Nm=B.S;B.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&fy(t,i),Nm!==null&&Nm(t,i)};var br=q(null);function hd(){var t=br.current;return t!==null?t:Xt.pooledCache}function Bl(t,i){i===null?xe(br,br.current):xe(br,i.pool)}function Um(){var t=hd();return t===null?null:{parent:gn._currentValue,pool:t}}var po=Error(r(460)),Om=Error(r(474)),kl=Error(r(542)),pd={then:function(){}};function Fm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jl(){}function Pm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(jl,jl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Im(t),t;default:if(typeof i.status=="string")i.then(jl,jl);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Im(t),t}throw mo=i,po}}var mo=null;function zm(){if(mo===null)throw Error(r(459));var t=mo;return mo=null,t}function Im(t){if(t===po||t===kl)throw Error(r(483))}var wa=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Nt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=Ul(t),Em(t,null,s),i}return Nl(t,l,i,s),Ul(t)}function go(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ke(t,s)}}function xd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?u=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?u=m=i:m=m.next=i}else u=m=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var _d=!1;function xo(){if(_d){var t=Jr;if(t!==null)throw t}}function _o(t,i,s,l){_d=!1;var u=t.updateQueue;wa=!1;var m=u.firstBaseUpdate,E=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var j=N,ne=j.next;j.next=null,E===null?m=ne:E.next=ne,E=j;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,N=pe.lastBaseUpdate,N!==E&&(N===null?pe.firstBaseUpdate=ne:N.next=ne,pe.lastBaseUpdate=j))}if(m!==null){var ye=u.baseState;E=0,pe=ne=j=null,N=m;do{var re=N.lane&-536870913,se=re!==N.lane;if(se?(Mt&re)===re:(l&re)===re){re!==0&&re===Qr&&(_d=!0),pe!==null&&(pe=pe.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var rt=t,tt=N;re=i;var Bt=s;switch(tt.tag){case 1:if(rt=tt.payload,typeof rt=="function"){ye=rt.call(Bt,ye,re);break e}ye=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=tt.payload,re=typeof rt=="function"?rt.call(Bt,ye,re):rt,re==null)break e;ye=g({},ye,re);break e;case 2:wa=!0}}re=N.callback,re!==null&&(t.flags|=64,se&&(t.flags|=8192),se=u.callbacks,se===null?u.callbacks=[re]:se.push(re))}else se={lane:re,tag:N.tag,payload:N.payload,callback:N.callback,next:null},pe===null?(ne=pe=se,j=ye):pe=pe.next=se,E|=re;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;se=N,N=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);pe===null&&(j=ye),u.baseState=j,u.firstBaseUpdate=ne,u.lastBaseUpdate=pe,m===null&&(u.shared.lanes=0),za|=E,t.lanes=E,t.memoizedState=ye}}function Bm(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function km(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Bm(s[t],i)}var es=q(null),Hl=q(0);function jm(t,i){t=na,xe(Hl,t),xe(es,i),na=t|i.baseLanes}function vd(){xe(Hl,na),xe(es,es.current)}function bd(){na=Hl.current,fe(es),fe(Hl)}var Da=0,pt=null,zt=null,un=null,Gl=!1,ts=!1,yr=!1,Vl=0,vo=0,ns=null,py=0;function an(){throw Error(r(321))}function yd(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!qn(t[s],i[s]))return!1;return!0}function Sd(t,i,s,l,u,m){return Da=m,pt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?E0:T0,yr=!1,m=s(l,u),yr=!1,ts&&(m=Gm(i,s,l,u)),Hm(t),m}function Hm(t){B.H=Zl;var i=zt!==null&&zt.next!==null;if(Da=0,un=zt=pt=null,Gl=!1,vo=0,ns=null,i)throw Error(r(300));t===null||Sn||(t=t.dependencies,t!==null&&zl(t)&&(Sn=!0))}function Gm(t,i,s,l){pt=t;var u=0;do{if(ts&&(ns=null),vo=0,ts=!1,25<=u)throw Error(r(301));if(u+=1,un=zt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=yy,m=i(s,l)}while(ts);return m}function my(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?bo(i):i,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(pt.flags|=1024),i}function Md(){var t=Vl!==0;return Vl=0,t}function Ed(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Td(t){if(Gl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Gl=!1}Da=0,un=zt=pt=null,ts=!1,vo=Vl=0,ns=null}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?pt.memoizedState=un=t:un=un.next=t,un}function dn(){if(zt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var i=un===null?pt.memoizedState:un.next;if(i!==null)un=i,zt=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},un===null?pt.memoizedState=un=t:un=un.next=t}return un}function Ad(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(t){var i=vo;return vo+=1,ns===null&&(ns=[]),t=Pm(ns,t,i),i=pt,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?E0:T0),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bo(t);if(t.$$typeof===w)return Ln(t)}throw Error(r(438,String(t)))}function wd(t){var i=null,s=pt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=pt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Ad(),pt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=C;return i.index++,s}function Zi(t,i){return typeof i=="function"?i(t):i}function Wl(t){var i=dn();return Rd(i,zt,t)}function Rd(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=t.baseQueue,m=l.pending;if(m!==null){if(u!==null){var E=u.next;u.next=m.next,m.next=E}i.baseQueue=u=m,l.pending=null}if(m=t.baseState,u===null)t.memoizedState=m;else{i=u.next;var N=E=null,j=null,ne=i,pe=!1;do{var ye=ne.lane&-536870913;if(ye!==ne.lane?(Mt&ye)===ye:(Da&ye)===ye){var re=ne.revertLane;if(re===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ye===Qr&&(pe=!0);else if((Da&re)===re){ne=ne.next,re===Qr&&(pe=!0);continue}else ye={lane:0,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},j===null?(N=j=ye,E=m):j=j.next=ye,pt.lanes|=re,za|=re;ye=ne.action,yr&&s(m,ye),m=ne.hasEagerState?ne.eagerState:s(m,ye)}else re={lane:ye,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},j===null?(N=j=re,E=m):j=j.next=re,pt.lanes|=ye,za|=ye;ne=ne.next}while(ne!==null&&ne!==i);if(j===null?E=m:j.next=N,!qn(m,t.memoizedState)&&(Sn=!0,pe&&(s=Jr,s!==null)))throw s;t.memoizedState=m,t.baseState=E,t.baseQueue=j,l.lastRenderedState=m}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Cd(t){var i=dn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,m=i.memoizedState;if(u!==null){s.pending=null;var E=u=u.next;do m=t(m,E.action),E=E.next;while(E!==u);qn(m,i.memoizedState)||(Sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Vm(t,i,s){var l=pt,u=dn(),m=Rt;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=i();var E=!qn((zt||u).memoizedState,s);E&&(u.memoizedState=s,Sn=!0),u=u.queue;var N=qm.bind(null,l,u,t);if(yo(2048,8,N,[t]),u.getSnapshot!==i||E||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,is(9,ql(),Wm.bind(null,l,u,s,i),null),Xt===null)throw Error(r(349));m||(Da&124)!==0||Xm(l,i,s)}return s}function Xm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=pt.updateQueue,i===null?(i=Ad(),pt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Wm(t,i,s,l){i.value=s,i.getSnapshot=l,Ym(i)&&Km(t)}function qm(t,i,s){return s(function(){Ym(i)&&Km(t)})}function Ym(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!qn(t,s)}catch{return!0}}function Km(t){var i=Yr(t,2);i!==null&&Jn(i,t,2)}function Dd(t){var i=jn();if(typeof t=="function"){var s=t;if(t=s(),yr){de(!0);try{s()}finally{de(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},i}function Zm(t,i,s,l){return t.baseState=s,Rd(t,zt,typeof l=="function"?l:Zi)}function gy(t,i,s,l,u){if(Kl(t))throw Error(r(485));if(t=i.action,t!==null){var m={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};B.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,$m(i,m)):(m.next=s.next,i.pending=s.next=m)}}function $m(t,i){var s=i.action,l=i.payload,u=t.state;if(i.isTransition){var m=B.T,E={};B.T=E;try{var N=s(u,l),j=B.S;j!==null&&j(E,N),Qm(t,i,N)}catch(ne){Ld(t,i,ne)}finally{B.T=m}}else try{m=s(u,l),Qm(t,i,m)}catch(ne){Ld(t,i,ne)}}function Qm(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Jm(t,i,l)},function(l){return Ld(t,i,l)}):Jm(t,i,s)}function Jm(t,i,s){i.status="fulfilled",i.value=s,e0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,$m(t,s)))}function Ld(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,e0(i),i=i.next;while(i!==l)}t.action=null}function e0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function t0(t,i){return i}function n0(t,i){if(Rt){var s=Xt.formState;if(s!==null){e:{var l=pt;if(Rt){if(Qt){t:{for(var u=Qt,m=Ui;u.nodeType!==8;){if(!m){u=null;break t}if(u=Si(u.nextSibling),u===null){u=null;break t}}m=u.data,u=m==="F!"||m==="F"?u:null}if(u){Qt=Si(u.nextSibling),l=u.data==="F!";break e}}xr(l)}l=!1}l&&(i=s[0])}}return s=jn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t0,lastRenderedState:i},s.queue=l,s=y0.bind(null,pt,l),l.dispatch=s,l=Dd(!1),m=Pd.bind(null,pt,!1,l.queue),l=jn(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,s=gy.bind(null,pt,u,m,s),u.dispatch=s,l.memoizedState=t,[i,s,!1]}function i0(t){var i=dn();return a0(i,zt,t)}function a0(t,i,s){if(i=Rd(t,i,t0)[0],t=Wl(Zi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=bo(i)}catch(E){throw E===po?kl:E}else l=i;i=dn();var u=i.queue,m=u.dispatch;return s!==i.memoizedState&&(pt.flags|=2048,is(9,ql(),xy.bind(null,u,s),null)),[l,m,t]}function xy(t,i){t.action=i}function r0(t){var i=dn(),s=zt;if(s!==null)return a0(i,s,t);dn(),i=i.memoizedState,s=dn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function is(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=pt.updateQueue,i===null&&(i=Ad(),pt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function ql(){return{destroy:void 0,resource:void 0}}function s0(){return dn().memoizedState}function Yl(t,i,s,l){var u=jn();l=l===void 0?null:l,pt.flags|=t,u.memoizedState=is(1|i,ql(),s,l)}function yo(t,i,s,l){var u=dn();l=l===void 0?null:l;var m=u.memoizedState.inst;zt!==null&&l!==null&&yd(l,zt.memoizedState.deps)?u.memoizedState=is(i,m,s,l):(pt.flags|=t,u.memoizedState=is(1|i,m,s,l))}function o0(t,i){Yl(8390656,8,t,i)}function l0(t,i){yo(2048,8,t,i)}function c0(t,i){return yo(4,2,t,i)}function u0(t,i){return yo(4,4,t,i)}function d0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function f0(t,i,s){s=s!=null?s.concat([t]):null,yo(4,4,d0.bind(null,i,t),s)}function Nd(){}function h0(t,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&yd(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function p0(t,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&yd(i,l[1]))return l[0];if(l=t(),yr){de(!0);try{t()}finally{de(!1)}}return s.memoizedState=[l,i],l}function Ud(t,i,s){return s===void 0||(Da&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=xg(),pt.lanes|=t,za|=t,s)}function m0(t,i,s,l){return qn(s,i)?s:es.current!==null?(t=Ud(t,s,l),qn(t,i)||(Sn=!0),t):(Da&42)===0?(Sn=!0,t.memoizedState=s):(t=xg(),pt.lanes|=t,za|=t,i)}function g0(t,i,s,l,u){var m=Y.p;Y.p=m!==0&&8>m?m:8;var E=B.T,N={};B.T=N,Pd(t,!1,i,s);try{var j=u(),ne=B.S;if(ne!==null&&ne(N,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var pe=hy(j,l);So(t,i,pe,Qn(t))}else So(t,i,l,Qn(t))}catch(ye){So(t,i,{then:function(){},status:"rejected",reason:ye},Qn())}finally{Y.p=m,B.T=E}}function _y(){}function Od(t,i,s,l){if(t.tag!==5)throw Error(r(476));var u=x0(t).queue;g0(t,u,i,K,s===null?_y:function(){return _0(t),s(l)})}function x0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:K},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function _0(t){var i=x0(t).next.queue;So(t,i,{},Qn())}function Fd(){return Ln(ko)}function v0(){return dn().memoizedState}function b0(){return dn().memoizedState}function vy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Qn();t=Ra(s);var l=Ca(i,t,s);l!==null&&(Jn(l,i,s),go(l,i,s)),i={cache:dd()},t.payload=i;return}i=i.return}}function by(t,i,s){var l=Qn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Kl(t)?S0(i,s):(s=td(t,i,s,l),s!==null&&(Jn(s,t,l),M0(s,i,l)))}function y0(t,i,s){var l=Qn();So(t,i,s,l)}function So(t,i,s,l){var u={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Kl(t))S0(i,u);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,N=m(E,s);if(u.hasEagerState=!0,u.eagerState=N,qn(N,E))return Nl(t,i,u,0),Xt===null&&Ll(),!1}catch{}finally{}if(s=td(t,i,u,l),s!==null)return Jn(s,t,l),M0(s,i,l),!0}return!1}function Pd(t,i,s,l){if(l={lane:2,revertLane:mf(),action:l,hasEagerState:!1,eagerState:null,next:null},Kl(t)){if(i)throw Error(r(479))}else i=td(t,s,l,2),i!==null&&Jn(i,t,2)}function Kl(t){var i=t.alternate;return t===pt||i!==null&&i===pt}function S0(t,i){ts=Gl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function M0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ke(t,s)}}var Zl={readContext:Ln,use:Xl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},E0={readContext:Ln,use:Xl,useCallback:function(t,i){return jn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:o0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Yl(4194308,4,d0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Yl(4194308,4,t,i)},useInsertionEffect:function(t,i){Yl(4,2,t,i)},useMemo:function(t,i){var s=jn();i=i===void 0?null:i;var l=t();if(yr){de(!0);try{t()}finally{de(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=jn();if(s!==void 0){var u=s(i);if(yr){de(!0);try{s(i)}finally{de(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=by.bind(null,pt,t),[l.memoizedState,t]},useRef:function(t){var i=jn();return t={current:t},i.memoizedState=t},useState:function(t){t=Dd(t);var i=t.queue,s=y0.bind(null,pt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Nd,useDeferredValue:function(t,i){var s=jn();return Ud(s,t,i)},useTransition:function(){var t=Dd(!1);return t=g0.bind(null,pt,t.queue,!0,!1),jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=pt,u=jn();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Xt===null)throw Error(r(349));(Mt&124)!==0||Xm(l,i,s)}u.memoizedState=s;var m={value:s,getSnapshot:i};return u.queue=m,o0(qm.bind(null,l,m,t),[t]),l.flags|=2048,is(9,ql(),Wm.bind(null,l,m,s,i),null),s},useId:function(){var t=jn(),i=Xt.identifierPrefix;if(Rt){var s=qi,l=Wi;s=(l&~(1<<32-Pe(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Vl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=py++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Fd,useFormState:n0,useActionState:n0,useOptimistic:function(t){var i=jn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Pd.bind(null,pt,!0,s),s.dispatch=i,[t,i]},useMemoCache:wd,useCacheRefresh:function(){return jn().memoizedState=vy.bind(null,pt)}},T0={readContext:Ln,use:Xl,useCallback:h0,useContext:Ln,useEffect:l0,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Wl,useRef:s0,useState:function(){return Wl(Zi)},useDebugValue:Nd,useDeferredValue:function(t,i){var s=dn();return m0(s,zt.memoizedState,t,i)},useTransition:function(){var t=Wl(Zi)[0],i=dn().memoizedState;return[typeof t=="boolean"?t:bo(t),i]},useSyncExternalStore:Vm,useId:v0,useHostTransitionStatus:Fd,useFormState:i0,useActionState:i0,useOptimistic:function(t,i){var s=dn();return Zm(s,zt,t,i)},useMemoCache:wd,useCacheRefresh:b0},yy={readContext:Ln,use:Xl,useCallback:h0,useContext:Ln,useEffect:l0,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Cd,useRef:s0,useState:function(){return Cd(Zi)},useDebugValue:Nd,useDeferredValue:function(t,i){var s=dn();return zt===null?Ud(s,t,i):m0(s,zt.memoizedState,t,i)},useTransition:function(){var t=Cd(Zi)[0],i=dn().memoizedState;return[typeof t=="boolean"?t:bo(t),i]},useSyncExternalStore:Vm,useId:v0,useHostTransitionStatus:Fd,useFormState:r0,useActionState:r0,useOptimistic:function(t,i){var s=dn();return zt!==null?Zm(s,zt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:wd,useCacheRefresh:b0},as=null,Mo=0;function $l(t){var i=Mo;return Mo+=1,as===null&&(as=[]),Pm(as,t,i)}function Eo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Ql(t,i){throw i.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function A0(t){var i=t._init;return i(t._payload)}function w0(t){function i(Z,W){if(t){var te=Z.deletions;te===null?(Z.deletions=[W],Z.flags|=16):te.push(W)}}function s(Z,W){if(!t)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function l(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function u(Z,W){return Z=Xi(Z,W),Z.index=0,Z.sibling=null,Z}function m(Z,W,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<W?(Z.flags|=67108866,W):te):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function N(Z,W,te,ge){return W===null||W.tag!==6?(W=id(te,Z.mode,ge),W.return=Z,W):(W=u(W,te),W.return=Z,W)}function j(Z,W,te,ge){var je=te.type;return je===M?pe(Z,W,te.props.children,ge,te.key):W!==null&&(W.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===H&&A0(je)===W.type)?(W=u(W,te.props),Eo(W,te),W.return=Z,W):(W=Ol(te.type,te.key,te.props,null,Z.mode,ge),Eo(W,te),W.return=Z,W)}function ne(Z,W,te,ge){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=ad(te,Z.mode,ge),W.return=Z,W):(W=u(W,te.children||[]),W.return=Z,W)}function pe(Z,W,te,ge,je){return W===null||W.tag!==7?(W=hr(te,Z.mode,ge,je),W.return=Z,W):(W=u(W,te),W.return=Z,W)}function ye(Z,W,te){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=id(""+W,Z.mode,te),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case _:return te=Ol(W.type,W.key,W.props,null,Z.mode,te),Eo(te,W),te.return=Z,te;case b:return W=ad(W,Z.mode,te),W.return=Z,W;case H:var ge=W._init;return W=ge(W._payload),ye(Z,W,te)}if(J(W)||ee(W))return W=hr(W,Z.mode,te,null),W.return=Z,W;if(typeof W.then=="function")return ye(Z,$l(W),te);if(W.$$typeof===w)return ye(Z,Il(Z,W),te);Ql(Z,W)}return null}function re(Z,W,te,ge){var je=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return je!==null?null:N(Z,W,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case _:return te.key===je?j(Z,W,te,ge):null;case b:return te.key===je?ne(Z,W,te,ge):null;case H:return je=te._init,te=je(te._payload),re(Z,W,te,ge)}if(J(te)||ee(te))return je!==null?null:pe(Z,W,te,ge,null);if(typeof te.then=="function")return re(Z,W,$l(te),ge);if(te.$$typeof===w)return re(Z,W,Il(Z,te),ge);Ql(Z,te)}return null}function se(Z,W,te,ge,je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get(te)||null,N(W,Z,""+ge,je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case _:return Z=Z.get(ge.key===null?te:ge.key)||null,j(W,Z,ge,je);case b:return Z=Z.get(ge.key===null?te:ge.key)||null,ne(W,Z,ge,je);case H:var xt=ge._init;return ge=xt(ge._payload),se(Z,W,te,ge,je)}if(J(ge)||ee(ge))return Z=Z.get(te)||null,pe(W,Z,ge,je,null);if(typeof ge.then=="function")return se(Z,W,te,$l(ge),je);if(ge.$$typeof===w)return se(Z,W,te,Il(W,ge),je);Ql(W,ge)}return null}function rt(Z,W,te,ge){for(var je=null,xt=null,qe=W,nt=W=0,En=null;qe!==null&&nt<te.length;nt++){qe.index>nt?(En=qe,qe=null):En=qe.sibling;var Et=re(Z,qe,te[nt],ge);if(Et===null){qe===null&&(qe=En);break}t&&qe&&Et.alternate===null&&i(Z,qe),W=m(Et,W,nt),xt===null?je=Et:xt.sibling=Et,xt=Et,qe=En}if(nt===te.length)return s(Z,qe),Rt&&mr(Z,nt),je;if(qe===null){for(;nt<te.length;nt++)qe=ye(Z,te[nt],ge),qe!==null&&(W=m(qe,W,nt),xt===null?je=qe:xt.sibling=qe,xt=qe);return Rt&&mr(Z,nt),je}for(qe=l(qe);nt<te.length;nt++)En=se(qe,Z,nt,te[nt],ge),En!==null&&(t&&En.alternate!==null&&qe.delete(En.key===null?nt:En.key),W=m(En,W,nt),xt===null?je=En:xt.sibling=En,xt=En);return t&&qe.forEach(function(Wa){return i(Z,Wa)}),Rt&&mr(Z,nt),je}function tt(Z,W,te,ge){if(te==null)throw Error(r(151));for(var je=null,xt=null,qe=W,nt=W=0,En=null,Et=te.next();qe!==null&&!Et.done;nt++,Et=te.next()){qe.index>nt?(En=qe,qe=null):En=qe.sibling;var Wa=re(Z,qe,Et.value,ge);if(Wa===null){qe===null&&(qe=En);break}t&&qe&&Wa.alternate===null&&i(Z,qe),W=m(Wa,W,nt),xt===null?je=Wa:xt.sibling=Wa,xt=Wa,qe=En}if(Et.done)return s(Z,qe),Rt&&mr(Z,nt),je;if(qe===null){for(;!Et.done;nt++,Et=te.next())Et=ye(Z,Et.value,ge),Et!==null&&(W=m(Et,W,nt),xt===null?je=Et:xt.sibling=Et,xt=Et);return Rt&&mr(Z,nt),je}for(qe=l(qe);!Et.done;nt++,Et=te.next())Et=se(qe,Z,nt,Et.value,ge),Et!==null&&(t&&Et.alternate!==null&&qe.delete(Et.key===null?nt:Et.key),W=m(Et,W,nt),xt===null?je=Et:xt.sibling=Et,xt=Et);return t&&qe.forEach(function(SS){return i(Z,SS)}),Rt&&mr(Z,nt),je}function Bt(Z,W,te,ge){if(typeof te=="object"&&te!==null&&te.type===M&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case _:e:{for(var je=te.key;W!==null;){if(W.key===je){if(je=te.type,je===M){if(W.tag===7){s(Z,W.sibling),ge=u(W,te.props.children),ge.return=Z,Z=ge;break e}}else if(W.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===H&&A0(je)===W.type){s(Z,W.sibling),ge=u(W,te.props),Eo(ge,te),ge.return=Z,Z=ge;break e}s(Z,W);break}else i(Z,W);W=W.sibling}te.type===M?(ge=hr(te.props.children,Z.mode,ge,te.key),ge.return=Z,Z=ge):(ge=Ol(te.type,te.key,te.props,null,Z.mode,ge),Eo(ge,te),ge.return=Z,Z=ge)}return E(Z);case b:e:{for(je=te.key;W!==null;){if(W.key===je)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){s(Z,W.sibling),ge=u(W,te.children||[]),ge.return=Z,Z=ge;break e}else{s(Z,W);break}else i(Z,W);W=W.sibling}ge=ad(te,Z.mode,ge),ge.return=Z,Z=ge}return E(Z);case H:return je=te._init,te=je(te._payload),Bt(Z,W,te,ge)}if(J(te))return rt(Z,W,te,ge);if(ee(te)){if(je=ee(te),typeof je!="function")throw Error(r(150));return te=je.call(te),tt(Z,W,te,ge)}if(typeof te.then=="function")return Bt(Z,W,$l(te),ge);if(te.$$typeof===w)return Bt(Z,W,Il(Z,te),ge);Ql(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,W!==null&&W.tag===6?(s(Z,W.sibling),ge=u(W,te),ge.return=Z,Z=ge):(s(Z,W),ge=id(te,Z.mode,ge),ge.return=Z,Z=ge),E(Z)):s(Z,W)}return function(Z,W,te,ge){try{Mo=0;var je=Bt(Z,W,te,ge);return as=null,je}catch(qe){if(qe===po||qe===kl)throw qe;var xt=Yn(29,qe,null,Z.mode);return xt.lanes=ge,xt.return=Z,xt}finally{}}}var rs=w0(!0),R0=w0(!1),ui=q(null),Oi=null;function La(t){var i=t.alternate;xe(xn,xn.current&1),xe(ui,t),Oi===null&&(i===null||es.current!==null||i.memoizedState!==null)&&(Oi=t)}function C0(t){if(t.tag===22){if(xe(xn,xn.current),xe(ui,t),Oi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Oi=t)}}else Na()}function Na(){xe(xn,xn.current),xe(ui,ui.current)}function $i(t){fe(ui),Oi===t&&(Oi=null),fe(xn)}var xn=q(0);function Jl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||wf(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function zd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Id={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Qn(),u=Ra(l);u.payload=i,s!=null&&(u.callback=s),i=Ca(t,u,l),i!==null&&(Jn(i,t,l),go(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Qn(),u=Ra(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Ca(t,u,l),i!==null&&(Jn(i,t,l),go(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Qn(),l=Ra(s);l.tag=2,i!=null&&(l.callback=i),i=Ca(t,l,s),i!==null&&(Jn(i,t,s),go(i,t,s))}};function D0(t,i,s,l,u,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!ro(s,l)||!ro(u,m):!0}function L0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Id.enqueueReplaceState(i,i.state,null)}function Sr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}var ec=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function N0(t){ec(t)}function U0(t){console.error(t)}function O0(t){ec(t)}function tc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function F0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Bd(t,i,s){return s=Ra(s),s.tag=3,s.payload={element:null},s.callback=function(){tc(t,i)},s}function P0(t){return t=Ra(t),t.tag=3,t}function z0(t,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var m=l.value;t.payload=function(){return u(m)},t.callback=function(){F0(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){F0(i,s,l),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var N=l.stack;this.componentDidCatch(l.value,{componentStack:N!==null?N:""})})}function Sy(t,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&uo(i,s,u,!0),s=ui.current,s!==null){switch(s.tag){case 13:return Oi===null?uf():s.alternate===null&&Jt===0&&(Jt=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===pd?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),ff(t,l,u)),!1;case 22:return s.flags|=65536,l===pd?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),ff(t,l,u)),!1}throw Error(r(435,s.tag))}return ff(t,l,u),uf(),!1}if(Rt)return i=ui.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==od&&(t=Error(r(422),{cause:l}),co(si(t,s)))):(l!==od&&(i=Error(r(423),{cause:l}),co(si(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=si(l,s),u=Bd(t.stateNode,l,u),xd(t,u),Jt!==4&&(Jt=2)),!1;var m=Error(r(520),{cause:l});if(m=si(m,s),Lo===null?Lo=[m]:Lo.push(m),Jt!==4&&(Jt=2),i===null)return!0;l=si(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=Bd(s.stateNode,l,t),xd(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ia===null||!Ia.has(m))))return s.flags|=65536,u&=-u,s.lanes|=u,u=P0(u),z0(u,t,s,l),xd(s,u),!1}s=s.return}while(s!==null);return!1}var I0=Error(r(461)),Sn=!1;function Rn(t,i,s,l){i.child=t===null?R0(i,null,s,l):rs(i,t.child,s,l)}function B0(t,i,s,l,u){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var N in l)N!=="ref"&&(E[N]=l[N])}else E=l;return vr(i),l=Sd(t,i,s,E,m,u),N=Md(),t!==null&&!Sn?(Ed(t,i,u),Qi(t,i,u)):(Rt&&N&&rd(i),i.flags|=1,Rn(t,i,l,u),i.child)}function k0(t,i,s,l,u){if(t===null){var m=s.type;return typeof m=="function"&&!nd(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,j0(t,i,m,l,u)):(t=Ol(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!qd(t,u)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:ro,s(E,l)&&t.ref===i.ref)return Qi(t,i,u)}return i.flags|=1,t=Xi(m,l),t.ref=i.ref,t.return=i,i.child=t}function j0(t,i,s,l,u){if(t!==null){var m=t.memoizedProps;if(ro(m,l)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=l=m,qd(t,u))(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,Qi(t,i,u)}return kd(t,i,s,l,u)}function H0(t,i,s){var l=i.pendingProps,u=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(u=i.child=t.child,m=0;u!==null;)m=m|u.lanes|u.childLanes,u=u.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return G0(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bl(i,m!==null?m.cachePool:null),m!==null?jm(i,m):vd(),C0(i);else return i.lanes=i.childLanes=536870912,G0(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Bl(i,m.cachePool),jm(i,m),Na(),i.memoizedState=null):(t!==null&&Bl(i,null),vd(),Na());return Rn(t,i,u,s),i.child}function G0(t,i,s,l){var u=hd();return u=u===null?null:{parent:gn._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},t!==null&&Bl(i,null),vd(),C0(i),t!==null&&uo(t,i,l,!0),null}function nc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function kd(t,i,s,l,u){return vr(i),s=Sd(t,i,s,l,void 0,u),l=Md(),t!==null&&!Sn?(Ed(t,i,u),Qi(t,i,u)):(Rt&&l&&rd(i),i.flags|=1,Rn(t,i,s,u),i.child)}function V0(t,i,s,l,u,m){return vr(i),i.updateQueue=null,s=Gm(i,l,s,u),Hm(t),l=Md(),t!==null&&!Sn?(Ed(t,i,m),Qi(t,i,m)):(Rt&&l&&rd(i),i.flags|=1,Rn(t,i,s,m),i.child)}function X0(t,i,s,l,u){if(vr(i),i.stateNode===null){var m=Kr,E=s.contextType;typeof E=="object"&&E!==null&&(m=Ln(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Id,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},md(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Ln(E):Kr,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(zd(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Id.enqueueReplaceState(m,m.state,null),_o(i,l,m,u),xo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var N=i.memoizedProps,j=Sr(s,N);m.props=j;var ne=m.context,pe=s.contextType;E=Kr,typeof pe=="object"&&pe!==null&&(E=Ln(pe));var ye=s.getDerivedStateFromProps;pe=typeof ye=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=i.pendingProps!==N,pe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||ne!==E)&&L0(i,m,l,E),wa=!1;var re=i.memoizedState;m.state=re,_o(i,l,m,u),xo(),ne=i.memoizedState,N||re!==ne||wa?(typeof ye=="function"&&(zd(i,s,ye,l),ne=i.memoizedState),(j=wa||D0(i,s,j,l,re,ne,E))?(pe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ne),m.props=l,m.state=ne,m.context=E,l=j):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,gd(t,i),E=i.memoizedProps,pe=Sr(s,E),m.props=pe,ye=i.pendingProps,re=m.context,ne=s.contextType,j=Kr,typeof ne=="object"&&ne!==null&&(j=Ln(ne)),N=s.getDerivedStateFromProps,(ne=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==ye||re!==j)&&L0(i,m,l,j),wa=!1,re=i.memoizedState,m.state=re,_o(i,l,m,u),xo();var se=i.memoizedState;E!==ye||re!==se||wa||t!==null&&t.dependencies!==null&&zl(t.dependencies)?(typeof N=="function"&&(zd(i,s,N,l),se=i.memoizedState),(pe=wa||D0(i,s,pe,l,re,se,j)||t!==null&&t.dependencies!==null&&zl(t.dependencies))?(ne||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,se,j),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,se,j)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=se),m.props=l,m.state=se,m.context=j,l=pe):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,nc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=rs(i,t.child,null,u),i.child=rs(i,null,s,u)):Rn(t,i,s,u),i.memoizedState=m.state,t=i.child):t=Qi(t,i,u),t}function W0(t,i,s,l){return lo(),i.flags|=256,Rn(t,i,s,l),i.child}var jd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hd(t){return{baseLanes:t,cachePool:Um()}}function Gd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=di),t}function q0(t,i,s){var l=i.pendingProps,u=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),E&&(u=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Rt){if(u?La(i):Na(),Rt){var N=Qt,j;if(j=N){e:{for(j=N,N=Ui;j.nodeType!==8;){if(!N){N=null;break e}if(j=Si(j.nextSibling),j===null){N=null;break e}}N=j}N!==null?(i.memoizedState={dehydrated:N,treeContext:pr!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},j=Yn(18,null,null,0),j.stateNode=N,j.return=i,i.child=j,zn=i,Qt=null,j=!0):j=!1}j||xr(i)}if(N=i.memoizedState,N!==null&&(N=N.dehydrated,N!==null))return wf(N)?i.lanes=32:i.lanes=536870912,null;$i(i)}return N=l.children,l=l.fallback,u?(Na(),u=i.mode,N=ic({mode:"hidden",children:N},u),l=hr(l,u,s,null),N.return=i,l.return=i,N.sibling=l,i.child=N,u=i.child,u.memoizedState=Hd(s),u.childLanes=Gd(t,E,s),i.memoizedState=jd,l):(La(i),Vd(i,N))}if(j=t.memoizedState,j!==null&&(N=j.dehydrated,N!==null)){if(m)i.flags&256?(La(i),i.flags&=-257,i=Xd(t,i,s)):i.memoizedState!==null?(Na(),i.child=t.child,i.flags|=128,i=null):(Na(),u=l.fallback,N=i.mode,l=ic({mode:"visible",children:l.children},N),u=hr(u,N,s,null),u.flags|=2,l.return=i,u.return=i,l.sibling=u,i.child=l,rs(i,t.child,null,s),l=i.child,l.memoizedState=Hd(s),l.childLanes=Gd(t,E,s),i.memoizedState=jd,i=u);else if(La(i),wf(N)){if(E=N.nextSibling&&N.nextSibling.dataset,E)var ne=E.dgst;E=ne,l=Error(r(419)),l.stack="",l.digest=E,co({value:l,source:null,stack:null}),i=Xd(t,i,s)}else if(Sn||uo(t,i,s,!1),E=(s&t.childLanes)!==0,Sn||E){if(E=Xt,E!==null&&(l=s&-s,l=(l&42)!==0?1:at(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==j.retryLane))throw j.retryLane=l,Yr(t,l),Jn(E,t,l),I0;N.data==="$?"||uf(),i=Xd(t,i,s)}else N.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=j.treeContext,Qt=Si(N.nextSibling),zn=i,Rt=!0,gr=null,Ui=!1,t!==null&&(li[ci++]=Wi,li[ci++]=qi,li[ci++]=pr,Wi=t.id,qi=t.overflow,pr=i),i=Vd(i,l.children),i.flags|=4096);return i}return u?(Na(),u=l.fallback,N=i.mode,j=t.child,ne=j.sibling,l=Xi(j,{mode:"hidden",children:l.children}),l.subtreeFlags=j.subtreeFlags&65011712,ne!==null?u=Xi(ne,u):(u=hr(u,N,s,null),u.flags|=2),u.return=i,l.return=i,l.sibling=u,i.child=l,l=u,u=i.child,N=t.child.memoizedState,N===null?N=Hd(s):(j=N.cachePool,j!==null?(ne=gn._currentValue,j=j.parent!==ne?{parent:ne,pool:ne}:j):j=Um(),N={baseLanes:N.baseLanes|s,cachePool:j}),u.memoizedState=N,u.childLanes=Gd(t,E,s),i.memoizedState=jd,l):(La(i),s=t.child,t=s.sibling,s=Xi(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=s,i.memoizedState=null,s)}function Vd(t,i){return i=ic({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function ic(t,i){return t=Yn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Xd(t,i,s){return rs(i,t.child,null,s),t=Vd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Y0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),cd(t.return,i,s)}function Wd(t,i,s,l,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=u)}function K0(t,i,s){var l=i.pendingProps,u=l.revealOrder,m=l.tail;if(Rn(t,i,l.children,s),l=xn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Y0(t,s,i);else if(t.tag===19)Y0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(xe(xn,l),u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&Jl(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Wd(i,!1,u,s,m);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Jl(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}Wd(i,!0,s,null,m);break;case"together":Wd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),za|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(uo(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=Xi(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Xi(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function qd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&zl(t)))}function My(t,i,s){switch(i.tag){case 3:Te(i,i.stateNode.containerInfo),Aa(i,gn,t.memoizedState.cache),lo();break;case 27:case 5:Ve(i);break;case 4:Te(i,i.stateNode.containerInfo);break;case 10:Aa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(La(i),i.flags|=128,null):(s&i.child.childLanes)!==0?q0(t,i,s):(La(i),t=Qi(t,i,s),t!==null?t.sibling:null);La(i);break;case 19:var u=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(uo(t,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return K0(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(xn,xn.current),l)break;return null;case 22:case 23:return i.lanes=0,H0(t,i,s);case 24:Aa(i,gn,t.memoizedState.cache)}return Qi(t,i,s)}function Z0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Sn=!0;else{if(!qd(t,s)&&(i.flags&128)===0)return Sn=!1,My(t,i,s);Sn=(t.flags&131072)!==0}else Sn=!1,Rt&&(i.flags&1048576)!==0&&Am(i,Pl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,u=l._init;if(l=u(l._payload),i.type=l,typeof l=="function")nd(l)?(t=Sr(l,t),i.tag=1,i=X0(null,i,l,t,s)):(i.tag=0,i=kd(null,i,l,t,s));else{if(l!=null){if(u=l.$$typeof,u===R){i.tag=11,i=B0(null,i,l,t,s);break e}else if(u===I){i.tag=14,i=k0(null,i,l,t,s);break e}}throw i=he(l)||l,Error(r(306,i,""))}}return i;case 0:return kd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Sr(l,i.pendingProps),X0(t,i,l,u,s);case 3:e:{if(Te(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var m=i.memoizedState;u=m.element,gd(t,i),_o(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Aa(i,gn,l),l!==m.cache&&ud(i,[gn],s,!0),xo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=W0(t,i,l,s);break e}else if(l!==u){u=si(Error(r(424)),i),co(u),i=W0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=Si(t.firstChild),zn=i,Rt=!0,gr=null,Ui=!0,s=R0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(lo(),l===u){i=Qi(t,i,s);break e}Rn(t,i,l,s)}i=i.child}return i;case 26:return nc(t,i),t===null?(s=ex(i.type,null,i.pendingProps,null))?i.memoizedState=s:Rt||(s=i.type,t=i.pendingProps,l=xc(ae.current).createElement(s),l[bn]=i,l[An]=t,Dn(l,s,t),cn(l),i.stateNode=l):i.memoizedState=ex(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ve(i),t===null&&Rt&&(l=i.stateNode=$g(i.type,i.pendingProps,ae.current),zn=i,Ui=!0,u=Qt,ja(i.type)?(Rf=u,Qt=Si(l.firstChild)):Qt=u),Rn(t,i,i.pendingProps.children,s),nc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Rt&&((u=l=Qt)&&(l=$y(l,i.type,i.pendingProps,Ui),l!==null?(i.stateNode=l,zn=i,Qt=Si(l.firstChild),Ui=!1,u=!0):u=!1),u||xr(i)),Ve(i),u=i.type,m=i.pendingProps,E=t!==null?t.memoizedProps:null,l=m.children,Ef(u,m)?l=null:E!==null&&Ef(u,E)&&(i.flags|=32),i.memoizedState!==null&&(u=Sd(t,i,my,null,null,s),ko._currentValue=u),nc(t,i),Rn(t,i,l,s),i.child;case 6:return t===null&&Rt&&((t=s=Qt)&&(s=Qy(s,i.pendingProps,Ui),s!==null?(i.stateNode=s,zn=i,Qt=null,t=!0):t=!1),t||xr(i)),null;case 13:return q0(t,i,s);case 4:return Te(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=rs(i,null,l,s):Rn(t,i,l,s),i.child;case 11:return B0(t,i,i.type,i.pendingProps,s);case 7:return Rn(t,i,i.pendingProps,s),i.child;case 8:return Rn(t,i,i.pendingProps.children,s),i.child;case 12:return Rn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Aa(i,i.type,l.value),Rn(t,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,vr(i),u=Ln(u),l=l(u),i.flags|=1,Rn(t,i,l,s),i.child;case 14:return k0(t,i,i.type,i.pendingProps,s);case 15:return j0(t,i,i.type,i.pendingProps,s);case 19:return K0(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=ic(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Xi(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return H0(t,i,s);case 24:return vr(i),l=Ln(gn),t===null?(u=hd(),u===null&&(u=Xt,m=dd(),u.pooledCache=m,m.refCount++,m!==null&&(u.pooledCacheLanes|=s),u=m),i.memoizedState={parent:l,cache:u},md(i),Aa(i,gn,u)):((t.lanes&s)!==0&&(gd(t,i),_o(i,null,null,s),xo()),u=t.memoizedState,m=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Aa(i,gn,l)):(l=m.cache,Aa(i,gn,l),l!==u.cache&&ud(i,[gn],s,!0))),Rn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Ji(t){t.flags|=4}function $0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!rx(i)){if(i=ui.current,i!==null&&((Mt&4194048)===Mt?Oi!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||i!==Oi))throw mo=pd,Om;t.flags|=8192}}function ac(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ne():536870912,t.lanes|=i,cs|=i)}function To(t,i){if(!Rt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Zt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Ey(t,i,s){var l=i.pendingProps;switch(sd(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(i),null;case 1:return Zt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ki(gn),Je(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(oo(i)?Ji(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Cm())),Zt(i),null;case 26:return s=i.memoizedState,t===null?(Ji(i),s!==null?(Zt(i),$0(i,s)):(Zt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(Ji(i),Zt(i),$0(i,s)):(Zt(i),i.flags&=-16777217):(t.memoizedProps!==l&&Ji(i),Zt(i),i.flags&=-16777217),null;case 27:ct(i),s=ae.current;var u=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Zt(i),null}t=Ce.current,oo(i)?wm(i):(t=$g(u,l,s),i.stateNode=t,Ji(i))}return Zt(i),null;case 5:if(ct(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Zt(i),null}if(t=Ce.current,oo(i))wm(i);else{switch(u=xc(ae.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?u.createElement(s,{is:l.is}):u.createElement(s)}}t[bn]=i,t[An]=l;e:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break e;for(;u.sibling===null;){if(u.return===null||u.return===i)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=t;e:switch(Dn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ji(i)}}return Zt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=ae.current,oo(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,u=zn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[bn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Vg(t.nodeValue,s)),t||xr(i)}else t=xc(t).createTextNode(l),t[bn]=i,i.stateNode=t}return Zt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=oo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[bn]=i}else lo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zt(i),u=!1}else u=Cm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?($i(i),i):($i(i),null)}if($i(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==u&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),ac(i,i.updateQueue),Zt(i),null;case 4:return Je(),t===null&&vf(i.stateNode.containerInfo),Zt(i),null;case 10:return Ki(i.type),Zt(i),null;case 19:if(fe(xn),u=i.memoizedState,u===null)return Zt(i),null;if(l=(i.flags&128)!==0,m=u.rendering,m===null)if(l)To(u,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Jl(t),m!==null){for(i.flags|=128,To(u,!1),t=m.updateQueue,i.updateQueue=t,ac(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Tm(s,t),s=s.sibling;return xe(xn,xn.current&1|2),i.child}t=t.sibling}u.tail!==null&&st()>oc&&(i.flags|=128,l=!0,To(u,!1),i.lanes=4194304)}else{if(!l)if(t=Jl(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,ac(i,t),To(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Rt)return Zt(i),null}else 2*st()-u.renderingStartTime>oc&&s!==536870912&&(i.flags|=128,l=!0,To(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(t=u.last,t!==null?t.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=st(),i.sibling=null,t=xn.current,xe(xn,l?t&1|2:t&1),i):(Zt(i),null);case 22:case 23:return $i(i),bd(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Zt(i),i.subtreeFlags&6&&(i.flags|=8192)):Zt(i),s=i.updateQueue,s!==null&&ac(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&fe(br),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ki(gn),Zt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Ty(t,i){switch(sd(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ki(gn),Je(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ct(i),null;case 13:if($i(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));lo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return fe(xn),null;case 4:return Je(),null;case 10:return Ki(i.type),null;case 22:case 23:return $i(i),bd(),t!==null&&fe(br),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ki(gn),null;case 25:return null;default:return null}}function Q0(t,i){switch(sd(i),i.tag){case 3:Ki(gn),Je();break;case 26:case 27:case 5:ct(i);break;case 4:Je();break;case 13:$i(i);break;case 19:fe(xn);break;case 10:Ki(i.type);break;case 22:case 23:$i(i),bd(),t!==null&&fe(br);break;case 24:Ki(gn)}}function Ao(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==u)}}catch(N){Ht(i,i.return,N)}}function Ua(t,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var m=u.next;l=m;do{if((l.tag&t)===t){var E=l.inst,N=E.destroy;if(N!==void 0){E.destroy=void 0,u=i;var j=s,ne=N;try{ne()}catch(pe){Ht(u,j,pe)}}}l=l.next}while(l!==m)}}catch(pe){Ht(i,i.return,pe)}}function J0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{km(i,s)}catch(l){Ht(t,t.return,l)}}}function eg(t,i,s){s.props=Sr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Ht(t,i,l)}}function wo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(u){Ht(t,i,u)}}function Fi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Ht(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Ht(t,i,u)}else s.current=null}function tg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Ht(t,t.return,u)}}function Yd(t,i,s){try{var l=t.stateNode;Wy(l,t.type,s,i),l[An]=i}catch(u){Ht(t,t.return,u)}}function ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function Kd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=gc));else if(l!==4&&(l===27&&ja(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Zd(t,i,s),t=t.sibling;t!==null;)Zd(t,i,s),t=t.sibling}function rc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ja(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(rc(t,i,s),t=t.sibling;t!==null;)rc(t,i,s),t=t.sibling}function ig(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Dn(i,l,s),i[bn]=t,i[An]=s}catch(m){Ht(t,t.return,m)}}var ea=!1,rn=!1,$d=!1,ag=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Ay(t,i){if(t=t.containerInfo,Sf=Mc,t=mm(t),Ku(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,N=-1,j=-1,ne=0,pe=0,ye=t,re=null;t:for(;;){for(var se;ye!==s||u!==0&&ye.nodeType!==3||(N=E+u),ye!==m||l!==0&&ye.nodeType!==3||(j=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(se=ye.firstChild)!==null;)re=ye,ye=se;for(;;){if(ye===t)break t;if(re===s&&++ne===u&&(N=E),re===m&&++pe===l&&(j=E),(se=ye.nextSibling)!==null)break;ye=re,re=ye.parentNode}ye=se}s=N===-1||j===-1?null:{start:N,end:j}}else s=null}s=s||{start:0,end:0}}else s=null;for(Mf={focusedElem:t,selectionRange:s},Mc=!1,Mn=i;Mn!==null;)if(i=Mn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Mn=t;else for(;Mn!==null;){switch(i=Mn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,u=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var rt=Sr(s.type,u,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(rt,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Af(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Af(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Mn=t;break}Mn=i.return}}function rg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Oa(t,s),l&4&&Ao(5,s);break;case 1:if(Oa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(E){Ht(s,s.return,E)}else{var u=Sr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Ht(s,s.return,E)}}l&64&&J0(s),l&512&&wo(s,s.return);break;case 3:if(Oa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{km(t,i)}catch(E){Ht(s,s.return,E)}}break;case 27:i===null&&l&4&&ig(s);case 26:case 5:Oa(t,s),i===null&&l&4&&tg(s),l&512&&wo(s,s.return);break;case 12:Oa(t,s);break;case 13:Oa(t,s),l&4&&lg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Fy.bind(null,s),Jy(t,s))));break;case 22:if(l=s.memoizedState!==null||ea,!l){i=i!==null&&i.memoizedState!==null||rn,u=ea;var m=rn;ea=l,(rn=i)&&!m?Fa(t,s,(s.subtreeFlags&8772)!==0):Oa(t,s),ea=u,rn=m}break;case 30:break;default:Oa(t,s)}}function sg(t){var i=t.alternate;i!==null&&(t.alternate=null,sg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&jr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,Hn=!1;function ta(t,i,s){for(s=s.child;s!==null;)og(t,i,s),s=s.sibling}function og(t,i,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(me,s)}catch{}switch(s.tag){case 26:rn||Fi(s,i),ta(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:rn||Fi(s,i);var l=qt,u=Hn;ja(s.type)&&(qt=s.stateNode,Hn=!1),ta(t,i,s),Po(s.stateNode),qt=l,Hn=u;break;case 5:rn||Fi(s,i);case 6:if(l=qt,u=Hn,qt=null,ta(t,i,s),qt=l,Hn=u,qt!==null)if(Hn)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(s.stateNode)}catch(m){Ht(s,i,m)}else try{qt.removeChild(s.stateNode)}catch(m){Ht(s,i,m)}break;case 18:qt!==null&&(Hn?(t=qt,Kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Vo(t)):Kg(qt,s.stateNode));break;case 4:l=qt,u=Hn,qt=s.stateNode.containerInfo,Hn=!0,ta(t,i,s),qt=l,Hn=u;break;case 0:case 11:case 14:case 15:rn||Ua(2,s,i),rn||Ua(4,s,i),ta(t,i,s);break;case 1:rn||(Fi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&eg(s,i,l)),ta(t,i,s);break;case 21:ta(t,i,s);break;case 22:rn=(l=rn)||s.memoizedState!==null,ta(t,i,s),rn=l;break;default:ta(t,i,s)}}function lg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vo(t)}catch(s){Ht(i,i.return,s)}}function wy(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ag),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ag),i;default:throw Error(r(435,t.tag))}}function Qd(t,i){var s=wy(t);i.forEach(function(l){var u=Py.bind(null,t,l);s.has(l)||(s.add(l),l.then(u,u))})}function Kn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],m=t,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 27:if(ja(N.type)){qt=N.stateNode,Hn=!1;break e}break;case 5:qt=N.stateNode,Hn=!1;break e;case 3:case 4:qt=N.stateNode.containerInfo,Hn=!0;break e}N=N.return}if(qt===null)throw Error(r(160));og(m,E,u),qt=null,Hn=!1,m=u.alternate,m!==null&&(m.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)cg(i,t),i=i.sibling}var yi=null;function cg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(i,t),Zn(t),l&4&&(Ua(3,t,t.return),Ao(3,t),Ua(5,t,t.return));break;case 1:Kn(i,t),Zn(t),l&512&&(rn||s===null||Fi(s,s.return)),l&64&&ea&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=yi;if(Kn(i,t),Zn(t),l&512&&(rn||s===null||Fi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":m=u.getElementsByTagName("title")[0],(!m||m[Li]||m[bn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=u.createElement(l),u.head.insertBefore(m,u.querySelector("head > title"))),Dn(m,l,s),m[bn]=t,cn(m),l=m;break e;case"link":var E=ix("link","href",u).get(l+(s.href||""));if(E){for(var N=0;N<E.length;N++)if(m=E[N],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(N,1);break t}}m=u.createElement(l),Dn(m,l,s),u.head.appendChild(m);break;case"meta":if(E=ix("meta","content",u).get(l+(s.content||""))){for(N=0;N<E.length;N++)if(m=E[N],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(N,1);break t}}m=u.createElement(l),Dn(m,l,s),u.head.appendChild(m);break;default:throw Error(r(468,l))}m[bn]=t,cn(m),l=m}t.stateNode=l}else ax(u,t.type,t.stateNode);else t.stateNode=nx(u,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?ax(u,t.type,t.stateNode):nx(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Yd(t,t.memoizedProps,s.memoizedProps)}break;case 27:Kn(i,t),Zn(t),l&512&&(rn||s===null||Fi(s,s.return)),s!==null&&l&4&&Yd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Kn(i,t),Zn(t),l&512&&(rn||s===null||Fi(s,s.return)),t.flags&32){u=t.stateNode;try{nn(u,"")}catch(se){Ht(t,t.return,se)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,Yd(t,u,s!==null?s.memoizedProps:u)),l&1024&&($d=!0);break;case 6:if(Kn(i,t),Zn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(se){Ht(t,t.return,se)}}break;case 3:if(bc=null,u=yi,yi=_c(i.containerInfo),Kn(i,t),yi=u,Zn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Vo(i.containerInfo)}catch(se){Ht(t,t.return,se)}$d&&($d=!1,ug(t));break;case 4:l=yi,yi=_c(t.stateNode.containerInfo),Kn(i,t),Zn(t),yi=l;break;case 12:Kn(i,t),Zn(t);break;case 13:Kn(i,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(rf=st()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Qd(t,l)));break;case 22:u=t.memoizedState!==null;var j=s!==null&&s.memoizedState!==null,ne=ea,pe=rn;if(ea=ne||u,rn=pe||j,Kn(i,t),rn=pe,ea=ne,Zn(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||j||ea||rn||Mr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){j=s=i;try{if(m=j.stateNode,u)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{N=j.stateNode;var ye=j.memoizedProps.style,re=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;N.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(se){Ht(j,j.return,se)}}}else if(i.tag===6){if(s===null){j=i;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(se){Ht(j,j.return,se)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Qd(t,s))));break;case 19:Kn(i,t),Zn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Qd(t,l)));break;case 30:break;case 21:break;default:Kn(i,t),Zn(t)}}function Zn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(ng(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,m=Kd(t);rc(t,m,u);break;case 5:var E=s.stateNode;s.flags&32&&(nn(E,""),s.flags&=-33);var N=Kd(t);rc(t,N,E);break;case 3:case 4:var j=s.stateNode.containerInfo,ne=Kd(t);Zd(t,ne,j);break;default:throw Error(r(161))}}catch(pe){Ht(t,t.return,pe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ug(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;ug(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Oa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)rg(t,i.alternate,i),i=i.sibling}function Mr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ua(4,i,i.return),Mr(i);break;case 1:Fi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&eg(i,i.return,s),Mr(i);break;case 27:Po(i.stateNode);case 26:case 5:Fi(i,i.return),Mr(i);break;case 22:i.memoizedState===null&&Mr(i);break;case 30:Mr(i);break;default:Mr(i)}t=t.sibling}}function Fa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Fa(u,m,s),Ao(4,m);break;case 1:if(Fa(u,m,s),l=m,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Ht(l,l.return,ne)}if(l=m,u=l.updateQueue,u!==null){var N=l.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)Bm(j[u],N)}catch(ne){Ht(l,l.return,ne)}}s&&E&64&&J0(m),wo(m,m.return);break;case 27:ig(m);case 26:case 5:Fa(u,m,s),s&&l===null&&E&4&&tg(m),wo(m,m.return);break;case 12:Fa(u,m,s);break;case 13:Fa(u,m,s),s&&E&4&&lg(u,m);break;case 22:m.memoizedState===null&&Fa(u,m,s),wo(m,m.return);break;case 30:break;default:Fa(u,m,s)}i=i.sibling}}function Jd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&fo(s))}function ef(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fo(t))}function Pi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)dg(t,i,s,l),i=i.sibling}function dg(t,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,l),u&2048&&Ao(9,i);break;case 1:Pi(t,i,s,l);break;case 3:Pi(t,i,s,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fo(t)));break;case 12:if(u&2048){Pi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,E=m.id,N=m.onPostCommit;typeof N=="function"&&N(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){Ht(i,i.return,j)}}else Pi(t,i,s,l);break;case 13:Pi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Pi(t,i,s,l):Ro(t,i):m._visibility&2?Pi(t,i,s,l):(m._visibility|=2,ss(t,i,s,l,(i.subtreeFlags&10256)!==0)),u&2048&&Jd(E,i);break;case 24:Pi(t,i,s,l),u&2048&&ef(i.alternate,i);break;default:Pi(t,i,s,l)}}function ss(t,i,s,l,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,E=i,N=s,j=l,ne=E.flags;switch(E.tag){case 0:case 11:case 15:ss(m,E,N,j,u),Ao(8,E);break;case 23:break;case 22:var pe=E.stateNode;E.memoizedState!==null?pe._visibility&2?ss(m,E,N,j,u):Ro(m,E):(pe._visibility|=2,ss(m,E,N,j,u)),u&&ne&2048&&Jd(E.alternate,E);break;case 24:ss(m,E,N,j,u),u&&ne&2048&&ef(E.alternate,E);break;default:ss(m,E,N,j,u)}i=i.sibling}}function Ro(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,u=l.flags;switch(l.tag){case 22:Ro(s,l),u&2048&&Jd(l.alternate,l);break;case 24:Ro(s,l),u&2048&&ef(l.alternate,l);break;default:Ro(s,l)}i=i.sibling}}var Co=8192;function os(t){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)fg(t),t=t.sibling}function fg(t){switch(t.tag){case 26:os(t),t.flags&Co&&t.memoizedState!==null&&fS(yi,t.memoizedState,t.memoizedProps);break;case 5:os(t);break;case 3:case 4:var i=yi;yi=_c(t.stateNode.containerInfo),os(t),yi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Co,Co=16777216,os(t),Co=i):os(t));break;default:os(t)}}function hg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Do(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,mg(l,t)}hg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pg(t),t=t.sibling}function pg(t){switch(t.tag){case 0:case 11:case 15:Do(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:Do(t);break;case 12:Do(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,sc(t)):Do(t);break;default:Do(t)}}function sc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,mg(l,t)}hg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ua(8,i,i.return),sc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,sc(i));break;default:sc(i)}t=t.sibling}}function mg(t,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:Ua(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Mn=l;else e:for(s=t;Mn!==null;){l=Mn;var u=l.sibling,m=l.return;if(sg(l),l===s){Mn=null;break e}if(u!==null){u.return=m,Mn=u;break e}Mn=m}}}var Ry={getCacheForType:function(t){var i=Ln(gn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},Cy=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Xt=null,vt=null,Mt=0,Ut=0,$n=null,Pa=!1,ls=!1,tf=!1,na=0,Jt=0,za=0,Er=0,nf=0,di=0,cs=0,Lo=null,Gn=null,af=!1,rf=0,oc=1/0,lc=null,Ia=null,Cn=0,Ba=null,us=null,ds=0,sf=0,of=null,gg=null,No=0,lf=null;function Qn(){if((Nt&2)!==0&&Mt!==0)return Mt&-Mt;if(B.T!==null){var t=Qr;return t!==0?t:mf()}return At()}function xg(){di===0&&(di=(Mt&536870912)===0||Rt?X():536870912);var t=ui.current;return t!==null&&(t.flags|=32),di}function Jn(t,i,s){(t===Xt&&(Ut===2||Ut===9)||t.cancelPendingCommit!==null)&&(fs(t,0),ka(t,Mt,di,!1)),Re(t,s),((Nt&2)===0||t!==Xt)&&(t===Xt&&((Nt&2)===0&&(Er|=s),Jt===4&&ka(t,Mt,di,!1)),zi(t))}function _g(t,i,s){if((Nt&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Fe(t,i),u=l?Ny(t,i):df(t,i,!0),m=l;do{if(u===0){ls&&!l&&ka(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!Dy(s)){u=df(t,i,!1),m=!1;continue}if(u===2){if(m=i,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var N=t;u=Lo;var j=N.current.memoizedState.isDehydrated;if(j&&(fs(N,E).flags|=256),E=df(N,E,!1),E!==2){if(tf&&!j){N.errorRecoveryDisabledLanes|=m,Er|=m,u=4;break e}m=Gn,Gn=u,m!==null&&(Gn===null?Gn=m:Gn.push.apply(Gn,m))}u=E}if(m=!1,u!==2)continue}}if(u===1){fs(t,0),ka(t,i,0,!0);break}e:{switch(l=t,m=u,m){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ka(l,i,di,!Pa);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=rf+300-st(),10<u)){if(ka(l,i,di,!Pa),$e(l,0,!0)!==0)break e;l.timeoutHandle=qg(vg.bind(null,l,s,Gn,lc,af,i,di,Er,cs,Pa,m,2,-0,0),u);break e}vg(l,s,Gn,lc,af,i,di,Er,cs,Pa,m,0,-0,0)}}break}while(!0);zi(t)}function vg(t,i,s,l,u,m,E,N,j,ne,pe,ye,re,se){if(t.timeoutHandle=-1,ye=i.subtreeFlags,(ye&8192||(ye&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:dS},fg(i),ye=hS(),ye!==null)){t.cancelPendingCommit=ye(Ag.bind(null,t,i,m,s,l,u,E,N,j,pe,1,re,se)),ka(t,m,E,!ne);return}Ag(t,i,m,s,l,u,E,N,j)}function Dy(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],m=u.getSnapshot;u=u.value;try{if(!qn(m(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ka(t,i,s,l){i&=~nf,i&=~Er,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var m=31-Pe(u),E=1<<m;l[m]=-1,u&=~E}s!==0&&Se(t,s,i)}function cc(){return(Nt&6)===0?(Uo(0),!1):!0}function cf(){if(vt!==null){if(Ut===0)var t=vt.return;else t=vt,Yi=_r=null,Td(t),as=null,Mo=0,t=vt;for(;t!==null;)Q0(t.alternate,t),t=t.return;vt=null}}function fs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Yy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),cf(),Xt=t,vt=s=Xi(t.current,null),Mt=i,Ut=0,$n=null,Pa=!1,ls=Fe(t,i),tf=!1,cs=di=nf=Er=za=Jt=0,Gn=Lo=null,af=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-Pe(l),m=1<<u;i|=t[u],l&=~m}return na=i,Ll(),s}function bg(t,i){pt=null,B.H=Zl,i===po||i===kl?(i=zm(),Ut=3):i===Om?(i=zm(),Ut=4):Ut=i===I0?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,$n=i,vt===null&&(Jt=1,tc(t,si(i,t.current)))}function yg(){var t=B.H;return B.H=Zl,t===null?Zl:t}function Sg(){var t=B.A;return B.A=Ry,t}function uf(){Jt=4,Pa||(Mt&4194048)!==Mt&&ui.current!==null||(ls=!0),(za&134217727)===0&&(Er&134217727)===0||Xt===null||ka(Xt,Mt,di,!1)}function df(t,i,s){var l=Nt;Nt|=2;var u=yg(),m=Sg();(Xt!==t||Mt!==i)&&(lc=null,fs(t,i)),i=!1;var E=Jt;e:do try{if(Ut!==0&&vt!==null){var N=vt,j=$n;switch(Ut){case 8:cf(),E=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(i=!0);var ne=Ut;if(Ut=0,$n=null,hs(t,N,j,ne),s&&ls){E=0;break e}break;default:ne=Ut,Ut=0,$n=null,hs(t,N,j,ne)}}Ly(),E=Jt;break}catch(pe){bg(t,pe)}while(!0);return i&&t.shellSuspendCounter++,Yi=_r=null,Nt=l,B.H=u,B.A=m,vt===null&&(Xt=null,Mt=0,Ll()),E}function Ly(){for(;vt!==null;)Mg(vt)}function Ny(t,i){var s=Nt;Nt|=2;var l=yg(),u=Sg();Xt!==t||Mt!==i?(lc=null,oc=st()+500,fs(t,i)):ls=Fe(t,i);e:do try{if(Ut!==0&&vt!==null){i=vt;var m=$n;t:switch(Ut){case 1:Ut=0,$n=null,hs(t,i,m,1);break;case 2:case 9:if(Fm(m)){Ut=0,$n=null,Eg(i);break}i=function(){Ut!==2&&Ut!==9||Xt!==t||(Ut=7),zi(t)},m.then(i,i);break e;case 3:Ut=7;break e;case 4:Ut=5;break e;case 7:Fm(m)?(Ut=0,$n=null,Eg(i)):(Ut=0,$n=null,hs(t,i,m,7));break;case 5:var E=null;switch(vt.tag){case 26:E=vt.memoizedState;case 5:case 27:var N=vt;if(!E||rx(E)){Ut=0,$n=null;var j=N.sibling;if(j!==null)vt=j;else{var ne=N.return;ne!==null?(vt=ne,uc(ne)):vt=null}break t}}Ut=0,$n=null,hs(t,i,m,5);break;case 6:Ut=0,$n=null,hs(t,i,m,6);break;case 8:cf(),Jt=6;break e;default:throw Error(r(462))}}Uy();break}catch(pe){bg(t,pe)}while(!0);return Yi=_r=null,B.H=l,B.A=u,Nt=s,vt!==null?0:(Xt=null,Mt=0,Ll(),Jt)}function Uy(){for(;vt!==null&&!V();)Mg(vt)}function Mg(t){var i=Z0(t.alternate,t,na);t.memoizedProps=t.pendingProps,i===null?uc(t):vt=i}function Eg(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=V0(s,i,i.pendingProps,i.type,void 0,Mt);break;case 11:i=V0(s,i,i.pendingProps,i.type.render,i.ref,Mt);break;case 5:Td(i);default:Q0(s,i),i=vt=Tm(i,na),i=Z0(s,i,na)}t.memoizedProps=t.pendingProps,i===null?uc(t):vt=i}function hs(t,i,s,l){Yi=_r=null,Td(i),as=null,Mo=0;var u=i.return;try{if(Sy(t,u,i,s,Mt)){Jt=1,tc(t,si(s,t.current)),vt=null;return}}catch(m){if(u!==null)throw vt=u,m;Jt=1,tc(t,si(s,t.current)),vt=null;return}i.flags&32768?(Rt||l===1?t=!0:ls||(Mt&536870912)!==0?t=!1:(Pa=t=!0,(l===2||l===9||l===3||l===6)&&(l=ui.current,l!==null&&l.tag===13&&(l.flags|=16384))),Tg(i,t)):uc(i)}function uc(t){var i=t;do{if((i.flags&32768)!==0){Tg(i,Pa);return}t=i.return;var s=Ey(i.alternate,i,na);if(s!==null){vt=s;return}if(i=i.sibling,i!==null){vt=i;return}vt=i=t}while(i!==null);Jt===0&&(Jt=5)}function Tg(t,i){do{var s=Ty(t.alternate,t);if(s!==null){s.flags&=32767,vt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){vt=t;return}vt=t=s}while(t!==null);Jt=6,vt=null}function Ag(t,i,s,l,u,m,E,N,j){t.cancelPendingCommit=null;do dc();while(Cn!==0);if((Nt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(m=i.lanes|i.childLanes,m|=ed,Ee(t,s,m,E,N,j),t===Xt&&(vt=Xt=null,Mt=0),us=i,Ba=t,ds=s,sf=m,of=u,gg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zy(Xe,function(){return Lg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,u=Y.p,Y.p=2,E=Nt,Nt|=4;try{Ay(t,i,s)}finally{Nt=E,Y.p=u,B.T=l}}Cn=1,wg(),Rg(),Cg()}}function wg(){if(Cn===1){Cn=0;var t=Ba,i=us,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=Y.p;Y.p=2;var u=Nt;Nt|=4;try{cg(i,t);var m=Mf,E=mm(t.containerInfo),N=m.focusedElem,j=m.selectionRange;if(E!==N&&N&&N.ownerDocument&&pm(N.ownerDocument.documentElement,N)){if(j!==null&&Ku(N)){var ne=j.start,pe=j.end;if(pe===void 0&&(pe=ne),"selectionStart"in N)N.selectionStart=ne,N.selectionEnd=Math.min(pe,N.value.length);else{var ye=N.ownerDocument||document,re=ye&&ye.defaultView||window;if(re.getSelection){var se=re.getSelection(),rt=N.textContent.length,tt=Math.min(j.start,rt),Bt=j.end===void 0?tt:Math.min(j.end,rt);!se.extend&&tt>Bt&&(E=Bt,Bt=tt,tt=E);var Z=hm(N,tt),W=hm(N,Bt);if(Z&&W&&(se.rangeCount!==1||se.anchorNode!==Z.node||se.anchorOffset!==Z.offset||se.focusNode!==W.node||se.focusOffset!==W.offset)){var te=ye.createRange();te.setStart(Z.node,Z.offset),se.removeAllRanges(),tt>Bt?(se.addRange(te),se.extend(W.node,W.offset)):(te.setEnd(W.node,W.offset),se.addRange(te))}}}}for(ye=[],se=N;se=se.parentNode;)se.nodeType===1&&ye.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<ye.length;N++){var ge=ye[N];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Mc=!!Sf,Mf=Sf=null}finally{Nt=u,Y.p=l,B.T=s}}t.current=i,Cn=2}}function Rg(){if(Cn===2){Cn=0;var t=Ba,i=us,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=Y.p;Y.p=2;var u=Nt;Nt|=4;try{rg(t,i.alternate,i)}finally{Nt=u,Y.p=l,B.T=s}}Cn=3}}function Cg(){if(Cn===4||Cn===3){Cn=0,mt();var t=Ba,i=us,s=ds,l=gg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Cn=5:(Cn=0,us=Ba=null,Dg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ia=null),Dt(s),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(me,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,u=Y.p,Y.p=2,B.T=null;try{for(var m=t.onRecoverableError,E=0;E<l.length;E++){var N=l[E];m(N.value,{componentStack:N.stack})}}finally{B.T=i,Y.p=u}}(ds&3)!==0&&dc(),zi(t),u=t.pendingLanes,(s&4194090)!==0&&(u&42)!==0?t===lf?No++:(No=0,lf=t):No=0,Uo(0)}}function Dg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,fo(i)))}function dc(t){return wg(),Rg(),Cg(),Lg()}function Lg(){if(Cn!==5)return!1;var t=Ba,i=sf;sf=0;var s=Dt(ds),l=B.T,u=Y.p;try{Y.p=32>s?32:s,B.T=null,s=of,of=null;var m=Ba,E=ds;if(Cn=0,us=Ba=null,ds=0,(Nt&6)!==0)throw Error(r(331));var N=Nt;if(Nt|=4,pg(m.current),dg(m,m.current,E,s),Nt=N,Uo(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(me,m)}catch{}return!0}finally{Y.p=u,B.T=l,Dg(t,i)}}function Ng(t,i,s){i=si(s,i),i=Bd(t.stateNode,i,2),t=Ca(t,i,2),t!==null&&(Re(t,2),zi(t))}function Ht(t,i,s){if(t.tag===3)Ng(t,t,s);else for(;i!==null;){if(i.tag===3){Ng(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ia===null||!Ia.has(l))){t=si(s,t),s=P0(2),l=Ca(i,s,2),l!==null&&(z0(s,l,i,t),Re(l,2),zi(l));break}}i=i.return}}function ff(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Cy;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(tf=!0,u.add(s),t=Oy.bind(null,t,i,s),i.then(t,t))}function Oy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Xt===t&&(Mt&s)===s&&(Jt===4||Jt===3&&(Mt&62914560)===Mt&&300>st()-rf?(Nt&2)===0&&fs(t,0):nf|=s,cs===Mt&&(cs=0)),zi(t)}function Ug(t,i){i===0&&(i=Ne()),t=Yr(t,i),t!==null&&(Re(t,i),zi(t))}function Fy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Ug(t,s)}function Py(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Ug(t,s)}function zy(t,i){return ut(t,i)}var fc=null,ps=null,hf=!1,hc=!1,pf=!1,Tr=0;function zi(t){t!==ps&&t.next===null&&(ps===null?fc=ps=t:ps=ps.next=t),hc=!0,hf||(hf=!0,By())}function Uo(t,i){if(!pf&&hc){pf=!0;do for(var s=!1,l=fc;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var m=0;else{var E=l.suspendedLanes,N=l.pingedLanes;m=(1<<31-Pe(42|t)+1)-1,m&=u&~(E&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,zg(l,m))}else m=Mt,m=$e(l,l===Xt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Fe(l,m)||(s=!0,zg(l,m));l=l.next}while(s);pf=!1}}function Iy(){Og()}function Og(){hc=hf=!1;var t=0;Tr!==0&&(qy()&&(t=Tr),Tr=0);for(var i=st(),s=null,l=fc;l!==null;){var u=l.next,m=Fg(l,i);m===0?(l.next=null,s===null?fc=u:s.next=u,u===null&&(ps=s)):(s=l,(t!==0||(m&3)!==0)&&(hc=!0)),l=u}Uo(t)}function Fg(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-Pe(m),N=1<<E,j=u[E];j===-1?((N&s)===0||(N&l)!==0)&&(u[E]=it(N,i)):j<=i&&(t.expiredLanes|=N),m&=~N}if(i=Xt,s=Mt,s=$e(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Ut===2||Ut===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ft(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Fe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Ft(l),Dt(s)){case 2:case 8:s=Gt;break;case 32:s=Xe;break;case 268435456:s=k;break;default:s=Xe}return l=Pg.bind(null,t),s=ut(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Ft(l),t.callbackPriority=2,t.callbackNode=null,2}function Pg(t,i){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(dc()&&t.callbackNode!==s)return null;var l=Mt;return l=$e(t,t===Xt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(_g(t,l,i),Fg(t,st()),t.callbackNode!=null&&t.callbackNode===s?Pg.bind(null,t):null)}function zg(t,i){if(dc())return null;_g(t,i,!0)}function By(){Ky(function(){(Nt&6)!==0?ut(He,Iy):Og()})}function mf(){return Tr===0&&(Tr=X()),Tr}function Ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:El(""+t)}function Bg(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function ky(t,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var m=Ig((u[An]||null).action),E=l.submitter;E&&(i=(i=E[An]||null)?Ig(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var N=new Rl("action","action",null,l,u);t.push({event:N,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Tr!==0){var j=E?Bg(u,E):new FormData(u);Od(s,{pending:!0,data:j,method:u.method,action:m},null,j)}}else typeof m=="function"&&(N.preventDefault(),j=E?Bg(u,E):new FormData(u),Od(s,{pending:!0,data:j,method:u.method,action:m},m,j))},currentTarget:u}]})}}for(var gf=0;gf<Ju.length;gf++){var xf=Ju[gf],jy=xf.toLowerCase(),Hy=xf[0].toUpperCase()+xf.slice(1);bi(jy,"on"+Hy)}bi(_m,"onAnimationEnd"),bi(vm,"onAnimationIteration"),bi(bm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(ry,"onTransitionRun"),bi(sy,"onTransitionStart"),bi(oy,"onTransitionCancel"),bi(ym,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function kg(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var N=l[E],j=N.instance,ne=N.currentTarget;if(N=N.listener,j!==m&&u.isPropagationStopped())break e;m=N,u.currentTarget=ne;try{m(u)}catch(pe){ec(pe)}u.currentTarget=null,m=j}else for(E=0;E<l.length;E++){if(N=l[E],j=N.instance,ne=N.currentTarget,N=N.listener,j!==m&&u.isPropagationStopped())break e;m=N,u.currentTarget=ne;try{m(u)}catch(pe){ec(pe)}u.currentTarget=null,m=j}}}}function bt(t,i){var s=i[_i];s===void 0&&(s=i[_i]=new Set);var l=t+"__bubble";s.has(l)||(jg(i,t,2,!1),s.add(l))}function _f(t,i,s){var l=0;i&&(l|=4),jg(s,t,l,i)}var pc="_reactListening"+Math.random().toString(36).slice(2);function vf(t){if(!t[pc]){t[pc]=!0,Sl.forEach(function(s){s!=="selectionchange"&&(Gy.has(s)||_f(s,!1,t),_f(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pc]||(i[pc]=!0,_f("selectionchange",!1,i))}}function jg(t,i,s,l){switch(dx(i)){case 2:var u=gS;break;case 8:u=xS;break;default:u=Uf}s=u.bind(null,i,s,t),u=void 0,!ku||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function bf(t,i,s,l,u){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var N=l.stateNode.containerInfo;if(N===u)break;if(E===4)for(E=l.return;E!==null;){var j=E.tag;if((j===3||j===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;N!==null;){if(E=vi(N),E===null)return;if(j=E.tag,j===5||j===6||j===26||j===27){l=m=E;continue e}N=N.parentNode}}l=l.return}Yp(function(){var ne=m,pe=Iu(s),ye=[];e:{var re=Sm.get(t);if(re!==void 0){var se=Rl,rt=t;switch(t){case"keypress":if(Al(s)===0)break e;case"keydown":case"keyup":se=zb;break;case"focusin":rt="focus",se=Vu;break;case"focusout":rt="blur",se=Vu;break;case"beforeblur":case"afterblur":se=Vu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=kb;break;case _m:case vm:case bm:se=Rb;break;case ym:se=Hb;break;case"scroll":case"scrollend":se=Mb;break;case"wheel":se=Vb;break;case"copy":case"cut":case"paste":se=Db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Jp;break;case"toggle":case"beforetoggle":se=Wb}var tt=(i&4)!==0,Bt=!tt&&(t==="scroll"||t==="scrollend"),Z=tt?re!==null?re+"Capture":null:re;tt=[];for(var W=ne,te;W!==null;){var ge=W;if(te=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||te===null||Z===null||(ge=Qs(W,Z),ge!=null&&tt.push(Fo(W,ge,te))),Bt)break;W=W.return}0<tt.length&&(re=new se(re,rt,null,s,pe),ye.push({event:re,listeners:tt}))}}if((i&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",re&&s!==zu&&(rt=s.relatedTarget||s.fromElement)&&(vi(rt)||rt[ji]))break e;if((se||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,se?(rt=s.relatedTarget||s.toElement,se=ne,rt=rt?vi(rt):null,rt!==null&&(Bt=c(rt),tt=rt.tag,rt!==Bt||tt!==5&&tt!==27&&tt!==6)&&(rt=null)):(se=null,rt=ne),se!==rt)){if(tt=$p,ge="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Jp,ge="onPointerLeave",Z="onPointerEnter",W="pointer"),Bt=se==null?re:ya(se),te=rt==null?re:ya(rt),re=new tt(ge,W+"leave",se,s,pe),re.target=Bt,re.relatedTarget=te,ge=null,vi(pe)===ne&&(tt=new tt(Z,W+"enter",rt,s,pe),tt.target=te,tt.relatedTarget=Bt,ge=tt),Bt=ge,se&&rt)t:{for(tt=se,Z=rt,W=0,te=tt;te;te=ms(te))W++;for(te=0,ge=Z;ge;ge=ms(ge))te++;for(;0<W-te;)tt=ms(tt),W--;for(;0<te-W;)Z=ms(Z),te--;for(;W--;){if(tt===Z||Z!==null&&tt===Z.alternate)break t;tt=ms(tt),Z=ms(Z)}tt=null}else tt=null;se!==null&&Hg(ye,re,se,tt,!1),rt!==null&&Bt!==null&&Hg(ye,Bt,rt,tt,!0)}}e:{if(re=ne?ya(ne):window,se=re.nodeName&&re.nodeName.toLowerCase(),se==="select"||se==="input"&&re.type==="file")var je=om;else if(rm(re))if(lm)je=ny;else{je=ey;var xt=Jb}else se=re.nodeName,!se||se.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ne&&Pu(ne.elementType)&&(je=om):je=ty;if(je&&(je=je(t,ne))){sm(ye,je,s,pe);break e}xt&&xt(t,re,ne),t==="focusout"&&ne&&re.type==="number"&&ne.memoizedProps.value!=null&&jt(re,"number",re.value)}switch(xt=ne?ya(ne):window,t){case"focusin":(rm(xt)||xt.contentEditable==="true")&&(Xr=xt,Zu=ne,so=null);break;case"focusout":so=Zu=Xr=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,gm(ye,s,pe);break;case"selectionchange":if(ay)break;case"keydown":case"keyup":gm(ye,s,pe)}var qe;if(Wu)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Vr?im(t,s)&&(nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(nt="onCompositionStart");nt&&(em&&s.locale!=="ko"&&(Vr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Vr&&(qe=Kp()):(Ta=pe,ju="value"in Ta?Ta.value:Ta.textContent,Vr=!0)),xt=mc(ne,nt),0<xt.length&&(nt=new Qp(nt,t,null,s,pe),ye.push({event:nt,listeners:xt}),qe?nt.data=qe:(qe=am(s),qe!==null&&(nt.data=qe)))),(qe=Yb?Kb(t,s):Zb(t,s))&&(nt=mc(ne,"onBeforeInput"),0<nt.length&&(xt=new Qp("onBeforeInput","beforeinput",null,s,pe),ye.push({event:xt,listeners:nt}),xt.data=qe)),ky(ye,t,ne,s,pe)}kg(ye,i)})}function Fo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function mc(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,m=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||m===null||(u=Qs(t,s),u!=null&&l.unshift(Fo(t,u,m)),u=Qs(t,i),u!=null&&l.push(Fo(t,u,m))),t.tag===3)return l;t=t.return}return[]}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hg(t,i,s,l,u){for(var m=i._reactName,E=[];s!==null&&s!==l;){var N=s,j=N.alternate,ne=N.stateNode;if(N=N.tag,j!==null&&j===l)break;N!==5&&N!==26&&N!==27||ne===null||(j=ne,u?(ne=Qs(s,m),ne!=null&&E.unshift(Fo(s,ne,j))):u||(ne=Qs(s,m),ne!=null&&E.push(Fo(s,ne,j)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var Vy=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace(Vy,`
`).replace(Xy,"")}function Vg(t,i){return i=Gg(i),Gg(t)===i}function gc(){}function It(t,i,s,l,u,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||nn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&nn(t,""+l);break;case"className":Ae(t,"class",l);break;case"tabIndex":Ae(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(t,s,l);break;case"style":Wp(t,l,m);break;case"data":if(i!=="object"){Ae(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=El(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&It(t,i,"name",u.name,u,null),It(t,i,"formEncType",u.formEncType,u,null),It(t,i,"formMethod",u.formMethod,u,null),It(t,i,"formTarget",u.formTarget,u,null)):(It(t,i,"encType",u.encType,u,null),It(t,i,"method",u.method,u,null),It(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=El(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=gc);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=El(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":bt("beforetoggle",t),bt("toggle",t),Q(t,"popover",l);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Q(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=yb.get(s)||s,Q(t,s,l))}}function yf(t,i,s,l,u,m){switch(s){case"style":Wp(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?nn(t,l):(typeof l=="number"||typeof l=="bigint")&&nn(t,""+l);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=gc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ml.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),m=t[An]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,u),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,u);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Q(t,s,l)}}}function Dn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var l=!1,u=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:It(t,i,m,E,s,null)}}u&&It(t,i,"srcSet",s.srcSet,s,null),l&&It(t,i,"src",s.src,s,null);return;case"input":bt("invalid",t);var N=m=E=u=null,j=null,ne=null;for(l in s)if(s.hasOwnProperty(l)){var pe=s[l];if(pe!=null)switch(l){case"name":u=pe;break;case"type":E=pe;break;case"checked":j=pe;break;case"defaultChecked":ne=pe;break;case"value":m=pe;break;case"defaultValue":N=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,i));break;default:It(t,i,l,pe,s,null)}}Ea(t,m,N,j,ne,E,u,!1),Ze(t);return;case"select":bt("invalid",t),l=E=m=null;for(u in s)if(s.hasOwnProperty(u)&&(N=s[u],N!=null))switch(u){case"value":m=N;break;case"defaultValue":E=N;break;case"multiple":l=N;default:It(t,i,u,N,s,null)}i=m,s=E,t.multiple=!!l,i!=null?tn(t,!!l,i,!1):s!=null&&tn(t,!!l,s,!0);return;case"textarea":bt("invalid",t),m=u=l=null;for(E in s)if(s.hasOwnProperty(E)&&(N=s[E],N!=null))switch(E){case"value":l=N;break;case"defaultValue":u=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(91));break;default:It(t,i,E,N,s,null)}yn(t,l,u,m),Ze(t);return;case"option":for(j in s)if(s.hasOwnProperty(j)&&(l=s[j],l!=null))switch(j){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:It(t,i,j,l,s,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(l=0;l<Oo.length;l++)bt(Oo[l],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(l=s[ne],l!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:It(t,i,ne,l,s,null)}return;default:if(Pu(i)){for(pe in s)s.hasOwnProperty(pe)&&(l=s[pe],l!==void 0&&yf(t,i,pe,l,s,void 0));return}}for(N in s)s.hasOwnProperty(N)&&(l=s[N],l!=null&&It(t,i,N,l,s,null))}function Wy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,m=null,E=null,N=null,j=null,ne=null,pe=null;for(se in s){var ye=s[se];if(s.hasOwnProperty(se)&&ye!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":j=ye;default:l.hasOwnProperty(se)||It(t,i,se,null,l,ye)}}for(var re in l){var se=l[re];if(ye=s[re],l.hasOwnProperty(re)&&(se!=null||ye!=null))switch(re){case"type":m=se;break;case"name":u=se;break;case"checked":ne=se;break;case"defaultChecked":pe=se;break;case"value":E=se;break;case"defaultValue":N=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,i));break;default:se!==ye&&It(t,i,re,se,l,ye)}}wn(t,E,N,j,ne,pe,m,u);return;case"select":se=E=N=re=null;for(m in s)if(j=s[m],s.hasOwnProperty(m)&&j!=null)switch(m){case"value":break;case"multiple":se=j;default:l.hasOwnProperty(m)||It(t,i,m,null,l,j)}for(u in l)if(m=l[u],j=s[u],l.hasOwnProperty(u)&&(m!=null||j!=null))switch(u){case"value":re=m;break;case"defaultValue":N=m;break;case"multiple":E=m;default:m!==j&&It(t,i,u,m,l,j)}i=N,s=E,l=se,re!=null?tn(t,!!s,re,!1):!!l!=!!s&&(i!=null?tn(t,!!s,i,!0):tn(t,!!s,s?[]:"",!1));return;case"textarea":se=re=null;for(N in s)if(u=s[N],s.hasOwnProperty(N)&&u!=null&&!l.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:It(t,i,N,null,l,u)}for(E in l)if(u=l[E],m=s[E],l.hasOwnProperty(E)&&(u!=null||m!=null))switch(E){case"value":re=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==m&&It(t,i,E,u,l,m)}Pn(t,re,se);return;case"option":for(var rt in s)if(re=s[rt],s.hasOwnProperty(rt)&&re!=null&&!l.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:It(t,i,rt,null,l,re)}for(j in l)if(re=l[j],se=s[j],l.hasOwnProperty(j)&&re!==se&&(re!=null||se!=null))switch(j){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:It(t,i,j,re,l,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)re=s[tt],s.hasOwnProperty(tt)&&re!=null&&!l.hasOwnProperty(tt)&&It(t,i,tt,null,l,re);for(ne in l)if(re=l[ne],se=s[ne],l.hasOwnProperty(ne)&&re!==se&&(re!=null||se!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,i));break;default:It(t,i,ne,re,l,se)}return;default:if(Pu(i)){for(var Bt in s)re=s[Bt],s.hasOwnProperty(Bt)&&re!==void 0&&!l.hasOwnProperty(Bt)&&yf(t,i,Bt,void 0,l,re);for(pe in l)re=l[pe],se=s[pe],!l.hasOwnProperty(pe)||re===se||re===void 0&&se===void 0||yf(t,i,pe,re,l,se);return}}for(var Z in s)re=s[Z],s.hasOwnProperty(Z)&&re!=null&&!l.hasOwnProperty(Z)&&It(t,i,Z,null,l,re);for(ye in l)re=l[ye],se=s[ye],!l.hasOwnProperty(ye)||re===se||re==null&&se==null||It(t,i,ye,re,l,se)}var Sf=null,Mf=null;function xc(t){return t.nodeType===9?t:t.ownerDocument}function Xg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Ef(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Tf=null;function qy(){var t=window.event;return t&&t.type==="popstate"?t===Tf?!1:(Tf=t,!0):(Tf=null,!1)}var qg=typeof setTimeout=="function"?setTimeout:void 0,Yy=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(t){return Yg.resolve(null).then(t).catch(Zy)}:qg;function Zy(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function Kg(t,i){var s=i,l=0,u=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var E=t.ownerDocument;if(s&1&&Po(E.documentElement),s&2&&Po(E.body),s&4)for(s=E.head,Po(s),E=s.firstChild;E;){var N=E.nextSibling,j=E.nodeName;E[Li]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=N}}if(u===0){t.removeChild(m),Vo(i);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);Vo(i)}function Af(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Af(s),jr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function $y(t,i,s,l){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Li])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function Qy(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Si(t.nextSibling),t===null))return null;return t}function wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Jy(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Si(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Rf=null;function Zg(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function $g(t,i,s){switch(i=xc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Po(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);jr(t)}var fi=new Map,Qg=new Set;function _c(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ia=Y.d;Y.d={f:eS,r:tS,D:nS,C:iS,L:aS,m:rS,X:oS,S:sS,M:lS};function eS(){var t=ia.f(),i=cc();return t||i}function tS(t){var i=Hi(t);i!==null&&i.tag===5&&i.type==="form"?_0(i):ia.r(t)}var gs=typeof document>"u"?null:document;function Jg(t,i,s){var l=gs;if(l&&typeof i=="string"&&i){var u=mn(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),Qg.has(u)||(Qg.add(u),t={rel:t,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Dn(i,"link",t),cn(i),l.head.appendChild(i)))}}function nS(t){ia.D(t),Jg("dns-prefetch",t,null)}function iS(t,i){ia.C(t,i),Jg("preconnect",t,i)}function aS(t,i,s){ia.L(t,i,s);var l=gs;if(l&&t&&i){var u='link[rel="preload"][as="'+mn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+mn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+mn(s.imageSizes)+'"]')):u+='[href="'+mn(t)+'"]';var m=u;switch(i){case"style":m=xs(t);break;case"script":m=_s(t)}fi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),fi.set(m,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(zo(m))||i==="script"&&l.querySelector(Io(m))||(i=l.createElement("link"),Dn(i,"link",t),cn(i),l.head.appendChild(i)))}}function rS(t,i){ia.m(t,i);var s=gs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+mn(l)+'"][href="'+mn(t)+'"]',m=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=_s(t)}if(!fi.has(m)&&(t=g({rel:"modulepreload",href:t},i),fi.set(m,t),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Io(m)))return}l=s.createElement("link"),Dn(l,"link",t),cn(l),s.head.appendChild(l)}}}function sS(t,i,s){ia.S(t,i,s);var l=gs;if(l&&t){var u=Sa(l).hoistableStyles,m=xs(t);i=i||"default";var E=u.get(m);if(!E){var N={loading:0,preload:null};if(E=l.querySelector(zo(m)))N.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=fi.get(m))&&Cf(t,s);var j=E=l.createElement("link");cn(j),Dn(j,"link",t),j._p=new Promise(function(ne,pe){j.onload=ne,j.onerror=pe}),j.addEventListener("load",function(){N.loading|=1}),j.addEventListener("error",function(){N.loading|=2}),N.loading|=4,vc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:N},u.set(m,E)}}}function oS(t,i){ia.X(t,i);var s=gs;if(s&&t){var l=Sa(s).hoistableScripts,u=_s(t),m=l.get(u);m||(m=s.querySelector(Io(u)),m||(t=g({src:t,async:!0},i),(i=fi.get(u))&&Df(t,i),m=s.createElement("script"),cn(m),Dn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(u,m))}}function lS(t,i){ia.M(t,i);var s=gs;if(s&&t){var l=Sa(s).hoistableScripts,u=_s(t),m=l.get(u);m||(m=s.querySelector(Io(u)),m||(t=g({src:t,async:!0,type:"module"},i),(i=fi.get(u))&&Df(t,i),m=s.createElement("script"),cn(m),Dn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(u,m))}}function ex(t,i,s,l){var u=(u=ae.current)?_c(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=xs(s.href),s=Sa(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=xs(s.href);var m=Sa(u).hoistableStyles,E=m.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=u.querySelector(zo(t)))&&!m._p&&(E.instance=m,E.state.loading=5),fi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},fi.set(t,s),m||cS(u,t,s,E.state))),i&&l===null)throw Error(r(528,""));return E}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=_s(s),s=Sa(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function xs(t){return'href="'+mn(t)+'"'}function zo(t){return'link[rel="stylesheet"]['+t+"]"}function tx(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function cS(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Dn(i,"link",s),cn(i),t.head.appendChild(i))}function _s(t){return'[src="'+mn(t)+'"]'}function Io(t){return"script[async]"+t}function nx(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+mn(s.href)+'"]');if(l)return i.instance=l,cn(l),l;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),cn(l),Dn(l,"style",u),vc(l,s.precedence,t),i.instance=l;case"stylesheet":u=xs(s.href);var m=t.querySelector(zo(u));if(m)return i.state.loading|=4,i.instance=m,cn(m),m;l=tx(s),(u=fi.get(u))&&Cf(l,u),m=(t.ownerDocument||t).createElement("link"),cn(m);var E=m;return E._p=new Promise(function(N,j){E.onload=N,E.onerror=j}),Dn(m,"link",l),i.state.loading|=4,vc(m,s.precedence,t),i.instance=m;case"script":return m=_s(s.src),(u=t.querySelector(Io(m)))?(i.instance=u,cn(u),u):(l=s,(u=fi.get(m))&&(l=g({},s),Df(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),cn(u),Dn(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,vc(l,s.precedence,t));return i.instance}function vc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,m=u,E=0;E<l.length;E++){var N=l[E];if(N.dataset.precedence===i)m=N;else if(m!==u)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Cf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Df(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var bc=null;function ix(t,i,s){if(bc===null){var l=new Map,u=bc=new Map;u.set(s,l)}else u=bc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var m=s[u];if(!(m[Li]||m[bn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=t+E;var N=l.get(E);N?N.push(m):l.set(E,[m])}}return l}function ax(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function uS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function rx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Bo=null;function dS(){}function fS(t,i,s){if(Bo===null)throw Error(r(475));var l=Bo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=xs(s.href),m=t.querySelector(zo(u));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=yc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,cn(m);return}m=t.ownerDocument||t,s=tx(s),(u=fi.get(u))&&Cf(s,u),m=m.createElement("link"),cn(m);var E=m;E._p=new Promise(function(N,j){E.onload=N,E.onerror=j}),Dn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=yc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function hS(){if(Bo===null)throw Error(r(475));var t=Bo;return t.stylesheets&&t.count===0&&Lf(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&Lf(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function yc(){if(this.count--,this.count===0){if(this.stylesheets)Lf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Sc=null;function Lf(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Sc=new Map,i.forEach(pS,t),Sc=null,yc.call(t))}function pS(t,i){if(!(i.state.loading&4)){var s=Sc.get(t);if(s)var l=s.get(null);else{s=new Map,Sc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<u.length;m++){var E=u[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}u=i.instance,E=u.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,u),s.set(E,u),this.count++,l=yc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),m?m.parentNode.insertBefore(u,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var ko={$$typeof:w,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function mS(t,i,s,l,u,m,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function sx(t,i,s,l,u,m,E,N,j,ne,pe,ye){return t=new mS(t,i,s,E,N,j,ne,ye),i=1,m===!0&&(i|=24),m=Yn(3,null,null,i),t.current=m,m.stateNode=t,i=dd(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},md(m),t}function ox(t){return t?(t=Kr,t):Kr}function lx(t,i,s,l,u,m){u=ox(u),l.context===null?l.context=u:l.pendingContext=u,l=Ra(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ca(t,l,i),s!==null&&(Jn(s,t,i),go(s,t,i))}function cx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Nf(t,i){cx(t,i),(t=t.alternate)&&cx(t,i)}function ux(t){if(t.tag===13){var i=Yr(t,67108864);i!==null&&Jn(i,t,67108864),Nf(t,67108864)}}var Mc=!0;function gS(t,i,s,l){var u=B.T;B.T=null;var m=Y.p;try{Y.p=2,Uf(t,i,s,l)}finally{Y.p=m,B.T=u}}function xS(t,i,s,l){var u=B.T;B.T=null;var m=Y.p;try{Y.p=8,Uf(t,i,s,l)}finally{Y.p=m,B.T=u}}function Uf(t,i,s,l){if(Mc){var u=Of(l);if(u===null)bf(t,i,l,Ec,s),fx(t,l);else if(vS(u,t,i,s,l))l.stopPropagation();else if(fx(t,l),i&4&&-1<_S.indexOf(t)){for(;u!==null;){var m=Hi(u);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Ye(m.pendingLanes);if(E!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;E;){var j=1<<31-Pe(E);N.entanglements[1]|=j,E&=~j}zi(m),(Nt&6)===0&&(oc=st()+500,Uo(0))}}break;case 13:N=Yr(m,2),N!==null&&Jn(N,m,2),cc(),Nf(m,2)}if(m=Of(l),m===null&&bf(t,i,l,Ec,s),m===u)break;u=m}u!==null&&l.stopPropagation()}else bf(t,i,l,null,s)}}function Of(t){return t=Iu(t),Ff(t)}var Ec=null;function Ff(t){if(Ec=null,t=vi(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ec=t,null}function dx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pt()){case He:return 2;case Gt:return 8;case Xe:case ot:return 32;case k:return 268435456;default:return 32}default:return 32}}var Pf=!1,Ha=null,Ga=null,Va=null,jo=new Map,Ho=new Map,Xa=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fx(t,i){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(i.pointerId)}}function Go(t,i,s,l,u,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[u]},i!==null&&(i=Hi(i),i!==null&&ux(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function vS(t,i,s,l,u){switch(i){case"focusin":return Ha=Go(Ha,t,i,s,l,u),!0;case"dragenter":return Ga=Go(Ga,t,i,s,l,u),!0;case"mouseover":return Va=Go(Va,t,i,s,l,u),!0;case"pointerover":var m=u.pointerId;return jo.set(m,Go(jo.get(m)||null,t,i,s,l,u)),!0;case"gotpointercapture":return m=u.pointerId,Ho.set(m,Go(Ho.get(m)||null,t,i,s,l,u)),!0}return!1}function hx(t){var i=vi(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=d(s),i!==null){t.blockedOn=i,ri(t.priority,function(){if(s.tag===13){var l=Qn();l=at(l);var u=Yr(s,l);u!==null&&Jn(u,s,l),Nf(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Of(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);zu=l,s.target.dispatchEvent(l),zu=null}else return i=Hi(s),i!==null&&ux(i),t.blockedOn=s,!1;i.shift()}return!0}function px(t,i,s){Tc(t)&&s.delete(i)}function bS(){Pf=!1,Ha!==null&&Tc(Ha)&&(Ha=null),Ga!==null&&Tc(Ga)&&(Ga=null),Va!==null&&Tc(Va)&&(Va=null),jo.forEach(px),Ho.forEach(px)}function Ac(t,i){t.blockedOn===i&&(t.blockedOn=null,Pf||(Pf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,bS)))}var wc=null;function mx(t){wc!==t&&(wc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){wc===t&&(wc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(Ff(l||s)===null)continue;break}var m=Hi(s);m!==null&&(t.splice(i,3),i-=3,Od(m,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Vo(t){function i(j){return Ac(j,t)}Ha!==null&&Ac(Ha,t),Ga!==null&&Ac(Ga,t),Va!==null&&Ac(Va,t),jo.forEach(i),Ho.forEach(i);for(var s=0;s<Xa.length;s++){var l=Xa[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Xa.length&&(s=Xa[0],s.blockedOn===null);)hx(s),s.blockedOn===null&&Xa.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],m=s[l+1],E=u[An]||null;if(typeof m=="function")E||mx(s);else if(E){var N=null;if(m&&m.hasAttribute("formAction")){if(u=m,E=m[An]||null)N=E.formAction;else if(Ff(u)!==null)continue}else N=E.action;typeof N=="function"?s[l+1]=N:(s.splice(l,3),l-=3),mx(s)}}}function zf(t){this._internalRoot=t}Rc.prototype.render=zf.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=Qn();lx(s,l,t,i,null,null)},Rc.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;lx(t.current,2,null,t,null,null),cc(),i[ji]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var i=At();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Xa.length&&i!==0&&i<Xa[s].priority;s++);Xa.splice(s,0,t),s===0&&hx(t)}};var gx=e.version;if(gx!=="19.1.0")throw Error(r(527,gx,"19.1.0"));Y.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var yS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{me=Cc.inject(yS),_e=Cc}catch{}}return Wo.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",u=N0,m=U0,E=O0,N=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(N=i.unstable_transitionCallbacks)),i=sx(t,1,!1,null,null,s,l,u,m,E,N,null),t[ji]=i.current,vf(t),new zf(i)},Wo.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,u="",m=N0,E=U0,N=O0,j=null,ne=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(N=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(j=s.unstable_transitionCallbacks),s.formState!==void 0&&(ne=s.formState)),i=sx(t,1,!0,i,s??null,l,u,m,E,N,j,ne),i.context=ox(null),s=i.current,l=Qn(),l=at(l),u=Ra(l),u.callback=null,Ca(s,u,l),s=l,i.current.lanes=s,Re(i,s),zi(i),t[ji]=i.current,vf(t),new Rc(i)},Wo.version="19.1.0",Wo}var Ax;function LS(){if(Ax)return kf.exports;Ax=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),kf.exports=DS(),kf.exports}var J_=LS();const NS=Q_(J_);var qo={},wx;function US(){if(wx)return qo;wx=1,Object.defineProperty(qo,"__esModule",{value:!0}),qo.parse=d,qo.serialize=h;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,c=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function d(_,b){const M=new c,T=_.length;if(T<2)return M;const S=(b==null?void 0:b.decode)||g;let y=0;do{const A=_.indexOf("=",y);if(A===-1)break;const w=_.indexOf(";",y),R=w===-1?T:w;if(A>R){y=_.lastIndexOf(";",A-1)+1;continue}const F=f(_,y,A),U=p(_,A,F),I=_.slice(F,U);if(M[I]===void 0){let H=f(_,A+1,R),L=p(_,R,H);const C=S(_.slice(H,L));M[I]=C}y=R+1}while(y<T);return M}function f(_,b,M){do{const T=_.charCodeAt(b);if(T!==32&&T!==9)return b}while(++b<M);return M}function p(_,b,M){for(;b>M;){const T=_.charCodeAt(--b);if(T!==32&&T!==9)return b+1}return M}function h(_,b,M){const T=(M==null?void 0:M.encode)||encodeURIComponent;if(!a.test(_))throw new TypeError(`argument name is invalid: ${_}`);const S=T(b);if(!e.test(S))throw new TypeError(`argument val is invalid: ${b}`);let y=_+"="+S;if(!M)return y;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);y+="; Max-Age="+M.maxAge}if(M.domain){if(!n.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);y+="; Domain="+M.domain}if(M.path){if(!r.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);y+="; Path="+M.path}if(M.expires){if(!v(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);y+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(y+="; HttpOnly"),M.secure&&(y+="; Secure"),M.partitioned&&(y+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":y+="; Priority=Low";break;case"medium":y+="; Priority=Medium";break;case"high":y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":y+="; SameSite=Strict";break;case"lax":y+="; SameSite=Lax";break;case"none":y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return y}function g(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function v(_){return o.call(_)==="[object Date]"}return qo}US();var Rx="popstate";function OS(a={}){function e(r,o){let{pathname:c,search:d,hash:f}=r.location;return Lh("",{pathname:c,search:d,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:sl(o)}return PS(e,n,null,a)}function Kt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function wi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FS(){return Math.random().toString(36).substring(2,10)}function Cx(a,e){return{usr:a.state,key:a.key,idx:e}}function Lh(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Gs(e):e,state:n,key:e&&e.key||r||FS()}}function sl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function Gs(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function PS(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,d=o.history,f="POP",p=null,h=g();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function g(){return(d.state||{idx:null}).idx}function v(){f="POP";let S=g(),y=S==null?null:S-h;h=S,p&&p({action:f,location:T.location,delta:y})}function _(S,y){f="PUSH";let A=Lh(T.location,S,y);h=g()+1;let w=Cx(A,h),R=T.createHref(A);try{d.pushState(w,"",R)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;o.location.assign(R)}c&&p&&p({action:f,location:T.location,delta:1})}function b(S,y){f="REPLACE";let A=Lh(T.location,S,y);h=g();let w=Cx(A,h),R=T.createHref(A);d.replaceState(w,"",R),c&&p&&p({action:f,location:T.location,delta:0})}function M(S){return zS(S)}let T={get action(){return f},get location(){return a(o,d)},listen(S){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Rx,v),p=S,()=>{o.removeEventListener(Rx,v),p=null}},createHref(S){return e(o,S)},createURL:M,encodeLocation(S){let y=M(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:b,go(S){return d.go(S)}};return T}function zS(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Kt(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:sl(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function ev(a,e,n="/"){return IS(a,e,n,!1)}function IS(a,e,n,r){let o=typeof e=="string"?Gs(e):e,c=xa(o.pathname||"/",n);if(c==null)return null;let d=tv(a);BS(d);let f=null;for(let p=0;f==null&&p<d.length;++p){let h=ZS(c);f=YS(d[p],h,r)}return f}function tv(a,e=[],n=[],r=""){let o=(c,d,f)=>{let p={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};p.relativePath.startsWith("/")&&(Kt(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let h=pa([r,p.relativePath]),g=n.concat(p);c.children&&c.children.length>0&&(Kt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),tv(c.children,e,g,h)),!(c.path==null&&!c.index)&&e.push({path:h,score:WS(h,c.index),routesMeta:g})};return a.forEach((c,d)=>{var f;if(c.path===""||!((f=c.path)!=null&&f.includes("?")))o(c,d);else for(let p of nv(c.path))o(c,d,p)}),e}function nv(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let d=nv(r.join("/")),f=[];return f.push(...d.map(p=>p===""?c:[c,p].join("/"))),o&&f.push(...d),f.map(p=>a.startsWith("/")&&p===""?"/":p)}function BS(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:qS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var kS=/^:[\w-]+$/,jS=3,HS=2,GS=1,VS=10,XS=-2,Dx=a=>a==="*";function WS(a,e){let n=a.split("/"),r=n.length;return n.some(Dx)&&(r+=XS),e&&(r+=HS),n.filter(o=>!Dx(o)).reduce((o,c)=>o+(kS.test(c)?jS:c===""?GS:VS),r)}function qS(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function YS(a,e,n=!1){let{routesMeta:r}=a,o={},c="/",d=[];for(let f=0;f<r.length;++f){let p=r[f],h=f===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=_u({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},g),_=p.route;if(!v&&h&&n&&!r[r.length-1].route.index&&(v=_u({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),d.push({params:o,pathname:pa([c,v.pathname]),pathnameBase:eM(pa([c,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(c=pa([c,v.pathnameBase]))}return d}function _u(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=KS(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let c=o[0],d=c.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:r.reduce((h,{paramName:g,isOptional:v},_)=>{if(g==="*"){let M=f[_]||"";d=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const b=f[_];return v&&!b?h[g]=void 0:h[g]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:d,pattern:a}}function KS(a,e=!1,n=!0){wi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,f,p)=>(r.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function ZS(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function xa(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function $S(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?Gs(a):a;return{pathname:n?n.startsWith("/")?n:QS(n,e):e,search:tM(r),hash:nM(o)}}function QS(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Vf(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function JS(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ap(a){let e=JS(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function wp(a,e,n,r=!1){let o;typeof a=="string"?o=Gs(a):(o={...a},Kt(!o.pathname||!o.pathname.includes("?"),Vf("?","pathname","search",o)),Kt(!o.pathname||!o.pathname.includes("#"),Vf("#","pathname","hash",o)),Kt(!o.search||!o.search.includes("#"),Vf("#","search","hash",o)));let c=a===""||o.pathname==="",d=c?"/":o.pathname,f;if(d==null)f=n;else{let v=e.length-1;if(!r&&d.startsWith("..")){let _=d.split("/");for(;_[0]==="..";)_.shift(),v-=1;o.pathname=_.join("/")}f=v>=0?e[v]:"/"}let p=$S(o,f),h=d&&d!=="/"&&d.endsWith("/"),g=(c||d===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(h||g)&&(p.pathname+="/"),p}var pa=a=>a.join("/").replace(/\/\/+/g,"/"),eM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),tM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,nM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function iM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var iv=["POST","PUT","PATCH","DELETE"];new Set(iv);var aM=["GET",...iv];new Set(aM);var Vs=O.createContext(null);Vs.displayName="DataRouter";var Au=O.createContext(null);Au.displayName="DataRouterState";var av=O.createContext({isTransitioning:!1});av.displayName="ViewTransition";var rM=O.createContext(new Map);rM.displayName="Fetchers";var sM=O.createContext(null);sM.displayName="Await";var Ri=O.createContext(null);Ri.displayName="Navigation";var hl=O.createContext(null);hl.displayName="Location";var Ci=O.createContext({outlet:null,matches:[],isDataRoute:!1});Ci.displayName="Route";var Rp=O.createContext(null);Rp.displayName="RouteError";function oM(a,{relative:e}={}){Kt(Xs(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=O.useContext(Ri),{hash:o,pathname:c,search:d}=pl(a,{relative:e}),f=c;return n!=="/"&&(f=c==="/"?n:pa([n,c])),r.createHref({pathname:f,search:d,hash:o})}function Xs(){return O.useContext(hl)!=null}function or(){return Kt(Xs(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(hl).location}var rv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sv(a){O.useContext(Ri).static||O.useLayoutEffect(a)}function lr(){let{isDataRoute:a}=O.useContext(Ci);return a?yM():lM()}function lM(){Kt(Xs(),"useNavigate() may be used only in the context of a <Router> component.");let a=O.useContext(Vs),{basename:e,navigator:n}=O.useContext(Ri),{matches:r}=O.useContext(Ci),{pathname:o}=or(),c=JSON.stringify(Ap(r)),d=O.useRef(!1);return sv(()=>{d.current=!0}),O.useCallback((p,h={})=>{if(wi(d.current,rv),!d.current)return;if(typeof p=="number"){n.go(p);return}let g=wp(p,JSON.parse(c),o,h.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:pa([e,g.pathname])),(h.replace?n.replace:n.push)(g,h.state,h)},[e,n,c,o,a])}O.createContext(null);function cM(){let{matches:a}=O.useContext(Ci),e=a[a.length-1];return e?e.params:{}}function pl(a,{relative:e}={}){let{matches:n}=O.useContext(Ci),{pathname:r}=or(),o=JSON.stringify(Ap(n));return O.useMemo(()=>wp(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function uM(a,e){return ov(a,e)}function ov(a,e,n,r){var y;Kt(Xs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=O.useContext(Ri),{matches:c}=O.useContext(Ci),d=c[c.length-1],f=d?d.params:{},p=d?d.pathname:"/",h=d?d.pathnameBase:"/",g=d&&d.route;{let A=g&&g.path||"";lv(p,!g||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let v=or(),_;if(e){let A=typeof e=="string"?Gs(e):e;Kt(h==="/"||((y=A.pathname)==null?void 0:y.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${A.pathname}" was given in the \`location\` prop.`),_=A}else _=v;let b=_.pathname||"/",M=b;if(h!=="/"){let A=h.replace(/^\//,"").split("/");M="/"+b.replace(/^\//,"").split("/").slice(A.length).join("/")}let T=ev(a,{pathname:M});wi(g||T!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),wi(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=mM(T&&T.map(A=>Object.assign({},A,{params:Object.assign({},f,A.params),pathname:pa([h,o.encodeLocation?o.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?h:pa([h,o.encodeLocation?o.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),c,n,r);return e&&S?O.createElement(hl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},S):S}function dM(){let a=bM(),e=iM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:c},"ErrorBoundary")," or"," ",O.createElement("code",{style:c},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:o},n):null,d)}var fM=O.createElement(dM,null),hM=class extends O.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){console.error("React Router caught the following error during render",a,e)}render(){return this.state.error!==void 0?O.createElement(Ci.Provider,{value:this.props.routeContext},O.createElement(Rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function pM({routeContext:a,match:e,children:n}){let r=O.useContext(Vs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(Ci.Provider,{value:a},n)}function mM(a,e=[],n=null,r=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let o=a,c=n==null?void 0:n.errors;if(c!=null){let p=o.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);Kt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let d=!1,f=-1;if(n)for(let p=0;p<o.length;p++){let h=o[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(f=p),h.route.id){let{loaderData:g,errors:v}=n,_=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!v||v[h.route.id]===void 0);if(h.route.lazy||_){d=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,h,g)=>{let v,_=!1,b=null,M=null;n&&(v=c&&h.route.id?c[h.route.id]:void 0,b=h.route.errorElement||fM,d&&(f<0&&g===0?(lv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,M=null):f===g&&(_=!0,M=h.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),S=()=>{let y;return v?y=b:_?y=M:h.route.Component?y=O.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=p,O.createElement(pM,{match:h,routeContext:{outlet:p,matches:T,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?O.createElement(hM,{location:n.location,revalidation:n.revalidation,component:b,error:v,children:S(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):S()},null)}function Cp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gM(a){let e=O.useContext(Vs);return Kt(e,Cp(a)),e}function xM(a){let e=O.useContext(Au);return Kt(e,Cp(a)),e}function _M(a){let e=O.useContext(Ci);return Kt(e,Cp(a)),e}function Dp(a){let e=_M(a),n=e.matches[e.matches.length-1];return Kt(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function vM(){return Dp("useRouteId")}function bM(){var r;let a=O.useContext(Rp),e=xM("useRouteError"),n=Dp("useRouteError");return a!==void 0?a:(r=e.errors)==null?void 0:r[n]}function yM(){let{router:a}=gM("useNavigate"),e=Dp("useNavigate"),n=O.useRef(!1);return sv(()=>{n.current=!0}),O.useCallback(async(o,c={})=>{wi(n.current,rv),n.current&&(typeof o=="number"?a.navigate(o):await a.navigate(o,{fromRouteId:e,...c}))},[a,e])}var Lx={};function lv(a,e,n){!e&&!Lx[a]&&(Lx[a]=!0,wi(!1,n))}O.memo(SM);function SM({routes:a,future:e,state:n}){return ov(a,void 0,n,e)}function Xf({to:a,replace:e,state:n,relative:r}){Kt(Xs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=O.useContext(Ri);wi(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=O.useContext(Ci),{pathname:d}=or(),f=lr(),p=wp(a,Ap(c),d,r==="path"),h=JSON.stringify(p);return O.useEffect(()=>{f(JSON.parse(h),{replace:e,state:n,relative:r})},[f,h,r,e,n]),null}function Nh(a){Kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function MM({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:c=!1}){Kt(!Xs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),f=O.useMemo(()=>({basename:d,navigator:o,static:c,future:{}}),[d,o,c]);typeof n=="string"&&(n=Gs(n));let{pathname:p="/",search:h="",hash:g="",state:v=null,key:_="default"}=n,b=O.useMemo(()=>{let M=xa(p,d);return M==null?null:{location:{pathname:M,search:h,hash:g,state:v,key:_},navigationType:r}},[d,p,h,g,v,_,r]);return wi(b!=null,`<Router basename="${d}"> is not able to match the URL "${p}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:O.createElement(Ri.Provider,{value:f},O.createElement(hl.Provider,{children:e,value:b}))}function EM({children:a,location:e}){return uM(Uh(a),e)}function Uh(a,e=[]){let n=[];return O.Children.forEach(a,(r,o)=>{if(!O.isValidElement(r))return;let c=[...e,o];if(r.type===O.Fragment){n.push.apply(n,Uh(r.props.children,c));return}Kt(r.type===Nh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Uh(r.props.children,c)),n.push(d)}),n}var lu="get",cu="application/x-www-form-urlencoded";function wu(a){return a!=null&&typeof a.tagName=="string"}function TM(a){return wu(a)&&a.tagName.toLowerCase()==="button"}function AM(a){return wu(a)&&a.tagName.toLowerCase()==="form"}function wM(a){return wu(a)&&a.tagName.toLowerCase()==="input"}function RM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function CM(a,e){return a.button===0&&(!e||e==="_self")&&!RM(a)}var Dc=null;function DM(){if(Dc===null)try{new FormData(document.createElement("form"),0),Dc=!1}catch{Dc=!0}return Dc}var LM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wf(a){return a!=null&&!LM.has(a)?(wi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cu}"`),null):a}function NM(a,e){let n,r,o,c,d;if(AM(a)){let f=a.getAttribute("action");r=f?xa(f,e):null,n=a.getAttribute("method")||lu,o=Wf(a.getAttribute("enctype"))||cu,c=new FormData(a)}else if(TM(a)||wM(a)&&(a.type==="submit"||a.type==="image")){let f=a.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||f.getAttribute("action");if(r=p?xa(p,e):null,n=a.getAttribute("formmethod")||f.getAttribute("method")||lu,o=Wf(a.getAttribute("formenctype"))||Wf(f.getAttribute("enctype"))||cu,c=new FormData(f,a),!DM()){let{name:h,type:g,value:v}=a;if(g==="image"){let _=h?`${h}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else h&&c.append(h,v)}}else{if(wu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=lu,r=null,o=cu,d=a}return c&&o==="text/plain"&&(d=c,c=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:c,body:d}}function Lp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}async function UM(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function OM(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function FM(a,e,n){let r=await Promise.all(a.map(async o=>{let c=e.routes[o.route.id];if(c){let d=await UM(c,n);return d.links?d.links():[]}return[]}));return BM(r.flat(1).filter(OM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Nx(a,e,n,r,o,c){let d=(p,h)=>n[h]?p.route.id!==n[h].route.id:!0,f=(p,h)=>{var g;return n[h].pathname!==p.pathname||((g=n[h].route.path)==null?void 0:g.endsWith("*"))&&n[h].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,h)=>d(p,h)||f(p,h)):c==="data"?e.filter((p,h)=>{var v;let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(d(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function PM(a,e,{includeHydrateFallback:n}={}){return zM(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function zM(a){return[...new Set(a)]}function IM(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function BM(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let c=JSON.stringify(IM(o));return n.has(c)||(n.add(c),r.push({key:c,link:o})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var kM=new Set([100,101,204,205]);function jM(a,e){let n=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n.pathname==="/"?n.pathname="_root.data":e&&xa(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function cv(){let a=O.useContext(Vs);return Lp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function HM(){let a=O.useContext(Au);return Lp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Np=O.createContext(void 0);Np.displayName="FrameworkContext";function uv(){let a=O.useContext(Np);return Lp(a,"You must render this element inside a <HydratedRouter> element"),a}function GM(a,e){let n=O.useContext(Np),[r,o]=O.useState(!1),[c,d]=O.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=e,_=O.useRef(null);O.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let T=y=>{y.forEach(A=>{d(A.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[a]),O.useEffect(()=>{if(r){let T=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(T)}}},[r]);let b=()=>{o(!0)},M=()=>{o(!1),d(!1)};return n?a!=="intent"?[c,_,{}]:[c,_,{onFocus:Yo(f,b),onBlur:Yo(p,M),onMouseEnter:Yo(h,b),onMouseLeave:Yo(g,M),onTouchStart:Yo(v,b)}]:[!1,_,{}]}function Yo(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function VM({page:a,...e}){let{router:n}=cv(),r=O.useMemo(()=>ev(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?O.createElement(WM,{page:a,matches:r,...e}):null}function XM(a){let{manifest:e,routeModules:n}=uv(),[r,o]=O.useState([]);return O.useEffect(()=>{let c=!1;return FM(a,e,n).then(d=>{c||o(d)}),()=>{c=!0}},[a,e,n]),r}function WM({page:a,matches:e,...n}){let r=or(),{manifest:o,routeModules:c}=uv(),{basename:d}=cv(),{loaderData:f,matches:p}=HM(),h=O.useMemo(()=>Nx(a,e,p,o,r,"data"),[a,e,p,o,r]),g=O.useMemo(()=>Nx(a,e,p,o,r,"assets"),[a,e,p,o,r]),v=O.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let M=new Set,T=!1;if(e.forEach(y=>{var w;let A=o.routes[y.route.id];!A||!A.hasLoader||(!h.some(R=>R.route.id===y.route.id)&&y.route.id in f&&((w=c[y.route.id])!=null&&w.shouldRevalidate)||A.hasClientLoader?T=!0:M.add(y.route.id))}),M.size===0)return[];let S=jM(a,d);return T&&M.size>0&&S.searchParams.set("_routes",e.filter(y=>M.has(y.route.id)).map(y=>y.route.id).join(",")),[S.pathname+S.search]},[d,f,r,o,h,e,a,c]),_=O.useMemo(()=>PM(g,o),[g,o]),b=XM(g);return O.createElement(O.Fragment,null,v.map(M=>O.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),_.map(M=>O.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),b.map(({key:M,link:T})=>O.createElement("link",{key:M,...T})))}function qM(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var dv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{dv&&(window.__reactRouterVersion="7.6.2")}catch{}function YM({basename:a,children:e,window:n}){let r=O.useRef();r.current==null&&(r.current=OS({window:n,v5Compat:!0}));let o=r.current,[c,d]=O.useState({action:o.action,location:o.location}),f=O.useCallback(p=>{O.startTransition(()=>d(p))},[d]);return O.useLayoutEffect(()=>o.listen(f),[o,f]),O.createElement(MM,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:o})}var fv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hv=O.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:c,replace:d,state:f,target:p,to:h,preventScrollReset:g,viewTransition:v,..._},b){let{basename:M}=O.useContext(Ri),T=typeof h=="string"&&fv.test(h),S,y=!1;if(typeof h=="string"&&T&&(S=h,dv))try{let L=new URL(window.location.href),C=h.startsWith("//")?new URL(L.protocol+h):new URL(h),G=xa(C.pathname,M);C.origin===L.origin&&G!=null?h=G+C.search+C.hash:y=!0}catch{wi(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=oM(h,{relative:o}),[w,R,F]=GM(r,_),U=QM(h,{replace:d,state:f,target:p,preventScrollReset:g,relative:o,viewTransition:v});function I(L){e&&e(L),L.defaultPrevented||U(L)}let H=O.createElement("a",{..._,...F,href:S||A,onClick:y||c?e:I,ref:qM(b,R),target:p,"data-discover":!T&&n==="render"?"true":void 0});return w&&!T?O.createElement(O.Fragment,null,H,O.createElement(VM,{page:A})):H});hv.displayName="Link";var KM=O.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:c,to:d,viewTransition:f,children:p,...h},g){let v=pl(d,{relative:h.relative}),_=or(),b=O.useContext(Au),{navigator:M,basename:T}=O.useContext(Ri),S=b!=null&&i1(v)&&f===!0,y=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,A=_.pathname,w=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(A=A.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&T&&(w=xa(w,T)||w);const R=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let F=A===y||!o&&A.startsWith(y)&&A.charAt(R)==="/",U=w!=null&&(w===y||!o&&w.startsWith(y)&&w.charAt(y.length)==="/"),I={isActive:F,isPending:U,isTransitioning:S},H=F?e:void 0,L;typeof r=="function"?L=r(I):L=[r,F?"active":null,U?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(I):c;return O.createElement(hv,{...h,"aria-current":H,className:L,ref:g,style:C,to:d,viewTransition:f},typeof p=="function"?p(I):p)});KM.displayName="NavLink";var ZM=O.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:c,method:d=lu,action:f,onSubmit:p,relative:h,preventScrollReset:g,viewTransition:v,..._},b)=>{let M=t1(),T=n1(f,{relative:h}),S=d.toLowerCase()==="get"?"get":"post",y=typeof f=="string"&&fv.test(f),A=w=>{if(p&&p(w),w.defaultPrevented)return;w.preventDefault();let R=w.nativeEvent.submitter,F=(R==null?void 0:R.getAttribute("formmethod"))||d;M(R||w.currentTarget,{fetcherKey:e,method:F,navigate:n,replace:o,state:c,relative:h,preventScrollReset:g,viewTransition:v})};return O.createElement("form",{ref:b,method:S,action:T,onSubmit:r?p:A,..._,"data-discover":!y&&a==="render"?"true":void 0})});ZM.displayName="Form";function $M(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pv(a){let e=O.useContext(Vs);return Kt(e,$M(a)),e}function QM(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:c,viewTransition:d}={}){let f=lr(),p=or(),h=pl(a,{relative:c});return O.useCallback(g=>{if(CM(g,e)){g.preventDefault();let v=n!==void 0?n:sl(p)===sl(h);f(a,{replace:v,state:r,preventScrollReset:o,relative:c,viewTransition:d})}},[p,f,h,n,r,e,a,o,c,d])}var JM=0,e1=()=>`__${String(++JM)}__`;function t1(){let{router:a}=pv("useSubmit"),{basename:e}=O.useContext(Ri),n=vM();return O.useCallback(async(r,o={})=>{let{action:c,method:d,encType:f,formData:p,body:h}=NM(r,e);if(o.navigate===!1){let g=o.fetcherKey||e1();await a.fetch(g,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||d,formEncType:o.encType||f,flushSync:o.flushSync})}else await a.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||d,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[a,e,n])}function n1(a,{relative:e}={}){let{basename:n}=O.useContext(Ri),r=O.useContext(Ci);Kt(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...pl(a||".",{relative:e})},d=or();if(a==null){c.search=d.search;let f=new URLSearchParams(c.search),p=f.getAll("index");if(p.some(g=>g==="")){f.delete("index"),p.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();c.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:pa([n,c.pathname])),sl(c)}function i1(a,e={}){let n=O.useContext(av);Kt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=pv("useViewTransitionState"),o=pl(a,{relative:e.relative});if(!n.isTransitioning)return!1;let c=xa(n.currentLocation.pathname,r)||n.currentLocation.pathname,d=xa(n.nextLocation.pathname,r)||n.nextLocation.pathname;return _u(o.pathname,d)!=null||_u(o.pathname,c)!=null}[...kM];const vu=[{id:"intro",subject:"Training",from:"cybercrime@interpol.org",body:`Beste rekruut,

Je staat op het punt je eerste stap te zetten binnen het beveiligde Interpol-netwerk. Zoals je misschien al hebt gehoord, zijn er in de afgelopen weken meerdere sporen ontdekt die wijzen op een digitale inbraak op GLR servers.

Voordat je betrokken wordt bij het echte onderzoek, moet je aantonen dat je onze basis-tools kunt gebruiken.

In de terminal leer je navigeren door mappen, bestanden analyseren en data ophalen van externe bronnen. Deze vaardigheden heb je straks nodig om het spoor van de hacker te volgen.

Bekijk de instructievideo en doorloop daarna de opdrachten in de terminal.

Het echte werk begint sneller dan je denkt.

Succes.
Interpol Cybercrime Division`,trigger:"gameStart",startMail:!0,attachement:"https://www.youtube.com/watch?v=5XgBd6rjuDQ"},{id:"terminal_done",subject:"Dossier app geactiveerd",from:"cybercrime@interpol.org",body:`Uitstekend werk, rekruut.

De verdachtenlijst is succesvol gedownload en geverifieerd. Je toegang is uitgebreid: de Dossier-app is nu ontgrendeld.

In de komende fase analyseer je personen die mogelijk betrokken zijn bij de digitale inbraak. Ieder dossier bevat aanwijzingen, maar ook dwaalsporen. Blijf alert.

Naarmate je meer sporen oplost zullen er verdachten weggespeelt worden. Check dus regelmatig het dossier.

Open de Dossier-app wanneer je klaar bent voor je eerste onderzoek.`,trigger:"terminalDone"},{id:"dossier_done",subject:"•‿•",from:"h̴̗̬̚a̸̜̓͒c̴̠̯͂̇k̵̛̤͑e̸̦͑̓r̷̥̓̑",body:`Je hebt me gevonden… indrukwekkend.

Maar denk je echt dat je dichtbij bent?
Ik heb iets achtergelaten in de Editor-app.
Een klein cadeautje. Een test.

Als je slim genoeg bent, zie je wat erachter verscholen ligt.

Succes, “agent”.`,trigger:"dossierDone"},{id:"virus_downloaded_alert",from:"cybercrime@interpol.org",subject:"⚠️ Verdacht bestand",body:`Rekruut,

Er is zojuist een *verdacht bestand* gedetecteerd op jouw werkstation: virus.txt. Dit bestand is mogelijk aangemaakt door dezelfde persoon die het Interpol-netwerk probeert binnen te dringen.

Open het bestand uitsluitend in de veilige omgeving van de Editor-app. Maak hier een nieuw bestand aan en sla het op.

Onze forensische afdeling wacht op jouw analyse.`,trigger:"virusDownloaded"},{id:"final_report",from:"cybercrime@interpol.org",subject:"Training voltooid: Eindrapport",body:`Het onderzoek naar virus.txt is afgerond. Dankzij jouw analyse is het bestand geïsoleerd en vormt het geen risico meer voor het netwerk.

Je hebt inmiddels laten zien dat je:

• veilig bestanden kunt downloaden en onderzoeken  
• verdachteninformatie kunt analyseren  
• digitale sporen herkent en volgt  
• kwaadaardige bestanden kunt openen zonder het systeem te besmetten  

Nu is het tijd voor teamwork.

Wacht tot je klasgenoten hun training hebben afgerond en vorm een team. Kies een teamnaam, maak een foto en registreer jullie gegevens in het dashboard.

Vanaf dat moment begint het echte werk.`,trigger:"virusExecutionSimulated"}],mv="interpol.progress.v1";function gv(){try{const a=localStorage.getItem(mv);return a?JSON.parse(a):{}}catch{return{}}}function a1(a){localStorage.setItem(mv,JSON.stringify(a))}function r1(a,e=!0){const r={...gv(),[a]:e};return a1(r),r}const Ru=O.createContext(),s1=a=>{const e=vu.filter(n=>n.startMail);return Object.keys(a||{}).forEach(n=>{a[n]&&vu.filter(o=>o.trigger===n).forEach(o=>{e.some(c=>c.id===o.id)||e.push(o)})}),e},o1=({children:a})=>{const e=O.useMemo(()=>gv(),[]),n=O.useMemo(()=>s1(e),[e]),[r,o]=O.useState(n),[c,d]=O.useState(e),[f,p]=O.useState(n.length>0),[h,g]=O.useState(n.length>0&&n[n.length-1].subject||""),v=b=>{if(c&&c[b]){console.log(`unlockMail(${b}): al uitgevoerd, skip`);return}const M=vu.filter(S=>S.trigger===b);M.length>0&&(o(S=>{const y=[...S];return M.forEach(A=>{y.some(w=>w.id===A.id)||y.push(A)}),y}),g(M[M.length-1].subject||""),p(!0));const T=r1(b,!0);d(T)},_=b=>{if(!b)return;const M={id:Date.now(),...b};o(T=>[...T,M]),g(b.subject||""),p(!0)};return O.useEffect(()=>{const b=M=>{M.ctrlKey&&M.shiftKey&&M.key.toLowerCase()==="r"&&(localStorage.clear(),d({}),o(vu.filter(T=>T.startMail)),g(""),p(!1),alert("Voortgang gereset!"))};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[]),x.jsx(Ru.Provider,{value:{mails:r,progress:c,setProgress:d,unlockMail:v,addMail:_,showNotification:f,setShowNotification:p,lastMailSubject:h},children:a})},Os="https://api.heijden.sd-lab.nl";async function l1(a){const r=(a.headers.get("content-type")||"").includes("application/json")?await a.json().catch(()=>({})):await a.text().catch(()=>"");if(!a.ok){const o=typeof r=="string"?r:r.message||r.error||"Request failed";throw new Error(o||"Request failed")}return r}async function pn(a,e={}){const n=await fetch(`${Os}${a}`,{credentials:"include",...e,headers:{Accept:"application/json",...e.headers}});return l1(n)}function kr(a){return{body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}}function xv(a){const e=new FormData;return Object.entries(a).forEach(([n,r])=>{r!=null&&r!==""&&e.append(n,r)}),e}async function Ux(){return pn("/api/session")}async function c1({username:a,password:e}){return pn("/api/login",{method:"POST",...kr({gebruikersnaam:a,wachtwoord:e})})}async function u1(){return pn("/api/logout",{method:"POST"})}const _v=O.createContext(),d1=({children:a})=>{const[e,n]=O.useState(null),[r,o]=O.useState(!0);O.useEffect(()=>{Ux().then(f=>{n(f.user||null),o(!1)}).catch(()=>o(!1))},[]),O.useEffect(()=>{const f=setInterval(()=>{Ux().then(p=>{p.user||n(null)}).catch(()=>{n(null)})},3e5);return()=>clearInterval(f)},[]);const c=async(f,p)=>{const h=await c1({username:f,password:p});n(h.user)},d=async()=>{await u1(),n(null)};return x.jsx(_v.Provider,{value:{user:e,loading:r,login:c,logout:d},children:a})},cr=()=>O.useContext(_v);function f1({children:a,roles:e=[],teamProtected:n=!1}){const{user:r,loading:o}=cr(),c=cM();if(o)return x.jsx("div",{children:"Bezig met laden..."});if(!r)return x.jsx(Xf,{to:"/",replace:!0});if(e.length>0&&!e.includes(r.role))return x.jsx(Xf,{to:"/unauthorized",replace:!0});if(n&&r.role==="student"){const d=Number(c.teamId),f=Number(r.teamId);if(d!==f)return x.jsx(Xf,{to:"/unauthorized",replace:!0})}return a}const h1=[{id:1,title:"Kubuswoningen",hint:"Kantelende huizen die eruitzien als kubussen.",lat:51.9176,lng:4.4886,question:{type:"multiple",text:"Welke architect ontwierp de Kubuswoningen?",options:["Rem Koolhaas","Piet Blom","Ben van Berkel"],answer:"Piet Blom"}},{id:2,title:"Markthal",hint:"Een grote boog met een kleurrijk plafond.",lat:51.9207,lng:4.481,question:{type:"multiple",text:"Wat zie je op het plafond van de Markthal?",options:["Fruit en groente","Auto's","Mensen"],answer:"Fruit en groente"}},{id:3,title:"Station Blaak",hint:"Een station met een gebogen dak als een tunnel.",lat:51.9189,lng:4.4885,question:{type:"multiple",text:"Welk vervoermiddel stopt hier onder de grond?",options:["Metro","Vliegtuig","Boot"],answer:"Metro"}},{id:4,title:"Oude Haven",hint:"Oude boten en terrassen aan het water.",lat:51.9186,lng:4.4898,question:{type:"multiple",text:"Welke combinatie past het best bij deze plek?",options:["Schepen en terrassen","Treinen en perrons","Kassen en akkers"],answer:"Schepen en terrassen"}},{id:5,title:"Witte de Withstraat",hint:"Straat vol kunst en cafés.",lat:51.9147,lng:4.4796,question:{type:"multiple",text:"Wat zie je hier het meest?",options:["Street-art","Skiliften","Windmolens"],answer:"Street-art"}},{id:6,title:"Erasmusbrug",hint:"Een iconische brug die lijkt op een zwaan.",lat:51.909,lng:4.484,question:{type:"multiple",text:"Welke bijnaam heeft deze brug?",options:["De Zwaan","De Pijl","De Boog"],answer:"De Zwaan"}},{id:7,title:"Eindpunt - Interpol",hint:"Ga terug naar het Grafisch Lyceum.",lat:51.9163,lng:4.4818,question:{type:"end",text:"Voer de eindcode in"}}];function p1({messages:a,onSend:e,header:n}){const[r,o]=$t.useState(""),c=$t.useRef(null),d=f=>{f.preventDefault(),r.trim()&&(e(r),o(""))};return $t.useEffect(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[a]),x.jsxs("div",{className:"chat-ui",children:[n?x.jsx("div",{className:"chat-ui__header",children:n}):null,x.jsx("div",{className:"chat-ui__messages",ref:c,children:a.map((f,p)=>x.jsxs("article",{className:`chat-ui__message chat-ui__message--${f.sender}`,children:[x.jsx("div",{className:"chat-ui__message-label",children:f.sender==="hacker"?"Interpol":"Jij"}),x.jsx("div",{className:"chat-ui__message-body",children:f.text})]},p))}),x.jsxs("form",{className:"chat-ui__input",onSubmit:d,children:[x.jsx("input",{type:"text",value:r,onChange:f=>o(f.target.value),placeholder:"Typ je antwoord...",autoFocus:!0}),x.jsx("button",{type:"submit",children:"Verstuur"})]})]})}function Ox(a,e,n,r){function o(h){return h*Math.PI/180}const c=6371e3,d=o(n-a),f=o(r-e),p=Math.sin(d/2)**2+Math.cos(o(a))*Math.cos(o(n))*Math.sin(f/2)**2;return 2*c*Math.atan2(Math.sqrt(p),Math.sqrt(1-p))}function m1(a){const e=a.slice();for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e}function Lc(a){return typeof a!="number"?"onbekend":a.toFixed(6)}function qf(a){return typeof a!="number"?"onbekend":a>=1e3?`${(a/1e3).toFixed(2)} km`:`${Math.round(a)} m`}function g1(a){return typeof a!="number"?"onbekend":`${Math.round(a)} m`}function x1(a){return a?new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(a):"nog geen fix"}function _1(a,e){return`https://www.google.com/maps?q=${a},${e}`}const Ar=m1(h1),Fx=100;function v1(){const[a,e]=$t.useState(0),[n,r]=$t.useState(!0),[o,c]=$t.useState(""),[d,f]=$t.useState([{sender:"hacker",text:"Volg de coordinaten. Zodra je dichtbij bent, krijg je de vraag."}]),[p,h]=$t.useState(null),[g,v]=$t.useState(""),_=$t.useRef(!1),b=a<Ar.length?Ar[a]:null,M=$t.useMemo(()=>Ar.map((R,F)=>{const U=p?Ox(p.lat,p.lng,R.lat,R.lng):null;return{...R,index:F,distance:U,isActive:F===a}}),[a,p]),T=b&&p?Ox(p.lat,p.lng,b.lat,b.lng):null,S=$t.useMemo(()=>!M.length||!p?null:M.reduce((R,F)=>R===null||F.distance<R.distance?F:R,null),[M,p]);$t.useEffect(()=>{if(!("geolocation"in navigator)){v("Geolocatie wordt niet ondersteund op dit apparaat.");return}const R=navigator.geolocation.watchPosition(F=>{v(""),h({lat:F.coords.latitude,lng:F.coords.longitude,accuracy:F.coords.accuracy,timestamp:F.timestamp})},F=>{v(F.message||"Locatie ophalen mislukt.")},{enableHighAccuracy:!0,maximumAge:0,timeout:15e3});return()=>navigator.geolocation.clearWatch(R)},[]),$t.useEffect(()=>{if(a>=Ar.length)return;const R=Ar[a];f(F=>[...F,{sender:"hacker",text:R.hint}]),_.current=!1,a===Ar.length-1&&R.question.type==="end"&&(f(F=>[...F,{sender:"hacker",text:R.question.text}]),_.current=!0)},[a]),$t.useEffect(()=>{!p||!b||_.current||T<=Fx&&(f(R=>[...R,{sender:"hacker",text:b.question.type==="multiple"?`${b.question.text}
Opties: ${b.question.options.join(", ")}`:b.question.text}]),_.current=!0)},[b,T,p]);const y=R=>{if(!b)return;if(f(U=>[...U,{sender:"user",text:R}]),!_.current){f(U=>[...U,{sender:"hacker",text:"Je bent nog niet dichtbij genoeg."}]);return}if(b.question.type==="end"){e(U=>U+1);return}R.trim().toLowerCase()===b.question.answer.trim().toLowerCase()?(f(U=>[...U,{sender:"hacker",text:"✅ Correct!"}]),setTimeout(()=>{e(U=>U+1)},1e3)):f(U=>[...U,{sender:"hacker",text:"❌ Niet juist."}])},A=async R=>{const F=`${R.lat}, ${R.lng}`;try{await navigator.clipboard.writeText(F),c(`Coordinaten van ${R.title} gekopieerd.`)}catch{c(`Kopieren mislukt. Gebruik handmatig: ${F}`)}},w=x.jsxs("section",{className:"route-debugger",children:[x.jsx("button",{type:"button",className:"route-debugger__toggle",onClick:()=>r(R=>!R),children:n?"Verberg coordinate debugger":"Toon coordinate debugger"}),n?x.jsxs("div",{className:"route-debugger__panel",children:[x.jsxs("div",{className:"route-debugger__summary",children:[x.jsxs("div",{className:"route-debugger__card",children:[x.jsx("span",{className:"route-debugger__label",children:"Actieve stop"}),x.jsx("strong",{children:b?`${a+1}/${Ar.length} · ${b.title}`:"Route afgerond"}),x.jsxs("span",{children:["Trigger op ",Fx," m"]})]}),x.jsxs("div",{className:"route-debugger__card",children:[x.jsx("span",{className:"route-debugger__label",children:"Jouw GPS"}),x.jsx("strong",{children:p?`${Lc(p.lat)}, ${Lc(p.lng)}`:"Nog geen positie"}),x.jsxs("span",{children:["Nauwkeurigheid: ",g1(p==null?void 0:p.accuracy)]}),x.jsxs("span",{children:["Laatste update: ",x1(p==null?void 0:p.timestamp)]})]}),x.jsxs("div",{className:"route-debugger__card",children:[x.jsx("span",{className:"route-debugger__label",children:"Afstand"}),x.jsx("strong",{children:qf(T)}),x.jsxs("span",{children:["Dichtstbij: ",S?`${S.title} (${qf(S.distance)})`:"nog onbekend"]})]})]}),g?x.jsx("p",{className:"route-debugger__status route-debugger__status--error",children:g}):null,o?x.jsx("p",{className:"route-debugger__status route-debugger__status--info",children:o}):null,x.jsxs("div",{className:"route-debugger__route-note",children:["Routevolgorde in deze sessie:",x.jsx("strong",{children:" willekeurig geshuffeld"}),"."]}),x.jsx("div",{className:"route-debugger__list",children:M.map(R=>x.jsxs("article",{className:`route-debugger__item${R.isActive?" is-active":""}`,children:[x.jsxs("div",{className:"route-debugger__item-main",children:[x.jsxs("div",{className:"route-debugger__item-title",children:[x.jsxs("strong",{children:[R.index+1,". ",R.title]}),R.isActive?x.jsx("span",{className:"route-debugger__badge",children:"Actief"}):null,(S==null?void 0:S.id)===R.id?x.jsx("span",{className:"route-debugger__badge route-debugger__badge--muted",children:"Dichtstbij"}):null]}),x.jsxs("div",{className:"route-debugger__meta",children:[x.jsxs("span",{children:[Lc(R.lat),", ",Lc(R.lng)]}),x.jsxs("span",{children:["Afstand: ",qf(R.distance)]})]})]}),x.jsxs("div",{className:"route-debugger__actions",children:[x.jsx("button",{type:"button",className:"route-debugger__action",onClick:()=>A(R),children:"Kopieer"}),x.jsx("a",{className:"route-debugger__action route-debugger__action--link",href:_1(R.lat,R.lng),target:"_blank",rel:"noreferrer",children:"Open Maps"})]})]},R.id))})]}):null]});return x.jsx(p1,{messages:d,onSend:y,header:w})}const b1=()=>x.jsxs("div",{className:"creacod1-step2",children:[x.jsx("h1",{children:"Goed gedaan"}),x.jsx("p",{children:"Open de verborgen link op je telefoon. Vind en scan 4 posters. Iedere poster stuurt je naar de volgende poster. De 4e poster geeft het wachtwoord."}),x.jsx("input",{type:"text",placeholder:"Wachtwoord"}),x.jsx("button",{children:"Submit"}),x.jsx("a",{href:"{{hiddenLink}}",target:"_blank",rel:"noopener noreferrer",style:{display:"none"},children:"Verborgen link"})]}),y1=()=>x.jsxs("div",{className:"creacod1-step3",children:[x.jsx("h1",{children:"Step 3"}),x.jsx("p",{children:"This is step 3 of the creative coding puzzle."})]}),S1=()=>{const{login:a}=cr(),[e,n]=O.useState(""),[r,o]=O.useState(""),[c,d]=O.useState(""),f=lr();async function p(g){g.preventDefault(),d("");try{await a(e,r),f("/training")}catch(v){d(v.message||"Incorrect username or password.")}}const h=()=>{n(""),o("")};return x.jsx("div",{className:"page-container",children:x.jsxs("form",{className:"form",onSubmit:p,children:[x.jsx("div",{className:"form__title-bar",children:x.jsx("h2",{className:"form__title-text",children:"Connect to Server"})}),x.jsxs("div",{className:"form__content",children:[c&&x.jsxs("div",{className:"form__error",children:["⚠️ ",c]}),x.jsxs("div",{className:"form__group",children:[x.jsxs("label",{htmlFor:"username",children:[x.jsx("u",{children:"U"}),"ser name:"]}),x.jsx("input",{id:"username",type:"text",value:e,onChange:g=>n(g.target.value),required:!0})]}),x.jsxs("div",{className:"form__group",children:[x.jsxs("label",{htmlFor:"password",children:[x.jsx("u",{children:"P"}),"assword:"]}),x.jsx("input",{id:"password",type:"password",value:r,onChange:g=>o(g.target.value),required:!0})]}),x.jsxs("div",{className:"form__buttons",children:[x.jsx("button",{className:"form__button",type:"submit",children:"OK"}),x.jsx("button",{className:"form__button",type:"button",onClick:()=>h(),children:"Cancel"})]})]})]})})},M1=()=>{const{user:a,loading:e}=cr(),n=lr();return O.useEffect(()=>{e||a&&(a.teamId?n(`/dashboard/${a.teamId}`):n("/training"))},[a,e,n]),e?x.jsx("div",{children:"Even geduld..."}):x.jsx(S1,{})},vv=()=>{const{user:a}=cr();return!a||a.role!=="docent"?null:x.jsxs("a",{href:"/admin",className:"admin-icon desktop-icon",title:"Ga naar Admin Panel",children:[x.jsx("div",{className:"icon-image",children:x.jsx("img",{src:"/icons/admin.ico",className:"icon-img",alt:"Admin Icon"})}),x.jsx("div",{className:"icon-label",children:"Admin Panel"})]})};function E1({onFinished:a}){const e=O.useRef(null);return O.useEffect(()=>{const n=e.current,r=setTimeout(()=>{n.classList.add("hacker-skull--fade-out"),setTimeout(()=>a==null?void 0:a(),700)},3e3);return()=>clearTimeout(r)},[a]),x.jsxs("div",{ref:e,className:"hacker-skull-overlay",children:[x.jsx("div",{className:"glitch","data-text":"INTRUDER DETECTED",children:"INTRUDER DETECTED"}),x.jsx("div",{className:"glitch small","data-text":"ACCESS OVERRIDE",children:"ACCESS OVERRIDE"})]})}const T1=a=>a.replace(/\.(jpg|jpeg|png)$/i,"").replace(/-/g," "),Px=["Onverklaarbare stroomkostenstijging thuis — mogelijk mining-apparatuur.","Recent grote uitgaven in crypto-ruilplatformen, buiten salaris om.","Werkt vaak 's nachts (logs / toegangsdata tonen ongebruikelijke uren).","Heeft meerdere ongebruikte USB-apparaten en netwerkscans tonen verbinding met mining-pools.","Onverklaarbare transacties naar een externe wallet gelinkt aan mining-activiteiten.","Meldingen van netwerkbeheer over hoge CPU/GPU-belasting op werkstations.","Vreemd geconfigureerde software op machines (onbekende achtergrondprocessen)."];function A1(a){const e=a.split("").reduce((n,r)=>n+r.charCodeAt(0),0);return Px[e%Px.length]}let Ko=null;function w1(){if(Ko)return;const a=document.createElement("div");a.id="hacker-animation-root",a.style.position="fixed",a.style.top=0,a.style.left=0,a.style.width="100vw",a.style.height="100vh",a.style.zIndex=999999,a.style.pointerEvents="none",document.body.appendChild(a),Ko=J_.createRoot(a);const e=()=>{Ko.unmount(),a.remove(),Ko=null};Ko.render($t.createElement(E1,{onFinished:e}))}const R1=({label:a,icon:e,onDoubleClick:n,badge:r})=>{const o=e.endsWith(".ico")||e.endsWith(".png")||e.endsWith(".jpg");return x.jsxs("div",{className:"desktop-icon",onDoubleClick:n,tabIndex:0,children:[x.jsxs("div",{className:"icon-image",children:[o?x.jsx("img",{src:e,alt:a,className:"icon-img"}):x.jsx("span",{children:e}),r&&x.jsx("div",{className:"icon-badge",children:"!"})]}),x.jsx("div",{className:"icon-label",children:a})]})};function C1(a={x:200,y:100}){const[e,n]=O.useState(a),[r,o]=O.useState(!1),c=O.useRef({x:0,y:0}),d=O.useRef(null),f=O.useCallback(p=>{const h=d.current.getBoundingClientRect();c.current={x:p.clientX-h.left,y:p.clientY-h.top},o(!0)},[]);return O.useEffect(()=>{const p=g=>{r&&n({x:g.clientX-c.current.x,y:g.clientY-c.current.y})},h=()=>o(!1);return window.addEventListener("mousemove",p),window.addEventListener("mouseup",h),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",h)}},[r]),{elementRef:d,position:e,handleMouseDown:f}}const D1=({title:a,children:e,onClose:n,onClick:r,onMinimize:o,zIndex:c,isActive:d=!1,width:f=500,height:p=300})=>{const{elementRef:h,position:g,handleMouseDown:v}=C1({x:200,y:100});return x.jsxs("div",{ref:h,onMouseDown:r,className:`window ${d?"window--active":"window--inactive"}`,style:{left:g.x,top:g.y,width:f,height:p,zIndex:c},children:[x.jsxs("div",{className:"window__header",onMouseDown:v,children:[x.jsx("span",{className:"window__title",children:a}),x.jsxs("div",{className:"window__controls",children:[x.jsx("button",{type:"button","aria-label":"Minimize window",onClick:_=>{_.stopPropagation(),o()},children:"—"}),x.jsx("button",{type:"button","aria-label":"Close window",onClick:_=>{_.stopPropagation(),n()},children:"✕"})]})]}),x.jsx("div",{className:"window__content",children:e})]})};function L1({openWindows:a,bringToFront:e,openApp:n,menuApps:r=[]}){const o=lr(),{logout:c}=cr(),[d,f]=O.useState(!1),p=O.useRef(null);O.useEffect(()=>{const g=v=>{p.current&&!p.current.contains(v.target)&&f(!1)};return d?document.addEventListener("pointerdown",g):document.removeEventListener("pointerdown",g),()=>document.removeEventListener("pointerdown",g)},[d]);const h=async()=>{try{await c(),o("/")}catch(g){console.error("Logout mislukt:",g)}};return x.jsxs("div",{className:"taskbar",children:[x.jsx("button",{className:"taskbar__start","aria-haspopup":"true","aria-expanded":d,onClick:()=>f(g=>!g),children:"Start"}),d&&x.jsx("div",{className:"taskbar__menu",ref:p,role:"menu",children:x.jsxs("ul",{children:[r.map(g=>x.jsxs("li",{className:"taskbar__menu-item",onClick:()=>{n(g.key),f(!1)},children:[x.jsx("img",{src:g.icon,alt:"",className:"taskbar__menu-icon"}),g.label]},g.key)),x.jsx("hr",{className:"taskbar__separator"}),x.jsx("li",{className:"taskbar__menu-item taskbar__menu-item--logout",onClick:()=>{h(),f(!1)},children:"Log out"})]})}),x.jsx("div",{className:"taskbar__windows",children:a.map(g=>x.jsx("button",{className:`taskbar__window-button ${g.minimized?"":"taskbar__window-button--active"}`,onClick:()=>e(g.id),children:g.title},g.id))})]})}function bv({className:a,iconsClassName:e,icons:n,openWindows:r,openApp:o,bringToFront:c,closeWindow:d,minimizeWindow:f,renderWindowContent:p,menuApps:h,children:g,watermark:v}){return x.jsxs("div",{className:a,children:[x.jsx("div",{className:e,children:n.map(_=>x.jsx(R1,{label:_.label,icon:_.icon,badge:_.badge,onDoubleClick:()=>o(_.key)},_.key))}),r.filter(_=>!_.minimized).map(_=>x.jsx(D1,{title:_.title,zIndex:_.z,width:_.width,height:_.height,onClose:()=>d(_.id),onMinimize:()=>f(_.id),onClick:()=>c(_.id),children:p(_)},_.id)),g,x.jsx(L1,{openWindows:r,bringToFront:c,openApp:o,menuApps:h}),v?x.jsx("img",{src:v.src,className:v.className,alt:v.alt}):null]})}const N1=({show:a,subject:e,onClick:n})=>{const[r,o]=O.useState(!1),[c,d]=O.useState(!1),f=O.useRef(null);return O.useEffect(()=>(a?(clearTimeout(f.current),o(!0),d(!1)):r&&(d(!0),f.current=setTimeout(()=>{o(!1),d(!1)},300)),()=>clearTimeout(f.current)),[a,r]),r?x.jsxs("div",{className:`desktop-notification ${c?"desktop-notification--exit":"desktop-notification--enter"}`,onClick:n,role:"alert",children:[x.jsx("span",{children:"Nieuwe mail ontvangen"}),x.jsx("br",{}),x.jsx("strong",{children:e})]}):null};function Up(a,e){return a[e]??null}function yv(a,e,n,r="App niet gevonden"){const o=Up(a,e);return o!=null&&o.render?o.render(n):r}function Sv(a,e,n=()=>!0){return e.map(r=>Up(a,r)).filter(r=>r&&n(r)).map(r=>({key:r.key,label:r.menuLabel??r.desktopLabel??r.title,icon:r.icon}))}function Mv(a,e,{isVisible:n=()=>!0,getBadge:r=()=>!1}={}){return e.map(o=>Up(a,o)).filter(o=>o&&n(o)).map(o=>({key:o.key,label:o.desktopLabel??o.title,icon:o.icon,badge:r(o)}))}const zx={"/":["home"],"/home":["agent"],"/home/agent":["training"],"/home/agent/training":["readme.txt","instructions.sh"]},Ix={"/home/agent/training/readme.txt":`Goed bezig, agent.

Gebruik het commando in instructions.sh om de verdachtenlijst te downloaden.`,"/home/agent/training/instructions.sh":`#!/bin/bash
# Gebruik dit commando:
curl -o suspects.txt https://interpol.sd-lab.nl/api/suspects`};function Yt(a,e){a(e==="__CLEAR__"?[]:n=>[...n,e])}function U1(a,e){const n=[10,30,55,80,100];let r=0;const o=()=>{if(r>=n.length){Yt(a,"Download voltooid. Verdachtenlijst opgeslagen."),e("terminalDone");return}Yt(a,`Downloading... ${n[r]}%`),r++,setTimeout(o,450)};o()}function O1(a,e){const n=[{text:"Initializing analysis sandbox...",delay:600},{text:"Mounting read-only filesystem...",delay:700},{text:"Scanning file for indicators (static-only)...",delay:900},{text:"Extracting strings & metadata...",delay:900},{text:"Running signature heuristics (no execution)...",delay:1e3}];Yt(a,""),Yt(a,"*** SYSTEM NOTICE: executing analysis sandbox ***"),Yt(a,"Loading /downloads/virus.txt into isolated VM...");let r=0;const o=()=>{if(r>=n.length){Yt(a,"--- STATIC ANALYSIS SUMMARY ---"),Yt(a,"File: /downloads/virus.txt"),Yt(a,"Verdict: suspicious (contains obfuscated fragments)."),Yt(a,"Action: quarantined in analysis VM; no execution performed."),Yt(a,"Recommendation: continue manual forensic analysis in Notepad/Editor."),Yt(a,"*** ANALYSIS COMPLETE ***"),e("virusExecutionSimulated");return}Yt(a,n[r].text),setTimeout(o,n[r].delay),r++};setTimeout(o,200)}function F1({setLog:a,path:e,setPath:n,onStepComplete:r}){return{ls:()=>{const o=zx[e]||[];Yt(a,o.join("  "))},cd:o=>{if(!o)return Yt(a,"Gebruik: cd <map>");let c;o===".."?c=e.substring(0,e.lastIndexOf("/"))||"/":c=e==="/"?`/${o}`:`${e}/${o}`,zx[c]?n(c):Yt(a,`cd: map '${o}' bestaat niet`)},cat:o=>{if(!o)return Yt(a,"Gebruik: cat <bestand>");const c=e==="/"?`/${o}`:`${e}/${o}`;Ix[c]?Yt(a,Ix[c]):Yt(a,`cat: ${o}: Bestand niet gevonden`)},curl:(...o)=>{["curl",...o].join(" ").trim()==="curl -o suspects.txt https://interpol.sd-lab.nl/api/suspects"?(Yt(a,"Download gestart..."),U1(a,r)):Yt(a,"curl: onbekend of incorrect commando")},help:()=>{Yt(a,"Beschikbare commando’s: ls, cd, cat, curl, help, clear")},clear:()=>Yt(a,"__CLEAR__")}}const P1=({onStepComplete:a=()=>{},autoRunVirusSignal:e=null})=>{const[n,r]=O.useState(["Welkom, agent. Gebruik het terminal-commando 'help' voor een lijst met beschikbare commando's."]),[o,c]=O.useState(""),[d,f]=O.useState("/home/agent"),p=O.useRef(null),h=O.useRef(null);O.useEffect(()=>{p.current&&(p.current.scrollTop=p.current.scrollHeight)},[n]),O.useEffect(()=>{e&&h.current!==e&&(h.current=e,O1(r,a))},[e,a]);const g=_=>{const[b,...M]=_.trim().split(" "),T=F1({setLog:r,path:d,setPath:f,onStepComplete:a});T[b]?T[b](...M):Yt(r,`${b}: commando niet gevonden`)},v=_=>{_.preventDefault(),o.trim()&&(Yt(r,`$ ${o}`),g(o),c(""))};return x.jsxs("div",{className:"terminal-app",ref:p,"aria-live":"polite",children:[x.jsx("div",{className:"terminal-log",children:n.map((_,b)=>x.jsx("div",{className:"terminal-line",children:_},b))}),x.jsxs("form",{onSubmit:v,className:"terminal-input",children:[x.jsxs("span",{className:"prompt",children:[d,"$"]}),x.jsx("input",{type:"text",value:o,className:"terminal-textinput",onChange:_=>c(_.target.value),autoFocus:!0})]})]})},z1=()=>{const{mails:a}=O.useContext(Ru),[e,n]=O.useState(null);return O.useEffect(()=>{a&&a.length>0?n(a[a.length-1]):n(null)},[a]),x.jsxs("div",{className:"mail-app",children:[x.jsxs("aside",{className:"mail-app__sidebar",children:[(!a||a.length===0)&&x.jsx("div",{className:"mail-item mail-item--empty",children:"Geen berichten"}),a&&a.map(r=>x.jsxs("button",{type:"button",className:`mail-item ${e&&e.id===r.id?"mail-item--selected":""}`,onClick:()=>n(r),children:[x.jsx("strong",{className:"mail-item__subject",children:r.subject}),x.jsx("small",{className:"mail-item__from",children:r.from})]},r.id))]}),x.jsx("main",{className:"mail-app__body",children:e?x.jsxs(x.Fragment,{children:[x.jsxs("header",{className:"mail-app__header",children:[x.jsx("h3",{children:e.subject}),x.jsxs("p",{children:[x.jsx("strong",{children:"Van:"})," ",e.from]})]}),x.jsxs("section",{className:"mail-app__body-content",children:[x.jsx("p",{children:e.body||x.jsx("em",{children:"(Leeg bericht)"})}),e.attachment&&x.jsxs("div",{className:"mail-app__attachment",children:[x.jsx("strong",{children:"Bijlage:"}),x.jsx("br",{}),x.jsx("a",{href:e.attachment,target:"_blank",rel:"noopener noreferrer",children:e.attachment})]})]})]}):x.jsx("div",{className:"mail-app__empty",children:"Selecteer een bericht om te lezen."})})]})},I1="/assets/Abdeslam-Hakil-gjxt71cQ.jpeg",B1=Object.freeze(Object.defineProperty({__proto__:null,default:I1},Symbol.toStringTag,{value:"Module"})),k1="/assets/Amy-Marks-CQfqxNsK.jpeg",j1=Object.freeze(Object.defineProperty({__proto__:null,default:k1},Symbol.toStringTag,{value:"Module"})),H1="/assets/Arthur-Steijlen-C7P-q-JR.jpeg",G1=Object.freeze(Object.defineProperty({__proto__:null,default:H1},Symbol.toStringTag,{value:"Module"})),V1="/assets/Brian-Hokke-_g71v-rM.jpeg",X1=Object.freeze(Object.defineProperty({__proto__:null,default:V1},Symbol.toStringTag,{value:"Module"})),W1="/assets/Emily-Kornaat-B8qWW5u_.jpeg",q1=Object.freeze(Object.defineProperty({__proto__:null,default:W1},Symbol.toStringTag,{value:"Module"})),Y1="/assets/Floris-van-Dijk-BXvhPM69.jpeg",K1=Object.freeze(Object.defineProperty({__proto__:null,default:Y1},Symbol.toStringTag,{value:"Module"})),Z1="/assets/Henk-Bijlsma-CUs6UtQG.jpeg",$1=Object.freeze(Object.defineProperty({__proto__:null,default:Z1},Symbol.toStringTag,{value:"Module"})),Q1="/assets/Hilda-Uitvlught-DcK9LSl8.jpeg",J1=Object.freeze(Object.defineProperty({__proto__:null,default:Q1},Symbol.toStringTag,{value:"Module"})),eE="/assets/Jeff-van-der-Heijden-BhVYRTlw.jpeg",tE=Object.freeze(Object.defineProperty({__proto__:null,default:eE},Symbol.toStringTag,{value:"Module"})),nE="/assets/Judith-Pouwelse-Cgq-1yaX.jpeg",iE=Object.freeze(Object.defineProperty({__proto__:null,default:nE},Symbol.toStringTag,{value:"Module"})),aE="/assets/Maarten-Tacoma-B37I9t-b.jpeg",rE=Object.freeze(Object.defineProperty({__proto__:null,default:aE},Symbol.toStringTag,{value:"Module"})),sE="/assets/Melvin-Loos-CmTnUk6o.jpeg",oE=Object.freeze(Object.defineProperty({__proto__:null,default:sE},Symbol.toStringTag,{value:"Module"})),lE="/assets/Meredith-Wongsosetro-CXX-GX4R.jpeg",cE=Object.freeze(Object.defineProperty({__proto__:null,default:lE},Symbol.toStringTag,{value:"Module"})),uE="/assets/Michael-Fernandes-C40HQlK3.jpeg",dE=Object.freeze(Object.defineProperty({__proto__:null,default:uE},Symbol.toStringTag,{value:"Module"})),fE="/assets/Oskar-Maan-DxiE0rRv.jpeg",hE=Object.freeze(Object.defineProperty({__proto__:null,default:fE},Symbol.toStringTag,{value:"Module"})),pE="/assets/Ron-Segaar-CTeG4T8F.jpeg",mE=Object.freeze(Object.defineProperty({__proto__:null,default:pE},Symbol.toStringTag,{value:"Module"})),gE="/assets/Ruben-Baas-BNTdcCT3.jpeg",xE=Object.freeze(Object.defineProperty({__proto__:null,default:gE},Symbol.toStringTag,{value:"Module"})),_E="/assets/Saskia-Heijnsdijk-bQXmpzgV.jpeg",vE=Object.freeze(Object.defineProperty({__proto__:null,default:_E},Symbol.toStringTag,{value:"Module"})),bE="/assets/Soraya-Goldewijk-BKlyvBal.jpeg",yE=Object.freeze(Object.defineProperty({__proto__:null,default:bE},Symbol.toStringTag,{value:"Module"})),SE="/assets/Ward-Klomp-dS69eKtv.jpeg",ME=Object.freeze(Object.defineProperty({__proto__:null,default:SE},Symbol.toStringTag,{value:"Module"})),EE="/assets/Wouter-Visser-DiUjr_jW.jpg",TE=Object.freeze(Object.defineProperty({__proto__:null,default:EE},Symbol.toStringTag,{value:"Module"})),AE="/assets/Yorik-Geurts-DJ1bdvlG.jpeg",wE=Object.freeze(Object.defineProperty({__proto__:null,default:AE},Symbol.toStringTag,{value:"Module"})),RE=({dossier:a,onClose:e})=>{if(!a)return null;const n=A1(a.name),r={afdeling:"Informatica",laatstGezien:"2025-03-12 02:14",mogelijkeWallet:"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"};return x.jsxs("div",{className:"dossier-detail",role:"dialog","aria-modal":"true",children:[x.jsxs("div",{className:"dossier-detail__panel",children:[x.jsxs("div",{className:"dossier-detail__header",children:[x.jsx("h3",{className:"dossier-detail__title",children:a.name}),x.jsx("button",{className:"dossier-detail__close win95-button","aria-label":"Sluit",onClick:e,children:"✕"})]}),x.jsxs("div",{className:"dossier-detail__body",children:[x.jsx("div",{className:"dossier-detail__media",children:x.jsx("img",{src:a.img,alt:a.name})}),x.jsxs("div",{className:"dossier-detail__info",children:[x.jsxs("p",{children:[x.jsx("strong",{children:"Afdeling:"})," ",r.afdeling]}),x.jsxs("p",{children:[x.jsx("strong",{children:"Laatst gezien (netwerk):"})," ",r.laatstGezien]}),x.jsxs("p",{children:[x.jsx("strong",{children:"Bekende wallet:"})," ",r.mogelijkeWallet]}),x.jsx("h4",{children:"Waarom verdacht?"}),x.jsx("p",{className:"dossier-detail__motive",children:n})]})]})]}),x.jsx("div",{className:"dossier-detail__backdrop",onClick:e})]})},CE=({onStepComplete:a})=>{const[e,n]=O.useState(null),[r,o]=O.useState(!1),[c,d]=O.useState(null),p=Object.entries(Object.assign({"/src/assets/docenten/Abdeslam-Hakil.jpeg":B1,"/src/assets/docenten/Amy-Marks.jpeg":j1,"/src/assets/docenten/Arthur-Steijlen.jpeg":G1,"/src/assets/docenten/Brian-Hokke.jpeg":X1,"/src/assets/docenten/Emily-Kornaat.jpeg":q1,"/src/assets/docenten/Floris-van-Dijk.jpeg":K1,"/src/assets/docenten/Henk-Bijlsma.jpeg":$1,"/src/assets/docenten/Hilda-Uitvlught.jpeg":J1,"/src/assets/docenten/Jeff-van-der-Heijden.jpeg":tE,"/src/assets/docenten/Judith-Pouwelse.jpeg":iE,"/src/assets/docenten/Maarten-Tacoma.jpeg":rE,"/src/assets/docenten/Melvin-Loos.jpeg":oE,"/src/assets/docenten/Meredith-Wongsosetro.jpeg":cE,"/src/assets/docenten/Michael-Fernandes.jpeg":dE,"/src/assets/docenten/Oskar-Maan.jpeg":hE,"/src/assets/docenten/Ron-Segaar.jpeg":mE,"/src/assets/docenten/Ruben-Baas.jpeg":xE,"/src/assets/docenten/Saskia-Heijnsdijk.jpeg":vE,"/src/assets/docenten/Soraya-Goldewijk.jpeg":yE,"/src/assets/docenten/Ward-Klomp.jpeg":ME,"/src/assets/docenten/Wouter-Visser.jpg":TE,"/src/assets/docenten/Yorik-Geurts.jpeg":wE})).map(([_,b])=>{const M=_.split("/").pop();return{id:M,name:T1(M),img:b.default||_}}),h=["Hilda Uitvlught","Brian Hokke","Jeff van der Heijden"],g=_=>{d(_),o(!0)},v=()=>{o(!1),d(null)};return x.jsxs("div",{className:"dossier-app",children:[x.jsx("h2",{className:"dossier-app__header",children:"Verdachte docenten"}),x.jsx("div",{className:"dossier-app__content",children:x.jsxs("ul",{className:"dossier-app__list",children:[p.map(_=>{const b=h.includes(_.name),M=e===_.id;return x.jsxs("li",{className:`dossier-app__item ${M?"dossier-app__item--selected":""}`,onClick:()=>n(_.id),onDoubleClick:()=>g(_),role:"button",tabIndex:0,onKeyDown:T=>{(T.key==="Enter"||T.key===" ")&&g(_)},children:[x.jsx("img",{className:"dossier-app__item-image",src:_.img,alt:_.name}),x.jsx("span",{children:_.name}),b&&x.jsx("div",{className:"dossier-app__not-hacker","aria-hidden":!0,children:x.jsx("img",{src:"/svgs/cross.svg",alt:"Not the hacker"})})]},_.id)}),x.jsxs("li",{className:"dossier-app__item dossier-app__item--hacker",onDoubleClick:()=>a("dossierDone"),role:"button",tabIndex:0,onKeyDown:_=>{(_.key==="Enter"||_.key===" ")&&a("dossierDone")},children:[x.jsx("img",{className:"dossier-app__item-image",src:"/images/hacker.png",alt:"De hacker"}),x.jsx("span",{className:"glitched",children:"h̴̗̬̚a̸̜̓͒c̴̠̯͂̇k̵̛̤͑e̸̦͑̓r̷̥̓̑"})]})]})}),r&&c&&x.jsx(RE,{dossier:c,onClose:v})]})};function DE(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function Bx(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,r)}return n}function kx(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bx(Object(n),!0).forEach(function(r){DE(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):Bx(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function LE(a,e){if(a==null)return{};var n={},r=Object.keys(a),o,c;for(c=0;c<r.length;c++)o=r[c],!(e.indexOf(o)>=0)&&(n[o]=a[o]);return n}function NE(a,e){if(a==null)return{};var n=LE(a,e),r,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(o=0;o<c.length;o++)r=c[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}function UE(a,e){return OE(a)||FE(a,e)||PE(a,e)||zE()}function OE(a){if(Array.isArray(a))return a}function FE(a,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(a)))){var n=[],r=!0,o=!1,c=void 0;try{for(var d=a[Symbol.iterator](),f;!(r=(f=d.next()).done)&&(n.push(f.value),!(e&&n.length===e));r=!0);}catch(p){o=!0,c=p}finally{try{!r&&d.return!=null&&d.return()}finally{if(o)throw c}}return n}}function PE(a,e){if(a){if(typeof a=="string")return jx(a,e);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jx(a,e)}}function jx(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=a[n];return r}function zE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IE(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function Hx(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,r)}return n}function Gx(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hx(Object(n),!0).forEach(function(r){IE(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):Hx(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function BE(){for(var a=arguments.length,e=new Array(a),n=0;n<a;n++)e[n]=arguments[n];return function(r){return e.reduceRight(function(o,c){return c(o)},r)}}function il(a){return function e(){for(var n=this,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return o.length>=a.length?a.apply(this,o):function(){for(var d=arguments.length,f=new Array(d),p=0;p<d;p++)f[p]=arguments[p];return e.apply(n,[].concat(o,f))}}}function bu(a){return{}.toString.call(a).includes("Object")}function kE(a){return!Object.keys(a).length}function ol(a){return typeof a=="function"}function jE(a,e){return Object.prototype.hasOwnProperty.call(a,e)}function HE(a,e){return bu(e)||ir("changeType"),Object.keys(e).some(function(n){return!jE(a,n)})&&ir("changeField"),e}function GE(a){ol(a)||ir("selectorType")}function VE(a){ol(a)||bu(a)||ir("handlerType"),bu(a)&&Object.values(a).some(function(e){return!ol(e)})&&ir("handlersType")}function XE(a){a||ir("initialIsRequired"),bu(a)||ir("initialType"),kE(a)&&ir("initialContent")}function WE(a,e){throw new Error(a[e]||a.default)}var qE={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},ir=il(WE)(qE),Nc={changes:HE,selector:GE,handler:VE,initial:XE};function YE(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Nc.initial(a),Nc.handler(e);var n={current:a},r=il($E)(n,e),o=il(ZE)(n),c=il(Nc.changes)(a),d=il(KE)(n);function f(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(g){return g};return Nc.selector(h),h(n.current)}function p(h){BE(r,o,c,d)(h)}return[f,p]}function KE(a,e){return ol(e)?e(a.current):e}function ZE(a,e){return a.current=Gx(Gx({},a.current),e),e}function $E(a,e,n){return ol(e)?e(a.current):Object.keys(n).forEach(function(r){var o;return(o=e[r])===null||o===void 0?void 0:o.call(e,a.current[r])}),n}var QE={create:YE},JE={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function e3(a){return function e(){for(var n=this,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return o.length>=a.length?a.apply(this,o):function(){for(var d=arguments.length,f=new Array(d),p=0;p<d;p++)f[p]=arguments[p];return e.apply(n,[].concat(o,f))}}}function t3(a){return{}.toString.call(a).includes("Object")}function n3(a){return a||Vx("configIsRequired"),t3(a)||Vx("configType"),a.urls?(i3(),{paths:{vs:a.urls.monacoBase}}):a}function i3(){console.warn(Ev.deprecation)}function a3(a,e){throw new Error(a[e]||a.default)}var Ev={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Vx=e3(a3)(Ev),r3={config:n3},s3=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(c,d){return d(c)},o)}};function Tv(a,e){return Object.keys(e).forEach(function(n){e[n]instanceof Object&&a[n]&&Object.assign(e[n],Tv(a[n],e[n]))}),kx(kx({},a),e)}var o3={type:"cancelation",msg:"operation is manually canceled"};function Yf(a){var e=!1,n=new Promise(function(r,o){a.then(function(c){return e?o(o3):r(c)}),a.catch(o)});return n.cancel=function(){return e=!0},n}var l3=QE.create({config:JE,isInitialized:!1,resolve:null,reject:null,monaco:null}),Av=UE(l3,2),ml=Av[0],Cu=Av[1];function c3(a){var e=r3.config(a),n=e.monaco,r=NE(e,["monaco"]);Cu(function(o){return{config:Tv(o.config,r),monaco:n}})}function u3(){var a=ml(function(e){var n=e.monaco,r=e.isInitialized,o=e.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!a.isInitialized){if(Cu({isInitialized:!0}),a.monaco)return a.resolve(a.monaco),Yf(Kf);if(window.monaco&&window.monaco.editor)return wv(window.monaco),a.resolve(window.monaco),Yf(Kf);s3(d3,h3)(p3)}return Yf(Kf)}function d3(a){return document.body.appendChild(a)}function f3(a){var e=document.createElement("script");return a&&(e.src=a),e}function h3(a){var e=ml(function(r){var o=r.config,c=r.reject;return{config:o,reject:c}}),n=f3("".concat(e.config.paths.vs,"/loader.js"));return n.onload=function(){return a()},n.onerror=e.reject,n}function p3(){var a=ml(function(n){var r=n.config,o=n.resolve,c=n.reject;return{config:r,resolve:o,reject:c}}),e=window.require;e.config(a.config),e(["vs/editor/editor.main"],function(n){wv(n),a.resolve(n)},function(n){a.reject(n)})}function wv(a){ml().monaco||Cu({monaco:a})}function m3(){return ml(function(a){var e=a.monaco;return e})}var Kf=new Promise(function(a,e){return Cu({resolve:a,reject:e})}),Rv={config:c3,init:u3,__getMonacoInstance:m3},g3={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Zf=g3,x3={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},_3=x3;function v3({children:a}){return $t.createElement("div",{style:_3.container},a)}var b3=v3,y3=b3;function S3({width:a,height:e,isEditorReady:n,loading:r,_ref:o,className:c,wrapperProps:d}){return $t.createElement("section",{style:{...Zf.wrapper,width:a,height:e},...d},!n&&$t.createElement(y3,null,r),$t.createElement("div",{ref:o,style:{...Zf.fullWidth,...!n&&Zf.hide},className:c}))}var M3=S3,Cv=O.memo(M3);function E3(a){O.useEffect(a,[])}var Dv=E3;function T3(a,e,n=!0){let r=O.useRef(!0);O.useEffect(r.current||!n?()=>{r.current=!1}:a,e)}var ni=T3;function rl(){}function Fs(a,e,n,r){return A3(a,r)||w3(a,e,n,r)}function A3(a,e){return a.editor.getModel(Lv(a,e))}function w3(a,e,n,r){return a.editor.createModel(e,n,r?Lv(a,r):void 0)}function Lv(a,e){return a.Uri.parse(e)}function R3({original:a,modified:e,language:n,originalLanguage:r,modifiedLanguage:o,originalModelPath:c,modifiedModelPath:d,keepCurrentOriginalModel:f=!1,keepCurrentModifiedModel:p=!1,theme:h="light",loading:g="Loading...",options:v={},height:_="100%",width:b="100%",className:M,wrapperProps:T={},beforeMount:S=rl,onMount:y=rl}){let[A,w]=O.useState(!1),[R,F]=O.useState(!0),U=O.useRef(null),I=O.useRef(null),H=O.useRef(null),L=O.useRef(y),C=O.useRef(S),G=O.useRef(!1);Dv(()=>{let J=Rv.init();return J.then(B=>(I.current=B)&&F(!1)).catch(B=>(B==null?void 0:B.type)!=="cancelation"&&console.error("Monaco initialization: error:",B)),()=>U.current?he():J.cancel()}),ni(()=>{if(U.current&&I.current){let J=U.current.getOriginalEditor(),B=Fs(I.current,a||"",r||n||"text",c||"");B!==J.getModel()&&J.setModel(B)}},[c],A),ni(()=>{if(U.current&&I.current){let J=U.current.getModifiedEditor(),B=Fs(I.current,e||"",o||n||"text",d||"");B!==J.getModel()&&J.setModel(B)}},[d],A),ni(()=>{let J=U.current.getModifiedEditor();J.getOption(I.current.editor.EditorOption.readOnly)?J.setValue(e||""):e!==J.getValue()&&(J.executeEdits("",[{range:J.getModel().getFullModelRange(),text:e||"",forceMoveMarkers:!0}]),J.pushUndoStop())},[e],A),ni(()=>{var J,B;(B=(J=U.current)==null?void 0:J.getModel())==null||B.original.setValue(a||"")},[a],A),ni(()=>{let{original:J,modified:B}=U.current.getModel();I.current.editor.setModelLanguage(J,r||n||"text"),I.current.editor.setModelLanguage(B,o||n||"text")},[n,r,o],A),ni(()=>{var J;(J=I.current)==null||J.editor.setTheme(h)},[h],A),ni(()=>{var J;(J=U.current)==null||J.updateOptions(v)},[v],A);let ee=O.useCallback(()=>{var Y;if(!I.current)return;C.current(I.current);let J=Fs(I.current,a||"",r||n||"text",c||""),B=Fs(I.current,e||"",o||n||"text",d||"");(Y=U.current)==null||Y.setModel({original:J,modified:B})},[n,e,o,a,r,c,d]),ce=O.useCallback(()=>{var J;!G.current&&H.current&&(U.current=I.current.editor.createDiffEditor(H.current,{automaticLayout:!0,...v}),ee(),(J=I.current)==null||J.editor.setTheme(h),w(!0),G.current=!0)},[v,h,ee]);O.useEffect(()=>{A&&L.current(U.current,I.current)},[A]),O.useEffect(()=>{!R&&!A&&ce()},[R,A,ce]);function he(){var B,Y,K,ve;let J=(B=U.current)==null?void 0:B.getModel();f||((Y=J==null?void 0:J.original)==null||Y.dispose()),p||((K=J==null?void 0:J.modified)==null||K.dispose()),(ve=U.current)==null||ve.dispose()}return $t.createElement(Cv,{width:b,height:_,isEditorReady:A,loading:g,_ref:H,className:M,wrapperProps:T})}var C3=R3;O.memo(C3);function D3(a){let e=O.useRef();return O.useEffect(()=>{e.current=a},[a]),e.current}var L3=D3,Uc=new Map;function N3({defaultValue:a,defaultLanguage:e,defaultPath:n,value:r,language:o,path:c,theme:d="light",line:f,loading:p="Loading...",options:h={},overrideServices:g={},saveViewState:v=!0,keepCurrentModel:_=!1,width:b="100%",height:M="100%",className:T,wrapperProps:S={},beforeMount:y=rl,onMount:A=rl,onChange:w,onValidate:R=rl}){let[F,U]=O.useState(!1),[I,H]=O.useState(!0),L=O.useRef(null),C=O.useRef(null),G=O.useRef(null),ee=O.useRef(A),ce=O.useRef(y),he=O.useRef(),J=O.useRef(r),B=L3(c),Y=O.useRef(!1),K=O.useRef(!1);Dv(()=>{let q=Rv.init();return q.then(fe=>(L.current=fe)&&H(!1)).catch(fe=>(fe==null?void 0:fe.type)!=="cancelation"&&console.error("Monaco initialization: error:",fe)),()=>C.current?z():q.cancel()}),ni(()=>{var fe,xe,Ce,Ie;let q=Fs(L.current,a||r||"",e||o||"",c||n||"");q!==((fe=C.current)==null?void 0:fe.getModel())&&(v&&Uc.set(B,(xe=C.current)==null?void 0:xe.saveViewState()),(Ce=C.current)==null||Ce.setModel(q),v&&((Ie=C.current)==null||Ie.restoreViewState(Uc.get(c))))},[c],F),ni(()=>{var q;(q=C.current)==null||q.updateOptions(h)},[h],F),ni(()=>{!C.current||r===void 0||(C.current.getOption(L.current.editor.EditorOption.readOnly)?C.current.setValue(r):r!==C.current.getValue()&&(K.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),C.current.pushUndoStop(),K.current=!1))},[r],F),ni(()=>{var fe,xe;let q=(fe=C.current)==null?void 0:fe.getModel();q&&o&&((xe=L.current)==null||xe.editor.setModelLanguage(q,o))},[o],F),ni(()=>{var q;f!==void 0&&((q=C.current)==null||q.revealLine(f))},[f],F),ni(()=>{var q;(q=L.current)==null||q.editor.setTheme(d)},[d],F);let ve=O.useCallback(()=>{var q;if(!(!G.current||!L.current)&&!Y.current){ce.current(L.current);let fe=c||n,xe=Fs(L.current,r||a||"",e||o||"",fe||"");C.current=(q=L.current)==null?void 0:q.editor.create(G.current,{model:xe,automaticLayout:!0,...h},g),v&&C.current.restoreViewState(Uc.get(fe)),L.current.editor.setTheme(d),f!==void 0&&C.current.revealLine(f),U(!0),Y.current=!0}},[a,e,n,r,o,c,h,g,v,d,f]);O.useEffect(()=>{F&&ee.current(C.current,L.current)},[F]),O.useEffect(()=>{!I&&!F&&ve()},[I,F,ve]),J.current=r,O.useEffect(()=>{var q,fe;F&&w&&((q=he.current)==null||q.dispose(),he.current=(fe=C.current)==null?void 0:fe.onDidChangeModelContent(xe=>{K.current||w(C.current.getValue(),xe)}))},[F,w]),O.useEffect(()=>{if(F){let q=L.current.editor.onDidChangeMarkers(fe=>{var Ce;let xe=(Ce=C.current.getModel())==null?void 0:Ce.uri;if(xe&&fe.find(Ie=>Ie.path===xe.path)){let Ie=L.current.editor.getModelMarkers({resource:xe});R==null||R(Ie)}});return()=>{q==null||q.dispose()}}return()=>{}},[F,R]);function z(){var q,fe;(q=he.current)==null||q.dispose(),_?v&&Uc.set(c,C.current.saveViewState()):(fe=C.current.getModel())==null||fe.dispose(),C.current.dispose()}return $t.createElement(Cv,{width:b,height:M,isEditorReady:F,loading:p,_ref:G,className:T,wrapperProps:S})}var U3=N3,O3=O.memo(U3),Nv=O3;function F3(){try{const a=`${window.location.origin}/training?download-file=true`;return btoa(a)}catch{return""}}function Xx(a,e){try{const n=localStorage.getItem(e);if(n)return JSON.parse(n)}catch{console.warn("Kon bestanden niet laden uit localStorage")}return{...a}}function Wx(a,e){try{localStorage.setItem(e,JSON.stringify(a))}catch(n){console.error("Opslaan naar localStorage mislukt:",n)}}const qx={"HACKER_NOTE.md":`Volgende stap? Open het bestand **clue.txt.enc** en vind hoe je dit kunt **decoderen**.

Een handig startpunt:
< base 64 decode >`,"clue.txt.enc":F3()},Oc="editorApp.files.v1",Yx="editorApp.active.v1",P3=()=>{const{unlockMail:a}=O.useContext(Ru),[e,n]=O.useState(()=>Xx(qx,Oc)),[r,o]=O.useState(()=>localStorage.getItem(Yx)||Object.keys(Xx(qx,Oc))[0]),[c,d]=O.useState("idle"),f=O.useRef(null),p=O.useCallback(b=>{d(b),clearTimeout(f.current),b!=="idle"&&(f.current=setTimeout(()=>d("idle"),1400))},[]),h=()=>{const b="virus.txt",M={...e,[b]:""};n(M),o(b)},g=O.useCallback(async()=>{Wx(e,Oc),p("saved");try{const b=await fetch("/downloads/virus.txt");if(!b.ok)return console.error("Kon virus.txt niet ophalen:",b.status);const M=(await b.text()).trim();(e[r]??"").trim()===M&&(a==null||a("virusAnalyzed"),p("match"))}catch(b){console.error("Fout bij vergelijken virus.txt:",b)}},[e,r,p,a]);O.useEffect(()=>{Wx(e,Oc)},[e]),O.useEffect(()=>{localStorage.setItem(Yx,r)},[r]),O.useEffect(()=>{const b=M=>{var S,y;const T=((y=(S=M.key)==null?void 0:S.toLowerCase)==null?void 0:y.call(S))||"";(M.ctrlKey||M.metaKey)&&T==="s"&&(M.preventDefault(),g())};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[g]);const v=e[r]??"",_=b=>{n(M=>({...M,[r]:b}))};return x.jsxs("div",{className:"editor-app",children:[x.jsxs("aside",{className:"editor-app__sidebar",children:[x.jsxs("div",{className:"editor-app__sidebar-header",children:["Bestanden",x.jsx("button",{className:"win95-button small-new-btn",title:"Nieuw bestand",onClick:h,children:"+ New"})]}),x.jsx("ul",{className:"editor-app__filelist",children:Object.keys(e).map(b=>x.jsx("li",{className:`editor-app__file ${b===r?"is-active":""}`,role:"button",tabIndex:0,onClick:()=>o(b),onKeyDown:M=>{(M.key==="Enter"||M.key===" ")&&o(b)},title:b,children:b},b))})]}),x.jsxs("section",{className:"editor-app__main",children:[x.jsxs("div",{className:"editor-app__toolbar",children:[x.jsx("span",{className:"editor-app__filename",children:r}),c==="saved"&&x.jsx("span",{className:"status saved",children:"Saved ✓"}),c==="match"&&x.jsx("span",{className:"status match",children:"Match gevonden ✓"}),x.jsx("span",{className:"editor-app__tip",children:"Tip: Cmd/Ctrl + S om op te slaan"})]}),x.jsx("div",{className:"editor-app__editor",children:x.jsx(Nv,{path:r,value:v,onChange:b=>_(b??""),language:"plaintext",theme:"vs-dark",options:{fontSize:14,minimap:{enabled:!0},wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,fontLigatures:!0},keepCurrentModel:!0,loading:x.jsx("div",{className:"editor-app__loading",children:"Editor aan het laden…"})})})]})]})};async function Uv(a,e){const n=a.current,r=e.current;if(!n||!r)return null;n.readyState<2&&await new Promise(f=>{const p=()=>{n.removeEventListener("loadeddata",p),f()};n.addEventListener("loadeddata",p)});const o=n.videoWidth||640,c=n.videoHeight||480;return r.width=o,r.height=c,r.getContext("2d").drawImage(n,0,0,o,c),r.toDataURL("image/png")}async function z3(a,e,n,r){return pn("/api/groups",{method:"POST",...kr({teamPhoto:a,members:e,teamName:n,className:r})})}async function I3(a){return pn(`/api/groups/${a}`)}async function B3(){return(await pn("/api/leaderboard")).groups||[]}async function k3(){return(await pn("/api/admin/groups")).groups||[]}async function j3({teamPhoto:a,teamName:e,className:n,members:r}){return pn("/api/admin/groups",{method:"POST",...kr({teamPhoto:a,teamName:e,className:n,members:r})})}async function Ov(a,{name:e,className:n,image_url:r}){return pn(`/api/admin/groups/${a}`,{method:"PUT",...kr({name:e,className:n,image_url:r})})}async function H3(a){return pn(`/api/admin/groups/${a}`,{method:"DELETE"})}async function G3(a,{name:e,student_number:n}){return pn(`/api/admin/groups/${a}/members`,{method:"POST",...kr({name:e,student_number:n})})}async function V3(a,e,{name:n,student_number:r}){return pn(`/api/admin/groups/${a}/members/${e}`,{method:"PUT",...kr({name:n,student_number:r})})}async function X3(a,e){return pn(`/api/admin/groups/${a}/members/${e}`,{method:"DELETE"})}const W3=()=>{const[a,e]=O.useState(null),[n,r]=O.useState([{name:"",number:""},{name:"",number:""},{name:"",number:""}]),[o,c]=O.useState(""),[d,f]=O.useState(""),[p,h]=O.useState(""),[g,v]=O.useState(!1),_=O.useRef(null),b=O.useRef(null),M=O.useRef(null),T=lr();O.useEffect(()=>{let U=!1;async function I(){try{const H=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1});if(U){H.getTracks().forEach(L=>L.stop());return}M.current=H,_.current&&(_.current.srcObject=H,_.current.muted=!0,_.current.playsInline=!0,await new Promise(L=>{_.current.onloadedmetadata=L}),await _.current.play().catch(()=>{}))}catch(H){console.error("Camera toegang geweigerd:",H),h("Camera niet beschikbaar. Controleer toestemming.")}}return I(),()=>{U=!0,M.current&&M.current.getTracks().forEach(H=>H.stop())}},[]);const S=async()=>{h("");const U=await Uv(_,b);e(U)},y=()=>{if(n.length>=5)return h("Maximaal 5 studenten per team.");h(""),r([...n,{name:"",number:""}])},A=U=>{if(n.length<=3)return h("Minimaal 3 studenten vereist.");h(""),r(n.filter((I,H)=>H!==U))},w=(U,I,H)=>{const L=[...n];L[U][I]=H,r(L)},R=U=>/^[0-9]{4,6}$/.test(U),F=async U=>{if(U.preventDefault(),h(""),!a)return h("Maak eerst een teamfoto.");if(n.length<3)return h("Minimaal 3 studenten vereist.");if(n.length>5)return h("Maximaal 5 studenten toegestaan.");if(!o.trim())return h("Vul een teamnaam in.");if(!d.trim())return h("Vul een klas in.");for(const I of n){if(!I.name.trim()||!I.number.trim())return h("Vul voor elke student naam en studentnummer in.");if(!R(I.number.trim()))return h("Studentnummer moet 4-6 cijfers zijn.")}try{v(!0);const I=await z3(a,n,o,d);T(`/dashboard/${I.id}`)}catch(I){console.error(I),h("Kon team niet opslaan. Probeer opnieuw.")}finally{v(!1)}};return x.jsxs("div",{className:"new-team",children:[x.jsxs("div",{className:"new-team__photo-section",children:[x.jsx("video",{ref:_,autoPlay:!0,playsInline:!0,className:`new-team__video ${a?"is-hidden":""}`}),x.jsx("img",{src:a||"",alt:"Teamfoto",className:`new-team__photo ${a?"":"is-hidden"}`}),x.jsx("canvas",{ref:b,className:"new-team__canvas"})]}),x.jsxs("div",{className:"new-team__content",children:[x.jsx("button",{type:"button",onClick:S,className:"new-team__btn new-team__btn--photo",children:a?"Nieuwe foto maken":"Maak teamfoto"}),x.jsxs("form",{onSubmit:F,className:"new-team__form",children:[x.jsx("div",{className:"new-team__input-row",children:x.jsx("input",{type:"text",placeholder:"Teamnaam (verzin iets leuks!)",value:o,onChange:U=>c(U.target.value)})}),x.jsx("div",{className:"new-team__input-row",children:x.jsx("input",{type:"text",placeholder:"Klas (bijv. D1A)",value:d,onChange:U=>f(U.target.value)})}),n.map((U,I)=>x.jsxs("div",{className:"new-team__member-row",children:[x.jsx("input",{type:"text",placeholder:"Naam",value:U.name,onChange:H=>w(I,"name",H.target.value)}),x.jsx("input",{type:"text",placeholder:"Studentnummer",value:U.number,onChange:H=>w(I,"number",H.target.value)}),n.length>3&&x.jsx("button",{type:"button",className:"new-team__btn new-team__btn--remove",onClick:()=>A(I),children:"✕"})]},I)),n.length<5&&x.jsx("button",{type:"button",className:"new-team__btn new-team__btn--add",onClick:y,children:"+ Voeg student toe"}),p&&x.jsx("div",{className:"new-team__error",children:p}),g&&x.jsx("div",{className:"new-team__error",children:"Bezig met opslaan..."}),x.jsx("button",{type:"submit",className:"new-team__btn new-team__btn--submit",disabled:g,children:g?"Opslaan...":"Team bevestigen"})]})]})]})},uu={terminal:{key:"terminal",title:"MS-DOS Prompt",desktopLabel:"Terminal",icon:"/icons/terminal.ico",width:520,height:340,render:({puzzleStep:a,setPuzzleStep:e,handleStepComplete:n,autoRunVirusSignal:r})=>x.jsx(P1,{step:a,setStep:e,onStepComplete:n,autoRunVirusSignal:r})},mail:{key:"mail",title:"Inbox - E-mail Client",desktopLabel:"E-mail",menuLabel:"E-mail",icon:"/icons/email.ico",width:680,height:500,render:()=>x.jsx(z1,{})},dossier:{key:"dossier",title:"Dossier Viewer",desktopLabel:"Dossiers",icon:"/icons/documents.ico",width:600,height:480,render:({openTrainingApp:a,handleStepComplete:e})=>x.jsx(CE,{openApp:a,onStepComplete:e})},editor:{key:"editor",title:"Notepad",desktopLabel:"Editor",icon:"/icons/notepad.ico",width:900,height:500,render:()=>x.jsx(P3,{})},newteam:{key:"newteam",title:"Nieuw Team",desktopLabel:"Nieuw Team",icon:"/icons/team.ico",width:480,height:680,render:()=>x.jsx(W3,{onSubmit:a=>{console.log("Team aangemaakt:",a)}})}},Fv=["terminal","mail","dossier","editor","newteam"],q3={dossier:a=>!!a.terminalDone,editor:a=>!!a.dossierDone,newteam:a=>!!a.virusExecutionSimulated};function Y3(a={}){return Sv(uu,Fv,e=>{const n=q3[e.key];return n?n(a):!0})}let Kx=0;const K3=(a="win")=>(Kx+=1,`${a}-${Date.now()}-${Kx}`),Z3=(a,e,n)=>({id:K3(a),app:a,title:e.title??"Application",z:n,width:e.width??600,height:e.height??480,minimized:!1}),$3=(a,e)=>Math.max(0,a-e),Q3=async a=>{const e=new URLSearchParams(window.location.search);if(!(e.get("download-file")==="true"||e.get("downloadfile")==="true"))return;const r=new URL(window.location.href);r.searchParams.delete("download-file"),r.searchParams.delete("downloadfile"),window.history.replaceState({},document.title,r.toString());try{const o=await fetch("/downloads/virus.txt");if(!o.ok){console.error("Download mislukt:",o.status);return}const c=await o.blob(),d=URL.createObjectURL(c),f=document.createElement("a");f.href=d,f.download="virus.txt",document.body.appendChild(f),f.click(),f.remove(),URL.revokeObjectURL(d),a==null||a("virusDownloaded")}catch(o){console.error("Download mislukt:",o)}};function Pv(){const[a,e]=O.useState([]),n=O.useRef(1),r=O.useCallback(()=>(n.current+=1,n.current),[]),o=O.useCallback((p,h)=>{if(!h)return;const g=r();e(v=>v.find(b=>b.app===p)?v.map(b=>b.app===p?{...b,minimized:!1,z:g}:b):[...v,Z3(p,h,g)])},[r]),c=O.useCallback(p=>{const h=r();e(g=>g.map(v=>v.id===p?{...v,minimized:!1,z:h}:v))},[r]),d=O.useCallback(p=>{e(h=>h.filter(g=>g.id!==p))},[]),f=O.useCallback(p=>{e(h=>h.map(g=>g.id===p?{...g,minimized:!0}:g))},[]);return{openWindows:a,setOpenWindows:e,openApp:o,bringToFront:c,closeWindow:d,minimizeWindow:f}}const J3=()=>{const{mails:a,showNotification:e,setShowNotification:n,lastMailSubject:r,unlockMail:o,progress:c}=O.useContext(Ru),{openWindows:d,openApp:f,bringToFront:p,closeWindow:h,minimizeWindow:g}=Pv(),[v,_]=O.useState(0),[b,M]=O.useState(0),[T,S]=O.useState(()=>!!c.terminalDone),[y,A]=O.useState(()=>!!c.dossierDone),[w,R]=O.useState(()=>!!c.virusExecutionSimulated),[F,U]=O.useState(null),I=O.useRef(!1),H=O.useRef(0);O.useEffect(()=>{const B=$3(a.length,H.current);B>0&&_(Y=>Y+B),H.current=a.length},[a]),O.useEffect(()=>{c.terminalDone&&S(!0),c.dossierDone&&A(!0),c.virusExecutionSimulated&&R(!0)},[c]),O.useEffect(()=>{c!=null&&c.virusAnalyzed&&(L("terminal"),I.current||(U(Date.now()),I.current=!0))},[c==null?void 0:c.virusAnalyzed]),O.useEffect(()=>{(async()=>await Q3(o))()},[]);const L=B=>{const Y=uu[B];Y&&(f(B,Y),B==="mail"&&(_(0),n(!1)))},C=B=>{p(B);const Y=d.find(K=>K.id===B);(Y==null?void 0:Y.app)==="mail"&&(n(!1),_(0))},G=B=>yv(uu,B,{puzzleStep:b,setPuzzleStep:M,handleStepComplete:ee,autoRunVirusSignal:F,openTrainingApp:L});function ee(B){B==="terminalDone"&&!T&&(S(!0),o==null||o(B)),B==="dossierDone"&&!y&&(w1(),A(!0),o==null||o(B)),B==="virusExecutionSimulated"&&!w&&(R(!0),o==null||o(B))}const ce={terminalDone:(c==null?void 0:c.terminalDone)||T,dossierDone:(c==null?void 0:c.dossierDone)||y,virusExecutionSimulated:(c==null?void 0:c.virusExecutionSimulated)||w},he=Y3(ce),J=Mv(uu,Fv,{isVisible:B=>he.some(Y=>Y.key===B.key),getBadge:B=>B.key==="mail"&&v>0});return x.jsx(bv,{className:"desktop-environment",iconsClassName:"desktop-icons",icons:J,openWindows:d,openApp:L,bringToFront:C,closeWindow:h,minimizeWindow:g,renderWindowContent:B=>G(B.app),menuApps:he,watermark:{src:"/svgs/interpol-logo.svg",className:"desktop-watermark",alt:"Interpol Watermark"},children:x.jsx(N1,{show:e,subject:r,onClick:()=>{L("mail"),n(!1)}})})},e2=()=>{const{user:a,loading:e}=cr(),n=lr();return O.useEffect(()=>{e||a&&a.teamId&&n(`/dashboard/${a.teamId}`)},[e,a,n]),e?x.jsx("div",{children:"Even geduld..."}):x.jsxs(x.Fragment,{children:[x.jsx(vv,{}),x.jsx(J3,{})]})},t2=()=>{const{user:a}=cr(),[e,n]=O.useState(null),[r,o]=O.useState(!0),[c,d]=O.useState(null);O.useEffect(()=>{if(!(a!=null&&a.teamId)){d("Geen team gekoppeld aan gebruiker"),o(!1);return}let _=!1;return o(!0),d(null),I3(a.teamId).then(b=>{_||n(b)}).catch(b=>{_||d((b==null?void 0:b.message)||"Failed to load team")}).finally(()=>{_||o(!1)}),()=>{_=!0}},[a==null?void 0:a.teamId]);const f=(e==null?void 0:e.team)??null,p=O.useMemo(()=>Array.isArray(e==null?void 0:e.members)?e.members:[],[e==null?void 0:e.members]),h=O.useMemo(()=>Array.isArray(e==null?void 0:e.challenges)?e.challenges:[],[e==null?void 0:e.challenges]),g=O.useMemo(()=>h.reduce((_,b)=>_+(b.points||0)-(b.point_deduction||0),0),[h]),v="active";return r?x.jsx("div",{className:"teaminfo-app",children:"Teaminformatie laden…"}):c?x.jsxs("div",{className:"teaminfo-app",children:[x.jsx("strong",{children:"Fout:"})," ",c]}):f?x.jsx("div",{className:"teaminfo-app",children:x.jsxs("div",{className:"teaminfo-app__content",children:[x.jsx("section",{className:"teaminfo-block",children:x.jsxs("div",{className:"teaminfo-block__top",children:[x.jsxs("div",{children:[x.jsx("h3",{children:f.name}),x.jsxs("p",{className:"team-code",children:["Team ID: ",f.id]}),x.jsxs("p",{children:["Status:",x.jsx("span",{className:`team-status ${v}`,children:"Actief"})]}),x.jsxs("p",{children:["Klas: ",f.class]}),x.jsxs("p",{children:["Aangemaakt op:"," ",f.created_at?new Date(f.created_at).toLocaleDateString("nl-NL"):"Onbekend"]})]}),x.jsx("div",{className:"teaminfo-teamimage",children:f.image_url?x.jsx("img",{src:f.image_url,alt:f.name,loading:"lazy",onError:_=>{_.currentTarget.style.display="none"}}):x.jsx("div",{className:"teaminfo-teamimage__empty",children:"Geen foto"})})]})}),x.jsxs("section",{className:"teaminfo-block",children:[x.jsx("h4",{children:"Teamleden"}),p.length===0?x.jsx("p",{children:"Geen teamleden gevonden."}):x.jsx("ul",{className:"team-members",children:p.map(_=>x.jsxs("li",{children:[x.jsx("strong",{children:_.name})," ",x.jsxs("span",{className:"team-code",children:["#",_.student_number]})]},_.student_number))})]}),x.jsxs("section",{className:"teaminfo-block",children:[x.jsx("h4",{children:"Voortgang"}),x.jsxs("p",{children:["Challenges: ",h.length]}),x.jsxs("p",{children:["Punten: ",g]})]})]})}):x.jsx("div",{className:"teaminfo-app",children:"Geen teamdata ontvangen."})},n2=()=>x.jsxs("div",{children:[x.jsx("h2",{children:"Challenges"}),x.jsx("p",{children:"Hier komt info over de challenges"})]}),i2=[1,0,2];function Oh(a){return`${Number(a)||0} pt`}function a2(a=""){const e=String(a).trim().split(/\s+/).filter(Boolean).slice(0,2);return e.length===0?"??":e.map(n=>{var r;return((r=n[0])==null?void 0:r.toUpperCase())||""}).join("")}function zv({group:a}){return a.image_url?x.jsx("img",{className:"leaderboard__avatar-image",src:a.image_url,alt:a.name,loading:"lazy"}):x.jsx("span",{className:"leaderboard__avatar-fallback",children:a2(a.name)})}function r2({group:a,position:e,currentTeamId:n}){if(!a)return null;const r=["first","second","third"][e-1]||"",o=Number(n)===Number(a.id);return x.jsxs("article",{className:`leaderboard__podium leaderboard__podium--${r}${o?" is-current-team":""}`,children:[x.jsx("div",{className:"leaderboard__podium-rank",children:e}),x.jsx("div",{className:"leaderboard__avatar",children:x.jsx(zv,{group:a})}),x.jsxs("div",{className:"leaderboard__podium-copy",children:[x.jsx("h3",{children:a.name}),x.jsx("p",{children:a.class||"Onbekende klas"}),x.jsx("strong",{children:Oh(a.total_points)})]}),o?x.jsx("span",{className:"leaderboard__badge",children:"Jouw team"}):null]})}const s2=({groups:a=[],loading:e=!1,error:n=null,currentTeamId:r=null})=>{var d;const o=[...a].sort((f,p)=>{const h=Number(p.total_points||0)-Number(f.total_points||0);return h!==0?h:Number(p.id||0)-Number(f.id||0)}),c=o.slice(0,3);return e?x.jsx("div",{className:"leaderboard-shell",children:"Leaderboard laden…"}):n?x.jsxs("div",{className:"leaderboard-shell leaderboard-shell--error",children:[x.jsx("strong",{children:"Fout:"})," ",n]}):o.length===0?x.jsx("div",{className:"leaderboard-shell",children:"Nog geen teams gevonden voor het leaderboard."}):x.jsx("div",{className:"leaderboard-shell",children:x.jsxs("div",{className:"leaderboard",children:[x.jsxs("section",{className:"leaderboard__hero",children:[x.jsxs("div",{children:[x.jsx("p",{className:"leaderboard__eyebrow",children:"Interpol Ranking"}),x.jsx("h2",{children:"Leaderboard"}),x.jsx("p",{className:"leaderboard__summary",children:"De topteams worden live opgebouwd op basis van de behaalde challengepunten."})]}),x.jsxs("div",{className:"leaderboard__hero-stats",children:[x.jsxs("div",{children:[x.jsx("span",{children:"Teams"}),x.jsx("strong",{children:o.length})]}),x.jsxs("div",{children:[x.jsx("span",{children:"Koploper"}),x.jsx("strong",{children:Oh((d=c[0])==null?void 0:d.total_points)})]})]})]}),x.jsx("section",{className:"leaderboard__stage","aria-label":"Podium",children:i2.map(f=>x.jsx(r2,{group:c[f],position:f+1,currentTeamId:r},f))}),x.jsxs("section",{className:"leaderboard__rankings",children:[x.jsxs("div",{className:"leaderboard__rankings-header",children:[x.jsx("h3",{children:"Volledige ranglijst"}),x.jsx("span",{children:"Automatisch ververst"})]}),x.jsx("div",{className:"leaderboard__table",role:"table",children:o.map((f,p)=>{const h=Number(r)===Number(f.id);return x.jsxs("div",{className:`leaderboard__row${h?" is-current-team":""}`,role:"row",children:[x.jsxs("div",{className:"leaderboard__row-rank",role:"cell",children:["#",f.rank||p+1]}),x.jsxs("div",{className:"leaderboard__row-team",role:"cell",children:[x.jsx("div",{className:"leaderboard__avatar leaderboard__avatar--small",children:x.jsx(zv,{group:f})}),x.jsxs("div",{children:[x.jsx("strong",{children:f.name}),x.jsx("span",{children:f.class||"Onbekende klas"})]})]}),x.jsxs("div",{className:"leaderboard__row-members",role:"cell",children:[f.member_count||0," leden"]}),x.jsx("div",{className:"leaderboard__row-points",role:"cell",children:Oh(f.total_points)})]},f.id)})})]})]})})},o2=6e4;function Iv(a=o2){const[e,n]=O.useState([]),[r,o]=O.useState(!0),[c,d]=O.useState(null);return O.useEffect(()=>{let f=!1;const p=async({silent:g=!1}={})=>{g||o(!0);try{const v=await B3();f||(n(Array.isArray(v)?v:[]),d(null))}catch(v){f||d((v==null?void 0:v.message)||"Het leaderboard kon niet worden geladen.")}finally{!f&&!g&&o(!1)}};p();const h=window.setInterval(()=>{p({silent:!0})},a);return()=>{f=!0,window.clearInterval(h)}},[a]),{groups:e,loading:r,error:c}}const l2=()=>{const{user:a}=cr(),{groups:e,loading:n,error:r}=Iv();return x.jsx(s2,{groups:e,loading:n,error:r,currentTeamId:a==null?void 0:a.teamId})};async function c2(){return(await pn("/api/admin/messages")).messages}async function u2(){return(await pn("/api/messages")).messages}async function d2({title:a,body:e,mediaFile:n,publish_at:r}){return pn("/api/admin/messages",{method:"POST",body:xv({title:a,body:e,publish_at:r,media:n})})}async function f2(a,{title:e,body:n,mediaFile:r,publish_at:o}){return pn(`/api/admin/messages/${a}`,{method:"PATCH",body:xv({title:e,body:n,publish_at:o,media:r})})}async function h2(a){return pn(`/api/admin/messages/${a}`,{method:"DELETE"})}const p2=()=>{const[a,e]=O.useState([]),[n,r]=O.useState(null),[o,c]=O.useState(""),[d,f]=O.useState(!1),p=h=>({id:h.id,subject:h.title||"(Geen onderwerp)",from:"Admin",body:h.body||"",attachment:h.media_url||null,mediaType:h.media_type||null,createdAt:h.created_at||null});return O.useEffect(()=>{let h=!1;async function g(){try{f(!0),c("");const v=await u2(),_=Array.isArray(v)?v.map(p):[];_.sort((b,M)=>{const T=new Date(b.createdAt).getTime(),S=new Date(M.createdAt).getTime();return(Number.isNaN(T)?0:T)-(Number.isNaN(S)?0:S)}),h||e(_)}catch(v){console.error(v),h||c("Kon berichten niet laden.")}finally{h||f(!1)}}return g(),()=>{h=!0}},[]),O.useEffect(()=>{a&&a.length>0?r(a[a.length-1]):r(null)},[a]),x.jsxs("div",{className:"mail-app",children:[x.jsxs("aside",{className:"mail-app__sidebar",children:[d&&x.jsx("div",{className:"mail-item mail-item--empty",children:"Berichten laden..."}),!d&&o&&x.jsx("div",{className:"mail-item mail-item--empty",children:o}),!d&&!o&&(!a||a.length===0)&&x.jsx("div",{className:"mail-item mail-item--empty",children:"Geen berichten"}),!d&&!o&&a&&a.map(h=>x.jsxs("button",{type:"button",className:`mail-item ${n&&n.id===h.id?"mail-item--selected":""}`,onClick:()=>r(h),children:[x.jsx("strong",{className:"mail-item__subject",children:h.subject}),x.jsx("small",{className:"mail-item__from",children:h.from})]},h.id))]}),x.jsx("main",{className:"mail-app__body",children:n?x.jsxs(x.Fragment,{children:[x.jsxs("header",{className:"mail-app__header",children:[x.jsx("h3",{children:n.subject}),x.jsxs("p",{children:[x.jsx("strong",{children:"Van:"})," ",n.from]})]}),x.jsxs("section",{className:"mail-app__body-content",children:[x.jsx("p",{children:n.body||x.jsx("em",{children:"(Leeg bericht)"})}),n.attachment&&x.jsxs("div",{className:"mail-app__attachment",children:[x.jsx("strong",{children:"Bijlage:"}),x.jsx("br",{}),n.mediaType==="image"?x.jsx("a",{href:`${Os}${n.attachment}`,target:"_blank",rel:"noopener noreferrer",children:x.jsx("img",{className:"mail-app__attachment-image",src:`${Os}${n.attachment}`,alt:"Bijlage"})}):x.jsx("a",{href:`${Os}${n.attachment}`,target:"_blank",rel:"noopener noreferrer",children:`${Os}${n.attachment}`})]})]})]}):x.jsx("div",{className:"mail-app__empty",children:"Selecteer een bericht om te lezen."})})]})},du={teaminfo:{key:"teaminfo",title:"Team Info",desktopLabel:"Team Info",icon:"/icons/team.ico",width:520,height:400,render:()=>x.jsx(t2,{})},challenges:{key:"challenges",title:"Challenges",desktopLabel:"Challenges",icon:"/icons/challenges.ico",width:700,height:500,render:()=>x.jsx(n2,{})},leaderboard:{key:"leaderboard",title:"Leaderboard",desktopLabel:"Leaderboard",icon:"/icons/leaderboard.ico",width:700,height:500,render:()=>x.jsx(l2,{})},mail:{key:"mail",title:"Mail",desktopLabel:"Mail",icon:"/icons/email.ico",width:720,height:520,render:()=>x.jsx(p2,{})}},Bv=["teaminfo","challenges","leaderboard","mail"];function m2(){return Sv(du,Bv)}function g2(){const{openWindows:a,openApp:e,bringToFront:n,closeWindow:r,minimizeWindow:o}=Pv(),c=d=>{const f=du[d];f&&e(d,f)};return x.jsx(bv,{className:"dashboard",iconsClassName:"dashboard-icons",icons:Mv(du,Bv),openWindows:a,openApp:c,bringToFront:n,closeWindow:r,minimizeWindow:o,renderWindowContent:d=>yv(du,d.app,void 0,"Onbekende app"),menuApps:m2()})}const x2=()=>x.jsxs(x.Fragment,{children:[x.jsx(vv,{}),x.jsx(g2,{})]});function _2(a,e){const n=e.includes(a),r=a===0||e.includes(a-1);return n?{completed:!0,unlocked:!0,label:"Voltooid",marker:"OK"}:r?{completed:!1,unlocked:!0,label:"Beschikbaar",marker:String(a+1).padStart(2,"0")}:{completed:!1,unlocked:!1,label:"Vergrendeld",marker:"--"}}const v2=({steps:a,currentIndex:e,onSelect:n,completedSteps:r=[]})=>x.jsxs("aside",{className:"step-sidebar","aria-label":"Trainingsstappen",children:[x.jsxs("div",{className:"step-sidebar__header",children:[x.jsx("p",{className:"step-sidebar__eyebrow",children:"Trainingsstappen"}),x.jsx("h2",{children:"Opdrachten"}),x.jsx("p",{children:"Werk de opdrachten rustig op volgorde af."})]}),x.jsx("ol",{className:"step-sidebar__list",children:a.map((o,c)=>{const d=_2(c,r);return x.jsx("li",{children:x.jsxs("button",{type:"button",className:["step-sidebar__item",c===e?"is-active":"",d.completed?"is-completed":"",d.unlocked?"":"is-locked"].filter(Boolean).join(" "),onClick:()=>d.unlocked&&n(c),disabled:!d.unlocked,"aria-current":c===e?"step":void 0,children:[x.jsx("span",{className:"step-sidebar__marker",children:d.marker}),x.jsxs("span",{className:"step-sidebar__copy",children:[x.jsx("span",{className:"step-sidebar__title",children:o.title}),x.jsx("span",{className:"step-sidebar__status",children:d.label})]})]})},o.id)})})]}),$f=({language:a,value:e,onChange:n,label:r})=>{const o=typeof e=="string"?e:JSON.stringify(e,null,2);return x.jsxs("div",{className:"editor-pane",children:[x.jsx("div",{className:"editor-label",children:r||a.toUpperCase()}),x.jsx("div",{className:"editor-wrapper",children:x.jsx(Nv,{height:"100%",language:a,value:o,onChange:c=>n(c||""),theme:"vs-dark",options:{automaticLayout:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:14,wordWrap:"on",padding:{top:10},tabSize:2}})})]})};function b2(){return`<!doctype html>
<html lang="nl">
    <head>
        <meta charset="UTF-8" />
        <style>
            body {
                margin: 0;
                padding: 16px;
                background: #09131c;
                color: #d7f4ff;
                font-family: "Courier New", monospace;
                min-height: 100vh;
            }

            .console-shell {
                border: 1px solid #2e4a60;
                background: linear-gradient(180deg, #071019 0%, #0c1b28 100%);
                border-radius: 10px;
                overflow: hidden;
                box-shadow: inset 0 0 0 1px rgba(126, 247, 207, 0.12);
            }

            .console-titlebar {
                padding: 10px 14px;
                background: #102231;
                border-bottom: 1px solid #2e4a60;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: #7ef7cf;
            }

            #console-output {
                margin: 0;
                padding: 16px;
                min-height: 220px;
                white-space: pre-wrap;
                line-height: 1.6;
            }

            .placeholder {
                color: #86a5bc;
            }

            .error {
                color: #ff8080;
            }
        </style>
    </head>
    <body>
        <div class="console-shell">
            <div class="console-titlebar">Interpol JS Console</div>
            <pre id="console-output"><span class="placeholder">Klik op "Valideer missie" om de console-uitvoer te genereren.</span></pre>
        </div>

        <script>
            (function initializeTrainerConsole() {
                const output = document.getElementById("console-output");
                const logs = [];
                const errors = [];

                function renderLine(message, className) {
                    const line = document.createElement("div");
                    if (className) {
                        line.className = className;
                    }
                    line.textContent = message;
                    output.appendChild(line);
                }

                function clearOutput() {
                    output.textContent = "";
                }

                function format(args) {
                    return args
                        .map((value) => {
                            if (typeof value === "string") {
                                return value;
                            }

                            try {
                                return JSON.stringify(value);
                            } catch {
                                return String(value);
                            }
                        })
                        .join(" ");
                }

                const originalLog = console.log.bind(console);
                const originalError = console.error.bind(console);

                console.log = (...args) => {
                    const message = format(args);
                    logs.push(message);
                    renderLine(message);
                    originalLog(...args);
                };

                console.error = (...args) => {
                    const message = format(args);
                    errors.push(message);
                    renderLine(message, "error");
                    originalError(...args);
                };

                window.__trainerResetConsole = () => {
                    logs.length = 0;
                    errors.length = 0;
                    clearOutput();
                };

                window.__trainerPushError = (message) => {
                    errors.push(String(message));
                    renderLine(String(message), "error");
                };

                window.__trainerGetLogs = () => [...logs];
                window.__trainerGetErrors = () => [...errors];
            })();
        <\/script>
    </body>
</html>`}function y2(a){const e=String((a==null?void 0:a.html)??"");return`<!doctype html>
<html lang="nl">
    <head>
        <meta charset="UTF-8" />
        <style>
            html, body {
                margin: 0;
                min-height: 100%;
            }

            body {
                background: #ffffff;
            }

            ${String((a==null?void 0:a.css)??"")}
        </style>
    </head>
    <body>${e}</body>
</html>`}function Zx(a,e,n){return`${a.language==="javascript"?b2():y2(e)}
<!-- revision:${n} -->`}function S2(a){return!Array.isArray(a)||a.length===0?{title:"Trainer",body:"Geen testresultaten ontvangen.",tone:"warning"}:a.every(n=>n.pass)?{title:"Mission accomplished",body:"Alle controles zijn geslaagd. Deze stap is vrijgegeven.",tone:"success"}:{title:"Nog niet compleet",body:`Deze controles missen nog:
${a.filter(n=>!n.pass).map(n=>`- ${n.label}`).join(`
`)}`,tone:"danger"}}const M2=({code:a,lesson:e,iframeRef:n,runTests:r,results:o=[]})=>{const[c,d]=O.useState(()=>Zx(e,a,0)),[f,p]=O.useState(!1),[h,g]=O.useState(null),[v,_]=O.useState(0),b=O.useRef(!1);O.useEffect(()=>{d(Zx(e,a,v))},[e,a,v]),O.useEffect(()=>{g(null)},[e.id]);const M=()=>{f||(b.current=!0,p(!0),g(null),_(S=>S+1))},T=async()=>{if(b.current){b.current=!1;try{const S=await r();g(S2(S))}catch(S){g({title:"Systeemfout",body:S instanceof Error?S.message:"Valideren mislukt.",tone:"danger"})}finally{p(!1)}}};return x.jsxs("section",{className:"preview","aria-label":"Preview en testresultaten",children:[x.jsxs("div",{className:"preview__header",children:[x.jsxs("div",{children:[x.jsx("p",{className:"preview__eyebrow",children:"Field Monitor"}),x.jsx("h3",{children:e.language==="javascript"?"Console output":"Live preview"})]}),x.jsx("button",{type:"button",className:"preview__run-button",onClick:M,disabled:f,children:f?"Valideren...":"Valideer missie"})]}),x.jsx("iframe",{ref:n,srcDoc:c,sandbox:"allow-scripts allow-same-origin",title:"trainer-preview",onLoad:T}),x.jsxs("div",{className:"preview__results",children:[x.jsxs("div",{className:"preview__results-header",children:[x.jsx("h4",{children:"Controles"}),x.jsxs("span",{children:[o.filter(S=>S.pass).length,"/",o.length||0]})]}),o.length===0?x.jsx("p",{className:"preview__placeholder",children:"Nog geen controles uitgevoerd voor deze stap."}):x.jsx("ul",{className:"preview__result-list",children:o.map(S=>x.jsxs("li",{className:S.pass?"preview__result is-pass":"preview__result is-fail",children:[x.jsx("span",{className:"preview__result-indicator",children:S.pass?"PASS":"MISS"}),x.jsx("span",{children:S.label})]},S.label))})]}),h?x.jsxs("div",{className:`trainer-notification is-${h.tone}`,role:"status","aria-live":"polite",children:[x.jsx("strong",{children:h.title}),x.jsx("pre",{children:h.body})]}):null]})};function er(a){return String(a??"").replace(/\s+/g," ").trim().toLowerCase()}function Du(a){return{attrEquals:"attributeEquals",attributeEquals:"attributeEquals",computedStyleEquals:"computedStyleEquals",consoleOutputContains:"consoleIncludes",cssPropertyEquals:"computedStyleEquals",cssRuleExists:"cssRuleEquals",elementCount:"elementCount",functionReturnEquals:"functionReturns",functionReturns:"functionReturns",hasCount:"elementCount",objectPropertyEquals:"objectPropertyEquals",selectorExists:"selectorExists",textContains:"textIncludes",variableEquals:"variableEquals"}[a]||a}function Pr(a,e,n){return typeof a[e]<"u"?a[e]:a[n]}function Qf(a,e){return JSON.stringify(a)===JSON.stringify(e)}function E2(a){return[...new Set(a.filter(e=>{const n=Du(e.type);return["variableEquals","objectPropertyEquals","functionReturns"].includes(n)}).map(e=>e.name).filter(Boolean))]}function T2(a,e,n){const r=E2(e),o=e.map((f,p)=>({key:`__expr_${p}`,expr:f.expr,type:Du(f.type)})).filter(f=>f.type==="expressionTrue"&&f.expr),c=r.map(f=>`
                __trainerBindings[${JSON.stringify(f)}] = (() => {
                    try {
                        return eval(${JSON.stringify(f)});
                    } catch (error) {
                        return undefined;
                    }
                })();
            `).join(`
`),d=o.map(({key:f,expr:p})=>`
                __trainerExpressions[${JSON.stringify(f)}] = (() => {
                    try {
                        return !!(${p});
                    } catch (error) {
                        return false;
                    }
                })();
            `).join(`
`);return new n.Function("console",`
            "use strict";
            ${a}

            const __trainerBindings = {};
            const __trainerExpressions = {};

            ${c}
            ${d}

            return {
                bindings: __trainerBindings,
                expressions: __trainerExpressions,
            };
        `)}function $x(a,e,n){const r=a.createElement("div");r.style.setProperty(e,String(n)),r.style.position="absolute",r.style.visibility="hidden",a.body.appendChild(r);const o=a.defaultView.getComputedStyle(r).getPropertyValue(e).trim().toLowerCase();return r.remove(),o}async function A2(a,e,n){var d,f,p,h;const r=[];let o={bindings:{},expressions:{}};typeof a.__trainerResetConsole=="function"&&a.__trainerResetConsole();let c=null;try{o=T2(n,e,a)(a.console)}catch(g){c=g,typeof a.__trainerPushError=="function"&&a.__trainerPushError(g.message)}for(const g of e){const v=Du(g.type);let _=!1;try{switch(v){case"consoleIncludes":{_=(typeof a.__trainerGetLogs=="function"?a.__trainerGetLogs():[]).some(M=>er(M).includes(er(g.includes)));break}case"variableEquals":{const b=(d=o.bindings)==null?void 0:d[g.name],M=Pr(g,"value","equals");_=Qf(b,M);break}case"objectPropertyEquals":{const b=(f=o.bindings)==null?void 0:f[g.name],M=Pr(g,"value","equals");_=b!==null&&typeof b=="object"&&Qf(b==null?void 0:b[g.property],M);break}case"functionReturns":{const b=(p=o.bindings)==null?void 0:p[g.name],M=Pr(g,"value","equals");_=typeof b=="function"&&Qf(b(...g.args||[]),M);break}case"expressionTrue":{const b=e.indexOf(g);_=!!((h=o.expressions)!=null&&h[`__expr_${b}`]);break}default:_=!1;break}}catch{_=!1}r.push({label:g.label||g.type,pass:_})}return c&&r.unshift({label:`Runtime error: ${c.message}`,pass:!1}),r}async function w2(a,e){const n=[];for(const r of e){const o=Du(r.type);let c=!1;try{switch(o){case"selectorExists":{c=!!a.querySelector(r.selector);break}case"elementCount":{const d=Number(Pr(r,"value","count"));c=a.querySelectorAll(r.selector).length===d;break}case"textIncludes":{const d=a.querySelector(r.selector);c=!!d&&er(d.textContent).includes(er(r.includes));break}case"attributeEquals":{const d=a.querySelector(r.selector),f=r.attribute||r.attr||r.name,p=Pr(r,"value","equals");c=!!d&&er(d.getAttribute(f))===er(p);break}case"computedStyleEquals":{const d=a.querySelector(r.selector),f=r.property||r.prop,p=Pr(r,"value","equals");if(d&&f){const h=a.defaultView.getComputedStyle(d).getPropertyValue(f).trim().toLowerCase(),g=$x(a,f,p);c=h===g}break}case"cssRuleEquals":{const d=r.property||r.prop,f=Pr(r,"value","equals"),p=d?$x(a,d,f):null;let h=!1;for(const g of Array.from(a.styleSheets)){for(const v of Array.from(g.cssRules||[]))if(v.selectorText&&er(v.selectorText)===er(r.selector)){if(!d){h=!0;break}if(v.style.getPropertyValue(d).trim().toLowerCase()===p){h=!0;break}}if(h)break}c=h;break}default:c=!1;break}}catch{c=!1}n.push({label:r.label||r.type,pass:c})}return n}async function R2({lesson:a,step:e,code:n,iframeRef:r}){var p;const o=r==null?void 0:r.current,c=(o==null?void 0:o.contentDocument)||((p=o==null?void 0:o.contentWindow)==null?void 0:p.document),d=o==null?void 0:o.contentWindow,f=Array.isArray(e.tests)?e.tests:[];return!c||!d?f.map(h=>({label:h.label||h.type,pass:!1})):(await new Promise(h=>setTimeout(h,50)),a.language==="javascript"?A2(d,f,String(n??"")):w2(c,f))}const kv="interpol.trainer.progress.v1";function Op(){try{const a=localStorage.getItem(kv);return a?JSON.parse(a):{}}catch{return{}}}function jv(a){localStorage.setItem(kv,JSON.stringify(a))}function C2(a,e,n=!0){const r=Op(),o=r[a]||{},c={...r,[a]:{...o,[e]:n}};return jv(c),c}function Qx(a,e){var n,r,o;return a.language==="htmlcss"?{html:String(((n=e==null?void 0:e.starter)==null?void 0:n.html)||""),css:String(((r=e==null?void 0:e.starter)==null?void 0:r.css)||"")}:String(((o=e==null?void 0:e.starter)==null?void 0:o.js)||(e==null?void 0:e.starter)||"")}function D2(a){const n={...Op()};delete n[a],jv(n)}const Hv=({lesson:a,className:e=""})=>{const n=O.useRef(null),[r,o]=O.useState(0),[c,d]=O.useState([]),[f,p]=O.useState({}),[h,g]=O.useState([]),v=a.steps[r],_=f[v.id]??Qx(a,v),b=c.length,M=Math.round(b/a.steps.length*100),T=c.includes(r),S=r<a.steps.length-1,y=S&&(T||c.includes(r));O.useEffect(()=>{const L=Op()[a.id]||{},C=a.steps.reduce((ee,ce,he)=>(L[ce.id]&&ee.push(he),ee),[]),G=C.length===0?0:Math.min(Math.max(...C)+1,a.steps.length-1);d(C),o(G),p({}),g([])},[a]),O.useEffect(()=>{g([])},[v.id]);const A=H=>{p(L=>({...L,[v.id]:H}))},w=async()=>{const H=await R2({lesson:a,step:v,code:_,iframeRef:n});return g(H),H.every(L=>L.pass)&&(c.includes(r)||(C2(a.id,v.id,!0),d(L=>[...L,r]))),H},R=H=>{(H===0||c.includes(H-1))&&o(H)},F=()=>{p(H=>({...H,[v.id]:Qx(a,v)})),g([])},U=()=>{D2(a.id),d([]),p({}),g([]),o(0)},I=()=>{S&&(T||c.includes(r))&&o(H=>H+1)};return x.jsx("div",{className:["trainer-core",e].filter(Boolean).join(" "),children:x.jsxs("div",{className:"trainer-window",children:[x.jsx("header",{className:"trainer-window__titlebar",children:x.jsx("span",{children:a.title})}),x.jsxs("div",{className:"trainer-window__body",children:[x.jsx("div",{className:"trainer-progressbar","aria-hidden":"true",children:x.jsx("span",{style:{width:`${M}%`}})}),x.jsxs("div",{className:"trainer-body",children:[x.jsx(v2,{steps:a.steps,currentIndex:r,onSelect:R,completedSteps:c}),x.jsxs("main",{className:"trainer-main",children:[x.jsxs("section",{className:"trainer-briefing",children:[x.jsxs("div",{className:"trainer-briefing__topline",children:[x.jsxs("span",{className:"trainer-briefing__tag",children:["Stap ",String(r+1).padStart(2,"0")]}),x.jsx("span",{className:"trainer-briefing__tag",children:a.language==="javascript"?"JavaScript":"HTML + CSS"})]}),x.jsxs("div",{className:"trainer-briefing__header",children:[x.jsxs("div",{children:[x.jsx("h2",{children:v.title}),x.jsx("p",{className:"trainer-briefing__objective",children:v.objective})]}),T?x.jsx("div",{className:"trainer-briefing__success",children:"Voltooid"}):null]}),x.jsxs("div",{className:"trainer-briefing__content",children:[x.jsx("p",{className:"trainer-briefing__lead",children:a.briefing}),x.jsx("div",{dangerouslySetInnerHTML:{__html:v.contentHtml}}),v.hint?x.jsxs("p",{className:"trainer-briefing__hint",children:[x.jsx("strong",{children:"Hint:"})," ",x.jsx("span",{dangerouslySetInnerHTML:{__html:v.hint}})]}):null]}),x.jsxs("div",{className:"trainer-briefing__actions",children:[x.jsx("button",{type:"button",onClick:F,children:"Reset stap"}),x.jsx("button",{type:"button",onClick:U,children:"Reset training"}),x.jsx("button",{type:"button",onClick:I,disabled:!y,children:"Volgende stap"})]})]}),x.jsxs("section",{className:"trainer-workbench",children:[x.jsx("div",{className:"trainer-editors",children:a.language==="htmlcss"?x.jsxs(x.Fragment,{children:[x.jsx($f,{language:"html",value:_.html,onChange:H=>A({..._,html:H}),label:"HTML"}),x.jsx($f,{language:"css",value:_.css,onChange:H=>A({..._,css:H}),label:"CSS"})]}):x.jsx($f,{language:"javascript",value:_,onChange:A,label:"JavaScript"})}),x.jsx(M2,{code:_,lesson:a,iframeRef:n,runTests:w,results:h})]})]})]})]})]})})},Fc=`<main class="dossier">
  <header class="mission-header">
    <p class="mission-kicker">Interpol Cyber Division</p>
    <h1>Casefile: Ghost Relay</h1>
    <p class="mission-status">Status: Monitoring active relay traffic</p>
  </header>

  <section class="intel-grid">
    <article class="suspect-card">
      <p class="suspect-card__label">Prime suspect</p>
      <h2>Mila Voss</h2>
      <p class="suspect-card__alias">Alias: Ghost Relay</p>
      <ul class="evidence-list">
        <li>Remote access beacon detected in the design lab.</li>
        <li class="is-critical">Encrypted USB drop found near workstation B12.</li>
        <li>Badge scans match the intrusion window.</li>
      </ul>
    </article>
  </section>
</main>`,vs=`body {
  margin: 0;
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
}`,L2={id:"htmlcss-dossier-rebuild",badge:"Frontend Recon",title:"HTML & CSS Field Lab",subtitle:"Herbouw een beschadigd Interpol-dossier zodat het team weer veilig briefingmateriaal kan bekijken.",briefing:"Een corrupte interface heeft de visuele laag van een suspect dossier onbruikbaar gemaakt. Herstel de markup en styling zonder de inhoudelijke briefing kwijt te raken.",statusLabel:"Open dossier",outcomeLabel:"Werkende casefile",language:"htmlcss",steps:[{id:"mission-header",title:"Herstel de missie-header",objective:"Zet een duidelijke header neer voor het onderschepte dossier.",contentHtml:`
                <p>Maak in <code>&lt;main class="dossier"&gt;</code> een header met precies deze onderdelen:</p>
                <ul>
                    <li>een <code>&lt;header class="mission-header"&gt;</code></li>
                    <li>een <code>&lt;h1&gt;</code> met de tekst <code>Casefile: Ghost Relay</code></li>
                    <li>een statusregel met class <code>mission-status</code> en de tekst <code>Status: Monitoring active relay traffic</code></li>
                </ul>
            `,hint:'Gebruik een <code>&lt;header&gt;</code>, daarna een <code>&lt;h1&gt;</code> en een <code>&lt;p class="mission-status"&gt;</code>.',starter:{html:`<main class="dossier">
  <!-- Voeg hier de missie-header toe -->
</main>`,css:vs},tests:[{type:"selectorExists",selector:".mission-header",label:"Mission header bestaat"},{type:"textIncludes",selector:".mission-header h1",includes:"Casefile: Ghost Relay",label:"Casefile-titel klopt"},{type:"textIncludes",selector:".mission-status",includes:"Status: Monitoring active relay traffic",label:"Statusregel klopt"}]},{id:"suspect-card",title:"Bouw de suspect card",objective:"Voeg de hoofdverdachte en drie bewijsregels toe aan het dossier.",contentHtml:`
                <p>Maak binnen <code>.intel-grid</code> een <code>&lt;article class="suspect-card"&gt;</code> met precies dit:</p>
                <ul>
                    <li>een kop <code>Mila Voss</code></li>
                    <li>een aliasregel met <code>Alias: Ghost Relay</code></li>
                    <li>een <code>&lt;ul class="evidence-list"&gt;</code> met precies drie items</li>
                    <li>een kritisch item met class <code>is-critical</code></li>
                </ul>
            `,hint:"Gebruik voor de alias bijvoorbeeld een apart <code>&lt;p&gt;</code>-element.",starter:{html:`<main class="dossier">
  <header class="mission-header">
    <p class="mission-kicker">Interpol Cyber Division</p>
    <h1>Casefile: Ghost Relay</h1>
    <p class="mission-status">Status: Monitoring active relay traffic</p>
  </header>

  <section class="intel-grid">
    <!-- Voeg hier de suspect card toe -->
  </section>
</main>`,css:vs},tests:[{type:"selectorExists",selector:".suspect-card",label:"Suspect card bestaat"},{type:"textIncludes",selector:".suspect-card h2",includes:"Mila Voss",label:"Verdachtennaam klopt"},{type:"textIncludes",selector:".suspect-card",includes:"Alias: Ghost Relay",label:"Aliasregel klopt"},{type:"elementCount",selector:".evidence-list li",value:3,label:"Drie bewijsregels aanwezig"},{type:"selectorExists",selector:".evidence-list .is-critical",label:"Kritiek bewijs gemarkeerd"}]},{id:"dossier-surface",title:"Breng de dossierstijl terug",objective:"Geef de pagina weer het donkere Interpol-surface en de juiste spacing.",contentHtml:`
                <p>Werk de basisstijl bij zodat het dossier direct leesbaar wordt.</p>
                <ul>
                    <li>Geef <code>body</code> de achtergrondkleur <code>#08141f</code></li>
                    <li>Geef <code>body</code> een tekstkleur van <code>#e5f3ff</code></li>
                    <li>Geef <code>.dossier</code> links exact <code>32px</code> padding</li>
                </ul>
            `,hint:"Schrijf dus bijvoorbeeld <code>padding-left: 32px;</code> op <code>.dossier</code>.",starter:{html:Fc,css:vs},tests:[{type:"computedStyleEquals",selector:"body",property:"background-color",value:"#08141f",label:"Body heeft donkere achtergrond"},{type:"computedStyleEquals",selector:"body",property:"color",value:"#e5f3ff",label:"Body-tekstkleur klopt"},{type:"computedStyleEquals",selector:".dossier",property:"padding-left",value:"32px",label:"Dossier-padding ingesteld"}]},{id:"card-layout",title:"Maak er een stevige intel card van",objective:"Geef de card een duidelijke lay-out en visuele hiërarchie.",contentHtml:`
                <p>Voeg deze drie stijlen toe:</p>
                <ul>
                    <li><code>.intel-grid { display: grid; }</code></li>
                    <li><code>.suspect-card { border-radius: 18px; }</code></li>
                    <li>Geef <code>.suspect-card</code> bovenaan een rand in kleur <code>#2ee6a6</code></li>
                </ul>
            `,hint:"De kleurcheck kijkt naar de bovenrand van <code>.suspect-card</code>.",starter:{html:Fc,css:`${vs}

body {
  background: #08141f;
  color: #e5f3ff;
}

.dossier {
  padding: 32px;
}`},tests:[{type:"computedStyleEquals",selector:".intel-grid",property:"display",value:"grid",label:"Intel-grid gebruikt grid"},{type:"computedStyleEquals",selector:".suspect-card",property:"border-radius",value:"18px",label:"Cardradius klopt"},{type:"computedStyleEquals",selector:".suspect-card",property:"border-top-color",value:"#2ee6a6",label:"Accentkleur op card aanwezig"}]},{id:"intel-highlights",title:"Markeer belangrijke signalen",objective:"Maak status en kritisch bewijs direct scanbaar voor het team.",contentHtml:`
                <p>Geef de belangrijkste tekst extra nadruk met precies deze stijlen:</p>
                <ul>
                    <li>Geef <code>.mission-status</code> de tekstkleur <code>#7ef7cf</code></li>
                    <li>Geef <code>.is-critical</code> de tekstkleur <code>#ff6b6b</code></li>
                    <li>Maak <code>.is-critical</code> vet met <code>font-weight: 700</code></li>
                </ul>
            `,hint:"Gebruik classes uit de markup; je hoeft geen nieuwe elementen toe te voegen.",starter:{html:Fc,css:`${vs}

body {
  background: #08141f;
  color: #e5f3ff;
}

.dossier {
  padding: 32px;
}

.intel-grid {
  display: grid;
  gap: 20px;
}

.suspect-card {
  background: #0d2130;
  border: 1px solid rgba(126, 247, 207, 0.3);
  border-top: 4px solid #2ee6a6;
  border-radius: 18px;
  padding: 24px;
}`},tests:[{type:"computedStyleEquals",selector:".mission-status",property:"color",value:"#7ef7cf",label:"Statuskleur klopt"},{type:"computedStyleEquals",selector:".is-critical",property:"color",value:"#ff6b6b",label:"Kritiek bewijs valt op"},{type:"computedStyleEquals",selector:".is-critical",property:"font-weight",value:"700",label:"Kritiek bewijs is vetgedrukt"}]},{id:"action-button",title:"Voeg de dispatch-knop toe",objective:"Maak de briefing af met een duidelijke call to action voor het veldteam.",contentHtml:`
                <p>Voeg een knop toe met:</p>
                <ul>
                    <li>class <code>launch-btn</code></li>
                    <li>tekst <code>Send to field team</code></li>
                    <li>achtergrondkleur <code>#2ee6a6</code></li>
                    <li>tekstkleur <code>#041019</code></li>
                    <li>hoverkleur <code>#7ef7cf</code></li>
                </ul>
            `,hint:"Gebruik voor hover een aparte regel: <code>.launch-btn:hover</code>.",starter:{html:`${Fc}

<!-- Voeg hieronder de knop toe -->
`,css:`${vs}

body {
  background: #08141f;
  color: #e5f3ff;
}

.dossier {
  padding: 32px;
}

.intel-grid {
  display: grid;
  gap: 20px;
}

.suspect-card {
  background: #0d2130;
  border: 1px solid rgba(126, 247, 207, 0.3);
  border-top: 4px solid #2ee6a6;
  border-radius: 18px;
  padding: 24px;
}

.mission-status {
  color: #7ef7cf;
}

.is-critical {
  color: #ff6b6b;
  font-weight: 700;
}`},tests:[{type:"selectorExists",selector:".launch-btn",label:"Dispatch-knop bestaat"},{type:"textIncludes",selector:".launch-btn",includes:"Send to field team",label:"Knoptekst klopt"},{type:"computedStyleEquals",selector:".launch-btn",property:"background-color",value:"#2ee6a6",label:"Knopkleur klopt"},{type:"computedStyleEquals",selector:".launch-btn",property:"color",value:"#041019",label:"Tekstkleur van knop klopt"},{type:"cssRuleEquals",selector:".launch-btn:hover",property:"background-color",value:"#7ef7cf",label:"Hoverkleur ingesteld"}]}]},N2=()=>x.jsx(Hv,{lesson:L2,className:"trainer-core--htmlcss"}),U2=()=>x.jsx(N2,{}),O2={id:"javascript-signal-analysis",badge:"Signal Analysis",title:"JavaScript Ops Console",subtitle:"Een rustige eerste kennismaking met code binnen de Interpol trainingsomgeving.",briefing:"Je werkt als trainee in een veilige oefenconsole. De opdrachten beginnen heel klein: eerst tekst tonen, daarna variabelen gebruiken en pas aan het eind een eerste simpele functie schrijven.",statusLabel:"Basistraining",outcomeLabel:"Eerste console-briefing",language:"javascript",steps:[{id:"boot-sequence",title:"Schrijf een eerste bericht",objective:"Laat de console zien dat de training is gestart.",contentHtml:`
                <p>Gebruik <code>console.log()</code> om exact deze tekst te tonen:</p>
                <pre><code>Training gestart</code></pre>
            `,hint:'Typ bijvoorbeeld <code>console.log("...")</code>.',starter:{js:`// Schrijf hier je eerste console.log
`},tests:[{type:"consoleIncludes",includes:"Training gestart",label:"De juiste tekst wordt gelogd"}]},{id:"agent-name",title:"Maak een variabele",objective:"Sla een naam op in een variabele.",contentHtml:`
                <p>Maak een variabele <code>agentName</code> met de waarde <code>"Sam"</code>.</p>
            `,hint:"Gebruik <code>let</code> of <code>const</code>.",starter:{js:`// Maak hier de variabele agentName
`},tests:[{type:"variableEquals",name:"agentName",value:"Sam",label:"Variabele agentName klopt"}]},{id:"agent-log",title:"Gebruik een variabele in de console",objective:"Toon een bericht met behulp van de variabele.",contentHtml:`
                <p>Gebruik de variabele <code>agentName</code> en log deze tekst:</p>
                <pre><code>Agent Sam meldt zich</code></pre>
            `,hint:"Je mag tekst en een variabele samen in <code>console.log()</code> gebruiken.",starter:{js:`let agentName = "Sam";

// Log hier de zin met agentName
`},tests:[{type:"consoleIncludes",includes:"Agent Sam meldt zich",label:"De zin met agentName klopt"}]},{id:"score-number",title:"Werk met een getal",objective:"Sla een score op en maak daarna een nieuwe score.",contentHtml:`
                <p>Maak eerst een variabele <code>score</code> met waarde <code>5</code>.</p>
                <p>Maak daarna een variabele <code>nextScore</code> met waarde <code>score + 1</code>.</p>
            `,hint:"De tweede variabele moet dus uitkomen op <code>6</code>.",starter:{js:`// Maak hier score
// Maak hier nextScore
`},tests:[{type:"variableEquals",name:"score",value:5,label:"score is juist"},{type:"variableEquals",name:"nextScore",value:6,label:"nextScore is juist"}]},{id:"if-check",title:"Maak een simpele if",objective:"Controleer of een score hoog genoeg is en toon dan een bericht.",contentHtml:`
                <p>Gebruik een <code>if</code>-statement.</p>
                <p>Als <code>score</code> groter is dan <code>4</code>, log dan:</p>
                <pre><code>Toegang toegestaan</code></pre>
            `,hint:"De meegeleverde score is al hoog genoeg.",starter:{js:`let score = 5;

// Schrijf hier een if-statement
`},tests:[{type:"consoleIncludes",includes:"Toegang toegestaan",label:"Het if-statement werkt"}]},{id:"first-function",title:"Schrijf je eerste functie",objective:"Maak een functie die een welkomstzin teruggeeft.",contentHtml:`
                <p>Maak een functie <code>sayHello(name)</code>.</p>
                <p>De functie moet deze tekst teruggeven:</p>
                <pre><code>Welkom agent Sam</code></pre>
                <p>Als de functie wordt aangeroepen met <code>"Sam"</code>.</p>
            `,hint:"Gebruik <code>return</code> en zet <code>name</code> in de zin.",starter:{js:`function sayHello(name) {
  // Geef hier een tekst terug
}
`},tests:[{type:"functionReturns",name:"sayHello",args:["Sam"],value:"Welkom agent Sam",label:"De functie geeft de juiste tekst terug"}]},{id:"final-briefing",title:"Rond de briefing af",objective:"Gebruik je functie en log het eindbericht in de console.",contentHtml:`
                <p>Gebruik de functie <code>sayHello</code> met de naam <code>"Sam"</code>.</p>
                <p>Log daarna ook nog deze tweede regel:</p>
                <pre><code>Einde basistraining</code></pre>
            `,hint:"Je moet dus twee berichten in de console krijgen.",starter:{js:`function sayHello(name) {
  return "Welkom agent " + name;
}

// Log hier eerst de uitkomst van sayHello("Sam")
// Log daarna de tweede regel
`},tests:[{type:"consoleIncludes",includes:"Welkom agent Sam",label:"Welkomstbericht gelogd"},{type:"consoleIncludes",includes:"Einde basistraining",label:"Eindregel gelogd"}]}]},F2=()=>x.jsx(Hv,{lesson:O2,className:"trainer-core--javascript"}),P2=()=>x.jsx(F2,{});function z2({nextRoute:a="/creative-coding/step2",correctAnswer:e="goldenratio",title:n="Cipher"}){const r=lr(),[o,c]=O.useState(""),[d,f]=O.useState(""),p=O.useMemo(()=>["⌠","⌘","⌗","⌧","⌖","⬣","⧩","△","◌","⌢","⌘"],[]),h=O.useMemo(()=>["△","○","⇧","⌧","⌖","⌞","⌠","⬧","⌢","▤","⌔","⌗","◈","⬣","⌘","◆","▼","⧩","⬦","◌","□","⬠","▢","⬥","⧫","▧"],[]),g=O.useMemo(()=>"abcdefghijklmnopqrstuvwxyz".split(""),[]);function v(M){return M.trim().toLowerCase().replace(/\s/g,"")}function _(){const M=v(o),T=v(e);if(!M){f("Vul eerst je antwoord in.");return}if(M!==T){f("Incorrect. Probeer opnieuw.");return}f(""),r(a)}function b(M){M.key==="Enter"&&_()}return x.jsxs("div",{className:"puzzle",children:[x.jsx("h1",{children:n}),x.jsx("div",{className:"cipher",children:x.jsx("ul",{children:p.map((M,T)=>x.jsx("li",{children:M},`${M}-${T}`))})}),x.jsxs("div",{className:"answer",children:[x.jsx("input",{type:"text",value:o,onChange:M=>c(M.target.value),onKeyDown:b,placeholder:"Type je antwoord...",className:d?"error":""}),x.jsx("button",{onClick:_,children:"Submit"}),d&&x.jsx("p",{className:"message",children:d})]}),x.jsxs("div",{id:"alphabet",className:"alphabet",children:[x.jsx("ul",{className:"symbols",children:h.map((M,T)=>x.jsx("li",{children:M},`${M}-${T}`))}),x.jsx("ul",{className:"letters",children:g.map(M=>x.jsx("li",{children:M},M))})]})]})}const I2=()=>x.jsx(x.Fragment,{children:x.jsx(z2,{})});function B2({team:a,onClose:e,onSaved:n}){const[r,o]=O.useState(a.name),[c,d]=O.useState(a.class),[f]=O.useState(a.image_url),[p,h]=O.useState(a.members.map(R=>({...R,existing:!0}))),[g,v]=O.useState([]),[_,b]=O.useState(""),[M,T]=O.useState(""),S=()=>{!_.trim()||!M.trim()||(h(R=>[...R,{id:"new_"+Math.random(),name:_,student_number:M,existing:!1}]),b(""),T(""))},y=R=>{R.existing&&v(F=>[...F,R.id]),h(F=>F.filter(U=>U.id!==R.id))},A=(R,F,U)=>{h(I=>I.map(H=>H.id===R?{...H,[F]:U}:H))},w=async()=>{await Ov(a.id,{name:r,className:c,image_url:f});for(let R of g)await X3(a.id,R);for(let R of p)R.existing?await V3(a.id,R.id,{name:R.name,student_number:R.student_number}):await G3(a.id,{name:R.name,student_number:R.student_number});n()};return x.jsx("div",{className:"team-edit-modal-backdrop",children:x.jsxs("div",{className:"team-edit-modal",children:[x.jsx("h2",{children:"Team bewerken"}),x.jsxs("div",{className:"modal-section-half",children:[x.jsxs("div",{className:"modal-section",children:[x.jsx("label",{children:"Teamnaam"}),x.jsx("input",{value:r,onChange:R=>o(R.target.value)})]}),x.jsxs("div",{className:"modal-section",children:[x.jsx("label",{children:"Klas"}),x.jsx("input",{value:c,onChange:R=>d(R.target.value)})]})]}),x.jsx("h3",{children:"Teamleden"}),p.map(R=>x.jsxs("div",{className:"member-row",children:[x.jsx("input",{value:R.name,onChange:F=>A(R.id,"name",F.target.value),placeholder:"Naam"}),x.jsx("input",{value:R.student_number,onChange:F=>A(R.id,"student_number",F.target.value),placeholder:"Studentnummer"}),x.jsx("button",{className:"delete",onClick:()=>y(R),children:"X"})]},R.id)),x.jsx("h4",{children:"Nieuw lid toevoegen"}),x.jsxs("div",{className:"member-add",children:[x.jsx("input",{placeholder:"Naam",value:_,onChange:R=>b(R.target.value)}),x.jsx("input",{placeholder:"Studentnummer",value:M,onChange:R=>T(R.target.value)}),x.jsx("button",{onClick:S,children:"Toevoegen"})]}),x.jsxs("div",{className:"modal-footer",children:[x.jsx("button",{onClick:e,children:"Annuleren"}),x.jsx("button",{className:"save-btn",onClick:w,children:"Opslaan"})]})]})})}function Gv({onCapture:a,onCancel:e}){const n=O.useRef(null),r=O.useRef(null),o=O.useRef(null),[c,d]=O.useState("");O.useEffect(()=>{let p=!1;async function h(){try{const g=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1});if(p){g.getTracks().forEach(v=>v.stop());return}o.current=g,n.current&&(n.current.srcObject=g,n.current.muted=!0,n.current.playsInline=!0,await new Promise(v=>{n.current.onloadedmetadata=v}),await n.current.play().catch(()=>{}))}catch(g){console.error(g),d("Camera niet beschikbaar.")}}return h(),()=>{p=!0,o.current&&o.current.getTracks().forEach(g=>g.stop())}},[]);const f=async()=>{const p=await Uv(n,r);a(p)};return x.jsxs("div",{className:"webcam-capture",children:[c&&x.jsx("div",{className:"error",children:c}),x.jsx("video",{ref:n,autoPlay:!0,playsInline:!0,className:"webcam-video"}),x.jsx("canvas",{ref:r,className:"webcam-canvas"}),x.jsxs("div",{className:"webcam-buttons",children:[x.jsx("button",{onClick:f,children:"Foto maken"}),x.jsx("button",{onClick:e,children:"Annuleren"})]})]})}function k2({team:a,onClose:e,onSaved:n}){const[r,o]=O.useState(a.image_url),[c,d]=O.useState(!1),f=g=>{o(g),d(!1)},p=()=>{o(null)},h=async()=>{await Ov(a.id,{name:a.name,className:a.class,image_url:r}),n()};return x.jsx("div",{className:"edit-team-image-backdrop",children:x.jsxs("div",{className:"edit-team-image-modal",children:[x.jsx("h2",{children:"Teamfoto wijzigen"}),c?x.jsx(Gv,{onCapture:f,onCancel:()=>d(!1)}):x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"image-preview",children:r?x.jsx("img",{src:r,alt:"teamfoto"}):x.jsx("div",{className:"placeholder",children:"Geen afbeelding"})}),x.jsxs("div",{className:"buttons",children:[x.jsx("button",{onClick:()=>d(!0),children:"Nieuwe Foto"}),x.jsx("button",{className:"delete",onClick:p,children:"Verwijderen"})]}),x.jsxs("div",{className:"footer",children:[x.jsx("button",{onClick:e,children:"Annuleren"}),x.jsx("button",{className:"save",onClick:h,children:"Opslaan"})]})]})]})})}function j2({onClose:a,onSaved:e}){const[n,r]=O.useState(null),[o,c]=O.useState(!1),[d,f]=O.useState(""),[p,h]=O.useState(""),[g,v]=O.useState([{name:"",number:""},{name:"",number:""},{name:"",number:""}]),[_,b]=O.useState(""),[M,T]=O.useState(!1),S=F=>{r(F),c(!1)},y=(F,U,I)=>{const H=[...g];H[F][U]=I,v(H)},A=()=>{if(g.length>=5)return b("Maximaal 5 studenten");v([...g,{name:"",number:""}])},w=F=>{if(g.length<=3)return b("Minimaal 3 studenten");v(g.filter((U,I)=>I!==F))},R=async()=>{if(b(""),!n)return b("Maak eerst een teamfoto.");if(!d.trim())return b("Teamnaam is verplicht.");if(!p.trim())return b("Klas is verplicht.");if(g.some(F=>!F.name.trim()||!F.number.trim()))return b("Alle studenten moeten naam & nummer hebben.");try{T(!0),await j3({teamPhoto:n,teamName:d,className:p,members:g}),e()}catch(F){console.error(F),b("Kon team niet opslaan.")}finally{T(!1)}};return x.jsx("div",{className:"admin-create-full-backdrop",children:x.jsxs("div",{className:"admin-create-full-modal",children:[x.jsx("h2",{children:"Nieuw team aanmaken"}),_&&x.jsx("div",{className:"error",children:_}),o?x.jsx(Gv,{onCapture:S,onCancel:()=>c(!1)}):x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"photo-preview",children:n?x.jsx("img",{src:n,alt:"Team"}):x.jsx("div",{className:"placeholder",children:"Geen foto"})}),x.jsx("button",{onClick:()=>c(!0),children:n?"Nieuwe foto maken":"Maak teamfoto"}),x.jsxs("div",{className:"form-row",children:[x.jsx("label",{children:"Teamnaam"}),x.jsx("input",{type:"text",value:d,onChange:F=>f(F.target.value)})]}),x.jsxs("div",{className:"form-row",children:[x.jsx("label",{children:"Klas"}),x.jsx("input",{type:"text",value:p,onChange:F=>h(F.target.value)})]}),x.jsx("h3",{children:"Teamleden"}),g.map((F,U)=>x.jsxs("div",{className:"member-row",children:[x.jsx("input",{type:"text",placeholder:"Naam",value:F.name,onChange:I=>y(U,"name",I.target.value)}),x.jsx("input",{type:"text",placeholder:"Studentnummer",value:F.number,onChange:I=>y(U,"number",I.target.value)}),g.length>3&&x.jsx("button",{className:"delete",onClick:()=>w(U),children:"✕"})]},U)),g.length<5&&x.jsx("button",{onClick:A,children:"+ Student toevoegen"}),x.jsxs("div",{className:"buttons",children:[x.jsx("button",{onClick:a,children:"Annuleren"}),x.jsx("button",{disabled:M,onClick:R,children:M?"Opslaan…":"Team aanmaken"})]})]})]})})}async function H2(){return pn("/api/admin/challenges")}async function G2(a,e,n){return pn(`/api/admin/challenges/${a}`,{method:"PUT",...kr({class_name:e,is_open:n})})}function V2(){const[a,e]=O.useState([]),[n,r]=O.useState([]),[o,c]=O.useState(!0),[d,f]=O.useState(null);O.useEffect(()=>{p()},[]);const p=async()=>{c(!0);try{const v=await H2();e(Array.isArray(v.classes)?v.classes:[]),r(Array.isArray(v.challenges)?v.challenges:[])}catch(v){console.error(v)}finally{c(!1)}},h=async(v,_,b)=>{const M=`${v}-${_}`;f(M);try{await G2(v,_,!b),r(T=>T.map(S=>S.id!==v?S:{...S,perClass:{...S.perClass||{},[_]:!b}}))}catch(T){console.error(T),alert("Kon challenge niet wijzigen.")}finally{f(null)}};if(o)return x.jsx("div",{className:"admin-challenges",children:"Laden…"});const g=`1fr repeat(${a.length}, minmax(70px, 1fr))`;return x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"challenge-header",children:x.jsx("h1",{children:"Challengebeheer"})}),x.jsxs("div",{className:"challenge-table",children:[x.jsxs("div",{className:"challenge-row header",style:{gridTemplateColumns:g},children:[x.jsx("div",{className:"challenge-name",children:"Challenge"}),a.map(v=>{const _=typeof v=="string"?v:v==null?void 0:v.class;return x.jsx("div",{className:"challenge-col",children:(_||"").toUpperCase()},_)})]}),n.map(v=>x.jsxs("div",{className:"challenge-row",style:{gridTemplateColumns:g},children:[x.jsx("div",{className:"challenge-name",children:v.title||"(zonder naam)"}),a.map(_=>{const b=typeof _=="string"?_:_==null?void 0:_.class,M=!!(v.perClass&&b&&v.perClass[b]),T=`${v.id}-${b}`,S=d===T;return x.jsx("div",{className:"challenge-col",children:x.jsx("input",{type:"checkbox",checked:M,disabled:S,onChange:()=>h(v.id,b,M)})},b)})]},v.id))]})]})}const X2=a=>a?a.replace("T"," ")+":00":"";function W2({onClose:a,onSaved:e}){const[n,r]=O.useState(""),[o,c]=O.useState(""),[d,f]=O.useState(null),[p,h]=O.useState(""),[g,v]=O.useState(!1),[_,b]=O.useState(null),M=n.trim()!==""&&o.trim()!==""&&!g,T=y=>{if(!y){f(null);return}if(!y.type.startsWith("image/")&&!y.type.startsWith("video/")){b("Alleen afbeelding of video toegestaan.");return}b(null),f(y)},S=async y=>{if(y.preventDefault(),!!M){v(!0),b(null);try{await d2({title:n.trim(),body:o.trim(),mediaFile:d,publish_at:p?X2(p):""}),e()}catch(A){b(A.message||"Opslaan mislukt")}finally{v(!1)}}};return x.jsx("div",{className:"admin-modal__backdrop",onMouseDown:a,children:x.jsxs("div",{className:"admin-modal",onMouseDown:y=>y.stopPropagation(),children:[x.jsxs("div",{className:"admin-modal__header",children:[x.jsx("h2",{children:"Nieuw bericht"}),x.jsx("button",{className:"admin-modal__close",onClick:a,children:"✕"})]}),x.jsxs("form",{className:"admin-modal__body",onSubmit:S,children:[x.jsxs("label",{children:["Titel",x.jsx("input",{value:n,onChange:y=>r(y.target.value)})]}),x.jsxs("label",{children:["Tekst",x.jsx("textarea",{rows:8,value:o,onChange:y=>c(y.target.value)})]}),x.jsxs("label",{children:["Tonen vanaf",x.jsx("input",{type:"datetime-local",value:p,onChange:y=>h(y.target.value)})]}),x.jsxs("label",{children:["Media (optioneel)",x.jsx("input",{type:"file",accept:"image/*,video/*",onChange:y=>{var A;return T(((A=y.target.files)==null?void 0:A[0])??null)}})]}),d?x.jsxs("div",{className:"admin-modal__preview",children:[d.type.startsWith("image/")?x.jsx("img",{src:URL.createObjectURL(d),alt:"preview"}):x.jsx("video",{src:URL.createObjectURL(d),controls:!0}),x.jsx("button",{type:"button",onClick:()=>f(null),children:"Bijlage verwijderen"})]}):null,_?x.jsxs("div",{className:"admin-modal__error",children:[x.jsx("strong",{children:"Fout:"})," ",_]}):null,x.jsxs("div",{className:"admin-modal__actions",children:[x.jsx("button",{type:"button",className:"btn-secondary",onClick:a,children:"Annuleren"}),x.jsx("button",{type:"submit",className:"btn-primary",disabled:!M,children:g?"Opslaan…":"Opslaan"})]})]})]})})}const q2=a=>a?String(a).slice(0,16).replace(" ","T"):"",Y2=a=>a?a.replace("T"," ")+":00":"";function K2({message:a,onClose:e,onSaved:n}){const[r,o]=O.useState(a.title||""),[c,d]=O.useState(a.body||""),[f,p]=O.useState(null),[h,g]=O.useState(q2(a.publish_at)),[v,_]=O.useState(!1),[b,M]=O.useState(null),T=r.trim()!==""&&c.trim()!==""&&!v,S=A=>{if(!A){p(null);return}if(!A.type.startsWith("image/")&&!A.type.startsWith("video/")){M("Alleen afbeelding of video toegestaan.");return}M(null),p(A)},y=async A=>{if(A.preventDefault(),!!T){_(!0),M(null);try{await f2(a.id,{title:r.trim(),body:c.trim(),mediaFile:f,publish_at:h?Y2(h):""}),n()}catch(w){M(w.message||"Opslaan mislukt")}finally{_(!1)}}};return x.jsx("div",{className:"admin-modal__backdrop",onMouseDown:e,children:x.jsxs("div",{className:"admin-modal",onMouseDown:A=>A.stopPropagation(),children:[x.jsxs("div",{className:"admin-modal__header",children:[x.jsx("h2",{children:"Bericht bewerken"}),x.jsx("button",{className:"admin-modal__close",onClick:e,children:"✕"})]}),x.jsxs("form",{className:"admin-modal__body",onSubmit:y,children:[x.jsxs("label",{children:["Titel",x.jsx("input",{value:r,onChange:A=>o(A.target.value)})]}),x.jsxs("label",{children:["Tekst",x.jsx("textarea",{rows:8,value:c,onChange:A=>d(A.target.value)})]}),x.jsxs("label",{children:["Tonen vanaf",x.jsx("input",{type:"datetime-local",value:h,onChange:A=>g(A.target.value)})]}),x.jsxs("div",{className:"admin-modal__existing",children:[x.jsx("strong",{children:"Bestaande bijlage:"})," ",a.media_url?x.jsx("a",{href:`${Os}${a.media_url}`,target:"_blank",rel:"noreferrer",children:"open"}):x.jsx("span",{children:"geen"})]}),x.jsxs("label",{children:["Nieuwe media (optioneel)",x.jsx("input",{type:"file",accept:"image/*,video/*",onChange:A=>{var w;return S(((w=A.target.files)==null?void 0:w[0])??null)}})]}),f?x.jsxs("div",{className:"admin-modal__preview",children:[f.type.startsWith("image/")?x.jsx("img",{src:URL.createObjectURL(f),alt:"preview"}):x.jsx("video",{src:URL.createObjectURL(f),controls:!0}),x.jsx("button",{type:"button",onClick:()=>p(null),children:"Nieuwe bijlage verwijderen"})]}):null,b?x.jsxs("div",{className:"admin-modal__error",children:[x.jsx("strong",{children:"Fout:"})," ",b]}):null,x.jsxs("div",{className:"admin-modal__actions",children:[x.jsx("button",{type:"button",className:"btn-secondary",onClick:e,children:"Annuleren"}),x.jsx("button",{type:"submit",className:"btn-primary",disabled:!T,children:v?"Opslaan…":"Opslaan"})]})]})]})})}function Z2(){const[a,e]=O.useState([]),[n,r]=O.useState(!0),[o,c]=O.useState(null),[d,f]=O.useState(!1),[p,h]=O.useState(null),g=()=>{r(!0),c(null),c2().then(_=>e(_)).catch(_=>c(_.message||"Failed to load messages")).finally(()=>r(!1))};O.useEffect(()=>{g()},[]);const v=async _=>{if(confirm("Weet je zeker dat je dit bericht wilt verwijderen?"))try{await h2(_),e(b=>b.filter(M=>M.id!==_))}catch(b){alert(b.message||"Verwijderen mislukt")}};return x.jsxs("div",{className:"admin-messages",children:[x.jsxs("div",{className:"admin-header",children:[x.jsx("h1",{children:"Berichten"}),x.jsx("button",{className:"new-message-btn",onClick:()=>f(!0),children:"+ Nieuw bericht"})]}),n&&x.jsx("div",{className:"admin-messages__state",children:"Berichten laden…"}),o&&x.jsxs("div",{className:"admin-messages__state admin-messages__state--error",children:[x.jsx("strong",{children:"Fout:"})," ",o]}),!n&&!o&&x.jsx("div",{className:"message-list",children:a.length===0?x.jsx("div",{className:"admin-messages__empty",children:"Nog geen berichten."}):a.map(_=>x.jsxs("div",{className:"message-card",children:[x.jsxs("div",{className:"message-left",children:[x.jsxs("div",{className:"message-badges",children:[x.jsx("div",{className:"message-badge",children:_.media_type==="image"?"IMG":_.media_type==="video"?"VID":"—"}),x.jsx("div",{className:`message-status ${_.publish_at&&new Date(_.publish_at).getTime()>Date.now()?"message-status--scheduled":"message-status--live"}`,children:_.publish_at&&new Date(_.publish_at).getTime()>Date.now()?"INGEPLAND":"LIVE"})]}),x.jsxs("div",{className:"message-info",children:[x.jsx("h2",{children:_.title}),x.jsxs("p",{className:"message-meta",children:[x.jsxs("span",{children:[x.jsx("strong",{children:"Gemaakt:"})," ",_.created_at?new Date(_.created_at).toLocaleString("nl-NL"):"—"]}),x.jsxs("span",{children:[" • ",x.jsx("strong",{children:"Actief vanaf:"})," ",_.publish_at?new Date(_.publish_at).toLocaleString("nl-NL"):"—"]}),_.media_url?x.jsx("span",{children:" • bijlage"}):null]}),x.jsxs("p",{className:"message-snippet",children:[(_.body||"").slice(0,180),(_.body||"").length>180?"…":""]})]})]}),x.jsx("div",{className:"message-right",children:x.jsxs("div",{className:"message-actions",children:[x.jsx("button",{className:"view-btn",onClick:()=>h(_),children:"Bewerken"}),x.jsx("button",{className:"delete-btn",onClick:()=>v(_.id),children:"Verwijderen"})]})})]},_.id))}),d&&x.jsx(W2,{onClose:()=>f(!1),onSaved:()=>{f(!1),g()}}),p&&x.jsx(K2,{message:p,onClose:()=>h(null),onSaved:()=>{h(null),g()}})]})}function $2(){const[a,e]=O.useState("teams"),[n,r]=O.useState([]),[o,c]=O.useState([]),[d,f]=O.useState(null),[p,h]=O.useState(null),[g,v]=O.useState(!1),[_,b]=O.useState(""),[M,T]=O.useState("all"),S=()=>{k3().then(w=>{r(w),c(w)})};O.useEffect(()=>{S()},[]);const y=()=>S();O.useEffect(()=>{if(a!=="teams")return;let w=[...n];if(_.trim()!==""){const R=_.toLowerCase();w=w.filter(F=>F.name.toLowerCase().includes(R)||F.class.toLowerCase().includes(R)||(F.members||[]).some(U=>U.name.toLowerCase().includes(R)||U.student_number.toLowerCase().includes(R)))}M!=="all"&&(w=w.filter(R=>R.class===M)),c(w)},[_,M,n,a]);const A=async w=>{confirm("Weet je zeker dat je dit team wilt verwijderen?")&&(await H3(w),r(R=>R.filter(F=>F.id!==w)))};return x.jsxs("div",{className:"admin-panel",children:[x.jsxs("div",{className:"admin-tabs",children:[x.jsx("button",{className:a==="teams"?"active":"",onClick:()=>e("teams"),children:"Teambeheer"}),x.jsx("button",{className:a==="challenges"?"active":"",onClick:()=>e("challenges"),children:"Challengebeheer"}),x.jsx("button",{className:a==="messages"?"active":"",onClick:()=>e("messages"),children:"Berichten"})]}),a==="teams"&&x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"admin-header",children:[x.jsx("h1",{children:"Teambeheer"}),x.jsxs("div",{className:"admin-filters",children:[x.jsx("input",{type:"text",placeholder:"Zoeken…",value:_,onChange:w=>b(w.target.value)}),x.jsxs("select",{value:M,onChange:w=>T(w.target.value),children:[x.jsx("option",{value:"all",children:"Alle klassen"}),[...new Set(n.map(w=>w.class))].map(w=>x.jsx("option",{value:w,children:w},w))]}),x.jsx("button",{className:"new-team-btn",onClick:()=>v(!0),children:"+ Nieuw team"})]})]}),x.jsx("div",{className:"team-list",children:o.map(w=>{var R,F;return x.jsxs("div",{className:"team-card",children:[x.jsxs("div",{className:"team-left",children:[x.jsx("img",{className:"team-avatar",src:w.image_url||"/icons/default-team.png",alt:w.name,onClick:()=>f(w),style:{cursor:"pointer"}}),x.jsxs("div",{className:"team-info",children:[x.jsx("h2",{children:w.name}),x.jsxs("p",{className:"team-meta",children:[w.class," •"," ",((R=w.members)==null?void 0:R.length)||0," leden"]}),x.jsx("p",{className:"team-members",children:(F=w.members)!=null&&F.length?w.members.map(U=>`${U.name} (${U.student_number})`).join(", "):"—"})]})]}),x.jsxs("div",{className:"team-right",children:[x.jsxs("div",{className:"team-score",children:[x.jsx("span",{children:"Punten"}),x.jsx("strong",{children:w.total_points??0})]}),x.jsxs("div",{className:"team-actions",children:[x.jsx("button",{className:"view-btn",onClick:()=>h(w),children:"Bewerken"}),x.jsx("button",{className:"delete-btn",onClick:()=>A(w.id),children:"Verwijderen"})]})]})]},w.id)})})]}),a==="challenges"&&x.jsx(V2,{}),a==="messages"&&x.jsx(Z2,{groups:n}),g&&x.jsx(j2,{onClose:()=>v(!1),onSaved:()=>{v(!1),y()}}),p&&x.jsx(B2,{team:p,onClose:()=>h(null),onSaved:()=>{h(null),y()}}),d&&x.jsx(k2,{team:d,onClose:()=>f(null),onSaved:()=>{f(null),y()}})]})}const Q2=()=>x.jsx($2,{}),J2=1e4,eT=[{endLat:52.591702,endLng:4.40262,startLat:46.227638,startLng:2.213749,color:["#ADFF2F","#00FF00"],stroke:.35},{endLat:52.591702,endLng:4.40262,startLat:56.130366,startLng:-106.34677099999999,color:["#ADFF2F","#00FF00"],stroke:.39},{endLat:52.591702,endLng:4.40262,startLat:40.463667,startLng:-3.7492199999999998,color:["#ADFF2F","#00FF00"],stroke:.28},{endLat:52.591702,endLng:4.40262,startLat:4.210483999999999,startLng:101.97576600000001,color:["#ADFF2F","#00FF00"],stroke:.13},{endLat:52.591702,endLng:4.40262,startLat:51.165690999999995,startLng:10.451526,color:["#ADFF2F","#00FF00"],stroke:.32},{endLat:52.591702,endLng:4.40262,startLat:23.634501,startLng:-102.552784,color:["#ADFF2F","#00FF00"],stroke:.15},{endLat:52.591702,endLng:4.40262,startLat:23.885942,startLng:45.079162,color:["#ADFF2F","#00FF00"],stroke:.19},{endLat:52.591702,endLng:4.40262,startLat:50.503887,startLng:4.469936,color:["#ADFF2F","#00FF00"],stroke:.16},{endLat:52.591702,endLng:4.40262,startLat:60.128161,startLng:18.643501,color:["#ADFF2F","#00FF00"],stroke:.23},{endLat:52.591702,endLng:4.40262,startLat:-14.235004,startLng:-51.92528,color:["#ADFF2F","#00FF00"],stroke:.16},{endLat:52.591702,endLng:4.40262,startLat:46.818188,startLng:8.227511999999999,color:["#ADFF2F","#00FF00"],stroke:.16},{endLat:52.591702,endLng:4.40262,startLat:-40.900557,startLng:174.88597099999998,color:["#ADFF2F","#00FF00"],stroke:.12},{endLat:52.591702,endLng:4.40262,startLat:51.919438,startLng:19.145135999999997,color:["#ADFF2F","#00FF00"],stroke:.18},{endLat:52.591702,endLng:4.40262,startLat:26.820553000000004,startLng:30.802497999999996,color:["#ADFF2F","#00FF00"],stroke:.24},{endLat:52.591702,endLng:4.40262,startLat:9.145,startLng:40.489672999999996,color:["#ADFF2F","#00FF00"],stroke:.13},{endLat:52.591702,endLng:4.40262,startLat:33.886917,startLng:9.537499,color:["#ADFF2F","#00FF00"],stroke:.22},{endLat:52.591702,endLng:4.40262,startLat:21.512583,startLng:55.923255000000005,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:-30.559482,startLng:22.937506,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:20.593684,startLng:78.96288,color:["#ADFF2F","#00FF00"],stroke:.16},{endLat:52.591702,endLng:4.40262,startLat:15.552726999999999,startLng:48.516388,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:-.023559,startLng:37.906193,color:["#ADFF2F","#00FF00"],stroke:.12},{endLat:52.591702,endLng:4.40262,startLat:28.033886,startLng:1.6596259999999998,color:["#ADFF2F","#00FF00"],stroke:.12},{endLat:52.591702,endLng:4.40262,startLat:4.570868,startLng:-74.297333,color:["#ADFF2F","#00FF00"],stroke:.15},{endLat:52.591702,endLng:4.40262,startLat:31.046051000000002,startLng:34.851612,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:29.311659999999996,startLng:47.481766,color:["#ADFF2F","#00FF00"],stroke:.15},{endLat:52.591702,endLng:4.40262,startLat:36.204824,startLng:138.252924,color:["#ADFF2F","#00FF00"],stroke:.14},{endLat:52.591702,endLng:4.40262,startLat:41.87194,startLng:12.56738,color:["#ADFF2F","#00FF00"],stroke:.16},{endLat:52.591702,endLng:4.40262,startLat:39.074208,startLng:21.824312,color:["#ADFF2F","#00FF00"],stroke:.13},{endLat:52.591702,endLng:4.40262,startLat:-25.274398,startLng:133.775136,color:["#ADFF2F","#00FF00"],stroke:.14},{endLat:52.591702,endLng:4.40262,startLat:56.879635,startLng:24.603189,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:1.352083,startLng:103.819836,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:39.399871999999995,startLng:-8.224454,color:["#ADFF2F","#00FF00"],stroke:.13},{endLat:52.591702,endLng:4.40262,startLat:47.162494,startLng:19.503304,color:["#ADFF2F","#00FF00"],stroke:.12},{endLat:52.591702,endLng:4.40262,startLat:32.427908,startLng:53.68804599999999,color:["#ADFF2F","#00FF00"],stroke:.12},{endLat:52.591702,endLng:4.40262,startLat:45.1,startLng:15.2,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:28.394857000000002,startLng:84.12400799999999,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:-.789275,startLng:113.921327,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:-1.8312389999999998,startLng:-78.183406,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:-35.675146999999996,startLng:-71.542969,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:-6.369028,startLng:34.888822,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:1.373333,startLng:32.290275,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:30.375321000000003,startLng:69.345116,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:38.963745,startLng:35.243322,color:["#ADFF2F","#00FF00"],stroke:.12},{endLat:52.591702,endLng:4.40262,startLat:42.733883,startLng:25.48583,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:49.817492,startLng:15.472961999999999,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:45.943160999999996,startLng:24.96676,color:["#ADFF2F","#00FF00"],stroke:.13},{endLat:52.591702,endLng:4.40262,startLat:48.379433,startLng:31.16558,color:["#ADFF2F","#00FF00"],stroke:.12},{endLat:52.591702,endLng:4.40262,startLat:41.153332,startLng:20.168331,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:33.854721000000005,startLng:35.862285,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:9.081999,startLng:8.675277000000001,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:14.058323999999999,startLng:108.277199,color:["#ADFF2F","#00FF00"],stroke:.13},{endLat:52.591702,endLng:4.40262,startLat:61.92411,startLng:25.748151,color:["#ADFF2F","#00FF00"],stroke:.12},{endLat:52.591702,endLng:4.40262,startLat:60.472024,startLng:8.468946,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:56.26392,startLng:9.501785,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:35.907757000000004,startLng:127.766922,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:-9.189967,startLng:-75.015152,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:12.879721,startLng:121.77401699999999,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:40.143105,startLng:47.576927000000005,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:41.377491,startLng:64.585262,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:7.946527000000001,startLng:-1.0231940000000002,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:58.595271999999994,startLng:25.013607,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:48.019573,startLng:66.923684,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:-38.416097,startLng:-63.616671999999994,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:43.750298,startLng:7.412841,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:46.151241,startLng:14.995463,color:["#ADFF2F","#00FF00"],stroke:.11},{endLat:52.591702,endLng:4.40262,startLat:61.52401,startLng:105.31875600000001,color:["#ADFF2F","#00FF00"],stroke:.12},{endLat:52.591702,endLng:4.40262,startLat:12.862807,startLng:30.217636,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:33.223191,startLng:43.679291,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:-1.940278,startLng:29.873888,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:25.354826,startLng:51.183884,color:["#ADFF2F","#00FF00"],stroke:.1},{endLat:52.591702,endLng:4.40262,startLat:9.748917,startLng:-83.753428,color:["#ADFF2F","#00FF00"],stroke:.1}],tT=eT.slice(0,J2);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="181",nT=0,Jx=1,iT=2,Vv=1,aT=2,ua=3,rr=0,Xn=1,da=2,ma=0,Ps=1,e_=2,t_=3,n_=4,rT=5,Or=100,sT=101,oT=102,lT=103,cT=104,uT=200,dT=201,fT=202,hT=203,Fh=204,Ph=205,pT=206,mT=207,gT=208,xT=209,_T=210,vT=211,bT=212,yT=213,ST=214,zh=0,Ih=1,Bh=2,Is=3,kh=4,jh=5,Hh=6,Gh=7,Xv=0,MT=1,ET=2,ar=0,TT=1,AT=2,wT=3,RT=4,CT=5,DT=6,LT=7,Wv=300,Bs=301,ks=302,Vh=303,Xh=304,Lu=306,Wh=1e3,fa=1001,qh=1002,ii=1003,NT=1004,Pc=1005,xi=1006,Jf=1007,zr=1008,_a=1009,qv=1010,Yv=1011,ll=1012,Pp=1013,Ir=1014,ha=1015,Ws=1016,zp=1017,Ip=1018,cl=1020,Kv=35902,Zv=35899,$v=1021,Qv=1022,Ai=1023,ul=1026,dl=1027,Jv=1028,Bp=1029,kp=1030,jp=1031,Hp=1033,fu=33776,hu=33777,pu=33778,mu=33779,Yh=35840,Kh=35841,Zh=35842,$h=35843,Qh=36196,Jh=37492,ep=37496,tp=37808,np=37809,ip=37810,ap=37811,rp=37812,sp=37813,op=37814,lp=37815,cp=37816,up=37817,dp=37818,fp=37819,hp=37820,pp=37821,mp=36492,gp=36494,xp=36495,_p=36283,vp=36284,bp=36285,yp=36286,UT=3200,OT=3201,FT=0,PT=1,tr="",pi="srgb",js="srgb-linear",yu="linear",kt="srgb",bs=7680,i_=519,zT=512,IT=513,BT=514,eb=515,kT=516,jT=517,HT=518,GT=519,a_=35044,r_="300 es",Bi=2e3,Su=2001;function tb(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Mu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function VT(){const a=Mu("canvas");return a.style.display="block",a}const s_={};function o_(...a){const e="THREE."+a.shift();console.log(e,...a)}function lt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function sn(...a){const e="THREE."+a.shift();console.error(e,...a)}function fl(...a){const e=a.join(" ");e in s_||(s_[e]=!0,lt(...a))}function XT(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=Math.PI/180,Sp=180/Math.PI;function gl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function St(a,e,n){return Math.max(e,Math.min(n,a))}function WT(a,e){return(a%e+e)%e}function eh(a,e,n){return(1-n)*a+n*e}function Zo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Vn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xl{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let p=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3],_=c[d+0],b=c[d+1],M=c[d+2],T=c[d+3];if(f<=0){e[n+0]=p,e[n+1]=h,e[n+2]=g,e[n+3]=v;return}if(f>=1){e[n+0]=_,e[n+1]=b,e[n+2]=M,e[n+3]=T;return}if(v!==T||p!==_||h!==b||g!==M){let S=p*_+h*b+g*M+v*T;S<0&&(_=-_,b=-b,M=-M,T=-T,S=-S);let y=1-f;if(S<.9995){const A=Math.acos(S),w=Math.sin(A);y=Math.sin(y*A)/w,f=Math.sin(f*A)/w,p=p*y+_*f,h=h*y+b*f,g=g*y+M*f,v=v*y+T*f}else{p=p*y+_*f,h=h*y+b*f,g=g*y+M*f,v=v*y+T*f;const A=1/Math.sqrt(p*p+h*h+g*g+v*v);p*=A,h*=A,g*=A,v*=A}}e[n]=p,e[n+1]=h,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],p=r[o+1],h=r[o+2],g=r[o+3],v=c[d],_=c[d+1],b=c[d+2],M=c[d+3];return e[n]=f*M+g*v+p*b-h*_,e[n+1]=p*M+g*_+h*v-f*b,e[n+2]=h*M+g*b+f*_-p*v,e[n+3]=g*M-f*v-p*_-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,h=f(r/2),g=f(o/2),v=f(c/2),_=p(r/2),b=p(o/2),M=p(c/2);switch(d){case"XYZ":this._x=_*g*v+h*b*M,this._y=h*b*v-_*g*M,this._z=h*g*M+_*b*v,this._w=h*g*v-_*b*M;break;case"YXZ":this._x=_*g*v+h*b*M,this._y=h*b*v-_*g*M,this._z=h*g*M-_*b*v,this._w=h*g*v+_*b*M;break;case"ZXY":this._x=_*g*v-h*b*M,this._y=h*b*v+_*g*M,this._z=h*g*M+_*b*v,this._w=h*g*v-_*b*M;break;case"ZYX":this._x=_*g*v-h*b*M,this._y=h*b*v+_*g*M,this._z=h*g*M-_*b*v,this._w=h*g*v+_*b*M;break;case"YZX":this._x=_*g*v+h*b*M,this._y=h*b*v+_*g*M,this._z=h*g*M-_*b*v,this._w=h*g*v-_*b*M;break;case"XZY":this._x=_*g*v-h*b*M,this._y=h*b*v-_*g*M,this._z=h*g*M+_*b*v,this._w=h*g*v+_*b*M;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],p=n[9],h=n[2],g=n[6],v=n[10],_=r+f+v;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(g-p)*b,this._y=(c-h)*b,this._z=(d-o)*b}else if(r>f&&r>v){const b=2*Math.sqrt(1+r-f-v);this._w=(g-p)/b,this._x=.25*b,this._y=(o+d)/b,this._z=(c+h)/b}else if(f>v){const b=2*Math.sqrt(1+f-r-v);this._w=(c-h)/b,this._x=(o+d)/b,this._y=.25*b,this._z=(p+g)/b}else{const b=2*Math.sqrt(1+v-r-f);this._w=(d-o)/b,this._x=(c+h)/b,this._y=(p+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,p=n._y,h=n._z,g=n._w;return this._x=r*g+d*f+o*h-c*p,this._y=o*g+d*p+c*f-r*h,this._z=c*g+d*h+r*p-o*f,this._w=d*g-r*f-o*p-c*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,c=-c,d=-d,f=-f);let p=1-n;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+d*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+d*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,n=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(l_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(l_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,p=e.w,h=2*(d*o-f*r),g=2*(f*n-c*o),v=2*(c*r-d*n);return this.x=n+p*h+d*v-f*g,this.y=r+p*g+f*h-c*v,this.z=o+p*v+c*g-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const th=new oe,l_=new xl;class ft{constructor(e,n,r,o,c,d,f,p,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,p,h)}set(e,n,r,o,c,d,f,p,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=p,g[6]=r,g[7]=d,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],p=r[6],h=r[1],g=r[4],v=r[7],_=r[2],b=r[5],M=r[8],T=o[0],S=o[3],y=o[6],A=o[1],w=o[4],R=o[7],F=o[2],U=o[5],I=o[8];return c[0]=d*T+f*A+p*F,c[3]=d*S+f*w+p*U,c[6]=d*y+f*R+p*I,c[1]=h*T+g*A+v*F,c[4]=h*S+g*w+v*U,c[7]=h*y+g*R+v*I,c[2]=_*T+b*A+M*F,c[5]=_*S+b*w+M*U,c[8]=_*y+b*R+M*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],h=e[7],g=e[8];return n*d*g-n*f*h-r*c*g+r*f*p+o*c*h-o*d*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],h=e[7],g=e[8],v=g*d-f*h,_=f*p-g*c,b=h*c-d*p,M=n*v+r*_+o*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(o*h-g*r)*T,e[2]=(f*r-o*d)*T,e[3]=_*T,e[4]=(g*n-o*p)*T,e[5]=(o*c-f*n)*T,e[6]=b*T,e[7]=(r*p-h*n)*T,e[8]=(d*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const p=Math.cos(c),h=Math.sin(c);return this.set(r*p,r*h,-r*(p*d+h*f)+d+e,-o*h,o*p,-o*(-h*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(nh.makeScale(e,n)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,n){return this.premultiply(nh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nh=new ft,c_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qT(){const a={enabled:!0,workingColorSpace:js,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===kt&&(o.r=ga(o.r),o.g=ga(o.g),o.b=ga(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(o.r=zs(o.r),o.g=zs(o.g),o.b=zs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===tr?yu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return fl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return fl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[js]:{primaries:e,whitePoint:r,transfer:yu,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),a}const Tt=qT();function ga(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function zs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ys;class YT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ys===void 0&&(ys=Mu("canvas")),ys.width=e.width,ys.height=e.height;const o=ys.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ys}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=ga(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ga(n[r]/255)*255):n[r]=ga(n[r]);return{data:n,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KT=0;class Gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=gl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(ih(o[d].image)):c.push(ih(o[d]))}else c=ih(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function ih(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?YT.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let ZT=0;const ah=new oe;class Bn extends qs{constructor(e=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,r=fa,o=fa,c=xi,d=zr,f=Ai,p=_a,h=Bn.DEFAULT_ANISOTROPY,g=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=gl(),this.name="",this.source=new Gp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wh:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wh:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Wv;Bn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,r=0,o=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,h=p[0],g=p[4],v=p[8],_=p[1],b=p[5],M=p[9],T=p[2],S=p[6],y=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+b+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(h+1)/2,R=(b+1)/2,F=(y+1)/2,U=(g+_)/4,I=(v+T)/4,H=(M+S)/4;return w>R&&w>F?w<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(w),o=U/r,c=I/r):R>F?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=U/o,c=H/o):F<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),r=I/c,o=H/c),this.set(r,o,c,n),this}let A=Math.sqrt((S-M)*(S-M)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(A)<.001&&(A=1),this.x=(S-M)/A,this.y=(v-T)/A,this.z=(_-g)/A,this.w=Math.acos((h+b+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $T extends qs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Bn(o);this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Gp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends $T{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class nb extends Bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ii,this.minFilter=ii,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QT extends Bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ii,this.minFilter=ii,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l{constructor(e=new oe(1/0,1/0,1/0),n=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Mi):Mi.fromBufferAttribute(c,d),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),zc.copy(r.boundingBox)),zc.applyMatrix4(e.matrixWorld),this.union(zc)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Ic.subVectors(this.max,$o),Ss.subVectors(e.a,$o),Ms.subVectors(e.b,$o),Es.subVectors(e.c,$o),qa.subVectors(Ms,Ss),Ya.subVectors(Es,Ms),wr.subVectors(Ss,Es);let n=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-wr.z,wr.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,wr.z,0,-wr.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-wr.y,wr.x,0];return!rh(n,Ss,Ms,Es,Ic)||(n=[1,0,0,0,1,0,0,0,1],!rh(n,Ss,Ms,Es,Ic))?!1:(Bc.crossVectors(qa,Ya),n=[Bc.x,Bc.y,Bc.z],rh(n,Ss,Ms,Es,Ic))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const aa=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Mi=new oe,zc=new _l,Ss=new oe,Ms=new oe,Es=new oe,qa=new oe,Ya=new oe,wr=new oe,$o=new oe,Ic=new oe,Bc=new oe,Rr=new oe;function rh(a,e,n,r,o){for(let c=0,d=a.length-3;c<=d;c+=3){Rr.fromArray(a,c);const f=o.x*Math.abs(Rr.x)+o.y*Math.abs(Rr.y)+o.z*Math.abs(Rr.z),p=e.dot(Rr),h=n.dot(Rr),g=r.dot(Rr);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>f)return!1}return!0}const JT=new _l,Qo=new oe,sh=new oe;class Nu{constructor(e=new oe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):JT.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const n=Qo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Qo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(sh)),this.expandByPoint(Qo.copy(e.center).sub(sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ra=new oe,oh=new oe,kc=new oe,Ka=new oe,lh=new oe,jc=new oe,ch=new oe;class ib{constructor(e=new oe,n=new oe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ra)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ra.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ra.copy(this.origin).addScaledVector(this.direction,n),ra.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){oh.copy(e).add(n).multiplyScalar(.5),kc.copy(n).sub(e).normalize(),Ka.copy(this.origin).sub(oh);const c=e.distanceTo(n)*.5,d=-this.direction.dot(kc),f=Ka.dot(this.direction),p=-Ka.dot(kc),h=Ka.lengthSq(),g=Math.abs(1-d*d);let v,_,b,M;if(g>0)if(v=d*p-f,_=d*f-p,M=c*g,v>=0)if(_>=-M)if(_<=M){const T=1/g;v*=T,_*=T,b=v*(v+d*_+2*f)+_*(d*v+_+2*p)+h}else _=c,v=Math.max(0,-(d*_+f)),b=-v*v+_*(_+2*p)+h;else _=-c,v=Math.max(0,-(d*_+f)),b=-v*v+_*(_+2*p)+h;else _<=-M?(v=Math.max(0,-(-d*c+f)),_=v>0?-c:Math.min(Math.max(-c,-p),c),b=-v*v+_*(_+2*p)+h):_<=M?(v=0,_=Math.min(Math.max(-c,-p),c),b=_*(_+2*p)+h):(v=Math.max(0,-(d*c+f)),_=v>0?c:Math.min(Math.max(-c,-p),c),b=-v*v+_*(_+2*p)+h);else _=d>0?-c:c,v=Math.max(0,-(d*_+f)),b=-v*v+_*(_+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(oh).addScaledVector(kc,_),b}intersectSphere(e,n){ra.subVectors(e.center,this.origin);const r=ra.dot(this.direction),o=ra.dot(ra)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,p;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),g>=0?(c=(e.min.y-_.y)*g,d=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,d=(e.min.y-_.y)*g),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),v>=0?(f=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,ra)!==null}intersectTriangle(e,n,r,o,c){lh.subVectors(n,e),jc.subVectors(r,e),ch.crossVectors(lh,jc);let d=this.direction.dot(ch),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;Ka.subVectors(this.origin,e);const p=f*this.direction.dot(jc.crossVectors(Ka,jc));if(p<0)return null;const h=f*this.direction.dot(lh.cross(Ka));if(h<0||p+h>d)return null;const g=-f*Ka.dot(ch);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,n,r,o,c,d,f,p,h,g,v,_,b,M,T,S){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,p,h,g,v,_,b,M,T,S)}set(e,n,r,o,c,d,f,p,h,g,v,_,b,M,T,S){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=c,y[5]=d,y[9]=f,y[13]=p,y[2]=h,y[6]=g,y[10]=v,y[14]=_,y[3]=b,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),d=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),h=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=d*g,b=d*v,M=f*g,T=f*v;n[0]=p*g,n[4]=-p*v,n[8]=h,n[1]=b+M*h,n[5]=_-T*h,n[9]=-f*p,n[2]=T-_*h,n[6]=M+b*h,n[10]=d*p}else if(e.order==="YXZ"){const _=p*g,b=p*v,M=h*g,T=h*v;n[0]=_+T*f,n[4]=M*f-b,n[8]=d*h,n[1]=d*v,n[5]=d*g,n[9]=-f,n[2]=b*f-M,n[6]=T+_*f,n[10]=d*p}else if(e.order==="ZXY"){const _=p*g,b=p*v,M=h*g,T=h*v;n[0]=_-T*f,n[4]=-d*v,n[8]=M+b*f,n[1]=b+M*f,n[5]=d*g,n[9]=T-_*f,n[2]=-d*h,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const _=d*g,b=d*v,M=f*g,T=f*v;n[0]=p*g,n[4]=M*h-b,n[8]=_*h+T,n[1]=p*v,n[5]=T*h+_,n[9]=b*h-M,n[2]=-h,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const _=d*p,b=d*h,M=f*p,T=f*h;n[0]=p*g,n[4]=T-_*v,n[8]=M*v+b,n[1]=v,n[5]=d*g,n[9]=-f*g,n[2]=-h*g,n[6]=b*v+M,n[10]=_-T*v}else if(e.order==="XZY"){const _=d*p,b=d*h,M=f*p,T=f*h;n[0]=p*g,n[4]=-v,n[8]=h*g,n[1]=_*v+T,n[5]=d*g,n[9]=b*v-M,n[2]=M*v-b,n[6]=f*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eA,e,tA)}lookAt(e,n,r){const o=this.elements;return ei.subVectors(e,n),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Za.crossVectors(r,ei),Za.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Za.crossVectors(r,ei)),Za.normalize(),Hc.crossVectors(ei,Za),o[0]=Za.x,o[4]=Hc.x,o[8]=ei.x,o[1]=Za.y,o[5]=Hc.y,o[9]=ei.y,o[2]=Za.z,o[6]=Hc.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],p=r[8],h=r[12],g=r[1],v=r[5],_=r[9],b=r[13],M=r[2],T=r[6],S=r[10],y=r[14],A=r[3],w=r[7],R=r[11],F=r[15],U=o[0],I=o[4],H=o[8],L=o[12],C=o[1],G=o[5],ee=o[9],ce=o[13],he=o[2],J=o[6],B=o[10],Y=o[14],K=o[3],ve=o[7],z=o[11],q=o[15];return c[0]=d*U+f*C+p*he+h*K,c[4]=d*I+f*G+p*J+h*ve,c[8]=d*H+f*ee+p*B+h*z,c[12]=d*L+f*ce+p*Y+h*q,c[1]=g*U+v*C+_*he+b*K,c[5]=g*I+v*G+_*J+b*ve,c[9]=g*H+v*ee+_*B+b*z,c[13]=g*L+v*ce+_*Y+b*q,c[2]=M*U+T*C+S*he+y*K,c[6]=M*I+T*G+S*J+y*ve,c[10]=M*H+T*ee+S*B+y*z,c[14]=M*L+T*ce+S*Y+y*q,c[3]=A*U+w*C+R*he+F*K,c[7]=A*I+w*G+R*J+F*ve,c[11]=A*H+w*ee+R*B+F*z,c[15]=A*L+w*ce+R*Y+F*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],p=e[9],h=e[13],g=e[2],v=e[6],_=e[10],b=e[14],M=e[3],T=e[7],S=e[11],y=e[15];return M*(+c*p*v-o*h*v-c*f*_+r*h*_+o*f*b-r*p*b)+T*(+n*p*b-n*h*_+c*d*_-o*d*b+o*h*g-c*p*g)+S*(+n*h*v-n*f*b-c*d*v+r*d*b+c*f*g-r*h*g)+y*(-o*f*g-n*p*v+n*f*_+o*d*v-r*d*_+r*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],h=e[7],g=e[8],v=e[9],_=e[10],b=e[11],M=e[12],T=e[13],S=e[14],y=e[15],A=v*S*h-T*_*h+T*p*b-f*S*b-v*p*y+f*_*y,w=M*_*h-g*S*h-M*p*b+d*S*b+g*p*y-d*_*y,R=g*T*h-M*v*h+M*f*b-d*T*b-g*f*y+d*v*y,F=M*v*p-g*T*p-M*f*_+d*T*_+g*f*S-d*v*S,U=n*A+r*w+o*R+c*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return e[0]=A*I,e[1]=(T*_*c-v*S*c-T*o*b+r*S*b+v*o*y-r*_*y)*I,e[2]=(f*S*c-T*p*c+T*o*h-r*S*h-f*o*y+r*p*y)*I,e[3]=(v*p*c-f*_*c-v*o*h+r*_*h+f*o*b-r*p*b)*I,e[4]=w*I,e[5]=(g*S*c-M*_*c+M*o*b-n*S*b-g*o*y+n*_*y)*I,e[6]=(M*p*c-d*S*c-M*o*h+n*S*h+d*o*y-n*p*y)*I,e[7]=(d*_*c-g*p*c+g*o*h-n*_*h-d*o*b+n*p*b)*I,e[8]=R*I,e[9]=(M*v*c-g*T*c-M*r*b+n*T*b+g*r*y-n*v*y)*I,e[10]=(d*T*c-M*f*c+M*r*h-n*T*h-d*r*y+n*f*y)*I,e[11]=(g*f*c-d*v*c-g*r*h+n*v*h+d*r*b-n*f*b)*I,e[12]=F*I,e[13]=(g*T*o-M*v*o+M*r*_-n*T*_-g*r*S+n*v*S)*I,e[14]=(M*f*o-d*T*o-M*r*p+n*T*p+d*r*S-n*f*S)*I,e[15]=(d*v*o-g*f*o+g*r*p-n*v*p-d*r*_+n*f*_)*I,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,p=e.z,h=c*d,g=c*f;return this.set(h*d+r,h*f-o*p,h*p+o*f,0,h*f+o*p,g*f+r,g*p-o*d,0,h*p-o*f,g*p+o*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,p=n._w,h=c+c,g=d+d,v=f+f,_=c*h,b=c*g,M=c*v,T=d*g,S=d*v,y=f*v,A=p*h,w=p*g,R=p*v,F=r.x,U=r.y,I=r.z;return o[0]=(1-(T+y))*F,o[1]=(b+R)*F,o[2]=(M-w)*F,o[3]=0,o[4]=(b-R)*U,o[5]=(1-(_+y))*U,o[6]=(S+A)*U,o[7]=0,o[8]=(M+w)*I,o[9]=(S-A)*I,o[10]=(1-(_+T))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Ts.set(o[0],o[1],o[2]).length();const d=Ts.set(o[4],o[5],o[6]).length(),f=Ts.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],Ei.copy(this);const h=1/c,g=1/d,v=1/f;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,n.setFromRotationMatrix(Ei),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,o,c,d,f=Bi,p=!1){const h=this.elements,g=2*c/(n-e),v=2*c/(r-o),_=(n+e)/(n-e),b=(r+o)/(r-o);let M,T;if(p)M=c/(d-c),T=d*c/(d-c);else if(f===Bi)M=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(f===Su)M=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=Bi,p=!1){const h=this.elements,g=2/(n-e),v=2/(r-o),_=-(n+e)/(n-e),b=-(r+o)/(r-o);let M,T;if(p)M=1/(d-c),T=d/(d-c);else if(f===Bi)M=-2/(d-c),T=-(d+c)/(d-c);else if(f===Su)M=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new oe,Ei=new hn,eA=new oe(0,0,0),tA=new oe(1,1,1),Za=new oe,Hc=new oe,ei=new oe,d_=new hn,f_=new xl;class va{constructor(e=0,n=0,r=0,o=va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],p=o[1],h=o[5],g=o[9],v=o[2],_=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,b),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,b));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return d_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return f_.setFromEuler(this),this.setFromQuaternion(f_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class ab{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nA=0;const h_=new oe,As=new xl,sa=new hn,Gc=new oe,Jo=new oe,iA=new oe,aA=new xl,p_=new oe(1,0,0),m_=new oe(0,1,0),g_=new oe(0,0,1),x_={type:"added"},rA={type:"removed"},ws={type:"childadded",child:null},uh={type:"childremoved",child:null};class Wn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nA++}),this.uuid=gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new oe,n=new va,r=new xl,o=new oe(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new hn},normalMatrix:{value:new ft}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ab,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(p_,e)}rotateY(e){return this.rotateOnAxis(m_,e)}rotateZ(e){return this.rotateOnAxis(g_,e)}translateOnAxis(e,n){return h_.copy(e).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(p_,e)}translateY(e){return this.translateOnAxis(m_,e)}translateZ(e){return this.translateOnAxis(g_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Gc.copy(e):Gc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Jo,Gc,this.up):sa.lookAt(Gc,Jo,this.up),this.quaternion.setFromRotationMatrix(sa),o&&(sa.extractRotation(o.matrixWorld),As.setFromRotationMatrix(sa),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x_),ws.child=e,this.dispatchEvent(ws),ws.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rA),uh.child=e,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x_),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,iA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,aA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const v=p[h];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),h=d(e.textures),g=d(e.images),v=d(e.shapes),_=d(e.skeletons),b=d(e.animations),M=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),b.length>0&&(r.animations=b),M.length>0&&(r.nodes=M)}return r.object=o,r;function d(f){const p=[];for(const h in f){const g=f[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Wn.DEFAULT_UP=new oe(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new oe,oa=new oe,dh=new oe,la=new oe,Rs=new oe,Cs=new oe,__=new oe,fh=new oe,hh=new oe,ph=new oe,mh=new on,gh=new on,xh=new on;class gi{constructor(e=new oe,n=new oe,r=new oe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ti.subVectors(e,n),o.cross(Ti);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Ti.subVectors(o,n),oa.subVectors(r,n),dh.subVectors(e,n);const d=Ti.dot(Ti),f=Ti.dot(oa),p=Ti.dot(dh),h=oa.dot(oa),g=oa.dot(dh),v=d*h-f*f;if(v===0)return c.set(0,0,0),null;const _=1/v,b=(h*p-f*g)*_,M=(d*g-f*p)*_;return c.set(1-b-M,M,b)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(e,n,r,o,c,d,f,p){return this.getBarycoord(e,n,r,o,la)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,la.x),p.addScaledVector(d,la.y),p.addScaledVector(f,la.z),p)}static getInterpolatedAttribute(e,n,r,o,c,d){return mh.setScalar(0),gh.setScalar(0),xh.setScalar(0),mh.fromBufferAttribute(e,n),gh.fromBufferAttribute(e,r),xh.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(mh,c.x),d.addScaledVector(gh,c.y),d.addScaledVector(xh,c.z),d}static isFrontFacing(e,n,r,o){return Ti.subVectors(r,n),oa.subVectors(e,n),Ti.cross(oa).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ti.cross(oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return gi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return gi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;Rs.subVectors(o,r),Cs.subVectors(c,r),fh.subVectors(e,r);const p=Rs.dot(fh),h=Cs.dot(fh);if(p<=0&&h<=0)return n.copy(r);hh.subVectors(e,o);const g=Rs.dot(hh),v=Cs.dot(hh);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*h;if(_<=0&&p>=0&&g<=0)return d=p/(p-g),n.copy(r).addScaledVector(Rs,d);ph.subVectors(e,c);const b=Rs.dot(ph),M=Cs.dot(ph);if(M>=0&&b<=M)return n.copy(c);const T=b*h-p*M;if(T<=0&&h>=0&&M<=0)return f=h/(h-M),n.copy(r).addScaledVector(Cs,f);const S=g*M-b*v;if(S<=0&&v-g>=0&&b-M>=0)return __.subVectors(c,o),f=(v-g)/(v-g+(b-M)),n.copy(o).addScaledVector(__,f);const y=1/(S+T+_);return d=T*y,f=_*y,n.copy(r).addScaledVector(Rs,d).addScaledVector(Cs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function _h(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Ot{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Tt.workingColorSpace){if(e=WT(e,1),n=St(n,0,1),r=St(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=_h(d,c,e+1/3),this.g=_h(d,c,e),this.b=_h(d,c,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,n=pi){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const r=rb[e.toLowerCase()];return r!==void 0?this.setHex(r,n):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Tt.workingToColorSpace(On.copy(this),e),Math.round(St(On.r*255,0,255))*65536+Math.round(St(On.g*255,0,255))*256+Math.round(St(On.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(On.copy(this),n);const r=On.r,o=On.g,c=On.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let p,h;const g=(f+d)/2;if(f===d)p=0,h=0;else{const v=d-f;switch(h=g<=.5?v/(d+f):v/(2-d-f),d){case r:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-r)/v+2;break;case c:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(On.copy(this),n),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=pi){Tt.workingToColorSpace(On.copy(this),e);const n=On.r,r=On.g,o=On.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL($a),this.setHSL($a.h+e,$a.s+n,$a.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL($a),e.getHSL(Vc);const r=eh($a.h,Vc.h,n),o=eh($a.s,Vc.s,n),c=eh($a.l,Vc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ot;Ot.NAMES=rb;let sA=0;class vl extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=gl(),this.name="",this.type="Material",this.blending=Ps,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Ph,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){lt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ph&&(r.blendDst=this.blendDst),this.blendEquation!==Or&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sb extends vl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new oe,Xc=new Ct;let oA=0;class ki{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=a_,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Xc.fromBufferAttribute(this,n),Xc.applyMatrix3(e),this.setXY(n,Xc.x,Xc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Zo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array),o=Vn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array),o=Vn(o,this.array),c=Vn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==a_&&(e.usage=this.usage),e}}class ob extends ki{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class lb extends ki{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ai extends ki{constructor(e,n,r){super(new Float32Array(e),n,r)}}let lA=0;const hi=new hn,vh=new Wn,Ds=new oe,ti=new _l,el=new _l,Tn=new oe;class Di extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tb(e)?lb:ob)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,n,r){return hi.makeTranslation(e,n,r),this.applyMatrix4(hi),this}scale(e,n,r){return hi.makeScale(e,n,r),this.applyMatrix4(hi),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ai(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];el.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(ti.min,el.min),ti.expandByPoint(Tn),Tn.addVectors(ti.max,el.max),ti.expandByPoint(Tn)):(ti.expandByPoint(el.min),ti.expandByPoint(el.max))}ti.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)Tn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Tn));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],p=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)Tn.fromBufferAttribute(f,h),p&&(Ds.fromBufferAttribute(e,h),Tn.add(Ds)),o=Math.max(o,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let H=0;H<r.count;H++)f[H]=new oe,p[H]=new oe;const h=new oe,g=new oe,v=new oe,_=new Ct,b=new Ct,M=new Ct,T=new oe,S=new oe;function y(H,L,C){h.fromBufferAttribute(r,H),g.fromBufferAttribute(r,L),v.fromBufferAttribute(r,C),_.fromBufferAttribute(c,H),b.fromBufferAttribute(c,L),M.fromBufferAttribute(c,C),g.sub(h),v.sub(h),b.sub(_),M.sub(_);const G=1/(b.x*M.y-M.x*b.y);isFinite(G)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-b.y).multiplyScalar(G),S.copy(v).multiplyScalar(b.x).addScaledVector(g,-M.x).multiplyScalar(G),f[H].add(T),f[L].add(T),f[C].add(T),p[H].add(S),p[L].add(S),p[C].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let H=0,L=A.length;H<L;++H){const C=A[H],G=C.start,ee=C.count;for(let ce=G,he=G+ee;ce<he;ce+=3)y(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const w=new oe,R=new oe,F=new oe,U=new oe;function I(H){F.fromBufferAttribute(o,H),U.copy(F);const L=f[H];w.copy(L),w.sub(F.multiplyScalar(F.dot(L))).normalize(),R.crossVectors(U,L);const G=R.dot(p[H])<0?-1:1;d.setXYZW(H,w.x,w.y,w.z,G)}for(let H=0,L=A.length;H<L;++H){const C=A[H],G=C.start,ee=C.count;for(let ce=G,he=G+ee;ce<he;ce+=3)I(e.getX(ce+0)),I(e.getX(ce+1)),I(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ki(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,b=r.count;_<b;_++)r.setXYZ(_,0,0,0);const o=new oe,c=new oe,d=new oe,f=new oe,p=new oe,h=new oe,g=new oe,v=new oe;if(e)for(let _=0,b=e.count;_<b;_+=3){const M=e.getX(_+0),T=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,S),g.subVectors(d,c),v.subVectors(o,c),g.cross(v),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),f.add(g),p.add(g),h.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,b=n.count;_<b;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),d.fromBufferAttribute(n,_+2),g.subVectors(d,c),v.subVectors(o,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Tn.fromBufferAttribute(e,n),Tn.normalize(),e.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(f,p){const h=f.array,g=f.itemSize,v=f.normalized,_=new h.constructor(p.length*g);let b=0,M=0;for(let T=0,S=p.length;T<S;T++){f.isInterleavedBufferAttribute?b=p[T]*f.data.stride+f.offset:b=p[T]*g;for(let y=0;y<g;y++)_[M++]=h[b++]}return new ki(_,g,v)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Di,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=e(p,r);n.setAttribute(f,h)}const c=this.morphAttributes;for(const f in c){const p=[],h=c[f];for(let g=0,v=h.length;g<v;g++){const _=h[g],b=e(_,r);p.push(b)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const h=d[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let v=0,_=h.length;v<_;v++){const b=h[v];g.push(b.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const c=e.morphAttributes;for(const h in c){const g=[],v=c[h];for(let _=0,b=v.length;_<b;_++)g.push(v[_].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,g=d.length;h<g;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new hn,Cr=new ib,Wc=new Nu,b_=new oe,qc=new oe,Yc=new oe,Kc=new oe,bh=new oe,Zc=new oe,y_=new oe,$c=new oe;class sr extends Wn{constructor(e=new Di,n=new sb){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){Zc.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const g=f[p],v=c[p];g!==0&&(bh.fromBufferAttribute(v,e),d?Zc.addScaledVector(bh,g):Zc.addScaledVector(bh.sub(n),g))}n.add(Zc)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wc.copy(r.boundingSphere),Wc.applyMatrix4(c),Cr.copy(e.ray).recast(e.near),!(Wc.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Wc,b_)===null||Cr.origin.distanceToSquared(b_)>(e.far-e.near)**2))&&(v_.copy(c).invert(),Cr.copy(e.ray).applyMatrix4(v_),!(r.boundingBox!==null&&Cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,b=c.drawRange;if(f!==null)if(Array.isArray(d))for(let M=0,T=_.length;M<T;M++){const S=_[M],y=d[S.materialIndex],A=Math.max(S.start,b.start),w=Math.min(f.count,Math.min(S.start+S.count,b.start+b.count));for(let R=A,F=w;R<F;R+=3){const U=f.getX(R),I=f.getX(R+1),H=f.getX(R+2);o=Qc(this,y,e,r,h,g,v,U,I,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,b.start),T=Math.min(f.count,b.start+b.count);for(let S=M,y=T;S<y;S+=3){const A=f.getX(S),w=f.getX(S+1),R=f.getX(S+2);o=Qc(this,d,e,r,h,g,v,A,w,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let M=0,T=_.length;M<T;M++){const S=_[M],y=d[S.materialIndex],A=Math.max(S.start,b.start),w=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let R=A,F=w;R<F;R+=3){const U=R,I=R+1,H=R+2;o=Qc(this,y,e,r,h,g,v,U,I,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,b.start),T=Math.min(p.count,b.start+b.count);for(let S=M,y=T;S<y;S+=3){const A=S,w=S+1,R=S+2;o=Qc(this,d,e,r,h,g,v,A,w,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function cA(a,e,n,r,o,c,d,f){let p;if(e.side===Xn?p=r.intersectTriangle(d,c,o,!0,f):p=r.intersectTriangle(o,c,d,e.side===rr,f),p===null)return null;$c.copy(f),$c.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo($c);return h<n.near||h>n.far?null:{distance:h,point:$c.clone(),object:a}}function Qc(a,e,n,r,o,c,d,f,p,h){a.getVertexPosition(f,qc),a.getVertexPosition(p,Yc),a.getVertexPosition(h,Kc);const g=cA(a,e,n,r,qc,Yc,Kc,y_);if(g){const v=new oe;gi.getBarycoord(y_,qc,Yc,Kc,v),o&&(g.uv=gi.getInterpolatedAttribute(o,f,p,h,v,new Ct)),c&&(g.uv1=gi.getInterpolatedAttribute(c,f,p,h,v,new Ct)),d&&(g.normal=gi.getInterpolatedAttribute(d,f,p,h,v,new oe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:p,c:h,normal:new oe,materialIndex:0};gi.getNormal(qc,Yc,Kc,_.normal),g.face=_,g.barycoord=v}return g}class bl extends Di{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],h=[],g=[],v=[];let _=0,b=0;M("z","y","x",-1,-1,r,n,e,d,c,0),M("z","y","x",1,-1,r,n,-e,d,c,1),M("x","z","y",1,1,e,r,n,o,d,2),M("x","z","y",1,-1,e,r,-n,o,d,3),M("x","y","z",1,-1,e,n,r,o,c,4),M("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new ai(h,3)),this.setAttribute("normal",new ai(g,3)),this.setAttribute("uv",new ai(v,2));function M(T,S,y,A,w,R,F,U,I,H,L){const C=R/I,G=F/H,ee=R/2,ce=F/2,he=U/2,J=I+1,B=H+1;let Y=0,K=0;const ve=new oe;for(let z=0;z<B;z++){const q=z*G-ce;for(let fe=0;fe<J;fe++){const xe=fe*C-ee;ve[T]=xe*A,ve[S]=q*w,ve[y]=he,h.push(ve.x,ve.y,ve.z),ve[T]=0,ve[S]=0,ve[y]=U>0?1:-1,g.push(ve.x,ve.y,ve.z),v.push(fe/I),v.push(1-z/H),Y+=1}}for(let z=0;z<H;z++)for(let q=0;q<I;q++){const fe=_+q+J*z,xe=_+q+J*(z+1),Ce=_+(q+1)+J*(z+1),Ie=_+(q+1)+J*z;p.push(fe,xe,Ie),p.push(xe,Ce,Ie),K+=6}f.addGroup(b,K,L),b+=K,_+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function In(a){const e={};for(let n=0;n<a.length;n++){const r=Hs(a[n]);for(const o in r)e[o]=r[o]}return e}function uA(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function cb(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const dA={clone:Hs,merge:In};var fA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ba extends vl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fA,this.fragmentShader=hA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=uA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ub extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new oe,S_=new Ct,M_=new Ct;class mi extends ub{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sp*2*Math.atan(Math.tan(gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,n){return this.getViewBounds(e,S_,M_),n.subVectors(M_,S_)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,h=d.fullHeight;c+=d.offsetX*o/p,n-=d.offsetY*r/h,o*=d.width/p,r*=d.height/h}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ns=1;class pA extends Wn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new mi(Ls,Ns,e,n);o.layers=this.layers,this.add(o);const c=new mi(Ls,Ns,e,n);c.layers=this.layers,this.add(c);const d=new mi(Ls,Ns,e,n);d.layers=this.layers,this.add(d);const f=new mi(Ls,Ns,e,n);f.layers=this.layers,this.add(f);const p=new mi(Ls,Ns,e,n);p.layers=this.layers,this.add(p);const h=new mi(Ls,Ns,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,p]=n;for(const h of n)this.remove(h);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Su)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,h,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(v,_,b),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class db extends Bn{constructor(e=[],n=Bs,r,o,c,d,f,p,h,g){super(e,n,r,o,c,d,f,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mA extends Br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new db(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new bl(5,5,5),c=new ba({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ma});c.uniforms.tEquirect.value=n;const d=new sr(o,c),f=n.minFilter;return n.minFilter===zr&&(n.minFilter=xi),new pA(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}class Jc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gA={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,r),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=g.position.distanceTo(v.position),b=.02,M=.005;h.inputState.pinching&&_>b+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=b-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(gA)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Jc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class xA extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class _A extends Bn{constructor(e=null,n=1,r=1,o,c,d,f,p,h=ii,g=ii,v,_){super(null,d,f,p,h,g,o,c,v,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new oe,vA=new oe,bA=new ft;class Ur{constructor(e=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Sh.subVectors(r,n).cross(vA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Sh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||bA.getNormalMatrix(e),o=this.coplanarPoint(Sh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new Nu,yA=new Ct(.5,.5),eu=new oe;class fb{constructor(e=new Ur,n=new Ur,r=new Ur,o=new Ur,c=new Ur,d=new Ur){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi,r=!1){const o=this.planes,c=e.elements,d=c[0],f=c[1],p=c[2],h=c[3],g=c[4],v=c[5],_=c[6],b=c[7],M=c[8],T=c[9],S=c[10],y=c[11],A=c[12],w=c[13],R=c[14],F=c[15];if(o[0].setComponents(h-d,b-g,y-M,F-A).normalize(),o[1].setComponents(h+d,b+g,y+M,F+A).normalize(),o[2].setComponents(h+f,b+v,y+T,F+w).normalize(),o[3].setComponents(h-f,b-v,y-T,F-w).normalize(),r)o[4].setComponents(p,_,S,R).normalize(),o[5].setComponents(h-p,b-_,y-S,F-R).normalize();else if(o[4].setComponents(h-p,b-_,y-S,F-R).normalize(),n===Bi)o[5].setComponents(h+p,b+_,y+S,F+R).normalize();else if(n===Su)o[5].setComponents(p,_,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const n=yA.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(eu.x=o.normal.x>0?e.max.x:e.min.x,eu.y=o.normal.y>0?e.max.y:e.min.y,eu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hb extends vl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eu=new oe,Tu=new oe,E_=new hn,tl=new ib,tu=new Nu,Mh=new oe,T_=new oe;class SA extends Wn{constructor(e=new Di,n=new hb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Eu.fromBufferAttribute(n,o-1),Tu.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Eu.distanceTo(Tu);e.setAttribute("lineDistance",new ai(r,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),tu.copy(r.boundingSphere),tu.applyMatrix4(o),tu.radius+=c,e.ray.intersectsSphere(tu)===!1)return;E_.copy(o).invert(),tl.copy(e.ray).applyMatrix4(E_);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const b=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let T=b,S=M-1;T<S;T+=h){const y=g.getX(T),A=g.getX(T+1),w=nu(this,e,tl,p,y,A,T);w&&n.push(w)}if(this.isLineLoop){const T=g.getX(M-1),S=g.getX(b),y=nu(this,e,tl,p,T,S,M-1);y&&n.push(y)}}else{const b=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let T=b,S=M-1;T<S;T+=h){const y=nu(this,e,tl,p,T,T+1,T);y&&n.push(y)}if(this.isLineLoop){const T=nu(this,e,tl,p,M-1,b,M-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function nu(a,e,n,r,o,c,d){const f=a.geometry.attributes.position;if(Eu.fromBufferAttribute(f,o),Tu.fromBufferAttribute(f,c),n.distanceSqToSegment(Eu,Tu,Mh,T_)>r)return;Mh.applyMatrix4(a.matrixWorld);const h=e.ray.origin.distanceTo(Mh);if(!(h<e.near||h>e.far))return{distance:h,point:T_.clone().applyMatrix4(a.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:a}}const A_=new oe,w_=new oe;class MA extends SA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)A_.fromBufferAttribute(n,o),w_.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+A_.distanceTo(w_);e.setAttribute("lineDistance",new ai(r,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pb extends Bn{constructor(e,n,r=Ir,o,c,d,f=ii,p=ii,h,g=ul,v=1){if(g!==ul&&g!==dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:v};super(_,o,c,d,f,p,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class mb extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vp extends Di{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],d=[];f(o),h(r),g(),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(c.slice(),3)),this.setAttribute("uv",new ai(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(A){const w=new oe,R=new oe,F=new oe;for(let U=0;U<n.length;U+=3)b(n[U+0],w),b(n[U+1],R),b(n[U+2],F),p(w,R,F,A)}function p(A,w,R,F){const U=F+1,I=[];for(let H=0;H<=U;H++){I[H]=[];const L=A.clone().lerp(R,H/U),C=w.clone().lerp(R,H/U),G=U-H;for(let ee=0;ee<=G;ee++)ee===0&&H===U?I[H][ee]=L:I[H][ee]=L.clone().lerp(C,ee/G)}for(let H=0;H<U;H++)for(let L=0;L<2*(U-H)-1;L++){const C=Math.floor(L/2);L%2===0?(_(I[H][C+1]),_(I[H+1][C]),_(I[H][C])):(_(I[H][C+1]),_(I[H+1][C+1]),_(I[H+1][C]))}}function h(A){const w=new oe;for(let R=0;R<c.length;R+=3)w.x=c[R+0],w.y=c[R+1],w.z=c[R+2],w.normalize().multiplyScalar(A),c[R+0]=w.x,c[R+1]=w.y,c[R+2]=w.z}function g(){const A=new oe;for(let w=0;w<c.length;w+=3){A.x=c[w+0],A.y=c[w+1],A.z=c[w+2];const R=S(A)/2/Math.PI+.5,F=y(A)/Math.PI+.5;d.push(R,1-F)}M(),v()}function v(){for(let A=0;A<d.length;A+=6){const w=d[A+0],R=d[A+2],F=d[A+4],U=Math.max(w,R,F),I=Math.min(w,R,F);U>.9&&I<.1&&(w<.2&&(d[A+0]+=1),R<.2&&(d[A+2]+=1),F<.2&&(d[A+4]+=1))}}function _(A){c.push(A.x,A.y,A.z)}function b(A,w){const R=A*3;w.x=e[R+0],w.y=e[R+1],w.z=e[R+2]}function M(){const A=new oe,w=new oe,R=new oe,F=new oe,U=new Ct,I=new Ct,H=new Ct;for(let L=0,C=0;L<c.length;L+=9,C+=6){A.set(c[L+0],c[L+1],c[L+2]),w.set(c[L+3],c[L+4],c[L+5]),R.set(c[L+6],c[L+7],c[L+8]),U.set(d[C+0],d[C+1]),I.set(d[C+2],d[C+3]),H.set(d[C+4],d[C+5]),F.copy(A).add(w).add(R).divideScalar(3);const G=S(F);T(U,C+0,A,G),T(I,C+2,w,G),T(H,C+4,R,G)}}function T(A,w,R,F){F<0&&A.x===1&&(d[w]=A.x-1),R.x===0&&R.z===0&&(d[w]=F/2/Math.PI+.5)}function S(A){return Math.atan2(A.z,-A.x)}function y(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.vertices,e.indices,e.radius,e.details)}}const iu=new oe,au=new oe,Eh=new oe,ru=new gi;class EA extends Di{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const o=Math.pow(10,4),c=Math.cos(gu*n),d=e.getIndex(),f=e.getAttribute("position"),p=d?d.count:f.count,h=[0,0,0],g=["a","b","c"],v=new Array(3),_={},b=[];for(let M=0;M<p;M+=3){d?(h[0]=d.getX(M),h[1]=d.getX(M+1),h[2]=d.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:T,b:S,c:y}=ru;if(T.fromBufferAttribute(f,h[0]),S.fromBufferAttribute(f,h[1]),y.fromBufferAttribute(f,h[2]),ru.getNormal(Eh),v[0]=`${Math.round(T.x*o)},${Math.round(T.y*o)},${Math.round(T.z*o)}`,v[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,v[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let A=0;A<3;A++){const w=(A+1)%3,R=v[A],F=v[w],U=ru[g[A]],I=ru[g[w]],H=`${R}_${F}`,L=`${F}_${R}`;L in _&&_[L]?(Eh.dot(_[L].normal)<=c&&(b.push(U.x,U.y,U.z),b.push(I.x,I.y,I.z)),_[L]=null):H in _||(_[H]={index0:h[A],index1:h[w],normal:Eh.clone()})}}for(const M in _)if(_[M]){const{index0:T,index1:S}=_[M];iu.fromBufferAttribute(f,T),au.fromBufferAttribute(f,S),b.push(iu.x,iu.y,iu.z),b.push(au.x,au.y,au.z)}this.setAttribute("position",new ai(b,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xp extends Vp{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Xp(e.radius,e.detail)}}class Uu extends Di{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),p=Math.floor(o),h=f+1,g=p+1,v=e/f,_=n/p,b=[],M=[],T=[],S=[];for(let y=0;y<g;y++){const A=y*_-d;for(let w=0;w<h;w++){const R=w*v-c;M.push(R,-A,0),T.push(0,0,1),S.push(w/f),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let A=0;A<f;A++){const w=A+h*y,R=A+h*(y+1),F=A+1+h*(y+1),U=A+1+h*y;b.push(w,R,U),b.push(R,F,U)}this.setIndex(b),this.setAttribute("position",new ai(M,3)),this.setAttribute("normal",new ai(T,3)),this.setAttribute("uv",new ai(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class TA extends vl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AA extends vl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wA extends ub{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class RA extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function R_(a,e,n,r){const o=CA(r);switch(n){case $v:return a*e;case Jv:return a*e/o.components*o.byteLength;case Bp:return a*e/o.components*o.byteLength;case kp:return a*e*2/o.components*o.byteLength;case jp:return a*e*2/o.components*o.byteLength;case Qv:return a*e*3/o.components*o.byteLength;case Ai:return a*e*4/o.components*o.byteLength;case Hp:return a*e*4/o.components*o.byteLength;case fu:case hu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Kh:case $h:return Math.max(a,16)*Math.max(e,8)/4;case Yh:case Zh:return Math.max(a,8)*Math.max(e,8)/2;case Qh:case Jh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ep:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case tp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case np:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ip:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case ap:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case rp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case sp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case op:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case lp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case cp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case up:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case dp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case fp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case hp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case pp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case mp:case gp:case xp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case _p:case vp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case bp:case yp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function CA(a){switch(a){case _a:case qv:return{byteLength:1,components:1};case ll:case Yv:case Ws:return{byteLength:2,components:1};case zp:case Ip:return{byteLength:2,components:4};case Ir:case Pp:case ha:return{byteLength:4,components:1};case Kv:case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gb(){let a=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function DA(a){const e=new WeakMap;function n(f,p){const h=f.array,g=f.usage,v=h.byteLength,_=a.createBuffer();a.bindBuffer(p,_),a.bufferData(p,h,g),f.onUploadCallback();let b;if(h instanceof Float32Array)b=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=a.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?b=a.HALF_FLOAT:b=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=a.SHORT;else if(h instanceof Uint32Array)b=a.UNSIGNED_INT;else if(h instanceof Int32Array)b=a.INT;else if(h instanceof Int8Array)b=a.BYTE;else if(h instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,h){const g=p.array,v=p.updateRanges;if(a.bindBuffer(h,f),v.length===0)a.bufferSubData(h,0,g);else{v.sort((b,M)=>b.start-M.start);let _=0;for(let b=1;b<v.length;b++){const M=v[_],T=v[b];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,v[_]=T)}v.length=_+1;for(let b=0,M=v.length;b<M;b++){const T=v[b];a.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(a.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,p),h.version=f.version}}return{get:o,remove:c,update:d}}var LA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$A=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ew=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ow="gl_FragColor = linearToOutputTexel( gl_FragColor );",lw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_w=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ew=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ww=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ow=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ww=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_R=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ER=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$R=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:LA,alphahash_pars_fragment:NA,alphamap_fragment:UA,alphamap_pars_fragment:OA,alphatest_fragment:FA,alphatest_pars_fragment:PA,aomap_fragment:zA,aomap_pars_fragment:IA,batching_pars_vertex:BA,batching_vertex:kA,begin_vertex:jA,beginnormal_vertex:HA,bsdfs:GA,iridescence_fragment:VA,bumpmap_pars_fragment:XA,clipping_planes_fragment:WA,clipping_planes_pars_fragment:qA,clipping_planes_pars_vertex:YA,clipping_planes_vertex:KA,color_fragment:ZA,color_pars_fragment:$A,color_pars_vertex:QA,color_vertex:JA,common:ew,cube_uv_reflection_fragment:tw,defaultnormal_vertex:nw,displacementmap_pars_vertex:iw,displacementmap_vertex:aw,emissivemap_fragment:rw,emissivemap_pars_fragment:sw,colorspace_fragment:ow,colorspace_pars_fragment:lw,envmap_fragment:cw,envmap_common_pars_fragment:uw,envmap_pars_fragment:dw,envmap_pars_vertex:fw,envmap_physical_pars_fragment:Mw,envmap_vertex:hw,fog_vertex:pw,fog_pars_vertex:mw,fog_fragment:gw,fog_pars_fragment:xw,gradientmap_pars_fragment:_w,lightmap_pars_fragment:vw,lights_lambert_fragment:bw,lights_lambert_pars_fragment:yw,lights_pars_begin:Sw,lights_toon_fragment:Ew,lights_toon_pars_fragment:Tw,lights_phong_fragment:Aw,lights_phong_pars_fragment:ww,lights_physical_fragment:Rw,lights_physical_pars_fragment:Cw,lights_fragment_begin:Dw,lights_fragment_maps:Lw,lights_fragment_end:Nw,logdepthbuf_fragment:Uw,logdepthbuf_pars_fragment:Ow,logdepthbuf_pars_vertex:Fw,logdepthbuf_vertex:Pw,map_fragment:zw,map_pars_fragment:Iw,map_particle_fragment:Bw,map_particle_pars_fragment:kw,metalnessmap_fragment:jw,metalnessmap_pars_fragment:Hw,morphinstance_vertex:Gw,morphcolor_vertex:Vw,morphnormal_vertex:Xw,morphtarget_pars_vertex:Ww,morphtarget_vertex:qw,normal_fragment_begin:Yw,normal_fragment_maps:Kw,normal_pars_fragment:Zw,normal_pars_vertex:$w,normal_vertex:Qw,normalmap_pars_fragment:Jw,clearcoat_normal_fragment_begin:eR,clearcoat_normal_fragment_maps:tR,clearcoat_pars_fragment:nR,iridescence_pars_fragment:iR,opaque_fragment:aR,packing:rR,premultiplied_alpha_fragment:sR,project_vertex:oR,dithering_fragment:lR,dithering_pars_fragment:cR,roughnessmap_fragment:uR,roughnessmap_pars_fragment:dR,shadowmap_pars_fragment:fR,shadowmap_pars_vertex:hR,shadowmap_vertex:pR,shadowmask_pars_fragment:mR,skinbase_vertex:gR,skinning_pars_vertex:xR,skinning_vertex:_R,skinnormal_vertex:vR,specularmap_fragment:bR,specularmap_pars_fragment:yR,tonemapping_fragment:SR,tonemapping_pars_fragment:MR,transmission_fragment:ER,transmission_pars_fragment:TR,uv_pars_fragment:AR,uv_pars_vertex:wR,uv_vertex:RR,worldpos_vertex:CR,background_vert:DR,background_frag:LR,backgroundCube_vert:NR,backgroundCube_frag:UR,cube_vert:OR,cube_frag:FR,depth_vert:PR,depth_frag:zR,distanceRGBA_vert:IR,distanceRGBA_frag:BR,equirect_vert:kR,equirect_frag:jR,linedashed_vert:HR,linedashed_frag:GR,meshbasic_vert:VR,meshbasic_frag:XR,meshlambert_vert:WR,meshlambert_frag:qR,meshmatcap_vert:YR,meshmatcap_frag:KR,meshnormal_vert:ZR,meshnormal_frag:$R,meshphong_vert:QR,meshphong_frag:JR,meshphysical_vert:eC,meshphysical_frag:tC,meshtoon_vert:nC,meshtoon_frag:iC,points_vert:aC,points_frag:rC,shadow_vert:sC,shadow_frag:oC,sprite_vert:lC,sprite_frag:cC},Oe={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ii={basic:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:In([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:In([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:In([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:In([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:In([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:In([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:In([Oe.common,Oe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:In([Oe.lights,Oe.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ii.physical={uniforms:In([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const su={r:0,b:0,g:0},Lr=new va,uC=new hn;function dC(a,e,n,r,o,c,d){const f=new Ot(0);let p=c===!0?0:1,h,g,v=null,_=0,b=null;function M(w){let R=w.isScene===!0?w.background:null;return R&&R.isTexture&&(R=(w.backgroundBlurriness>0?n:e).get(R)),R}function T(w){let R=!1;const F=M(w);F===null?y(f,p):F&&F.isColor&&(y(F,1),R=!0);const U=a.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,d):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(a.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(w,R){const F=M(R);F&&(F.isCubeTexture||F.mapping===Lu)?(g===void 0&&(g=new sr(new bl(1,1,1),new ba({name:"BackgroundCubeMaterial",uniforms:Hs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(U,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Lr.copy(R.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(uC.makeRotationFromEuler(Lr)),g.material.toneMapped=Tt.getTransfer(F.colorSpace)!==kt,(v!==F||_!==F.version||b!==a.toneMapping)&&(g.material.needsUpdate=!0,v=F,_=F.version,b=a.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(h===void 0&&(h=new sr(new Uu(2,2),new ba({name:"BackgroundMaterial",uniforms:Hs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=F,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(F.colorSpace)!==kt,F.matrixAutoUpdate===!0&&F.updateMatrix(),h.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||_!==F.version||b!==a.toneMapping)&&(h.material.needsUpdate=!0,v=F,_=F.version,b=a.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function y(w,R){w.getRGB(su,cb(a)),r.buffers.color.setClear(su.r,su.g,su.b,R,d)}function A(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,R=1){f.set(w),p=R,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,y(f,p)},render:T,addToRenderList:S,dispose:A}}function fC(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,d=!1;function f(C,G,ee,ce,he){let J=!1;const B=v(ce,ee,G);c!==B&&(c=B,h(c.object)),J=b(C,ce,ee,he),J&&M(C,ce,ee,he),he!==null&&e.update(he,a.ELEMENT_ARRAY_BUFFER),(J||d)&&(d=!1,R(C,G,ee,ce),he!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function p(){return a.createVertexArray()}function h(C){return a.bindVertexArray(C)}function g(C){return a.deleteVertexArray(C)}function v(C,G,ee){const ce=ee.wireframe===!0;let he=r[C.id];he===void 0&&(he={},r[C.id]=he);let J=he[G.id];J===void 0&&(J={},he[G.id]=J);let B=J[ce];return B===void 0&&(B=_(p()),J[ce]=B),B}function _(C){const G=[],ee=[],ce=[];for(let he=0;he<n;he++)G[he]=0,ee[he]=0,ce[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ee,attributeDivisors:ce,object:C,attributes:{},index:null}}function b(C,G,ee,ce){const he=c.attributes,J=G.attributes;let B=0;const Y=ee.getAttributes();for(const K in Y)if(Y[K].location>=0){const z=he[K];let q=J[K];if(q===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),z===void 0||z.attribute!==q||q&&z.data!==q.data)return!0;B++}return c.attributesNum!==B||c.index!==ce}function M(C,G,ee,ce){const he={},J=G.attributes;let B=0;const Y=ee.getAttributes();for(const K in Y)if(Y[K].location>=0){let z=J[K];z===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(z=C.instanceColor));const q={};q.attribute=z,z&&z.data&&(q.data=z.data),he[K]=q,B++}c.attributes=he,c.attributesNum=B,c.index=ce}function T(){const C=c.newAttributes;for(let G=0,ee=C.length;G<ee;G++)C[G]=0}function S(C){y(C,0)}function y(C,G){const ee=c.newAttributes,ce=c.enabledAttributes,he=c.attributeDivisors;ee[C]=1,ce[C]===0&&(a.enableVertexAttribArray(C),ce[C]=1),he[C]!==G&&(a.vertexAttribDivisor(C,G),he[C]=G)}function A(){const C=c.newAttributes,G=c.enabledAttributes;for(let ee=0,ce=G.length;ee<ce;ee++)G[ee]!==C[ee]&&(a.disableVertexAttribArray(ee),G[ee]=0)}function w(C,G,ee,ce,he,J,B){B===!0?a.vertexAttribIPointer(C,G,ee,he,J):a.vertexAttribPointer(C,G,ee,ce,he,J)}function R(C,G,ee,ce){T();const he=ce.attributes,J=ee.getAttributes(),B=G.defaultAttributeValues;for(const Y in J){const K=J[Y];if(K.location>=0){let ve=he[Y];if(ve===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor)),ve!==void 0){const z=ve.normalized,q=ve.itemSize,fe=e.get(ve);if(fe===void 0)continue;const xe=fe.buffer,Ce=fe.type,Ie=fe.bytesPerElement,ae=Ce===a.INT||Ce===a.UNSIGNED_INT||ve.gpuType===Pp;if(ve.isInterleavedBufferAttribute){const be=ve.data,Te=be.stride,Je=ve.offset;if(be.isInstancedInterleavedBuffer){for(let Ve=0;Ve<K.locationSize;Ve++)y(K.location+Ve,be.meshPerAttribute);C.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ve=0;Ve<K.locationSize;Ve++)S(K.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,xe);for(let Ve=0;Ve<K.locationSize;Ve++)w(K.location+Ve,q/K.locationSize,Ce,z,Te*Ie,(Je+q/K.locationSize*Ve)*Ie,ae)}else{if(ve.isInstancedBufferAttribute){for(let be=0;be<K.locationSize;be++)y(K.location+be,ve.meshPerAttribute);C.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let be=0;be<K.locationSize;be++)S(K.location+be);a.bindBuffer(a.ARRAY_BUFFER,xe);for(let be=0;be<K.locationSize;be++)w(K.location+be,q/K.locationSize,Ce,z,q*Ie,q/K.locationSize*be*Ie,ae)}}else if(B!==void 0){const z=B[Y];if(z!==void 0)switch(z.length){case 2:a.vertexAttrib2fv(K.location,z);break;case 3:a.vertexAttrib3fv(K.location,z);break;case 4:a.vertexAttrib4fv(K.location,z);break;default:a.vertexAttrib1fv(K.location,z)}}}}A()}function F(){H();for(const C in r){const G=r[C];for(const ee in G){const ce=G[ee];for(const he in ce)g(ce[he].object),delete ce[he];delete G[ee]}delete r[C]}}function U(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const ee in G){const ce=G[ee];for(const he in ce)g(ce[he].object),delete ce[he];delete G[ee]}delete r[C.id]}function I(C){for(const G in r){const ee=r[G];if(ee[C.id]===void 0)continue;const ce=ee[C.id];for(const he in ce)g(ce[he].object),delete ce[he];delete ee[C.id]}}function H(){L(),d=!0,c!==o&&(c=o,h(c.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:H,resetDefaultState:L,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:S,disableUnusedAttributes:A}}function hC(a,e,n){let r;function o(h){r=h}function c(h,g){a.drawArrays(r,h,g),n.update(g,r,1)}function d(h,g,v){v!==0&&(a.drawArraysInstanced(r,h,g,v),n.update(g,r,v))}function f(h,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,v);let b=0;for(let M=0;M<v;M++)b+=g[M];n.update(b,r,1)}function p(h,g,v,_){if(v===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<h.length;M++)d(h[M],g[M],_[M]);else{b.multiDrawArraysInstancedWEBGL(r,h,0,g,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*_[T];n.update(M,r,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function pC(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(I){return!(I!==Ai&&r.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const H=I===Ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==_a&&r.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ha&&!H)}function p(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(lt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),A=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),w=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),F=M>0,U=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:R,vertexTextures:F,maxSamples:U}}function mC(a){const e=this;let n=null,r=0,o=!1,c=!1;const d=new Ur,f=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const b=v.length!==0||_||r!==0||o;return o=_,r=v.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,b){const M=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,y=a.get(v);if(!o||M===null||M.length===0||c&&!S)c?g(null):h();else{const A=c?0:r,w=A*4;let R=y.clippingState||null;p.value=R,R=g(M,_,w,b);for(let F=0;F!==w;++F)R[F]=n[F];y.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=A}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,b,M){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=p.value,M!==!0||S===null){const y=b+T*4,A=_.matrixWorldInverse;f.getNormalMatrix(A),(S===null||S.length<y)&&(S=new Float32Array(y));for(let w=0,R=b;w!==T;++w,R+=4)d.copy(v[w]).applyMatrix4(A,f),d.normal.toArray(S,R),S[R+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function gC(a){let e=new WeakMap;function n(d,f){return f===Vh?d.mapping=Bs:f===Xh&&(d.mapping=ks),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Vh||f===Xh)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const h=new mA(p.height);return h.fromEquirectangularTexture(a,d),e.set(d,h),d.addEventListener("dispose",o),n(h.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const nr=4,C_=[.125,.215,.35,.446,.526,.582],Fr=20,xC=256,nl=new wA,D_=new Ot;let Th=null,Ah=0,wh=0,Rh=!1;const _C=new oe;class L_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:d=256,position:f=_C}=c;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Ah,wh),this._renderer.xr.enabled=Rh,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ws,format:Ai,colorSpace:js,depthBuffer:!1},o=N_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vC(c)),this._blurMaterial=yC(c,e,n)}return o}_compileMaterial(e){const n=new sr(new Di,e);this._renderer.compile(n,nl)}_sceneToCubeUV(e,n,r,o,c){const p=new mi(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,b=v.toneMapping;v.getClearColor(D_),v.toneMapping=ar,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sr(new bl,new sb({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let y=!1;const A=e.background;A?A.isColor&&(S.color.copy(A),e.background=null,y=!0):(S.color.copy(D_),y=!0);for(let w=0;w<6;w++){const R=w%3;R===0?(p.up.set(0,h[w],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[w],c.y,c.z)):R===1?(p.up.set(0,0,h[w]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[w],c.z)):(p.up.set(0,h[w],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[w]));const F=this._cubeSize;Us(o,R*F,w>2?F:0,F,F),v.setRenderTarget(o),y&&v.render(T,p),v.render(e,p)}v.toneMapping=b,v.autoClear=_,e.background=A}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Bs||e.mapping===ks;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const c=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;Us(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,nl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const A=3*Math.max(this._cubeSize,16),w=4*this._cubeSize;this._ggxMaterial=bC(this._lodMax,A,w)}const d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,h=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),_=.05+h*.95,b=v*_,{_lodMax:M}=this,T=this._sizeLods[r],S=3*T*(r>M-nr?r-M+nr:0),y=4*(this._cubeSize-T);p.envMap.value=e.texture,p.roughness.value=b,p.mipInt.value=M-n,Us(c,S,y,3*T,2*T),o.setRenderTarget(c),o.render(f,nl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-r,Us(e,S,y,3*T,2*T),o.setRenderTarget(e),o.render(f,nl)}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const p=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const _=h.uniforms,b=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Fr-1),T=c/M,S=isFinite(c)?1+Math.floor(g*T):Fr;S>Fr&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Fr}`);const y=[];let A=0;for(let I=0;I<Fr;++I){const H=I/T,L=Math.exp(-H*H/2);y.push(L),I===0?A+=L:I<S&&(A+=2*L)}for(let I=0;I<y.length;I++)y[I]=y[I]/A;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=d==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:w}=this;_.dTheta.value=M,_.mipInt.value=w-r;const R=this._sizeLods[o],F=3*R*(o>w-nr?o-w+nr:0),U=4*(this._cubeSize-R);Us(n,F,U,3*R,2*R),p.setRenderTarget(n),p.render(v,nl)}}function vC(a){const e=[],n=[],r=[];let o=a;const c=a-nr+1+C_.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);e.push(f);let p=1/f;d>a-nr?p=C_[d-a+nr-1]:d===0&&(p=0),n.push(p);const h=1/(f-2),g=-h,v=1+h,_=[g,g,v,g,v,v,g,g,v,v,g,v],b=6,M=6,T=3,S=2,y=1,A=new Float32Array(T*M*b),w=new Float32Array(S*M*b),R=new Float32Array(y*M*b);for(let U=0;U<b;U++){const I=U%3*2/3-1,H=U>2?0:-1,L=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];A.set(L,T*M*U),w.set(_,S*M*U);const C=[U,U,U,U,U,U];R.set(C,y*M*U)}const F=new Di;F.setAttribute("position",new ki(A,T)),F.setAttribute("uv",new ki(w,S)),F.setAttribute("faceIndex",new ki(R,y)),r.push(new sr(F,null)),o>nr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function N_(a,e,n){const r=new Br(a,e,n);return r.texture.mapping=Lu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Us(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function bC(a,e,n){return new ba({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function yC(a,e,n){const r=new Float32Array(Fr),o=new oe(0,1,0);return new ba({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function U_(){return new ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function O_(){return new ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SC(a){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,h=p===Vh||p===Xh,g=p===Bs||p===ks;if(h||g){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new L_(a)),v=h?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const b=f.image;return h&&b&&b.height>0||g&&b&&o(b)?(n===null&&(n=new L_(a)),v=h?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function o(f){let p=0;const h=6;for(let g=0;g<h;g++)f[g]!==void 0&&p++;return p===h}function c(f){const p=f.target;p.removeEventListener("dispose",c);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function MC(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&fl("WebGLRenderer: "+r+" extension not supported."),o}}}function EC(a,e,n,r){const o={},c=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",d),delete o[_.id];const b=c.get(_);b&&(e.remove(b),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(v,_){return o[_.id]===!0||(_.addEventListener("dispose",d),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const b in _)e.update(_[b],a.ARRAY_BUFFER)}function h(v){const _=[],b=v.index,M=v.attributes.position;let T=0;if(b!==null){const A=b.array;T=b.version;for(let w=0,R=A.length;w<R;w+=3){const F=A[w+0],U=A[w+1],I=A[w+2];_.push(F,U,U,I,I,F)}}else if(M!==void 0){const A=M.array;T=M.version;for(let w=0,R=A.length/3-1;w<R;w+=3){const F=w+0,U=w+1,I=w+2;_.push(F,U,U,I,I,F)}}else return;const S=new(tb(_)?lb:ob)(_,1);S.version=T;const y=c.get(v);y&&e.remove(y),c.set(v,S)}function g(v){const _=c.get(v);if(_){const b=v.index;b!==null&&_.version<b.version&&h(v)}else h(v);return c.get(v)}return{get:f,update:p,getWireframeAttribute:g}}function TC(a,e,n){let r;function o(_){r=_}let c,d;function f(_){c=_.type,d=_.bytesPerElement}function p(_,b){a.drawElements(r,b,c,_*d),n.update(b,r,1)}function h(_,b,M){M!==0&&(a.drawElementsInstanced(r,b,c,_*d,M),n.update(b,r,M))}function g(_,b,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,_,0,M);let S=0;for(let y=0;y<M;y++)S+=b[y];n.update(S,r,1)}function v(_,b,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)h(_[y]/d,b[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(r,b,0,c,_,0,T,0,M);let y=0;for(let A=0;A<M;A++)y+=b[A]*T[A];n.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function AC(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case a.TRIANGLES:n.triangles+=f*(c/3);break;case a.LINES:n.lines+=f*(c/2);break;case a.LINE_STRIP:n.lines+=f*(c-1);break;case a.LINE_LOOP:n.lines+=f*c;break;case a.POINTS:n.points+=f*c;break;default:sn("WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function wC(a,e,n){const r=new WeakMap,o=new on;function c(d,f,p){const h=d.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(f);if(_===void 0||_.count!==v){let C=function(){H.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var b=C;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),S===!0&&(R=3);let F=f.attributes.position.count*R,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const I=new Float32Array(F*U*4*v),H=new nb(I,F,U,v);H.type=ha,H.needsUpdate=!0;const L=R*4;for(let G=0;G<v;G++){const ee=y[G],ce=A[G],he=w[G],J=F*U*4*G;for(let B=0;B<ee.count;B++){const Y=B*L;M===!0&&(o.fromBufferAttribute(ee,B),I[J+Y+0]=o.x,I[J+Y+1]=o.y,I[J+Y+2]=o.z,I[J+Y+3]=0),T===!0&&(o.fromBufferAttribute(ce,B),I[J+Y+4]=o.x,I[J+Y+5]=o.y,I[J+Y+6]=o.z,I[J+Y+7]=0),S===!0&&(o.fromBufferAttribute(he,B),I[J+Y+8]=o.x,I[J+Y+9]=o.y,I[J+Y+10]=o.z,I[J+Y+11]=he.itemSize===4?o.w:1)}}_={count:v,texture:H,size:new Ct(F,U)},r.set(f,_),f.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",d.morphTexture,n);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(a,"morphTargetBaseInfluence",T),p.getUniforms().setValue(a,"morphTargetInfluences",h)}p.getUniforms().setValue(a,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function RC(a,e,n,r){let o=new WeakMap;function c(p){const h=r.render.frame,g=p.geometry,v=e.get(p,g);if(o.get(v)!==h&&(e.update(v),o.set(v,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==h&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),o.set(p,h))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==h&&(_.update(),o.set(_,h))}return v}function d(){o=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:c,dispose:d}}const xb=new Bn,F_=new pb(1,1),_b=new nb,vb=new QT,bb=new db,P_=[],z_=[],I_=new Float32Array(16),B_=new Float32Array(9),k_=new Float32Array(4);function Ys(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=P_[o];if(c===void 0&&(c=new Float32Array(o),P_[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,a[d].toArray(c,f)}return c}function _n(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function vn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Fu(a,e){let n=z_[e];n===void 0&&(n=new Int32Array(e),z_[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function CC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function DC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2fv(this.addr,e),vn(n,e)}}function LC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;a.uniform3fv(this.addr,e),vn(n,e)}}function NC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4fv(this.addr,e),vn(n,e)}}function UC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,r))return;k_.set(r),a.uniformMatrix2fv(this.addr,!1,k_),vn(n,r)}}function OC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,r))return;B_.set(r),a.uniformMatrix3fv(this.addr,!1,B_),vn(n,r)}}function FC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,r))return;I_.set(r),a.uniformMatrix4fv(this.addr,!1,I_),vn(n,r)}}function PC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function zC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2iv(this.addr,e),vn(n,e)}}function IC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;a.uniform3iv(this.addr,e),vn(n,e)}}function BC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4iv(this.addr,e),vn(n,e)}}function kC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function jC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2uiv(this.addr,e),vn(n,e)}}function HC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;a.uniform3uiv(this.addr,e),vn(n,e)}}function GC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4uiv(this.addr,e),vn(n,e)}}function VC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(F_.compareFunction=eb,c=F_):c=xb,n.setTexture2D(e||c,o)}function XC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||vb,o)}function WC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||bb,o)}function qC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||_b,o)}function YC(a){switch(a){case 5126:return CC;case 35664:return DC;case 35665:return LC;case 35666:return NC;case 35674:return UC;case 35675:return OC;case 35676:return FC;case 5124:case 35670:return PC;case 35667:case 35671:return zC;case 35668:case 35672:return IC;case 35669:case 35673:return BC;case 5125:return kC;case 36294:return jC;case 36295:return HC;case 36296:return GC;case 35678:case 36198:case 36298:case 36306:case 35682:return VC;case 35679:case 36299:case 36307:return XC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return qC}}function KC(a,e){a.uniform1fv(this.addr,e)}function ZC(a,e){const n=Ys(e,this.size,2);a.uniform2fv(this.addr,n)}function $C(a,e){const n=Ys(e,this.size,3);a.uniform3fv(this.addr,n)}function QC(a,e){const n=Ys(e,this.size,4);a.uniform4fv(this.addr,n)}function JC(a,e){const n=Ys(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function eD(a,e){const n=Ys(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function tD(a,e){const n=Ys(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function nD(a,e){a.uniform1iv(this.addr,e)}function iD(a,e){a.uniform2iv(this.addr,e)}function aD(a,e){a.uniform3iv(this.addr,e)}function rD(a,e){a.uniform4iv(this.addr,e)}function sD(a,e){a.uniform1uiv(this.addr,e)}function oD(a,e){a.uniform2uiv(this.addr,e)}function lD(a,e){a.uniform3uiv(this.addr,e)}function cD(a,e){a.uniform4uiv(this.addr,e)}function uD(a,e,n){const r=this.cache,o=e.length,c=Fu(n,o);_n(r,c)||(a.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||xb,c[d])}function dD(a,e,n){const r=this.cache,o=e.length,c=Fu(n,o);_n(r,c)||(a.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||vb,c[d])}function fD(a,e,n){const r=this.cache,o=e.length,c=Fu(n,o);_n(r,c)||(a.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||bb,c[d])}function hD(a,e,n){const r=this.cache,o=e.length,c=Fu(n,o);_n(r,c)||(a.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||_b,c[d])}function pD(a){switch(a){case 5126:return KC;case 35664:return ZC;case 35665:return $C;case 35666:return QC;case 35674:return JC;case 35675:return eD;case 35676:return tD;case 5124:case 35670:return nD;case 35667:case 35671:return iD;case 35668:case 35672:return aD;case 35669:case 35673:return rD;case 5125:return sD;case 36294:return oD;case 36295:return lD;case 36296:return cD;case 35678:case 36198:case 36298:case 36306:case 35682:return uD;case 35679:case 36299:case 36307:return dD;case 35680:case 36300:case 36308:case 36293:return fD;case 36289:case 36303:case 36311:case 36292:return hD}}class mD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=YC(n.type)}}class gD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pD(n.type)}}class xD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function j_(a,e){a.seq.push(e),a.map[e.id]=e}function _D(a,e,n){const r=a.name,o=r.length;for(Ch.lastIndex=0;;){const c=Ch.exec(r),d=Ch.lastIndex;let f=c[1];const p=c[2]==="]",h=c[3];if(p&&(f=f|0),h===void 0||h==="["&&d+2===o){j_(n,h===void 0?new mD(f,a,e):new gD(f,a,e));break}else{let v=n.map[f];v===void 0&&(v=new xD(f),j_(n,v)),n=v}}}class xu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),d=e.getUniformLocation(n,c.name);_D(c,d,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function H_(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const vD=37297;let bD=0;function yD(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const G_=new ft;function SD(a){Tt._getMatrix(G_,Tt.workingColorSpace,a);const e=`mat3( ${G_.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(a)){case yu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function V_(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const f=parseInt(d[1]);return n.toUpperCase()+`

`+c+`

`+yD(a.getShaderSource(e),f)}else return c}function MD(a,e){const n=SD(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ED(a,e){let n;switch(e){case TT:n="Linear";break;case AT:n="Reinhard";break;case wT:n="Cineon";break;case RT:n="ACESFilmic";break;case DT:n="AgX";break;case LT:n="Neutral";break;case CT:n="Custom";break;default:lt("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ou=new oe;function TD(){Tt.getLuminanceCoefficients(ou);const a=ou.x.toFixed(4),e=ou.y.toFixed(4),n=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AD(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function wD(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function RD(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),d=c.name;let f=1;c.type===a.FLOAT_MAT2&&(f=2),c.type===a.FLOAT_MAT3&&(f=3),c.type===a.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:a.getAttribLocation(e,d),locationSize:f}}return n}function al(a){return a!==""}function X_(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(a){return a.replace(CD,LD)}const DD=new Map;function LD(a,e){let n=ht[e];if(n===void 0){const r=DD.get(e);if(r!==void 0)n=ht[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Mp(n)}const ND=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(a){return a.replace(ND,UD)}function UD(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Y_(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OD(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Vv?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===aT?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ua&&(e="SHADOWMAP_TYPE_VSM"),e}function FD(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Bs:case ks:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PD(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function zD(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Xv:e="ENVMAP_BLENDING_MULTIPLY";break;case MT:e="ENVMAP_BLENDING_MIX";break;case ET:e="ENVMAP_BLENDING_ADD";break}return e}function ID(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function BD(a,e,n,r){const o=a.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=OD(n),h=FD(n),g=PD(n),v=zD(n),_=ID(n),b=AD(n),M=wD(c),T=o.createProgram();let S,y,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(al).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(al).join(`
`),y.length>0&&(y+=`
`)):(S=[Y_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),y=[Y_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?ht.tonemapping_pars_fragment:"",n.toneMapping!==ar?ED("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,MD("linearToOutputTexel",n.outputColorSpace),TD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(al).join(`
`)),d=Mp(d),d=X_(d,n),d=W_(d,n),f=Mp(f),f=X_(f,n),f=W_(f,n),d=q_(d),f=q_(f),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===r_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===r_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=A+S+d,R=A+y+f,F=H_(o,o.VERTEX_SHADER,w),U=H_(o,o.FRAGMENT_SHADER,R);o.attachShader(T,F),o.attachShader(T,U),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function I(G){if(a.debug.checkShaderErrors){const ee=o.getProgramInfoLog(T)||"",ce=o.getShaderInfoLog(F)||"",he=o.getShaderInfoLog(U)||"",J=ee.trim(),B=ce.trim(),Y=he.trim();let K=!0,ve=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(K=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,T,F,U);else{const z=V_(o,F,"vertex"),q=V_(o,U,"fragment");sn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+z+`
`+q)}else J!==""?lt("WebGLProgram: Program Info Log:",J):(B===""||Y==="")&&(ve=!1);ve&&(G.diagnostics={runnable:K,programLog:J,vertexShader:{log:B,prefix:S},fragmentShader:{log:Y,prefix:y}})}o.deleteShader(F),o.deleteShader(U),H=new xu(o,T),L=RD(o,T)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,vD)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bD++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=U,this}let kD=0;class jD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new HD(e),n.set(e,r)),r}}class HD{constructor(e){this.id=kD++,this.code=e,this.usedTimes=0}}function GD(a,e,n,r,o,c,d){const f=new ab,p=new jD,h=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let b=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return h.add(L),L===0?"uv":`uv${L}`}function S(L,C,G,ee,ce){const he=ee.fog,J=ce.geometry,B=L.isMeshStandardMaterial?ee.environment:null,Y=(L.isMeshStandardMaterial?n:e).get(L.envMap||B),K=Y&&Y.mapping===Lu?Y.image.height:null,ve=M[L.type];L.precision!==null&&(b=o.getMaxPrecision(L.precision),b!==L.precision&&lt("WebGLProgram.getParameters:",L.precision,"not supported, using",b,"instead."));const z=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,q=z!==void 0?z.length:0;let fe=0;J.morphAttributes.position!==void 0&&(fe=1),J.morphAttributes.normal!==void 0&&(fe=2),J.morphAttributes.color!==void 0&&(fe=3);let xe,Ce,Ie,ae;if(ve){const At=Ii[ve];xe=At.vertexShader,Ce=At.fragmentShader}else xe=L.vertexShader,Ce=L.fragmentShader,p.update(L),Ie=p.getVertexShaderID(L),ae=p.getFragmentShaderID(L);const be=a.getRenderTarget(),Te=a.state.buffers.depth.getReversed(),Je=ce.isInstancedMesh===!0,Ve=ce.isBatchedMesh===!0,ct=!!L.map,en=!!L.matcap,ut=!!Y,Ft=!!L.aoMap,V=!!L.lightMap,mt=!!L.bumpMap,st=!!L.normalMap,Pt=!!L.displacementMap,He=!!L.emissiveMap,Gt=!!L.metalnessMap,Xe=!!L.roughnessMap,ot=L.anisotropy>0,k=L.clearcoat>0,D=L.dispersion>0,ie=L.iridescence>0,me=L.sheen>0,_e=L.transmission>0,de=ot&&!!L.anisotropyMap,Pe=k&&!!L.clearcoatMap,Ue=k&&!!L.clearcoatNormalMap,Qe=k&&!!L.clearcoatRoughnessMap,Ge=ie&&!!L.iridescenceMap,Me=ie&&!!L.iridescenceThicknessMap,we=me&&!!L.sheenColorMap,Ye=me&&!!L.sheenRoughnessMap,$e=!!L.specularMap,Fe=!!L.specularColorMap,it=!!L.specularIntensityMap,X=_e&&!!L.transmissionMap,Ne=_e&&!!L.thicknessMap,De=!!L.gradientMap,Re=!!L.alphaMap,Ee=L.alphaTest>0,Se=!!L.alphaHash,ke=!!L.extensions;let at=ar;L.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(at=a.toneMapping);const Dt={shaderID:ve,shaderType:L.type,shaderName:L.name,vertexShader:xe,fragmentShader:Ce,defines:L.defines,customVertexShaderID:Ie,customFragmentShaderID:ae,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:b,batching:Ve,batchingColor:Ve&&ce._colorsTexture!==null,instancing:Je,instancingColor:Je&&ce.instanceColor!==null,instancingMorph:Je&&ce.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:be===null?a.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:js,alphaToCoverage:!!L.alphaToCoverage,map:ct,matcap:en,envMap:ut,envMapMode:ut&&Y.mapping,envMapCubeUVHeight:K,aoMap:Ft,lightMap:V,bumpMap:mt,normalMap:st,displacementMap:_&&Pt,emissiveMap:He,normalMapObjectSpace:st&&L.normalMapType===PT,normalMapTangentSpace:st&&L.normalMapType===FT,metalnessMap:Gt,roughnessMap:Xe,anisotropy:ot,anisotropyMap:de,clearcoat:k,clearcoatMap:Pe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Qe,dispersion:D,iridescence:ie,iridescenceMap:Ge,iridescenceThicknessMap:Me,sheen:me,sheenColorMap:we,sheenRoughnessMap:Ye,specularMap:$e,specularColorMap:Fe,specularIntensityMap:it,transmission:_e,transmissionMap:X,thicknessMap:Ne,gradientMap:De,opaque:L.transparent===!1&&L.blending===Ps&&L.alphaToCoverage===!1,alphaMap:Re,alphaTest:Ee,alphaHash:Se,combine:L.combine,mapUv:ct&&T(L.map.channel),aoMapUv:Ft&&T(L.aoMap.channel),lightMapUv:V&&T(L.lightMap.channel),bumpMapUv:mt&&T(L.bumpMap.channel),normalMapUv:st&&T(L.normalMap.channel),displacementMapUv:Pt&&T(L.displacementMap.channel),emissiveMapUv:He&&T(L.emissiveMap.channel),metalnessMapUv:Gt&&T(L.metalnessMap.channel),roughnessMapUv:Xe&&T(L.roughnessMap.channel),anisotropyMapUv:de&&T(L.anisotropyMap.channel),clearcoatMapUv:Pe&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:we&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&T(L.sheenRoughnessMap.channel),specularMapUv:$e&&T(L.specularMap.channel),specularColorMapUv:Fe&&T(L.specularColorMap.channel),specularIntensityMapUv:it&&T(L.specularIntensityMap.channel),transmissionMapUv:X&&T(L.transmissionMap.channel),thicknessMapUv:Ne&&T(L.thicknessMap.channel),alphaMapUv:Re&&T(L.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(st||ot),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!J.attributes.uv&&(ct||Re),fog:!!he,useFog:L.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Te,skinning:ce.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:fe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:L.dithering,shadowMapEnabled:a.shadowMap.enabled&&G.length>0,shadowMapType:a.shadowMap.type,toneMapping:at,decodeVideoTexture:ct&&L.map.isVideoTexture===!0&&Tt.getTransfer(L.map.colorSpace)===kt,decodeVideoTextureEmissive:He&&L.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(L.emissiveMap.colorSpace)===kt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===da,flipSided:L.side===Xn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ke&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&L.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Dt.vertexUv1s=h.has(1),Dt.vertexUv2s=h.has(2),Dt.vertexUv3s=h.has(3),h.clear(),Dt}function y(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const G in L.defines)C.push(G),C.push(L.defines[G]);return L.isRawShaderMaterial===!1&&(A(C,L),w(C,L),C.push(a.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function A(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function w(L,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),C.gradientMap&&f.enable(22),L.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reversedDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),L.push(f.mask)}function R(L){const C=M[L.type];let G;if(C){const ee=Ii[C];G=dA.clone(ee.uniforms)}else G=L.uniforms;return G}function F(L,C){let G;for(let ee=0,ce=g.length;ee<ce;ee++){const he=g[ee];if(he.cacheKey===C){G=he,++G.usedTimes;break}}return G===void 0&&(G=new BD(a,C,L,c),g.push(G)),G}function U(L){if(--L.usedTimes===0){const C=g.indexOf(L);g[C]=g[g.length-1],g.pop(),L.destroy()}}function I(L){p.remove(L)}function H(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:R,acquireProgram:F,releaseProgram:U,releaseShaderCache:I,programs:g,dispose:H}}function VD(){let a=new WeakMap;function e(d){return a.has(d)}function n(d){let f=a.get(d);return f===void 0&&(f={},a.set(d,f)),f}function r(d){a.delete(d)}function o(d,f,p){a.get(d)[f]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function XD(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function K_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Z_(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(v,_,b,M,T,S){let y=a[e];return y===void 0?(y={id:v.id,object:v,geometry:_,material:b,groupOrder:M,renderOrder:v.renderOrder,z:T,group:S},a[e]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=b,y.groupOrder=M,y.renderOrder=v.renderOrder,y.z=T,y.group=S),e++,y}function f(v,_,b,M,T,S){const y=d(v,_,b,M,T,S);b.transmission>0?r.push(y):b.transparent===!0?o.push(y):n.push(y)}function p(v,_,b,M,T,S){const y=d(v,_,b,M,T,S);b.transmission>0?r.unshift(y):b.transparent===!0?o.unshift(y):n.unshift(y)}function h(v,_){n.length>1&&n.sort(v||XD),r.length>1&&r.sort(_||K_),o.length>1&&o.sort(_||K_)}function g(){for(let v=e,_=a.length;v<_;v++){const b=a[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:p,finish:g,sort:h}}function WD(){let a=new WeakMap;function e(r,o){const c=a.get(r);let d;return c===void 0?(d=new Z_,a.set(r,[d])):o>=c.length?(d=new Z_,c.push(d)):d=c[o],d}function n(){a=new WeakMap}return{get:e,dispose:n}}function qD(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new oe,color:new Ot};break;case"SpotLight":n={position:new oe,direction:new oe,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":n={color:new Ot,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return a[e.id]=n,n}}}function YD(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let KD=0;function ZD(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function $D(a){const e=new qD,n=YD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new oe);const o=new oe,c=new hn,d=new hn;function f(h){let g=0,v=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let b=0,M=0,T=0,S=0,y=0,A=0,w=0,R=0,F=0,U=0,I=0;h.sort(ZD);for(let L=0,C=h.length;L<C;L++){const G=h[L],ee=G.color,ce=G.intensity,he=G.distance,J=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ee.r*ce,v+=ee.g*ce,_+=ee.b*ce;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],ce);I++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,K=n.get(G);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,r.directionalShadow[b]=K,r.directionalShadowMap[b]=J,r.directionalShadowMatrix[b]=G.shadow.matrix,A++}r.directional[b]=B,b++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(ee).multiplyScalar(ce),B.distance=he,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[T]=B;const Y=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,Y.updateMatrices(G),G.castShadow&&U++),r.spotLightMatrix[T]=Y.matrix,G.castShadow){const K=n.get(G);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,r.spotShadow[T]=K,r.spotShadowMap[T]=J,R++}T++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(ee).multiplyScalar(ce),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=B,S++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const Y=G.shadow,K=n.get(G);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,r.pointShadow[M]=K,r.pointShadowMap[M]=J,r.pointShadowMatrix[M]=G.shadow.matrix,w++}r.point[M]=B,M++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(ce),B.groundColor.copy(G.groundColor).multiplyScalar(ce),r.hemi[y]=B,y++}}S>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==b||H.pointLength!==M||H.spotLength!==T||H.rectAreaLength!==S||H.hemiLength!==y||H.numDirectionalShadows!==A||H.numPointShadows!==w||H.numSpotShadows!==R||H.numSpotMaps!==F||H.numLightProbes!==I)&&(r.directional.length=b,r.spot.length=T,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=R+F-U,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=I,H.directionalLength=b,H.pointLength=M,H.spotLength=T,H.rectAreaLength=S,H.hemiLength=y,H.numDirectionalShadows=A,H.numPointShadows=w,H.numSpotShadows=R,H.numSpotMaps=F,H.numLightProbes=I,r.version=KD++)}function p(h,g){let v=0,_=0,b=0,M=0,T=0;const S=g.matrixWorldInverse;for(let y=0,A=h.length;y<A;y++){const w=h[y];if(w.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),v++}else if(w.isSpotLight){const R=r.spot[b];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),b++}else if(w.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(S),d.identity(),c.copy(w.matrixWorld),c.premultiply(S),d.extractRotation(c),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(d),R.halfHeight.applyMatrix4(d),M++}else if(w.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(S),_++}else if(w.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:f,setupView:p,state:r}}function $_(a){const e=new $D(a),n=[],r=[];function o(g){h.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function d(g){r.push(g)}function f(){e.setup(n)}function p(g){e.setupView(n,g)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:d}}function QD(a){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new $_(a),e.set(o,[f])):c>=d.length?(f=new $_(a),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const JD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tL(a,e,n){let r=new fb;const o=new Ct,c=new Ct,d=new on,f=new TA({depthPacking:OT}),p=new AA,h={},g=n.maxTextureSize,v={[rr]:Xn,[Xn]:rr,[da]:da},_=new ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:JD,fragmentShader:eL}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const M=new Di;M.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new sr(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vv;let y=this.type;this.render=function(U,I,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const L=a.getRenderTarget(),C=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),ee=a.state;ee.setBlending(ma),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const ce=y!==ua&&this.type===ua,he=y===ua&&this.type!==ua;for(let J=0,B=U.length;J<B;J++){const Y=U[J],K=Y.shadow;if(K===void 0){lt("WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const ve=K.getFrameExtents();if(o.multiply(ve),c.copy(K.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ve.x),o.x=c.x*ve.x,K.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ve.y),o.y=c.y*ve.y,K.mapSize.y=c.y)),K.map===null||ce===!0||he===!0){const q=this.type!==ua?{minFilter:ii,magFilter:ii}:{};K.map!==null&&K.map.dispose(),K.map=new Br(o.x,o.y,q),K.map.texture.name=Y.name+".shadowMap",K.camera.updateProjectionMatrix()}a.setRenderTarget(K.map),a.clear();const z=K.getViewportCount();for(let q=0;q<z;q++){const fe=K.getViewport(q);d.set(c.x*fe.x,c.y*fe.y,c.x*fe.z,c.y*fe.w),ee.viewport(d),K.updateMatrices(Y,q),r=K.getFrustum(),R(I,H,K.camera,Y,this.type)}K.isPointLightShadow!==!0&&this.type===ua&&A(K,H),K.needsUpdate=!1}y=this.type,S.needsUpdate=!1,a.setRenderTarget(L,C,G)};function A(U,I){const H=e.update(T);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,b.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Br(o.x,o.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,a.setRenderTarget(U.mapPass),a.clear(),a.renderBufferDirect(I,null,H,_,T,null),b.uniforms.shadow_pass.value=U.mapPass.texture,b.uniforms.resolution.value=U.mapSize,b.uniforms.radius.value=U.radius,a.setRenderTarget(U.map),a.clear(),a.renderBufferDirect(I,null,H,b,T,null)}function w(U,I,H,L){let C=null;const G=H.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)C=G;else if(C=H.isPointLight===!0?p:f,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ee=C.uuid,ce=I.uuid;let he=h[ee];he===void 0&&(he={},h[ee]=he);let J=he[ce];J===void 0&&(J=C.clone(),he[ce]=J,I.addEventListener("dispose",F)),C=J}if(C.visible=I.visible,C.wireframe=I.wireframe,L===ua?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:v[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ee=a.properties.get(C);ee.light=H}return C}function R(U,I,H,L,C){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===ua)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,U.matrixWorld);const ce=e.update(U),he=U.material;if(Array.isArray(he)){const J=ce.groups;for(let B=0,Y=J.length;B<Y;B++){const K=J[B],ve=he[K.materialIndex];if(ve&&ve.visible){const z=w(U,ve,L,C);U.onBeforeShadow(a,U,I,H,ce,z,K),a.renderBufferDirect(H,null,ce,z,U,K),U.onAfterShadow(a,U,I,H,ce,z,K)}}}else if(he.visible){const J=w(U,he,L,C);U.onBeforeShadow(a,U,I,H,ce,J,null),a.renderBufferDirect(H,null,ce,J,U,null),U.onAfterShadow(a,U,I,H,ce,J,null)}}const ee=U.children;for(let ce=0,he=ee.length;ce<he;ce++)R(ee[ce],I,H,L,C)}function F(U){U.target.removeEventListener("dispose",F);for(const H in h){const L=h[H],C=U.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const nL={[zh]:Ih,[Bh]:Hh,[kh]:Gh,[Is]:jh,[Ih]:zh,[Hh]:Bh,[Gh]:kh,[jh]:Is};function iL(a,e){function n(){let X=!1;const Ne=new on;let De=null;const Re=new on(0,0,0,0);return{setMask:function(Ee){De!==Ee&&!X&&(a.colorMask(Ee,Ee,Ee,Ee),De=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,Se,ke,at,Dt){Dt===!0&&(Ee*=at,Se*=at,ke*=at),Ne.set(Ee,Se,ke,at),Re.equals(Ne)===!1&&(a.clearColor(Ee,Se,ke,at),Re.copy(Ne))},reset:function(){X=!1,De=null,Re.set(-1,0,0,0)}}}function r(){let X=!1,Ne=!1,De=null,Re=null,Ee=null;return{setReversed:function(Se){if(Ne!==Se){const ke=e.get("EXT_clip_control");Se?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Ne=Se;const at=Ee;Ee=null,this.setClear(at)}},getReversed:function(){return Ne},setTest:function(Se){Se?be(a.DEPTH_TEST):Te(a.DEPTH_TEST)},setMask:function(Se){De!==Se&&!X&&(a.depthMask(Se),De=Se)},setFunc:function(Se){if(Ne&&(Se=nL[Se]),Re!==Se){switch(Se){case zh:a.depthFunc(a.NEVER);break;case Ih:a.depthFunc(a.ALWAYS);break;case Bh:a.depthFunc(a.LESS);break;case Is:a.depthFunc(a.LEQUAL);break;case kh:a.depthFunc(a.EQUAL);break;case jh:a.depthFunc(a.GEQUAL);break;case Hh:a.depthFunc(a.GREATER);break;case Gh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Re=Se}},setLocked:function(Se){X=Se},setClear:function(Se){Ee!==Se&&(Ne&&(Se=1-Se),a.clearDepth(Se),Ee=Se)},reset:function(){X=!1,De=null,Re=null,Ee=null,Ne=!1}}}function o(){let X=!1,Ne=null,De=null,Re=null,Ee=null,Se=null,ke=null,at=null,Dt=null;return{setTest:function(At){X||(At?be(a.STENCIL_TEST):Te(a.STENCIL_TEST))},setMask:function(At){Ne!==At&&!X&&(a.stencilMask(At),Ne=At)},setFunc:function(At,ri,ln){(De!==At||Re!==ri||Ee!==ln)&&(a.stencilFunc(At,ri,ln),De=At,Re=ri,Ee=ln)},setOp:function(At,ri,ln){(Se!==At||ke!==ri||at!==ln)&&(a.stencilOp(At,ri,ln),Se=At,ke=ri,at=ln)},setLocked:function(At){X=At},setClear:function(At){Dt!==At&&(a.clearStencil(At),Dt=At)},reset:function(){X=!1,Ne=null,De=null,Re=null,Ee=null,Se=null,ke=null,at=null,Dt=null}}}const c=new n,d=new r,f=new o,p=new WeakMap,h=new WeakMap;let g={},v={},_=new WeakMap,b=[],M=null,T=!1,S=null,y=null,A=null,w=null,R=null,F=null,U=null,I=new Ot(0,0,0),H=0,L=!1,C=null,G=null,ee=null,ce=null,he=null;const J=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const K=a.getParameter(a.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),B=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),B=Y>=2);let ve=null,z={};const q=a.getParameter(a.SCISSOR_BOX),fe=a.getParameter(a.VIEWPORT),xe=new on().fromArray(q),Ce=new on().fromArray(fe);function Ie(X,Ne,De,Re){const Ee=new Uint8Array(4),Se=a.createTexture();a.bindTexture(X,Se),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ke=0;ke<De;ke++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Re,0,a.RGBA,a.UNSIGNED_BYTE,Ee):a.texImage2D(Ne+ke,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ee);return Se}const ae={};ae[a.TEXTURE_2D]=Ie(a.TEXTURE_2D,a.TEXTURE_2D,1),ae[a.TEXTURE_CUBE_MAP]=Ie(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[a.TEXTURE_2D_ARRAY]=Ie(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ae[a.TEXTURE_3D]=Ie(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),be(a.DEPTH_TEST),d.setFunc(Is),mt(!1),st(Jx),be(a.CULL_FACE),Ft(ma);function be(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function Te(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function Je(X,Ne){return v[X]!==Ne?(a.bindFramebuffer(X,Ne),v[X]=Ne,X===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ne),X===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ve(X,Ne){let De=b,Re=!1;if(X){De=_.get(Ne),De===void 0&&(De=[],_.set(Ne,De));const Ee=X.textures;if(De.length!==Ee.length||De[0]!==a.COLOR_ATTACHMENT0){for(let Se=0,ke=Ee.length;Se<ke;Se++)De[Se]=a.COLOR_ATTACHMENT0+Se;De.length=Ee.length,Re=!0}}else De[0]!==a.BACK&&(De[0]=a.BACK,Re=!0);Re&&a.drawBuffers(De)}function ct(X){return M!==X?(a.useProgram(X),M=X,!0):!1}const en={[Or]:a.FUNC_ADD,[sT]:a.FUNC_SUBTRACT,[oT]:a.FUNC_REVERSE_SUBTRACT};en[lT]=a.MIN,en[cT]=a.MAX;const ut={[uT]:a.ZERO,[dT]:a.ONE,[fT]:a.SRC_COLOR,[Fh]:a.SRC_ALPHA,[_T]:a.SRC_ALPHA_SATURATE,[gT]:a.DST_COLOR,[pT]:a.DST_ALPHA,[hT]:a.ONE_MINUS_SRC_COLOR,[Ph]:a.ONE_MINUS_SRC_ALPHA,[xT]:a.ONE_MINUS_DST_COLOR,[mT]:a.ONE_MINUS_DST_ALPHA,[vT]:a.CONSTANT_COLOR,[bT]:a.ONE_MINUS_CONSTANT_COLOR,[yT]:a.CONSTANT_ALPHA,[ST]:a.ONE_MINUS_CONSTANT_ALPHA};function Ft(X,Ne,De,Re,Ee,Se,ke,at,Dt,At){if(X===ma){T===!0&&(Te(a.BLEND),T=!1);return}if(T===!1&&(be(a.BLEND),T=!0),X!==rT){if(X!==S||At!==L){if((y!==Or||R!==Or)&&(a.blendEquation(a.FUNC_ADD),y=Or,R=Or),At)switch(X){case Ps:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case e_:a.blendFunc(a.ONE,a.ONE);break;case t_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case n_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:sn("WebGLState: Invalid blending: ",X);break}else switch(X){case Ps:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case e_:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case t_:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",X);break}A=null,w=null,F=null,U=null,I.set(0,0,0),H=0,S=X,L=At}return}Ee=Ee||Ne,Se=Se||De,ke=ke||Re,(Ne!==y||Ee!==R)&&(a.blendEquationSeparate(en[Ne],en[Ee]),y=Ne,R=Ee),(De!==A||Re!==w||Se!==F||ke!==U)&&(a.blendFuncSeparate(ut[De],ut[Re],ut[Se],ut[ke]),A=De,w=Re,F=Se,U=ke),(at.equals(I)===!1||Dt!==H)&&(a.blendColor(at.r,at.g,at.b,Dt),I.copy(at),H=Dt),S=X,L=!1}function V(X,Ne){X.side===da?Te(a.CULL_FACE):be(a.CULL_FACE);let De=X.side===Xn;Ne&&(De=!De),mt(De),X.blending===Ps&&X.transparent===!1?Ft(ma):Ft(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Re=X.stencilWrite;f.setTest(Re),Re&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),He(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?be(a.SAMPLE_ALPHA_TO_COVERAGE):Te(a.SAMPLE_ALPHA_TO_COVERAGE)}function mt(X){C!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),C=X)}function st(X){X!==nT?(be(a.CULL_FACE),X!==G&&(X===Jx?a.cullFace(a.BACK):X===iT?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Te(a.CULL_FACE),G=X}function Pt(X){X!==ee&&(B&&a.lineWidth(X),ee=X)}function He(X,Ne,De){X?(be(a.POLYGON_OFFSET_FILL),(ce!==Ne||he!==De)&&(a.polygonOffset(Ne,De),ce=Ne,he=De)):Te(a.POLYGON_OFFSET_FILL)}function Gt(X){X?be(a.SCISSOR_TEST):Te(a.SCISSOR_TEST)}function Xe(X){X===void 0&&(X=a.TEXTURE0+J-1),ve!==X&&(a.activeTexture(X),ve=X)}function ot(X,Ne,De){De===void 0&&(ve===null?De=a.TEXTURE0+J-1:De=ve);let Re=z[De];Re===void 0&&(Re={type:void 0,texture:void 0},z[De]=Re),(Re.type!==X||Re.texture!==Ne)&&(ve!==De&&(a.activeTexture(De),ve=De),a.bindTexture(X,Ne||ae[X]),Re.type=X,Re.texture=Ne)}function k(){const X=z[ve];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function D(){try{a.compressedTexImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function ie(){try{a.compressedTexImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function me(){try{a.texSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function _e(){try{a.texSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function de(){try{a.compressedTexSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Pe(){try{a.compressedTexSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ue(){try{a.texStorage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Qe(){try{a.texStorage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ge(){try{a.texImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Me(){try{a.texImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function we(X){xe.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),xe.copy(X))}function Ye(X){Ce.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Ce.copy(X))}function $e(X,Ne){let De=h.get(Ne);De===void 0&&(De=new WeakMap,h.set(Ne,De));let Re=De.get(X);Re===void 0&&(Re=a.getUniformBlockIndex(Ne,X.name),De.set(X,Re))}function Fe(X,Ne){const Re=h.get(Ne).get(X);p.get(Ne)!==Re&&(a.uniformBlockBinding(Ne,Re,X.__bindingPointIndex),p.set(Ne,Re))}function it(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),d.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},ve=null,z={},v={},_=new WeakMap,b=[],M=null,T=!1,S=null,y=null,A=null,w=null,R=null,F=null,U=null,I=new Ot(0,0,0),H=0,L=!1,C=null,G=null,ee=null,ce=null,he=null,xe.set(0,0,a.canvas.width,a.canvas.height),Ce.set(0,0,a.canvas.width,a.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:be,disable:Te,bindFramebuffer:Je,drawBuffers:Ve,useProgram:ct,setBlending:Ft,setMaterial:V,setFlipSided:mt,setCullFace:st,setLineWidth:Pt,setPolygonOffset:He,setScissorTest:Gt,activeTexture:Xe,bindTexture:ot,unbindTexture:k,compressedTexImage2D:D,compressedTexImage3D:ie,texImage2D:Ge,texImage3D:Me,updateUBOMapping:$e,uniformBlockBinding:Fe,texStorage2D:Ue,texStorage3D:Qe,texSubImage2D:me,texSubImage3D:_e,compressedTexSubImage2D:de,compressedTexSubImage3D:Pe,scissor:we,viewport:Ye,reset:it}}function aL(a,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,g=new WeakMap;let v;const _=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(k,D){return b?new OffscreenCanvas(k,D):Mu("canvas")}function T(k,D,ie){let me=1;const _e=ot(k);if((_e.width>ie||_e.height>ie)&&(me=ie/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const de=Math.floor(me*_e.width),Pe=Math.floor(me*_e.height);v===void 0&&(v=M(de,Pe));const Ue=D?M(de,Pe):v;return Ue.width=de,Ue.height=Pe,Ue.getContext("2d").drawImage(k,0,0,de,Pe),lt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+Pe+")."),Ue}else return"data"in k&&lt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),k;return k}function S(k){return k.generateMipmaps}function y(k){a.generateMipmap(k)}function A(k){return k.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?a.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(k,D,ie,me,_e=!1){if(k!==null){if(a[k]!==void 0)return a[k];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let de=D;if(D===a.RED&&(ie===a.FLOAT&&(de=a.R32F),ie===a.HALF_FLOAT&&(de=a.R16F),ie===a.UNSIGNED_BYTE&&(de=a.R8)),D===a.RED_INTEGER&&(ie===a.UNSIGNED_BYTE&&(de=a.R8UI),ie===a.UNSIGNED_SHORT&&(de=a.R16UI),ie===a.UNSIGNED_INT&&(de=a.R32UI),ie===a.BYTE&&(de=a.R8I),ie===a.SHORT&&(de=a.R16I),ie===a.INT&&(de=a.R32I)),D===a.RG&&(ie===a.FLOAT&&(de=a.RG32F),ie===a.HALF_FLOAT&&(de=a.RG16F),ie===a.UNSIGNED_BYTE&&(de=a.RG8)),D===a.RG_INTEGER&&(ie===a.UNSIGNED_BYTE&&(de=a.RG8UI),ie===a.UNSIGNED_SHORT&&(de=a.RG16UI),ie===a.UNSIGNED_INT&&(de=a.RG32UI),ie===a.BYTE&&(de=a.RG8I),ie===a.SHORT&&(de=a.RG16I),ie===a.INT&&(de=a.RG32I)),D===a.RGB_INTEGER&&(ie===a.UNSIGNED_BYTE&&(de=a.RGB8UI),ie===a.UNSIGNED_SHORT&&(de=a.RGB16UI),ie===a.UNSIGNED_INT&&(de=a.RGB32UI),ie===a.BYTE&&(de=a.RGB8I),ie===a.SHORT&&(de=a.RGB16I),ie===a.INT&&(de=a.RGB32I)),D===a.RGBA_INTEGER&&(ie===a.UNSIGNED_BYTE&&(de=a.RGBA8UI),ie===a.UNSIGNED_SHORT&&(de=a.RGBA16UI),ie===a.UNSIGNED_INT&&(de=a.RGBA32UI),ie===a.BYTE&&(de=a.RGBA8I),ie===a.SHORT&&(de=a.RGBA16I),ie===a.INT&&(de=a.RGBA32I)),D===a.RGB&&(ie===a.UNSIGNED_INT_5_9_9_9_REV&&(de=a.RGB9_E5),ie===a.UNSIGNED_INT_10F_11F_11F_REV&&(de=a.R11F_G11F_B10F)),D===a.RGBA){const Pe=_e?yu:Tt.getTransfer(me);ie===a.FLOAT&&(de=a.RGBA32F),ie===a.HALF_FLOAT&&(de=a.RGBA16F),ie===a.UNSIGNED_BYTE&&(de=Pe===kt?a.SRGB8_ALPHA8:a.RGBA8),ie===a.UNSIGNED_SHORT_4_4_4_4&&(de=a.RGBA4),ie===a.UNSIGNED_SHORT_5_5_5_1&&(de=a.RGB5_A1)}return(de===a.R16F||de===a.R32F||de===a.RG16F||de===a.RG32F||de===a.RGBA16F||de===a.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(k,D){let ie;return k?D===null||D===Ir||D===cl?ie=a.DEPTH24_STENCIL8:D===ha?ie=a.DEPTH32F_STENCIL8:D===ll&&(ie=a.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Ir||D===cl?ie=a.DEPTH_COMPONENT24:D===ha?ie=a.DEPTH_COMPONENT32F:D===ll&&(ie=a.DEPTH_COMPONENT16),ie}function F(k,D){return S(k)===!0||k.isFramebufferTexture&&k.minFilter!==ii&&k.minFilter!==xi?Math.log2(Math.max(D.width,D.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?D.mipmaps.length:1}function U(k){const D=k.target;D.removeEventListener("dispose",U),H(D),D.isVideoTexture&&g.delete(D)}function I(k){const D=k.target;D.removeEventListener("dispose",I),C(D)}function H(k){const D=r.get(k);if(D.__webglInit===void 0)return;const ie=k.source,me=_.get(ie);if(me){const _e=me[D.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&L(k),Object.keys(me).length===0&&_.delete(ie)}r.remove(k)}function L(k){const D=r.get(k);a.deleteTexture(D.__webglTexture);const ie=k.source,me=_.get(ie);delete me[D.__cacheKey],d.memory.textures--}function C(k){const D=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(D.__webglFramebuffer[me]))for(let _e=0;_e<D.__webglFramebuffer[me].length;_e++)a.deleteFramebuffer(D.__webglFramebuffer[me][_e]);else a.deleteFramebuffer(D.__webglFramebuffer[me]);D.__webglDepthbuffer&&a.deleteRenderbuffer(D.__webglDepthbuffer[me])}else{if(Array.isArray(D.__webglFramebuffer))for(let me=0;me<D.__webglFramebuffer.length;me++)a.deleteFramebuffer(D.__webglFramebuffer[me]);else a.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&a.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&a.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let me=0;me<D.__webglColorRenderbuffer.length;me++)D.__webglColorRenderbuffer[me]&&a.deleteRenderbuffer(D.__webglColorRenderbuffer[me]);D.__webglDepthRenderbuffer&&a.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const ie=k.textures;for(let me=0,_e=ie.length;me<_e;me++){const de=r.get(ie[me]);de.__webglTexture&&(a.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove(ie[me])}r.remove(k)}let G=0;function ee(){G=0}function ce(){const k=G;return k>=o.maxTextures&&lt("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+o.maxTextures),G+=1,k}function he(k){const D=[];return D.push(k.wrapS),D.push(k.wrapT),D.push(k.wrapR||0),D.push(k.magFilter),D.push(k.minFilter),D.push(k.anisotropy),D.push(k.internalFormat),D.push(k.format),D.push(k.type),D.push(k.generateMipmaps),D.push(k.premultiplyAlpha),D.push(k.flipY),D.push(k.unpackAlignment),D.push(k.colorSpace),D.join()}function J(k,D){const ie=r.get(k);if(k.isVideoTexture&&Gt(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&ie.__version!==k.version){const me=k.image;if(me===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(ie,k,D);return}}else k.isExternalTexture&&(ie.__webglTexture=k.sourceTexture?k.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,ie.__webglTexture,a.TEXTURE0+D)}function B(k,D){const ie=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&ie.__version!==k.version){ae(ie,k,D);return}else k.isExternalTexture&&(ie.__webglTexture=k.sourceTexture?k.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,ie.__webglTexture,a.TEXTURE0+D)}function Y(k,D){const ie=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&ie.__version!==k.version){ae(ie,k,D);return}n.bindTexture(a.TEXTURE_3D,ie.__webglTexture,a.TEXTURE0+D)}function K(k,D){const ie=r.get(k);if(k.version>0&&ie.__version!==k.version){be(ie,k,D);return}n.bindTexture(a.TEXTURE_CUBE_MAP,ie.__webglTexture,a.TEXTURE0+D)}const ve={[Wh]:a.REPEAT,[fa]:a.CLAMP_TO_EDGE,[qh]:a.MIRRORED_REPEAT},z={[ii]:a.NEAREST,[NT]:a.NEAREST_MIPMAP_NEAREST,[Pc]:a.NEAREST_MIPMAP_LINEAR,[xi]:a.LINEAR,[Jf]:a.LINEAR_MIPMAP_NEAREST,[zr]:a.LINEAR_MIPMAP_LINEAR},q={[zT]:a.NEVER,[GT]:a.ALWAYS,[IT]:a.LESS,[eb]:a.LEQUAL,[BT]:a.EQUAL,[HT]:a.GEQUAL,[kT]:a.GREATER,[jT]:a.NOTEQUAL};function fe(k,D){if(D.type===ha&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===xi||D.magFilter===Jf||D.magFilter===Pc||D.magFilter===zr||D.minFilter===xi||D.minFilter===Jf||D.minFilter===Pc||D.minFilter===zr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(k,a.TEXTURE_WRAP_S,ve[D.wrapS]),a.texParameteri(k,a.TEXTURE_WRAP_T,ve[D.wrapT]),(k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY)&&a.texParameteri(k,a.TEXTURE_WRAP_R,ve[D.wrapR]),a.texParameteri(k,a.TEXTURE_MAG_FILTER,z[D.magFilter]),a.texParameteri(k,a.TEXTURE_MIN_FILTER,z[D.minFilter]),D.compareFunction&&(a.texParameteri(k,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(k,a.TEXTURE_COMPARE_FUNC,q[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===ii||D.minFilter!==Pc&&D.minFilter!==zr||D.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||r.get(D).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");a.texParameterf(k,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,o.getMaxAnisotropy())),r.get(D).__currentAnisotropy=D.anisotropy}}}function xe(k,D){let ie=!1;k.__webglInit===void 0&&(k.__webglInit=!0,D.addEventListener("dispose",U));const me=D.source;let _e=_.get(me);_e===void 0&&(_e={},_.set(me,_e));const de=he(D);if(de!==k.__cacheKey){_e[de]===void 0&&(_e[de]={texture:a.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),_e[de].usedTimes++;const Pe=_e[k.__cacheKey];Pe!==void 0&&(_e[k.__cacheKey].usedTimes--,Pe.usedTimes===0&&L(D)),k.__cacheKey=de,k.__webglTexture=_e[de].texture}return ie}function Ce(k,D,ie){return Math.floor(Math.floor(k/ie)/D)}function Ie(k,D,ie,me){const de=k.updateRanges;if(de.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,D.width,D.height,ie,me,D.data);else{de.sort((Me,we)=>Me.start-we.start);let Pe=0;for(let Me=1;Me<de.length;Me++){const we=de[Pe],Ye=de[Me],$e=we.start+we.count,Fe=Ce(Ye.start,D.width,4),it=Ce(we.start,D.width,4);Ye.start<=$e+1&&Fe===it&&Ce(Ye.start+Ye.count-1,D.width,4)===Fe?we.count=Math.max(we.count,Ye.start+Ye.count-we.start):(++Pe,de[Pe]=Ye)}de.length=Pe+1;const Ue=a.getParameter(a.UNPACK_ROW_LENGTH),Qe=a.getParameter(a.UNPACK_SKIP_PIXELS),Ge=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,D.width);for(let Me=0,we=de.length;Me<we;Me++){const Ye=de[Me],$e=Math.floor(Ye.start/4),Fe=Math.ceil(Ye.count/4),it=$e%D.width,X=Math.floor($e/D.width),Ne=Fe,De=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,it),a.pixelStorei(a.UNPACK_SKIP_ROWS,X),n.texSubImage2D(a.TEXTURE_2D,0,it,X,Ne,De,ie,me,D.data)}k.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ue),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Qe),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ge)}}function ae(k,D,ie){let me=a.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(me=a.TEXTURE_2D_ARRAY),D.isData3DTexture&&(me=a.TEXTURE_3D);const _e=xe(k,D),de=D.source;n.bindTexture(me,k.__webglTexture,a.TEXTURE0+ie);const Pe=r.get(de);if(de.version!==Pe.__version||_e===!0){n.activeTexture(a.TEXTURE0+ie);const Ue=Tt.getPrimaries(Tt.workingColorSpace),Qe=D.colorSpace===tr?null:Tt.getPrimaries(D.colorSpace),Ge=D.colorSpace===tr||Ue===Qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,D.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,D.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let Me=T(D.image,!1,o.maxTextureSize);Me=Xe(D,Me);const we=c.convert(D.format,D.colorSpace),Ye=c.convert(D.type);let $e=w(D.internalFormat,we,Ye,D.colorSpace,D.isVideoTexture);fe(me,D);let Fe;const it=D.mipmaps,X=D.isVideoTexture!==!0,Ne=Pe.__version===void 0||_e===!0,De=de.dataReady,Re=F(D,Me);if(D.isDepthTexture)$e=R(D.format===dl,D.type),Ne&&(X?n.texStorage2D(a.TEXTURE_2D,1,$e,Me.width,Me.height):n.texImage2D(a.TEXTURE_2D,0,$e,Me.width,Me.height,0,we,Ye,null));else if(D.isDataTexture)if(it.length>0){X&&Ne&&n.texStorage2D(a.TEXTURE_2D,Re,$e,it[0].width,it[0].height);for(let Ee=0,Se=it.length;Ee<Se;Ee++)Fe=it[Ee],X?De&&n.texSubImage2D(a.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,we,Ye,Fe.data):n.texImage2D(a.TEXTURE_2D,Ee,$e,Fe.width,Fe.height,0,we,Ye,Fe.data);D.generateMipmaps=!1}else X?(Ne&&n.texStorage2D(a.TEXTURE_2D,Re,$e,Me.width,Me.height),De&&Ie(D,Me,we,Ye)):n.texImage2D(a.TEXTURE_2D,0,$e,Me.width,Me.height,0,we,Ye,Me.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){X&&Ne&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Re,$e,it[0].width,it[0].height,Me.depth);for(let Ee=0,Se=it.length;Ee<Se;Ee++)if(Fe=it[Ee],D.format!==Ai)if(we!==null)if(X){if(De)if(D.layerUpdates.size>0){const ke=R_(Fe.width,Fe.height,D.format,D.type);for(const at of D.layerUpdates){const Dt=Fe.data.subarray(at*ke/Fe.data.BYTES_PER_ELEMENT,(at+1)*ke/Fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,at,Fe.width,Fe.height,1,we,Dt)}D.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,Me.depth,we,Fe.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ee,$e,Fe.width,Fe.height,Me.depth,0,Fe.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?De&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,Me.depth,we,Ye,Fe.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Ee,$e,Fe.width,Fe.height,Me.depth,0,we,Ye,Fe.data)}else{X&&Ne&&n.texStorage2D(a.TEXTURE_2D,Re,$e,it[0].width,it[0].height);for(let Ee=0,Se=it.length;Ee<Se;Ee++)Fe=it[Ee],D.format!==Ai?we!==null?X?De&&n.compressedTexSubImage2D(a.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,we,Fe.data):n.compressedTexImage2D(a.TEXTURE_2D,Ee,$e,Fe.width,Fe.height,0,Fe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?De&&n.texSubImage2D(a.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,we,Ye,Fe.data):n.texImage2D(a.TEXTURE_2D,Ee,$e,Fe.width,Fe.height,0,we,Ye,Fe.data)}else if(D.isDataArrayTexture)if(X){if(Ne&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Re,$e,Me.width,Me.height,Me.depth),De)if(D.layerUpdates.size>0){const Ee=R_(Me.width,Me.height,D.format,D.type);for(const Se of D.layerUpdates){const ke=Me.data.subarray(Se*Ee/Me.data.BYTES_PER_ELEMENT,(Se+1)*Ee/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Se,Me.width,Me.height,1,we,Ye,ke)}D.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,we,Ye,Me.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,$e,Me.width,Me.height,Me.depth,0,we,Ye,Me.data);else if(D.isData3DTexture)X?(Ne&&n.texStorage3D(a.TEXTURE_3D,Re,$e,Me.width,Me.height,Me.depth),De&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,we,Ye,Me.data)):n.texImage3D(a.TEXTURE_3D,0,$e,Me.width,Me.height,Me.depth,0,we,Ye,Me.data);else if(D.isFramebufferTexture){if(Ne)if(X)n.texStorage2D(a.TEXTURE_2D,Re,$e,Me.width,Me.height);else{let Ee=Me.width,Se=Me.height;for(let ke=0;ke<Re;ke++)n.texImage2D(a.TEXTURE_2D,ke,$e,Ee,Se,0,we,Ye,null),Ee>>=1,Se>>=1}}else if(it.length>0){if(X&&Ne){const Ee=ot(it[0]);n.texStorage2D(a.TEXTURE_2D,Re,$e,Ee.width,Ee.height)}for(let Ee=0,Se=it.length;Ee<Se;Ee++)Fe=it[Ee],X?De&&n.texSubImage2D(a.TEXTURE_2D,Ee,0,0,we,Ye,Fe):n.texImage2D(a.TEXTURE_2D,Ee,$e,we,Ye,Fe);D.generateMipmaps=!1}else if(X){if(Ne){const Ee=ot(Me);n.texStorage2D(a.TEXTURE_2D,Re,$e,Ee.width,Ee.height)}De&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,we,Ye,Me)}else n.texImage2D(a.TEXTURE_2D,0,$e,we,Ye,Me);S(D)&&y(me),Pe.__version=de.version,D.onUpdate&&D.onUpdate(D)}k.__version=D.version}function be(k,D,ie){if(D.image.length!==6)return;const me=xe(k,D),_e=D.source;n.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+ie);const de=r.get(_e);if(_e.version!==de.__version||me===!0){n.activeTexture(a.TEXTURE0+ie);const Pe=Tt.getPrimaries(Tt.workingColorSpace),Ue=D.colorSpace===tr?null:Tt.getPrimaries(D.colorSpace),Qe=D.colorSpace===tr||Pe===Ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,D.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,D.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const Ge=D.isCompressedTexture||D.image[0].isCompressedTexture,Me=D.image[0]&&D.image[0].isDataTexture,we=[];for(let Se=0;Se<6;Se++)!Ge&&!Me?we[Se]=T(D.image[Se],!0,o.maxCubemapSize):we[Se]=Me?D.image[Se].image:D.image[Se],we[Se]=Xe(D,we[Se]);const Ye=we[0],$e=c.convert(D.format,D.colorSpace),Fe=c.convert(D.type),it=w(D.internalFormat,$e,Fe,D.colorSpace),X=D.isVideoTexture!==!0,Ne=de.__version===void 0||me===!0,De=_e.dataReady;let Re=F(D,Ye);fe(a.TEXTURE_CUBE_MAP,D);let Ee;if(Ge){X&&Ne&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Re,it,Ye.width,Ye.height);for(let Se=0;Se<6;Se++){Ee=we[Se].mipmaps;for(let ke=0;ke<Ee.length;ke++){const at=Ee[ke];D.format!==Ai?$e!==null?X?De&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,0,0,at.width,at.height,$e,at.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,it,at.width,at.height,0,at.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,0,0,at.width,at.height,$e,Fe,at.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,it,at.width,at.height,0,$e,Fe,at.data)}}}else{if(Ee=D.mipmaps,X&&Ne){Ee.length>0&&Re++;const Se=ot(we[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Re,it,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Me){X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,we[Se].width,we[Se].height,$e,Fe,we[Se].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,we[Se].width,we[Se].height,0,$e,Fe,we[Se].data);for(let ke=0;ke<Ee.length;ke++){const Dt=Ee[ke].image[Se].image;X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,0,0,Dt.width,Dt.height,$e,Fe,Dt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,it,Dt.width,Dt.height,0,$e,Fe,Dt.data)}}else{X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,$e,Fe,we[Se]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,$e,Fe,we[Se]);for(let ke=0;ke<Ee.length;ke++){const at=Ee[ke];X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,0,0,$e,Fe,at.image[Se]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,it,$e,Fe,at.image[Se])}}}S(D)&&y(a.TEXTURE_CUBE_MAP),de.__version=_e.version,D.onUpdate&&D.onUpdate(D)}k.__version=D.version}function Te(k,D,ie,me,_e,de){const Pe=c.convert(ie.format,ie.colorSpace),Ue=c.convert(ie.type),Qe=w(ie.internalFormat,Pe,Ue,ie.colorSpace),Ge=r.get(D),Me=r.get(ie);if(Me.__renderTarget=D,!Ge.__hasExternalTextures){const we=Math.max(1,D.width>>de),Ye=Math.max(1,D.height>>de);_e===a.TEXTURE_3D||_e===a.TEXTURE_2D_ARRAY?n.texImage3D(_e,de,Qe,we,Ye,D.depth,0,Pe,Ue,null):n.texImage2D(_e,de,Qe,we,Ye,0,Pe,Ue,null)}n.bindFramebuffer(a.FRAMEBUFFER,k),He(D)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,_e,Me.__webglTexture,0,Pt(D)):(_e===a.TEXTURE_2D||_e>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,me,_e,Me.__webglTexture,de),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Je(k,D,ie){if(a.bindRenderbuffer(a.RENDERBUFFER,k),D.depthBuffer){const me=D.depthTexture,_e=me&&me.isDepthTexture?me.type:null,de=R(D.stencilBuffer,_e),Pe=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ue=Pt(D);He(D)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ue,de,D.width,D.height):ie?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,de,D.width,D.height):a.renderbufferStorage(a.RENDERBUFFER,de,D.width,D.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Pe,a.RENDERBUFFER,k)}else{const me=D.textures;for(let _e=0;_e<me.length;_e++){const de=me[_e],Pe=c.convert(de.format,de.colorSpace),Ue=c.convert(de.type),Qe=w(de.internalFormat,Pe,Ue,de.colorSpace),Ge=Pt(D);ie&&He(D)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ge,Qe,D.width,D.height):He(D)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ge,Qe,D.width,D.height):a.renderbufferStorage(a.RENDERBUFFER,Qe,D.width,D.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ve(k,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,k),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(D.depthTexture);me.__renderTarget=D,(!me.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),J(D.depthTexture,0);const _e=me.__webglTexture,de=Pt(D);if(D.depthTexture.format===ul)He(D)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,_e,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,_e,0);else if(D.depthTexture.format===dl)He(D)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,_e,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ct(k){const D=r.get(k),ie=k.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==k.depthTexture){const me=k.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),me){const _e=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),D.__depthDisposeCallback=_e}D.__boundDepthTexture=me}if(k.depthTexture&&!D.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const me=k.texture.mipmaps;me&&me.length>0?Ve(D.__webglFramebuffer[0],k):Ve(D.__webglFramebuffer,k)}else if(ie){D.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(a.FRAMEBUFFER,D.__webglFramebuffer[me]),D.__webglDepthbuffer[me]===void 0)D.__webglDepthbuffer[me]=a.createRenderbuffer(),Je(D.__webglDepthbuffer[me],k,!1);else{const _e=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=D.__webglDepthbuffer[me];a.bindRenderbuffer(a.RENDERBUFFER,de),a.framebufferRenderbuffer(a.FRAMEBUFFER,_e,a.RENDERBUFFER,de)}}else{const me=k.texture.mipmaps;if(me&&me.length>0?n.bindFramebuffer(a.FRAMEBUFFER,D.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=a.createRenderbuffer(),Je(D.__webglDepthbuffer,k,!1);else{const _e=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=D.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,de),a.framebufferRenderbuffer(a.FRAMEBUFFER,_e,a.RENDERBUFFER,de)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function en(k,D,ie){const me=r.get(k);D!==void 0&&Te(me.__webglFramebuffer,k,k.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ie!==void 0&&ct(k)}function ut(k){const D=k.texture,ie=r.get(k),me=r.get(D);k.addEventListener("dispose",I);const _e=k.textures,de=k.isWebGLCubeRenderTarget===!0,Pe=_e.length>1;if(Pe||(me.__webglTexture===void 0&&(me.__webglTexture=a.createTexture()),me.__version=D.version,d.memory.textures++),de){ie.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(D.mipmaps&&D.mipmaps.length>0){ie.__webglFramebuffer[Ue]=[];for(let Qe=0;Qe<D.mipmaps.length;Qe++)ie.__webglFramebuffer[Ue][Qe]=a.createFramebuffer()}else ie.__webglFramebuffer[Ue]=a.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ue=0;Ue<D.mipmaps.length;Ue++)ie.__webglFramebuffer[Ue]=a.createFramebuffer()}else ie.__webglFramebuffer=a.createFramebuffer();if(Pe)for(let Ue=0,Qe=_e.length;Ue<Qe;Ue++){const Ge=r.get(_e[Ue]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=a.createTexture(),d.memory.textures++)}if(k.samples>0&&He(k)===!1){ie.__webglMultisampledFramebuffer=a.createFramebuffer(),ie.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ue=0;Ue<_e.length;Ue++){const Qe=_e[Ue];ie.__webglColorRenderbuffer[Ue]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ie.__webglColorRenderbuffer[Ue]);const Ge=c.convert(Qe.format,Qe.colorSpace),Me=c.convert(Qe.type),we=w(Qe.internalFormat,Ge,Me,Qe.colorSpace,k.isXRRenderTarget===!0),Ye=Pt(k);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ye,we,k.width,k.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,ie.__webglColorRenderbuffer[Ue])}a.bindRenderbuffer(a.RENDERBUFFER,null),k.depthBuffer&&(ie.__webglDepthRenderbuffer=a.createRenderbuffer(),Je(ie.__webglDepthRenderbuffer,k,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(de){n.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),fe(a.TEXTURE_CUBE_MAP,D);for(let Ue=0;Ue<6;Ue++)if(D.mipmaps&&D.mipmaps.length>0)for(let Qe=0;Qe<D.mipmaps.length;Qe++)Te(ie.__webglFramebuffer[Ue][Qe],k,D,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe);else Te(ie.__webglFramebuffer[Ue],k,D,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(D)&&y(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let Ue=0,Qe=_e.length;Ue<Qe;Ue++){const Ge=_e[Ue],Me=r.get(Ge);let we=a.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(we=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(we,Me.__webglTexture),fe(we,Ge),Te(ie.__webglFramebuffer,k,Ge,a.COLOR_ATTACHMENT0+Ue,we,0),S(Ge)&&y(we)}n.unbindTexture()}else{let Ue=a.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ue=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ue,me.__webglTexture),fe(Ue,D),D.mipmaps&&D.mipmaps.length>0)for(let Qe=0;Qe<D.mipmaps.length;Qe++)Te(ie.__webglFramebuffer[Qe],k,D,a.COLOR_ATTACHMENT0,Ue,Qe);else Te(ie.__webglFramebuffer,k,D,a.COLOR_ATTACHMENT0,Ue,0);S(D)&&y(Ue),n.unbindTexture()}k.depthBuffer&&ct(k)}function Ft(k){const D=k.textures;for(let ie=0,me=D.length;ie<me;ie++){const _e=D[ie];if(S(_e)){const de=A(k),Pe=r.get(_e).__webglTexture;n.bindTexture(de,Pe),y(de),n.unbindTexture()}}}const V=[],mt=[];function st(k){if(k.samples>0){if(He(k)===!1){const D=k.textures,ie=k.width,me=k.height;let _e=a.COLOR_BUFFER_BIT;const de=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=r.get(k),Ue=D.length>1;if(Ue)for(let Ge=0;Ge<D.length;Ge++)n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Qe=k.texture.mipmaps;Qe&&Qe.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ge=0;Ge<D.length;Ge++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(_e|=a.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(_e|=a.STENCIL_BUFFER_BIT)),Ue){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ge]);const Me=r.get(D[Ge]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Me,0)}a.blitFramebuffer(0,0,ie,me,0,0,ie,me,_e,a.NEAREST),p===!0&&(V.length=0,mt.length=0,V.push(a.COLOR_ATTACHMENT0+Ge),k.depthBuffer&&k.resolveDepthBuffer===!1&&(V.push(de),mt.push(de),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,mt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,V))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ue)for(let Ge=0;Ge<D.length;Ge++){n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ge]);const Me=r.get(D[Ge]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.TEXTURE_2D,Me,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&p){const D=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[D])}}}function Pt(k){return Math.min(o.maxSamples,k.samples)}function He(k){const D=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Gt(k){const D=d.render.frame;g.get(k)!==D&&(g.set(k,D),k.update())}function Xe(k,D){const ie=k.colorSpace,me=k.format,_e=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||ie!==js&&ie!==tr&&(Tt.getTransfer(ie)===kt?(me!==Ai||_e!==_a)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",ie)),D}function ot(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=ce,this.resetTextureUnits=ee,this.setTexture2D=J,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=en,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=He}function rL(a,e){function n(r,o=tr){let c;const d=Tt.getTransfer(o);if(r===_a)return a.UNSIGNED_BYTE;if(r===zp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Ip)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Kv)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Zv)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===qv)return a.BYTE;if(r===Yv)return a.SHORT;if(r===ll)return a.UNSIGNED_SHORT;if(r===Pp)return a.INT;if(r===Ir)return a.UNSIGNED_INT;if(r===ha)return a.FLOAT;if(r===Ws)return a.HALF_FLOAT;if(r===$v)return a.ALPHA;if(r===Qv)return a.RGB;if(r===Ai)return a.RGBA;if(r===ul)return a.DEPTH_COMPONENT;if(r===dl)return a.DEPTH_STENCIL;if(r===Jv)return a.RED;if(r===Bp)return a.RED_INTEGER;if(r===kp)return a.RG;if(r===jp)return a.RG_INTEGER;if(r===Hp)return a.RGBA_INTEGER;if(r===fu||r===hu||r===pu||r===mu)if(d===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===fu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===fu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yh||r===Kh||r===Zh||r===$h)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qh||r===Jh||r===ep)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Qh||r===Jh)return d===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ep)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tp||r===np||r===ip||r===ap||r===rp||r===sp||r===op||r===lp||r===cp||r===up||r===dp||r===fp||r===hp||r===pp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===tp)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===np)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ip)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ap)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rp)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sp)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===op)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lp)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cp)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===up)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dp)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fp)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hp)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pp)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mp||r===gp||r===xp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===mp)return d===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_p||r===vp||r===bp||r===yp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===_p)return c.COMPRESSED_RED_RGTC1_EXT;if(r===vp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const sL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new mb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ba({vertexShader:sL,fragmentShader:oL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sr(new Uu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cL extends qs{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",p=1,h=null,g=null,v=null,_=null,b=null,M=null;const T=typeof XRWebGLBinding<"u",S=new lL,y={},A=n.getContextAttributes();let w=null,R=null;const F=[],U=[],I=new Ct;let H=null;const L=new mi;L.viewport=new on;const C=new mi;C.viewport=new on;const G=[L,C],ee=new RA;let ce=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let be=F[ae];return be===void 0&&(be=new yh,F[ae]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ae){let be=F[ae];return be===void 0&&(be=new yh,F[ae]=be),be.getGripSpace()},this.getHand=function(ae){let be=F[ae];return be===void 0&&(be=new yh,F[ae]=be),be.getHandSpace()};function J(ae){const be=U.indexOf(ae.inputSource);if(be===-1)return;const Te=F[be];Te!==void 0&&(Te.update(ae.inputSource,ae.frame,h||d),Te.dispatchEvent({type:ae.type,data:ae.inputSource}))}function B(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",Y);for(let ae=0;ae<F.length;ae++){const be=U[ae];be!==null&&(U[ae]=null,F[ae].disconnect(be))}ce=null,he=null,S.reset();for(const ae in y)delete y[ae];e.setRenderTarget(w),b=null,_=null,v=null,o=null,R=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(w=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",B),o.addEventListener("inputsourceschange",Y),A.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Je=null,Ve=null;A.depth&&(Ve=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=A.stencil?dl:ul,Je=A.stencil?cl:Ir);const ct={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(ct),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new Br(_.textureWidth,_.textureHeight,{format:Ai,type:_a,depthTexture:new pb(_.textureWidth,_.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Te={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,Te),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),R=new Br(b.framebufferWidth,b.framebufferHeight,{format:Ai,type:_a,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),h=null,d=await o.requestReferenceSpace(f),Ie.setContext(o),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(ae){for(let be=0;be<ae.removed.length;be++){const Te=ae.removed[be],Je=U.indexOf(Te);Je>=0&&(U[Je]=null,F[Je].disconnect(Te))}for(let be=0;be<ae.added.length;be++){const Te=ae.added[be];let Je=U.indexOf(Te);if(Je===-1){for(let ct=0;ct<F.length;ct++)if(ct>=U.length){U.push(Te),Je=ct;break}else if(U[ct]===null){U[ct]=Te,Je=ct;break}if(Je===-1)break}const Ve=F[Je];Ve&&Ve.connect(Te)}}const K=new oe,ve=new oe;function z(ae,be,Te){K.setFromMatrixPosition(be.matrixWorld),ve.setFromMatrixPosition(Te.matrixWorld);const Je=K.distanceTo(ve),Ve=be.projectionMatrix.elements,ct=Te.projectionMatrix.elements,en=Ve[14]/(Ve[10]-1),ut=Ve[14]/(Ve[10]+1),Ft=(Ve[9]+1)/Ve[5],V=(Ve[9]-1)/Ve[5],mt=(Ve[8]-1)/Ve[0],st=(ct[8]+1)/ct[0],Pt=en*mt,He=en*st,Gt=Je/(-mt+st),Xe=Gt*-mt;if(be.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Xe),ae.translateZ(Gt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ve[10]===-1)ae.projectionMatrix.copy(be.projectionMatrix),ae.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const ot=en+Gt,k=ut+Gt,D=Pt-Xe,ie=He+(Je-Xe),me=Ft*ut/k*ot,_e=V*ut/k*ot;ae.projectionMatrix.makePerspective(D,ie,me,_e,ot,k),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function q(ae,be){be===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(be.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let be=ae.near,Te=ae.far;S.texture!==null&&(S.depthNear>0&&(be=S.depthNear),S.depthFar>0&&(Te=S.depthFar)),ee.near=C.near=L.near=be,ee.far=C.far=L.far=Te,(ce!==ee.near||he!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),ce=ee.near,he=ee.far),ee.layers.mask=ae.layers.mask|6,L.layers.mask=ee.layers.mask&3,C.layers.mask=ee.layers.mask&5;const Je=ae.parent,Ve=ee.cameras;q(ee,Je);for(let ct=0;ct<Ve.length;ct++)q(Ve[ct],Je);Ve.length===2?z(ee,L,C):ee.projectionMatrix.copy(L.projectionMatrix),fe(ae,ee,Je)};function fe(ae,be,Te){Te===null?ae.matrix.copy(be.matrixWorld):(ae.matrix.copy(Te.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(be.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(be.projectionMatrix),ae.projectionMatrixInverse.copy(be.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Sp*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(_===null&&b===null))return p},this.setFoveation=function(ae){p=ae,_!==null&&(_.fixedFoveation=ae),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ee)},this.getCameraTexture=function(ae){return y[ae]};let xe=null;function Ce(ae,be){if(g=be.getViewerPose(h||d),M=be,g!==null){const Te=g.views;b!==null&&(e.setRenderTargetFramebuffer(R,b.framebuffer),e.setRenderTarget(R));let Je=!1;Te.length!==ee.cameras.length&&(ee.cameras.length=0,Je=!0);for(let ut=0;ut<Te.length;ut++){const Ft=Te[ut];let V=null;if(b!==null)V=b.getViewport(Ft);else{const st=v.getViewSubImage(_,Ft);V=st.viewport,ut===0&&(e.setRenderTargetTextures(R,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(R))}let mt=G[ut];mt===void 0&&(mt=new mi,mt.layers.enable(ut),mt.viewport=new on,G[ut]=mt),mt.matrix.fromArray(Ft.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ft.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(V.x,V.y,V.width,V.height),ut===0&&(ee.matrix.copy(mt.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Je===!0&&ee.cameras.push(mt)}const Ve=o.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=r.getBinding();const ut=v.getDepthInformation(Te[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,o.renderState)}if(Ve&&Ve.includes("camera-access")&&T){e.state.unbindTexture(),v=r.getBinding();for(let ut=0;ut<Te.length;ut++){const Ft=Te[ut].camera;if(Ft){let V=y[Ft];V||(V=new mb,y[Ft]=V);const mt=v.getCameraImage(Ft);V.sourceTexture=mt}}}}for(let Te=0;Te<F.length;Te++){const Je=U[Te],Ve=F[Te];Je!==null&&Ve!==void 0&&Ve.update(Je,be,h||d)}xe&&xe(ae,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),M=null}const Ie=new gb;Ie.setAnimationLoop(Ce),this.setAnimationLoop=function(ae){xe=ae},this.dispose=function(){}}}const Nr=new va,uL=new hn;function dL(a,e){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,cb(a)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,A,w,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(S,y):y.isMeshToonMaterial?(c(S,y),v(S,y)):y.isMeshPhongMaterial?(c(S,y),g(S,y)):y.isMeshStandardMaterial?(c(S,y),_(S,y),y.isMeshPhysicalMaterial&&b(S,y,R)):y.isMeshMatcapMaterial?(c(S,y),M(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),T(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?p(S,y,A,w):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Xn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Xn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const A=e.get(y),w=A.envMap,R=A.envMapRotation;w&&(S.envMap.value=w,Nr.copy(R),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),S.envMapRotation.value.setFromMatrix4(uL.makeRotationFromEuler(Nr)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,A,w){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*A,S.scale.value=w*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function b(S,y,A){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const A=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function fL(a,e,n,r){let o={},c={},d=[];const f=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,w){const R=w.program;r.uniformBlockBinding(A,R)}function h(A,w){let R=o[A.id];R===void 0&&(M(A),R=g(A),o[A.id]=R,A.addEventListener("dispose",S));const F=w.program;r.updateUBOMapping(A,F);const U=e.render.frame;c[A.id]!==U&&(_(A),c[A.id]=U)}function g(A){const w=v();A.__bindingPointIndex=w;const R=a.createBuffer(),F=A.__size,U=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,R),a.bufferData(a.UNIFORM_BUFFER,F,U),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,w,R),R}function v(){for(let A=0;A<f;A++)if(d.indexOf(A)===-1)return d.push(A),A;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const w=o[A.id],R=A.uniforms,F=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,w);for(let U=0,I=R.length;U<I;U++){const H=Array.isArray(R[U])?R[U]:[R[U]];for(let L=0,C=H.length;L<C;L++){const G=H[L];if(b(G,U,L,F)===!0){const ee=G.__offset,ce=Array.isArray(G.value)?G.value:[G.value];let he=0;for(let J=0;J<ce.length;J++){const B=ce[J],Y=T(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,ee+he,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,he),he+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ee,G.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function b(A,w,R,F){const U=A.value,I=w+"_"+R;if(F[I]===void 0)return typeof U=="number"||typeof U=="boolean"?F[I]=U:F[I]=U.clone(),!0;{const H=F[I];if(typeof U=="number"||typeof U=="boolean"){if(H!==U)return F[I]=U,!0}else if(H.equals(U)===!1)return H.copy(U),!0}return!1}function M(A){const w=A.uniforms;let R=0;const F=16;for(let I=0,H=w.length;I<H;I++){const L=Array.isArray(w[I])?w[I]:[w[I]];for(let C=0,G=L.length;C<G;C++){const ee=L[C],ce=Array.isArray(ee.value)?ee.value:[ee.value];for(let he=0,J=ce.length;he<J;he++){const B=ce[he],Y=T(B),K=R%F,ve=K%Y.boundary,z=K+ve;R+=ve,z!==0&&F-z<Y.storage&&(R+=F-z),ee.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=R,R+=Y.storage}}}const U=R%F;return U>0&&(R+=F-U),A.__size=R,A.__cache={},this}function T(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",A),w}function S(A){const w=A.target;w.removeEventListener("dispose",S);const R=d.indexOf(w.__bindingPointIndex);d.splice(R,1),a.deleteBuffer(o[w.id]),delete o[w.id],delete c[w.id]}function y(){for(const A in o)a.deleteBuffer(o[A]);d=[],o={},c={}}return{bind:p,update:h,dispose:y}}const hL=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ca=null;function pL(){return ca===null&&(ca=new _A(hL,32,32,kp,Ws),ca.minFilter=xi,ca.magFilter=xi,ca.wrapS=fa,ca.wrapT=fa,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class mL{constructor(e={}){const{canvas:n=VT(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const M=new Set([Hp,jp,Bp]),T=new Set([_a,Ir,ll,cl,zp,Ip]),S=new Uint32Array(4),y=new Int32Array(4);let A=null,w=null;const R=[],F=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let I=!1;this._outputColorSpace=pi;let H=0,L=0,C=null,G=-1,ee=null;const ce=new on,he=new on;let J=null;const B=new Ot(0);let Y=0,K=n.width,ve=n.height,z=1,q=null,fe=null;const xe=new on(0,0,K,ve),Ce=new on(0,0,K,ve);let Ie=!1;const ae=new fb;let be=!1,Te=!1;const Je=new hn,Ve=new oe,ct=new on,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ft(){return C===null?z:1}let V=r;function mt(P,$){return n.getContext(P,$)}try{const P={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fp}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Se,!1),n.addEventListener("webglcontextcreationerror",ke,!1),V===null){const $="webgl2";if(V=mt($,P),V===null)throw mt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw P("WebGLRenderer: "+P.message),P}let st,Pt,He,Gt,Xe,ot,k,D,ie,me,_e,de,Pe,Ue,Qe,Ge,Me,we,Ye,$e,Fe,it,X,Ne;function De(){st=new MC(V),st.init(),it=new rL(V,st),Pt=new pC(V,st,e,it),He=new iL(V,st),Pt.reversedDepthBuffer&&_&&He.buffers.depth.setReversed(!0),Gt=new AC(V),Xe=new VD,ot=new aL(V,st,He,Xe,Pt,it,Gt),k=new gC(U),D=new SC(U),ie=new DA(V),X=new fC(V,ie),me=new EC(V,ie,Gt,X),_e=new RC(V,me,ie,Gt),Ye=new wC(V,Pt,ot),Ge=new mC(Xe),de=new GD(U,k,D,st,Pt,X,Ge),Pe=new dL(U,Xe),Ue=new WD,Qe=new QD(st),we=new dC(U,k,D,He,_e,b,p),Me=new tL(U,_e,Pt),Ne=new fL(V,Gt,Pt,He),$e=new hC(V,st,Gt),Fe=new TC(V,st,Gt),Gt.programs=de.programs,U.capabilities=Pt,U.extensions=st,U.properties=Xe,U.renderLists=Ue,U.shadowMap=Me,U.state=He,U.info=Gt}De();const Re=new cL(U,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=st.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=st.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(K,ve,!1))},this.getSize=function(P){return P.set(K,ve)},this.setSize=function(P,$,le=!0){if(Re.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=P,ve=$,n.width=Math.floor(P*z),n.height=Math.floor($*z),le===!0&&(n.style.width=P+"px",n.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(K*z,ve*z).floor()},this.setDrawingBufferSize=function(P,$,le){K=P,ve=$,z=le,n.width=Math.floor(P*le),n.height=Math.floor($*le),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(ce)},this.getViewport=function(P){return P.copy(xe)},this.setViewport=function(P,$,le,ue){P.isVector4?xe.set(P.x,P.y,P.z,P.w):xe.set(P,$,le,ue),He.viewport(ce.copy(xe).multiplyScalar(z).round())},this.getScissor=function(P){return P.copy(Ce)},this.setScissor=function(P,$,le,ue){P.isVector4?Ce.set(P.x,P.y,P.z,P.w):Ce.set(P,$,le,ue),He.scissor(he.copy(Ce).multiplyScalar(z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(P){He.setScissorTest(Ie=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){fe=P},this.getClearColor=function(P){return P.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(P=!0,$=!0,le=!0){let ue=0;if(P){let Q=!1;if(C!==null){const Ae=C.texture.format;Q=M.has(Ae)}if(Q){const Ae=C.texture.type,Le=T.has(Ae),Be=we.getClearColor(),ze=we.getClearAlpha(),Ke=Be.r,et=Be.g,We=Be.b;Le?(S[0]=Ke,S[1]=et,S[2]=We,S[3]=ze,V.clearBufferuiv(V.COLOR,0,S)):(y[0]=Ke,y[1]=et,y[2]=We,y[3]=ze,V.clearBufferiv(V.COLOR,0,y))}else ue|=V.COLOR_BUFFER_BIT}$&&(ue|=V.DEPTH_BUFFER_BIT),le&&(ue|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Se,!1),n.removeEventListener("webglcontextcreationerror",ke,!1),we.dispose(),Ue.dispose(),Qe.dispose(),Xe.dispose(),k.dispose(),D.dispose(),_e.dispose(),X.dispose(),Ne.dispose(),de.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",An),Re.removeEventListener("sessionend",ji),_i.stop()};function Ee(P){P.preventDefault(),o_("WebGLRenderer: Context Lost."),I=!0}function Se(){o_("WebGLRenderer: Context Restored."),I=!1;const P=Gt.autoReset,$=Me.enabled,le=Me.autoUpdate,ue=Me.needsUpdate,Q=Me.type;De(),Gt.autoReset=P,Me.enabled=$,Me.autoUpdate=le,Me.needsUpdate=ue,Me.type=Q}function ke(P){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function at(P){const $=P.target;$.removeEventListener("dispose",at),Dt($)}function Dt(P){At(P),Xe.remove(P)}function At(P){const $=Xe.get(P).programs;$!==void 0&&($.forEach(function(le){de.releaseProgram(le)}),P.isShaderMaterial&&de.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,le,ue,Q,Ae){$===null&&($=en);const Le=Q.isMesh&&Q.matrixWorld.determinant()<0,Be=Sa(P,$,le,ue,Q);He.setMaterial(ue,Le);let ze=le.index,Ke=1;if(ue.wireframe===!0){if(ze=me.getWireframeAttribute(le),ze===void 0)return;Ke=2}const et=le.drawRange,We=le.attributes.position;let gt=et.start*Ke,wt=(et.start+et.count)*Ke;Ae!==null&&(gt=Math.max(gt,Ae.start*Ke),wt=Math.min(wt,(Ae.start+Ae.count)*Ke)),ze!==null?(gt=Math.max(gt,0),wt=Math.min(wt,ze.count)):We!=null&&(gt=Math.max(gt,0),wt=Math.min(wt,We.count));const yt=wt-gt;if(yt<0||yt===1/0)return;X.setup(Q,ue,Be,le,ze);let Wt,Lt=$e;if(ze!==null&&(Wt=ie.get(ze),Lt=Fe,Lt.setIndex(Wt)),Q.isMesh)ue.wireframe===!0?(He.setLineWidth(ue.wireframeLinewidth*Ft()),Lt.setMode(V.LINES)):Lt.setMode(V.TRIANGLES);else if(Q.isLine){let Ze=ue.linewidth;Ze===void 0&&(Ze=1),He.setLineWidth(Ze*Ft()),Q.isLineSegments?Lt.setMode(V.LINES):Q.isLineLoop?Lt.setMode(V.LINE_LOOP):Lt.setMode(V.LINE_STRIP)}else Q.isPoints?Lt.setMode(V.POINTS):Q.isSprite&&Lt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)fl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ze=Q._multiDrawStarts,Vt=Q._multiDrawCounts,_t=Q._multiDrawCount,Fn=ze?ie.get(ze).bytesPerElement:1,mn=Xe.get(ue).currentProgram.getUniforms();for(let wn=0;wn<_t;wn++)mn.setValue(V,"_gl_DrawID",wn),Lt.render(Ze[wn]/Fn,Vt[wn])}else if(Q.isInstancedMesh)Lt.renderInstances(gt,yt,Q.count);else if(le.isInstancedBufferGeometry){const Ze=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Vt=Math.min(le.instanceCount,Ze);Lt.renderInstances(gt,yt,Vt)}else Lt.render(gt,yt)};function ri(P,$,le){P.transparent===!0&&P.side===da&&P.forceSinglePass===!1?(P.side=Xn,P.needsUpdate=!0,vi(P,$,le),P.side=rr,P.needsUpdate=!0,vi(P,$,le),P.side=da):vi(P,$,le)}this.compile=function(P,$,le=null){le===null&&(le=P),w=Qe.get(le),w.init($),F.push(w),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test($.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),P!==le&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test($.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights();const ue=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ae=Q.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){const Be=Ae[Le];ri(Be,le,Q),ue.add(Be)}else ri(Ae,le,Q),ue.add(Ae)}),w=F.pop(),ue},this.compileAsync=function(P,$,le=null){const ue=this.compile(P,$,le);return new Promise(Q=>{function Ae(){if(ue.forEach(function(Le){Xe.get(Le).currentProgram.isReady()&&ue.delete(Le)}),ue.size===0){Q(P);return}setTimeout(Ae,10)}st.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let ln=null;function bn(P){ln&&ln(P)}function An(){_i.stop()}function ji(){_i.start()}const _i=new gb;_i.setAnimationLoop(bn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(P){ln=P,Re.setAnimationLoop(P),P===null?_i.stop():_i.start()},Re.addEventListener("sessionstart",An),Re.addEventListener("sessionend",ji),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera($),$=Re.getCamera()),P.isScene===!0&&P.onBeforeRender(U,P,$,C),w=Qe.get(P,F.length),w.init($),F.push(w),Je.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ae.setFromProjectionMatrix(Je,Bi,$.reversedDepth),Te=this.localClippingEnabled,be=Ge.init(this.clippingPlanes,Te),A=Ue.get(P,R.length),A.init(),R.push(A),Re.enabled===!0&&Re.isPresenting===!0){const Ae=U.xr.getDepthSensingMesh();Ae!==null&&Ks(Ae,$,-1/0,U.sortObjects)}Ks(P,$,0,U.sortObjects),A.finish(),U.sortObjects===!0&&A.sort(q,fe),ut=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ut&&we.addToRenderList(A,P),this.info.render.frame++,be===!0&&Ge.beginShadows();const le=w.state.shadowsArray;Me.render(le,P,$),be===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=A.opaque,Q=A.transmissive;if(w.setupLights(),$.isArrayCamera){const Ae=$.cameras;if(Q.length>0)for(let Le=0,Be=Ae.length;Le<Be;Le++){const ze=Ae[Le];Zs(ue,Q,P,ze)}ut&&we.render(P);for(let Le=0,Be=Ae.length;Le<Be;Le++){const ze=Ae[Le];yl(A,P,ze,ze.viewport)}}else Q.length>0&&Zs(ue,Q,P,$),ut&&we.render(P),yl(A,P,$);C!==null&&L===0&&(ot.updateMultisampleRenderTarget(C),ot.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(U,P,$),X.resetDefaultState(),G=-1,ee=null,F.pop(),F.length>0?(w=F[F.length-1],be===!0&&Ge.setGlobalState(U.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?A=R[R.length-1]:A=null};function Ks(P,$,le,ue){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)w.pushLight(P),P.castShadow&&w.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ae.intersectsSprite(P)){ue&&ct.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Je);const Le=_e.update(P),Be=P.material;Be.visible&&A.push(P,Le,Be,le,ct.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ae.intersectsObject(P))){const Le=_e.update(P),Be=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ct.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ct.copy(Le.boundingSphere.center)),ct.applyMatrix4(P.matrixWorld).applyMatrix4(Je)),Array.isArray(Be)){const ze=Le.groups;for(let Ke=0,et=ze.length;Ke<et;Ke++){const We=ze[Ke],gt=Be[We.materialIndex];gt&&gt.visible&&A.push(P,Le,gt,le,ct.z,We)}}else Be.visible&&A.push(P,Le,Be,le,ct.z,null)}}const Ae=P.children;for(let Le=0,Be=Ae.length;Le<Be;Le++)Ks(Ae[Le],$,le,ue)}function yl(P,$,le,ue){const{opaque:Q,transmissive:Ae,transparent:Le}=P;w.setupLightsView(le),be===!0&&Ge.setGlobalState(U.clippingPlanes,le),ue&&He.viewport(ce.copy(ue)),Q.length>0&&Li(Q,$,le),Ae.length>0&&Li(Ae,$,le),Le.length>0&&Li(Le,$,le),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Zs(P,$,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;w.state.transmissionRenderTarget[ue.id]===void 0&&(w.state.transmissionRenderTarget[ue.id]=new Br(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Ws:_a,minFilter:zr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ae=w.state.transmissionRenderTarget[ue.id],Le=ue.viewport||ce;Ae.setSize(Le.z*U.transmissionResolutionScale,Le.w*U.transmissionResolutionScale);const Be=U.getRenderTarget(),ze=U.getActiveCubeFace(),Ke=U.getActiveMipmapLevel();U.setRenderTarget(Ae),U.getClearColor(B),Y=U.getClearAlpha(),Y<1&&U.setClearColor(16777215,.5),U.clear(),ut&&we.render(le);const et=U.toneMapping;U.toneMapping=ar;const We=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),w.setupLightsView(ue),be===!0&&Ge.setGlobalState(U.clippingPlanes,ue),Li(P,le,ue),ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae),st.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let wt=0,yt=$.length;wt<yt;wt++){const Wt=$[wt],{object:Lt,geometry:Ze,material:Vt,group:_t}=Wt;if(Vt.side===da&&Lt.layers.test(ue.layers)){const Fn=Vt.side;Vt.side=Xn,Vt.needsUpdate=!0,jr(Lt,le,ue,Ze,Vt,_t),Vt.side=Fn,Vt.needsUpdate=!0,gt=!0}}gt===!0&&(ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae))}U.setRenderTarget(Be,ze,Ke),U.setClearColor(B,Y),We!==void 0&&(ue.viewport=We),U.toneMapping=et}function Li(P,$,le){const ue=$.isScene===!0?$.overrideMaterial:null;for(let Q=0,Ae=P.length;Q<Ae;Q++){const Le=P[Q],{object:Be,geometry:ze,group:Ke}=Le;let et=Le.material;et.allowOverride===!0&&ue!==null&&(et=ue),Be.layers.test(le.layers)&&jr(Be,$,le,ze,et,Ke)}}function jr(P,$,le,ue,Q,Ae){P.onBeforeRender(U,$,le,ue,Q,Ae),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(U,$,le,ue,P,Ae),Q.transparent===!0&&Q.side===da&&Q.forceSinglePass===!1?(Q.side=Xn,Q.needsUpdate=!0,U.renderBufferDirect(le,$,ue,Q,P,Ae),Q.side=rr,Q.needsUpdate=!0,U.renderBufferDirect(le,$,ue,Q,P,Ae),Q.side=da):U.renderBufferDirect(le,$,ue,Q,P,Ae),P.onAfterRender(U,$,le,ue,Q,Ae)}function vi(P,$,le){$.isScene!==!0&&($=en);const ue=Xe.get(P),Q=w.state.lights,Ae=w.state.shadowsArray,Le=Q.state.version,Be=de.getParameters(P,Q.state,Ae,$,le),ze=de.getProgramCacheKey(Be);let Ke=ue.programs;ue.environment=P.isMeshStandardMaterial?$.environment:null,ue.fog=$.fog,ue.envMap=(P.isMeshStandardMaterial?D:k).get(P.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,Ke===void 0&&(P.addEventListener("dispose",at),Ke=new Map,ue.programs=Ke);let et=Ke.get(ze);if(et!==void 0){if(ue.currentProgram===et&&ue.lightsStateVersion===Le)return ya(P,Be),et}else Be.uniforms=de.getUniforms(P),P.onBeforeCompile(Be,U),et=de.acquireProgram(Be,ze),Ke.set(ze,et),ue.uniforms=Be.uniforms;const We=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(We.clippingPlanes=Ge.uniform),ya(P,Be),ue.needsLights=Sl(P),ue.lightsStateVersion=Le,ue.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.directionalShadowMap.value=Q.state.directionalShadowMap,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotShadowMap.value=Q.state.spotShadowMap,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMap.value=Q.state.pointShadowMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix),ue.currentProgram=et,ue.uniformsList=null,et}function Hi(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=xu.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function ya(P,$){const le=Xe.get(P);le.outputColorSpace=$.outputColorSpace,le.batching=$.batching,le.batchingColor=$.batchingColor,le.instancing=$.instancing,le.instancingColor=$.instancingColor,le.instancingMorph=$.instancingMorph,le.skinning=$.skinning,le.morphTargets=$.morphTargets,le.morphNormals=$.morphNormals,le.morphColors=$.morphColors,le.morphTargetsCount=$.morphTargetsCount,le.numClippingPlanes=$.numClippingPlanes,le.numIntersection=$.numClipIntersection,le.vertexAlphas=$.vertexAlphas,le.vertexTangents=$.vertexTangents,le.toneMapping=$.toneMapping}function Sa(P,$,le,ue,Q){$.isScene!==!0&&($=en),ot.resetTextureUnits();const Ae=$.fog,Le=ue.isMeshStandardMaterial?$.environment:null,Be=C===null?U.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:js,ze=(ue.isMeshStandardMaterial?D:k).get(ue.envMap||Le),Ke=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,et=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),We=!!le.morphAttributes.position,gt=!!le.morphAttributes.normal,wt=!!le.morphAttributes.color;let yt=ar;ue.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(yt=U.toneMapping);const Wt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Lt=Wt!==void 0?Wt.length:0,Ze=Xe.get(ue),Vt=w.state.lights;if(be===!0&&(Te===!0||P!==ee)){const yn=P===ee&&ue.id===G;Ge.setState(ue,P,yn)}let _t=!1;ue.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Vt.state.version||Ze.outputColorSpace!==Be||Q.isBatchedMesh&&Ze.batching===!1||!Q.isBatchedMesh&&Ze.batching===!0||Q.isBatchedMesh&&Ze.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ze.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ze.instancing===!1||!Q.isInstancedMesh&&Ze.instancing===!0||Q.isSkinnedMesh&&Ze.skinning===!1||!Q.isSkinnedMesh&&Ze.skinning===!0||Q.isInstancedMesh&&Ze.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ze.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ze.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ze.instancingMorph===!1&&Q.morphTexture!==null||Ze.envMap!==ze||ue.fog===!0&&Ze.fog!==Ae||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ge.numPlanes||Ze.numIntersection!==Ge.numIntersection)||Ze.vertexAlphas!==Ke||Ze.vertexTangents!==et||Ze.morphTargets!==We||Ze.morphNormals!==gt||Ze.morphColors!==wt||Ze.toneMapping!==yt||Ze.morphTargetsCount!==Lt)&&(_t=!0):(_t=!0,Ze.__version=ue.version);let Fn=Ze.currentProgram;_t===!0&&(Fn=vi(ue,$,Q));let mn=!1,wn=!1,Ea=!1;const jt=Fn.getUniforms(),tn=Ze.uniforms;if(He.useProgram(Fn.program)&&(mn=!0,wn=!0,Ea=!0),ue.id!==G&&(G=ue.id,wn=!0),mn||ee!==P){He.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),jt.setValue(V,"projectionMatrix",P.projectionMatrix),jt.setValue(V,"viewMatrix",P.matrixWorldInverse);const nn=jt.map.cameraPosition;nn!==void 0&&nn.setValue(V,Ve.setFromMatrixPosition(P.matrixWorld)),Pt.logarithmicDepthBuffer&&jt.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&jt.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),ee!==P&&(ee=P,wn=!0,Ea=!0)}if(Q.isSkinnedMesh){jt.setOptional(V,Q,"bindMatrix"),jt.setOptional(V,Q,"bindMatrixInverse");const yn=Q.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),jt.setValue(V,"boneTexture",yn.boneTexture,ot))}Q.isBatchedMesh&&(jt.setOptional(V,Q,"batchingTexture"),jt.setValue(V,"batchingTexture",Q._matricesTexture,ot),jt.setOptional(V,Q,"batchingIdTexture"),jt.setValue(V,"batchingIdTexture",Q._indirectTexture,ot),jt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&jt.setValue(V,"batchingColorTexture",Q._colorsTexture,ot));const Pn=le.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ye.update(Q,le,Fn),(wn||Ze.receiveShadow!==Q.receiveShadow)&&(Ze.receiveShadow=Q.receiveShadow,jt.setValue(V,"receiveShadow",Q.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(tn.envMap.value=ze,tn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&$.environment!==null&&(tn.envMapIntensity.value=$.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=pL()),wn&&(jt.setValue(V,"toneMappingExposure",U.toneMappingExposure),Ze.needsLights&&cn(tn,Ea),Ae&&ue.fog===!0&&Pe.refreshFogUniforms(tn,Ae),Pe.refreshMaterialUniforms(tn,ue,z,ve,w.state.transmissionRenderTarget[P.id]),xu.upload(V,Hi(Ze),tn,ot)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(xu.upload(V,Hi(Ze),tn,ot),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&jt.setValue(V,"center",Q.center),jt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),jt.setValue(V,"normalMatrix",Q.normalMatrix),jt.setValue(V,"modelMatrix",Q.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const yn=ue.uniformsGroups;for(let nn=0,$s=yn.length;nn<$s;nn++){const Ni=yn[nn];Ne.update(Ni,Fn),Ne.bind(Ni,Fn)}}return Fn}function cn(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function Sl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,$,le){const ue=Xe.get(P);ue.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Xe.get(P.texture).__webglTexture=$,Xe.get(P.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:le,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,$){const le=Xe.get(P);le.__webglFramebuffer=$,le.__useDefaultFramebuffer=$===void 0};const Ml=V.createFramebuffer();this.setRenderTarget=function(P,$=0,le=0){C=P,H=$,L=le;let ue=!0,Q=null,Ae=!1,Le=!1;if(P){const ze=Xe.get(P);if(ze.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(V.FRAMEBUFFER,null),ue=!1;else if(ze.__webglFramebuffer===void 0)ot.setupRenderTarget(P);else if(ze.__hasExternalTextures)ot.rebindTextures(P,Xe.get(P.texture).__webglTexture,Xe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const We=P.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&Xe.has(We)&&(P.width!==We.image.width||P.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(P)}}const Ke=P.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Le=!0);const et=Xe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(et[$])?Q=et[$][le]:Q=et[$],Ae=!0):P.samples>0&&ot.useMultisampledRTT(P)===!1?Q=Xe.get(P).__webglMultisampledFramebuffer:Array.isArray(et)?Q=et[le]:Q=et,ce.copy(P.viewport),he.copy(P.scissor),J=P.scissorTest}else ce.copy(xe).multiplyScalar(z).floor(),he.copy(Ce).multiplyScalar(z).floor(),J=Ie;if(le!==0&&(Q=Ml),He.bindFramebuffer(V.FRAMEBUFFER,Q)&&ue&&He.drawBuffers(P,Q),He.viewport(ce),He.scissor(he),He.setScissorTest(J),Ae){const ze=Xe.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,le)}else if(Le){const ze=$;for(let Ke=0;Ke<P.textures.length;Ke++){const et=Xe.get(P.textures[Ke]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ke,et.__webglTexture,le,ze)}}else if(P!==null&&le!==0){const ze=Xe.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ze.__webglTexture,le)}G=-1},this.readRenderTargetPixels=function(P,$,le,ue,Q,Ae,Le,Be=0){if(!(P&&P.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){He.bindFramebuffer(V.FRAMEBUFFER,ze);try{const Ke=P.textures[Be],et=Ke.format,We=Ke.type;if(!Pt.textureFormatReadable(et)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(We)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-ue&&le>=0&&le<=P.height-Q&&(P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be),V.readPixels($,le,ue,Q,it.convert(et),it.convert(We),Ae))}finally{const Ke=C!==null?Xe.get(C).__webglFramebuffer:null;He.bindFramebuffer(V.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(P,$,le,ue,Q,Ae,Le,Be=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze)if($>=0&&$<=P.width-ue&&le>=0&&le<=P.height-Q){He.bindFramebuffer(V.FRAMEBUFFER,ze);const Ke=P.textures[Be],et=Ke.format,We=Ke.type;if(!Pt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,gt),V.bufferData(V.PIXEL_PACK_BUFFER,Ae.byteLength,V.STREAM_READ),P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be),V.readPixels($,le,ue,Q,it.convert(et),it.convert(We),0);const wt=C!==null?Xe.get(C).__webglFramebuffer:null;He.bindFramebuffer(V.FRAMEBUFFER,wt);const yt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await XT(V,yt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,gt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ae),V.deleteBuffer(gt),V.deleteSync(yt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,$=null,le=0){const ue=Math.pow(2,-le),Q=Math.floor(P.image.width*ue),Ae=Math.floor(P.image.height*ue),Le=$!==null?$.x:0,Be=$!==null?$.y:0;ot.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Le,Be,Q,Ae),He.unbindTexture()};const Gi=V.createFramebuffer(),Ma=V.createFramebuffer();this.copyTextureToTexture=function(P,$,le=null,ue=null,Q=0,Ae=null){Ae===null&&(Q!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Q,Q=0):Ae=0);let Le,Be,ze,Ke,et,We,gt,wt,yt;const Wt=P.isCompressedTexture?P.mipmaps[Ae]:P.image;if(le!==null)Le=le.max.x-le.min.x,Be=le.max.y-le.min.y,ze=le.isBox3?le.max.z-le.min.z:1,Ke=le.min.x,et=le.min.y,We=le.isBox3?le.min.z:0;else{const Pn=Math.pow(2,-Q);Le=Math.floor(Wt.width*Pn),Be=Math.floor(Wt.height*Pn),P.isDataArrayTexture?ze=Wt.depth:P.isData3DTexture?ze=Math.floor(Wt.depth*Pn):ze=1,Ke=0,et=0,We=0}ue!==null?(gt=ue.x,wt=ue.y,yt=ue.z):(gt=0,wt=0,yt=0);const Lt=it.convert($.format),Ze=it.convert($.type);let Vt;$.isData3DTexture?(ot.setTexture3D($,0),Vt=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ot.setTexture2DArray($,0),Vt=V.TEXTURE_2D_ARRAY):(ot.setTexture2D($,0),Vt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const _t=V.getParameter(V.UNPACK_ROW_LENGTH),Fn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),mn=V.getParameter(V.UNPACK_SKIP_PIXELS),wn=V.getParameter(V.UNPACK_SKIP_ROWS),Ea=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Wt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ke),V.pixelStorei(V.UNPACK_SKIP_ROWS,et),V.pixelStorei(V.UNPACK_SKIP_IMAGES,We);const jt=P.isDataArrayTexture||P.isData3DTexture,tn=$.isDataArrayTexture||$.isData3DTexture;if(P.isDepthTexture){const Pn=Xe.get(P),yn=Xe.get($),nn=Xe.get(Pn.__renderTarget),$s=Xe.get(yn.__renderTarget);He.bindFramebuffer(V.READ_FRAMEBUFFER,nn.__webglFramebuffer),He.bindFramebuffer(V.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Ni=0;Ni<ze;Ni++)jt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(P).__webglTexture,Q,We+Ni),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get($).__webglTexture,Ae,yt+Ni)),V.blitFramebuffer(Ke,et,Le,Be,gt,wt,Le,Be,V.DEPTH_BUFFER_BIT,V.NEAREST);He.bindFramebuffer(V.READ_FRAMEBUFFER,null),He.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||Xe.has(P)){const Pn=Xe.get(P),yn=Xe.get($);He.bindFramebuffer(V.READ_FRAMEBUFFER,Gi),He.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ma);for(let nn=0;nn<ze;nn++)jt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pn.__webglTexture,Q,We+nn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pn.__webglTexture,Q),tn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,yn.__webglTexture,Ae,yt+nn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yn.__webglTexture,Ae),Q!==0?V.blitFramebuffer(Ke,et,Le,Be,gt,wt,Le,Be,V.COLOR_BUFFER_BIT,V.NEAREST):tn?V.copyTexSubImage3D(Vt,Ae,gt,wt,yt+nn,Ke,et,Le,Be):V.copyTexSubImage2D(Vt,Ae,gt,wt,Ke,et,Le,Be);He.bindFramebuffer(V.READ_FRAMEBUFFER,null),He.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else tn?P.isDataTexture||P.isData3DTexture?V.texSubImage3D(Vt,Ae,gt,wt,yt,Le,Be,ze,Lt,Ze,Wt.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(Vt,Ae,gt,wt,yt,Le,Be,ze,Lt,Wt.data):V.texSubImage3D(Vt,Ae,gt,wt,yt,Le,Be,ze,Lt,Ze,Wt):P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ae,gt,wt,Le,Be,Lt,Ze,Wt.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ae,gt,wt,Wt.width,Wt.height,Lt,Wt.data):V.texSubImage2D(V.TEXTURE_2D,Ae,gt,wt,Le,Be,Lt,Ze,Wt);V.pixelStorei(V.UNPACK_ROW_LENGTH,_t),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Fn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,mn),V.pixelStorei(V.UNPACK_SKIP_ROWS,wn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ea),Ae===0&&$.generateMipmaps&&V.generateMipmap(Vt),He.unbindTexture()},this.initRenderTarget=function(P){Xe.get(P).__webglFramebuffer===void 0&&ot.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ot.setTextureCube(P,0):P.isData3DTexture?ot.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ot.setTexture2DArray(P,0):ot.setTexture2D(P,0),He.unbindTexture()},this.resetState=function(){H=0,L=0,C=null,He.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const gL=()=>{const a=O.useRef(null);return O.useEffect(()=>{const e=new xA,n=new mi(30,window.innerWidth/window.innerHeight,.1,1e3),r=new mL({canvas:a.current,alpha:!0});r.setSize(window.innerWidth,window.innerHeight);const o=new Xp(1,0),c=new hb({color:16777215}),d=new EA(o),f=new MA(d,c);e.add(f),n.position.z=5;const p=()=>{requestAnimationFrame(p),f.rotation.y+=8e-4,r.render(e,n)};p();const h=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h),r.dispose()}},[]),x.jsx("canvas",{ref:a,style:{position:"absolute",top:0,left:0,zIndex:1,opacity:.3}})},xL=()=>x.jsx("div",{className:"animatedRingContainer",children:x.jsx("div",{className:"animatedRing",children:x.jsx("div",{className:"animatedRingCore"})})}),_L=({initialConnectedAmount:a})=>{const[e,n]=O.useState(a);return O.useEffect(()=>{n(a)},[a]),x.jsx(x.Fragment,{children:e>0&&x.jsxs("div",{className:"connectedBots",children:[x.jsx("h1",{children:"BotNet"}),x.jsxs("p",{children:["Connected bots: ",x.jsx("span",{className:"positive",children:e})]}),x.jsxs("p",{children:["Destroyed bots: ",x.jsx("span",{className:"negative",children:"0"})]})]})})};function Ep(a){return`${Number(a)||0} pt`}function vL(a=""){const e=String(a).trim().split(/\s+/).filter(Boolean).slice(0,2);return e.length===0?"??":e.map(n=>{var r;return((r=n[0])==null?void 0:r.toUpperCase())||""}).join("")}function bL({group:a}){return a.image_url?x.jsx("img",{className:"screen-leaderboard__avatar-image",src:a.image_url,alt:a.name,loading:"lazy"}):x.jsx("span",{className:"screen-leaderboard__avatar-fallback",children:vL(a.name)})}function Dh({group:a,position:e}){if(!a)return x.jsx("div",{className:"screen-leaderboard__podium screen-leaderboard__podium--empty"});const n=["first","second","third"][e-1]||"";return x.jsxs("article",{className:`screen-leaderboard__podium screen-leaderboard__podium--${n}`,children:[x.jsxs("div",{className:"screen-leaderboard__rank-badge",children:["#",e]}),x.jsx("div",{className:"screen-leaderboard__avatar",children:x.jsx(bL,{group:a})}),x.jsxs("div",{className:"screen-leaderboard__podium-copy",children:[x.jsx("h2",{children:a.name}),x.jsx("p",{children:a.class||"Onbekende klas"}),x.jsx("strong",{children:Ep(a.total_points)})]})]})}function yL({groups:a=[],loading:e=!1,error:n=null}){var d;const r=[...a].sort((f,p)=>{const h=Number(p.total_points||0)-Number(f.total_points||0);return h!==0?h:Number(p.id||0)-Number(f.id||0)}),o=r.slice(0,3),c=r.slice(0,8);return e?x.jsx("div",{className:"screen-leaderboard__state",children:"Leaderboard laden..."}):n?x.jsxs("div",{className:"screen-leaderboard__state screen-leaderboard__state--error",children:[x.jsx("strong",{children:"Fout:"})," ",n]}):r.length===0?x.jsx("div",{className:"screen-leaderboard__state",children:"Nog geen teams gevonden."}):x.jsxs("div",{className:"screen-leaderboard",children:[x.jsxs("header",{className:"screen-leaderboard__header",children:[x.jsxs("div",{children:[x.jsx("p",{className:"screen-leaderboard__eyebrow",children:"Interpol Network"}),x.jsx("h1",{children:"Hallway Leaderboard"})]}),x.jsxs("div",{className:"screen-leaderboard__stats",children:[x.jsxs("div",{children:[x.jsx("span",{children:"Teams online"}),x.jsx("strong",{children:r.length})]}),x.jsxs("div",{children:[x.jsx("span",{children:"Hoogste score"}),x.jsx("strong",{children:Ep((d=o[0])==null?void 0:d.total_points)})]})]})]}),x.jsxs("section",{className:"screen-leaderboard__stage",children:[x.jsx(Dh,{group:o[1],position:2}),x.jsx(Dh,{group:o[0],position:1}),x.jsx(Dh,{group:o[2],position:3})]}),x.jsxs("aside",{className:"screen-leaderboard__rail",children:[x.jsxs("div",{className:"screen-leaderboard__rail-header",children:[x.jsx("span",{children:"Live standings"}),x.jsxs("span",{children:["Top ",c.length]})]}),x.jsx("div",{className:"screen-leaderboard__rail-list",children:c.map((f,p)=>x.jsxs("div",{className:"screen-leaderboard__rail-row",children:[x.jsxs("span",{className:"screen-leaderboard__rail-rank",children:["#",f.rank||p+1]}),x.jsxs("div",{className:"screen-leaderboard__rail-team",children:[x.jsx("strong",{children:f.name}),x.jsx("span",{children:f.class||"Onbekende klas"})]}),x.jsx("strong",{className:"screen-leaderboard__rail-score",children:Ep(f.total_points)})]},f.id))})]})]})}const SL=()=>{const{groups:a,loading:e,error:n}=Iv(),r=a.length,o=tT.slice(0,r);return x.jsxs("div",{className:"hallway-screen",children:[x.jsx("div",{className:"hallway-screen__background"}),x.jsx("div",{className:"hallway-screen__grid"}),x.jsx(gL,{}),x.jsx(xL,{}),x.jsx("div",{className:"hallway-screen__signal-stack",children:o.slice(0,5).map((c,d)=>x.jsxs("div",{className:"hallway-screen__signal-card",children:[x.jsxs("span",{children:["Route ",d+1]}),x.jsxs("strong",{children:[c.startLat.toFixed(1),", ",c.startLng.toFixed(1)]})]},`${c.startLat}-${c.startLng}-${d}`))}),x.jsx(_L,{initialConnectedAmount:r}),x.jsx(yL,{groups:a,loading:e,error:n})]})};function ML(){return x.jsx(SL,{})}const EL=()=>x.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",zIndex:9999,fontFamily:"var(--font-w95, Arial, sans-serif)"},children:x.jsxs("div",{style:{backgroundColor:"#c3c7cb",border:"2px solid #000",padding:"32px",width:"420px",borderRadius:"4px",boxShadow:"4px 4px 0px #000",textAlign:"center"},children:[x.jsx("h1",{style:{fontSize:"22px",marginBottom:"12px",paddingBottom:"8px",borderBottom:"2px solid #000",fontWeight:"bold"},children:"🔒 401: Unauthorized"}),x.jsx("p",{style:{fontSize:"14px",marginTop:"12px"},children:"Je bent niet geautoriseerd om deze pagina te bekijken."})]})}),TL=()=>x.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",zIndex:9999,fontFamily:"var(--font-w95, Arial, sans-serif)"},children:x.jsxs("div",{style:{backgroundColor:"#c3c7cb",border:"2px solid #000",padding:"32px",width:"420px",borderRadius:"4px",boxShadow:"4px 4px 0px #000",textAlign:"center"},children:[x.jsx("h1",{style:{fontSize:"22px",marginBottom:"12px",paddingBottom:"8px",borderBottom:"2px solid #000",fontWeight:"bold"},children:"❌ 404: File not Found"}),x.jsx("p",{style:{fontSize:"14px",marginTop:"12px"},children:"De pagina of het bestand dat je zoekt bestaat niet."})]})}),Ja=["docent","student"],AL=[{path:"/",element:x.jsx(M1,{})},{path:"/leaderboard",element:x.jsx(ML,{})},{path:"/unauthorized",element:x.jsx(EL,{})},{path:"*",element:x.jsx(TL,{})}],wL=[{path:"/training",roles:Ja,element:x.jsx(e2,{})},{path:"/dashboard/:teamId",roles:Ja,teamProtected:!0,element:x.jsx(x2,{})},{path:"/html-css",roles:Ja,element:x.jsx(U2,{})},{path:"/javascript",roles:Ja,element:x.jsx(P2,{})},{path:"/kijk-op-de-wijk",roles:Ja,element:x.jsx(v1,{})},{path:"/creative-coding",roles:Ja,element:x.jsx(I2,{})},{path:"/creative-coding/step2",roles:Ja,element:x.jsx(b1,{})},{path:"/creative-coding/step3",roles:Ja,element:x.jsx(y1,{})},{path:"/admin",roles:["docent"],element:x.jsx(Q2,{})}];function RL(a){var e;return(e=a.roles)!=null&&e.length?x.jsx(f1,{roles:a.roles,teamProtected:a.teamProtected,children:a.element}):a.element}const CL=()=>x.jsx(o1,{children:x.jsx(YM,{children:x.jsx(d1,{children:x.jsxs(EM,{children:[wL.map(a=>x.jsx(Nh,{path:a.path,element:RL(a)},a.path)),AL.map(a=>x.jsx(Nh,{path:a.path,element:a.element},a.path))]})})})});NS.createRoot(document.getElementById("root")).render(x.jsx($t.StrictMode,{children:x.jsx(CL,{})}));
