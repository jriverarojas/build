(this["webpackJsonppxp-ui"]=this["webpackJsonppxp-ui"]||[]).push([[27],{6695:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(241),i=t.n(r),o=t(87),c=t(773);a.default=function(){var e={nameForm:"Formulario Datepickers",columns:{date:{type:"DatePicker",label:"Date",initialValue:i()(new Date).toDate(),format:"DD-MM-YYYY"},dateMinMax:{type:"DatePicker",label:"Date Min Max",initialValue:i()(new Date).toDate(),minDate:i()(new Date,"DD-MM-YYYY").subtract(5,"days").toDate(),maxDate:i()(new Date,"DD-MM-YYYY").add(1,"month").toDate(),format:"DD-MM-YYYY"},resetDates:{type:"DatePicker",label:"Reset Dates",initialValue:null,format:"DD-MM-YYYY",onChange:function(e){e.value,e.dataValue,e.configInputState;var a=e.states;console.log(a)}}},resetButton:!0,onSubmit:function(e){var a=e.values;console.log(a)}};return l.a.createElement(c.a,null,l.a.createElement(o.a,{data:e}),";")}},773:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(19),i=t(677),o=t(309),c=t(240),u=t(774),s=t.n(u),D=t(7),f=Object(o.a)((function(e){return{backBar:{backgroundColor:"transparent"},content:{height:"calc(100vh - 60px)"},fabContainer:{width:"0px",height:"0px",position:"relative"},fab:{position:"absolute",top:e.spacing(5),left:e.spacing(3),zIndex:"100"}}}));a.a=function(e){var a=e.scrollBarRef,t=e.children,o=f(),u=Object(r.c)((function(e){return e.app.detailPage})),p=Object(n.useRef)();return l.a.createElement(l.a.Fragment,null,u.isDetail&&l.a.createElement("div",{className:o.fabContainer},l.a.createElement(i.a,{className:o.fab,size:"small","aria-label":"back",color:"primary",onClick:function(){D.a.triggerEvent("detail_go_back",u.masterDetailId)}},l.a.createElement(s.a,null))),l.a.createElement(c.Scrollbars,{className:o.content,ref:a||p,autoHide:!0},t))}},774:function(e,a,t){"use strict";var n=t(27);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(54)).default)(l.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");a.default=r}}]);
//# sourceMappingURL=27.e6b66133.chunk.js.map