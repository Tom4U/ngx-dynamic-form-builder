(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3EFq":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n("D57K"),c=n("Fslc"),i=n("lPv2"),o=n("B57M"),r=function(){function e(e){Object(i.plainToClassFromExist)(this,e)}return e.prototype.toString=function(){var e=[];return 0===e.length&&this.name&&e.push(this.name),e.join(" ")},e.strings={id:"Id",name:"Name",regionNum:"Region num"},Object(a.b)([Object(c.Validate)(o.a,{message:"The company name must be longer than 15"}),Object(c.IsNotEmpty)(),Object(c.MaxLength)(20),Object(a.d)("design:type",String)],e.prototype,"name",void 0),Object(a.b)([Object(c.IsOptional)(),Object(c.Min)(1),Object(c.Max)(99),Object(a.d)("design:type",Number)],e.prototype,"regionNum",void 0),e}()},KSFr:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(){function e(e){this._sanitizer=e}return e.prototype.transform=function(e,t){return this._sanitizer?this._sanitizer.bypassSecurityTrustHtml(e):e},e}()},Kej7:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return l});var a=n("LoAr"),c=(n("z1EI"),n("WT9V"),n("y7gG")),i=(n("C7Lb"),n("LYzL")),o=(n("SeAg"),n("WV+C")),r=n("Z5FQ"),m=(n("IfiR"),n("0xYh"),a.ob({encapsulation:2,styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media screen and (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media screen and (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-indeterminate.mat-checkbox-disabled .mat-checkbox-inner-container{opacity:.5}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}"],data:{}}));function l(e){return a.Kb(2,[a.Gb(402653184,1,{_inputElement:0}),a.Gb(402653184,2,{ripple:0}),(e()(),a.qb(2,0,[["label",1]],null,16,"label",[["class","mat-checkbox-layout"]],[[1,"for",0]],null,null,null,null)),(e()(),a.qb(3,0,null,null,10,"div",[["class","mat-checkbox-inner-container"]],[[2,"mat-checkbox-inner-container-no-side-margin",null]],null,null,null,null)),(e()(),a.qb(4,0,[[1,0],["input",1]],null,0,"input",[["class","mat-checkbox-input cdk-visually-hidden"],["type","checkbox"]],[[8,"id",0],[8,"required",0],[8,"checked",0],[1,"value",0],[8,"disabled",0],[1,"name",0],[8,"tabIndex",0],[8,"indeterminate",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-checked",0]],[[null,"change"],[null,"click"]],function(e,t,n){var a=!0,c=e.component;return"change"===t&&(a=!1!==c._onInteractionEvent(n)&&a),"click"===t&&(a=!1!==c._onInputClick(n)&&a),a},null,null)),(e()(),a.qb(5,0,null,null,3,"div",[["class","mat-checkbox-ripple mat-ripple"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),a.pb(6,212992,[[2,4]],0,i.h,[a.k,a.z,o.a,[2,i.f],[2,r.a]],{centered:[0,"centered"],radius:[1,"radius"],animation:[2,"animation"],disabled:[3,"disabled"],trigger:[4,"trigger"]},null),a.Db(7,{enterDuration:0}),(e()(),a.qb(8,0,null,null,0,"div",[["class","mat-ripple-element mat-checkbox-persistent-ripple"]],null,null,null,null,null)),(e()(),a.qb(9,0,null,null,0,"div",[["class","mat-checkbox-frame"]],null,null,null,null,null)),(e()(),a.qb(10,0,null,null,3,"div",[["class","mat-checkbox-background"]],null,null,null,null,null)),(e()(),a.qb(11,0,null,null,1,":svg:svg",[[":xml:space","preserve"],["class","mat-checkbox-checkmark"],["focusable","false"],["version","1.1"],["viewBox","0 0 24 24"]],null,null,null,null,null)),(e()(),a.qb(12,0,null,null,0,":svg:path",[["class","mat-checkbox-checkmark-path"],["d","M4.1,12.7 9,17.6 20.3,6.3"],["fill","none"],["stroke","white"]],null,null,null,null,null)),(e()(),a.qb(13,0,null,null,0,"div",[["class","mat-checkbox-mixedmark"]],null,null,null,null,null)),(e()(),a.qb(14,0,[["checkboxLabel",1]],null,4,"span",[["class","mat-checkbox-label"]],null,[[null,"cdkObserveContent"]],function(e,t,n){var a=!0;return"cdkObserveContent"===t&&(a=!1!==e.component._onLabelTextChange()&&a),a},null,null)),a.pb(15,1196032,null,0,c.a,[c.b,a.k,a.z],null,{event:"cdkObserveContent"}),(e()(),a.qb(16,0,null,null,1,"span",[["style","display:none"]],null,null,null,null,null)),(e()(),a.Ib(-1,null,["\xa0"])),a.zb(null,0)],function(e,t){var n=t.component,c=e(t,7,0,150);e(t,6,0,!0,20,c,n._isRippleDisabled(),a.Ab(t,2))},function(e,t){var n=t.component;e(t,2,0,n.inputId),e(t,3,0,!a.Ab(t,14).textContent||!a.Ab(t,14).textContent.trim()),e(t,4,1,[n.inputId,n.required,n.checked,n.value,n.disabled,n.name,n.tabIndex,n.indeterminate,n.ariaLabel||null,n.ariaLabelledby,n._getAriaChecked()]),e(t,5,0,a.Ab(t,6).unbounded)})}}}]);