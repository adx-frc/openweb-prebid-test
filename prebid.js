/* prebid.js v11.44.0

Updated: 2026-10-26

Modules: openwebBidAdapter, consentManagementGpp, consentManagementTcf, gppControl_usnat, gppControl_usstates, gptPreAuction, storageControl, tcfControl */

if(window.pbjs&&window.pbjs.libLoaded)try{window.pbjs.getConfig("debug")&&console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load 

aborted.")}catch(e){}else (function(){

(()=>{var e={58928(e,t,r){function n(e,t,r,n,o){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)e=e?e[t[n]]:o;return e===o?r:e}r.d(t,{A:()=>n})},35481(e){

/*

* @license MIT

* Fun Hooks v1.1.0

* (c) @snapwich

*/

i.SYNC=1,i.ASYNC=2,i.QUEUE=4;var t="fun-hooks",r=Object.freeze({ready:0}),n=new 

WeakMap;function o(e,t){return Array.prototype.slice.call(e,t)}function i(e){var c,u={},f=[];function a(e,t){return"function"==typeof e?y.call(null,"sync",e,t):"string"==typeof e&&"function"==typeof t?y.apply(null,arguments):"object"==typeof e?l.apply(null,arguments):void 0}function l(e,t,r){var n=!0;void 0===t&&(t=Object.getOwnPropertyNames(e).filter(e=>!e.match(/^_/)),n=!1);var 

o={},i=["constructor"];do{t.forEach(function(t){var n=t.match(/(?:(sync|async):)?(.+)/),c=n[1]||"sync",u=n[2];if(!o[u]&&"function"==typeof e[u]&&-1===i.indexOf(u)){var f=e[u];o[u]=e[u]=y(c,f,r?[r,u]:void 0)}}),e=Object.getPrototypeOf(e)}while(n&&e);return o}function p(e){var r=Array.isArray(e)?e:e.split(".");return r.reduce(function(n,o,i){var u=n[o],a=!1;return 

u||(i===r.length-1?(c||f.push(function(){a||console.warn(t+": referenced '"+e+"' but it was never created")}),n[o]=s(function(e){n[o]=e,a=!0})):n[o]={})},u)}function s(e){var t=[],r=[],o=function(){},i={before:function(e,r){return u.call(this,t,"before",e,r)},after:function(e,t){return u.call(this,r,"after",e,t)},getHooks:function(e){var n=t.concat(r);"object"==typeof e&&(n=n.filter(function(t){return 

Object.keys(e).every(function(r){return t[r]===e[r]})}));try{Object.assign(n,{remove:function(){return n.forEach(function(e){e.remove()}),this}})}catch(e){console.error("error adding `remove` to array, did you modify Array.prototype?")}return n},removeAll:function(){return this.getHooks().remove()}},c={install:function(n,i,c){this.type=n,o=c,c(t,r),e&&e(i)}};return n.set(i.after,c),i;function 

u(e,n,i,c){var u={hook:i,type:n,priority:c||10,remove:function(){var n=e.indexOf(u);-1!==n&&(e.splice(n,1),o(t,r))}};return e.push(u),e.sort(function(e,t){return t.priority-e.priority}),o(t,r),this}}function y(r,u,a){var l=u.after&&n.get(u.after);if(l){if(l.type!==r)throw t+": recreated hookable with different type";return u}var y,d=a?p(a):s(),v={get:function(e,t){return 

d[t]||Reflect.get.apply(Reflect,arguments)}};c||f.push(b);var h=new Proxy(u,v);return n.get(h.after).install(r,h,function(e,t){var n,i=[];e.length||t.length?(e.forEach(c),n=i.push(void 0)-1,t.forEach(c),y=function(e,t,c){var u,f=i.slice(),a=0,l="async"===r&&"function"==typeof c[c.length-1]&&c.pop();function p(e){"sync"===r?u=e:l&&l.apply(null,arguments)}function s(e){if(f[a]){var n=o(arguments);return 

s.bail=p,n.unshift(s),f[a++].apply(t,n)}"sync"===r?u=e:l&&l.apply(null,arguments)}return f[n]=function(){var n=o(arguments,1);"async"===r&&l&&(delete s.bail,n.push(s));var i=e.apply(t,n);"sync"===r&&s(i)},s.apply(null,c),u}):y=void 0;function c(e){i.push(e.hook)}b()}),h;function b(){!c&&("sync"!==r||e.ready&i.SYNC)&&("async"!==r||e.ready&i.ASYNC)?"sync"!==r&&e.ready&i.QUEUE?v.apply=function(){var 

e=arguments;f.push(function(){h.apply(e[1],e[2])})}:v.apply=function(){throw t+": hooked function not ready"}:v.apply=y}}return(e=Object.assign({},r,e)).ready?a.ready=function(){c=!0,function(e){for(var t;t=e.shift();)t()}(f)}:c=!0,a.get=p,a}e.exports=i},83435(e,t,r){function n(e,t,r){t.split&&(t=t.split("."));for(var n,o,i=0,c=t.length,u=e;i<c&&"__proto__"!=(o=""+t[i++])&&"constructor"!==o&&"prototype"!==o;)u=u[o

]=i===c?r:typeof(n=u[o])==typeof t?n:0*t[i]!=0||~(""+t[i]).indexOf(".")?{}:[]}r.d(t,{J:()=>n})},91490(e,t,r){function n(e){var t,r,o;if(Array.isArray(e)){for(r=Array(t=e.length);t--;)r[t]=(o=e[t])&&"object"==typeof o?n(o):o;return r}if("[object Object]"===Object.prototype.toString.call(e)){for(t in r={},e)"__proto__"===t?Object.defineProperty(r,t,{value:n(e[t]),configurable:!0,enumerable:!0,writable:!0}):r

[t]=(o=e[t])&&"object"==typeof o?n(o):o;return r}return e}r.d(t,{Q:()=>n})}};const t={};function r(n){const o=t[n];if(void 0!==o)return o.exports;const i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{const e=[];r.O=(t,n,o,i)=>{if(n){i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];return void(e[c]=[n,o,i])}let u=1/0;for(c=0;c<e.length;c++){let[n,o,i]=e[c],a=!0;for(var 

f=0;f<n.length;f++)(!1&i||u>=i)&&Object.keys(r.O).every(e=>r.O[e](n[f]))?n.splice(f--,1):(a=!1,i<u&&(u=i));if(a){e.splice(c--,1);const r=o();void 0!==r&&(t=r)}}return t}})(),r.n=e=>{const t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{if(Array.isArray(t))for(var n=0;n<t.length;){var o=t[n++],i=t[n++];r.o(e,o)?0===i&&n++:0===i?Object.defineProperty(e,o,{enumerable:!0,value:t[n++]}):Object.defineProperty(e,o,{e

numerable:!0,get:i})}else for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{Symbol.toStringTag&&Object

.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.dn=e=>{(Object.getOwnPropertyDescriptor(e,"name")||{}).writable||Object.defineProperty(e,"name",{value:"default",configurable:!0})},(()=>{const e={39673:0};r.O.j=t=>0===e[t];const t=(t,n)=>{let[o,i,c]=n;var u,f,a=0;if(o.some(t=>0!==e[t])){for(u in i)r.o(i,u)&&(r.m[u]=i[u]);if(c)var 

l=c(r)}for(t&&t(n);a<o.length;a++)f=o[a],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(l)},n=("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk=("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();let n=r.O(void 

0,[60802,75698,98213,37769,85590,51085],()=>r(82812));n=r.O(n)})();

(("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk=("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk||[]).push([[48909],{59635(e,t,p){var r=p(41068),a=p(11129),n=p(17413),s=p(82873);const 

o={...(0,p(67212).B2)("https://hb.openwebmp.com/",{PRODUCTION:"hb-multi",TEST:"hb-multi-test"}),code:"openweb",gvlid:280,isBidRequestValid:function(e){return e.params?e.params.org?!!e.params.placementId||((0,n.JE)("placementId is a mandatory param for OpenWeb adapter"),!1):((0,n.JE)("org is a mandatory param for OpenWeb adapter"),!1):((0,n.JE)("no params have been set to OpenWeb 

adapter"),!1)}};(0,s.a$)(o),(0,a.E)("openwebBidAdapter"),Object.assign(r.W1,{280:{purposes:[1,3,4],legIntPurposes:[2,7,10],flexiblePurposes:[2,7,10],specialFeatures:[]}})}},e=>{e.O(0,[60802,75698,98213,37769,85590,51085,40315,12183],()=>{return t=59635,e(e.s=t);var t});e.O()}]);

(("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk=("undefined"!=typeof 

document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk||[]).push([[38793],{69489(e,n,t){var s=t(11129),i=t(17413),a=t(83435),r=t(33350),p=t(18384),o=t(41068),c=t(78636),l=t(94077),u=t(98203),d=t(44390),g=t(59099);let h={},m=null;class C{message;args;constructor(e,n){this.message=e,this.args=null==n?[]:[n]}}class S{apiVersion="1.1";cmp;static INST;static get(e=l.c5){if(null==this.INST){const 

n=e({apiName:"__gpp",apiArgs:["command","callback","parameter"],mode:2});if(null==n)throw new C("GPP CMP not found");this.INST=new this(n)}return this.INST}#e;#n;#t=[];initialized=!1;constructor(e){this.cmp=e,[this.#e,this.#n]=["resolve","reject"].map(e=>n=>{for(;this.#t.length;)this.#t.pop()[e](n)})}init(e){const n=this.updateWhenReady(e);return 

this.initialized||(e.gppVersion!==this.apiVersion&&(0,i.JE)(`Unrecognized GPP CMP version: ${e.apiVersion}. Continuing using GPP API version ${this.apiVersion}...`),this.initialized=!0,m||(m=(0,g.Al)("gpp")),m.setCmpApi(this.cmp),this.cmp({command:"addEventListener",callback:(e,n)=>{null==n||n?"error"===e?.pingData?.cmpStatus?this.#n(new C('CMP status is "error"; please check CMP 

setup',e)):this.isCMPReady(e?.pingData||{})&&["sectionChange","signalStatus"].includes(e?.eventName)&&this.#e(this.updateConsent(e.pingData)):this.#n(new C("Received error response from CMP",e)),null==o.ad.getConsentData()||null==e?.pingData||this.isCMPReady(e.pingData)||o.ad.setConsentData(null),null!=e?.listenerId&&m?.setCmpListenerId(e?.listenerId)}})),n}refresh(){return 

this.cmp({command:"ping"}).then(this.init.bind(this))}updateConsent(e){return new u.U9(n=>{if(null==e||(0,i.Im)(e))throw new C("Received empty response from CMP",e);const t=P(e);(0,i.fH)("Retrieved GPP consent from CMP:",t),o.ad.setConsentData(t),n(t)})}nextUpdate(){const e=(0,u.v6)();return this.#t.push(e),e.promise}updateWhenReady(e){return this.isCMPReady(e)?this.updateConsent(e):this.nextUpdate()}isCMPReady(e){return"ready"===e.signalStat

us}}const f={iab:function(){return new u.U9(e=>e(S.get().refresh()))}};function P(e){if(null!=e?.applicableSections&&!Array.isArray(e.applicableSections)||null!=e?.gppString&&!(0,r.O8)(e.gppString)||null!=e?.parsedSections&&!(0,r.Qd)(e.parsedSections))throw new C("CMP returned unexpected value during lookup process.",e);return["usnatv1","uscav1"].forEach(n=>{e?.parsedSections?.[n]&&(0,i.JE)(`Received invalid 

section from cmp: '${n}'. Some functionality may not work as expected`,e)}),v(e)}function v(e={}){return{gppString:e?.gppString,applicableSections:e?.applicableSections||[],parsedSections:e?.parsedSections||{},gppData:e}}const y=(0,d.yq)({namespace:"gpp",displayName:"GPP",consentDataHandler:o.ad,parseConsentData:P,getNullConsent:()=>v(null),cmpHandlers:f,cmpEventCleanup:function(){m

&&(m.removeCmpEventListener(),m=null),h={},o.ad.reset(),S.INST=null}});p.$.getConfig("consentManagement",e=>function(e){return h=y(e),h.loadConsentData?.()?.catch?.(()=>null)}(e.consentManagement)),c.wU.before(function(e,n){return e(n.then(e=>{const n=o.ad.getConsentData();return n&&(Array.isArray(n.applicableSections)&&(0,a.J)(e,"regs.gpp_sid",n.applicableSections),(0,a.J)(e,"regs.gpp",n

.gppString)),e}))}),(0,s.E)("consentManagementGpp")}},e=>{e.O(0,[60802,75698,98213,37769,85590,51085,90010,57109],()=>{return n=69489,e(e.s=n);var n});e.O()}]);

(("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk=("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk||[]).push([[15081],{2397(e,t,n){var 

r=n(11129),o=n(17413),s=n(83435),a=n(33350),c=n(18384),p=n(41068),i=n(10080),d=n(78636),l=n(94077),u=n(44390),g=n(59099);let f,m,C={};const b={iab:function(e){return new Promise((t,n)=>{const r=(0,l.c5)({apiName:"__tcfapi",apiVersion:2,apiArgs:["command","version","callback","parameter"]});r||n(new Error("TCF2 CMP not found.")),r.isDirect?(0,o.fH)("Detected CMP API is directly accessible, calling it now..."):(0,o.fH)("Detected CMP is 

outside the current iframe where Prebid.js is located, calling it now..."),v||(v=(0,g.Al)("tcf",()=>p.mW.getConsentData())),v.setCmpApi(r),r({command:"addEventListener",callback:function(r,s){if((0,o.fH)("Received a response from CMP",r),s){try{e(S(r))}catch(e){}if(!1===r.gdprApplies||"tcloaded"===r.eventStatus||"useractioncomplete"===r.eventStatus)try{null!==r.listenerId&&void 

0!==r.listenerId&&v?.setCmpListenerId(r.listenerId),p.mW.setConsentData(S(r)),t()}catch(e){n(e)}}else n(Error("CMP unable to register callback function.  Please check CMP setup."))}})})}};let v=null;function S(e){if(function(){const t=e&&"boolean"==typeof e.gdprApplies?e.gdprApplies:f,n=e&&e.tcString;return!("boolean"==typeof t&&(!0!==t||n&&(0,a.O8)(n)))}())throw Object.assign(new Error("CMP returned unexpected value during 

lookup process."),{args:[e]});return D(e)}function D(e){const t={consentString:e?e.tcString:void 0,vendorData:e||void 0,gdprApplies:e&&"boolean"==typeof e.gdprApplies?e.gdprApplies:f,apiVersion:2};return e&&e.addtlConsent&&(0,a.O8)(e.addtlConsent)&&(t.addtlConsent=e.addtlConsent),t}const y=(0,u.yq)({namespace:"gdpr",displayName:"TCF",consentDataHandler:p.mW,cmpHandlers:b,parseConsentData:S,getNullConse

nt:()=>D(null),cmpEventCleanup:function(){v&&(v.removeCmpEventListener(),v=null),C={},p.mW.reset()}});c.$.getConfig("consentManagement",e=>function(e){const t=e&&(e.gdpr||e.usp||e.gpp?e.gdpr:e);return null!=t?.consentData?.getTCData&&(t.consentData=t.consentData.getTCData),f=!0===t?.defaultGdprScope,m=!!t?.dsaPlatform,C=y({gdpr:t}),C.loadConsentData?.()?.catch?.(()=>null)}(e.co

nsentManagement)),d.wU.before(function(e,t){return e(t.then(e=>{const t=p.mW.getConsentData();return t&&("boolean"==typeof t.gdprApplies&&(0,s.J)(e,"regs.ext.gdpr",t.gdprApplies?1:0),(0,s.J)(e,"user.ext.consent",t.consentString)),m&&(0,s.J)(e,"regs.ext.dsa.dsarequired",3),e}))}),(0,i.pS)({type:i.S3,name:"gdprAddtlConsent",fn:function(e,t){const n=t.gdprConsent?.addtlConsent;n&&"string"==typeof 

n&&(0,s.J)(e,"user.ext.ConsentedProvidersSettings.consented_providers",n)}}),(0,r.E)("consentManagementTcf")}},e=>{e.O(0,[60802,75698,98213,37769,85590,51085,90010,57109],()=>{return t=2397,e(e.s=t);var t});e.O()}]);

(("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk=("undefined"!=typeof 

document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk||[]).push([[99301],{64217(n,e,t){var c=t(11129),u=t(18384),p=t(2978);let r=null;u.$.getConfig("consentManagement",n=>{null!=n?.consentManagement?.gpp&&(null!=r&&r(),r=(0,p.l)("usnat",[7],(0,p.Q4)(n.consentManagement.gpp.mspa?.restrictActivities)))}),(0,c.E)("gppControl_usnat")}},n=>{n.O(0,[60802,75698,98213,37

769,85590,51085,40082],()=>{return e=64217,n(n.s=e);var e});n.O()}]);

(("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk=("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk||[]).push([[27534],{64314(n,t,e){var s=e(11129),r=e(18384),o=e(2978),i=e(17413),a=e(83435);const 

c={Version:0,Gpc:0,SharingNotice:0,SaleOptOutNotice:0,SharingOptOutNotice:0,TargetedAdvertisingOptOutNotice:0,SensitiveDataProcessingOptOutNotice:0,SensitiveDataLimitUseNotice:0,SaleOptOut:0,SharingOptOut:0,TargetedAdvertisingOptOut:0,SensitiveDataProcessing:12,KnownChildSensitiveDataConsents:2,PersonalDataConsents:0,MspaCoveredTransaction:0,MspaOptOutOptionMode:0,MspaServiceProviderMode:0};function 

u({nullify:n=[],move:t={},fn:e},s=c){return t=Object.fromEntries(Object.entries(t).map(([n,t])=>[n,Object.fromEntries(Object.entries(t).map(([n,t])=>[n,Array.isArray(t)?t:[t]]).map(([n,t])=>[n-1,t.map(n=>n-1)]))])),function(r){const o=Object.fromEntries(Object.entries(s).map(([n,e])=>{let s=null;if(e>0){if(s=Array(e).fill(null),Array.isArray(r[n])){const 

o=t[n]||{},i=[];r[n].forEach((n,t)=>{const[r,a]=o.hasOwnProperty(t)?[o[t],!0]:[[t],!1];r.forEach(t=>{t<e&&!i.includes(t)&&(s[t]=n,a&&i.push(t))})})}}else null!=r[n]&&(s=Array.isArray(r[n])?null:r[n]);return[n,s]}));return n.forEach(n=>(0,a.J)(o,n,null)),e&&e(r,o),o}}function p(n,t){t.KnownChildSensitiveDataConsents=0===n.KnownChildSensitiveDataConsents?[0,0]:[1,1]}const 

l={7:n=>n,8:u({move:{SensitiveDataProcessing:{1:9,2:10,3:8,4:[1,2],5:12,8:3,9:4}},fn(n,t){n.KnownChildSensitiveDataConsents.some(n=>0!==n)&&(t.KnownChildSensitiveDataConsents=[1,1])}}),9:u({fn:p}),10:u({fn:p}),11:u({move:{SensitiveDataProcessing:{3:4,4:5,5:3}},fn:p}),12:u({fn(n,t){const e=n.KnownChildSensitiveDataConsents;let 

s;s=e.some(n=>0!==n)?2===e[1]&&2===e[2]?[2,1]:[1,1]:[0,0],t.KnownChildSensitiveDataConsents=s}})},f={8:"usca",9:"usva",10:"usco",11:"usut",12:"usct"},m=(()=>{const n=Object.keys(f).map(Number);return function({sections:t={},sids:e=n}={}){return e.map(n=>{const e=(0,i.h0)(`Cannot set up MSPA controls for SID 

${n}:`),s=t[n]||{},r=s.normalizeAs||n;if(!l.hasOwnProperty(r))return e.logError(`no normalization rules are known for SID ${r}`),null;const o=s.name||f[n];return"string"!=typeof o?(e.logError("cannot determine GPP section name"),null):[o,[n],l[r]]}).filter(n=>null!=n)}})(),d=[];r.$.getConfig("consentManagement",n=>{const 

t=n.consentManagement?.gpp;if(t){for(;d.length;)d.pop()();m(t?.mspa||{}).forEach(([n,e,s])=>d.push((0,o.l)(n,e,(0,o.Q4)(t.mspa?.restrictActivities),s)))}}),(0,s.E)("gppControl_usstates")}},n=>{n.O(0,[60802,75698,98213,37769,85590,51085,40082],()=>{return t=64314,n(n.s=t);var t});n.O()}]);

(("undefined"!=typeof 

document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk=("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk||[]).push([[4584],{35120(e,t,o){var n=o(11129),r=o(60828),i=o(29015),c=o(18384),u=o(25521),a=o(1785),d=o(17413),s=o(58928),f=o(83435);let p={},g=!1;function l(e){return(0,r.eu)(e)}const 

m=e=>(c.$.getConfig("gptPreAuction")||{}).mcmEnabled?e.replace(/(^\/\d*),\d*\//,"$1/"):e,b=(e,t,...o)=>{const n=(e=>{if(!(0,d.II)())return;const t=e.reduce((e,t)=>(e[t.code]=e[t.code]||[],e[t.code].push(t),e),{}),o={};return window.googletag.pubads().getSlots().forEach(e=>{const n=Object.keys(t).find((0,d.iC)(e));if(n){const r=o[n]=e.getAdUnitPath(),i={name:"gam",adslot:m(r)};t[n].forEach(e=>{(0,f.J)(e,"ortb2I

mp.ext.data.adserver",Object.assign({},e.ortb2Imp?.ext?.data?.adserver,i))})}}),o})(t),{useDefaultPreAuction:r,customPreAuction:i}=p;return t.forEach(e=>{e.ortb2Imp=e.ortb2Imp||{},e.ortb2Imp.ext=e.ortb2Imp.ext||{},e.ortb2Imp.ext.data=e.ortb2Imp.ext.data||{};const t=e.ortb2Imp.ext,o=(0,s.A)(t,"data.adserver.adslot");if(t.gpid)return;let c;i?c=i(e,o,n?.[e.code]):r?c=((e,t,o)=>{if((0,d.II)()){var 

n=window.googletag.pubads().getSlots().filter(e=>e.getAdUnitPath()===o);if(0!==n.length)return 1===n.length?t:`${t}#${e.code}`}})(e,o,n?.[e.code]):(0,d.JE)("Neither customPreAuction, defaultPreAuction and gpid were specified"),c&&(t.gpid=c)}),e.call(void 0,t,...o)},h=(e,t)=>{const o=function(e){const t={};return r.Cn.forEach(o=>{const n=e.flatMap(e=>e).filter(e=>e.taxonomy===o).map(e=>e.values);t[o]=n.length?n.reduce((

e,t)=>e.filter(e=>t.includes(e))):[],t[o]={values:t[o]}}),t}(function(e,t=i.n.index){return e.map(e=>t.getAuction({auctionId:e})?.getFPD()?.global).map(l).filter(e=>e)}(function(e,t=i.n){return Object.values(e).flatMap(e=>Object.entries(e)).filter(e=>e[0]===u.xS.AD_ID||e[0].startsWith(u.xS.AD_ID+"_")).flatMap(e=>e[1]).map(e=>t.findBidByAdId(e)?.auctionId).filter(e=>null!=e).filter(d.hj)}(t)));window.googletag.setConfig&&window.googletag.setCo

nfig({pps:{taxonomies:o}}),e(t)},A=e=>{p=(0,d.Up)(e,["enabled",e=>!1!==e,"customPreAuction",e=>"function"==typeof e&&e,"useDefaultPreAuction",e=>e??!0]),p.enabled?g||((0,a.Yn)("makeBidRequests").before(b),(0,a.Yn)("targetingDone").after(h),g=!0):((0,d.fH)("GPT Pre-Auction: Turning off 

module"),p={},(0,a.Yn)("makeBidRequests").getHooks({hook:b}).remove(),(0,a.Yn)("targetingDone").getHooks({hook:h}).remove(),g=!1)};c.$.getConfig("gptPreAuction",e=>A(e.gptPreAuction)),A({}),(0,n.E)("gptPreAuction")}},e=>{e.O(0,[60802,75698,98213,37769,85590,51085,33005],()=>{return t=35120,e(e.s=t);var t});e.O()}]);

(("undefined"!=typeof 

document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk=("undefined"!=typeof document&&document.currentScript&&document.currentScript.__pbjsScope||self).pbjsChunk||[]).push([[7201],{11609(e,o,s){var t=s(111
