"use strict";(self.webpackChunkchorus_connector=self.webpackChunkchorus_connector||[]).push([[7372],{7372:(k,h,a)=>{a.r(h),a.d(h,{ion_loading:()=>x});var m=a(467),o=a(4261),g=a(464),u=a(4920),f=a(7838),l=a(9440),b=a(333),s=a(9483),e=a(9986);a(8476),a(7192),a(1970);const c=n=>{const t=(0,e.c)(),i=(0,e.c)(),r=(0,e.c)();return i.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),r.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(n).easing("ease-in-out").duration(200).addAnimation([i,r])},E=n=>{const t=(0,e.c)(),i=(0,e.c)(),r=(0,e.c)();return i.addElement(n.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(n).easing("ease-in-out").duration(200).addAnimation([i,r])},D=n=>{const t=(0,e.c)(),i=(0,e.c)(),r=(0,e.c)();return i.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),r.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(n).easing("ease-in-out").duration(200).addAnimation([i,r])},w=n=>{const t=(0,e.c)(),i=(0,e.c)(),r=(0,e.c)();return i.addElement(n.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(n).easing("ease-in-out").duration(200).addAnimation([i,r])},x=class{constructor(n){(0,o.r)(this,n),this.didPresent=(0,o.d)(this,"ionLoadingDidPresent",7),this.willPresent=(0,o.d)(this,"ionLoadingWillPresent",7),this.willDismiss=(0,o.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=(0,o.d)(this,"ionLoadingDidDismiss",7),this.didPresentShorthand=(0,o.d)(this,"didPresent",7),this.willPresentShorthand=(0,o.d)(this,"willPresent",7),this.willDismissShorthand=(0,o.d)(this,"willDismiss",7),this.didDismissShorthand=(0,o.d)(this,"didDismiss",7),this.delegateController=(0,l.d)(this),this.lockController=(0,f.c)(),this.triggerController=(0,l.e)(),this.customHTMLEnabled=s.c.get("innerHTMLTemplatesEnabled",g.E),this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,l.B)},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.message=void 0,this.cssClass=void 0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.spinner=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(n,t){!0===n&&!1===t?this.present():!1===n&&!0===t&&this.dismiss()}triggerChanged(){const{trigger:n,el:t,triggerController:i}=this;n&&i.addClickListener(t,n)}connectedCallback(){(0,l.j)(this.el),this.triggerChanged()}componentWillLoad(){var n;if(void 0===this.spinner){const t=(0,s.b)(this);this.spinner=s.c.get("loadingSpinner",s.c.get("spinner","ios"===t?"lines":"crescent"))}null!==(n=this.htmlAttributes)&&void 0!==n&&n.id||(0,l.k)(this.el)}componentDidLoad(){!0===this.isOpen&&(0,u.r)(()=>this.present()),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}present(){var n=this;return(0,m.A)(function*(){const t=yield n.lockController.lock();yield n.delegateController.attachViewToDom(),yield(0,l.f)(n,"loadingEnter",c,D),n.duration>0&&(n.durationTimeout=setTimeout(()=>n.dismiss(),n.duration+10)),t()})()}dismiss(n,t){var i=this;return(0,m.A)(function*(){const r=yield i.lockController.lock();i.durationTimeout&&clearTimeout(i.durationTimeout);const p=yield(0,l.g)(i,n,t,"loadingLeave",E,w);return p&&i.delegateController.removeViewFromDom(),r(),p})()}onDidDismiss(){return(0,l.h)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return(0,l.h)(this.el,"ionLoadingWillDismiss")}renderLoadingMessage(n){const{customHTMLEnabled:t,message:i}=this;return t?(0,o.h)("div",{class:"loading-content",id:n,innerHTML:(0,g.a)(i)}):(0,o.h)("div",{class:"loading-content",id:n},i)}render(){const{message:n,spinner:t,htmlAttributes:i,overlayIndex:r}=this,p=(0,s.b)(this),v=`loading-${r}-msg`;return(0,o.h)(o.f,Object.assign({key:"fb3d2cd7cd0539ed6540d8be50e243c7916b3ca2",role:"dialog","aria-modal":"true","aria-labelledby":void 0!==n?v:null,tabindex:"-1"},i,{style:{zIndex:`${4e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},(0,b.g)(this.cssClass)),{[p]:!0,"overlay-hidden":!0,"loading-translucent":this.translucent})}),(0,o.h)("ion-backdrop",{key:"c8bd30782f3040b1b80e88aa924861e439d40754",visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,o.h)("div",{key:"4ebfbb67c92e8eb56c27dd7c199b35bf6be1cf63",tabindex:"0"}),(0,o.h)("div",{key:"9492723cd87f1ef75534e449d4bc2b2deb0cb3cc",class:"loading-wrapper ion-overlay-wrapper"},t&&(0,o.h)("div",{key:"d9eb42454e48c82704d974a68b80ceb4de990417",class:"loading-spinner"},(0,o.h)("ion-spinner",{key:"cdb046bad89872f4208ae466979315652766bf3a",name:t,"aria-hidden":"true"})),void 0!==n&&this.renderLoadingMessage(v)),(0,o.h)("div",{key:"412d1bb537dafa6e6863d07ddc15f5969fe0617d",tabindex:"0"}))}get el(){return(0,o.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}};x.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #0054e9);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}"}},333:(k,h,a)=>{a.d(h,{c:()=>g,g:()=>f,h:()=>o,o:()=>b});var m=a(467);const o=(s,e)=>null!==e.closest(s),g=(s,e)=>"string"==typeof s&&s.length>0?Object.assign({"ion-color":!0,[`ion-color-${s}`]:!0},e):e,f=s=>{const e={};return(s=>void 0!==s?(Array.isArray(s)?s:s.split(" ")).filter(d=>null!=d).map(d=>d.trim()).filter(d=>""!==d):[])(s).forEach(d=>e[d]=!0),e},l=/^[a-z][a-z0-9+\-.]*:/,b=function(){var s=(0,m.A)(function*(e,d,_,y){if(null!=e&&"#"!==e[0]&&!l.test(e)){const c=document.querySelector("ion-router");if(c)return d?.preventDefault(),c.push(e,_,y)}return!1});return function(d,_,y,c){return s.apply(this,arguments)}}()}}]);