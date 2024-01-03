import{g as w,r as D,u as C,p as N}from"./index-1cf71321.js";function I(t,e){for(var r=0;r<e.length;r++){const s=e[r];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in t)){const o=Object.getOwnPropertyDescriptor(s,a);o&&Object.defineProperty(t,a,o.get?o:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var S=Object.create,l=Object.defineProperty,j=Object.getOwnPropertyDescriptor,A=Object.getOwnPropertyNames,M=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty,R=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,x=(t,e)=>{for(var r in e)l(t,r,{get:e[r],enumerable:!0})},_=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of A(e))!H.call(t,a)&&a!==r&&l(t,a,{get:()=>e[a],enumerable:!(s=j(e,a))||s.enumerable});return t},F=(t,e,r)=>(r=t!=null?S(M(t)):{},_(e||!t||!t.__esModule?l(r,"default",{value:t,enumerable:!0}):r,t)),U=t=>_(l({},"__esModule",{value:!0}),t),n=(t,e,r)=>(R(t,typeof e!="symbol"?e+"":e,r),r),P={};x(P,{default:()=>h});var f=U(P),d=F(D),c=C,u=N;const K="https://player.twitch.tv/js/embed/v1.js",V="Twitch",$="twitch-player-";class h extends d.Component{constructor(){super(...arguments),n(this,"callPlayer",c.callPlayer),n(this,"playerID",this.props.config.playerId||`${$}${(0,c.randomString)()}`),n(this,"mute",()=>{this.callPlayer("setMuted",!0)}),n(this,"unmute",()=>{this.callPlayer("setMuted",!1)})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,r){const{playsinline:s,onError:a,config:o,controls:v}=this.props,i=u.MATCH_URL_TWITCH_CHANNEL.test(e),p=i?e.match(u.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(u.MATCH_URL_TWITCH_VIDEO)[1];if(r){i?this.player.setChannel(p):this.player.setVideo("v"+p);return}(0,c.getSDK)(K,V).then(y=>{this.player=new y.Player(this.playerID,{video:i?"":p,channel:i?p:"",height:"100%",width:"100%",playsinline:s,autoplay:this.props.playing,muted:this.props.muted,controls:i?!0:v,time:(0,c.parseStartTime)(e),...o.options});const{READY:g,PLAYING:m,PAUSE:E,ENDED:O,ONLINE:L,OFFLINE:b,SEEK:T}=y.Player;this.player.addEventListener(g,this.props.onReady),this.player.addEventListener(m,this.props.onPlay),this.player.addEventListener(E,this.props.onPause),this.player.addEventListener(O,this.props.onEnded),this.player.addEventListener(T,this.props.onSeek),this.player.addEventListener(L,this.props.onLoaded),this.player.addEventListener(b,this.props.onLoaded)},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){const e={width:"100%",height:"100%"};return d.default.createElement("div",{style:e,id:this.playerID})}}n(h,"displayName","Twitch");n(h,"canPlay",u.canPlay.twitch);n(h,"loopOnEnded",!0);const W=w(f),G=I({__proto__:null,default:W},[f]);export{G as T};
