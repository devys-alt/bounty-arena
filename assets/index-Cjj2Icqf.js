var Cp=Object.defineProperty;var Pp=(i,e,t)=>e in i?Cp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Nt=(i,e,t)=>Pp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="170",Lp=0,iu=1,Ip=2,gf=1,_f=2,Vn=3,Jn=0,Rt=1,Dt=2,Kn=0,ys=1,wr=2,su=3,ru=4,Dp=5,Ui=100,Np=101,Up=102,Op=103,Fp=104,Bp=200,kp=201,zp=202,Hp=203,_c=204,vc=205,Vp=206,Gp=207,Wp=208,Xp=209,qp=210,Yp=211,jp=212,Kp=213,$p=214,xc=0,yc=1,Mc=2,bs=3,Sc=4,wc=5,Tc=6,Ec=7,vf=0,Zp=1,Jp=2,vi=0,xf=1,yf=2,Mf=3,_l=4,Qp=5,Sf=6,wf=7,ou="attached",em="detached",Tf=300,Rs=301,Cs=302,Ac=303,bc=304,Zo=306,Rn=1e3,qn=1001,Tr=1002,kt=1003,Ef=1004,ur=1005,Kt=1006,Do=1007,Yn=1008,Qn=1009,Af=1010,bf=1011,Er=1012,vl=1013,Hi=1014,_n=1015,bn=1016,xl=1017,yl=1018,Ps=1020,Rf=35902,Cf=1021,Pf=1022,nn=1023,Lf=1024,If=1025,Ms=1026,Ls=1027,Ml=1028,Sl=1029,Df=1030,wl=1031,Tl=1033,No=33776,Uo=33777,Oo=33778,Fo=33779,Rc=35840,Cc=35841,Pc=35842,Lc=35843,Ic=36196,Dc=37492,Nc=37496,Uc=37808,Oc=37809,Fc=37810,Bc=37811,kc=37812,zc=37813,Hc=37814,Vc=37815,Gc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,jc=37821,Bo=36492,Kc=36494,$c=36495,Nf=36283,Zc=36284,Jc=36285,Qc=36286,Uf=2200,tm=2201,nm=2202,Ar=2300,br=2301,fa=2302,_s=2400,vs=2401,Vo=2402,El=2500,im=2501,sm=0,Of=1,el=2,rm=3200,om=3201,Ff=0,am=1,mi="",yt="srgb",Ht="srgb-linear",Jo="linear",st="srgb",ji=7680,au=519,cm=512,lm=513,um=514,Bf=515,hm=516,fm=517,dm=518,pm=519,tl=35044,cu="300 es",jn=2e3,Go=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lu=1234567;const Ss=Math.PI/180,Is=180/Math.PI;function vn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Al(i,e){return(i%e+e)%e}function mm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function gm(i,e,t){return i!==e?(t-i)/(e-i):0}function mr(i,e,t){return(1-t)*i+t*e}function _m(i,e,t,n){return mr(i,e,1-Math.exp(-t*n))}function vm(i,e=1){return e-Math.abs(Al(i,e*2)-e)}function xm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ym(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Mm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sm(i,e){return i+Math.random()*(e-i)}function wm(i){return i*(.5-Math.random())}function Tm(i){i!==void 0&&(lu=i);let e=lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Em(i){return i*Ss}function Am(i){return i*Is}function bm(i){return(i&i-1)===0&&i!==0}function Rm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*p,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*p,a*l);break;case"ZYZ":i.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bi={DEG2RAD:Ss,RAD2DEG:Is,generateUUID:vn,clamp:Mt,euclideanModulo:Al,mapLinear:mm,inverseLerp:gm,lerp:mr,damp:_m,pingpong:vm,smoothstep:xm,smootherstep:ym,randInt:Mm,randFloat:Sm,randFloatSpread:wm,seededRandom:Tm,degToRad:Em,radToDeg:Am,isPowerOfTwo:bm,ceilPowerOfTwo:Rm,floorPowerOfTwo:Cm,setQuaternionFromProperEuler:Pm,normalize:rt,denormalize:gn};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,s,r,o,a,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=s[0],m=s[3],g=s[6],x=s[1],S=s[4],v=s[7],T=s[2],M=s[5],R=s[8];return r[0]=o*_+a*x+c*T,r[3]=o*m+a*S+c*M,r[6]=o*g+a*v+c*R,r[1]=l*_+h*x+u*T,r[4]=l*m+h*S+u*M,r[7]=l*g+h*v+u*R,r[2]=f*_+d*x+p*T,r[5]=f*m+d*S+p*M,r[8]=f*g+d*v+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new ze;function kf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lm(){const i=Rr("canvas");return i.style.display="block",i}const uu={};function hr(i){i in uu||(uu[i]=!0,console.warn(i))}function Im(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Dm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:Ht,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?Jo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hu=[.64,.33,.3,.6,.15,.06],fu=[.2126,.7152,.0722],du=[.3127,.329],pu=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Ht]:{primaries:hu,whitePoint:du,transfer:Jo,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:fu,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:hu,whitePoint:du,transfer:st,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:fu,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});let Ki;class Um{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=Rr("canvas")),Ki.width=e.width,Ki.height=e.height;const n=Ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Om=0;class zf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pa(s[o].image)):r.push(pa(s[o]))}else r=pa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Um.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fm=0;class St extends Wi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=qn,s=qn,r=Kt,o=Yn,a=nn,c=Qn,l=St.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=vn(),this.name="",this.source=new zf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Tf;St.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,s=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,v=(d+1)/2,T=(g+1)/2,M=(h+f)/4,R=(u+_)/4,b=(p+m)/4;return S>v&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=M/n,r=R/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=b/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bm extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new St(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends Bm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hf extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class km extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==p){let m=1-a;const g=c*f+l*d+h*p+u*_,x=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const T=Math.sqrt(S),M=Math.atan2(T,g*x);m=Math.sin(m*M)/T,a=Math.sin(a*M)/T}const v=a*x;if(c=c*m+f*v,l=l*m+d*v,h=h*m+p*v,u=u*m+_*v,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new I,gu=new $t;class cn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),jr.subVectors(this.max,js),$i.subVectors(e.a,js),Zi.subVectors(e.b,js),Ji.subVectors(e.c,js),si.subVectors(Zi,$i),ri.subVectors(Ji,Zi),Ei.subVectors($i,Ji);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ei.z,Ei.y,si.z,0,-si.x,ri.z,0,-ri.x,Ei.z,0,-Ei.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ei.y,Ei.x,0];return!ga(t,$i,Zi,Ji,jr)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,$i,Zi,Ji,jr))?!1:(Kr.crossVectors(si,ri),t=[Kr.x,Kr.y,Kr.z],ga(t,$i,Zi,Ji,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new I,new I,new I,new I,new I,new I,new I,new I],hn=new I,Yr=new cn,$i=new I,Zi=new I,Ji=new I,si=new I,ri=new I,Ei=new I,js=new I,jr=new I,Kr=new I,Ai=new I;function ga(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ai.fromArray(i,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const zm=new cn,Ks=new I,_a=new I;class Pn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(_a)),this.expandByPoint(Ks.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new I,va=new I,$r=new I,oi=new I,xa=new I,Zr=new I,ya=new I;class Qo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){va.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(va);const r=e.distanceTo(t)*.5,o=-this.direction.dot($r),a=oi.dot(this.direction),c=-oi.dot($r),l=oi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(va).addScaledVector($r,f),d}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,s,r){xa.subVectors(t,e),Zr.subVectors(n,e),ya.crossVectors(xa,Zr);let o=this.direction.dot(ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const c=a*this.direction.dot(Zr.crossVectors(oi,Zr));if(c<0)return null;const l=a*this.direction.dot(xa.cross(oi));if(l<0||c+l>o)return null;const h=-a*oi.dot(ya);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,p,_,m){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,p,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,p=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,p=l*h,_=l*u;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,p=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,p=a*h,_=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Vm)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),ai.crossVectors(n,Xt),ai.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),ai.crossVectors(n,Xt)),ai.normalize(),Jr.crossVectors(Xt,ai),s[0]=ai.x,s[4]=Jr.x,s[8]=Xt.x,s[1]=ai.y,s[5]=Jr.y,s[9]=Xt.y,s[2]=ai.z,s[6]=Jr.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],S=n[7],v=n[11],T=n[15],M=s[0],R=s[4],b=s[8],E=s[12],y=s[1],N=s[5],W=s[9],G=s[13],C=s[2],U=s[6],F=s[10],L=s[14],O=s[3],B=s[7],q=s[11],D=s[15];return r[0]=o*M+a*y+c*C+l*O,r[4]=o*R+a*N+c*U+l*B,r[8]=o*b+a*W+c*F+l*q,r[12]=o*E+a*G+c*L+l*D,r[1]=h*M+u*y+f*C+d*O,r[5]=h*R+u*N+f*U+d*B,r[9]=h*b+u*W+f*F+d*q,r[13]=h*E+u*G+f*L+d*D,r[2]=p*M+_*y+m*C+g*O,r[6]=p*R+_*N+m*U+g*B,r[10]=p*b+_*W+m*F+g*q,r[14]=p*E+_*G+m*L+g*D,r[3]=x*M+S*y+v*C+T*O,r[7]=x*R+S*N+v*U+T*B,r[11]=x*b+S*W+v*F+T*q,r[15]=x*E+S*G+v*L+T*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+g*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=u*m*l-_*f*l+_*c*d-a*m*d-u*c*g+a*f*g,S=p*f*l-h*m*l-p*c*d+o*m*d+h*c*g-o*f*g,v=h*_*l-p*u*l+p*a*d-o*_*d-h*a*g+o*u*g,T=p*u*c-h*_*c-p*a*f+o*_*f+h*a*m-o*u*m,M=t*x+n*S+s*v+r*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=x*R,e[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*g-n*f*g)*R,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*g+n*c*g)*R,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*R,e[4]=S*R,e[5]=(h*m*r-p*f*r+p*s*d-t*m*d-h*s*g+t*f*g)*R,e[6]=(p*c*r-o*m*r-p*s*l+t*m*l+o*s*g-t*c*g)*R,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*R,e[8]=v*R,e[9]=(p*u*r-h*_*r-p*n*d+t*_*d+h*n*g-t*u*g)*R,e[10]=(o*_*r-p*a*r+p*n*l-t*_*l-o*n*g+t*a*g)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*R,e[12]=T*R,e[13]=(h*_*s-p*u*s+p*n*f-t*_*f-h*n*m+t*u*m)*R,e[14]=(p*a*s-o*_*s-p*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,_=o*h,m=o*u,g=a*u,x=c*l,S=c*h,v=c*u,T=n.x,M=n.y,R=n.z;return s[0]=(1-(_+g))*T,s[1]=(d+v)*T,s[2]=(p-S)*T,s[3]=0,s[4]=(d-v)*M,s[5]=(1-(f+g))*M,s[6]=(m+x)*M,s[7]=0,s[8]=(p+S)*R,s[9]=(m-x)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);const l=1/r,h=1/o,u=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=jn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let d,p;if(a===jn)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Go)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=jn){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,d=(n+s)*h;let p,_;if(a===jn)p=(o+r)*u,_=-2*u;else if(a===Go)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new I,fn=new Oe,Hm=new I(0,0,0),Vm=new I(1,1,1),ai=new I,Jr=new I,Xt=new I,_u=new Oe,vu=new $t;class Cn{constructor(e=0,t=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _u.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_u,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vu.setFromEuler(this),this.setFromQuaternion(vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gm=0;const xu=new I,es=new $t,Bn=new Oe,Qr=new I,$s=new I,Wm=new I,Xm=new $t,yu=new I(1,0,0),Mu=new I(0,1,0),Su=new I(0,0,1),wu={type:"added"},qm={type:"removed"},ts={type:"childadded",child:null},Ma={type:"childremoved",child:null};class ft extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new Cn,n=new $t,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new ze}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(yu,e)}rotateY(e){return this.rotateOnAxis(Mu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return xu.copy(e).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yu,e)}translateY(e){return this.translateOnAxis(Mu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt($s,Qr,this.up):Bn.lookAt(Qr,$s,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Bn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wu),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qm),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wu),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new I,kn=new I,Sa=new I,zn=new I,ns=new I,is=new I,Tu=new I,wa=new I,Ta=new I,Ea=new I,Aa=new $e,ba=new $e,Ra=new $e;class jt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),kn.subVectors(n,t),Sa.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(kn),c=dn.dot(Sa),l=kn.dot(kn),h=kn.dot(Sa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Aa.setScalar(0),ba.setScalar(0),Ra.setScalar(0),Aa.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,n),Ra.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(Ra,r.z),o}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),kn.subVectors(e,t),dn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),dn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,n),is.subVectors(r,n),wa.subVectors(e,n);const c=ns.dot(wa),l=is.dot(wa);if(c<=0&&l<=0)return t.copy(n);Ta.subVectors(e,s);const h=ns.dot(Ta),u=is.dot(Ta);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ns,o);Ea.subVectors(e,r);const d=ns.dot(Ea),p=is.dot(Ea);if(p>=0&&d<=p)return t.copy(r);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(is,a);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Tu.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(Tu,a);const g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=Al(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ca(o,r,e+1/3),this.g=Ca(o,r,e),this.b=Ca(o,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return qe.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Mt(Lt.r*255,0,255))*65536+Math.round(Mt(Lt.g*255,0,255))*256+Math.round(Mt(Lt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=yt){qe.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(eo);const n=mr(ci.h,eo.h,t),s=mr(ci.s,eo.s,t),r=mr(ci.l,eo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ee;Ee.NAMES=Gf;let Ym=0;class xn extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=vn(),this.name="",this.blending=ys,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==vc&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _t extends xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,to=new ue;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),e}}class Wf extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xf extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jm=0;const Qt=new Oe,Pa=new ft,ss=new I,qt=new cn,Zs=new cn,Et=new I;class xt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?Xf:Wf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(qt.min,Zs.min),qt.expandByPoint(Et),Et.addVectors(qt.max,Zs.max),qt.expandByPoint(Et)):(qt.expandByPoint(Zs.min),qt.expandByPoint(Zs.max))}qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Et.fromBufferAttribute(a,l),c&&(ss.fromBufferAttribute(e,l),Et.add(ss)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new I,c[b]=new I;const l=new I,h=new I,u=new I,f=new ue,d=new ue,p=new ue,_=new I,m=new I;function g(b,E,y){l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),p.sub(f);const N=1/(d.x*p.y-p.x*d.y);isFinite(N)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(N),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(N),a[b].add(_),a[E].add(_),a[y].add(_),c[b].add(m),c[E].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,E=x.length;b<E;++b){const y=x[b],N=y.start,W=y.count;for(let G=N,C=N+W;G<C;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new I,v=new I,T=new I,M=new I;function R(b){T.fromBufferAttribute(s,b),M.copy(T);const E=a[b];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(M,E);const N=v.dot(c[b])<0?-1:1;o.setXYZW(b,S.x,S.y,S.z,N)}for(let b=0,E=x.length;b<E;++b){const y=x[b],N=y.start,W=y.count;for(let G=N,C=N+W;G<C;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,p=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let g=0;g<h;g++)f[p++]=l[d++]}return new zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new Oe,bi=new Qo,no=new Pn,Au=new I,io=new I,so=new I,ro=new I,La=new I,oo=new I,bu=new I,ao=new I;class Ie extends ft{constructor(e=new xt,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(La.fromBufferAttribute(u,e),o?oo.addScaledVector(La,h):oo.addScaledVector(La.sub(t),h))}t.add(oo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(no.containsPoint(bi.origin)===!1&&(bi.intersectSphere(no,Au)===null||bi.origin.distanceToSquared(Au)>(e.far-e.near)**2))&&(Eu.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Eu),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,T=S;v<T;v+=3){const M=a.getX(v),R=a.getX(v+1),b=a.getX(v+2);s=co(this,g,e,n,l,h,u,M,R,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=co(this,o,e,n,l,h,u,x,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,T=S;v<T;v+=3){const M=v,R=v+1,b=v+2;s=co(this,g,e,n,l,h,u,M,R,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=m,S=m+1,v=m+2;s=co(this,o,e,n,l,h,u,x,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Km(i,e,t,n,s,r,o,a){let c;if(e.side===Rt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Jn,a),c===null)return null;ao.copy(a),ao.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ao);return l<t.near||l>t.far?null:{distance:l,point:ao.clone(),object:i}}function co(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,io),i.getVertexPosition(c,so),i.getVertexPosition(l,ro);const h=Km(i,e,t,n,io,so,ro,bu);if(h){const u=new I;jt.getBarycoord(bu,io,so,ro,u),s&&(h.uv=jt.getInterpolatedAttribute(s,a,c,l,u,new ue)),r&&(h.uv1=jt.getInterpolatedAttribute(r,a,c,l,u,new ue)),o&&(h.normal=jt.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};jt.getNormal(io,so,ro,f.normal),h.face=f,h.barycoord=u}return h}class Gt extends xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function p(_,m,g,x,S,v,T,M,R,b,E){const y=v/R,N=T/b,W=v/2,G=T/2,C=M/2,U=R+1,F=b+1;let L=0,O=0;const B=new I;for(let q=0;q<F;q++){const D=q*N-G;for(let X=0;X<U;X++){const re=X*y-W;B[_]=re*x,B[m]=D*S,B[g]=C,l.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[g]=M>0?1:-1,h.push(B.x,B.y,B.z),u.push(X/R),u.push(1-q/b),L+=1}}for(let q=0;q<b;q++)for(let D=0;D<R;D++){const X=f+D+U*q,re=f+D+U*(q+1),Y=f+(D+1)+U*(q+1),Z=f+(D+1)+U*q;c.push(X,re,Z),c.push(re,Y,Z),O+=6}a.addGroup(d,O,E),d+=O,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=Ds(i[t]);for(const s in n)e[s]=n[s]}return e}function $m(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Cr={clone:Ds,merge:Ot};var Zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zm,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=$m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yf extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new I,Ru=new ue,Cu=new ue;class Ft extends Yf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Cu),t.subVectors(Cu,Ru)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class Qm extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ft(rs,os,e,t);s.layers=this.layers,this.add(s);const r=new Ft(rs,os,e,t);r.layers=this.layers,this.add(r);const o=new Ft(rs,os,e,t);o.layers=this.layers,this.add(o);const a=new Ft(rs,os,e,t);a.layers=this.layers,this.add(a);const c=new Ft(rs,os,e,t);c.layers=this.layers,this.add(c);const l=new Ft(rs,os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class jf extends St{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eg extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Kn});r.uniforms.tEquirect.value=t;const o=new Ie(s,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Kt),new Qm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ia=new I,tg=new I,ng=new ze;class Di{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ia.subVectors(n,t).cross(tg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ng.getNormalMatrix(e),s=this.coplanarPoint(Ia).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Pn,lo=new I;class bl{constructor(e=new Di,t=new Di,n=new Di,s=new Di,r=new Di,o=new Di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],p=s[9],_=s[10],m=s[11],g=s[12],x=s[13],S=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-d,v-g).normalize(),n[1].setComponents(c+r,f+l,m+d,v+g).normalize(),n[2].setComponents(c+o,f+h,m+p,v+x).normalize(),n[3].setComponents(c-o,f-h,m-p,v-x).normalize(),n[4].setComponents(c-a,f-u,m-_,v-S).normalize(),t===jn)n[5].setComponents(c+a,f+u,m+_,v+S).normalize();else if(t===Go)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(lo.x=s.normal.x>0?e.max.x:e.min.x,lo.y=s.normal.y>0?e.max.y:e.min.y,lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ig(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ei extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const x=g*f-o;for(let S=0;S<l;S++){const v=S*u-r;p.push(v,-x,0),_.push(0,0,1),m.push(S/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){const S=x+l*g,v=x+l*(g+1),T=x+1+l*(g+1),M=x+1+l*g;d.push(S,v,M),d.push(v,T,M)}this.setIndex(d),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
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
#endif`,og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ug=`#ifdef USE_AOMAP
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
#endif`,hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fg=`#ifdef USE_BATCHING
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
#endif`,dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_g=`#ifdef USE_IRIDESCENCE
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
#endif`,vg=`#ifdef USE_BUMPMAP
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bg=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cg=`vec3 transformedNormal = objectNormal;
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
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
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
}`,qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
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
#endif`,$g=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t0=`PhysicalMaterial material;
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
#endif`,n0=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,i0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
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
}`,u_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h_=`#define DISTANCE
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
}`,f_=`#define DISTANCE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`uniform float scale;
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,v_=`uniform vec3 diffuse;
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
}`,x_=`#define LAMBERT
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
}`,y_=`#define LAMBERT
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
}`,M_=`#define MATCAP
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
}`,S_=`#define MATCAP
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
}`,w_=`#define NORMAL
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
}`,T_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,A_=`#define PHONG
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
}`,b_=`#define STANDARD
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
}`,R_=`#define STANDARD
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
}`,C_=`#define TOON
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
}`,P_=`#define TOON
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
}`,L_=`uniform float size;
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
}`,I_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,N_=`uniform vec3 color;
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
}`,U_=`uniform float rotation;
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
}`,O_=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:sg,alphahash_pars_fragment:rg,alphamap_fragment:og,alphamap_pars_fragment:ag,alphatest_fragment:cg,alphatest_pars_fragment:lg,aomap_fragment:ug,aomap_pars_fragment:hg,batching_pars_vertex:fg,batching_vertex:dg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:gg,iridescence_fragment:_g,bumpmap_pars_fragment:vg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:yg,clipping_planes_pars_vertex:Mg,clipping_planes_vertex:Sg,color_fragment:wg,color_pars_fragment:Tg,color_pars_vertex:Eg,color_vertex:Ag,common:bg,cube_uv_reflection_fragment:Rg,defaultnormal_vertex:Cg,displacementmap_pars_vertex:Pg,displacementmap_vertex:Lg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Dg,colorspace_fragment:Ng,colorspace_pars_fragment:Ug,envmap_fragment:Og,envmap_common_pars_fragment:Fg,envmap_pars_fragment:Bg,envmap_pars_vertex:kg,envmap_physical_pars_fragment:$g,envmap_vertex:zg,fog_vertex:Hg,fog_pars_vertex:Vg,fog_fragment:Gg,fog_pars_fragment:Wg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:qg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:jg,lights_pars_begin:Kg,lights_toon_fragment:Zg,lights_toon_pars_fragment:Jg,lights_phong_fragment:Qg,lights_phong_pars_fragment:e0,lights_physical_fragment:t0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:s0,lights_fragment_end:r0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:c0,logdepthbuf_vertex:l0,map_fragment:u0,map_pars_fragment:h0,map_particle_fragment:f0,map_particle_pars_fragment:d0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:x0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:w0,normal_pars_vertex:T0,normal_vertex:E0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:P0,opaque_fragment:L0,packing:I0,premultiplied_alpha_fragment:D0,project_vertex:N0,dithering_fragment:U0,dithering_pars_fragment:O0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:z0,shadowmap_vertex:H0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:j0,tonemapping_fragment:K0,tonemapping_pars_fragment:$0,transmission_fragment:Z0,transmission_pars_fragment:J0,uv_pars_fragment:Q0,uv_pars_vertex:e_,uv_vertex:t_,worldpos_vertex:n_,background_vert:i_,background_frag:s_,backgroundCube_vert:r_,backgroundCube_frag:o_,cube_vert:a_,cube_frag:c_,depth_vert:l_,depth_frag:u_,distanceRGBA_vert:h_,distanceRGBA_frag:f_,equirect_vert:d_,equirect_frag:p_,linedashed_vert:m_,linedashed_frag:g_,meshbasic_vert:__,meshbasic_frag:v_,meshlambert_vert:x_,meshlambert_frag:y_,meshmatcap_vert:M_,meshmatcap_frag:S_,meshnormal_vert:w_,meshnormal_frag:T_,meshphong_vert:E_,meshphong_frag:A_,meshphysical_vert:b_,meshphysical_frag:R_,meshtoon_vert:C_,meshtoon_frag:P_,points_vert:L_,points_frag:I_,shadow_vert:D_,shadow_frag:N_,sprite_vert:U_,sprite_frag:O_},de={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},An={basic:{uniforms:Ot([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ot([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ee(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ot([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ot([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ot([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ee(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ot([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ot([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ot([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ot([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ot([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ot([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ot([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ot([de.lights,de.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};An.physical={uniforms:Ot([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const uo={r:0,b:0,g:0},Ci=new Cn,F_=new Oe;function B_(i,e,t,n,s,r,o){const a=new Ee(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function p(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function _(x){let S=!1;const v=p(x);v===null?g(a,c):v&&v.isColor&&(g(v,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,S){const v=p(S);v&&(v.isCubeTexture||v.mapping===Zo)?(h===void 0&&(h=new Ie(new Gt(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Ds(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(S.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Ci)),h.material.toneMapped=qe.getTransfer(v.colorSpace)!==st,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ie(new ei(2,2),new At({name:"BackgroundMaterial",uniforms:Ds(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=qe.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,S){x.getRGB(uo,qf(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),c=S,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,g(a,c)},render:_,addToRenderList:m}}function k_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,N,W,G,C){let U=!1;const F=u(G,W,N);r!==F&&(r=F,l(r.object)),U=d(y,G,W,C),U&&p(y,G,W,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(y,N,W,G),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,N,W){const G=W.wireframe===!0;let C=n[y.id];C===void 0&&(C={},n[y.id]=C);let U=C[N.id];U===void 0&&(U={},C[N.id]=U);let F=U[G];return F===void 0&&(F=f(c()),U[G]=F),F}function f(y){const N=[],W=[],G=[];for(let C=0;C<t;C++)N[C]=0,W[C]=0,G[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:G,object:y,attributes:{},index:null}}function d(y,N,W,G){const C=r.attributes,U=N.attributes;let F=0;const L=W.getAttributes();for(const O in L)if(L[O].location>=0){const q=C[O];let D=U[O];if(D===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(D=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(D=y.instanceColor)),q===void 0||q.attribute!==D||D&&q.data!==D.data)return!0;F++}return r.attributesNum!==F||r.index!==G}function p(y,N,W,G){const C={},U=N.attributes;let F=0;const L=W.getAttributes();for(const O in L)if(L[O].location>=0){let q=U[O];q===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(q=y.instanceColor));const D={};D.attribute=q,q&&q.data&&(D.data=q.data),C[O]=D,F++}r.attributes=C,r.attributesNum=F,r.index=G}function _(){const y=r.newAttributes;for(let N=0,W=y.length;N<W;N++)y[N]=0}function m(y){g(y,0)}function g(y,N){const W=r.newAttributes,G=r.enabledAttributes,C=r.attributeDivisors;W[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),C[y]!==N&&(i.vertexAttribDivisor(y,N),C[y]=N)}function x(){const y=r.newAttributes,N=r.enabledAttributes;for(let W=0,G=N.length;W<G;W++)N[W]!==y[W]&&(i.disableVertexAttribArray(W),N[W]=0)}function S(y,N,W,G,C,U,F){F===!0?i.vertexAttribIPointer(y,N,W,C,U):i.vertexAttribPointer(y,N,W,G,C,U)}function v(y,N,W,G){_();const C=G.attributes,U=W.getAttributes(),F=N.defaultAttributeValues;for(const L in U){const O=U[L];if(O.location>=0){let B=C[L];if(B===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(B=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(B=y.instanceColor)),B!==void 0){const q=B.normalized,D=B.itemSize,X=e.get(B);if(X===void 0)continue;const re=X.buffer,Y=X.type,Z=X.bytesPerElement,le=Y===i.INT||Y===i.UNSIGNED_INT||B.gpuType===vl;if(B.isInterleavedBufferAttribute){const ae=B.data,Re=ae.stride,Ne=B.offset;if(ae.isInstancedInterleavedBuffer){for(let De=0;De<O.locationSize;De++)g(O.location+De,ae.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<O.locationSize;De++)m(O.location+De);i.bindBuffer(i.ARRAY_BUFFER,re);for(let De=0;De<O.locationSize;De++)S(O.location+De,D/O.locationSize,Y,q,Re*Z,(Ne+D/O.locationSize*De)*Z,le)}else{if(B.isInstancedBufferAttribute){for(let ae=0;ae<O.locationSize;ae++)g(O.location+ae,B.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ae=0;ae<O.locationSize;ae++)m(O.location+ae);i.bindBuffer(i.ARRAY_BUFFER,re);for(let ae=0;ae<O.locationSize;ae++)S(O.location+ae,D/O.locationSize,Y,q,D*Z,D/O.locationSize*ae*Z,le)}}else if(F!==void 0){const q=F[L];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(O.location,q);break;case 3:i.vertexAttrib3fv(O.location,q);break;case 4:i.vertexAttrib4fv(O.location,q);break;default:i.vertexAttrib1fv(O.location,q)}}}}x()}function T(){b();for(const y in n){const N=n[y];for(const W in N){const G=N[W];for(const C in G)h(G[C].object),delete G[C];delete N[W]}delete n[y]}}function M(y){if(n[y.id]===void 0)return;const N=n[y.id];for(const W in N){const G=N[W];for(const C in G)h(G[C].object),delete G[C];delete N[W]}delete n[y.id]}function R(y){for(const N in n){const W=n[N];if(W[y.id]===void 0)continue;const G=W[y.id];for(const C in G)h(G[C].object),delete G[C];delete W[y.id]}}function b(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function z_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)o(l[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*f[_];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function H_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const b=R===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Qn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_n&&!b)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:T,maxSamples:M}}function V_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Di,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,S=x*4;let v=g.clippingState||null;c.value=v,v=h(p,f,S,d);for(let T=0;T!==S;++T)v[T]=t[T];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,p!==!0||m===null){const g=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=d;S!==_;++S,v+=4)o.copy(u[S]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function G_(i){let e=new WeakMap;function t(o,a){return a===Ac?o.mapping=Rs:a===bc&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ac||a===bc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new eg(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ea extends Yf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,Pu=[.125,.215,.35,.446,.526,.582],Oi=20,Da=new ea,Lu=new Ee;let Na=null,Ua=0,Oa=0,Fa=!1;const Ni=(1+Math.sqrt(5))/2,as=1/Ni,Iu=[new I(-Ni,as,0),new I(Ni,as,0),new I(-as,0,Ni),new I(as,0,Ni),new I(0,Ni,-as),new I(0,Ni,as),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Ua,Oa),this._renderer.xr.enabled=Fa,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:bn,format:nn,colorSpace:Ht,depthBuffer:!1},s=Du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W_(r)),this._blurMaterial=X_(r,e,t)}return s}_compileMaterial(e){const t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,n,s){const a=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Lu),h.toneMapping=vi,h.autoClear=!1;const d=new _t({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),p=new Ie(new Gt,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Lu),_=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):x===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const S=this._cubeSize;ho(s,x*S,g>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ho(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Iu[(s-r-1)%Iu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ie(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const g=[];let x=0;for(let R=0;R<Oi;++R){const b=R/_,E=Math.exp(-b*b/2);g.push(E),R===0?x+=E:R<m&&(x+=2*E)}for(let R=0;R<g.length;R++)g[R]=g[R]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=p,f.mipInt.value=S-n;const v=this._sizeLods[s],T=3*v*(s>S-xs?s-S+xs:0),M=4*(this._cubeSize-v);ho(t,T,M,3*v,2*v),c.setRenderTarget(t),c.render(u,Da)}}function W_(i){const e=[],t=[],n=[];let s=i;const r=i-xs+1+Pu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-xs?c=Pu[o-i+xs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*d),S=new Float32Array(m*p*d),v=new Float32Array(g*p*d);for(let M=0;M<d;M++){const R=M%3*2/3-1,b=M>2?0:-1,E=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];x.set(E,_*p*M),S.set(f,m*p*M);const y=[M,M,M,M,M,M];v.set(y,g*p*M)}const T=new xt;T.setAttribute("position",new zt(x,_)),T.setAttribute("uv",new zt(S,m)),T.setAttribute("faceIndex",new zt(v,g)),e.push(T),s>xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Du(i,e,t){const n=new rn(i,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function X_(i,e,t){const n=new Float32Array(Oi),s=new I(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Nu(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Uu(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function q_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ac||c===bc,h=c===Rs||c===Cs;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new nl(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new nl(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Y_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function j_(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let m=0,g=_.length;m<g;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const p in d){const _=d[p];for(let m=0,g=_.length;m<g;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let S=0,v=x.length;S<v;S+=3){const T=x[S+0],M=x[S+1],R=x[S+2];f.push(T,M,M,R,R,T)}}else if(p!==void 0){const x=p.array;_=p.version;for(let S=0,v=x.length/3-1;S<v;S+=3){const T=S+0,M=S+1,R=S+2;f.push(T,M,M,R,R,T)}}else return;const m=new(kf(f)?Xf:Wf)(f,1);m.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function K_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*o,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function u(f,d,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)l(f[g]/o,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x]*_[x];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Z_(i,e,t){const n=new WeakMap,s=new $e;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,M=1;T>e.maxTextureSize&&(M=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*M*4*u),b=new Hf(R,T,M,u);b.type=_n,b.needsUpdate=!0;const E=v*4;for(let N=0;N<u;N++){const W=g[N],G=x[N],C=S[N],U=T*M*4*N;for(let F=0;F<W.count;F++){const L=F*E;p===!0&&(s.fromBufferAttribute(W,F),R[U+L+0]=s.x,R[U+L+1]=s.y,R[U+L+2]=s.z,R[U+L+3]=0),_===!0&&(s.fromBufferAttribute(G,F),R[U+L+4]=s.x,R[U+L+5]=s.y,R[U+L+6]=s.z,R[U+L+7]=0),m===!0&&(s.fromBufferAttribute(C,F),R[U+L+8]=s.x,R[U+L+9]=s.y,R[U+L+10]=s.z,R[U+L+11]=C.itemSize===4?s.w:1)}}f={count:u,texture:b,size:new ue(T,M)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function J_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class $f extends St{constructor(e,t,n,s,r,o,a,c,l,h=Ms){if(h!==Ms&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ms&&(n=Hi),n===void 0&&h===Ls&&(n=Ps),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zf=new St,Ou=new $f(1,1),Jf=new Hf,Qf=new km,ed=new jf,Fu=[],Bu=[],ku=new Float32Array(16),zu=new Float32Array(9),Hu=new Float32Array(4);function zs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Fu[s];if(r===void 0&&(r=new Float32Array(s),Fu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Q_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function iv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Hu.set(n),i.uniformMatrix2fv(this.addr,!1,Hu),Tt(t,n)}}function sv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;zu.set(n),i.uniformMatrix3fv(this.addr,!1,zu),Tt(t,n)}}function rv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;ku.set(n),i.uniformMatrix4fv(this.addr,!1,ku),Tt(t,n)}}function ov(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function uv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function pv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ou.compareFunction=Bf,r=Ou):r=Zf,t.setTexture2D(e||r,s)}function mv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qf,s)}function gv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ed,s)}function _v(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jf,s)}function vv(i){switch(i){case 5126:return Q_;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return rv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return cv;case 35669:case 35673:return lv;case 5125:return uv;case 36294:return hv;case 36295:return fv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return _v}}function xv(i,e){i.uniform1fv(this.addr,e)}function yv(i,e){const t=zs(e,this.size,2);i.uniform2fv(this.addr,t)}function Mv(i,e){const t=zs(e,this.size,3);i.uniform3fv(this.addr,t)}function Sv(i,e){const t=zs(e,this.size,4);i.uniform4fv(this.addr,t)}function wv(i,e){const t=zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tv(i,e){const t=zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ev(i,e){const t=zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Av(i,e){i.uniform1iv(this.addr,e)}function bv(i,e){i.uniform2iv(this.addr,e)}function Rv(i,e){i.uniform3iv(this.addr,e)}function Cv(i,e){i.uniform4iv(this.addr,e)}function Pv(i,e){i.uniform1uiv(this.addr,e)}function Lv(i,e){i.uniform2uiv(this.addr,e)}function Iv(i,e){i.uniform3uiv(this.addr,e)}function Dv(i,e){i.uniform4uiv(this.addr,e)}function Nv(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zf,r[o])}function Uv(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Qf,r[o])}function Ov(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ed,r[o])}function Fv(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jf,r[o])}function Bv(i){switch(i){case 5126:return xv;case 35664:return yv;case 35665:return Mv;case 35666:return Sv;case 35674:return wv;case 35675:return Tv;case 35676:return Ev;case 5124:case 35670:return Av;case 35667:case 35671:return bv;case 35668:case 35672:return Rv;case 35669:case 35673:return Cv;case 5125:return Pv;case 36294:return Lv;case 36295:return Iv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Fv}}class kv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vv(t.type)}}class zv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bv(t.type)}}class Hv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Vu(i,e){i.seq.push(e),i.map[e.id]=e}function Vv(i,e,t){const n=i.name,s=n.length;for(Ba.lastIndex=0;;){const r=Ba.exec(n),o=Ba.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Vu(t,l===void 0?new kv(a,i,e):new zv(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Hv(a),Vu(t,u)),t=u}}}class ko{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Vv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Gu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gv=37297;let Wv=0;function Xv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wu=new ze;function qv(i){qe._getMatrix(Wu,qe.workingColorSpace,i);const e=`mat3( ${Wu.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Jo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Xv(i.getShaderSource(e),o)}else return s}function Yv(i,e){const t=qv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jv(i,e){let t;switch(e){case xf:t="Linear";break;case yf:t="Reinhard";break;case Mf:t="Cineon";break;case _l:t="ACESFilmic";break;case Sf:t="AgX";break;case wf:t="Neutral";break;case Qp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new I;function Kv(){qe.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Zv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fr(i){return i!==""}function qu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(Qv,tx)}const ex=new Map;function tx(i,e){let t=He[e];if(t===void 0){const n=ex.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return il(t)}const nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(i){return i.replace(nx,ix)}function ix(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ku(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function rx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ox(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function ax(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vf:e="ENVMAP_BLENDING_MULTIPLY";break;case Zp:e="ENVMAP_BLENDING_MIX";break;case Jp:e="ENVMAP_BLENDING_ADD";break}return e}function cx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=sx(t),l=rx(t),h=ox(t),u=ax(t),f=cx(t),d=$v(t),p=Zv(r),_=s.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(fr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(fr).join(`
`),g.length>0&&(g+=`
`)):(m=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),g=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?He.tonemapping_pars_fragment:"",t.toneMapping!==vi?jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Yv("linearToOutputTexel",t.outputColorSpace),Kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=il(o),o=qu(o,t),o=Yu(o,t),a=il(a),a=qu(a,t),a=Yu(a,t),o=ju(o),a=ju(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=x+m+o,v=x+g+a,T=Gu(s,s.VERTEX_SHADER,S),M=Gu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(N){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(T).trim(),C=s.getShaderInfoLog(M).trim();let U=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,M);else{const L=Xu(s,T,"vertex"),O=Xu(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+L+`
`+O)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||C==="")&&(F=!1);F&&(N.diagnostics={runnable:U,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:C,prefix:g}})}s.deleteShader(T),s.deleteShader(M),b=new ko(s,_),E=Jv(s,_)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Gv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=M,this}let ux=0;class hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fx(e),t.set(e,n)),n}}class fx{constructor(e){this.id=ux++,this.code=e,this.usedTimes=0}}function dx(i,e,t,n,s,r,o){const a=new Vf,c=new hx,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,y,N,W,G){const C=W.fog,U=G.geometry,F=E.isMeshStandardMaterial?W.environment:null,L=(E.isMeshStandardMaterial?t:e).get(E.envMap||F),O=L&&L.mapping===Zo?L.image.height:null,B=p[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,D=q!==void 0?q.length:0;let X=0;U.morphAttributes.position!==void 0&&(X=1),U.morphAttributes.normal!==void 0&&(X=2),U.morphAttributes.color!==void 0&&(X=3);let re,Y,Z,le;if(B){const it=An[B];re=it.vertexShader,Y=it.fragmentShader}else re=E.vertexShader,Y=E.fragmentShader,c.update(E),Z=c.getVertexShaderID(E),le=c.getFragmentShaderID(E);const ae=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Ne=G.isInstancedMesh===!0,De=G.isBatchedMesh===!0,Ye=!!E.map,Fe=!!E.matcap,dt=!!L,z=!!E.aoMap,je=!!E.lightMap,Ve=!!E.bumpMap,We=!!E.normalMap,Le=!!E.displacementMap,tt=!!E.emissiveMap,Ce=!!E.metalnessMap,P=!!E.roughnessMap,w=E.anisotropy>0,j=E.clearcoat>0,ne=E.dispersion>0,oe=E.iridescence>0,ee=E.sheen>0,ye=E.transmission>0,pe=w&&!!E.anisotropyMap,xe=j&&!!E.clearcoatMap,Xe=j&&!!E.clearcoatNormalMap,J=j&&!!E.clearcoatRoughnessMap,ie=oe&&!!E.iridescenceMap,he=oe&&!!E.iridescenceThicknessMap,ge=ee&&!!E.sheenColorMap,te=ee&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,be=!!E.specularColorMap,nt=!!E.specularIntensityMap,k=ye&&!!E.transmissionMap,fe=ye&&!!E.thicknessMap,Q=!!E.gradientMap,se=!!E.alphaMap,me=E.alphaTest>0,_e=!!E.alphaHash,Be=!!E.extensions;let gt=vi;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Ct={shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:re,fragmentShader:Y,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:De,batchingColor:De&&G._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&G.instanceColor!==null,instancingMorph:Ne&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ht,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:Fe,envMap:dt,envMapMode:dt&&L.mapping,envMapCubeUVHeight:O,aoMap:z,lightMap:je,bumpMap:Ve,normalMap:We,displacementMap:f&&Le,emissiveMap:tt,normalMapObjectSpace:We&&E.normalMapType===am,normalMapTangentSpace:We&&E.normalMapType===Ff,metalnessMap:Ce,roughnessMap:P,anisotropy:w,anisotropyMap:pe,clearcoat:j,clearcoatMap:xe,clearcoatNormalMap:Xe,clearcoatRoughnessMap:J,dispersion:ne,iridescence:oe,iridescenceMap:ie,iridescenceThicknessMap:he,sheen:ee,sheenColorMap:ge,sheenRoughnessMap:te,specularMap:Pe,specularColorMap:be,specularIntensityMap:nt,transmission:ye,transmissionMap:k,thicknessMap:fe,gradientMap:Q,opaque:E.transparent===!1&&E.blending===ys&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:me,alphaHash:_e,combine:E.combine,mapUv:Ye&&_(E.map.channel),aoMapUv:z&&_(E.aoMap.channel),lightMapUv:je&&_(E.lightMap.channel),bumpMapUv:Ve&&_(E.bumpMap.channel),normalMapUv:We&&_(E.normalMap.channel),displacementMapUv:Le&&_(E.displacementMap.channel),emissiveMapUv:tt&&_(E.emissiveMap.channel),metalnessMapUv:Ce&&_(E.metalnessMap.channel),roughnessMapUv:P&&_(E.roughnessMap.channel),anisotropyMapUv:pe&&_(E.anisotropyMap.channel),clearcoatMapUv:xe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:te&&_(E.sheenRoughnessMap.channel),specularMapUv:Pe&&_(E.specularMap.channel),specularColorMapUv:be&&_(E.specularColorMap.channel),specularIntensityMapUv:nt&&_(E.specularIntensityMap.channel),transmissionMapUv:k&&_(E.transmissionMap.channel),thicknessMapUv:fe&&_(E.thicknessMap.channel),alphaMapUv:se&&_(E.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(We||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!U.attributes.uv&&(Ye||se),fog:!!C,useFog:E.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Re,skinning:G.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:X,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&qe.getTransfer(E.map.colorSpace)===st,decodeVideoTextureEmissive:tt&&E.emissiveMap.isVideoTexture===!0&&qe.getTransfer(E.emissiveMap.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Dt,flipSided:E.side===Rt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Be&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&E.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)y.push(N),y.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(x(y,E),S(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function S(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const y=p[E.type];let N;if(y){const W=An[y];N=Cr.clone(W.uniforms)}else N=E.uniforms;return N}function T(E,y){let N;for(let W=0,G=h.length;W<G;W++){const C=h[W];if(C.cacheKey===y){N=C,++N.usedTimes;break}}return N===void 0&&(N=new lx(i,y,E,r),h.push(N)),N}function M(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function R(E){c.remove(E)}function b(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:T,releaseProgram:M,releaseShaderCache:R,programs:h,dispose:b}}function px(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $u(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,p,_,m){let g=i[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:m},i[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=_,g.group=m),e++,g}function a(u,f,d,p,_,m){const g=o(u,f,d,p,_,m);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):t.push(g)}function c(u,f,d,p,_,m){const g=o(u,f,d,p,_,m);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):t.unshift(g)}function l(u,f){t.length>1&&t.sort(u||mx),n.length>1&&n.sort(f||$u),s.length>1&&s.sort(f||$u)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function gx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Zu,i.set(n,[o])):s>=r.length?(o=new Zu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _x(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ee};break;case"SpotLight":t={position:new I,direction:new I,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function vx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xx=0;function yx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mx(i){const e=new _x,t=vx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new Oe,o=new Oe;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,x=0,S=0,v=0,T=0,M=0,R=0;l.sort(yx);for(let E=0,y=l.length;E<y;E++){const N=l[E],W=N.color,G=N.intensity,C=N.distance,U=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=W.r*G,u+=W.g*G,f+=W.b*G;else if(N.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(N.sh.coefficients[F],G);R++}else if(N.isDirectionalLight){const F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const L=N.shadow,O=t.get(N);O.shadowIntensity=L.intensity,O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=U,n.directionalShadowMatrix[d]=N.shadow.matrix,x++}n.directional[d]=F,d++}else if(N.isSpotLight){const F=e.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(W).multiplyScalar(G),F.distance=C,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,n.spot[_]=F;const L=N.shadow;if(N.map&&(n.spotLightMap[T]=N.map,T++,L.updateMatrices(N),N.castShadow&&M++),n.spotLightMatrix[_]=L.matrix,N.castShadow){const O=t.get(N);O.shadowIntensity=L.intensity,O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=U,v++}_++}else if(N.isRectAreaLight){const F=e.get(N);F.color.copy(W).multiplyScalar(G),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=F,m++}else if(N.isPointLight){const F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),F.distance=N.distance,F.decay=N.decay,N.castShadow){const L=N.shadow,O=t.get(N);O.shadowIntensity=L.intensity,O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,O.shadowCameraNear=L.camera.near,O.shadowCameraFar=L.camera.far,n.pointShadow[p]=O,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=N.shadow.matrix,S++}n.point[p]=F,p++}else if(N.isHemisphereLight){const F=e.get(N);F.skyColor.copy(N.color).multiplyScalar(G),F.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[g]=F,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==d||b.pointLength!==p||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==g||b.numDirectionalShadows!==x||b.numPointShadows!==S||b.numSpotShadows!==v||b.numSpotMaps!==T||b.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+T-M,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=R,b.directionalLength=d,b.pointLength=p,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=g,b.numDirectionalShadows=x,b.numPointShadows=S,b.numSpotShadows=v,b.numSpotMaps=T,b.numLightProbes=R,n.version=xx++)}function c(l,h){let u=0,f=0,d=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,x=l.length;g<x;g++){const S=l[g];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ju(i){const e=new Mx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Sx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ju(i),e.set(s,[a])):r>=o.length?(a=new Ju(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class wx extends xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tx extends xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`;function bx(i,e,t){let n=new bl;const s=new ue,r=new ue,o=new $e,a=new wx({depthPacking:om}),c=new Tx,l={},h=t.maxTextureSize,u={[Jn]:Rt,[Rt]:Jn,[Dt]:Dt},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Ex,fragmentShader:Ax}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new xt;p.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ie(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf;let g=this.type;this.render=function(M,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Kn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const G=g!==Vn&&this.type===Vn,C=g===Vn&&this.type!==Vn;for(let U=0,F=M.length;U<F;U++){const L=M[U],O=L.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const B=O.getFrameExtents();if(s.multiply(B),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,O.mapSize.y=r.y)),O.map===null||G===!0||C===!0){const D=this.type!==Vn?{minFilter:kt,magFilter:kt}:{};O.map!==null&&O.map.dispose(),O.map=new rn(s.x,s.y,D),O.map.texture.name=L.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const q=O.getViewportCount();for(let D=0;D<q;D++){const X=O.getViewport(D);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),W.viewport(o),O.updateMatrices(L,D),n=O.getFrustum(),v(R,b,O.camera,L,this.type)}O.isPointLightShadow!==!0&&this.type===Vn&&x(O,b),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,N)};function x(M,R){const b=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new rn(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(R,null,b,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(R,null,b,d,_,null)}function S(M,R,b,E){let y=null;const N=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)y=N;else if(y=b.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=y.uuid,G=R.uuid;let C=l[W];C===void 0&&(C={},l[W]=C);let U=C[G];U===void 0&&(U=y.clone(),C[G]=U,R.addEventListener("dispose",T)),y=U}if(y.visible=R.visible,y.wireframe=R.wireframe,E===Vn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=i.properties.get(y);W.light=b}return y}function v(M,R,b,E,y){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Vn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const G=e.update(M),C=M.material;if(Array.isArray(C)){const U=G.groups;for(let F=0,L=U.length;F<L;F++){const O=U[F],B=C[O.materialIndex];if(B&&B.visible){const q=S(M,B,E,y);M.onBeforeShadow(i,M,R,b,G,q,O),i.renderBufferDirect(b,null,G,q,M,O),M.onAfterShadow(i,M,R,b,G,q,O)}}}else if(C.visible){const U=S(M,C,E,y);M.onBeforeShadow(i,M,R,b,G,U,null),i.renderBufferDirect(b,null,G,U,M,null),M.onAfterShadow(i,M,R,b,G,U,null)}}const W=M.children;for(let G=0,C=W.length;G<C;G++)v(W[G],R,b,E,y)}function T(M){M.target.removeEventListener("dispose",T);for(const b in l){const E=l[b],y=M.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Rx={[xc]:yc,[Mc]:Tc,[Sc]:Ec,[bs]:wc,[yc]:xc,[Tc]:Mc,[Ec]:Sc,[wc]:bs};function Cx(i,e){function t(){let k=!1;const fe=new $e;let Q=null;const se=new $e(0,0,0,0);return{setMask:function(me){Q!==me&&!k&&(i.colorMask(me,me,me,me),Q=me)},setLocked:function(me){k=me},setClear:function(me,_e,Be,gt,Ct){Ct===!0&&(me*=gt,_e*=gt,Be*=gt),fe.set(me,_e,Be,gt),se.equals(fe)===!1&&(i.clearColor(me,_e,Be,gt),se.copy(fe))},reset:function(){k=!1,Q=null,se.set(-1,0,0,0)}}}function n(){let k=!1,fe=!1,Q=null,se=null,me=null;return{setReversed:function(_e){if(fe!==_e){const Be=e.get("EXT_clip_control");fe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const gt=me;me=null,this.setClear(gt)}fe=_e},getReversed:function(){return fe},setTest:function(_e){_e?ae(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(_e){Q!==_e&&!k&&(i.depthMask(_e),Q=_e)},setFunc:function(_e){if(fe&&(_e=Rx[_e]),se!==_e){switch(_e){case xc:i.depthFunc(i.NEVER);break;case yc:i.depthFunc(i.ALWAYS);break;case Mc:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case Sc:i.depthFunc(i.EQUAL);break;case wc:i.depthFunc(i.GEQUAL);break;case Tc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=_e}},setLocked:function(_e){k=_e},setClear:function(_e){me!==_e&&(fe&&(_e=1-_e),i.clearDepth(_e),me=_e)},reset:function(){k=!1,Q=null,se=null,me=null,fe=!1}}}function s(){let k=!1,fe=null,Q=null,se=null,me=null,_e=null,Be=null,gt=null,Ct=null;return{setTest:function(it){k||(it?ae(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(it){fe!==it&&!k&&(i.stencilMask(it),fe=it)},setFunc:function(it,ln,Nn){(Q!==it||se!==ln||me!==Nn)&&(i.stencilFunc(it,ln,Nn),Q=it,se=ln,me=Nn)},setOp:function(it,ln,Nn){(_e!==it||Be!==ln||gt!==Nn)&&(i.stencilOp(it,ln,Nn),_e=it,Be=ln,gt=Nn)},setLocked:function(it){k=it},setClear:function(it){Ct!==it&&(i.clearStencil(it),Ct=it)},reset:function(){k=!1,fe=null,Q=null,se=null,me=null,_e=null,Be=null,gt=null,Ct=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,x=null,S=null,v=null,T=null,M=null,R=new Ee(0,0,0),b=0,E=!1,y=null,N=null,W=null,G=null,C=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,L=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=L>=1):O.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=L>=2);let B=null,q={};const D=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),re=new $e().fromArray(D),Y=new $e().fromArray(X);function Z(k,fe,Q,se){const me=new Uint8Array(4),_e=i.createTexture();i.bindTexture(k,_e),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Q;Be++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(fe+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return _e}const le={};le[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(bs),Ve(!1),We(iu),ae(i.CULL_FACE),z(Kn);function ae(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Re(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Ne(k,fe){return u[k]!==fe?(i.bindFramebuffer(k,fe),u[k]=fe,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function De(k,fe){let Q=d,se=!1;if(k){Q=f.get(fe),Q===void 0&&(Q=[],f.set(fe,Q));const me=k.textures;if(Q.length!==me.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Be=me.length;_e<Be;_e++)Q[_e]=i.COLOR_ATTACHMENT0+_e;Q.length=me.length,se=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,se=!0);se&&i.drawBuffers(Q)}function Ye(k){return p!==k?(i.useProgram(k),p=k,!0):!1}const Fe={[Ui]:i.FUNC_ADD,[Np]:i.FUNC_SUBTRACT,[Up]:i.FUNC_REVERSE_SUBTRACT};Fe[Op]=i.MIN,Fe[Fp]=i.MAX;const dt={[Bp]:i.ZERO,[kp]:i.ONE,[zp]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[qp]:i.SRC_ALPHA_SATURATE,[Wp]:i.DST_COLOR,[Vp]:i.DST_ALPHA,[Hp]:i.ONE_MINUS_SRC_COLOR,[vc]:i.ONE_MINUS_SRC_ALPHA,[Xp]:i.ONE_MINUS_DST_COLOR,[Gp]:i.ONE_MINUS_DST_ALPHA,[Yp]:i.CONSTANT_COLOR,[jp]:i.ONE_MINUS_CONSTANT_COLOR,[Kp]:i.CONSTANT_ALPHA,[$p]:i.ONE_MINUS_CONSTANT_ALPHA};function z(k,fe,Q,se,me,_e,Be,gt,Ct,it){if(k===Kn){_===!0&&(Re(i.BLEND),_=!1);return}if(_===!1&&(ae(i.BLEND),_=!0),k!==Dp){if(k!==m||it!==E){if((g!==Ui||v!==Ui)&&(i.blendEquation(i.FUNC_ADD),g=Ui,v=Ui),it)switch(k){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.ONE,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,S=null,T=null,M=null,R.set(0,0,0),b=0,m=k,E=it}return}me=me||fe,_e=_e||Q,Be=Be||se,(fe!==g||me!==v)&&(i.blendEquationSeparate(Fe[fe],Fe[me]),g=fe,v=me),(Q!==x||se!==S||_e!==T||Be!==M)&&(i.blendFuncSeparate(dt[Q],dt[se],dt[_e],dt[Be]),x=Q,S=se,T=_e,M=Be),(gt.equals(R)===!1||Ct!==b)&&(i.blendColor(gt.r,gt.g,gt.b,Ct),R.copy(gt),b=Ct),m=k,E=!1}function je(k,fe){k.side===Dt?Re(i.CULL_FACE):ae(i.CULL_FACE);let Q=k.side===Rt;fe&&(Q=!Q),Ve(Q),k.blending===ys&&k.transparent===!1?z(Kn):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const se=k.stencilWrite;a.setTest(se),se&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),tt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function We(k){k!==Lp?(ae(i.CULL_FACE),k!==N&&(k===iu?i.cullFace(i.BACK):k===Ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),N=k}function Le(k){k!==W&&(F&&i.lineWidth(k),W=k)}function tt(k,fe,Q){k?(ae(i.POLYGON_OFFSET_FILL),(G!==fe||C!==Q)&&(i.polygonOffset(fe,Q),G=fe,C=Q)):Re(i.POLYGON_OFFSET_FILL)}function Ce(k){k?ae(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function P(k){k===void 0&&(k=i.TEXTURE0+U-1),B!==k&&(i.activeTexture(k),B=k)}function w(k,fe,Q){Q===void 0&&(B===null?Q=i.TEXTURE0+U-1:Q=B);let se=q[Q];se===void 0&&(se={type:void 0,texture:void 0},q[Q]=se),(se.type!==k||se.texture!==fe)&&(B!==Q&&(i.activeTexture(Q),B=Q),i.bindTexture(k,fe||le[k]),se.type=k,se.texture=fe)}function j(){const k=q[B];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(k){re.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),re.copy(k))}function te(k){Y.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Y.copy(k))}function Pe(k,fe){let Q=l.get(fe);Q===void 0&&(Q=new WeakMap,l.set(fe,Q));let se=Q.get(k);se===void 0&&(se=i.getUniformBlockIndex(fe,k.name),Q.set(k,se))}function be(k,fe){const se=l.get(fe).get(k);c.get(fe)!==se&&(i.uniformBlockBinding(fe,se,k.__bindingPointIndex),c.set(fe,se))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},B=null,q={},u={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,x=null,S=null,v=null,T=null,M=null,R=new Ee(0,0,0),b=0,E=!1,y=null,N=null,W=null,G=null,C=null,re.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Re,bindFramebuffer:Ne,drawBuffers:De,useProgram:Ye,setBlending:z,setMaterial:je,setFlipSided:Ve,setCullFace:We,setLineWidth:Le,setPolygonOffset:tt,setScissorTest:Ce,activeTexture:P,bindTexture:w,unbindTexture:j,compressedTexImage2D:ne,compressedTexImage3D:oe,texImage2D:ie,texImage3D:he,updateUBOMapping:Pe,uniformBlockBinding:be,texStorage2D:Xe,texStorage3D:J,texSubImage2D:ee,texSubImage3D:ye,compressedTexSubImage2D:pe,compressedTexSubImage3D:xe,scissor:ge,viewport:te,reset:nt}}function Qu(i,e,t,n){const s=Px(n);switch(t){case Cf:return i*e;case Lf:return i*e;case If:return i*e*2;case Ml:return i*e/s.components*s.byteLength;case Sl:return i*e/s.components*s.byteLength;case Df:return i*e*2/s.components*s.byteLength;case wl:return i*e*2/s.components*s.byteLength;case Pf:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Tl:return i*e*4/s.components*s.byteLength;case No:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Lc:return Math.max(i,16)*Math.max(e,8)/4;case Rc:case Pc:return Math.max(i,8)*Math.max(e,8)/2;case Ic:case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bo:case Kc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nf:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Px(i){switch(i){case Qn:case Af:return{byteLength:1,components:1};case Er:case bf:case bn:return{byteLength:2,components:1};case xl:case yl:return{byteLength:2,components:4};case Hi:case vl:case _n:return{byteLength:4,components:1};case Rf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Lx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,w){return d?new OffscreenCanvas(P,w):Rr("canvas")}function _(P,w,j){let ne=1;const oe=Ce(P);if((oe.width>j||oe.height>j)&&(ne=j/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(ne*oe.width),ye=Math.floor(ne*oe.height);u===void 0&&(u=p(ee,ye));const pe=w?p(ee,ye):u;return pe.width=ee,pe.height=ye,pe.getContext("2d").drawImage(P,0,0,ee,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ee+"x"+ye+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function m(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(P,w,j,ne,oe=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=w;if(w===i.RED&&(j===i.FLOAT&&(ee=i.R32F),j===i.HALF_FLOAT&&(ee=i.R16F),j===i.UNSIGNED_BYTE&&(ee=i.R8)),w===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ee=i.R8UI),j===i.UNSIGNED_SHORT&&(ee=i.R16UI),j===i.UNSIGNED_INT&&(ee=i.R32UI),j===i.BYTE&&(ee=i.R8I),j===i.SHORT&&(ee=i.R16I),j===i.INT&&(ee=i.R32I)),w===i.RG&&(j===i.FLOAT&&(ee=i.RG32F),j===i.HALF_FLOAT&&(ee=i.RG16F),j===i.UNSIGNED_BYTE&&(ee=i.RG8)),w===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ee=i.RG8UI),j===i.UNSIGNED_SHORT&&(ee=i.RG16UI),j===i.UNSIGNED_INT&&(ee=i.RG32UI),j===i.BYTE&&(ee=i.RG8I),j===i.SHORT&&(ee=i.RG16I),j===i.INT&&(ee=i.RG32I)),w===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),j===i.UNSIGNED_INT&&(ee=i.RGB32UI),j===i.BYTE&&(ee=i.RGB8I),j===i.SHORT&&(ee=i.RGB16I),j===i.INT&&(ee=i.RGB32I)),w===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),j===i.UNSIGNED_INT&&(ee=i.RGBA32UI),j===i.BYTE&&(ee=i.RGBA8I),j===i.SHORT&&(ee=i.RGBA16I),j===i.INT&&(ee=i.RGBA32I)),w===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),w===i.RGBA){const ye=oe?Jo:qe.getTransfer(ne);j===i.FLOAT&&(ee=i.RGBA32F),j===i.HALF_FLOAT&&(ee=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ee=ye===st?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(P,w){let j;return P?w===null||w===Hi||w===Ps?j=i.DEPTH24_STENCIL8:w===_n?j=i.DEPTH32F_STENCIL8:w===Er&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Hi||w===Ps?j=i.DEPTH_COMPONENT24:w===_n?j=i.DEPTH_COMPONENT32F:w===Er&&(j=i.DEPTH_COMPONENT16),j}function T(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==kt&&P.minFilter!==Kt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function M(P){const w=P.target;w.removeEventListener("dispose",M),b(w),w.isVideoTexture&&h.delete(w)}function R(P){const w=P.target;w.removeEventListener("dispose",R),y(w)}function b(P){const w=n.get(P);if(w.__webglInit===void 0)return;const j=P.source,ne=f.get(j);if(ne){const oe=ne[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&E(P),Object.keys(ne).length===0&&f.delete(j)}n.remove(P)}function E(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const j=P.source,ne=f.get(j);delete ne[w.__cacheKey],o.memory.textures--}function y(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let oe=0;oe<w.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(w.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[ne]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const j=P.textures;for(let ne=0,oe=j.length;ne<oe;ne++){const ee=n.get(j[ne]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(j[ne])}n.remove(P)}let N=0;function W(){N=0}function G(){const P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function C(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function U(P,w){const j=n.get(P);if(P.isVideoTexture&&Le(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(j,P,w);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+w)}function F(P,w){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Y(j,P,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+w)}function L(P,w){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Y(j,P,w);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+w)}function O(P,w){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Z(j,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+w)}const B={[Rn]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},q={[kt]:i.NEAREST,[Ef]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Do]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},D={[cm]:i.NEVER,[pm]:i.ALWAYS,[lm]:i.LESS,[Bf]:i.LEQUAL,[um]:i.EQUAL,[dm]:i.GEQUAL,[hm]:i.GREATER,[fm]:i.NOTEQUAL};function X(P,w){if(w.type===_n&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Kt||w.magFilter===Do||w.magFilter===ur||w.magFilter===Yn||w.minFilter===Kt||w.minFilter===Do||w.minFilter===ur||w.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,B[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,B[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,B[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,q[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,D[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===kt||w.minFilter!==ur&&w.minFilter!==Yn||w.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function re(P,w){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",M));const ne=w.source;let oe=f.get(ne);oe===void 0&&(oe={},f.set(ne,oe));const ee=C(w);if(ee!==P.__cacheKey){oe[ee]===void 0&&(oe[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),oe[ee].usedTimes++;const ye=oe[P.__cacheKey];ye!==void 0&&(oe[P.__cacheKey].usedTimes--,ye.usedTimes===0&&E(w)),P.__cacheKey=ee,P.__webglTexture=oe[ee].texture}return j}function Y(P,w,j){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);const oe=re(P,w),ee=w.source;t.bindTexture(ne,P.__webglTexture,i.TEXTURE0+j);const ye=n.get(ee);if(ee.version!==ye.__version||oe===!0){t.activeTexture(i.TEXTURE0+j);const pe=qe.getPrimaries(qe.workingColorSpace),xe=w.colorSpace===mi?null:qe.getPrimaries(w.colorSpace),Xe=w.colorSpace===mi||pe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let J=_(w.image,!1,s.maxTextureSize);J=tt(w,J);const ie=r.convert(w.format,w.colorSpace),he=r.convert(w.type);let ge=S(w.internalFormat,ie,he,w.colorSpace,w.isVideoTexture);X(ne,w);let te;const Pe=w.mipmaps,be=w.isVideoTexture!==!0,nt=ye.__version===void 0||oe===!0,k=ee.dataReady,fe=T(w,J);if(w.isDepthTexture)ge=v(w.format===Ls,w.type),nt&&(be?t.texStorage2D(i.TEXTURE_2D,1,ge,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ge,J.width,J.height,0,ie,he,null));else if(w.isDataTexture)if(Pe.length>0){be&&nt&&t.texStorage2D(i.TEXTURE_2D,fe,ge,Pe[0].width,Pe[0].height);for(let Q=0,se=Pe.length;Q<se;Q++)te=Pe[Q],be?k&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,te.width,te.height,ie,he,te.data):t.texImage2D(i.TEXTURE_2D,Q,ge,te.width,te.height,0,ie,he,te.data);w.generateMipmaps=!1}else be?(nt&&t.texStorage2D(i.TEXTURE_2D,fe,ge,J.width,J.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ie,he,J.data)):t.texImage2D(i.TEXTURE_2D,0,ge,J.width,J.height,0,ie,he,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){be&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ge,Pe[0].width,Pe[0].height,J.depth);for(let Q=0,se=Pe.length;Q<se;Q++)if(te=Pe[Q],w.format!==nn)if(ie!==null)if(be){if(k)if(w.layerUpdates.size>0){const me=Qu(te.width,te.height,w.format,w.type);for(const _e of w.layerUpdates){const Be=te.data.subarray(_e*me/te.data.BYTES_PER_ELEMENT,(_e+1)*me/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,_e,te.width,te.height,1,ie,Be)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,te.width,te.height,J.depth,ie,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ge,te.width,te.height,J.depth,0,te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,te.width,te.height,J.depth,ie,he,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,ge,te.width,te.height,J.depth,0,ie,he,te.data)}else{be&&nt&&t.texStorage2D(i.TEXTURE_2D,fe,ge,Pe[0].width,Pe[0].height);for(let Q=0,se=Pe.length;Q<se;Q++)te=Pe[Q],w.format!==nn?ie!==null?be?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,te.width,te.height,ie,te.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,ge,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?k&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,te.width,te.height,ie,he,te.data):t.texImage2D(i.TEXTURE_2D,Q,ge,te.width,te.height,0,ie,he,te.data)}else if(w.isDataArrayTexture)if(be){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ge,J.width,J.height,J.depth),k)if(w.layerUpdates.size>0){const Q=Qu(J.width,J.height,w.format,w.type);for(const se of w.layerUpdates){const me=J.data.subarray(se*Q/J.data.BYTES_PER_ELEMENT,(se+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,J.width,J.height,1,ie,he,me)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ie,he,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,J.width,J.height,J.depth,0,ie,he,J.data);else if(w.isData3DTexture)be?(nt&&t.texStorage3D(i.TEXTURE_3D,fe,ge,J.width,J.height,J.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ie,he,J.data)):t.texImage3D(i.TEXTURE_3D,0,ge,J.width,J.height,J.depth,0,ie,he,J.data);else if(w.isFramebufferTexture){if(nt)if(be)t.texStorage2D(i.TEXTURE_2D,fe,ge,J.width,J.height);else{let Q=J.width,se=J.height;for(let me=0;me<fe;me++)t.texImage2D(i.TEXTURE_2D,me,ge,Q,se,0,ie,he,null),Q>>=1,se>>=1}}else if(Pe.length>0){if(be&&nt){const Q=Ce(Pe[0]);t.texStorage2D(i.TEXTURE_2D,fe,ge,Q.width,Q.height)}for(let Q=0,se=Pe.length;Q<se;Q++)te=Pe[Q],be?k&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ie,he,te):t.texImage2D(i.TEXTURE_2D,Q,ge,ie,he,te);w.generateMipmaps=!1}else if(be){if(nt){const Q=Ce(J);t.texStorage2D(i.TEXTURE_2D,fe,ge,Q.width,Q.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,he,J)}else t.texImage2D(i.TEXTURE_2D,0,ge,ie,he,J);m(w)&&g(ne),ye.__version=ee.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Z(P,w,j){if(w.image.length!==6)return;const ne=re(P,w),oe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+j);const ee=n.get(oe);if(oe.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+j);const ye=qe.getPrimaries(qe.workingColorSpace),pe=w.colorSpace===mi?null:qe.getPrimaries(w.colorSpace),xe=w.colorSpace===mi||ye===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,J=w.image[0]&&w.image[0].isDataTexture,ie=[];for(let se=0;se<6;se++)!Xe&&!J?ie[se]=_(w.image[se],!0,s.maxCubemapSize):ie[se]=J?w.image[se].image:w.image[se],ie[se]=tt(w,ie[se]);const he=ie[0],ge=r.convert(w.format,w.colorSpace),te=r.convert(w.type),Pe=S(w.internalFormat,ge,te,w.colorSpace),be=w.isVideoTexture!==!0,nt=ee.__version===void 0||ne===!0,k=oe.dataReady;let fe=T(w,he);X(i.TEXTURE_CUBE_MAP,w);let Q;if(Xe){be&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Pe,he.width,he.height);for(let se=0;se<6;se++){Q=ie[se].mipmaps;for(let me=0;me<Q.length;me++){const _e=Q[me];w.format!==nn?ge!==null?be?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,_e.width,_e.height,ge,te,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Pe,_e.width,_e.height,0,ge,te,_e.data)}}}else{if(Q=w.mipmaps,be&&nt){Q.length>0&&fe++;const se=Ce(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Pe,se.width,se.height)}for(let se=0;se<6;se++)if(J){be?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ie[se].width,ie[se].height,ge,te,ie[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Pe,ie[se].width,ie[se].height,0,ge,te,ie[se].data);for(let me=0;me<Q.length;me++){const Be=Q[me].image[se].image;be?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,Be.width,Be.height,ge,te,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Pe,Be.width,Be.height,0,ge,te,Be.data)}}else{be?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge,te,ie[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Pe,ge,te,ie[se]);for(let me=0;me<Q.length;me++){const _e=Q[me];be?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,ge,te,_e.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Pe,ge,te,_e.image[se])}}}m(w)&&g(i.TEXTURE_CUBE_MAP),ee.__version=oe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function le(P,w,j,ne,oe,ee){const ye=r.convert(j.format,j.colorSpace),pe=r.convert(j.type),xe=S(j.internalFormat,ye,pe,j.colorSpace),Xe=n.get(w),J=n.get(j);if(J.__renderTarget=w,!Xe.__hasExternalTextures){const ie=Math.max(1,w.width>>ee),he=Math.max(1,w.height>>ee);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ee,xe,ie,he,w.depth,0,ye,pe,null):t.texImage2D(oe,ee,xe,ie,he,0,ye,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),We(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,J.__webglTexture,0,Ve(w)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,J.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(P,w,j){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const ne=w.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,ee=v(w.stencilBuffer,oe),ye=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=Ve(w);We(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ee,w.width,w.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ee,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ee,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,P)}else{const ne=w.textures;for(let oe=0;oe<ne.length;oe++){const ee=ne[oe],ye=r.convert(ee.format,ee.colorSpace),pe=r.convert(ee.type),xe=S(ee.internalFormat,ye,pe,ee.colorSpace),Xe=Ve(w);j&&We(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,xe,w.width,w.height):We(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,xe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,xe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(w.depthTexture);ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const oe=ne.__webglTexture,ee=Ve(w);if(w.depthTexture.format===Ms)We(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(w.depthTexture.format===Ls)We(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ne(P){const w=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){const oe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),w.__depthDisposeCallback=oe}w.__boundDepthTexture=ne}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Re(w.__webglFramebuffer,P)}else if(j){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=i.createRenderbuffer(),ae(w.__webglDepthbuffer[ne],P,!1);else{const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ae(w.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(P,w,j){const ne=n.get(P);w!==void 0&&le(ne.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Ne(P)}function Ye(P){const w=P.texture,j=n.get(P),ne=n.get(w);P.addEventListener("dispose",R);const oe=P.textures,ee=P.isWebGLCubeRenderTarget===!0,ye=oe.length>1;if(ye||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++),ee){j.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[pe]=[];for(let xe=0;xe<w.mipmaps.length;xe++)j.__webglFramebuffer[pe][xe]=i.createFramebuffer()}else j.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)j.__webglFramebuffer[pe]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(ye)for(let pe=0,xe=oe.length;pe<xe;pe++){const Xe=n.get(oe[pe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&We(P)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){const xe=oe[pe];j.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[pe]);const Xe=r.convert(xe.format,xe.colorSpace),J=r.convert(xe.type),ie=S(xe.internalFormat,Xe,J,xe.colorSpace,P.isXRRenderTarget===!0),he=Ve(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ie,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,j.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),X(i.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)le(j.__webglFramebuffer[pe][xe],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else le(j.__webglFramebuffer[pe],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(w)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let pe=0,xe=oe.length;pe<xe;pe++){const Xe=oe[pe],J=n.get(Xe);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),X(i.TEXTURE_2D,Xe),le(j.__webglFramebuffer,P,Xe,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),m(Xe)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),X(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)le(j.__webglFramebuffer[xe],P,w,i.COLOR_ATTACHMENT0,pe,xe);else le(j.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,pe,0);m(w)&&g(pe),t.unbindTexture()}P.depthBuffer&&Ne(P)}function Fe(P){const w=P.textures;for(let j=0,ne=w.length;j<ne;j++){const oe=w[j];if(m(oe)){const ee=x(P),ye=n.get(oe).__webglTexture;t.bindTexture(ee,ye),g(ee),t.unbindTexture()}}}const dt=[],z=[];function je(P){if(P.samples>0){if(We(P)===!1){const w=P.textures,j=P.width,ne=P.height;let oe=i.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(P),pe=w.length>1;if(pe)for(let xe=0;xe<w.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const Xe=n.get(w[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,j,ne,0,0,j,ne,oe,i.NEAREST),c===!0&&(dt.length=0,z.length=0,dt.push(i.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(dt.push(ee),z.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let xe=0;xe<w.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const Xe=n.get(w[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ve(P){return Math.min(s.maxSamples,P.samples)}function We(P){const w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Le(P){const w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function tt(P,w){const j=P.colorSpace,ne=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==Ht&&j!==mi&&(qe.getTransfer(j)===st?(ne!==nn||oe!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}function Ce(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.setTexture2D=U,this.setTexture2DArray=F,this.setTexture3D=L,this.setTextureCube=O,this.rebindTextures=De,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=le,this.useMultisampledRTT=We}function Ix(i,e){function t(n,s=mi){let r;const o=qe.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Af)return i.BYTE;if(n===bf)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===Cf)return i.ALPHA;if(n===Pf)return i.RGB;if(n===nn)return i.RGBA;if(n===Lf)return i.LUMINANCE;if(n===If)return i.LUMINANCE_ALPHA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===Df)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===No||n===Uo||n===Oo||n===Fo)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Cc||n===Pc||n===Lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Dc||n===Nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ic||n===Dc)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uc||n===Oc||n===Fc||n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bo||n===Kc||n===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bo)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nf||n===Zc||n===Jc||n===Qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Dx extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nx={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ox=`
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

}`;class Fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new St,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new At({vertexShader:Ux,fragmentShader:Ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bx extends Wi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null;const _=new Fx,m=t.getContextAttributes();let g=null,x=null;const S=[],v=[],T=new ue;let M=null;const R=new Ft;R.viewport=new $e;const b=new Ft;b.viewport=new $e;const E=[R,b],y=new Dx;let N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=S[Y];return Z===void 0&&(Z=new ka,S[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=S[Y];return Z===void 0&&(Z=new ka,S[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=S[Y];return Z===void 0&&(Z=new ka,S[Y]=Z),Z.getHandSpace()};function G(Y){const Z=v.indexOf(Y.inputSource);if(Z===-1)return;const le=S[Z];le!==void 0&&(le.update(Y.inputSource,Y.frame,l||o),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function C(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",U);for(let Y=0;Y<S.length;Y++){const Z=v[Y];Z!==null&&(v[Y]=null,S[Y].disconnect(Z))}N=null,W=null,_.reset(),e.setRenderTarget(g),d=null,f=null,u=null,s=null,x=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",C),s.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new rn(d.framebufferWidth,d.framebufferHeight,{format:nn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,le=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Ls:Ms,le=m.stencil?Ps:Hi);const Re={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new rn(f.textureWidth,f.textureHeight,{format:nn,type:Qn,depthTexture:new $f(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function U(Y){for(let Z=0;Z<Y.removed.length;Z++){const le=Y.removed[Z],ae=v.indexOf(le);ae>=0&&(v[ae]=null,S[ae].disconnect(le))}for(let Z=0;Z<Y.added.length;Z++){const le=Y.added[Z];let ae=v.indexOf(le);if(ae===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=v.length){v.push(le),ae=Ne;break}else if(v[Ne]===null){v[Ne]=le,ae=Ne;break}if(ae===-1)break}const Re=S[ae];Re&&Re.connect(le)}}const F=new I,L=new I;function O(Y,Z,le){F.setFromMatrixPosition(Z.matrixWorld),L.setFromMatrixPosition(le.matrixWorld);const ae=F.distanceTo(L),Re=Z.projectionMatrix.elements,Ne=le.projectionMatrix.elements,De=Re[14]/(Re[10]-1),Ye=Re[14]/(Re[10]+1),Fe=(Re[9]+1)/Re[5],dt=(Re[9]-1)/Re[5],z=(Re[8]-1)/Re[0],je=(Ne[8]+1)/Ne[0],Ve=De*z,We=De*je,Le=ae/(-z+je),tt=Le*-z;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(tt),Y.translateZ(Le),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ce=De+Le,P=Ye+Le,w=Ve-tt,j=We+(ae-tt),ne=Fe*Ye/P*Ce,oe=dt*Ye/P*Ce;Y.projectionMatrix.makePerspective(w,j,ne,oe,Ce,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function B(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,le=Y.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(le=_.depthFar)),y.near=b.near=R.near=Z,y.far=b.far=R.far=le,(N!==y.near||W!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,W=y.far),R.layers.mask=Y.layers.mask|2,b.layers.mask=Y.layers.mask|4,y.layers.mask=R.layers.mask|b.layers.mask;const ae=Y.parent,Re=y.cameras;B(y,ae);for(let Ne=0;Ne<Re.length;Ne++)B(Re[Ne],ae);Re.length===2?O(y,R,b):y.projectionMatrix.copy(R.projectionMatrix),q(Y,y,ae)};function q(Y,Z,le){le===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Is*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let D=null;function X(Y,Z){if(h=Z.getViewerPose(l||o),p=Z,h!==null){const le=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ae=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Ne=0;Ne<le.length;Ne++){const De=le[Ne];let Ye=null;if(d!==null)Ye=d.getViewport(De);else{const dt=u.getViewSubImage(f,De);Ye=dt.viewport,Ne===0&&(e.setRenderTargetTextures(x,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(x))}let Fe=E[Ne];Fe===void 0&&(Fe=new Ft,Fe.layers.enable(Ne),Fe.viewport=new $e,E[Ne]=Fe),Fe.matrix.fromArray(De.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(De.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ne===0&&(y.matrix.copy(Fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Fe)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ne=u.getDepthInformation(le[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,s.renderState)}}for(let le=0;le<S.length;le++){const ae=v[le],Re=S[le];ae!==null&&Re!==void 0&&Re.update(ae,Z,l||o)}D&&D(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}const re=new Kf;re.setAnimationLoop(X),this.setAnimationLoop=function(Y){D=Y},this.dispose=function(){}}}const Pi=new Cn,kx=new Oe;function zx(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,qf(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,S,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,x,S):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Rt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Rt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g),S=x.envMap,v=x.envMapRotation;S&&(m.envMap.value=S,Pi.copy(v),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(Pi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,x,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const v=S.program;n.uniformBlockBinding(x,v)}function l(x,S){let v=s[x.id];v===void 0&&(p(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(x,T);const M=e.render.frame;r[x.id]!==M&&(f(x),r[x.id]=M)}function h(x){const S=u();x.__bindingPointIndex=S;const v=i.createBuffer(),T=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const S=s[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,R=v.length;M<R;M++){const b=Array.isArray(v[M])?v[M]:[v[M]];for(let E=0,y=b.length;E<y;E++){const N=b[E];if(d(N,M,E,T)===!0){const W=N.__offset,G=Array.isArray(N.value)?N.value:[N.value];let C=0;for(let U=0;U<G.length;U++){const F=G[U],L=_(F);typeof F=="number"||typeof F=="boolean"?(N.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,W+C,N.__data)):F.isMatrix3?(N.__data[0]=F.elements[0],N.__data[1]=F.elements[1],N.__data[2]=F.elements[2],N.__data[3]=0,N.__data[4]=F.elements[3],N.__data[5]=F.elements[4],N.__data[6]=F.elements[5],N.__data[7]=0,N.__data[8]=F.elements[6],N.__data[9]=F.elements[7],N.__data[10]=F.elements[8],N.__data[11]=0):(F.toArray(N.__data,C),C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,S,v,T){const M=x.value,R=S+"_"+v;if(T[R]===void 0)return typeof M=="number"||typeof M=="boolean"?T[R]=M:T[R]=M.clone(),!0;{const b=T[R];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return T[R]=M,!0}else if(b.equals(M)===!1)return b.copy(M),!0}return!1}function p(x){const S=x.uniforms;let v=0;const T=16;for(let R=0,b=S.length;R<b;R++){const E=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,N=E.length;y<N;y++){const W=E[y],G=Array.isArray(W.value)?W.value:[W.value];for(let C=0,U=G.length;C<U;C++){const F=G[C],L=_(F),O=v%T,B=O%L.boundary,q=O+B;v+=B,q!==0&&T-q<L.storage&&(v+=T-q),W.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=L.storage}}}const M=v%T;return M>0&&(v+=T-M),x.__size=v,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}class Vx{constructor(e={}){const{canvas:t=Lm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const x=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=vi,this.toneMappingExposure=1;const v=this;let T=!1,M=0,R=0,b=null,E=-1,y=null;const N=new $e,W=new $e;let G=null;const C=new Ee(0);let U=0,F=t.width,L=t.height,O=1,B=null,q=null;const D=new $e(0,0,F,L),X=new $e(0,0,F,L);let re=!1;const Y=new bl;let Z=!1,le=!1;const ae=new Oe,Re=new Oe,Ne=new I,De=new $e,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function dt(){return b===null?O:1}let z=n;function je(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",_e,!1),z===null){const H="webgl2";if(z=je(H,A),z===null)throw je(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ve,We,Le,tt,Ce,P,w,j,ne,oe,ee,ye,pe,xe,Xe,J,ie,he,ge,te,Pe,be,nt,k;function fe(){Ve=new Y_(z),Ve.init(),be=new Ix(z,Ve),We=new H_(z,Ve,e,be),Le=new Cx(z,Ve),We.reverseDepthBuffer&&f&&Le.buffers.depth.setReversed(!0),tt=new $_(z),Ce=new px,P=new Lx(z,Ve,Le,Ce,We,be,tt),w=new G_(v),j=new q_(v),ne=new ig(z),nt=new k_(z,ne),oe=new j_(z,ne,tt,nt),ee=new J_(z,oe,ne,tt),ge=new Z_(z,We,P),J=new V_(Ce),ye=new dx(v,w,j,Ve,We,nt,J),pe=new zx(v,Ce),xe=new gx,Xe=new Sx(Ve),he=new B_(v,w,j,Le,ee,d,c),ie=new bx(v,ee,We),k=new Hx(z,tt,We,Le),te=new z_(z,Ve,tt),Pe=new K_(z,Ve,tt),tt.programs=ye.programs,v.capabilities=We,v.extensions=Ve,v.properties=Ce,v.renderLists=xe,v.shadowMap=ie,v.state=Le,v.info=tt}fe();const Q=new Bx(v,z);this.xr=Q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(F,L,!1))},this.getSize=function(A){return A.set(F,L)},this.setSize=function(A,H,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,L=H,t.width=Math.floor(A*O),t.height=Math.floor(H*O),K===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(F*O,L*O).floor()},this.setDrawingBufferSize=function(A,H,K){F=A,L=H,O=K,t.width=Math.floor(A*K),t.height=Math.floor(H*K),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,H,K,$){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,H,K,$),Le.viewport(N.copy(D).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(X)},this.setScissor=function(A,H,K,$){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,H,K,$),Le.scissor(W.copy(X).multiplyScalar(O).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){Le.setScissorTest(re=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(A=!0,H=!0,K=!0){let $=0;if(A){let V=!1;if(b!==null){const ce=b.texture.format;V=ce===Tl||ce===wl||ce===Sl}if(V){const ce=b.texture.type,ve=ce===Qn||ce===Hi||ce===Er||ce===Ps||ce===xl||ce===yl,Me=he.getClearColor(),Se=he.getClearAlpha(),Ue=Me.r,ke=Me.g,we=Me.b;ve?(p[0]=Ue,p[1]=ke,p[2]=we,p[3]=Se,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=Ue,_[1]=ke,_[2]=we,_[3]=Se,z.clearBufferiv(z.COLOR,0,_))}else $|=z.COLOR_BUFFER_BIT}H&&($|=z.DEPTH_BUFFER_BIT),K&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),xe.dispose(),Xe.dispose(),Ce.dispose(),w.dispose(),j.dispose(),ee.dispose(),nt.dispose(),k.dispose(),ye.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Kl),Q.removeEventListener("sessionend",$l),Ti.stop()};function se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=tt.autoReset,H=ie.enabled,K=ie.autoUpdate,$=ie.needsUpdate,V=ie.type;fe(),tt.autoReset=A,ie.enabled=H,ie.autoUpdate=K,ie.needsUpdate=$,ie.type=V}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const H=A.target;H.removeEventListener("dispose",Be),gt(H)}function gt(A){Ct(A),Ce.remove(A)}function Ct(A){const H=Ce.get(A).programs;H!==void 0&&(H.forEach(function(K){ye.releaseProgram(K)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,K,$,V,ce){H===null&&(H=Ye);const ve=V.isMesh&&V.matrixWorld.determinant()<0,Me=Ap(A,H,K,$,V);Le.setMaterial($,ve);let Se=K.index,Ue=1;if($.wireframe===!0){if(Se=oe.getWireframeAttribute(K),Se===void 0)return;Ue=2}const ke=K.drawRange,we=K.attributes.position;let Ke=ke.start*Ue,ct=(ke.start+ke.count)*Ue;ce!==null&&(Ke=Math.max(Ke,ce.start*Ue),ct=Math.min(ct,(ce.start+ce.count)*Ue)),Se!==null?(Ke=Math.max(Ke,0),ct=Math.min(ct,Se.count)):we!=null&&(Ke=Math.max(Ke,0),ct=Math.min(ct,we.count));const lt=ct-Ke;if(lt<0||lt===1/0)return;nt.setup(V,$,Me,K,Se);let Vt,Ze=te;if(Se!==null&&(Vt=ne.get(Se),Ze=Pe,Ze.setIndex(Vt)),V.isMesh)$.wireframe===!0?(Le.setLineWidth($.wireframeLinewidth*dt()),Ze.setMode(z.LINES)):Ze.setMode(z.TRIANGLES);else if(V.isLine){let Ae=$.linewidth;Ae===void 0&&(Ae=1),Le.setLineWidth(Ae*dt()),V.isLineSegments?Ze.setMode(z.LINES):V.isLineLoop?Ze.setMode(z.LINE_LOOP):Ze.setMode(z.LINE_STRIP)}else V.isPoints?Ze.setMode(z.POINTS):V.isSprite&&Ze.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ze.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ze.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ae=V._multiDrawStarts,Un=V._multiDrawCounts,Je=V._multiDrawCount,un=Se?ne.get(Se).bytesPerElement:1,Yi=Ce.get($).currentProgram.getUniforms();for(let Wt=0;Wt<Je;Wt++)Yi.setValue(z,"_gl_DrawID",Wt),Ze.render(Ae[Wt]/un,Un[Wt])}else if(V.isInstancedMesh)Ze.renderInstances(Ke,lt,V.count);else if(K.isInstancedBufferGeometry){const Ae=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Un=Math.min(K.instanceCount,Ae);Ze.renderInstances(Ke,lt,Un)}else Ze.render(Ke,lt)};function it(A,H,K){A.transparent===!0&&A.side===Dt&&A.forceSinglePass===!1?(A.side=Rt,A.needsUpdate=!0,qr(A,H,K),A.side=Jn,A.needsUpdate=!0,qr(A,H,K),A.side=Dt):qr(A,H,K)}this.compile=function(A,H,K=null){K===null&&(K=A),g=Xe.get(K),g.init(H),S.push(g),K.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),A!==K&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights();const $=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ce=V.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Me=ce[ve];it(Me,K,V),$.add(Me)}else it(ce,K,V),$.add(ce)}),S.pop(),g=null,$},this.compileAsync=function(A,H,K=null){const $=this.compile(A,H,K);return new Promise(V=>{function ce(){if($.forEach(function(ve){Ce.get(ve).currentProgram.isReady()&&$.delete(ve)}),$.size===0){V(A);return}setTimeout(ce,10)}Ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ln=null;function Nn(A){ln&&ln(A)}function Kl(){Ti.stop()}function $l(){Ti.start()}const Ti=new Kf;Ti.setAnimationLoop(Nn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){ln=A,Q.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},Q.addEventListener("sessionstart",Kl),Q.addEventListener("sessionend",$l),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(H),H=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,H,b),g=Xe.get(A,S.length),g.init(H),S.push(g),Re.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(Re),le=this.localClippingEnabled,Z=J.init(this.clippingPlanes,le),m=xe.get(A,x.length),m.init(),x.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&ha(ce,H,-1/0,v.sortObjects)}ha(A,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(B,q),Fe=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Fe&&he.addToRenderList(m,A),this.info.render.frame++,Z===!0&&J.beginShadows();const K=g.state.shadowsArray;ie.render(K,A,H),Z===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,V=m.transmissive;if(g.setupLights(),H.isArrayCamera){const ce=H.cameras;if(V.length>0)for(let ve=0,Me=ce.length;ve<Me;ve++){const Se=ce[ve];Jl($,V,A,Se)}Fe&&he.render(A);for(let ve=0,Me=ce.length;ve<Me;ve++){const Se=ce[ve];Zl(m,A,Se,Se.viewport)}}else V.length>0&&Jl($,V,A,H),Fe&&he.render(A),Zl(m,A,H);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(v,A,H),nt.resetDefaultState(),E=-1,y=null,S.pop(),S.length>0?(g=S[S.length-1],Z===!0&&J.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ha(A,H,K,$){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){$&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Re);const ve=ee.update(A),Me=A.material;Me.visible&&m.push(A,ve,Me,K,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const ve=ee.update(A),Me=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),De.copy(ve.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(Re)),Array.isArray(Me)){const Se=ve.groups;for(let Ue=0,ke=Se.length;Ue<ke;Ue++){const we=Se[Ue],Ke=Me[we.materialIndex];Ke&&Ke.visible&&m.push(A,ve,Ke,K,De.z,we)}}else Me.visible&&m.push(A,ve,Me,K,De.z,null)}}const ce=A.children;for(let ve=0,Me=ce.length;ve<Me;ve++)ha(ce[ve],H,K,$)}function Zl(A,H,K,$){const V=A.opaque,ce=A.transmissive,ve=A.transparent;g.setupLightsView(K),Z===!0&&J.setGlobalState(v.clippingPlanes,K),$&&Le.viewport(N.copy($)),V.length>0&&Xr(V,H,K),ce.length>0&&Xr(ce,H,K),ve.length>0&&Xr(ve,H,K),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Jl(A,H,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new rn(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?bn:Qn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ce=g.state.transmissionRenderTarget[$.id],ve=$.viewport||N;ce.setSize(ve.z,ve.w);const Me=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(C),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&he.render(K);const Se=v.toneMapping;v.toneMapping=vi;const Ue=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),Z===!0&&J.setGlobalState(v.clippingPlanes,$),Xr(A,K,$),P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let we=0,Ke=H.length;we<Ke;we++){const ct=H[we],lt=ct.object,Vt=ct.geometry,Ze=ct.material,Ae=ct.group;if(Ze.side===Dt&&lt.layers.test($.layers)){const Un=Ze.side;Ze.side=Rt,Ze.needsUpdate=!0,Ql(lt,K,$,Vt,Ze,Ae),Ze.side=Un,Ze.needsUpdate=!0,ke=!0}}ke===!0&&(P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce))}v.setRenderTarget(Me),v.setClearColor(C,U),Ue!==void 0&&($.viewport=Ue),v.toneMapping=Se}function Xr(A,H,K){const $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ce=A.length;V<ce;V++){const ve=A[V],Me=ve.object,Se=ve.geometry,Ue=$===null?ve.material:$,ke=ve.group;Me.layers.test(K.layers)&&Ql(Me,H,K,Se,Ue,ke)}}function Ql(A,H,K,$,V,ce){A.onBeforeRender(v,H,K,$,V,ce),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,H,K,$,A,ce),V.transparent===!0&&V.side===Dt&&V.forceSinglePass===!1?(V.side=Rt,V.needsUpdate=!0,v.renderBufferDirect(K,H,$,V,A,ce),V.side=Jn,V.needsUpdate=!0,v.renderBufferDirect(K,H,$,V,A,ce),V.side=Dt):v.renderBufferDirect(K,H,$,V,A,ce),A.onAfterRender(v,H,K,$,V,ce)}function qr(A,H,K){H.isScene!==!0&&(H=Ye);const $=Ce.get(A),V=g.state.lights,ce=g.state.shadowsArray,ve=V.state.version,Me=ye.getParameters(A,V.state,ce,H,K),Se=ye.getProgramCacheKey(Me);let Ue=$.programs;$.environment=A.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(A.isMeshStandardMaterial?j:w).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ue===void 0&&(A.addEventListener("dispose",Be),Ue=new Map,$.programs=Ue);let ke=Ue.get(Se);if(ke!==void 0){if($.currentProgram===ke&&$.lightsStateVersion===ve)return tu(A,Me),ke}else Me.uniforms=ye.getUniforms(A),A.onBeforeCompile(Me,v),ke=ye.acquireProgram(Me,Se),Ue.set(Se,ke),$.uniforms=Me.uniforms;const we=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(we.clippingPlanes=J.uniform),tu(A,Me),$.needsLights=Rp(A),$.lightsStateVersion=ve,$.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.directionalShadowMap.value=V.state.directionalShadowMap,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotShadowMap.value=V.state.spotShadowMap,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMap.value=V.state.pointShadowMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=ke,$.uniformsList=null,ke}function eu(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=ko.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function tu(A,H){const K=Ce.get(A);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Ap(A,H,K,$,V){H.isScene!==!0&&(H=Ye),P.resetTextureUnits();const ce=H.fog,ve=$.isMeshStandardMaterial?H.environment:null,Me=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ht,Se=($.isMeshStandardMaterial?j:w).get($.envMap||ve),Ue=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ke=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),we=!!K.morphAttributes.position,Ke=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let lt=vi;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(lt=v.toneMapping);const Vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ze=Vt!==void 0?Vt.length:0,Ae=Ce.get($),Un=g.state.lights;if(Z===!0&&(le===!0||A!==y)){const Jt=A===y&&$.id===E;J.setState($,A,Jt)}let Je=!1;$.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Un.state.version||Ae.outputColorSpace!==Me||V.isBatchedMesh&&Ae.batching===!1||!V.isBatchedMesh&&Ae.batching===!0||V.isBatchedMesh&&Ae.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ae.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||V.isSkinnedMesh&&Ae.skinning===!1||!V.isSkinnedMesh&&Ae.skinning===!0||V.isInstancedMesh&&Ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ae.instancingMorph===!1&&V.morphTexture!==null||Ae.envMap!==Se||$.fog===!0&&Ae.fog!==ce||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==J.numPlanes||Ae.numIntersection!==J.numIntersection)||Ae.vertexAlphas!==Ue||Ae.vertexTangents!==ke||Ae.morphTargets!==we||Ae.morphNormals!==Ke||Ae.morphColors!==ct||Ae.toneMapping!==lt||Ae.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Ae.__version=$.version);let un=Ae.currentProgram;Je===!0&&(un=qr($,H,V));let Yi=!1,Wt=!1,qs=!1;const ut=un.getUniforms(),Sn=Ae.uniforms;if(Le.useProgram(un.program)&&(Yi=!0,Wt=!0,qs=!0),$.id!==E&&(E=$.id,Wt=!0),Yi||y!==A){Le.buffers.depth.getReversed()?(ae.copy(A.projectionMatrix),Dm(ae),Nm(ae),ut.setValue(z,"projectionMatrix",ae)):ut.setValue(z,"projectionMatrix",A.projectionMatrix),ut.setValue(z,"viewMatrix",A.matrixWorldInverse);const ni=ut.map.cameraPosition;ni!==void 0&&ni.setValue(z,Ne.setFromMatrixPosition(A.matrixWorld)),We.logarithmicDepthBuffer&&ut.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ut.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Wt=!0,qs=!0)}if(V.isSkinnedMesh){ut.setOptional(z,V,"bindMatrix"),ut.setOptional(z,V,"bindMatrixInverse");const Jt=V.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),ut.setValue(z,"boneTexture",Jt.boneTexture,P))}V.isBatchedMesh&&(ut.setOptional(z,V,"batchingTexture"),ut.setValue(z,"batchingTexture",V._matricesTexture,P),ut.setOptional(z,V,"batchingIdTexture"),ut.setValue(z,"batchingIdTexture",V._indirectTexture,P),ut.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&ut.setValue(z,"batchingColorTexture",V._colorsTexture,P));const Ys=K.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&ge.update(V,K,un),(Wt||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,ut.setValue(z,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=Se,Sn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(Sn.envMapIntensity.value=H.environmentIntensity),Wt&&(ut.setValue(z,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&bp(Sn,qs),ce&&$.fog===!0&&pe.refreshFogUniforms(Sn,ce),pe.refreshMaterialUniforms(Sn,$,O,L,g.state.transmissionRenderTarget[A.id]),ko.upload(z,eu(Ae),Sn,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ko.upload(z,eu(Ae),Sn,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ut.setValue(z,"center",V.center),ut.setValue(z,"modelViewMatrix",V.modelViewMatrix),ut.setValue(z,"normalMatrix",V.normalMatrix),ut.setValue(z,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Jt=$.uniformsGroups;for(let ni=0,ii=Jt.length;ni<ii;ni++){const nu=Jt[ni];k.update(nu,un),k.bind(nu,un)}}return un}function bp(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Rp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,H,K){Ce.get(A.texture).__webglTexture=H,Ce.get(A.depthTexture).__webglTexture=K;const $=Ce.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const K=Ce.get(A);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,K=0){b=A,M=H,R=K;let $=!0,V=null,ce=!1,ve=!1;if(A){const Se=Ce.get(A);if(Se.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(z.FRAMEBUFFER,null),$=!1;else if(Se.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Se.__hasExternalTextures)P.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const we=A.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Ce.has(we)&&(A.width!==we.image.width||A.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Ue=A.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ve=!0);const ke=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[H])?V=ke[H][K]:V=ke[H],ce=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?V=Ce.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[K]:V=ke,N.copy(A.viewport),W.copy(A.scissor),G=A.scissorTest}else N.copy(D).multiplyScalar(O).floor(),W.copy(X).multiplyScalar(O).floor(),G=re;if(Le.bindFramebuffer(z.FRAMEBUFFER,V)&&$&&Le.drawBuffers(A,V),Le.viewport(N),Le.scissor(W),Le.setScissorTest(G),ce){const Se=Ce.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Se.__webglTexture,K)}else if(ve){const Se=Ce.get(A.texture),Ue=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Se.__webglTexture,K||0,Ue)}E=-1},this.readRenderTargetPixels=function(A,H,K,$,V,ce,ve){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){Le.bindFramebuffer(z.FRAMEBUFFER,Me);try{const Se=A.texture,Ue=Se.format,ke=Se.type;if(!We.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-$&&K>=0&&K<=A.height-V&&z.readPixels(H,K,$,V,be.convert(Ue),be.convert(ke),ce)}finally{const Se=b!==null?Ce.get(b).__webglFramebuffer:null;Le.bindFramebuffer(z.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(A,H,K,$,V,ce,ve){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){const Se=A.texture,Ue=Se.format,ke=Se.type;if(!We.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-$&&K>=0&&K<=A.height-V){Le.bindFramebuffer(z.FRAMEBUFFER,Me);const we=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,we),z.bufferData(z.PIXEL_PACK_BUFFER,ce.byteLength,z.STREAM_READ),z.readPixels(H,K,$,V,be.convert(Ue),be.convert(ke),0);const Ke=b!==null?Ce.get(b).__webglFramebuffer:null;Le.bindFramebuffer(z.FRAMEBUFFER,Ke);const ct=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Im(z,ct,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,we),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ce),z.deleteBuffer(we),z.deleteSync(ct),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,K=0){A.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-K),V=Math.floor(A.image.width*$),ce=Math.floor(A.image.height*$),ve=H!==null?H.x:0,Me=H!==null?H.y:0;P.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,ve,Me,V,ce),Le.unbindTexture()},this.copyTextureToTexture=function(A,H,K=null,$=null,V=0){A.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],H=arguments[2],V=arguments[3]||0,K=null);let ce,ve,Me,Se,Ue,ke,we,Ke,ct;const lt=A.isCompressedTexture?A.mipmaps[V]:A.image;K!==null?(ce=K.max.x-K.min.x,ve=K.max.y-K.min.y,Me=K.isBox3?K.max.z-K.min.z:1,Se=K.min.x,Ue=K.min.y,ke=K.isBox3?K.min.z:0):(ce=lt.width,ve=lt.height,Me=lt.depth||1,Se=0,Ue=0,ke=0),$!==null?(we=$.x,Ke=$.y,ct=$.z):(we=0,Ke=0,ct=0);const Vt=be.convert(H.format),Ze=be.convert(H.type);let Ae;H.isData3DTexture?(P.setTexture3D(H,0),Ae=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(P.setTexture2DArray(H,0),Ae=z.TEXTURE_2D_ARRAY):(P.setTexture2D(H,0),Ae=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const Un=z.getParameter(z.UNPACK_ROW_LENGTH),Je=z.getParameter(z.UNPACK_IMAGE_HEIGHT),un=z.getParameter(z.UNPACK_SKIP_PIXELS),Yi=z.getParameter(z.UNPACK_SKIP_ROWS),Wt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,lt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,lt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Se),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ue),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ke);const qs=A.isDataArrayTexture||A.isData3DTexture,ut=H.isDataArrayTexture||H.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Sn=Ce.get(A),Ys=Ce.get(H),Jt=Ce.get(Sn.__renderTarget),ni=Ce.get(Ys.__renderTarget);Le.bindFramebuffer(z.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Le.bindFramebuffer(z.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<Me;ii++)qs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ce.get(A).__webglTexture,V,ke+ii),A.isDepthTexture?(ut&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ce.get(H).__webglTexture,V,ct+ii),z.blitFramebuffer(Se,Ue,ce,ve,we,Ke,ce,ve,z.DEPTH_BUFFER_BIT,z.NEAREST)):ut?z.copyTexSubImage3D(Ae,V,we,Ke,ct+ii,Se,Ue,ce,ve):z.copyTexSubImage2D(Ae,V,we,Ke,ct+ii,Se,Ue,ce,ve);Le.bindFramebuffer(z.READ_FRAMEBUFFER,null),Le.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ut?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ae,V,we,Ke,ct,ce,ve,Me,Vt,Ze,lt.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Ae,V,we,Ke,ct,ce,ve,Me,Vt,lt.data):z.texSubImage3D(Ae,V,we,Ke,ct,ce,ve,Me,Vt,Ze,lt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,V,we,Ke,ce,ve,Vt,Ze,lt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,V,we,Ke,lt.width,lt.height,Vt,lt.data):z.texSubImage2D(z.TEXTURE_2D,V,we,Ke,ce,ve,Vt,Ze,lt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Un),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Je),z.pixelStorei(z.UNPACK_SKIP_PIXELS,un),z.pixelStorei(z.UNPACK_SKIP_ROWS,Yi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Wt),V===0&&H.generateMipmaps&&z.generateMipmap(Ae),Le.unbindTexture()},this.copyTextureToTexture3D=function(A,H,K=null,$=null,V=0){return A.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,A=arguments[2],H=arguments[3],V=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,K,$,V)},this.initRenderTarget=function(A){Ce.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){M=0,R=0,b=null,Le.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class na{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new na(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class td extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tl,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new I;class Pr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class id extends xn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const Js=new I,ls=new I,us=new I,hs=new ue,Qs=new ue,sd=new Oe,po=new I,er=new I,mo=new I,eh=new ue,za=new ue,th=new ue;class Gx extends ft{constructor(e=new id){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nd(t,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new Pr(n,3,0,!1)),cs.setAttribute("uv",new Pr(n,2,3,!1))}this.geometry=cs,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),sd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-us.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;go(po.set(-.5,-.5,0),us,o,ls,s,r),go(er.set(.5,-.5,0),us,o,ls,s,r),go(mo.set(.5,.5,0),us,o,ls,s,r),eh.set(0,0),za.set(1,0),th.set(1,1);let a=e.ray.intersectTriangle(po,er,mo,!1,Js);if(a===null&&(go(er.set(-.5,.5,0),us,o,ls,s,r),za.set(0,1),a=e.ray.intersectTriangle(po,mo,er,!1,Js),a===null))return;const c=e.ray.origin.distanceTo(Js);c<e.near||c>e.far||t.push({distance:c,point:Js.clone(),uv:jt.getInterpolation(Js,po,er,mo,eh,za,th,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function go(i,e,t,n,s,r){hs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Qs.x=r*hs.x-s*hs.y,Qs.y=s*hs.x+r*hs.y):Qs.copy(hs),i.copy(e),i.x+=Qs.x,i.y+=Qs.y,i.applyMatrix4(sd)}const nh=new I,ih=new $e,sh=new $e,Wx=new I,rh=new Oe,_o=new I,Ha=new Pn,oh=new Oe,Va=new Qo;class Xx extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ou,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ha.copy(this.boundingSphere),Ha.applyMatrix4(s),e.ray.intersectsSphere(Ha)!==!1&&(oh.copy(s).invert(),Va.copy(e.ray).applyMatrix4(oh),!(this.boundingBox!==null&&Va.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Va)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===em?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ih.fromBufferAttribute(s.attributes.skinIndex,e),sh.fromBufferAttribute(s.attributes.skinWeight,e),nh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=sh.getComponent(r);if(o!==0){const a=ih.getComponent(r);rh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Wx.copy(nh).applyMatrix4(rh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rd extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class od extends St{constructor(e=null,t=1,n=1,s,r,o,a,c,l=kt,h=kt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ah=new Oe,qx=new Oe;class Cl{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:qx;ah.multiplyMatrices(a,t[r]),ah.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Cl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new od(t,e,e,nn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new rd),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class sl extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new Oe,ch=new Oe,vo=[],lh=new cn,Yx=new Oe,tr=new Ie,nr=new Pn;class ad extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),lh.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(lh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),nr.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),ch.multiplyMatrices(n,fs),tr.matrixWorld=ch,tr.raycast(e,vo);for(let o=0,a=vo.length;o<a;o++){const c=vo[o];c.instanceId=r,c.object=this,t.push(c)}vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new od(new Float32Array(s*this.count),s,this.count,Ml,_n));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class kr extends xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wo=new I,Xo=new I,uh=new Oe,ir=new Qo,xo=new Pn,Ga=new I,hh=new I;class zr extends ft{constructor(e=new xt,t=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Wo.fromBufferAttribute(t,s-1),Xo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Wo.distanceTo(Xo);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;uh.copy(s).invert(),ir.copy(e.ray).applyMatrix4(uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=l){const g=h.getX(_),x=h.getX(_+1),S=yo(this,e,ir,c,g,x);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(d),g=yo(this,e,ir,c,_,m);g&&t.push(g)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=l){const g=yo(this,e,ir,c,_,_+1);g&&t.push(g)}if(this.isLineLoop){const _=yo(this,e,ir,c,p-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yo(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Wo.fromBufferAttribute(o,s),Xo.fromBufferAttribute(o,r),t.distanceSqToSegment(Wo,Xo,Ga,hh)>n)return;Ga.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ga);if(!(c<e.near||c>e.far))return{distance:c,point:hh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const fh=new I,dh=new I;class cd extends zr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)fh.fromBufferAttribute(t,s),dh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fh.distanceTo(dh);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jx extends zr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ld extends xn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ph=new Oe,rl=new Qo,Mo=new Pn,So=new I;class Kx extends ft{constructor(e=new xt,t=new ld){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;ph.copy(s).invert(),rl.copy(e.ray).applyMatrix4(ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const m=l.getX(p);So.fromBufferAttribute(u,m),mh(So,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)So.fromBufferAttribute(u,p),mh(So,p,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mh(i,e,t,n,s,r,o){const a=rl.distanceSqToPoint(i);if(a<t){const c=new I;rl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ud extends St{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ue:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],r=[],o=[],a=new I,c=new Oe;for(let d=0;d<=e;d++){const p=d/e;s[d]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Mt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Mt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pl extends Ln{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ue){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $x extends Pl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const wo=new I,Wa=new Ll,Xa=new Ll,qa=new Ll;class Zx extends Ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(wo.subVectors(s[0],s[1]).add(s[0]),l=wo);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Wa.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,_,m),Xa.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,_,m),qa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Xa.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),qa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Wa.calc(c),Xa.calc(c),qa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Jx(i,e){const t=1-i;return t*t*e}function Qx(i,e){return 2*(1-i)*i*e}function ey(i,e){return i*i*e}function gr(i,e,t,n){return Jx(i,e)+Qx(i,t)+ey(i,n)}function ty(i,e){const t=1-i;return t*t*t*e}function ny(i,e){const t=1-i;return 3*t*t*i*e}function iy(i,e){return 3*(1-i)*i*i*e}function sy(i,e){return i*i*i*e}function _r(i,e,t,n,s){return ty(i,e)+ny(i,t)+iy(i,n)+sy(i,s)}class hd extends Ln{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,s.x,r.x,o.x,a.x),_r(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ry extends Ln{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,s.x,r.x,o.x,a.x),_r(e,s.y,r.y,o.y,a.y),_r(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fd extends Ln{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oy extends Ln{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dd extends Ln{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,s.x,r.x,o.x),gr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ay extends Ln{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,s.x,r.x,o.x),gr(e,s.y,r.y,o.y),gr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pd extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(gh(a,c.x,l.x,h.x,u.x),gh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ue().fromArray(s))}return this}}var _h=Object.freeze({__proto__:null,ArcCurve:$x,CatmullRomCurve3:Zx,CubicBezierCurve:hd,CubicBezierCurve3:ry,EllipseCurve:Pl,LineCurve:fd,LineCurve3:oy,QuadraticBezierCurve:dd,QuadraticBezierCurve3:ay,SplineCurve:pd});class cy extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _h[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new _h[s.type]().fromJSON(s))}return this}}class ly extends cy{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new fd(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new dd(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new hd(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Pl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Il extends xt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Mt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new I,f=new ue,d=new I,p=new I,_=new I;let m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let x=0;x<=t;x++){const S=n+x*h*s,v=Math.sin(S),T=Math.cos(S);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*v,u.y=e[M].y,u.z=e[M].x*T,o.push(u.x,u.y,u.z),f.x=x/t,f.y=M/(e.length-1),a.push(f.x,f.y);const R=c[3*M+0]*v,b=c[3*M+1],E=c[3*M+0]*T;l.push(R,b,E)}}for(let x=0;x<t;x++)for(let S=0;S<e.length-1;S++){const v=S+x*e.length,T=v,M=v+e.length,R=v+e.length+1,b=v+1;r.push(T,M,b),r.push(R,b,M)}this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.points,e.segments,e.phiStart,e.phiLength)}}class Dl extends Il{constructor(e=1,t=1,n=4,s=8){const r=new ly;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Dl(e.radius,e.length,e.capSegments,e.radialSegments)}}class Nl extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new I,h=new ue;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hr extends xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const _=[],m=n/2;let g=0;x(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2));function x(){const v=new I,T=new I;let M=0;const R=(t-e)/n;for(let b=0;b<=r;b++){const E=[],y=b/r,N=y*(t-e)+e;for(let W=0;W<=s;W++){const G=W/s,C=G*c+a,U=Math.sin(C),F=Math.cos(C);T.x=N*U,T.y=-y*n+m,T.z=N*F,u.push(T.x,T.y,T.z),v.set(U,R,F).normalize(),f.push(v.x,v.y,v.z),d.push(G,1-y),E.push(p++)}_.push(E)}for(let b=0;b<s;b++)for(let E=0;E<r;E++){const y=_[E][b],N=_[E+1][b],W=_[E+1][b+1],G=_[E][b+1];(e>0||E!==0)&&(h.push(y,N,G),M+=3),(t>0||E!==r-1)&&(h.push(N,W,G),M+=3)}l.addGroup(g,M,0),g+=M}function S(v){const T=p,M=new ue,R=new I;let b=0;const E=v===!0?e:t,y=v===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),p++;const N=p;for(let W=0;W<=s;W++){const C=W/s*c+a,U=Math.cos(C),F=Math.sin(C);R.x=E*F,R.y=m*y,R.z=E*U,u.push(R.x,R.y,R.z),f.push(0,y,0),M.x=U*.5+.5,M.y=F*.5*y+.5,d.push(M.x,M.y),p++}for(let W=0;W<s;W++){const G=T+W,C=N+W;v===!0?h.push(C,C+1,G):h.push(C+1,C,G),b+=3}l.addGroup(g,b,v===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const To=new I,Eo=new I,Ya=new I,Ao=new jt;class uy extends xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ss*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:m,c:g}=Ao;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Ao.getNormal(Ya),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const S=(x+1)%3,v=u[x],T=u[S],M=Ao[h[x]],R=Ao[h[S]],b=`${v}_${T}`,E=`${T}_${v}`;E in f&&f[E]?(Ya.dot(f[E].normal)<=r&&(d.push(M.x,M.y,M.z),d.push(R.x,R.y,R.z)),f[E]=null):b in f||(f[b]={index0:l[x],index1:l[S],normal:Ya.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:m}=f[p];To.fromBufferAttribute(a,_),Eo.fromBufferAttribute(a,m),d.push(To.x,To.y,To.z),d.push(Eo.x,Eo.y,Eo.z)}this.setAttribute("position",new at(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ia extends xt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const f=(t-e)/s,d=new I,p=new ue;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const g=r+m/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let g=0;g<n;g++){const x=g+m,S=x,v=x+n+1,T=x+n+2,M=x+1;a.push(S,v,M),a.push(v,T,M)}}this.setIndex(a),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wi extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,f=new I,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const x=[],S=g/n;let v=0;g===0&&o===0?v=.5/t:g===n&&c===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const M=T/t;u.x=-e*Math.cos(s+M*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+M*r)*Math.sin(o+S*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(M+v,1-S),x.push(l++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const S=h[g][x+1],v=h[g][x],T=h[g+1][x],M=h[g+1][x+1];(g!==0||o>0)&&d.push(S,v,M),(g!==n-1||c<Math.PI)&&d.push(v,T,M)}this.setIndex(d),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hy extends At{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class pt extends xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends pt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function bo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function dy(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function vh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function md(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Vr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class py extends Vr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_s,endingEnd:_s}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vs:r=e,a=2*t-n;break;case Vo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vs:o=e,c=2*n-t;break;case Vo:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,x=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,S=(-1-d)*m+(1.5+d)*_+.5*p,v=d*m-d*_;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+x*o[l+T]+S*o[c+T]+v*o[u+T];return r}}class gd extends Vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class my extends Vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new my(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new py(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case br:t=this.InterpolantFactoryMethodLinear;break;case fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&fy(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=br;class Hs extends Dn{constructor(e,t,n){super(e,t,n)}}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Ar;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class _d extends Dn{}_d.prototype.ValueTypeName="color";class Ns extends Dn{}Ns.prototype.ValueTypeName="number";class gy extends Vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)$t.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Us extends Dn{InterpolantFactoryMethodLinear(e){return new gy(this.times,this.values,this.getValueSize(),e)}}Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends Dn{constructor(e,t,n){super(e,t,n)}}Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=Ar;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Vi extends Dn{}Vi.prototype.ValueTypeName="vector";class qo{constructor(e="",t=-1,n=[],s=El){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(vy(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=dy(c);c=vh(c,1,h),l=vh(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ns(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,_){if(d.length!==0){const m=[],g=[];md(d,m,g,p),m.length!==0&&_.push(new u(f,m,g))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let x=0;x!==f[p].morphTargets.length;++x){const S=f[p];m.push(S.time),g.push(S.morphTarget===_?1:0)}s.push(new Ns(".morphTargetInfluence["+_+"]",m,g))}c=d.length*o}else{const d=".bones["+t[u].name+"]";n(Vi,d+".position",f,"pos",s),n(Us,d+".quaternion",f,"rot",s),n(Vi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _y(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ns;case"vector":case"vector2":case"vector3":case"vector4":return Vi;case"color":return _d;case"quaternion":return Us;case"bool":case"boolean":return Hs;case"string":return Vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function vy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_y(i.type);if(i.times===void 0){const t=[],n=[];md(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class xy{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}}const yy=new xy;class Gs{constructor(e){this.manager=e!==void 0?e:yy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class My extends Error{constructor(e,t){super(e),this.response=t}}class vd extends Gs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:s});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Hn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){u.read().then(({done:S,value:v})=>{if(S)g.close();else{_+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let M=0,R=h.length;M<R;M++){const b=h[M];b.onProgress&&b.onProgress(T)}g.enqueue(v),x()}},S=>{g.error(S)})}}});return new Response(m)}else throw new My(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{gi.add(e,l);const h=Hn[e];delete Hn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Hn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Hn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sy extends Gs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Rr("img");function c(){h(),gi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class xd extends Gs{constructor(e){super(e)}load(e,t,n,s){const r=new St,o=new Sy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class sa extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yd extends sa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ja=new Oe,xh=new I,yh=new I;class Ul{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(xh),yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yh),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wy extends Ul{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ty extends sa{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mh=new Oe,sr=new I,Ka=new I;class Ey extends Ul{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(sr),Ka.copy(n.position),Ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ka),n.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),Mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh)}}class ra extends sa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ey}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ay extends Ul{constructor(){super(new ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ol extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Ay}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class by extends Gs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return gi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),gi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(e,c),r.manager.itemStart(e)}}class Md{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Sh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sh(){return performance.now()}class Ry{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){$t.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;$t.multiplyQuaternionsFlat(e,o,e,t,e,n),$t.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Fl="\\[\\]\\.:\\/",Cy=new RegExp("["+Fl+"]","g"),Bl="[^"+Fl+"]",Py="[^"+Fl.replace("\\.","")+"]",Ly=/((?:WC+[\/:])*)/.source.replace("WC",Bl),Iy=/(WCOD+)?/.source.replace("WCOD",Py),Dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),Ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),Uy=new RegExp("^"+Ly+Iy+Dy+Ny+"$"),Oy=["material","materials","bones","map"];class Fy{constructor(e,t,n){const s=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cy,"")}static parseTrackName(e){const t=Uy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Oy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Fy;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class By{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:_s,endingEnd:_s};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=tm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case im:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case El:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===nm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Uf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=vs,s.endingEnd=vs):(e?s.endingStart=this.zeroSlopeAtStart?vs:_s:s.endingStart=Vo,t?s.endingEnd=this.zeroSlopeAtEnd?vs:_s:s.endingEnd=Vo)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const ky=new Float32Array(1);class zy extends Wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const f=s[u],d=f.name;let p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new Ry(Qe.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new gd(new Float32Array(2),new Float32Array(2),1,ky),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?qo.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=El),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new By(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?qo.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);const Sd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hy=new ea(-1,1,1,-1,0,1);class Vy extends xt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const Gy=new Vy;class kl{constructor(e){this._mesh=new Ie(Gy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wy extends Ws{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cr.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new kl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wh extends Ws{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Xy extends Ws{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wy(Sd),this.copyPass.material.blending=Kn,this.clock=new Md}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wh!==void 0&&(o instanceof wh?n=!0:o instanceof Xy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yy extends Ws{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ee}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const jy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Os extends Ws{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Ee(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(r,o,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new rn(r,o,{type:bn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new rn(r,o,{type:bn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=jy;this.highPassUniforms=Cr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ue(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Sd;this.copyUniforms=Cr.clone(h.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:wr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ee,this.oldClearAlpha=1,this.basic=new _t,this.fsQuad=new kl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ue(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Os.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Os.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Os.BlurDirectionX=new ue(1,0);Os.BlurDirectionY=new ue(0,1);const Ky={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $y extends Ws{constructor(){super();const e=Ky;this.uniforms=Cr.clone(e.uniforms),this.material=new hy({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new kl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zy extends td{constructor(){super();const e=new Gt;e.deleteAttribute("uv");const t=new pt({side:Rt}),n=new pt,s=new ra(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ie(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ie(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ie(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Ie(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Ie(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Ie(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Ie(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new Ie(e,ds(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Ie(e,ds(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const p=new Ie(e,ds(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const _=new Ie(e,ds(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Ie(e,ds(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const g=new Ie(e,ds(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ds(i){const e=new _t;return e.color.setScalar(i),e}const mn=Object.freeze({startingWallet:100,spawnFee:10,botBounty:10,headshotBonus:2,extractSeconds:3}),Tn=Object.freeze({height:1.7,radius:.4,walkSpeed:7,sprintSpeed:11,jumpVelocity:7.5,gravity:22,maxHealth:100}),dr=Object.freeze({rifle:Object.freeze({id:"rifle",name:"VX-9 Pulse Rifle",kind:"gun",automatic:!0,damage:22,headshotMultiplier:2,fireIntervalMs:110,magazineSize:30,reloadMs:1400,range:120,spreadRad:.012,adsSpreadRad:.004,adsFov:55,recoil:.006,scope:!1}),sniper:Object.freeze({id:"sniper",name:"K-50 Longshot",kind:"gun",automatic:!1,damage:80,headshotMultiplier:2,fireIntervalMs:1200,magazineSize:5,reloadMs:2600,range:250,spreadRad:.07,adsSpreadRad:0,adsFov:20,recoil:.045,scope:!0}),knife:Object.freeze({id:"knife",name:"Pisau",kind:"melee",automatic:!0,damage:55,headshotMultiplier:1.5,fireIntervalMs:500,magazineSize:1/0,reloadMs:0,range:2.4,spreadRad:0,adsSpreadRad:0,adsFov:null,recoil:0,scope:!1})}),wn=Object.freeze(["rifle","sniper","knife"]),pi=Object.freeze({fov:78,adsSpeed:10,switchSeconds:.35}),pn=Object.freeze({count:6,maxHealth:100,speed:4.2,damage:7,fireIntervalMs:650,viewRange:45,preferredRange:14,respawnMs:4e3,accuracyNear:.55,accuracyFar:.12}),En=Object.freeze({size:80,wallHeight:6}),Lr=Object.freeze({maxPixelRatio:1.5,shadowMapSize:2048,msaaSamples:4,bloom:{strength:.9,radius:.45,threshold:.55}}),wd=["x","y","z"],Th=1e-4,Jy=32;function Mi(i,e,t,n,s,r){return{min:{x:i,y:e,z:t},max:{x:n,y:s,z:r}}}function ol(i,e,t){let n=0,s=1/0;for(const r of wd){const o=i[r],a=e[r],c=t.min[r],l=t.max[r];if(Math.abs(a)<1e-9){if(o<c||o>l)return null;continue}const h=(c-o)/a,u=(l-o)/a;if(n=Math.max(n,Math.min(h,u)),s=Math.min(s,Math.max(h,u)),n>s)return null}return n}function Qy(i,e,t){const n={x:e.x-i.x,y:e.y-i.y,z:e.z-i.z};return t.some(s=>{const r=ol(i,n,s);return r!==null&&r<1})}function eM(i,e,t){return i.x+e.radius>t.min.x&&i.x-e.radius<t.max.x&&i.z+e.radius>t.min.z&&i.z-e.radius<t.max.z&&i.y+e.height>t.min.y&&i.y<t.max.y}function Td(i,e,t,n,s){const r={...i},o={...e};let a=!1;const c=s.radius*.5,l=Math.max(...wd.map(f=>Math.abs(o[f]*t))),h=Math.min(Jy,Math.max(1,Math.ceil(l/c))),u=t/h;for(let f=0;f<h;f++)for(const d of["x","z","y"]){const p=o[d]*u;if(p!==0){r[d]+=p;for(const _ of n)if(eM(r,s,_)){if(d==="y")p<0?(r.y=_.max.y,a=!0):r.y=_.min.y-s.height-Th;else{const m=s.radius+Th;r[d]=p>0?_.min[d]-m:_.max[d]+m}o[d]=0}}}return r.y<=0&&(r.y=0,o.y=Math.max(o.y,0),a=!0),{position:r,velocity:o,onGround:a}}const ht={cyan:2287359,magenta:16723920,green:3800968,amber:16756782},tM=[[0,0,10,10,1.2,ht.cyan],[0,-7,4,2,.6,ht.cyan],[0,7,4,2,.6,ht.cyan],[-16,-12,3,8,2.4,ht.magenta],[16,12,3,8,2.4,ht.magenta],[-16,14,8,3,2.4,ht.green],[16,-14,8,3,2.4,ht.green],[-28,0,2,12,3.5,ht.amber],[28,0,2,12,3.5,ht.amber],[0,-26,12,2,3.5,ht.amber],[0,26,12,2,3.5,ht.amber],[-9,-20,2,2,1.1,ht.cyan],[9,20,2,2,1.1,ht.cyan],[-24,-26,4,4,1.6,ht.magenta],[24,26,4,4,1.6,ht.magenta],[-6,14,2,2,1.8,ht.green],[6,-14,2,2,1.8,ht.green]],nM=[[-10,-10],[10,-10],[-10,10],[10,10]];function iM(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#0b0f1c",t.fillRect(0,0,256,256),t.strokeStyle="rgba(60, 120, 255, 0.35)",t.lineWidth=2,t.strokeRect(1,1,254,254),t.strokeStyle="rgba(60, 120, 255, 0.12)",t.lineWidth=1,t.beginPath(),t.moveTo(256/2,0),t.lineTo(256/2,256),t.moveTo(0,256/2),t.lineTo(256,256/2),t.stroke();const n=new ud(e);return n.wrapS=Rn,n.wrapT=Rn,n.repeat.set(En.size/4,En.size/4),n.anisotropy=4,n.colorSpace=yt,n}function sM(){const i=new wi(150,32,16),e=new At({side:Rt,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ee(1182266)},horizon:{value:new Ee(3805007)},glow:{value:new Ee(2287359)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 top; uniform vec3 horizon; uniform vec3 glow;
      varying vec3 vDir;
      float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
      void main() {
        float h = clamp(vDir.y, 0.0, 1.0);
        vec3 col = mix(horizon, top, pow(h, 0.5));
        col += glow * pow(1.0 - h, 12.0) * 0.35;
        vec3 cell = floor(vDir * 220.0);
        float star = step(0.9975, hash(cell)) * smoothstep(0.05, 0.4, h);
        col += vec3(star);
        gl_FragColor = vec4(col, 1.0);
      }`});return new Ie(i,e)}function ps(i,e,t,n,s,r,o,a,c=0){const l=new Gt(s,o,r),h=new Ie(l,new pt({color:2765136,roughness:.45,metalness:.35}));h.position.set(t,c+o/2,n),h.castShadow=!0,h.receiveShadow=!0,i.add(h);const u=new cd(new uy(l),new kr({color:a}));u.position.copy(h.position),i.add(u),e.push(Mi(t-s/2,c,n-r/2,t+s/2,c+o,n+r/2))}function rM(i,e){const t=new Ie(new ia(2.2,2.6,48),new _t({color:ht.green,side:Dt,transparent:!0,opacity:.9}));t.rotation.x=-Math.PI/2,t.position.set(e.x,.02,e.z),i.add(t);const n=new Ie(new Hr(2.4,2.4,14,32,1,!0),new _t({color:ht.green,transparent:!0,opacity:.08,side:Dt,depthWrite:!1,blending:wr}));n.position.set(e.x,7,e.z),i.add(n);const s=new ra(ht.green,30,14,2);return s.position.set(e.x,2,e.z),i.add(s),{ring:t,beam:n}}function oM(i){const e=new bt,t=[],n=En.size/2;i.background=new Ee(329229),i.fog=new na(1706800,30,110),e.add(sM()),i.add(new yd(9084159,2758208,1.6));const s=new Ol(14213375,2.4);s.position.set(20,40,15),s.castShadow=!0;const r=n*1.45;s.shadow.mapSize.set(Lr.shadowMapSize,Lr.shadowMapSize),s.shadow.camera.left=-r,s.shadow.camera.right=r,s.shadow.camera.top=r,s.shadow.camera.bottom=-r,s.shadow.camera.far=120,s.shadow.bias=-5e-4,i.add(s);const o=new Ie(new ei(En.size,En.size),new pt({map:iM(),roughness:.55,metalness:.1}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,e.add(o);const a=1,c=En.wallHeight;ps(e,t,0,-n-a/2,En.size+2*a,a,c,ht.magenta),ps(e,t,0,n+a/2,En.size+2*a,a,c,ht.magenta),ps(e,t,-n-a/2,0,a,En.size,c,ht.magenta),ps(e,t,n+a/2,0,a,En.size,c,ht.magenta),tM.forEach(([d,p,_,m,g,x])=>ps(e,t,d,p,_,m,g,x)),nM.forEach(([d,p])=>ps(e,t,d,p,1.2,1.2,9,ht.cyan));const l={x:-n+6,z:n-6},h=rM(e,l);i.add(e);const u=[{x:n-6,z:-n+6},{x:n-6,z:n-10},{x:-n+10,z:-n+6}];return{colliders:t,playerSpawns:u,botSpawns:[{x:-20,z:-30},{x:20,z:30},{x:-32,z:12},{x:32,z:-12},{x:0,z:-18},{x:0,z:18},{x:-12,z:30},{x:12,z:-30}],extractZone:{...l,radius:2.4},update(d){h.ring.rotation.z=d*.6,h.beam.material.opacity=.06+Math.sin(d*3)*.03}}}function Eh(i,e){if(e===sm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===el||e===Of){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===el)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Ed extends Gs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new EM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=vr.extractUrlBase(e);o=vr.resolveURL(l,this.path)}else o=vr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new vd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ad){try{o[Ge.KHR_BINARY_GLTF]=new AM(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new kM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:o[u]=new lM;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[u]=new bM(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[u]=new RM;break;case Ge.KHR_MESH_QUANTIZATION:o[u]=new CM;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function aM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cM{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ee(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ht);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ol(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ra(h),l.distance=u;break;case"spot":l=new Ty(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class lM{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return _t}extendParams(e,t,n){const s=[];e.color=new Ee(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}}class uM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class hM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(a,a)}return Promise.all(r)}}class fM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class dM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class pM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ht)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class mM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class gM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(a[0],a[1],a[2],Ht),Promise.all(r)}}class _M{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class vM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(a[0],a[1],a[2],Ht),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}}class xM{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class MM{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class SM{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wM{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class TM{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class EM{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==en.TRIANGLES&&l.mode!==en.TRIANGLE_STRIP&&l.mode!==en.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const p of u){const _=new Oe,m=new I,g=new $t,x=new I(1,1,1),S=new ad(p.geometry,p.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),S.setMatrixAt(v,_.compose(m,g,x));for(const v in c)if(v==="_COLOR_0"){const T=c[v];S.instanceColor=new sl(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,c[v]);ft.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),d.push(S)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Ad="glTF",rr=12,Ah={JSON:1313821514,BIN:5130562};class AM{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ad)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-rr,r=new DataView(e,rr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Ah.JSON){const l=new Uint8Array(e,rr+o,a);this.content=n.decode(l)}else if(c===Ah.BIN){const l=rr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=al[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=al[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Ts[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(const p in d.attributes){const _=d.attributes[p],m=c[p];m!==void 0&&(_.normalized=m)}u(d)},a,l,Ht,f)})})}}class RM{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class CM{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class bd extends Vr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,_=p-l,m=-2*d+3*f,g=d-f,x=1-m,S=g-f+u;for(let v=0;v!==a;v++){const T=o[_+v+a],M=o[_+v+c]*h,R=o[p+v+a],b=o[p+v]*h;r[v]=x*T+S*M+m*R+g*b}return r}}const PM=new $t;class LM extends bd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return PM.fromArray(r).normalize().toArray(r),r}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bh={9728:kt,9729:Kt,9984:Ef,9985:Do,9986:ur,9987:Yn},Rh={33071:qn,33648:Tr,10497:Rn},$a={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},al={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},IM={CUBICSPLINE:void 0,LINEAR:br,STEP:Ar},Za={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new pt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function Li(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function NM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function UM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function OM(i){let e;const t=i.extensions&&i.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ja(t.attributes):e=i.indices+":"+Ja(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ja(i.targets[n]);return e}function Ja(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function cl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const BM=new Oe;class kM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new xd(this.options.manager):this.textureLoader=new by(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Li(r,a,s),Gn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(vr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=$a[s.type],a=Ts[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new zt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=$a[s.type],l=Ts[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let _,m;if(d&&d!==u){const g=Math.floor(f/d),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let S=t.cache.get(x);S||(_=new l(a,g*d,s.count*d/h),S=new nd(_,d/h),t.cache.add(x,S)),m=new Pr(S,c,f%d/h,p)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new zt(_,c,p);if(s.sparse!==void 0){const g=$a.SCALAR,x=Ts[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,T=new x(o[1],S,s.sparse.count*g),M=new l(o[2],v,s.sparse.count*c);a!==null&&(m=new zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,b=T.length;R<b;R++){const E=T[R];if(m.setX(E,M[R*c]),c>=2&&m.setY(E,M[R*c+1]),c>=3&&m.setZ(E,M[R*c+2]),c>=4&&m.setW(E,M[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=bh[f.magFilter]||Kt,h.minFilter=bh[f.minFilter]||Yn,h.wrapS=Rh[f.wrapS]||Rn,h.wrapT=Rh[f.wrapT]||Rn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kt&&h.minFilter!==Kt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(_){const m=new St(_);m.needsUpdate=!0,f(m)}),t.load(vr.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Gn(u,o),u.userData.mimeType=o.mimeType||FM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ld,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new kr,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return pt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ge.KHR_MATERIALS_UNLIT]){const u=s[Ge.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ht),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,yt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Dt);const h=r.alphaMode||Za.OPAQUE;if(h===Za.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Za.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==_t&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==_t&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==_t){const u=r.emissiveFactor;a.emissive=new Ee().setRGB(u[0],u[1],u[2],Ht)}return r.emissiveTexture!==void 0&&o!==_t&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Gn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Li(s,u,r),u})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ch(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=OM(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Ch(new xt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?DM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){const _=h[d],m=o[d];let g;const x=l[d];if(m.mode===en.TRIANGLES||m.mode===en.TRIANGLE_STRIP||m.mode===en.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new Xx(_,x):new Ie(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===en.TRIANGLE_STRIP?g.geometry=Eh(g.geometry,Of):m.mode===en.TRIANGLE_FAN&&(g.geometry=Eh(g.geometry,el));else if(m.mode===en.LINES)g=new cd(_,x);else if(m.mode===en.LINE_STRIP)g=new zr(_,x);else if(m.mode===en.LINE_LOOP)g=new jx(_,x);else if(m.mode===en.POINTS)g=new Kx(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&UM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Gn(g,r),m.extensions&&Li(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Li(s,u[0],r),u[0];const f=new bt;r.extensions&&Li(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(Bi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ea(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new Oe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Cl(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],p=s.samplers[d.sampler],_=d.target,m=_.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,x=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",x)),l.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let x=0,S=f.length;x<S;x++){const v=f[x],T=d[x],M=p[x],R=_[x],b=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const E=n._createAnimationTracks(v,T,M,R,b);if(E)for(let y=0;y<E.length;y++)g.push(E[y])}return new qo(r,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,BM)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new rd:l.length>1?h=new bt:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Gn(h,r),r.extensions&&Li(n,h,r),r.matrix!==void 0){const u=new Oe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new bt;n.name&&(r.name=s.createUniqueName(n.name)),Gn(r,n),n.extensions&&Li(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof xn||f instanceof St)&&u.set(f,d);return h.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];ui[r.path]===ui.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ui[r.path]){case ui.weights:l=Ns;break;case ui.rotation:l=Us;break;case ui.position:case ui.scale:l=Vi;break;default:switch(n.itemSize){case 1:l=Ns;break;case 2:case 3:default:l=Vi;break}break}const h=s.interpolation!==void 0?IM[s.interpolation]:br,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const p=new l(c[f]+"."+ui[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=cl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Us?LM:bd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zM(i,e,t){const n=e.attributes,s=new cn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const h=cl(Ts[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const _=cl(Ts[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Pn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Ch(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=al[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return qe.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Gn(i,e),zM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?NM(i,e.targets,t):i})}const ms={width:72,depth:52},Yt={height:2.2,thickness:.4,fence:2,wire:.8},Wn={width:2.44,height:2.6,short:6.1,long:12.2,ribPitch:2.8},ll=12097136,HM={rust:10834490,blue:4285839,green:5927750,grey:10724251,tan:12096358,white:14276300},Ph=[[-22,-15,"long",!1,1,"rust"],[-6,-15,"short",!1,0,"blue"],[14,-15,"long",!1,1,"green"],[-30,-4,"short",!0,0,"grey"],[-12,-4,"long",!1,0,"tan"],[5,-4,"short",!0,0,"rust"],[22,-4,"long",!1,0,"blue"],[31,-18,"short",!0,1,"white"],[-24,12,"long",!1,1,"green"],[9,12,"short",!1,0,"grey"],[23,12,"short",!0,0,"rust"],[-8,18,"short",!1,0,"blue"],[30,20,"short",!0,0,"tan"],[-32,22,"short",!1,0,"rust"],[-28,-21,"short",!1,0,"tan"],[10,-22,"short",!1,0,"rust"],[-2,10,"long",!0,0,"grey"],[16,-9,"short",!0,1,"blue"],[-20,20,"short",!0,0,"blue"],[33,8,"long",!0,0,"grey"]],Rd=[{id:"humvee",file:"models/props/humvee.glb",x:-15,z:6,rot:25,size:4.8,axis:"horizontal"},{id:"sedan",file:"models/props/sedan.glb",x:3,z:5,rot:-60,size:4.7,axis:"horizontal"},{id:"booth",file:"models/props/booth.glb",x:24,z:-22.5,rot:180,size:3,axis:"vertical"},{id:"sandbag1",file:"models/props/sandbag.glb",x:-1,z:-9,rot:0,size:3.2,axis:"horizontal"},{id:"sandbag2",file:"models/props/sandbag.glb",x:28,z:5,rot:90,size:3.2,axis:"horizontal"},{id:"sandbag3",file:"models/props/sandbag.glb",x:-29,z:4,rot:-90,size:3.2,axis:"horizontal"},{id:"sandbag4",file:"models/props/sandbag.glb",x:14,z:18,rot:180,size:3.2,axis:"horizontal"}],VM=[[0,0,44,90],[-20,0,30,0],[17,4,24,0]],GM=new xd,WM=new Ed;function hi(i,{repeat:e=[1,1],mirror:t=!1,color:n=!0}={}){const s=GM.load(i);return s.wrapS=t?Tr:Rn,s.wrapT=s.wrapS,s.repeat.set(...e),s.anisotropy=8,n&&(s.colorSpace=yt),s}function Es(i,e,t){const n=i.clone();return n.repeat.set(e,t),n.needsUpdate=!0,n}function XM(i){const e=new At({side:Rt,depthWrite:!1,fog:!1,uniforms:{pano:{value:i},haze:{value:new Ee(ll)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D pano; uniform vec3 haze;
      varying vec3 vDir;
      void main() {
        float u = atan(vDir.z, vDir.x) / 6.2831853 + 0.5;
        float v = clamp(vDir.y / 0.75, 0.0, 1.0);
        vec3 sky = texture2D(pano, vec2(u, 0.08 + v * 0.9)).rgb;
        // Di bawah horizon pakai warna kabut supaya menyatu dengan tanah di kejauhan.
        float below = smoothstep(0.02, -0.08, vDir.y);
        gl_FragColor = vec4(mix(sky, haze, below), 1.0);
        #include <colorspace_fragment>
      }`});return new Ie(new wi(180,48,24),e)}function qM(i){return new Gt(i,Wn.height,Wn.width)}function YM(i,e,t){const n={short:0,long:0};Ph.forEach(([,,h,,u])=>{n[h]+=u+1});const s={};for(const h of["short","long"]){const u=Wn[h],f=u/Wn.ribPitch,d=new pt({map:Es(t.side,f,1),roughness:.7,metalness:.35}),p=new pt({map:Es(t.side,f,1),roughness:.8,metalness:.3}),_=new pt({map:t.door,roughness:.7,metalness:.35}),m=new ad(qM(u),[_,_,p,p,d,d],n[h]);m.castShadow=!0,m.receiveShadow=!0,s[h]={mesh:m,next:0},i.add(m)}const r=new Oe,o=new $t,a=new I(1,1,1),c=new Ee,l=new I(0,1,0);Ph.forEach(([h,u,f,d,p,_])=>{const m=Wn[f],g=s[f];for(let v=0;v<=p;v++)o.setFromAxisAngle(l,d?Math.PI/2:0),r.compose(new I(h,Wn.height*(v+.5),u),o,a),g.mesh.setMatrixAt(g.next,r),c.setHex(HM[_]).multiplyScalar(v===0?1:.85+Math.random()*.2),g.mesh.setColorAt(g.next,c),g.next+=1;const x=(d?Wn.width:m)/2,S=(d?m:Wn.width)/2;e.push(Mi(h-x,0,u-S,h+x,Wn.height*(p+1),u+S))}),Object.values(s).forEach(({mesh:h})=>{h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0)})}function Ro(i,e,t,n,s,r,o){const a=o?r:Yt.thickness,c=o?Yt.thickness:r,l=new Ie(new Gt(a,Yt.height,c),new pt({map:Es(t.concrete,r/4,Yt.height/4),roughness:.9}));l.position.set(n,Yt.height/2,s),l.castShadow=!0,l.receiveShadow=!0,i.add(l);const h=new Ie(new ei(r,Yt.fence),new pt({map:Es(t.fence,r/2,Yt.fence/2),alphaTest:.45,side:Dt,metalness:.6,roughness:.5}));h.position.set(n,Yt.height+Yt.fence/2,s),o||(h.rotation.y=Math.PI/2),i.add(h);const u=new Ie(new ei(r,Yt.wire),new pt({map:Es(t.wire,r/4,1),alphaTest:.45,side:Dt,metalness:.7,roughness:.4}));u.position.set(n,Yt.height+Yt.fence+Yt.wire/2,s),o||(u.rotation.y=Math.PI/2),i.add(u),e.push(Mi(n-a/2,0,s-c/2,n+a/2,8,s+c/2))}function jM(i,e){VM.forEach(([t,n,s,r])=>{const o=new pt({map:Es(e.tracks,1,s/3),transparent:!0,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2}),a=new Ie(new ei(2.6,s),o);a.rotation.set(-Math.PI/2,0,Bi.degToRad(r)),a.position.set(t,.01,n),a.receiveShadow=!0,i.add(a)})}async function KM(i){const t=(await WM.loadAsync(i.file)).scene;t.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)});const n=new cn().setFromObject(t),s=n.getSize(new I),r=i.axis==="vertical"?s.y:Math.max(s.x,s.z),o=i.size/Math.max(r,.001);t.scale.setScalar(o);const a=n.getCenter(new I);return t.position.set(-a.x*o,-n.min.y*o,-a.z*o),t}function $M(i){const e=i.axis==="vertical"?i.size:1.4,t=new Ie(new Gt(i.axis==="vertical"?2.4:i.size,e,i.axis==="vertical"?2.4:1.8),new pt({color:8022608,roughness:.9}));return t.position.y=e/2,t.castShadow=!0,t}async function ZM(i,e){const t=new Map;return(await Promise.all(Rd.map(async s=>{t.has(s.file)||t.set(s.file,KM(s).catch(()=>null));const r=await t.get(s.file),o=new bt;o.add(r?r.clone():$M(s)),o.position.set(s.x,0,s.z),o.rotation.y=Bi.degToRad(s.rot),i.add(o),o.updateMatrixWorld(!0);const a=new cn().setFromObject(o),c=.15;return e.push(Mi(a.min.x+c,0,a.min.z+c,a.max.x-c,a.max.y,a.max.z-c)),!!r}))).filter(Boolean).length}function JM(i,e){const t=new Ie(new ia(2.2,2.6,48),new _t({color:3800968,side:Dt,transparent:!0,opacity:.9}));t.rotation.x=-Math.PI/2,t.position.set(e.x,.03,e.z),i.add(t);const n=new Ie(new Hr(2.4,2.4,10,32,1,!0),new _t({color:3800968,transparent:!0,opacity:.1,side:Dt,depthWrite:!1,blending:wr}));return n.position.set(e.x,5,e.z),i.add(n),{ring:t,beam:n}}async function QM(i){const e=new bt,t=[],n=ms.width/2,s=ms.depth/2,r={side:hi("textures/container_side.jpg"),door:hi("textures/container_door.jpg"),concrete:hi("textures/concrete.jpg"),sand:hi("textures/sand.jpg",{repeat:[30,30],mirror:!0}),tracks:hi("textures/tire_tracks.png"),fence:hi("textures/chainlink.png"),wire:hi("textures/razor_wire.png"),sky:hi("textures/sky_desert.jpg")};r.sky.wrapS=Rn,r.sky.wrapT=qn,i.background=new Ee(ll),i.fog=new na(ll,40,160),e.add(XM(r.sky)),i.add(new yd(11125484,7033400,.75));const o=new Ol(16766883,2.1);o.position.set(35,45,20),o.castShadow=!0;const a=Math.max(n,s)*1.45;o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-a,right:a,top:a,bottom:-a,far:140}),o.shadow.bias=-4e-4,o.shadow.normalBias=.02,i.add(o);const c=new Ie(new ei(240,240),new pt({map:r.sand,color:13616048,roughness:1}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,e.add(c),YM(e,t,r),Ro(e,t,r,0,-s,ms.width,!0),Ro(e,t,r,0,s,ms.width,!0),Ro(e,t,r,-n,0,ms.depth,!1),Ro(e,t,r,n,0,ms.depth,!1),jM(e,r);const l=await ZM(e,t),h={x:25,z:-14},u=JM(e,h);return i.add(e),{name:"DOCKYARD",propsLoaded:l,propsTotal:Rd.length,colliders:t,playerSpawns:[{x:4,z:23},{x:18,z:23},{x:-12,z:23}],botSpawns:[{x:-14,z:-22},{x:4,z:-22},{x:-32,z:-12},{x:22,z:-10},{x:-4,z:0},{x:14,z:2},{x:-24,z:4},{x:31,z:-6}],extractZone:{...h,radius:2.4},bloom:{strength:.3,radius:.35,threshold:.92},environmentIntensity:.35,update(f){u.ring.rotation.z=f*.6,u.beam.material.opacity=.08+Math.sin(f*3)*.03}}}function eS(i){const e=new Set,t={lookX:0,lookY:0,firing:!1,aiming:!1,locked:!1,wheel:0,slot:null},n={lockChange:[],lockError:[]},s={Digit1:0,Digit2:1,Digit3:2},r=new URLSearchParams(window.location.search).has("nolock");function o(){t.firing=!1,t.aiming=!1}function a(c){t.locked=c,c||o(),n.lockChange.forEach(l=>l(c))}return window.addEventListener("keydown",c=>{e.add(c.code),t.locked&&["Space","Tab"].includes(c.code)&&c.preventDefault(),t.locked&&c.code in s&&(t.slot=s[c.code])}),window.addEventListener("keyup",c=>e.delete(c.code)),window.addEventListener("blur",()=>{e.clear(),o()}),i.addEventListener("mousedown",c=>{t.locked&&(c.button===0&&(t.firing=!0),c.button===2&&(t.aiming=!0))}),i.addEventListener("contextmenu",c=>c.preventDefault()),i.addEventListener("wheel",c=>{t.locked&&(c.preventDefault(),t.wheel+=Math.sign(c.deltaY))},{passive:!1}),i.addEventListener("mouseleave",()=>{r&&o()}),window.addEventListener("mouseup",c=>{c.button===0&&(t.firing=!1),c.button===2&&(t.aiming=!1)}),document.addEventListener("mousemove",c=>{t.locked&&(t.lookX+=c.movementX,t.lookY+=c.movementY)}),document.addEventListener("pointerlockchange",()=>a(document.pointerLockElement===i)),document.addEventListener("pointerlockerror",()=>n.lockError.forEach(c=>c())),r&&window.addEventListener("keydown",c=>{c.code==="Escape"&&t.locked&&a(!1)}),{isDown:c=>e.has(c),get firing(){return t.firing},get aiming(){return t.aiming},consumeWeaponSwitch(){const c={slot:t.slot,wheel:Math.sign(t.wheel)};return t.slot=null,t.wheel=0,c},get locked(){return t.locked},lock(){var l;if(r){a(!0);return}const c=(l=i.requestPointerLock)==null?void 0:l.call(i);c instanceof Promise&&c.catch(()=>n.lockError.forEach(h=>h()))},unlock(){r&&t.locked&&a(!1),document.pointerLockElement&&document.exitPointerLock()},consumeLook(){const c={x:t.lookX,y:t.lookY};return t.lookX=0,t.lookY=0,c},onLockChange(c){n.lockChange.push(c)},onLockError(c){n.lockError.push(c)}}}const Lh=1.6,tS=.0022,Qa=Math.PI/2-.05,nS=60,iS=18;function sS(i){const e={radius:Tn.radius,height:Tn.height};let t={x:0,y:0,z:0},n={x:0,y:0,z:0},s=!1,r=0,o=0,a=Tn.maxHealth,c=0,l=1;i.rotation.order="YXZ";function h(){const u=s?Math.sin(c)*.04:0;i.position.set(t.x,t.y+Lh+u,t.z),i.rotation.set(o,r,0)}return{get position(){return t},get health(){return a},get yaw(){return r},eye(){return{x:t.x,y:t.y+Lh,z:t.z}},center(){return{x:t.x,y:t.y+Tn.height*.6,z:t.z}},respawn(u){t={x:u.x,y:0,z:u.z},n={x:0,y:0,z:0},r=Math.atan2(u.x,u.z),o=0,a=Tn.maxHealth,h()},damage(u){return a=Math.max(0,a-u),a},addRecoil(u){o=Math.min(Qa,o+u)},setLookScale(u){l=u},update(u,f,d){const p=f.consumeLook(),_=tS*l;r-=p.x*_,o=Bi.clamp(o-p.y*_,-Qa,Qa);const m=(f.isDown("KeyW")?1:0)-(f.isDown("KeyS")?1:0),g=(f.isDown("KeyD")?1:0)-(f.isDown("KeyA")?1:0),x=f.isDown("ShiftLeft")&&m>0,S=x?Tn.sprintSpeed:Tn.walkSpeed,v=Math.sin(r),T=Math.cos(r);let M=-v*m+T*g,R=-T*m-v*g;const b=Math.hypot(M,R);b>0&&(M=M/b*S,R=R/b*S);const E=(s?nS:iS)*u,y={...n};y.x+=Bi.clamp(M-y.x,-E,E),y.z+=Bi.clamp(R-y.z,-E,E),y.y-=Tn.gravity*u,s&&f.isDown("Space")&&(y.y=Tn.jumpVelocity);const N=Td(t,y,u,d,e);t=N.position,n=N.velocity,s=N.onGround;const W=Math.hypot(n.x,n.z);return c+=W*u*1.6,h(),{moving:W>.5,sprinting:x&&W>.5}}}}const rS=1.8;function Yo(i,e){return Math.round(i.damage*(e==="head"?i.headshotMultiplier:1))}function oS(i,e,t){const n=Math.max(0,i.indexOf(e));return i[(n+t+i.length)%i.length]}function aS(i,e,t){const n=i.spreadRad+(i.adsSpreadRad-i.spreadRad)*e;return t?n*rS:n}function cS(i,e,t){return e?i.automatic||!t:!1}function lS(i){return Object.fromEntries(Object.entries(i).map(([e,t])=>[e,{body:Yo(t,"body"),head:Yo(t,"head"),range:t.range}]))}function zl(i,e){e.forEach(([t,n,s,r])=>{const o=new Ie(new Gt(...n),t);o.position.set(...s),r&&o.rotation.set(...r),i.add(o)})}function Cd(i,e,t){const n=new Ie(new wi(.07,8,8),new _t({color:t,transparent:!0,opacity:0}));n.position.set(0,.02,e),i.add(n);const s=new ra(t,0,8,2);return s.position.copy(n.position),i.add(s),{flash:n,light:s}}function uS(){const i=new bt,e=new pt({color:3818598,roughness:.35,metalness:.5}),t=new _t({color:2287359});zl(i,[[e,[.09,.11,.55],[0,0,0]],[e,[.05,.05,.35],[0,.02,-.42]],[e,[.07,.16,.08],[0,-.12,.1]],[e,[.06,.12,.1],[0,-.1,-.12]],[e,[.03,.05,.03],[0,.075,.16]],[e,[.02,.05,.02],[0,.07,-.3]],[t,[.092,.01,.3],[0,.03,-.02]],[t,[.012,.012,.012],[0,.1,-.3]]]);const{flash:n,light:s}=Cd(i,-.62,12581119);return i.scale.setScalar(.6),{group:i,flash:n,light:s,hip:new I(.2,-.2,-.42),ads:new I(0,-.06,-.3)}}function hS(){const i=new bt,e=new pt({color:3095084,roughness:.5,metalness:.4}),t=new pt({color:1843248,roughness:.3,metalness:.8}),n=new _t({color:3800968});zl(i,[[e,[.1,.12,.7],[0,0,.05]],[t,[.045,.045,.7],[0,.02,-.62]],[t,[.07,.07,.08],[0,.02,-.98]],[e,[.08,.18,.09],[0,-.13,.12]],[e,[.09,.14,.26],[0,-.03,.42]],[t,[.03,.12,.03],[-.03,-.12,-.28]],[t,[.03,.12,.03],[.03,-.12,-.28]],[n,[.102,.01,.4],[0,.065,.02]]]);const s=new Ie(new Hr(.04,.04,.34,16),t);s.rotation.x=Math.PI/2,s.position.set(0,.12,-.02),i.add(s);const r=new Ie(new Nl(.035,16),n);r.position.set(0,.12,.151),i.add(r);const{flash:o,light:a}=Cd(i,-1.05,14221264);return i.scale.setScalar(.55),{group:i,flash:o,light:a,hip:new I(.22,-.22,-.46),ads:new I(0,-.07,-.25)}}function fS(){const i=new bt,e=new pt({color:2237742,roughness:.7,metalness:.2}),t=new pt({color:14212584,roughness:.15,metalness:.95}),n=new _t({color:16723920});return zl(i,[[e,[.04,.05,.14],[0,0,.07]],[e,[.08,.02,.02],[0,0,-.005]],[t,[.012,.045,.22],[0,.005,-.12]],[t,[.012,.03,.05],[0,.012,-.25],[.5,0,0]],[n,[.014,.006,.2],[0,-.016,-.12]]]),i.rotation.set(.15,.35,-.5),i.scale.setScalar(.75),{group:i,flash:null,light:null,hip:new I(.24,-.22,-.36),ads:new I(.24,-.22,-.36)}}const dS={rifle:uS,sniper:hS,knife:fS},Ih=.06,pS=.05,Dh=.32,mS=[-.18,0,.18],ec=.92;function gS(i,e,t){const n=Object.fromEntries(wn.map(B=>{const q=dS[B]();return q.baseRotation=q.group.rotation.clone(),q.group.visible=!1,e.add(q.group),[B,q]})),s=new kr({color:9434879,transparent:!0}),r=[],o=Object.fromEntries(wn.map(B=>[B,dr[B].magazineSize]));let a=wn[0],c=null,l=0,h=!0,u=0,f=0,d=0,p=0,_=0,m=0,g=0,x=!1;const S=()=>dr[a],v=()=>n[a];function T(B){wn.forEach(q=>{n[q].group.visible=h&&q===B})}function M(){r.splice(0).forEach(({line:B})=>{i.remove(B),B.geometry.dispose(),B.material.dispose()})}function R(B,q){const D=new zr(new xt().setFromPoints([B,q]),s.clone());i.add(D),r.push({line:D,life:Ih})}function b(B,q=0){const D=e.getWorldPosition(new I),X=new I(0,0,-1);return q&&X.applyAxisAngle(new I(0,1,0),q),X.applyQuaternion(e.getWorldQuaternion(new $t)),X.x+=(Math.random()-.5)*B*2,X.y+=(Math.random()-.5)*B*2,{origin:D,dir:X.normalize()}}function E(B,q,D,X,re){let Y=D,Z=null;for(const le of X){const ae=ol(B,q,le);ae!==null&&ae<Y&&(Y=ae,Z=null)}for(const le of re){const ae=ol(B,q,le.aabb);ae!==null&&ae<Y&&(Y=ae,Z=le)}return{hit:Z,distance:Y}}function y(B,q,D){const X=S();o[a]-=1,p=pS,m=1,t.shot(a);const{origin:re,dir:Y}=b(aS(X,u,D)),{hit:Z,distance:le}=E(re,Y,X.range,B,q),ae=v().flash.getWorldPosition(new I),Re=X.scope&&u>ec?re.clone().addScaledVector(Y,.6):ae,Ne=re.clone().addScaledVector(Y,le);return R(Re,Ne),o[a]===0&&W(),{weapon:a,hit:Z,recoil:X.recoil,damage:Z?Yo(X,Z.part):0,tracer:{from:Re.toArray(),to:Ne.toArray()}}}function N(B,q){const D=S();_=Dh,t.knife();let X=null;for(const re of mS){const{origin:Y,dir:Z}=b(0,re),le=E(Y,Z,D.range,B,q);le.hit&&(!X||le.distance<X.distance)&&(X=le)}return{weapon:a,hit:(X==null?void 0:X.hit)??null,recoil:0,damage:X?Yo(D,X.hit.part):0,tracer:null}}function W(){const B=S();B.kind!=="gun"||d>0||o[a]===B.magazineSize||(d=B.reloadMs/1e3,t.reload())}function G(B){!dr[B]||B===(c??a)||(c=B,l=pi.switchSeconds,d=0)}function C(B){const{slot:q,wheel:D}=B.consumeWeaponSwitch();q!==null&&wn[q]?G(wn[q]):D&&G(oS(wn,c??a,D))}function U(B){for(let q=r.length-1;q>=0;q--){const D=r[q];D.life-=B,D.line.material.opacity=Math.max(0,D.life/Ih),D.life<=0&&(i.remove(D.line),D.line.geometry.dispose(),D.line.material.dispose(),r.splice(q,1))}}function F(B){if(!c)return 0;const q=pi.switchSeconds/2;return l-=B,l<=q&&a!==c&&(a=c,T(a)),l<=0?(c=null,0):1-Math.abs(l-q)/q}function L(){const B=S(),q=B.adsFov?pi.fov+(B.adsFov-pi.fov)*u:pi.fov;Math.abs(e.fov-q)>.01&&(e.fov=q,e.updateProjectionMatrix())}function O(B,q){const D=v(),X=S(),re=d>0?.18:0,Y=(q?.01:.003)*(1-u*.8),Z=D.hip.clone().lerp(D.ads,u);Z.x+=Math.sin(g)*Y,Z.y+=Math.abs(Math.cos(g))*Y-re-B*.35,Z.z+=m*(X.kind==="gun"?.06:0);const le=_>0?Math.sin((1-_/Dh)*Math.PI):0;Z.z-=le*.18,Z.x-=le*.12,D.group.position.copy(Z),D.group.rotation.set(D.baseRotation.x+m*.12-re-le*.9,D.baseRotation.y+le*.6,D.baseRotation.z),D.group.visible=h&&!(X.scope&&u>ec),D.flash&&(D.flash.material.opacity=p>0?1:0,D.light.intensity=p>0?6:0)}return T(a),{get current(){return S()},get ammo(){return o[a]},get reloading(){return d>0},get aim(){return u},get scoped(){return S().scope&&u>ec},reset(){wn.forEach(B=>{o[B]=dr[B].magazineSize}),a=wn[0],c=null,u=0,f=0,d=0,p=0,_=0,m=0,x=!1,T(a),L()},setVisible(B){h=B,T(a),!B&&(u=0,L(),wn.forEach(q=>{const D=n[q];D.flash&&(D.flash.material.opacity=0,D.light.intensity=0)}),M())},reload(){W()},update(B,q,D,X,re){C(q);const Y=F(B),Z=S();f=Math.max(0,f-B),p=Math.max(0,p-B),_=Math.max(0,_-B),m=Math.max(0,m-B*8),g+=B*(re?9:2),d>0&&(d-=B,d<=0&&(o[a]=Z.magazineSize));const le=q.aiming&&!!Z.adsFov&&!c&&d<=0;u=Bi.clamp(u+(le?1:-1)*pi.adsSpeed*B,0,1),L(),U(B),O(Y,re);const ae=q.firing,Re=cS(Z,ae,x);return x=ae,!Re||f>0||c||d>0?null:Z.kind==="gun"&&o[a]===0?(W(),null):(f=Z.fireIntervalMs/1e3,Z.kind==="melee"?N(D,X):y(D,X,re))}}}const _S={shot:"sounds/shot.mp3",reload:"sounds/reload.mp3"};function vS(){let i=null,e=null,t=null;const n={};async function s(l,h,u){try{const f=await fetch(u);if(!f.ok)return;n[h]=await l.decodeAudioData(await f.arrayBuffer())}catch{n[h]=null}}function r(l,{gain:h,rate:u,jitter:f=.08}){const d=o();if(!d||!l)return!1;const p=d.createBufferSource();p.buffer=l,p.playbackRate.value=u*(1-f/2+Math.random()*f);const _=d.createGain();return _.gain.value=h,p.connect(_).connect(e),p.start(),!0}function o(){if(i)return i;const l=window.AudioContext||window.webkitAudioContext;if(!l)return null;i=new l,e=i.createGain(),e.gain.value=.35,e.connect(i.destination),t=i.createBuffer(1,i.sampleRate*.4,i.sampleRate);const h=t.getChannelData(0);for(let u=0;u<h.length;u++)h[u]=Math.random()*2-1;return Object.entries(_S).forEach(([u,f])=>s(i,u,f)),i}function a({duration:l,freq:h,gain:u,q:f=1}){const d=o();if(!d)return;const p=d.createBufferSource();p.buffer=t;const _=d.createBiquadFilter();_.type="bandpass",_.frequency.value=h,_.Q.value=f;const m=d.createGain();m.gain.setValueAtTime(u,d.currentTime),m.gain.exponentialRampToValueAtTime(.001,d.currentTime+l),p.connect(_).connect(m).connect(e),p.start(),p.stop(d.currentTime+l)}function c({from:l,to:h,duration:u,gain:f,type:d="square"}){const p=o();if(!p)return;const _=p.createOscillator();_.type=d,_.frequency.setValueAtTime(l,p.currentTime),_.frequency.exponentialRampToValueAtTime(h,p.currentTime+u);const m=p.createGain();m.gain.setValueAtTime(f,p.currentTime),m.gain.exponentialRampToValueAtTime(.001,p.currentTime+u),_.connect(m).connect(e),_.start(),_.stop(p.currentTime+u)}return{unlock:()=>{var l;return(l=o())==null?void 0:l.resume()},shot(l="rifle"){if(l==="sniper"){if(c({from:120,to:40,duration:.35,gain:.45,type:"sine"}),r(n.shot,{gain:1.2,rate:.7,jitter:.03}))return;a({duration:.3,freq:700,gain:1,q:.6});return}r(n.shot,{gain:.9,rate:1})||(a({duration:.12,freq:1800,gain:.9,q:.7}),c({from:220,to:60,duration:.1,gain:.25}))},knife(){a({duration:.16,freq:3200,gain:.35,q:1.4})},enemyShot(){r(n.shot,{gain:.3,rate:.88})||a({duration:.1,freq:900,gain:.25,q:.8})},hit(){c({from:1400,to:900,duration:.06,gain:.2,type:"triangle"})},kill(){c({from:600,to:1600,duration:.18,gain:.25,type:"triangle"}),c({from:900,to:2400,duration:.22,gain:.15,type:"sine"})},hurt(){c({from:160,to:70,duration:.18,gain:.35,type:"sawtooth"})},reload(){r(n.reload,{gain:.9,rate:1,jitter:0})||c({from:300,to:500,duration:.08,gain:.15})},coin(){c({from:1200,to:1800,duration:.12,gain:.18,type:"sine"})}}}function xS(i){const e=[],t=new wi(.06,6,6);function n(s,r,o){i.add(s),e.push({object:s,life:r,maxLife:r,onTick:o})}return{tracer(s,r,o){const a=new zr(new xt().setFromPoints([s,r]),new kr({color:o,transparent:!0}));n(a,.08,(c,l)=>{c.material.opacity=l})},sparks(s,r,o=6){for(let a=0;a<o;a++){const c=new Ie(t,new _t({color:r,transparent:!0}));c.position.copy(s);const l=new I(Math.random()-.5,Math.random()*.8,Math.random()-.5).multiplyScalar(6);n(c,.35,(h,u,f)=>{l.y-=14*f,h.position.addScaledVector(l,f),h.material.opacity=u,h.scale.setScalar(u)})}},update(s){for(let r=e.length-1;r>=0;r--){const o=e[r];o.life-=s,o.onTick(o.object,Math.max(0,o.life/o.maxLife),s),o.life<=0&&(i.remove(o.object),o.object.geometry!==t&&o.object.geometry.dispose(),o.object.material.dispose(),e.splice(r,1))}}}}function yS(i){const e=new Map,t=new Map,n=i.clone();return Pd(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Pd(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Pd(i.children[n],e.children[n],t)}const Ld=[{id:"barong",name:"BARONG",faction:"kera",color:2287359,height:2,model:"models/barong.glb"},{id:"nebula7",name:"NEBULA-7",faction:"droid",color:10898943,height:1.9,model:"models/nebula7.glb"}],MS={run:"models/anims/rifle_run.glb",shoot:"models/anims/shoot_walk.glb",death:"models/anims/death.glb"},Nh=.2,SS=.06,Id=new Ed;async function wS(i){try{const e=await Id.loadAsync(i.model),t=e.scene;t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.frustumCulled=!1)});const n=new cn().setFromObject(t),s=n.getSize(new I),r=i.height/Math.max(s.y,.001);t.scale.setScalar(r),t.position.y=-n.min.y*r;const o=new bt;return o.add(t),{def:i,scene:o,clips:e.animations}}catch{return{def:i,scene:null,clips:[]}}}function TS(i){const e=i.tracks.find(o=>o.name.endsWith("Hips.position"));if(!e)return i;const t=Float32Array.from(e.values),[n,,s]=t;for(let o=0;o<t.length;o+=3)t[o]=n,t[o+2]=s;const r=new Vi(e.name,e.times,t);return new qo(i.name,i.duration,i.tracks.map(o=>o===e?r:o))}async function ES(){const i=await Promise.all(Object.entries(MS).map(async([e,t])=>{try{const s=(await Id.loadAsync(t)).animations[0]??null;return[e,s?TS(s):null]}catch{return[e,null]}}));return Object.fromEntries(i)}function AS(i){const e=new bt,t=new pt({color:2106941,roughness:.5,metalness:.6}),n=new _t({color:i.color}),s=new Ie(new Dl(.38,i.height*.45,4,10),t);s.position.y=i.height*.48;const r=new Ie(new wi(.24,12,10),t);r.position.y=i.height*.86;const o=new Ie(new Gt(.34,.07,.12),n);o.position.set(0,i.height*.87,.2);const a=new Ie(new Gt(.78,.06,.6),n);return a.position.y=i.height*.6,[s,r,o,a].forEach(c=>{c.castShadow=!0,e.add(c)}),e}function bS(i){const e=new bt,t=new pt({color:9082040,roughness:.35,metalness:.6}),n=new pt({color:2435908,roughness:.5,metalness:.4}),s=new _t({color:i});[[t,[.1,.13,.66],[0,.04,.2]],[n,[.05,.05,.34],[0,.06,.66]],[n,[.07,.18,.08],[0,-.07,.02]],[n,[.07,.15,.24],[0,.01,-.2]],[n,[.06,.14,.09],[0,-.06,.32]],[s,[.105,.02,.46],[0,.115,.2]],[s,[.03,.03,.03],[0,.13,.5]]].forEach(([a,c,l])=>{const h=new Ie(new Gt(...c),a);h.position.set(...l),h.castShadow=!0,e.add(h)});const o=new Ie(new wi(.09,8,8),new _t({color:16765562,transparent:!0,opacity:0}));return o.position.set(0,.06,.86),e.add(o),{gun:e,flash:o}}function RS(i,e){const t=document.createElement("canvas");t.width=256,t.height=64;const n=t.getContext("2d");n.font='bold 34px "Segoe UI", sans-serif',n.textAlign="center",n.textBaseline="middle",n.lineWidth=6,n.strokeStyle="rgba(0,0,0,0.8)",n.strokeText(e,128,32),n.fillStyle=`#${i.color.toString(16).padStart(6,"0")}`,n.fillText(e,128,32);const s=new Gx(new id({map:new ud(t),depthWrite:!1}));return s.scale.set(1.6,.4,1),s.position.y=i.height+.45,s}async function CS(){const[i,e]=await Promise.all([Promise.all(Ld.map(wS)),ES()]);return i.map(t=>({...t,shared:e}))}function PS(i,e){const t=new zy(i),{shared:n}=e,s=n.run??e.clips[0]??null,r={run:s?t.clipAction(s):null,shoot:n.shoot?t.clipAction(n.shoot):null,death:n.death?t.clipAction(n.death):null};r.death&&(r.death.setLoop(Uf,1),r.death.clampWhenFinished=!0);let o=null;function a(c){const l=r[c]??r.run;!l||l===o||(l.reset().setEffectiveWeight(1).fadeIn(Nh).play(),o&&o.fadeOut(Nh),o=l)}return a("run"),{mixer:t,hasDeathClip:!!r.death,deathSeconds:r.death?r.death.getClip().duration:0,play:a,restart(){t.stopAllAction(),o=null,a("run")}}}function Dd(i,e=i.def.name){const t=new bt,n=i.def,{gun:s,flash:r}=bS(n.color),o=n.height/1.65;s.scale.setScalar(o),t.add(s);let a=null,c=null,l=null;i.scene?(l=yS(i.scene),t.add(l),c=l.getObjectByName("RightHand"),a=PS(l,i)):t.add(AS(n));const h=RS(n,e);t.add(h);const u=new I(.28,n.height*.55,.25),f=new I;let d=0;return{object:t,isModel:!!i.scene,hasDeathClip:(a==null?void 0:a.hasDeathClip)??!1,deathSeconds:(a==null?void 0:a.deathSeconds)??0,setState(p){a==null||a.play(p)},restart(){a==null||a.restart(),s.visible=!0},dropGun(){s.visible=!1},setTimeScale(p){a&&(a.mixer.timeScale=p)},dispose(){var p,_;s.traverse(m=>{m.isMesh&&(m.geometry.dispose(),m.material.dispose())}),(p=h.material.map)==null||p.dispose(),h.material.dispose(),a&&(a.mixer.stopAllAction(),a.mixer.uncacheRoot(l)),(_=t.parent)==null||_.remove(t)},fire(){d=SS},muzzle(p=new I){return r.getWorldPosition(p)},update(p){a==null||a.mixer.update(p),d=Math.max(0,d-p),r.material.opacity=d>0?1:0,r.scale.setScalar(d>0?.8+Math.random()*.6:1),c?(t.updateMatrixWorld(!0),c.getWorldPosition(f),t.worldToLocal(f),s.position.copy(f)):s.position.copy(u)}}}function LS(i,e){const t=Math.min(1,Math.max(0,i/e.viewRange));return e.accuracyNear+(e.accuracyFar-e.accuracyNear)*t}function IS(i,e,t=Math.random){const n=[...i].sort((r,o)=>Math.hypot(o.x-e.x,o.z-e.z)-Math.hypot(r.x-e.x,r.z-e.z)),s=n.slice(0,Math.max(1,Math.ceil(n.length/2)));return s[Math.min(s.length-1,Math.floor(t()*s.length))]}function DS({self:i,player:e,sees:t,distance:n,preferredRange:s,wander:r,strafeSign:o,unstuck:a=!1}){const c=u=>{const f=u.x-i.x,d=u.z-i.z,p=Math.hypot(f,d);return p<1e-6?{x:0,z:0}:{x:f/p,z:d/p}},l=u=>({x:-u.z*o,z:u.x*o});if(a)return l(c(t?e:r));if(!t)return c(r);const h=c(e);return n>s?h:l(h)}const Uh=.6,NS=.8,US=1.2,OS=.45,FS=1,Nd=.45,BS=16731501;function tc(i){const e=i[Math.floor(Math.random()*i.length)];return{x:e.x+(Math.random()-.5)*10,z:e.z+(Math.random()-.5)*10}}function kS(i,e){return{def:i.def,height:i.def.height,view:Dd(i),position:{x:e.x,y:0,z:e.z},yaw:0,health:pn.maxHealth,alive:!0,dyingLeft:0,respawnLeft:0,aimLeft:0,fireCooldown:Math.random()*pn.fireIntervalMs/1e3,wander:e,strafeSign:Math.random()<.5?-1:1,strafeTimer:0,stuckTimer:0,unstuckLeft:0}}function zS(i){const{x:e,y:t,z:n}=i.position,s=Nd,r=t+i.height*.78;return[{target:i,part:"head",aabb:Mi(e-s*.6,r,n-s*.6,e+s*.6,t+i.height,n+s*.6)},{target:i,part:"body",aabb:Mi(e-s,t,n-s,e+s,r,n+s)}]}function HS(i,e,t,n,s){const r=Array.from({length:pn.count},(u,f)=>{const d=kS(e[f%e.length],s[f%s.length]);return d.view.object.rotation.order="YXZ",i.add(d.view.object),d}),o=new I;function a(u,f,d=IS(s,f)){u.position={x:d.x+(Math.random()-.5)*4,y:0,z:d.z+(Math.random()-.5)*4},u.health=pn.maxHealth,u.alive=!0,u.dyingLeft=0,u.aimLeft=0,u.unstuckLeft=0,u.stuckTimer=0,u.view.object.visible=!0,u.view.object.position.set(u.position.x,0,u.position.z),u.view.object.rotation.set(0,u.yaw,0),u.view.restart(),u.wander=tc(s)}function c(u,f,d,p){u.fireCooldown=pn.fireIntervalMs/1e3*(.8+Math.random()*.4);const _=Math.random()<LS(d,pn),m=new I(f.x,f.y,f.z);_||m.add(new I((Math.random()-.5)*2.5,(Math.random()-.3)*1.5,(Math.random()-.5)*2.5)),u.view.fire(),t.tracer(u.view.muzzle(o).clone(),m,BS),n.enemyShot(),_&&p(pn.damage,u)}function l(u,f,d,p,_,m){const g={x:u.position.x,y:u.position.y+u.height*.85,z:u.position.z},x=d.center(),S=Math.hypot(x.x-g.x,x.z-g.z),v=_&&S<pn.viewRange&&!Qy(g,x,p);u.aimLeft=v?US:Math.max(0,u.aimLeft-f);const T=u.aimLeft>0;u.view.setState(T?"shoot":"run"),u.strafeTimer-=f,u.strafeTimer<=0&&(u.strafeSign*=-1,u.strafeTimer=.8+Math.random()*1.5),!v&&Math.hypot(u.wander.x-u.position.x,u.wander.z-u.position.z)<2&&(u.wander=tc(s)),u.unstuckLeft=Math.max(0,u.unstuckLeft-f);const M=DS({self:u.position,player:x,sees:v,distance:S,preferredRange:pn.preferredRange,wander:u.wander,strafeSign:u.strafeSign,unstuck:u.unstuckLeft>0}),R=pn.speed*(T?OS:1),b={x:M.x*R,y:-20,z:M.z*R},E=u.position,y=Td(E,b,f,p,{radius:Nd,height:u.height});u.position=y.position;const N=Math.hypot(y.position.x-E.x,y.position.z-E.z);u.stuckTimer=N<R*f*.3?u.stuckTimer+f:0,u.stuckTimer>.6&&(u.wander=tc(s),u.strafeSign*=-1,u.stuckTimer=0,u.unstuckLeft=FS);const W=v?x:{x:u.position.x+M.x,z:u.position.z+M.z},G=Math.atan2(W.x-u.position.x,W.z-u.position.z),C=Math.atan2(Math.sin(G-u.yaw),Math.cos(G-u.yaw));u.yaw+=C*Math.min(1,f*10),u.fireCooldown-=f,v&&u.fireCooldown<=0&&c(u,x,S,m)}function h(u,f){const d=u.view.object;if(u.dyingLeft-=f,!u.view.hasDeathClip){const p=1-Math.max(0,u.dyingLeft)/Uh;d.rotation.set(-p*Math.PI/2,u.yaw,0),d.position.y=u.position.y-p*.3}u.dyingLeft<=0&&(d.visible=!1)}return{hitboxes(){return r.filter(u=>u.alive).flatMap(zS)},damage(u,f,d){return!u.alive||(u.health-=f,t.sparks(d,u.def.color,5),u.health>0)?!1:(u.alive=!1,u.dyingLeft=u.view.hasDeathClip?u.view.deathSeconds+NS:Uh,u.respawnLeft=Math.max(pn.respawnMs/1e3,u.dyingLeft),u.view.setState("death"),u.view.dropGun(),t.sparks(d,16777215,14),!0)},setVisible(u){r.forEach(f=>{f.view.object.visible=u&&f.alive})},resetAll(u){r.forEach((f,d)=>a(f,u.position,s[d%s.length]))},update(u,f,d,p,_){for(const m of r)m.alive?(l(m,u,f,d,p,_),m.view.object.position.set(m.position.x,m.position.y,m.position.z),m.view.object.rotation.set(0,m.yaw,0)):(m.dyingLeft>0&&h(m,u),m.respawnLeft-=u,m.respawnLeft<=0&&a(m,f.position)),m.view.object.visible&&m.view.update(u)}}}/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Hl=Object.freeze,xi=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Gr=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Ud=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Od=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,VS=Hl({p:xi,n:Gr,h:1n,a:0n,b:7n,Gx:Ud,Gy:Od}),yn=32,Oh=i=>i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&i.BYTES_PER_ELEMENT===1,on=(i,e,t="")=>{if(Oh(i)&&(e===void 0||i.length===e))return i;const n=Oh(i),s=e!==void 0?` of length ${e}`:"",r=n?`length=${i.length}`:`type=${typeof i}`,o=(t?`"${t}" `:"")+"expected Uint8Array"+s+", got "+r;throw n?new RangeError(o):new TypeError(o)},GS=i=>Uint8Array.from(i),WS=(i,e,t)=>GS(on(i,t,e)),Fd=(i,e)=>i.toString(16).padStart(e,"0"),Bd=i=>{let e="";for(const t of on(i))e+=Fd(t,2);return e},kd=i=>{const e="hex invalid";if(typeof i!="string")throw new TypeError(e);if(i.length%2||!/^[\da-f]*$/i.test(i))throw new RangeError(e);const t=new Uint8Array(i.length/2);for(let n=0,s=0;n<t.length;n++,s+=2){const r=i.charCodeAt(s),o=i.charCodeAt(s+1);t[n]=((r&15)+(r>>6)*9)*16+(o&15)+(o>>6)*9}return t},Fh=()=>{var e;const i=(e=globalThis==null?void 0:globalThis.crypto)==null?void 0:e.subtle;if(i)return i;throw new Error("crypto.subtle must be defined, consider polyfill")},Fs=(...i)=>{let e=0;for(const s of i)e+=on(s).length;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.length;return t},Vl=(i=yn)=>{const e=globalThis==null?void 0:globalThis.crypto;if(typeof(e==null?void 0:e.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(i))},XS=BigInt,Wr=(i,e,t,n="bad number: out of range")=>{if(typeof i!="bigint")throw new TypeError(n);if(e<=i&&i<t)return i;throw new RangeError(n)},Te=(i,e=xi)=>(i%=e)>=0n?i:e+i,oa=i=>Te(i,Gr),qS=(i,e)=>{if(i===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Te(i,e),n=e,s=0n,r=1n;for(;t!==0n;){const a=n/t,c=n-t*a,l=s-r*a;n=t,t=c,s=r,r=l}if(n!==1n)throw new Error("invert: does not exist");return Te(s,e)},zd=i=>{const e=$S[i];if(typeof e!="function")throw new Error("hashes."+i+" not set");return e},Bh=(i,e,t)=>on(zd(i)(e,t),yn,"digest"),kh=async(i,e,t)=>on(await zd(i)(e,t),yn,"digest"),nc=i=>{if(i instanceof Si)return i;throw new TypeError("Point expected")},ic="bad point: not on curve",Hd=i=>Te(Te(i*i)*i+7n),zh=i=>Wr(i,0n,xi),xr=i=>Wr(i,1n,xi),Vd=i=>Wr(i,1n,Gr),aa=i=>!(i&1n),YS=i=>Uint8Array.of(aa(i)?2:3),Gd=i=>{const e=Hd(xr(i));let t=1n;for(let n=e,s=(xi+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*n%xi),n=n*n%xi;if(Te(t*t)!==e)throw new Error("sqrt invalid");return new Si(i,aa(t)?t:Te(-t),1n)},Xn=class Xn{constructor(e,t,n){Nt(this,"X");Nt(this,"Y");Nt(this,"Z");this.X=zh(e),this.Y=xr(t),this.Z=zh(n),Hl(this)}static CURVE(){return VS}static fromAffine(e){const{x:t,y:n}=e;return t===0n&&n===0n?yr:new Xn(t,n,1n)}static fromBytes(e){on(e);const t=e.length,n=e[0],s=jo(e,1,33);try{if(t===33&&(n===2||n===3)){const r=Gd(s);return n===3?r.negate():r}if(t===65&&n===4)return new Xn(s,jo(e,33,65),1n).assertValidity()}catch{throw new Error(ic)}throw new Error(ic)}static fromHex(e){return Xn.fromBytes(kd(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:n,Z:s}=this,{X:r,Y:o,Z:a}=nc(e);return Te(t*a)===Te(r*s)&&Te(n*a)===Te(o*s)}is0(){return this.Z===0n}negate(){return new Xn(this.X,Te(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:n,Z:s}=this,{X:r,Y:o,Z:a}=nc(e),c=0n,l=7n;let h=0n,u=0n,f=0n;const d=Te(l*3n);let p=Te(t*r),_=Te(n*o),m=Te(s*a),g=Te(t+n),x=Te(r+o);g=Te(g*x),x=Te(p+_),g=Te(g-x),x=Te(t+s);let S=Te(r+a);return x=Te(x*S),S=Te(p+m),x=Te(x-S),S=Te(n+s),h=Te(o+a),S=Te(S*h),h=Te(_+m),S=Te(S-h),f=Te(c*x),h=Te(d*m),f=Te(h+f),h=Te(_-f),f=Te(_+f),u=Te(h*f),_=Te(p+p),_=Te(_+p),m=Te(c*m),x=Te(d*x),_=Te(_+m),m=Te(p-m),m=Te(c*m),x=Te(x+m),p=Te(_*x),u=Te(u+p),p=Te(S*x),h=Te(g*h),h=Te(h-p),p=Te(g*_),f=Te(S*f),f=Te(f+p),new Xn(h,u,f)}subtract(e){return this.add(nc(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return yr;if(Vd(e),e===1n)return this;if(this.equals(Gi))return sw(e).p;let n=yr,s=Gi,r=this;for(let o=0;t?o<256:e>0n;o++)e&1n?n=n.add(r):t&&(s=s.add(r)),r=r.double(),e>>=1n;return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:n}=this;if(n===0n)return{x:0n,y:0n};if(n===1n)return{x:e,y:t};const s=qS(n,xi);if(Te(n*s)!==1n)throw new Error("inverse invalid");return{x:Te(e*s),y:Te(t*s)}}assertValidity(){const{x:e,y:t}=this.toAffine();if(xr(e),xr(t),Te(t*t)!==Hd(e))throw new Error(ic);return this}toBytes(e=!0){const{x:t,y:n}=this.assertValidity().toAffine(),s=ti(t);return e?Fs(YS(n),s):Fs(Uint8Array.of(4),s,ti(n))}toHex(e){return Bd(this.toBytes(e))}};Nt(Xn,"BASE"),Nt(Xn,"ZERO");let Si=Xn;const Gi=new Si(Ud,Od,1n),yr=new Si(0n,1n,0n);Si.BASE=Gi;Si.ZERO=yr;const jS=(i,e,t)=>Gi.multiply(e,!1).add(i.multiply(t,!1)).assertValidity(),Xi=i=>XS("0x"+(Bd(i)||"0")),jo=(i,e,t)=>Xi(i.subarray(e,t)),ti=i=>kd(Fd(Wr(i,0n,2n**256n),yn*2)),KS=i=>{const e=Xi(on(i,yn,"secret key"));return Wr(e,1n,Gr,"invalid secret key: outside of range")},Hh="SHA-256",$S={hmacSha256Async:async(i,e)=>{const t=Fh(),n=await t.importKey("raw",i,{name:"HMAC",hash:Hh},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",n,e))},hmacSha256:void 0,sha256Async:async i=>new Uint8Array(await Fh().digest(Hh,i)),sha256:void 0},ZS=i=>{if(i=i===void 0?Vl(48):i,on(i),i.length<48||i.length>1024)throw new RangeError("expected 48-1024b");const e=Te(Xi(i),Gr-1n);return ti(e+1n)},JS=i=>e=>{const t=ZS(e);return{secretKey:t,publicKey:i(t)}},Wd=i=>Uint8Array.from("BIP0340/"+i,e=>e.charCodeAt(0)),ul=(i,...e)=>{const t=Bh("sha256",Wd(i));return Bh("sha256",Fs(t,t,...e))},hl=(i,...e)=>kh("sha256Async",Wd(i)).then(t=>kh("sha256Async",Fs(t,t,...e))),Gl=i=>{const e=KS(i),t=Gi.multiply(e),{x:n,y:s}=t.assertValidity().toAffine(),r=aa(s)?e:oa(-e),o=ti(n);return{d:r,px:o}},Wl=i=>oa(Xi(i)),Xd=(...i)=>Wl(ul("challenge",...i)),qd=async(...i)=>Wl(await hl("challenge",...i)),Yd=i=>Gl(i).px,QS=JS(Yd),jd=(i,e,t)=>{const n=WS(i,"message"),{px:s,d:r}=Gl(e);return{m:n,px:s,d:r,a:on(t,yn)}},Kd=i=>{const e=Wl(i);if(e===0n)throw new Error("sign failed: k is zero");const{px:t,d:n}=Gl(ti(e));return{rx:t,k:n}},$d=(i,e,t,n)=>Fs(e,ti(oa(i+t*n))),Zd="invalid signature produced",ew=(i,e,t=Vl(yn))=>{const{m:n,px:s,d:r,a:o}=jd(i,e,t),a=ti(r^Xi(ul("aux",o))),{rx:c,k:l}=Kd(ul("nonce",a,s,n)),h=$d(l,c,Xd(c,s,n),r);if(!Qd(h,n,s))throw new Error(Zd);return h},tw=async(i,e,t=Vl(yn))=>{const{m:n,px:s,d:r,a:o}=jd(i,e,t),a=ti(r^Xi(await hl("aux",o))),{rx:c,k:l}=Kd(await hl("nonce",a,s,n)),h=$d(l,c,await qd(c,s,n),r);if(!await ep(h,n,s))throw new Error(Zd);return h},nw=(i,e)=>i instanceof Promise?i.then(e):e(i),Jd=(i,e,t,n)=>{const s=on(i,64,"signature"),r=on(e,void 0,"message"),o=on(t,yn,"publicKey");let a,c,l,h;try{const u=Xi(o);a=Gd(u),c=xr(jo(s,0,yn)),l=Vd(jo(s,yn,64)),h=Fs(ti(c),o,r)}catch{return!1}return nw(n(h),u=>{try{const{x:f,y:d}=jS(a,l,oa(-u)).toAffine();return!(!aa(d)||f!==c)}catch{return!1}})},Qd=(i,e,t)=>Jd(i,e,t,Xd),ep=async(i,e,t)=>Jd(i,e,t,qd),tp=Hl({keygen:QS,getPublicKey:Yd,sign:ew,verify:Qd,signAsync:tw,verifyAsync:ep}),iw=()=>{const i=[];let e=Gi,t=e;for(let n=0;n<33;n++){t=e,i.push(t);for(let s=1;s<128;s++)t=t.add(e),i.push(t);e=t.double()}return i};let Vh;const Gh=(i,e)=>{const t=e.negate();return i?t:e},sw=i=>{const e=Vh||(Vh=iw());let t=yr,n=Gi;for(let s=0;s<33;s++){let r=Number(i&255n);i>>=8n,r>128&&(r-=256,i+=1n);const o=s*128,a=o+Math.abs(r)-1,c=s%2!==0,l=r<0;r===0?n=n.add(Gh(c,e[o])):t=t.add(Gh(l,e[a]))}if(i!==0n)throw new Error("invalid wnaf");return{p:t,f:n}},{floor:fl,min:rw,sin:ow}=Math,Mn="Trystero",Ir=(i,e)=>Array(i).fill(void 0).map(e),aw="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Xs=i=>Ir(i,()=>aw[fl(Math.random()*62)]??"").join(""),an=Xs(20),qi=Promise.all.bind(Promise),np=typeof window<"u",{entries:ki,fromEntries:ip,keys:tn,values:As}=Object,Bt=()=>{},sp="candidate",ot=i=>(i!==null&&clearTimeout(i),null),et=i=>new Error(`${Mn}: ${i}`),Bs=(i,e)=>i instanceof Error&&i.message?i.message:typeof i=="string"&&i?i:Zt(i??e),_i=(i,e)=>i instanceof Error?i:et(Bs(i,e)),cw=new TextEncoder,lw=new TextDecoder,yi=i=>cw.encode(i),Fi=i=>lw.decode(i),Dr=i=>i.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Nr=(...i)=>i.join("@"),uw=(i,e)=>{const t=[...i],n=()=>{const r=ow(e++)*1e4;return r-fl(r)};let s=t.length;for(;s;){const r=fl(n()*s--),o=t[s];t[s]=t[r],t[r]=o}return t},hw=(i,e,t,n=!1)=>{var s,r;return((s=i.relayConfig)==null?void 0:s.urls)||(n?uw(e,rp(i.appId)):e).slice(0,((r=i.relayConfig)==null?void 0:r.redundancy)??t)},Zt=JSON.stringify,ks=i=>{try{return JSON.parse(i)}catch{throw et(`failed to parse JSON: ${i}`)}},rp=(i,e=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((t,n)=>t+n.charCodeAt(0),0)%e,Wh=3333,Xh=6e4,or={};let Mr=null,Sr=null;const fw=()=>{Mr||(Mr=new Promise(i=>{Sr=i}).finally(()=>{Sr=null,Mr=null}))},dw=()=>{Sr==null||Sr()},pw=(i,e,t)=>{const n={};let s=!1,r=!1,o,a=Bt;n.isClosed=!1,n.ready=new Promise(l=>a=l);const c=()=>{if(n.isClosed)return;o=void 0,r=!1;const l=new WebSocket(i);l.onclose=()=>{if(n.isClosed||r)return;if(r=!0,Mr){Mr.then(c);return}const h=or[i]??(or[i]=Wh);if(h>=Xh){n.isClosed=!0;return}o=setTimeout(c,Math.random()*h),or[i]=rw(h*2,Xh)},l.onmessage=h=>e(String(h.data)),n.socket=l,n.url=l.url,l.onopen=()=>{const h=s;s=!0,a(n),or[i]=Wh,h&&(t==null||t())},n.send=h=>{l.readyState===1&&l.send(h)}};return n.close=()=>{n.isClosed=!0,o!==void 0&&(clearTimeout(o),o=void 0),n.socket.close()},c(),n},mw=i=>{const e={},t=new WeakMap,n=o=>{const a=t.get(o);if(!a)throw et("relay bookkeeping missing registration for relay client");return a},s=()=>{const o={},a=c=>o[c]??(o[c]={});return{forKey:a,forRelay:c=>a(n(c))}},r=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{const c=e[o];return c||r(o,a())},keyOf:n,scoped:s,getSockets:()=>ip(ki(e).flatMap(([o,a])=>{const c=i(a);return c?[[o,c]]:[]}))}},gw=()=>{if(np){const i=new AbortController;return addEventListener("online",dw,{signal:i.signal}),addEventListener("offline",fw,{signal:i.signal}),()=>i.abort()}return Bt},Xl="AES-GCM",sc={},_w=i=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(i)))),vw=i=>{const e=atob(i);return new Uint8Array(e.length).map((t,n)=>e.charCodeAt(n)).buffer},ca=async(i,e)=>new Uint8Array(await crypto.subtle.digest(i,yi(e))),Ur=async i=>sc[i]??(sc[i]=Array.from(await ca("SHA-1",i)).map(e=>e.toString(36)).join("")),xw=async(i,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},yi(`${i}:${e}:${t}`)),{name:Xl},!1,["encrypt","decrypt"]),yw=async(i,e)=>Dr(await ca("SHA-256",`${Mn}:${i}:${e}`)),op="$",ap=",",Mw=async(i,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(ap)+op+_w(await crypto.subtle.encrypt({name:Xl,iv:t},await i,yi(e)))},Sw=async(i,e)=>{const[t,n]=e.split(op);return Fi(await crypto.subtle.decrypt({name:Xl,iv:new Uint8Array((t==null?void 0:t.split(ap).map(Number))??[])},await i,vw(n??"")))},ql=57333,ww=18e4,Tw=20;var Ew=class{constructor(i){Nt(this,"makeOffer");Nt(this,"pool",[]);Nt(this,"pooled",new Set);Nt(this,"leased",new Map);Nt(this,"recycling",new Set);Nt(this,"cleanupTimer",null);Nt(this,"active",!1);this.makeOffer=i}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Ir(Tw,this.makeOffer).forEach(i=>this.push(i)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(i=>i.isDead?(this.pooled.delete(i),!1):!0)},ql)}push(i){i.isDead||this.pooled.has(i)||this.leased.has(i)||(this.pool.push(i),this.pooled.add(i))}shift(i){const e=[];for(;e.length<i&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(i){const e=this.leased.get(i);e&&(ot(e),this.leased.delete(i))}recycle(i){if(!(i.isDead||this.recycling.has(i))){if(i.connection.remoteDescription){i.destroy();return}if(!this.active){i.destroy();return}this.recycling.add(i),i.setHandlers({connect:Bt,close:Bt,error:Bt}),i.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||i.isDead||!this.active){i.destroy();return}this.push(i)}).catch(()=>i.destroy()).finally(()=>this.recycling.delete(i))}}reclaimLeased(i){const e=this.leased.get(i);e&&(ot(e),this.leased.delete(i),this.recycle(i))}lease(i){this.claimLeased(i),this.leased.set(i,setTimeout(()=>{this.leased.delete(i),this.recycle(i)},ww))}checkout(i,e,t){const n=this.shift(i),s=Math.max(0,i-n.length);s>0&&n.push(...Ir(s,this.makeOffer));const r=async(o,a=!1)=>{try{const c=await t(o);return e?(this.lease(o),{peer:o,offer:c,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:c}}catch(c){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return r(this.makeOffer(),!0);throw c}};return qi(n.map(o=>r(o)))}getOffers(i,e){return this.checkout(i,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(i=>i.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((i,e)=>{ot(i),e.destroy()}),this.leased.clear(),this.recycling.forEach(i=>i.destroy()),this.recycling.clear()}};const rc=et("incorrect password for overlapping room"),Aw=(i,e,t)=>{const n=o=>ca("SHA-256",`${o}:${i}:${e}:${t}`).then(Dr),s=async(o,a,c)=>{if(!i)return;if(c){const h=Xs(36);await o({__trystero_pw:"challenge",c:h});const{data:u}=await a();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw rc;const f=await n(h);if(u.h!==f)throw rc;return}const{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw rc;await o({__trystero_pw:"response",h:await n(l.c)})};return{run:s,compose:o=>i||o?async(a,c,l,h)=>{await s(c,l,h),await(o==null?void 0:o(a,c,l,h))}:void 0}},bw=i=>{const e=Bs(i,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},Rw=({onPeerHandshake:i,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:n,sendHandshakeReady:s,onActivate:r,onFailure:o})=>{const a={},c=(u,f)=>{const d=a[u];!d||f&&d.peer!==f||d.isActive||!d.didLocalHandshakePass||!d.didReceiveRemoteReady||(d.isActive=!0,d.handshakeTimer=ot(d.handshakeTimer),r(u,d.peer))},l=(u,f,d)=>{const p=a[u];if(!p||p.peer!==f)return;const _=bw(d);e==null||e(u,_),o(u,f,et(_))},h=(u,f)=>{const d=a[u];!d||d.peer!==f||d.isActive||(d.didLocalHandshakePass=!0,s("",u).catch(p=>l(u,f,et(`failed sending handshake readiness: ${Bs(p,"unknown send failure")}`))),c(u,f))};return{addPeer:(u,f)=>{a[u]={peer:f,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,f)=>{const d=a[u];d&&(d.handshakeTimer=ot(d.handshakeTimer),d.pendingHandshakePayloads.length=0,d.handshakeWaiters.splice(0).forEach(p=>p.reject(f)),delete a[u])},canReceiveFromPeer:(u,f)=>{const d=a[u];return!!(d&&(d.isActive||f))},start:(u,f)=>{const d=a[u];if(!d||d.peer!==f)return;d.handshakeTimer=setTimeout(()=>l(u,f,et(`handshake timed out after ${t}ms`)),t);const p=async(g,x)=>{await n(g,u,x)},_=()=>new Promise((g,x)=>{const S=a[u];if(!S||S.peer!==f){x(et("peer disconnected during handshake"));return}const v=S.pendingHandshakePayloads.shift();if(v){g(v);return}S.handshakeWaiters.push({resolve:g,reject:T=>x(T)})}),m=an<u;Promise.resolve(i==null?void 0:i(u,p,_,m)).then(()=>h(u,f)).catch(g=>l(u,f,_i(g,"handshake failed")))},receiveHandshakeData:(u,f,d)=>{const p=a[f];if(!p||p.isActive)return;const _=d===void 0?{data:u}:{data:u,metadata:d},m=p.handshakeWaiters.shift();if(m){m.resolve(_);return}p.pendingHandshakePayloads.push(_)},receiveHandshakeReady:u=>{const f=a[u];!f||f.isActive||(f.didReceiveRemoteReady=!0,c(u))}}},Cw=15e3,Pw=5e3,qh="icegatheringstatechange",Lw="iceconnectionstatechange",ar="offer",Iw="answer",Dw=/out of range/i,Yh=i=>i.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var jh=(i,{trickleIce:e,rtcConfig:t,rtcPolyfill:n,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{const o=new(n??RTCPeerConnection)({iceServers:Nw.concat(s??[]),...t}),a={},c=[],l=[],h=e!==!1,u=[],f=[];let d=!1,p=!1,_=null,m=null,g=!1;const x=()=>m=ot(m),S=()=>{var D;g||(g=!0,x(),(D=a.close)==null||D.call(a))},v=D=>{a.signal?a.signal(D):c.push(D)},T=D=>{const X=a.signal;a.signal=re=>{X==null||X(re),D(re)},c.length>0&&c.splice(0).forEach(re=>{var Y;return(Y=a.signal)==null?void 0:Y.call(a,re)})},M=D=>r?Yh(D):D,R=D=>{if(!r||typeof D.candidate!="string")return D;const X=Yh(D.candidate);return X===D.candidate?D:{...D,candidate:X}},b=D=>{var X,re;return{type:((X=D.localDescription)==null?void 0:X.type)??ar,sdp:M(((re=D.localDescription)==null?void 0:re.sdp)??"")}},E=()=>{var X,re;const D=(X=o.remoteDescription)==null?void 0:X.sdp;return D?((re=D.match(/a=ice-ufrag:([^\s]+)/))==null?void 0:re[1])??null:null},y=()=>{var D,X;return(((X=(D=o.remoteDescription)==null?void 0:D.sdp)==null?void 0:X.match(/^m=/gm))??[]).length},N=D=>{if(!o.remoteDescription)return!1;const X=y();if(typeof D.sdpMLineIndex=="number"&&X>0&&D.sdpMLineIndex>=X)return!1;const re=E();return!(re&&D.usernameFragment&&D.usernameFragment!==re)},W=async D=>{try{return await o.addIceCandidate(D),!0}catch(X){if(X instanceof Error&&Dw.test(X.message)&&typeof D.sdpMLineIndex=="number")return!1;throw X}},G=async()=>{if(!o.remoteDescription||u.length===0)return;const D=u.splice(0),X=[];for(const re of D){if(!N(re)){X.push(re);continue}await W(re)||X.push(re)}X.length>0&&u.push(...X)},C=async D=>{if(N(D)){await W(D)||u.push(D);return}u.push(D)},U=D=>{D.binaryType="arraybuffer",D.bufferedAmountLowThreshold=65535,D.onmessage=X=>{const re=X.data;a.data?a.data(re):l.push(re)},D.onopen=()=>{var X;return(X=a.connect)==null?void 0:X.call(a)},D.onclose=S,D.onerror=({error:X})=>{var re;return(re=a.error)==null?void 0:re.call(a,_i(X,"data channel error"))}},F=async D=>{let X=null;try{await Promise.race([new Promise(re=>{const Y=()=>{D.iceGatheringState==="complete"&&(D.removeEventListener(qh,Y),re())};D.addEventListener(qh,Y),Y()}),new Promise(re=>{X=setTimeout(re,Cw)})])}finally{ot(X)}return b(D)},L=async()=>{const D=h?b(o):await F(o);return v(D),D};i?(_=o.createDataChannel("data"),U(_)):o.ondatachannel=({channel:D})=>{_=D,U(D)};const O=async(D=!1)=>{var X,re;if(o.connectionState!=="closed")try{return d=!0,D&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&((X=o.localDescription)==null?void 0:X.type)===ar&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(D?await o.createOffer({iceRestart:!0}):void 0),await L()}catch(Y){(re=a.error)==null||re.call(a,_i(Y,"failed to create local offer"))}finally{d=!1}};o.onnegotiationneeded=async()=>O(!1),o.onicecandidate=({candidate:D})=>{if(!h||!D)return;const X=R(typeof D.toJSON=="function"?D.toJSON():{candidate:D.candidate,sdpMid:D.sdpMid,sdpMLineIndex:D.sdpMLineIndex,usernameFragment:D.usernameFragment});v({type:sp,sdp:JSON.stringify(X)})};const B=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){S();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){x();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&S()},Pw));return}};o.onconnectionstatechange=B,o.addEventListener(Lw,B),o.ontrack=D=>{var re,Y;const X=D.streams[0];if(X){if(!a.track&&!a.stream){f.push({track:D.track,stream:X});return}(re=a.track)==null||re.call(a,D.track,X),(Y=a.stream)==null||Y.call(a,X)}},o.onremovestream=D=>{var X;return(X=a.stream)==null?void 0:X.call(a,D.stream)};const q=i?new Promise(D=>T(X=>{X.type===ar&&D(X)})):Promise.resolve();return i&&queueMicrotask(()=>{var D;!d&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&((D=o.onnegotiationneeded)==null||D.call(o,new Event("negotiationneeded")))}),{created:Date.now(),connection:o,get channel(){return _},get isDead(){return o.connectionState==="closed"},getOffer:async(D=!1)=>{var X;if(i)return D?O(!0):((X=o.localDescription)==null?void 0:X.type)===ar?h?b(o):F(o):q},async signal(D){var X,re,Y;if(D.type==="candidate"){try{const Z=JSON.parse(D.sdp);Z&&typeof Z=="object"&&await C(R(Z))}catch(Z){(X=a.error)==null||X.call(a,_i(Z,"failed to parse remote candidate"))}return}if(!((_==null?void 0:_.readyState)==="open"&&!((re=D.sdp)!=null&&re.includes("a=rtpmap"))))try{const Z={...D,sdp:M(D.sdp)};if(D.type===ar){if(d||o.signalingState!=="stable"&&!p){if(i)return;await qi([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(Z)])}else await o.setRemoteDescription(Z);return await G(),await o.setLocalDescription(),await L()}if(D.type===Iw){p=!0;try{await o.setRemoteDescription(Z),await G()}finally{p=!1}}}catch(Z){(Y=a.error)==null||Y.call(a,_i(Z,"failed to apply remote signal"))}},sendData:D=>_==null?void 0:_.send(D),destroy:()=>{x(),_==null||_.close(),o.close(),d=!1,p=!1,S()},setHandlers:D=>{const{signal:X,...re}=D;Object.assign(a,re),a.data&&l.length>0&&l.splice(0).forEach(Y=>{var Z;return(Z=a.data)==null?void 0:Z.call(a,Y)}),X&&T(X),(a.track||a.stream)&&f.length>0&&f.splice(0).forEach(({track:Y,stream:Z})=>{var le,ae;(le=a.track)==null||le.call(a,Y,Z),(ae=a.stream)==null||ae.call(a,Z)})},offerPromise:q,addStream:D=>D.getTracks().forEach(X=>o.addTrack(X,D)),removeStream:D=>o.getSenders().filter(X=>X.track&&D.getTracks().includes(X.track)).forEach(X=>o.removeTrack(X)),addTrack:(D,X)=>o.addTrack(D,X),removeTrack:D=>{const X=o.getSenders().find(re=>re.track===D);X&&o.removeTrack(X)},replaceTrack:(D,X)=>{const re=o.getSenders().find(Y=>Y.track===D);if(re)return re.replaceTrack(X)}}};const Nw=[...Ir(3,(i,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(i=>({urls:i})),Uw=Object.getPrototypeOf(Uint8Array),oc=32,Ow=0,ac=32,Kh=34,cc=35,zo=36,Ii=16*2**10-zo,cr=255,Fw=65535,$h="bufferedamountlow",Zh="close",Jh="error",Bw=1e4,kw=i=>i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength),zw=(i,e=Bw)=>i.readyState!=="open"||i.bufferedAmount<=i.bufferedAmountLowThreshold?Promise.resolve(i.readyState==="open"):new Promise(t=>{let n=!1,s=null;const r=c=>{n||(n=!0,i.removeEventListener($h,o),i.removeEventListener(Zh,a),i.removeEventListener(Jh,a),ot(s),t(c))},o=()=>r(!0),a=()=>r(!1);if(i.addEventListener($h,o),i.addEventListener(Zh,a),i.addEventListener(Jh,a),s=setTimeout(()=>r(!1),e),i.readyState!=="open"){r(!1);return}i.bufferedAmount<=i.bufferedAmountLowThreshold&&r(!0)}),Hw=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:n})=>{const s={},r={},o={},a={},c=(u,f,{includePending:d=!1}={})=>(u?Array.isArray(u)?u:[u]:e(d)).flatMap(p=>{const _=i(p,d);return _?[Promise.resolve(f(p,_))]:(console.warn(`${Mn}: no peer with id ${p} found`),[])});return{makeInternalAction:(u,f={})=>{const d=r[u];if(s[u]&&d){const x=s[u].options;if(x.sendToPending!==!!f.sendToPending||x.receiveWhilePending!==!!f.receiveWhilePending)throw et(`action type "${u}" cannot be redefined`);return d}if(!u)throw et("action type argument is required");const p=yi(u);if(p.byteLength>oc)throw et(`action type string "${u}" (${p.byteLength}b) exceeds byte limit (${oc}). Hint: choose a shorter name.`);const _={sendToPending:!!f.sendToPending,receiveWhilePending:!!f.receiveWhilePending},m=new Uint8Array(oc);m.set(p);let g=0;return s[u]={onComplete:Bt,onProgress:Bt,setOnComplete:x=>{s[u].onComplete=x;const S=a[u];S!=null&&S.length&&(delete a[u],S.forEach(({payload:v,peerId:T,metadata:M})=>x(v,T,M)))},setOnProgress:x=>{s[u].onProgress=x},send:async(x,S,v,T,M)=>{n(M);const R=typeof x;if(R==="undefined")throw et("action data cannot be undefined");const b=R!=="string",E=x instanceof Blob,y=E||x instanceof ArrayBuffer||x instanceof Uw,N=v!==void 0,W=y?kw(E?await x.arrayBuffer():x):yi(b?Zt(x):x),G=N?yi(Zt(v)):null,C=Math.ceil(W.byteLength/Ii)+(N?1:0)||1,U=Ir(C,(F,L)=>{const O=L===C-1,B=!!(N&&L===0),q=new Uint8Array(zo+(B?(G==null?void 0:G.byteLength)??0:O?W.byteLength-Ii*(C-(N?2:1)):Ii));return q.set(m),q.set([g>>8,g&cr],ac),q.set([Number(O)|Number(B)<<1|Number(y)<<2|Number(b)<<3],Kh),q.set([Math.round((L+1)/C*cr)],cc),q.set(N?B?G??new Uint8Array:W.subarray((L-1)*Ii,L*Ii):W.subarray(L*Ii,(L+1)*Ii),zo),q});return g=g+1&Fw,await qi(c(S,async(F,L)=>{const{channel:O}=L;let B=0;for(;B<C;){n(M);const q=U[B];if(!q)break;if(O&&O.bufferedAmount>O.bufferedAmountLowThreshold){const re=await zw(O);if(n(M),!re)break}const D=i(F,_.sendToPending);if(!D||D!==L)break;L.sendData(q),B++;const X=q[cc]??cr;T==null||T(X/cr,F,v)}},{includePending:_.sendToPending})),[]},options:_},r[u]={send:s[u].send,onMessage:s[u].setOnComplete,onProgress:s[u].setOnProgress}},handleData:(u,f)=>{var N,W;const d=new Uint8Array(f),p=Fi(d.subarray(Ow,ac)).replaceAll("\0",""),_=s[p];if(!t(u,!!(_!=null&&_.options.receiveWhilePending)))return;const m=(d[ac]??0)<<8|(d[33]??0),g=d[Kh]??0,x=d[cc]??0,S=d.subarray(zo),v=!!(g&1),T=!!(g&2),M=!!(g&4),R=!!(g&8);o[u]??(o[u]={}),(N=o[u])[p]??(N[p]={});const b=(W=o[u][p])[m]??(W[m]={chunks:[]});if(T?b.meta=ks(Fi(S)):b.chunks.push(S),_==null||_.onProgress(x/cr,u,b.meta),!v)return;const E=new Uint8Array(b.chunks.reduce((G,C)=>G+C.byteLength,0));b.chunks.reduce((G,C)=>(E.set(C,G),G+C.byteLength),0),delete o[u][p][m];const y=M?E:R?ks(Fi(E)):Fi(E);if(_){_.onComplete(y,u,b.meta);return}(a[p]??(a[p]=[])).push({payload:y,peerId:u,...b.meta===void 0?{}:{metadata:b.meta}})},clearPeer:u=>{delete o[u]}}},Vw=500,gs=(i,e)=>{const t=et(e);return t.kind=i,t.name=i==="aborted"?"AbortError":t.name,t},lc=i=>{if(i!=null&&i.aborted)throw gs("aborted","operation aborted")},Qh=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...Object.hasOwn(i,"m")?{m:i.m}:{}}:null,Gw=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...typeof i.e=="string"?{e:i.e}:{}}:null,Co=(i,e)=>e===void 0?i:{...i,metadata:e},Ww=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t})=>{const n={},s={},r=Hw({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:lc}),o=r.makeInternalAction,a=r.handleData,c=d=>{const p=s[d];p&&(ot(p.timer),p.signal&&p.abortHandler&&p.signal.removeEventListener("abort",p.abortHandler),delete s[d])},l=(d,p)=>{ki(s).forEach(([_,m])=>{m.peerId===d&&(c(_),m.reject(p))})},h=(d,p)=>{r.clearPeer(d),l(d,gs("disconnected",Bs(p,"peer disconnected")))},u=o("@_response");return u.onMessage((d,p,_)=>{const m=Gw(_);if(!m)return;const g=s[m.r];if(!(!g||g.peerId!==p)){if(c(m.r),m.e!==void 0){g.reject(gs("rejected",m.e));return}g.resolve(d)}}),{makeAction:(d,p)=>{if(p&&"onRequest"in p&&p.kind!=="request")throw et('request actions must use kind: "request"');const _=(p==null?void 0:p.kind)??"message",m=o(d),g=n[d];if(g){if(g.kind!==_)throw et(`action type "${d}" cannot be redefined`);return g.action}const x={kind:_,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:(p==null?void 0:p.onReceiveProgress)??null},S=(C,U)=>C?(F,L)=>C(F,Co({peerId:L},U)):void 0,v=C=>{x.onReceiveProgress=C},T=(C,U,F)=>{var O;const L=x.kind==="request"?Qh(F):null;(O=x.onReceiveProgress)==null||O.call(x,C,Co({peerId:U},L?L.m:F))};if(m.onProgress(T),_==="message"){let C=(p==null?void 0:p.onMessage)??null;const U=()=>{if(!C)return;const L=C;x.pendingMessages.splice(0).forEach(({payload:O,peerId:B,metadata:q})=>{Promise.resolve().then(()=>L(O,Co({peerId:B},q))).catch(D=>console.error(`${Mn} action handler error:`,D))})},F={send:async(L,O={})=>{await m.send(L,O.target,O.metadata,S(O.onProgress,O.metadata),O.signal)},get onMessage(){return C},set onMessage(L){C=L,U()},get onReceiveProgress(){return x.onReceiveProgress},set onReceiveProgress(L){v(L)}};return m.onMessage((L,O,B)=>{if(!C){x.pendingMessages.push(B===void 0?{payload:L,peerId:O}:{payload:L,peerId:O,metadata:B});return}const q=C;Promise.resolve().then(()=>q(L,Co({peerId:O},B))).catch(D=>console.error(`${Mn} action handler error:`,D))}),x.action=F,n[d]=x,U(),F}let M=(p==null?void 0:p.onRequest)??null;const R=C=>{ot(C.timer);const U=x.pendingRequests.indexOf(C);U>-1&&x.pendingRequests.splice(U,1)},b=(C,U,F)=>{u.send(null,C,{r:U,e:Bs(F,"request failed")})},E=(C,U)=>{R(C),Promise.resolve().then(()=>U(C.payload,{peerId:C.peerId,...C.metadata===void 0?{}:{metadata:C.metadata},signal:C.controller.signal})).then(async F=>{if(F===void 0)throw et("request handler returned undefined");await u.send(F,C.peerId,{r:C.requestId})}).catch(F=>b(C.peerId,C.requestId,F)).finally(()=>C.controller.abort())},y=()=>{M&&x.pendingRequests.slice().forEach(C=>E(C,M))},N=(C,U,F,L)=>{if(M){const B={payload:C,peerId:U,...F===void 0?{}:{metadata:F},requestId:L,controller:new AbortController,timer:null};E(B,M);return}const O={payload:C,peerId:U,...F===void 0?{}:{metadata:F},requestId:L,controller:new AbortController,timer:setTimeout(()=>{R(O),O.controller.abort(),b(U,L,"request handler unavailable")},Vw)};x.pendingRequests.push(O)},W=async(C,U)=>{const{target:F,metadata:L,onProgress:O,signal:B,timeoutMs:q}=U;if(lc(B),!i(F,!1))throw gs("disconnected",`no active peer with id ${F}`);const D=Xs(20),X=new Promise((re,Y)=>{const Z={peerId:F,resolve:re,reject:Y,timer:null,...B===void 0?{}:{signal:B}},le=()=>{c(D),Y(gs("aborted","operation aborted"))};B&&(Z.abortHandler=le,B.addEventListener("abort",le,{once:!0})),s[D]=Z}).catch(re=>{throw re});try{await m.send(C,F,L===void 0?{r:D}:{r:D,m:L},S(O,L),B);const re=s[D];return re&&q!==void 0&&(re.timer=setTimeout(()=>{c(D),re.reject(gs("timeout","request timed out"))},q)),await X}catch(re){throw c(D),re}},G={request:W,requestMany:async(C,U)=>(lc(U.signal),await qi(U.targets.map(async F=>{var L,O;try{const B={peerId:F,status:"fulfilled",value:await W(C,{target:F,...U.metadata===void 0?{}:{metadata:U.metadata},...U.timeoutMs===void 0?{}:{timeoutMs:U.timeoutMs},...U.onProgress===void 0?{}:{onProgress:U.onProgress},...U.signal===void 0?{}:{signal:U.signal}})};return(L=U.onResult)==null||L.call(U,B),B}catch(B){const q=_i(B,"request failed");if(q.kind==="aborted"||!q.kind)throw q;const D=q.kind==="timeout"?{peerId:F,status:"timeout"}:q.kind==="disconnected"?{peerId:F,status:"disconnected"}:{peerId:F,status:"rejected",error:q};return(O=U.onResult)==null||O.call(U,D),D}}))),get onRequest(){return M},set onRequest(C){M=C,y()},get onReceiveProgress(){return x.onReceiveProgress},set onReceiveProgress(C){v(C)}};return m.onMessage((C,U,F)=>{const L=Qh(F);L&&N(C,U,L.m,L.r)}),x.action=G,n[d]=x,y(),G},makeInternalAction:o,handleData:a,clearPeer:h}},ef=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.k=="string"?{key:i.k,...typeof i.s=="string"?{streamId:i.s}:{},...typeof i.t=="string"?{trackId:i.t}:{},...Object.hasOwn(i,"m")?{metadata:i.m}:{}}:null,tf=i=>e=>{let t=i.get(e);return t||(t=Xs(20),i.set(e,t)),t},cp=()=>{const i=new WeakMap,e=new WeakMap,t=new Map,n=new Map,s=new Map,r=new Map;return{getStreamKey:tf(i),getTrackKey:tf(e),rememberRemoteStream:(o,a,c)=>{t.set(o,a),c&&n.set(c,a)},getRemoteStream:(o,a)=>t.get(o)??(a?n.get(a):void 0),rememberRemoteTrack:(o,a,c,l,h)=>{const u={track:a,stream:c};s.set(o,u),l&&r.set(l,u),h&&n.set(h,c)},getRemoteTrack:(o,a)=>s.get(o)??(a?r.get(a):void 0),clearRemote:()=>{t.clear(),n.clear(),s.clear(),r.clear()}}},Xw=({iterate:i,isActive:e,getSharedMediaPeer:t})=>{const n={},s={},r=cp(),o={onPeerStream:null,onPeerTrack:null},a=(h,u,f,d)=>{var p,_,m;e(h)&&((_=(p=t(h))==null?void 0:p.__trysteroMedia)==null||_.rememberRemoteStream(u,f,typeof f.id=="string"?f.id:void 0),(m=o.onPeerStream)==null||m.call(o,f,h,d))},c=(h,u,f,d,p)=>{var _,m,g;e(h)&&((m=(_=t(h))==null?void 0:_.__trysteroMedia)==null||m.rememberRemoteTrack(u,f,d,typeof f.id=="string"?f.id:void 0,typeof d.id=="string"?d.id:void 0),(g=o.onPeerTrack)==null||g.call(o,f,d,h,p))},l=(h,u,f,d,p,_={})=>{const m={k:u,..._,...f===void 0?{}:{m:f}};return i(h,async(g,x)=>{await d(m,g),p(x)})};return{addStream:(h,u,f)=>l(u.target,r.getStreamKey(h),u.metadata,f,d=>d.addStream(h),{s:h.id}),removeStream:(h,u)=>{i(u,(f,d)=>d.removeStream(h))},addTrack:(h,u,f,d)=>l(f.target,r.getTrackKey(h),f.metadata,d,p=>p.addTrack(h,u),{s:u.id,t:h.id}),removeTrack:(h,u)=>{i(u,(f,d)=>d.removeTrack(h))},replaceTrack:(h,u,f,d)=>l(f.target,r.getTrackKey(u),f.metadata,d,p=>p.replaceTrack(h,u),{t:h.id}),receiveStreamMeta:(h,u)=>{var p,_;if(!e(u))return;const f=ef(h);if(!f)return;const d=(_=(p=t(u))==null?void 0:p.__trysteroMedia)==null?void 0:_.getRemoteStream(f.key,f.streamId);if(d){a(u,f.key,d,f.metadata);return}(n[u]??(n[u]=[])).push(f)},receiveTrackMeta:(h,u)=>{var p,_;if(!e(u))return;const f=ef(h);if(!f)return;const d=(_=(p=t(u))==null?void 0:p.__trysteroMedia)==null?void 0:_.getRemoteTrack(f.key,f.trackId);if(d){c(u,f.key,d.track,d.stream,f.metadata);return}(s[u]??(s[u]=[])).push(f)},receiveRemoteStream:(h,u)=>{var d;if(!e(h))return;const f=(d=n[h])==null?void 0:d.shift();f&&a(h,f.key,u,f.metadata)},receiveRemoteTrack:(h,u,f)=>{var p;if(!e(h))return;const d=(p=s[h])==null?void 0:p.shift();d&&c(h,d.key,u,f,d.metadata)},clearPeer:h=>{delete n[h],delete s[h]},get onPeerStream(){return o.onPeerStream},set onPeerStream(h){o.onPeerStream=h},get onPeerTrack(){return o.onPeerTrack},set onPeerTrack(h){o.onPeerTrack=h}}},nf="beforeunload",qw=1e4,fi=i=>"@_"+i,pr=new Set,sf=()=>pr.forEach(i=>i()),Yw=i=>(pr.add(i),pr.size===1&&addEventListener(nf,sf),()=>{pr.delete(i),pr.size||removeEventListener(nf,sf)});var jw=(i,e,t,{onPeerHandshake:n,onHandshakeError:s,handshakeTimeoutMs:r=qw,isPassive:o=!1}={})=>{const a={},c={},l={},h={onPeerJoin:null,onPeerLeave:null};let u=Bt,f=null;const d=(C,U,{includePending:F=!1}={})=>(C?Array.isArray(C)?C:[C]:tn(F?a:c)).flatMap(L=>{const O=F?a[L]:c[L];return O?[Promise.resolve(U(L,O))]:(console.warn(`${Mn}: no peer with id ${L} found`),[])}),p=Xw({iterate:(C,U)=>d(C,(F,L)=>U(F,L)),isActive:C=>!!c[C],getSharedMediaPeer:C=>a[C]??null}),_=Ww({getPeer:(C,U)=>(U?a:c)[C],getPeerIds:C=>tn(C?a:c),canReceiveFromPeer:(C,U)=>!!(f!=null&&f.canReceiveFromPeer(C,U))}),m=_.makeInternalAction,g=_.handleData,x=_.makeAction,S=(C,U=et("peer disconnected"))=>{var L;const F=_i(U,"peer disconnected");f==null||f.clearPeer(C,F),delete a[C],delete c[C],_.clearPeer(C,F),(L=l[C])==null||L.splice(0).forEach(O=>O.reject(F)),delete l[C],p.clearPeer(C)},v=(C,U,F)=>{var B;const L=a[C];if(!L||U&&L!==U)return;const O=!!c[C];S(C,F),L.destroy(),O&&((B=h.onPeerLeave)==null||B.call(h,C)),e(C)},T=async()=>{await N.send(""),await new Promise(C=>setTimeout(C,99)),ki(a).forEach(([C,U])=>{U.destroy(),S(C,et("room left"))}),u(),t()},M=m(fi("ping")),R=m(fi("pong")),b=m(fi("signal")),E=m(fi("stream")),y=m(fi("track")),N=m(fi("leave"),{sendToPending:!0,receiveWhilePending:!0}),W=m(fi("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),G=m(fi("hsready"),{sendToPending:!0,receiveWhilePending:!0});return f=Rw({...n===void 0?{}:{onPeerHandshake:n},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:W.send,sendHandshakeReady:G.send,onActivate:(C,U)=>{var F;c[C]=U,(F=h.onPeerJoin)==null||F.call(h,C)},onFailure:(C,U,F)=>v(C,U,F)}),M.onMessage((C,U)=>R.send("",U)),R.onMessage((C,U)=>{var L;const F=l[U];(L=F==null?void 0:F.shift())==null||L.resolve(),F&&!F.length&&delete l[U]}),b.onMessage((C,U)=>{var F;c[U]&&((F=a[U])==null||F.signal(C))}),E.onMessage((C,U)=>p.receiveStreamMeta(C,U)),y.onMessage((C,U)=>p.receiveTrackMeta(C,U)),N.onMessage((C,U)=>v(U,void 0,et("peer left room"))),W.onMessage((C,U,F)=>f==null?void 0:f.receiveHandshakeData(C,U,F)),G.onMessage((C,U)=>f==null?void 0:f.receiveHandshakeReady(U)),i((C,U)=>{const F=a[U];if(F){if(F===C)return;F.destroy(),S(U,et("peer replaced"))}a[U]=C,f==null||f.addPeer(U,C),C.setHandlers({data:L=>g(U,L),stream:L=>p.receiveRemoteStream(U,L),track:(L,O)=>p.receiveRemoteTrack(U,L,O),signal:L=>{c[U]&&b.send(L,U)},close:()=>v(U,C,et("peer disconnected")),error:L=>{console.error(`${Mn} peer error:`,L),v(U,C,L)}}),f==null||f.start(U,C)}),np&&(u=Yw(()=>T().catch(Bt))),{makeAction:x,leave:T,ping:async C=>{if(!c[C])throw et(`no active peer with id ${C}`);const U=Date.now();return await new Promise((F,L)=>{const O=l[C]??(l[C]=[]),B=()=>{const D=l[C];if(!D)return;const X=D.indexOf(q);X>-1&&D.splice(X,1),D.length||delete l[C]},q={resolve:()=>{B(),F()},reject:D=>{B(),L(D)}};O.push(q),M.send("",C).catch(D=>q.reject(_i(D,"peer disconnected")))}),Date.now()-U},isPassive:()=>o,getPeers:()=>ip(ki(c).map(([C,U])=>[C,U.connection])),addStream:(C,U={})=>p.addStream(C,U,E.send),removeStream:(C,U={})=>{p.removeStream(C,U.target)},addTrack:(C,U,F={})=>p.addTrack(C,U,F,y.send),removeTrack:(C,U={})=>{p.removeTrack(C,U.target)},replaceTrack:(C,U,F={})=>p.replaceTrack(C,U,F,y.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(C){h.onPeerJoin=C,C&&tn(c).forEach(U=>C(U))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(C){h.onPeerLeave=C},get onPeerStream(){return p.onPeerStream},set onPeerStream(C){p.onPeerStream=C},get onPeerTrack(){return p.onPeerTrack},set onPeerTrack(C){p.onPeerTrack=C}}};const lp=1,up=2,rf=(i,e)=>{const t=yi(i),n=new Uint8Array(3+t.byteLength+e.byteLength);return n[0]=lp,n[1]=t.byteLength>>>8&255,n[2]=t.byteLength&255,n.set(t,3),n.set(e,3+t.byteLength),n},Kw=(i,e)=>{const t=yi(i),n=new Uint8Array(4+t.byteLength);return n[0]=up,n[1]=Number(e),n[2]=t.byteLength>>>8&255,n[3]=t.byteLength&255,n.set(t,4),n},$w=i=>{const e=new Uint8Array(i);if(e.byteLength<3)return null;if(e[0]===lp){const s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:Fi(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==up||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),n=4+t;return t<=0||e.byteLength<n?null:{type:"presence",roomToken:Fi(e.subarray(4,n)),isPresent:e[1]===1}},hp=i=>{const{connection:e,channel:t}=i;return i.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||(t==null?void 0:t.readyState)==="closing"||(t==null?void 0:t.readyState)==="closed"},Zw=i=>{if(hp(i))return"stale";const{channel:e}=i;return!e||e.readyState!=="open"?"transient":"live"};var Jw=class{constructor(){Nt(this,"byApp",{});Nt(this,"roomPresenceHandlers",{})}getMap(i){var e;return(e=this.byApp)[i]??(e[i]={})}get(i,e){var t;return(t=this.byApp[i])==null?void 0:t[e]}isPeerStale(i){return hp(i)}getHealth(i){return this.isPeerStale(i)?"stale":"live"}setRoomPresenceHandler(i,e){return this.roomPresenceHandlers[i]=e,()=>{this.roomPresenceHandlers[i]===e&&delete this.roomPresenceHandlers[i]}}sendRoomPresence(i,e,t){i.isClosing||i.peer.isDead||i.peer.sendData(Kw(e,t))}clear(i,e,{destroyPeer:t}){const n=this.byApp[i],s=n==null?void 0:n[e];if(!s||s.isClosing)return;s.idleTimer=ot(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();const r=As(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete n[e],r.forEach(o=>{var a,c;(c=(a=o.handlers).close)==null||c.call(a),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),tn(n).length===0&&delete this.byApp[i]}register(i,e,t,n){const s=this.getMap(i),r=s[e];if(r){if(r.idleTimer=ot(r.idleTimer),r.peer===t)return r;this.clear(i,e,{destroyPeer:!0})}const o={appId:i,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:cp(),idleMs:n,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(i,e,{destroyPeer:!1}),error:a=>{console.error(`${Mn} peer error:`,a),this.clear(i,e,{destroyPeer:!1})},track:(a,c)=>this.dispatchTrack(o,a,c)}),s[e]=o,o}bind(i,e,t,{onDetach:n}){const s=t.bindings[i];if(s)return t.idleTimer=ot(t.idleTimer),{proxy:s.proxy,isNew:!1};const r={roomId:i,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Bt,proxy:{}},o=()=>{t.bindings[i]&&(this.pruneRoomOwnership(t,i),delete t.bindings[i],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===i&&(t.controlRoomId=tn(t.bindings)[0]??null),n(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!r.roomToken){r.pendingSendData.push(c);return}t.peer.sendData(rf(r.roomToken,c))},destroy:()=>o(),setHandlers:c=>{const{signal:l,...h}=c;Object.assign(r.handlers,h),l&&(r.handlers.signal=l),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(i),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(i),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const h=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=h.rooms.size===0;return h.stream=l,h.rooms.add(i),t.trackOwners.set(c,h),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(f=>f.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(i),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const h=t.trackOwners.get(c);if(h){t.trackOwners.delete(c);const u=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(f=>u.rooms.add(f)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return r.proxy=a,r.detach=o,t.bindings[i]=r,t.controlRoomId??(t.controlRoomId=i),t.idleTimer=ot(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[i]!==r)return;r.roomToken=c,t.bindingsByToken[c]=r;const l=t.pendingDataByToken.get(c);l!=null&&l.length&&(r.pendingData.push(...l),t.pendingDataByToken.delete(c)),r.pendingSendData.splice(0).forEach(h=>t.peer.sendData(rf(c,h))),this.flushBindingQueues(r)}),{proxy:a,isNew:!0}}pruneRoomOwnership(i,e){i.streamOwners.forEach((t,n)=>{t.delete(e),t.size===0&&(i.streamOwners.delete(n),i.peer.removeStream(n))}),i.trackOwners.forEach((t,n)=>{t.rooms.delete(e),t.rooms.size===0&&(i.trackOwners.delete(n),i.peer.removeTrack(n))})}scheduleIdleTimer(i){i.isClosing||tn(i.bindings).length>0||(i.idleTimer=ot(i.idleTimer),i.idleTimer=setTimeout(()=>{var t;const e=(t=this.byApp[i.appId])==null?void 0:t[i.peerId];!e||tn(e.bindings).length>0||this.clear(i.appId,i.peerId,{destroyPeer:!0})},i.idleMs))}getSignalBinding(i){if(i.controlRoomId){const t=i.bindings[i.controlRoomId];if(t!=null&&t.handlers.signal)return t}const e=As(i.bindings).find(t=>!!t.handlers.signal);return e?(i.controlRoomId=e.roomId,e):null}flushBindingQueues(i){const{handlers:e}=i;e.data&&i.pendingData.length>0&&i.pendingData.splice(0).forEach(t=>{var n;return(n=e.data)==null?void 0:n.call(e,t)}),(e.track||e.stream)&&i.pendingTracks.length&&i.pendingTracks.splice(0).forEach(({track:t,stream:n})=>{var s,r;(s=e.track)==null||s.call(e,t,n),(r=e.stream)==null||r.call(e,n)})}dispatchData(i,e){var s,r;const t=$w(e);if(!t)return;if(t.type==="presence"){t.isPresent?i.remoteRoomTokens.add(t.roomToken):i.remoteRoomTokens.delete(t.roomToken),(r=(s=this.roomPresenceHandlers)[i.appId])==null||r.call(s,i.peerId,t.roomToken,t.isPresent);return}const n=i.bindingsByToken[t.roomToken];if(!n){const o=i.pendingDataByToken.get(t.roomToken)??[];o.push(t.payload),i.pendingDataByToken.set(t.roomToken,o);return}n.handlers.data?n.handlers.data(t.payload):n.pendingData.push(t.payload)}dispatchSignal(i,e){var t,n,s;(s=(t=this.getSignalBinding(i))==null?void 0:(n=t.handlers).signal)==null||s.call(n,e)}dispatchTrack(i,e,t){As(i.bindings).forEach(n=>{var s,r,o,a;if(n.handlers.track||n.handlers.stream){(r=(s=n.handlers).track)==null||r.call(s,e,t),(a=(o=n.handlers).stream)==null||a.call(o,t);return}n.pendingTracks.push({track:e,stream:t})})}};const Qw=23333,eT=12,tT=7533,nT=23333,dl="__legacy__",Ko="offer-placeholder",iT=["offer","answer","candidate"],sT=i=>{if(typeof i=="string")try{const e=ks(i);return e&&typeof e=="object"?e:null}catch{return null}return i&&typeof i=="object"?i:null},lr=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,rT=i=>iT.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),fp=(i,e,t,n,s,r)=>{i.toCipher(e).then(o=>{i.isLeaving()||!r()||n(t,Zt(s(o.sdp)))})},oT=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),aT=i=>{var e;return[...i.turnConfig??[],...((e=i.rtcConfig)==null?void 0:e.iceServers)??[]].some(({urls:t})=>(Array.isArray(t)?t:[t]).some(n=>/^turns?:/i.test(n)))},cT=(i,e)=>`could not connect to peer ${i} after exchanging SDP; ${aT(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,la=(i,e,t)=>{var n;i.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,(n=i.onJoinError)==null||n.call(i,{error:cT(t,i.config),appId:i.appId,peerId:t,roomId:i.roomId}))},Or=(i,e)=>i[e]??(i[e]=oT()),sn=i=>{i.connectedPeer?i.status="connected":i.answeringPeer?i.status="answering":i.offerPeer||i.offerRelays.some(Boolean)?i.status="offering":i.status="idle"},Ho=(i,e)=>{i.answeringPeer===e&&(i.answeringExpiryTimer=ot(i.answeringExpiryTimer),i.answeringPeer=null,i.answerSent=!1,sn(i))},pl=(i,e,t)=>{i.connectedPeer&&(i.connectedPeer.isDead||i.connectedPeer.destroy(),i.connectedPeer=null,i.connectedPeerUnhealthySinceMs=null,sn(i))},Yl=(i,e)=>{i.offerRelayTimers[e]=ot(i.offerRelayTimers[e]),i.offerRelays[e]&&(i.offerRelays[e]=void 0,sn(i))},of=(i,e)=>{(i==null?void 0:i.offerRelays[e])===Ko&&Yl(i,e)},lT=i=>{if(i.isDead||i.connection.connectionState==="closed")return!0;try{return!!i.connection.remoteDescription}catch{return!0}},Fr=(i,e)=>{const t=i.offerAnswered;i.offerExpiryTimer=ot(i.offerExpiryTimer),i.offerInitPromise=null,i.offerRelays.forEach((n,s)=>Yl(i,s)),i.offerRelays=[],i.offerSignalRelays=[],i.offerRelayTimers=[],i.offerSignalBacklog=[],i.offerPeer&&i.offerPeer!==i.connectedPeer&&(t||lT(i.offerPeer)?i.offerPeer.isDead||i.offerPeer.destroy():e.recycle(i.offerPeer)),i.offerPeer=null,i.offerId=null,i.offerSdp=null,i.offerAnswered=!1,i.connectionErrorReported=!1,sn(i)},uT=(i,e,t,n)=>{ot(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const s=i.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==n||(s.answerSent&&la(i,s,t),n.destroy(),Ho(s,n),i.checkDeactivate())},nT)},hT=async(i,e,t)=>{const n=t?[t,dl]:[dl];for(const s of n){const r=i.pendingCandidates[s];if(r!=null&&r.length){delete i.pendingCandidates[s];for(const o of r)await e.signal(o)}}},dp=(i,e,t,n=ql)=>{ot(e.offerExpiryTimer);const s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const r=i.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&la(i,r,t),Fr(r,i.offerPool),i.checkDeactivate())},n)},fT=(i,e,t,n)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const s=(await i.offerPool.checkout(1,!1,i.encryptOffer))[0];if(!s)throw et("failed to allocate offer peer");const{peer:r,offer:o}=s;e.offerPeer=r,e.offerId=Xs(eT),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],sn(e);const a=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&la(i,e,t),Fr(e,i.offerPool)),i.disconnectPeer(r,t),i.checkDeactivate()};return r.setHandlers({connect:()=>i.connectPeer(r,t,n),signal:c=>{e.offerPeer===r&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l==null?void 0:l(c)))},close:a,error:a}),dp(i,e,t),{peer:r,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),dT=async(i,e,t,n,s)=>{if(n){i.attachSharedPeerToRoom(t,n);return}const r=i.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){of(r,e);return}if(r.offerRelays[e]!==Ko)return;const[o,a]=await qi([Ur(Nr(i.rootTopicPlaintext,t)),fT(i,r,t,e)]);if(i.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==Ko){of(r,e);return}r.offerRelayTimers[e]=ot(r.offerRelayTimers[e]),r.offerRelays[e]=!0,sn(r),r.offerRelayTimers[e]=setTimeout(()=>_T(i,t,e),(i.announceIntervals[e]??i.announceIntervalMs)*.9);let c=!1;r.offerSignalRelays[e]=l=>{c&&(i.isLeaving()||r.connectedPeer||r.offerPeer!==a.peer||r.offerId!==a.offerId||l.type!=="candidate"||fp(i,l,o,s,h=>({peerId:an,offerId:a.offerId,candidate:h,...i.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===a.peer&&r.offerId===a.offerId))},s(o,Zt({peerId:an,offerId:a.offerId,offer:a.offer,...i.isPassive?{passive:!0}:{}})),c=!0,r.offerSignalBacklog.forEach(l=>{var h,u;return(u=(h=r.offerSignalRelays)[e])==null?void 0:u.call(h,l)})},pT=async(i,e,t,n,s,r,o)=>{var d;const a=Or(i.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;const c=!!(a.offerPeer||a.offerRelays.some(Boolean));if((c||r)&&an<t)return;c&&Fr(a,i.offerPool);const l=i.initPeer(!1,i.config);a.answeringPeer=l,a.answerSent=!1,a.connectionErrorReported=!1,uT(i,a,t,l),sn(a);const h=()=>{a.answeringPeer===l&&!a.connectedPeer&&a.answerSent&&la(i,a,t),Ho(a,l),i.disconnectPeer(l,t),i.checkDeactivate()};l.setHandlers({connect:()=>i.connectPeer(l,t,e),close:h,error:h});let u;try{u=await i.toPlain({type:"offer",sdp:n})}catch{Ho(a,l),(d=i.onJoinError)==null||d.call(i,{error:"incorrect room password when decrypting offer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(l.isDead){Ho(a,l);return}const f=await Ur(Nr(i.rootTopicPlaintext,t));i.isLeaving()||(l.setHandlers({signal:p=>{i.isLeaving()||a.answeringPeer!==l||l.isDead||p.type!=="answer"&&p.type!=="candidate"||fp(i,p,f,o,_=>{const m={peerId:an};return p.type==="answer"?(a.answerSent=!0,m.answer=_):m.candidate=_,s&&(m.offerId=s),i.isPassive&&(m.passive=!0),m},()=>a.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await hT(a,l,s))},mT=async(i,e,t,n,s)=>{var u;let r;try{r=await i.toPlain({type:sp,sdp:t})}catch{return}const o=Or(i.peerStates,e),a=n&&(o!=null&&o.offerPeer)&&o.offerId===n?o.offerPeer:null,c=(o==null?void 0:o.answeringPeer)??null,l=!n&&(o!=null&&o.offerPeer)?o.offerPeer:null,h=s&&!s.isDead?s:a??c??l;if(!h||h.isDead){const f=n??dl;((u=o.pendingCandidates)[f]??(u[f]=[])).push(r);return}h.signal(r)},gT=async(i,e,t,n,s,r)=>{var a;let o;try{o=await i.toPlain({type:"answer",sdp:n})}catch{(a=i.onJoinError)==null||a.call(i,{error:"incorrect room password when decrypting answer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(r)i.offerPool.claimLeased(r),r.setHandlers({connect:()=>i.connectPeer(r,t,e),close:()=>i.disconnectPeer(r,t)}),r.signal(o);else{const c=i.peerStates[t];if(!c||!c.offerPeer||c.offerAnswered||s&&c.offerId&&s!==c.offerId||c.offerPeer.isDead)return;c.offerAnswered=!0,dp(i,c,t,Qw),c.offerPeer.signal(o)}},_T=(i,e,t)=>{const n=i.peerStates[e];!n||n.connectedPeer||n.offerRelays[t]&&(Yl(n,t),i.checkDeactivate())},vT=i=>e=>async(t,n,s)=>{var v;if(i.isLeaving())return;const r=sT(n);if(!r||rT(r))return;const o=lr(r,"peerId")??"",a=lr(r,"offer"),c=lr(r,"answer"),l=lr(r,"candidate"),h=lr(r,"offerId"),u=r.peer,f=r.hasOutgoingOffer===!0,d=r.passive===!0;if(!o||o===an)return;const[p,_]=await qi([i.rootTopicP,i.selfTopicP]);if(i.isLeaving()||t!==p&&t!==_||i.isPassive&&d||(i.isPassive&&!i.isActive&&!c&&!l&&(i.isActive=!0,(v=i.requeueAnnounce)==null||v.call(i)),i.isPassive&&!i.isActive))return;const m=i.peerStates[o],g=m==null?void 0:m.connectedPeer;if(g&&m){const T=Zw(g);if(T==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(T==="stale")pl(m);else{const M=Date.now(),R=m.connectedPeerUnhealthySinceMs??M;if(m.connectedPeerUnhealthySinceMs=R,M-R<tT)return;pl(m)}}let x=i.sharedPeers.get(i.appId,o);x&&i.sharedPeers.getHealth(x.peer)==="stale"&&(i.sharedPeers.clear(i.appId,o,{destroyPeer:!0}),x=void 0);const S=!!(o&&!a&&!c&&!l);if(S&&!x){const T=Or(i.peerStates,o),M=an<o;if(T.answeringPeer||T.connectedPeer||T.offerAnswered)return;if(!M&&!T.offerPeer){const R=await Ur(Nr(i.rootTopicPlaintext,o));!i.isLeaving()&&!T.connectedPeer&&s(R,Zt({peerId:an}));return}if(T.offerRelays[e])return;T.offerRelays[e]=Ko,sn(T)}if(x&&(a||c||l)){if(x.bindings[i.roomId])return;i.attachSharedPeerToRoom(o,x);return}if(S)return dT(i,e,o,x,s);if(a)return pT(i,e,o,a,h,f,s);if(l)return mT(i,o,l,h,u);if(c)return gT(i,e,o,c,h,u)},Po=5333,xT=[233,533,1333],yT=7533,MT=123333;var ST=({init:i,subscribe:e,announce:t,deactivate:n})=>{const s={},r={},o={},a={},c=new Jw,l=()=>As(s).some(T=>tn(T).length>0),h=T=>r[T]??(r[T]={}),u=T=>o[T]??(o[T]={}),f=(T,M,R)=>{c.getHealth(T.peer)==="live"&&c.sendRoomPresence(T,M,R)},d=(T,M)=>{ki(r[T]??{}).forEach(([R,b])=>{if(!b.shouldAdvertise())return;const{roomToken:E,roomTokenPromise:y}=b;if(E){f(M,E,!0);return}y.then(N=>{var W;((W=r[T])==null?void 0:W[R])===b&&b.roomToken===N&&(c.get(T,M.peerId)!==M||M.isClosing||b.shouldAdvertise()&&f(M,N,!0))})})},p=(T,M,R)=>As(c.getMap(T)).forEach(b=>f(b,M,R)),_=T=>{a[T]||(a[T]=c.setRoomPresenceHandler(T,(M,R,b)=>{var N,W,G;if(!b)return;const E=c.get(T,M),y=(N=o[T])==null?void 0:N[R];!E||!y||(G=(W=r[T])==null?void 0:W[y])==null||G.attachSharedPeerToRoom(M,E)}))},m=T=>{var M;s[T]&&tn(s[T]).length>0||((M=a[T])==null||M.call(a),delete a[T],delete r[T],delete o[T])};let g=!1,x=[],S=null,v=Bt;return(T,M,R)=>{var xe,Xe;if(!T)throw et("requires a config map as the first argument");if(R&&typeof R!="object")throw et("third argument must be a callbacks object");const{appId:b}=T,E=R==null?void 0:R.onJoinError,y=R==null?void 0:R.onPeerHandshake,N=R==null?void 0:R.handshakeTimeoutMs;if(!b)throw et("config map is missing appId field");if(!M)throw et("roomId argument required");if(N!==void 0&&(!Number.isFinite(N)||N<=0))throw et("handshakeTimeoutMs must be a positive number");if((xe=s[b])!=null&&xe[M])return s[b][M];_(b);const W=Nr(Mn,b,M),G=Ur(W),C=Ur(Nr(W,an)),U=xw(T.password??"",b,M),F=yw(b,M),L=T._test_only_sharedPeerIdleMs??MT;let O=!1;const B=J=>async ie=>({type:ie.type,sdp:await J(U,ie.sdp)}),q=B(Sw),D=B(Mw),X=c.getMap(b),re=()=>jh(!0,T);let Y=!1;S||(S=new Ew(re));const Z=S,le=async J=>{const ie=await J.getOffer(Date.now()-J.created>ql);if(!ie||ie.type!=="offer")throw et("failed to get offer for peer");return(await D(ie)).sdp},ae=(J,ie)=>{const he=Or(je.peerStates,J);he.answeringExpiryTimer=ot(he.answeringExpiryTimer),he.answeringPeer=null;const{proxy:ge,isNew:te}=c.bind(M,F,ie,{onDetach:()=>{const Pe=je.peerStates[J];(Pe==null?void 0:Pe.connectedPeer)===ie.peer&&(Pe.connectedPeer=null,Pe.connectedPeerUnhealthySinceMs=null,sn(Pe))}});he.connectedPeer=ie.peer,he.connectedPeerUnhealthySinceMs=null,sn(he),te&&j(ge,J),Fr(he,Z)},Re=(J,ie,he)=>{if(O){J.destroy();return}const ge=Or(je.peerStates,ie);if(ge.connectedPeer){const be=X[ie];if(be&&ge.connectedPeer===be.peer&&be.bindings[M])return;ge.connectedPeer!==J&&!J.isDead&&J.destroy();return}let te=X[ie];if(te&&c.getHealth(te.peer)==="stale"&&(c.clear(b,ie,{destroyPeer:!0}),te=void 0),te&&te.peer!==J){J.isDead||J.destroy(),ae(ie,te);return}const Pe=!te;te||(te=c.register(b,ie,J,L)),ae(ie,te),Pe&&d(b,te)},Ne=(J,ie)=>{var ge;if(O)return;const he=je.peerStates[ie];(he==null?void 0:he.connectedPeer)===J&&(pl(he),z(),!De&&Y&&((ge=je.requeueAnnounce)==null||ge.call(je)))},De=!!T.passive;let Ye=null,Fe,dt=Bt;const z=()=>{if(!De||!je.isActive)return;let J=!1;ki(je.peerStates).forEach(([ie,he])=>{he.connectedPeer||he.answeringPeer||he.offerInitPromise||he.offerPeer||he.offerRelays.some(Boolean)?J=!0:he.status==="idle"&&delete je.peerStates[ie]}),J||(je.isActive=!1,Fe=ot(Fe),P.forEach(ot),P.length=0,dt(),Ye!=null&&Ye.roomToken&&p(b,Ye.roomToken,!1))},je={appId:b,roomId:M,config:T,peerStates:{},rootTopicPlaintext:W,rootTopicP:G,selfTopicP:C,toPlain:q,toCipher:D,isLeaving:()=>O,isPassive:De,isActive:!De,onJoinError:E,sharedPeers:c,offerPool:Z,encryptOffer:le,initPeer:jh,connectPeer:Re,disconnectPeer:Ne,attachSharedPeerToRoom:ae,checkDeactivate:z,announceIntervals:[],announceIntervalMs:Po},Ve={config:T,appId:b,roomId:M,isPassive:De},We=vT(je);if(!g){const J=i(T);x=(Array.isArray(J)?J:[J]).map(ie=>Promise.resolve(ie)),g=!0,v=(Xe=T.relayConfig)!=null&&Xe.manualReconnection?Bt:gw()}!De&&!Z.isActive&&Z.warmup(),je.announceIntervals=x.map(()=>Po);const Le=x.map(()=>Po),tt=x.map(()=>0),Ce=x.map(()=>0),P=[],w=x.map(async(J,ie)=>e(await J,await G,await C,We(ie),he=>Z.getOffers(he,le),Ve));qi([G,C]).then(([J,ie])=>{if(O)return;const he=async(ge,te)=>{var Q;if(O||De&&!je.isActive)return;const Pe=De?{passive:!0}:void 0;let be;try{be=await t(ge,J,ie,Pe,Ve),Ce[te]=0}catch(se){const me=Ce[te]??0;me===0&&((Q=T.relayConfig)==null?void 0:Q.warnOnRelayFailure)!==!1&&console.warn(`${Mn}: announce failed - ${Bs(se,"")}`),Ce[te]=me+1}if(O||De&&!je.isActive||be&&typeof be!="number"&&"stopAnnouncing"in be)return;typeof be=="number"?(je.announceIntervals[te]=be,Le[te]=be):be&&(Le[te]=be.nextAnnounceMs,Y||(Y=be.reannounceOnDisconnect===!0));const nt=tt[te]??0;tt[te]=nt+1;const k=Le[te]??Po,fe=xT[nt];P[te]=setTimeout(()=>{he(ge,te)},typeof fe=="number"?Math.min(k,fe):k)};dt=()=>{n&&x.forEach(async ge=>{const te=await ge;O||n(te,J,ie,Ve)})},je.requeueAnnounce=()=>{P.forEach(ot),P.length=0,Fe=ot(Fe),Z.isActive||Z.warmup(),Ye!=null&&Ye.roomToken&&p(b,Ye.roomToken,!0),Fe=setTimeout(z,yT),x.forEach(async(ge,te)=>{const Pe=await ge;Pe&&!O&&(tt[te]=0,he(Pe,te))})},w.forEach(async(ge,te)=>{if(await ge,O)return;const Pe=await x[te];Pe&&!O&&(!De||je.isActive)&&he(Pe,te)})});let j=Bt;const{compose:ne}=Aw(T.password??"",b,M),oe=ne(y),ee={...oe?{onPeerHandshake:oe}:{},...N===void 0?{}:{handshakeTimeoutMs:N},isPassive:De,onHandshakeError:(J,ie)=>E==null?void 0:E({error:ie.replace(/^handshake failed: /,""),appId:b,peerId:J,roomId:M})};s[b]??(s[b]={});const ye=h(b),pe=jw(J=>j=J,J=>{if(O)return;const ie=je.peerStates[J];ie!=null&&ie.connectedPeer&&(ie.connectedPeer=null,sn(ie),z())},()=>{var ie,he;O=!0,j=Bt;const J=(ie=r[b])==null?void 0:ie[M];J!=null&&J.roomToken&&(p(b,J.roomToken,!1),(he=o[b])==null||delete he[J.roomToken],o[b]&&!tn(o[b]).length&&delete o[b]),r[b]&&(delete r[b][M],tn(r[b]).length||delete r[b]),ki(je.peerStates).forEach(([ge,te])=>{if(te.answeringExpiryTimer=ot(te.answeringExpiryTimer),te.connectedPeer&&!te.connectedPeer.isDead){const Pe=X[ge];(!Pe||Pe.peer!==te.connectedPeer)&&te.connectedPeer.destroy()}te.answeringPeer&&!te.answeringPeer.isDead&&te.answeringPeer.destroy(),Fr(te,Z),te.connectedPeer=null,te.answeringPeer=null,sn(te)}),s[b]&&(delete s[b][M],tn(s[b]).length===0&&delete s[b]),P.forEach(ot),Fe=ot(Fe),w.forEach(async ge=>{(await ge)()}),!l()&&(g=!1,Z.destroy(),S=null,v(),m(b))},ee);return Ye={roomToken:null,roomTokenPromise:F,attachSharedPeerToRoom:ae,shouldAdvertise:()=>!De||je.isActive},ye[M]=Ye,F.then(J=>{var he;const ie=Ye;!ie||O||((he=r[b])==null?void 0:he[M])!==ie||(ie.roomToken=J,u(b)[J]=M,As(X).forEach(ge=>{ge.remoteRoomTokens.has(J)&&ae(ge.peerId,ge)}),(!De||je.isActive)&&p(b,J,!0))}),s[b][M]=pe}};const wT=["offer","answer","candidate"],TT=6e4,ET=i=>{if(typeof i=="string")try{const e=ks(i);return e&&typeof e=="object"?e:null}catch{return null}return i},uc=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,AT=i=>wT.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),bT=i=>{const e=ET(i);if(!e||AT(e))return!1;const t=uc(e,"peerId");return!!(t&&t!==an&&e.passive!==!0&&!uc(e,"answer")&&!uc(e,"candidate"))},hc=i=>{if(!i)throw et("topic strategy missing room context");return i},af=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n}),fc=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n});var RT=({steadyAnnounceIntervalMs:i=TT,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:n,publishTopic:s,unpublishTopic:r})=>ST({init:t,subscribe:async(o,a,c,l,h,u)=>{const f=hc(u),d=(T,M)=>void s(o,T,M,fc(f,"signal",a,c));let p=null,_=!1,m=null,g=!1;const x=T=>{_||(_=!0,T())},S=()=>(m||(m=Promise.resolve(n(o,c,(T,M)=>{g||l(T,M,d)},af(f,"self",a,c))).then(T=>{p=T,g&&x(T)})),m);f.isPassive||await S();const v=await n(o,a,async(T,M)=>{g||(f.isPassive&&bT(M)&&await S(),g||await l(T,M,d))},af(f,"root",a,c));return()=>{g=!0,p&&x(p),v()}},announce:async(o,a,c,l,h)=>{const u=hc(h),f=await s(o,a,Zt({peerId:an,...l}),fc(u,"announce",a,c));return typeof f=="number"||f!==void 0&&"stopAnnouncing"in f?f:{nextAnnounceMs:(f==null?void 0:f.nextAnnounceMs)??i,reannounceOnDisconnect:(f==null?void 0:f.reannounceOnDisconnect)??e}},...r?{deactivate:(o,a,c,l)=>{const h=hc(l);return r(o,a,fc(h,"announce",a,c))}}:{}});const pp=mw(i=>i.socket),CT=5,mp="x",gp="EVENT",{secretKey:PT,publicKey:LT}=tp.keygen(),IT=Dr(LT),DT={},NT={},dc={},cf=250,$o=6e4,UT=15*6e4,OT=5333,Br=new WeakMap,ml=new WeakSet,zi=new WeakMap,lf=i=>{const e=Br.get(i),t=Math.min(e!=null&&e.delayMs?Math.max($o,e.delayMs*2):$o,UT);return Br.set(i,{delayMs:t,untilMs:Date.now()+t}),t},FT=i=>{const e=Br.get(i);if(!e)return 0;const t=e.untilMs-Date.now();return t>0?t:0},pc=i=>({nextAnnounceMs:i}),BT={stopAnnouncing:!0},kT=i=>{var t;if(ml.has(i))return!1;const e=zi.get(i);return e&&(clearTimeout(e.timer),zi.delete(i)),ml.add(i),Br.delete(i),(t=i.close)==null||t.call(i),!0},zT=(i,e)=>{const t=zi.get(i);t&&(clearTimeout(t.timer),t.eventIds.add(e));const n=(t==null?void 0:t.eventIds)??new Set([e]),s=setTimeout(()=>{zi.delete(i)},OT);zi.set(i,{eventIds:n,timer:s})},HT=(i,e)=>{const t=zi.get(i);return t!=null&&t.eventIds.has(e)?(clearTimeout(t.timer),zi.delete(i),!0):!1},_p=()=>Math.floor(Date.now()/1e3),vp=i=>dc[i]??(dc[i]=rp(i,1e4)+2e4),VT=async(i,e)=>{const t={kind:vp(i),tags:[[mp,i]],created_at:_p(),content:e,pubkey:IT},n=await ca("SHA-256",Zt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return Zt([gp,{...t,id:Dr(n),sig:Dr(await tp.signAsync(n,PT))}])},Zn={},xp=i=>{i.flushWaiters.forEach(e=>e()),i.flushWaiters.clear()},GT=(i,e,t)=>{var s;const n=Zn[s=i.url]??(Zn[s]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});n.topics.set(e,t),yp(i,n)},WT=(i,e)=>{const t=Zn[i.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),xp(t),t.subIds.forEach(n=>i.send(Zt(["CLOSE",n]))),delete Zn[i.url]):yp(i,t))},yp=(i,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{Mp(i)}finally{xp(e)}},0))},XT=i=>{const e=Zn[i.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},Mp=i=>{const e=Zn[i.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],n=[],s=_p();for(let r=0;r<t.length;r+=cf)n.push(t.slice(r,r+cf));for(;e.subIds.length>n.length;){const r=e.subIds.pop();r&&i.send(Zt(["CLOSE",r]))}n.forEach((r,o)=>{var c;const a=(c=e.subIds)[o]??(c[o]=Xs(64));i.send(Zt(["REQ",a,{kinds:[...new Set(r.map(vp))],since:s,"#x":r}]))})},qT=i=>{const e=Zn[i.url];e&&e.topics.size>0&&Mp(i)},YT=RT({init:i=>hw(i,jT,CT,!0).map(e=>{const t=pp.register(e,()=>pw(e,n=>{var c,l;const[s,r,o,a]=ks(n);if(s!==gp){const h=`${Mn}: relay failure from ${t.url} - `,u=s==="CLOSED"&&typeof o=="string"?o:a,f=s==="OK"&&o===!1,d=f&&(u==null?void 0:u.startsWith("rate-limited:")),p=f&&(u==null?void 0:u.startsWith("duplicate:")),_=s==="CLOSED"||f&&!d&&!p,m=s==="OK"&&HT(t,r);if(_&&!kT(t))return;d?lf(t):m&&Br.delete(t),!p&&((c=i.relayConfig)==null?void 0:c.warnOnRelayFailure)!==!1&&(s==="NOTICE"?console.warn(h+r):(f||s==="CLOSED")&&console.warn(h+u));return}if(o&&typeof o=="object"&&"content"in o){const{content:h}=o,u=NT[r];if(u){u(DT[r]??"",h);return}const f=Zn[t.url];if(f!=null&&f.subIds.includes(r)&&o.tags){const d=o.tags.find(p=>p[0]===mp);d!=null&&d[1]&&((l=f.topics.get(d[1]))==null||l(d[1],h))}}},()=>qT(t)));return t.ready}),subscribeTopic:(i,e,t,n)=>{GT(i,e,(o,a)=>void t(o,a));const r=()=>{WT(i,e)};return n.kind==="root"?XT(i).then(()=>r):r},publishTopic:async(i,e,t,n)=>{if(ml.has(i)||i.isClosed)return n.kind==="announce"?BT:void 0;if(n.kind==="announce"){const a=FT(i);if(a>0)return pc(Math.max($o,a))}const s=await VT(e,typeof t=="string"?t:Zt(t)),r=i.socket.readyState===1;if(i.send(s),n.kind!=="announce")return;if(!r)return pc(lf(i));const o=ks(s)[1].id;return zT(i,o),pc($o)}}),mc=pp.getSockets,jT=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(i=>"wss://"+i),KT=200,$T=16,ZT=12,uf="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Lo=i=>Math.round(i*100)/100,ua=i=>typeof i=="number"&&Number.isFinite(i),Sp=i=>ua(i)&&Math.abs(i)<=KT;function JT(i){const e=(i.moving?1:0)|(i.firing?2:0)|(i.alive?4:0);return[Lo(i.x),Lo(i.y),Lo(i.z),Lo(i.yaw),e]}function QT(i){if(!Array.isArray(i)||i.length!==5)return null;const[e,t,n,s,r]=i;return![e,t,n].every(Sp)||!ua(s)||!Number.isInteger(r)?null:{x:e,y:t,z:n,yaw:s,moving:!!(r&1),firing:!!(r&2),alive:!!(r&4)}}function jl(i){return typeof i!="string"?"Pemain":i.replace(/[^\p{L}\p{N} _.-]/gu,"").trim().slice(0,$T)||"Pemain"}function eE(i,e){const t=i&&typeof i=="object"?i:{},n=e.includes(t.char)?t.char:e[0];return{name:jl(t.name),char:n}}function tE(i,e){if(!i||typeof i!="object"||!ua(i.damage)||i.damage<=0||typeof i.weapon!="string"||!Object.hasOwn(e,i.weapon))return null;const t=e[i.weapon],n=i.head===!0;return{damage:Math.min(i.damage,n?t.head:t.body),head:n,weapon:i.weapon}}function nE(i,e){return!i||typeof i!="object"||typeof i.killer!="string"||i.killer.length===0||i.killer.length>64||!ua(i.bounty)||i.bounty<0?null:{killer:i.killer,bounty:Math.min(Math.floor(i.bounty),e),head:i.head===!0}}function iE(i){if(!Array.isArray(i)||i.length!==2)return null;const e=t=>Array.isArray(t)&&t.length===3&&t.every(Sp);return e(i[0])&&e(i[1])?{from:i[0],to:i[1]}:null}function sE(i,e,t){return!i||!i.alive?!1:Math.hypot(i.x-e.x,i.z-e.z)<=t}function rE(i,e=()=>performance.now()){const t=new Map;return{hitSent(n){t.set(n,e())},claim(n){const s=t.get(n);return t.delete(n),s!==void 0&&e()-s<=i},forget(n){t.delete(n)}}}function oE(i=Math.random){return Array.from({length:5},()=>uf[Math.floor(i()*uf.length)]).join("")}function aE(i){return String(i??"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,ZT)}function cE(i,e=()=>performance.now()){const t=new Map;return{allow(n){const s=e(),r=t.get(n)??[];for(;r.length>0&&s-r[0]>=1e3;)r.shift();return t.set(n,r),r.length>=i?!1:(r.push(s),!0)},forget(n){t.delete(n)}}}const lE={VITE_TURN_CREDENTIAL:"zBghyrwUA3WM7sWbqSNaBhF9MYU=",VITE_TURN_URLS:"turn:free.expressturn.com:3478,turn:free.expressturn.com:3478?transport=tcp",VITE_TURN_USERNAME:"000000002108398748"},uE="bounty-arena-v3",hf=["wss://nos.lol","wss://purplerelay.com","wss://relay.damus.io","wss://nostr-relay.corb.net","wss://relay.mostro.network","wss://relay.sigit.io","wss://top.testrelay.top","wss://nostr.mom"];function hE(){const i=lE,e=String(i.VITE_TURN_URLS).split(",").map(t=>t.trim()).filter(Boolean);return e.length===0?[]:[{urls:e,username:i.VITE_TURN_USERNAME,credential:i.VITE_TURN_CREDENTIAL}]}const wp=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]},{urls:"stun:stun.cloudflare.com:3478"},...hE()],fE=wp.some(i=>i.credential),dE=20,ff=7,pE={hit:10,shot:12,death:2};function mE({roomCode:i,profile:e,roster:t,damageCaps:n,maxBounty:s}){const r=new URLSearchParams(window.location.search).has("relayonly"),o={iceServers:wp,...r?{iceTransportPolicy:"relay"}:{}},a=YT({appId:uE,relayConfig:{urls:hf},rtcConfig:o},i),c=new Map,l={join:[],leave:[],state:[],hit:[],death:[],shot:[],full:[]},h=Object.fromEntries(Object.entries(pE).map(([v,T])=>[v,cE(T)])),u=(v,...T)=>l[v].forEach(M=>M(...T));let f=!1;const d=a.makeAction("hello"),p=a.makeAction("state"),_=a.makeAction("hit"),m=a.makeAction("death"),g=a.makeAction("shot");a.onPeerJoin=v=>{var T,M;f||c.size>=ff||(M=(T=d.send(e,{target:v}))==null?void 0:T.catch)==null||M.call(T,()=>{})},a.onPeerLeave=v=>{if(Object.values(h).forEach(M=>M.forget(v)),!c.has(v))return;const T=c.get(v);c.delete(v),u("leave",v,T)},d.onMessage=(v,{peerId:T})=>{var M,R;if(!(f||c.has(T))){if(c.size>=ff){u("full",T);return}c.set(T,{...eE(v,t),state:null,stateAt:0}),(R=(M=d.send(e,{target:T}))==null?void 0:M.catch)==null||R.call(M,()=>{}),u("join",T,c.get(T))}},p.onMessage=(v,{peerId:T})=>{const M=c.get(T),R=QT(v);!M||!R||(M.state=R,M.stateAt=performance.now(),u("state",T,R))},_.onMessage=(v,{peerId:T})=>{const M=tE(v,n);!M||!c.has(T)||!h.hit.allow(T)||u("hit",T,M)},m.onMessage=(v,{peerId:T})=>{const M=nE(v,s);!M||!c.has(T)||!h.death.allow(T)||u("death",T,M)},g.onMessage=(v,{peerId:T})=>{var b;const M=c.get(T),R=iE(v);!R||!((b=M==null?void 0:M.state)!=null&&b.alive)||!h.shot.allow(T)||u("shot",T,R)};let x=0;const S=v=>{var T;return(T=v==null?void 0:v.catch)==null?void 0:T.call(v,()=>{})};return{selfId:an,roomCode:i,peers:c,on(v,T){l[v].push(T)},broadcastState(v,T){f||T-x<1e3/dE||c.size===0||(x=T,S(p.send(JT(v))))},sendHit(v,T,M,R){f||S(_.send({damage:T,head:M,weapon:R},{target:v}))},announceDeath(v,T,M){f||S(m.send({killer:v,bounty:T,head:M}))},sendShot(v,T){f||S(g.send([v,T]))},relayStatus(){return{open:Object.values((mc==null?void 0:mc())??{}).filter(T=>(T==null?void 0:T.readyState)===1).length,total:hf.length}},async leave(){f=!0,c.clear(),Object.keys(l).forEach(v=>{l[v]=[]}),await a.leave()}}}const di=.45,df=.6,gE=3e3;function _E(i,e){const t=new Map,n=r=>e.find(o=>o.def.id===r)??e[0];function s(r){const{x:o,y:a,z:c}=r.position,l=r.height,h=a+l*.78,u={kind:"remote",id:r.id,name:r.name};return[{target:u,part:"head",aabb:Mi(o-di*.6,h,c-di*.6,o+di*.6,a+l,c+di*.6)},{target:u,part:"body",aabb:Mi(o-di,a,c-di,o+di,h,c+di)}]}return{players:t,add(r,{name:o,char:a}){t.has(r)&&this.remove(r);const c=n(a),l=Dd(c,o);l.object.rotation.order="YXZ",l.object.visible=!1,i.add(l.object),t.set(r,{id:r,name:o,view:l,height:c.def.height,position:{x:0,y:0,z:0},target:null,yaw:0,targetYaw:0,alive:!1,moving:!1,fireLeft:0,stateAt:0,stale:!1,hideTimer:0})},remove(r){const o=t.get(r);o&&(clearTimeout(o.hideTimer),o.view.dispose(),t.delete(r))},clear(){[...t.keys()].forEach(r=>this.remove(r))},applyState(r,o){const a=t.get(r);if(!a)return;const c=a.alive;(!a.target||!c&&o.alive)&&(a.position={x:o.x,y:o.y,z:o.z},a.yaw=o.yaw),a.target={x:o.x,y:o.y,z:o.z},a.targetYaw=o.yaw,a.moving=o.moving,o.firing&&(a.fireLeft=df),a.alive=o.alive,a.stateAt=performance.now(),a.stale&&o.alive&&(a.stale=!1,a.view.object.visible=!0),o.alive&&!c?(clearTimeout(a.hideTimer),a.view.object.visible=!0,a.view.object.rotation.set(0,a.yaw,0),a.view.restart()):!o.alive&&c&&(a.view.setState("death"),a.view.dropGun(),clearTimeout(a.hideTimer),a.hideTimer=setTimeout(()=>{a.alive||(a.view.object.visible=!1)},(a.view.deathSeconds||.8)*1e3+800))},flash(r){const o=t.get(r);o&&(o.view.fire(),o.fireLeft=df)},hitboxes(){return[...t.values()].filter(r=>r.alive&&r.target&&!r.stale).flatMap(s)},update(r,o=performance.now()){const a=1-Math.exp(-14*r);for(const c of t.values())if(c.alive&&!c.stale&&o-c.stateAt>gE&&(c.stale=!0,c.view.object.visible=!1),!!c.view.object.visible){if(c.alive&&c.target){c.position={x:c.position.x+(c.target.x-c.position.x)*a,y:c.position.y+(c.target.y-c.position.y)*a,z:c.position.z+(c.target.z-c.position.z)*a};const l=Math.atan2(Math.sin(c.targetYaw-c.yaw),Math.cos(c.targetYaw-c.yaw));c.yaw+=l*a,c.fireLeft=Math.max(0,c.fireLeft-r),c.view.setState(c.fireLeft>0?"shoot":"run"),c.view.setTimeScale(c.moving||c.fireLeft>0?1:.15),c.view.object.position.set(c.position.x,c.position.y,c.position.z),c.view.object.rotation.set(0,c.yaw+Math.PI,0)}else c.view.setTimeScale(1);c.view.update(r)}}}}const vE=16731501,xE=1e5,yE=3e3,pf=lS(dr),ME=i=>i<10?3:15,SE=3e3;function wE(i){const e=_E(i.scene,i.templates),t=i.templates.map(u=>u.def.id),n=rE(yE);let s=null,r=0,o=0;const a=u=>{var f;return u===(s==null?void 0:s.selfId)?"Kamu":((f=s==null?void 0:s.peers.get(u))==null?void 0:f.name)??"Pemain"},c=()=>s?{code:s.roomCode,names:[...s.peers.values()].map(u=>u.name)}:null;function l(u){const f=d=>(...p)=>{u===s&&d(...p)};u.on("join",f((d,p)=>{e.add(d,p),i.onFeed(`${p.name} masuk room`),i.onRoomChange(c())})),u.on("leave",f((d,p)=>{e.remove(d),n.forget(d),i.onFeed(`${p.name} keluar room`),i.onRoomChange(c())})),u.on("state",f((d,p)=>e.applyState(d,p))),u.on("shot",f((d,p)=>{e.flash(d),i.effects.tracer(new I(...p.from),new I(...p.to),vE),i.audio.enemyShot()})),u.on("hit",f((d,p)=>{const _=u.peers.get(d),m=_&&performance.now()-_.stateAt<SE,g=pf[p.weapon].range;!m||!sE(_.state,i.getLocalPosition(),g+ME(g))||i.onHitByPeer(p.damage,{id:d,name:a(d),head:p.head})})),u.on("death",f((d,p)=>{const _=a(d);if(p.killer===u.selfId){n.claim(d)&&i.onKillCredit(p.bounty,_,p.head);return}i.onFeed(`${p.head?"🎯 ":""}${a(p.killer)} ⟶ ${_}`)})),u.on("full",f(()=>i.onFeed("Room penuh (maks 8 pemain)")))}async function h(){if(!s)return;const u=s;s=null,e.clear(),i.onRoomChange(null);try{await u.leave()}catch{}}return{get connected(){return!!s},get roomCode(){return(s==null?void 0:s.roomCode)??null},async join(u,f){const d=++r;if(await h(),d===r)try{s=mE({roomCode:u,profile:f,roster:t,damageCaps:pf,maxBounty:xE}),l(s),o=performance.now(),i.onRoomChange(c())}catch(p){s=null,i.onFeed(`Gagal masuk room: ${p instanceof Error?p.message:"error tidak dikenal"}`),i.onRoomChange(null)}},leave(){r+=1,h()},hitboxes(){return s?e.hitboxes():[]},status(){return s?{...s.relayStatus(),peers:s.peers.size,since:o,turn:fE}:null},peerList(){return s?[...s.peers.entries()].map(([u,f])=>({id:u,name:f.name,char:f.char})):[]},sendHit(u,f,d,p){s&&(n.hitSent(u),s.sendHit(u,f,d,p))},sendShot(u){s==null||s.sendShot(u.from,u.to)},announceDeath(u,f,d){s==null||s.announceDeath(u,f,d)},tick(u,f,d){s&&(s.broadcastState(d,f),e.update(u,f))}}}const It=i=>{const e=document.getElementById(i);if(!e)throw new Error(`Elemen #${i} tidak ditemukan`);return e};function TE(i,e){i.classList.remove(e),i.offsetWidth,i.classList.add(e)}function gc(i,e,t,n){const s=document.createElement("div");for(s.textContent=e,i.prepend(s);i.children.length>n;)i.lastChild.remove();setTimeout(()=>s.remove(),t)}function EE(){const i={hud:It("hud"),wallet:It("wallet"),carried:It("carried"),kills:It("kills"),health:It("health-fill"),ammo:It("ammo"),weapon:It("weapon-name"),hitmarker:It("hitmarker"),vignette:It("damage-vignette"),killfeed:It("killfeed"),popups:It("popups"),extract:It("extract"),extractFill:It("extract-fill"),room:It("room-hud"),slots:[...It("weapon-slots").querySelectorAll("[data-weapon]")],scope:It("scope"),crosshair:document.querySelector(".crosshair")};let e=0,t=null;return{show(n){i.hud.hidden=!n,n||(i.scope.hidden=!0)},ledger(n){i.wallet.textContent=String(n.wallet),i.carried.textContent=String(n.carried),i.kills.textContent=String(n.kills)},health(n){const s=Math.max(0,n/Tn.maxHealth)*100;i.health.style.width=`${s}%`,i.health.classList.toggle("low",s<=30)},weapon(n,s,r,o,a){n.id!==t&&(t=n.id,i.weapon.textContent=n.name.toUpperCase(),i.slots.forEach(c=>c.classList.toggle("active",c.dataset.weapon===n.id))),i.ammo.textContent=n.kind==="melee"?"∞":r?"···":String(s),i.crosshair.classList.toggle("hidden",o>.5),i.scope.hidden=!a},hit(n){i.hitmarker.classList.toggle("head",n),TE(i.hitmarker,"show")},hurt(){i.vignette.style.opacity="1",clearTimeout(e),e=setTimeout(()=>{i.vignette.style.opacity="0"},180)},kill(n,s,r){gc(i.killfeed,`${r?"🎯 ":""}Kamu ⟶ ${n}`,3e3,5),gc(i.popups,`+${s} BOUNTY`,1100,3)},feed(n){gc(i.killfeed,n,3500,5)},room(n){if(i.room.hidden=!n,!n)return;i.room.replaceChildren();const s=document.createElement("div"),r=document.createElement("strong");r.textContent=n.code,s.append("ROOM ",r,` · ${n.names.length+1} pemain`),i.room.append(s),n.names.forEach(o=>{const a=document.createElement("div");a.textContent=`• ${o}`,i.room.append(a)})},extracting(n){i.extract.hidden=n<=0,i.extractFill.style.width=`${Math.min(1,n)*100}%`}}}function mf(i){return{wallet:i.startingWallet,carried:0,alive:!1,kills:0,deaths:0,extracted:0}}function AE(i,e){return!i.alive&&i.wallet>=e.spawnFee}function bE(i,e){if(i.alive)throw new Error("Pemain masih hidup");if(i.wallet<e.spawnFee)throw new Error("Kredit tidak cukup untuk spawn");return{...i,wallet:i.wallet-e.spawnFee,carried:e.spawnFee,alive:!0}}function RE(i,e,t){if(!i.alive)return i;const n=e.botBounty+(t.headshot?e.headshotBonus:0);return{...i,carried:i.carried+n,kills:i.kills+1}}function CE(i,e){if(!i.alive)return i;const t=Number.isFinite(e)&&e>0?Math.floor(e):0;return{...i,carried:i.carried+t,kills:i.kills+1}}function PE(i){return i.alive?{...i,carried:0,alive:!1,deaths:i.deaths+1}:i}function LE(i){return i.alive?{...i,wallet:i.wallet+i.carried,carried:0,alive:!1,extracted:i.extracted+i.carried}:i}const mt=i=>{const e=document.getElementById(i);if(!e)throw new Error(`Elemen #${i} tidak ditemukan`);return e};function IE(i){const e={overlay:mt("menu"),play:mt("play"),reset:mt("reset"),wallet:mt("menu-wallet"),result:mt("menu-result"),loading:mt("loading"),name:mt("player-name"),charButtons:[...mt("char-picker").querySelectorAll("button")],modeButtons:[...mt("mode-tabs").querySelectorAll("button")],online:mt("online-panel"),lobby:mt("room-lobby"),status:mt("room-status"),roomCode:mt("room-code"),roomLabel:mt("room-label"),roomCount:mt("room-count")};mt("menu-fee").textContent=String(mn.spawnFee),mt("menu-bounty").textContent=String(mn.botBounty);let t=!1,n="bot",s=null,r={...i.initialProfile},o=null,a=null;function c(){e.name.value=r.name==="Pemain"?"":r.name,e.charButtons.forEach(p=>p.setAttribute("aria-checked",String(p.dataset.char===r.char)))}function l(){e.modeButtons.forEach(p=>p.setAttribute("aria-selected",String(p.dataset.mode===n))),e.online.hidden=n!=="online",e.lobby.hidden=!!s,e.status.hidden=!s,s&&(e.roomLabel.textContent=s.code,e.roomCount.textContent=String(s.count))}function h(p){r={...r,...p},c(),i.onProfileChange(r)}e.name.addEventListener("change",()=>h({name:jl(e.name.value)})),e.charButtons.forEach(p=>p.addEventListener("click",()=>h({char:p.dataset.char}))),e.modeButtons.forEach(p=>p.addEventListener("click",()=>{p.dataset.mode!==n&&i.onModeChange(p.dataset.mode)!==!1&&(n=p.dataset.mode,l(),u())})),mt("join-room").addEventListener("click",()=>{const p=aE(e.roomCode.value);if(p.length<3){f("Masukkan kode room minimal 3 karakter.","bad");return}i.onJoinRoom(p)}),e.roomCode.addEventListener("keydown",p=>{p.key==="Enter"&&mt("join-room").click()}),mt("create-room").addEventListener("click",()=>i.onCreateRoom()),mt("public-room").addEventListener("click",()=>i.onJoinRoom("PUBLIK")),mt("leave-room").addEventListener("click",()=>i.onLeaveRoom()),mt("copy-room").addEventListener("click",async()=>{if(s)try{await navigator.clipboard.writeText(s.code),f(`Kode ${s.code} disalin.`,"good")}catch{f(`Kode room: ${s.code}`,"good")}}),e.play.disabled=!0,e.play.addEventListener("click",()=>i.onPlay()),e.reset.addEventListener("click",()=>i.onReset());function u(){!e.overlay.hidden&&o&&d.show(o,a)}function f(p,_=""){e.result.textContent=p,e.result.className=_?`result ${_}`:"result"}c(),l();const d={get mode(){return n},ready(p,_){t=!0,e.loading.textContent=p===_?`${_} karakter 3D siap.`:`${p}/${_} model 3D dimuat, sisanya pakai figur pengganti.`},setRoom(p){s=p,l(),u()},message(p,_){f(p,_)},netStatus(p,_=!1){const m=document.getElementById("net-status");m&&(m.textContent=p,m.classList.toggle("warn",_))},show(p,_){if(o=p,a=_,e.overlay.hidden=!1,e.wallet.textContent=String(p.wallet),f(""),(_==null?void 0:_.kind)==="pause"){e.play.textContent="LANJUT",e.play.disabled=!1,e.reset.hidden=!0,f(_.note??`Dijeda. Bounty dibawa: ${p.carried}`);return}if((_==null?void 0:_.kind)==="death"){const x=_.killer?` oleh ${_.killer}`:"";f(`Kamu mati${x}. -${_.amount} kredit hilang.`,"bad")}(_==null?void 0:_.kind)==="extract"&&f(`Ekstraksi berhasil! +${_.amount} kredit masuk dompet.`,"good");const m=AE(p,mn),g=n==="online"&&!s;e.play.textContent=g?"GABUNG ROOM DULU":`SPAWN (−${mn.spawnFee})`,e.play.disabled=!t||!m||g,e.reset.hidden=m,m||f("Kredit habis. Reset dompet untuk main lagi.","bad")},hide(){e.overlay.hidden=!0}};return d}const Tp="bounty-arena:wallet";function DE(i){try{const e=window.localStorage.getItem(Tp),t=e===null?Number.NaN:Number.parseInt(e,10);return Number.isFinite(t)&&t>=0?t:i}catch{return i}}function Io(i){try{window.localStorage.setItem(Tp,String(i))}catch{}}const Ep="bounty-arena:profile";function NE(){try{const i=JSON.parse(window.localStorage.getItem(Ep)??"null");return i&&typeof i=="object"?{name:String(i.name??""),char:String(i.char??"")}:null}catch{return null}}function UE(i){try{window.localStorage.setItem(Ep,JSON.stringify(i))}catch{}}const OE=1/30,FE=150;function BE(i){const e=new Vx({canvas:i,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(window.devicePixelRatio,Lr.maxPixelRatio)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=_f,e.toneMapping=_l,e}function kE(i,e,t,n){const s=i.getPixelRatio(),r=new qy(i,new rn(window.innerWidth*s,window.innerHeight*s,{type:bn,samples:Lr.msaaSamples}));return r.addPass(new Yy(e,t)),r.addPass(new Os(new ue(window.innerWidth,window.innerHeight),n.strength,n.radius,n.threshold)),r.addPass(new $y),r}function zE(){const i=NE(),e=Ld.map(t=>t.id);return{name:jl(i==null?void 0:i.name),char:e.includes(i==null?void 0:i.char)?i.char:e[0]}}async function HE(){const i=document.getElementById("game"),e=BE(i),t=new td,n=new nl(e);t.environment=n.fromScene(new Zy,.04).texture,t.environmentIntensity=.12,n.dispose();const s=new Ft(pi.fov,window.innerWidth/window.innerHeight,.05,400);t.add(s);const r=new URLSearchParams(window.location.search).get("map")==="neon"?oM(t):await QM(t);r.environmentIntensity!==void 0&&(t.environmentIntensity=r.environmentIntensity);const o=kE(e,t,s,r.bloom??Lr.bloom);window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight)});const a=eS(i),c=vS(),l=xS(t),h=EE(),u=sS(s),f=gS(t,s,c);f.setVisible(!1);let d={...mf(mn),wallet:DE(mn.startingWallet)},p=zE(),_="bot",m=0,g=!0,x=-1/0;const S="Selesaikan nyawa ini dulu (ekstraksi atau mati).",v=await CS(),T=HS(t,v,l,c,r.botSpawns);T.resetAll(u),u.respawn(r.playerSpawns[0]);const M=wE({scene:t,templates:v,effects:l,audio:c,getLocalPosition:()=>u.position,onRoomChange(L){b.setRoom(L?{code:L.code,count:L.names.length+1}:null),h.room(L)},onFeed:L=>h.feed(L),onHitByPeer:(L,O)=>y(L,{kind:"peer",...O}),onKillCredit(L,O,B){d.alive&&(d=CE(d,L),c.kill(),h.kill(O,L,B),h.ledger(d))}});window.addEventListener("beforeunload",()=>M.leave()),setInterval(()=>{const L=M.status();if(!L)return;const O=(performance.now()-L.since)/1e3;if(L.open===0&&O>6)b.netStatus("Tidak tersambung ke server pencari pemain. Cek internet atau coba jaringan lain.",!0);else if(L.peers===0&&O>20)b.netStatus(`Relay ${L.open}/${L.total} tersambung, belum ada pemain lain. Pastikan kode room sama persis. Kalau teman sudah masuk tapi tetap 1 pemain, jaringan kalian memblokir koneksi langsung.`,!0);else{const B=L.turn?" · TURN aktif":"";b.netStatus(`Relay ${L.open}/${L.total} tersambung${B}${L.peers===0?" · mencari pemain…":""}`)}},1e3);function R(){return _==="online"?[...r.playerSpawns,...r.botSpawns]:r.playerSpawns}const b=IE({initialProfile:p,onPlay(){if(c.unlock(),d.alive){a.lock();return}d=bE(d,mn),Io(d.wallet);const L=R();u.respawn(L[Math.floor(Math.random()*L.length)]),f.reset(),f.setVisible(!0),_==="bot"&&T.resetAll(u),m=0,h.ledger(d),h.health(u.health),b.show(d,{kind:"pause"}),a.lock()},onReset(){d={...mf(mn),kills:d.kills,deaths:d.deaths},Io(d.wallet),b.show(d,null)},onModeChange(L){return d.alive?(b.message(S,"bad"),!1):(L==="bot"?(M.leave(),T.resetAll(u),T.setVisible(!0)):T.setVisible(!1),_=L,!0)},onProfileChange(L){p=L,UE(p),M.connected&&b.message("Nama/karakter baru berlaku setelah keluar lalu masuk room lagi.")},onJoinRoom(L){M.join(L,p)},onCreateRoom(){M.join(oE(),p)},onLeaveRoom(){if(d.alive){b.message(S,"bad");return}M.leave()}});b.ready(v.filter(L=>L.scene).length,v.length),b.show(d,null),a.onLockChange(L=>{g=!L,h.show(L&&d.alive),!L&&d.alive&&b.show(d,{kind:"pause"}),L&&b.hide()}),a.onLockError(()=>{d.alive&&b.show(d,{kind:"pause",note:"Browser menolak kunci mouse. Klik LANJUT sekali lagi."})}),window.addEventListener("keydown",L=>{L.code==="KeyR"&&!g&&f.reload()});function E(L){f.setVisible(!1),h.show(!1),h.extracting(0),a.unlock(),b.show(d,L)}function y(L,O={kind:"bot"}){if(!d.alive)return;c.hurt(),h.hurt();const B=u.damage(L);if(h.health(B),B>0)return;const q=d.carried;d=PE(d),Io(d.wallet),O.kind==="peer"&&M.announceDeath(O.id,q,O.head),E({kind:"death",amount:q,killer:O.kind==="peer"?O.name:void 0})}function N(L,O,B){const q=new I(L.position.x,L.position.y+L.height*(B?.9:.55),L.position.z);if(!T.damage(L,O,q))return;const D=d.carried;d=RE(d,mn,{headshot:B}),c.kill(),h.kill(L.def.name,d.carried-D,B),h.ledger(d)}function W(L){if(!L||(x=performance.now(),_==="online"&&L.tracer&&M.sendShot(L.tracer),!L.hit))return;const{target:O,part:B}=L.hit,q=B==="head";if(h.hit(q),c.hit(),O.kind==="remote"){M.sendHit(O.id,L.damage,q,L.weapon);return}N(O,L.damage,q)}function G(L){const O=u.position;if(m=Math.hypot(O.x-r.extractZone.x,O.z-r.extractZone.z)<r.extractZone.radius?m+L:0,h.extracting(m/mn.extractSeconds),m<mn.extractSeconds)return;const q=d.carried;d=LE(d),Io(d.wallet),c.coin(),E({kind:"extract",amount:q})}new URLSearchParams(window.location.search).has("nolock")&&(window.__arena={camera:s,player:u,scene:t,world:r,online:M,get ledger(){return d},get mode(){return _}});function C(L){const O=u.position;return{x:O.x,y:O.y,z:O.z,yaw:u.yaw,moving:!!(L!=null&&L.moving),firing:performance.now()-x<FE,alive:d.alive}}function U(L,O){r.update(O),l.update(L);const B=!g&&d.alive;let q=null;if(B){q=u.update(L,a,r.colliders);const D=_==="online"?M.hitboxes():T.hitboxes(),X=f.update(L,a,r.colliders,D,q.moving);X!=null&&X.recoil&&u.addRecoil(X.recoil),W(X),u.setLookScale(s.fov/pi.fov),h.weapon(f.current,f.ammo,f.reloading,f.aim,f.scoped)}_==="bot"?T.update(L,u,r.colliders,B,B?y:()=>{}):M.tick(L,performance.now(),C(q)),B&&d.alive&&G(L),o.render()}const F=new Md;e.setAnimationLoop(()=>{try{U(Math.min(F.getDelta(),OE),F.elapsedTime)}catch(L){throw e.setAnimationLoop(null),a.unlock(),b.show(d,{kind:"pause",note:`Game error: ${L instanceof Error?L.message:"tidak dikenal"}. Muat ulang halaman.`}),L}})}HE().catch(i=>{const e=document.getElementById("loading");throw e&&(e.textContent=`Gagal memuat game: ${i instanceof Error?i.message:"error tidak dikenal"}`),i});
