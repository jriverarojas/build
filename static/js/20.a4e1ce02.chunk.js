(this["webpackJsonppxp-ui"]=this["webpackJsonppxp-ui"]||[]).push([[20],{6697:function(e,t,a){"use strict";a.r(t);var o=a(5),r=a(0),l=a.n(r),n=a(30),i=a(654),c=a(58),u=a(694),s=a(693),p=a(120),m=a.n(p),d=a(838),b=a(87),h=a(801),g=a.n(h),O=a(790),f=a(773),C=m()((function(e){return{root:{},avatar:{height:42,width:42,marginRight:e.spacing(1)}}}));t.default=function(){var e=C(),t=Object(o.a)(Object(o.a)({},d.c),{},{columns:{AutoComplete1:Object(o.a)(Object(o.a)({},d.a),{},{helperText:"this AutoComplete Only get 1 time the Data (isSearchable = false)"}),AutoComplete2:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete2",isSearchable:!0,helperText:"this AutoComplete is refreshed for each press key with an debounce of 500ms (isSearchable = true), you need to setup \"store.parFilters: 'alias.column1#alias.column2'\" "}),AutoComplete3:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete3",validate:{shape:n.c().required("Required")},helperText:"this AutoComplete Valid if it is empty (validate : { shape: Yup ) -> press Submit",group:"validateGroup"}),AutoComplete4:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete4",store:Object(o.a)(Object(o.a)({},d.a.store),{},{renderOption:function(e){return l.a.createElement(i.a,{item:!0,container:!0,alignItems:"center",xs:12},l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement("b",null,"Name:")," ",e.nombre_completo2),l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement(c.a,{variant:"body2",color:"textPrimary"},l.a.createElement("b",null,"CI: ")," ",e.ci)))}}),helperText:"Render Option (1)",group:"renderOptionGroup"}),AutoComplete5:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete5",store:Object(o.a)(Object(o.a)({},d.a.store),{},{renderOption:function(t){return l.a.createElement(s.a,{display:"flex",alignItems:"center"},l.a.createElement(u.a,{className:e.avatar,src:g.a}),l.a.createElement("div",null,l.a.createElement(c.a,{variant:"body2",color:"inherit"},l.a.createElement("b",null,"Nombre:"),t.nombre_completo2),l.a.createElement(O.a,{color:"success"},l.a.createElement("b",null,"Ci:"),t.ci)))}}),helperText:"Render Option (2) with Avatar and classes",group:"renderOptionGroup"}),AutoComplete6:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete6 Disable",helperText:"this AutoComplete is disabled",group:"disableHideGroup",disabled:!0}),AutoComplete7:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete7 Hide",helperText:"this AutoComplete is hidden",group:"disableHideGroup",hide:!0}),AutoComplete8:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete8 OnChange",helperText:"if you want to do some action in another fields (you need to overwrite the onChange)",group:"overwriteOnChange",onChange:function(e){var t=e.value,a=e.dataValue,r=(e.configInputState,e.states);console.log(a),r.AutoComplete9.setDisabled(!0),""!==t?r.name.setValue(a.nombre_completo2):r.name.setValue(""),r.AutoComplete9.setError({hasError:!0,msg:"tiene error"}),r.AutoComplete3.setHide(!0),r.AutoComplete10.store.set(Object(o.a)(Object(o.a)({},r.AutoComplete10.store.state),{},{params:Object(o.a)(Object(o.a)({},r.AutoComplete10.store.state.params),{},{id_persona:t})}))}}),AutoComplete9:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete9 for disabled",helperText:"this AutoComplete will be disable when selected Autocomplete 8",group:"overwriteOnChange"}),name:Object(o.a)(Object(o.a)({},d.b),{},{label:"TexField Aux",helperText:"This Texfield will populate with data when Autocomplete 8 is selected",group:"overwriteOnChange"}),AutoComplete10:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete10",helperText:"this AutoComplete will add a id_persona parameter from AutoComplete 8",group:"overwriteOnChange"}),AutoComplete11:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete11",helperText:"this AutoComplete will add a id_persona parameter from AutoComplete 8",group:"overwriteOnChange"}),AutoComplete12:Object(o.a)(Object(o.a)({},d.a),{},{label:"AutoComplete12",initialValue:{id_persona:"1231111",label:"ADMINISTRADOR DEL SISTEMA ",nombre:"ADMINISTRADOR",nombre_completo1:"ADMINISTRADOR DEL SISTEMA ",nombre_completo2:"ADMINISTRADOR DEL SISTEMA ",num_documento:null,telefono1:null,telefono2:null,tipo_documento:null,value:"1231111"},helperText:"this AutoComplete has default value, you need to send the object for showing",group:"defaultValueGroup"})},groups:{isSearchableGroup:{titleGroup:"Is Searchable",gridGroup:{xs:12,sm:12}},validateGroup:{titleGroup:"Validate",gridGroup:{xs:12,sm:12}},renderOptionGroup:{titleGroup:"Render Option",gridGroup:{xs:12,sm:12}},disableHideGroup:{titleGroup:"Disable and Hide",gridGroup:{xs:12,sm:12}},overwriteOnChange:{titleGroup:"overwrite the onChange",gridGroup:{xs:12,sm:12}},defaultValueGroup:{titleGroup:"Default Value",gridGroup:{xs:12,sm:12}}}});return l.a.createElement(f.a,null," ",l.a.createElement(b.a,{data:t}),";")}},773:function(e,t,a){"use strict";var o=a(0),r=a.n(o),l=a(19),n=a(677),i=a(309),c=a(240),u=a(774),s=a.n(u),p=a(7),m=Object(i.a)((function(e){return{backBar:{backgroundColor:"transparent"},content:{height:"calc(100vh - 60px)"},fabContainer:{width:"0px",height:"0px",position:"relative"},fab:{position:"absolute",top:e.spacing(5),left:e.spacing(3),zIndex:"100"}}}));t.a=function(e){var t=e.scrollBarRef,a=e.children,i=m(),u=Object(l.c)((function(e){return e.app.detailPage})),d=Object(o.useRef)();return r.a.createElement(r.a.Fragment,null,u.isDetail&&r.a.createElement("div",{className:i.fabContainer},r.a.createElement(n.a,{className:i.fab,size:"small","aria-label":"back",color:"primary",onClick:function(){p.a.triggerEvent("detail_go_back",u.masterDetailId)}},r.a.createElement(s.a,null))),r.a.createElement(c.Scrollbars,{className:i.content,ref:t||d,autoHide:!0},a))}},774:function(e,t,a){"use strict";var o=a(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(0)),l=(0,o(a(54)).default)(r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=l},790:function(e,t,a){"use strict";var o=a(16),r=a(186),l=a(0),n=a.n(l),i=a(2),c=a(70),u=a(17),s=Object(c.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(u.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(u.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(u.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(u.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(u.c)(e.palette.warning.main,.08)}}}));function p(e){var t=e.className,a=e.color,l=e.children,c=(e.style,Object(r.a)(e,["className","color","children","style"])),u=s();return n.a.createElement("span",Object.assign({className:Object(i.a)(u.root,Object(o.a)({},u[a],a),t)},c),l)}p.defaultProps={className:"",color:"secondary"},t.a=p},801:function(e,t,a){e.exports=a.p+"static/media/avatar.d6f6f42b.jpeg"},838:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}));var o={nameForm:"NameForm",columns:{},resetButton:!0,submitLabel:"Submit",onSubmit:{url:"changeSystem/changeControl/changeMethod",extraParams:{}},typeForm:"normal"},r={type:"TextField",label:void 0,initialValue:"",maxLength:255,gridForm:{xs:12,sm:12},size:"medium"},l={type:"AutoComplete",label:void 0,initialValue:null,store:{url:"seguridad/Persona/listarPersona",params:{start:"0",limit:"10",sort:"id_persona",dir:"ASC"},load:!1,parFilters:"p.nombre_completo1#p.ci",idDD:"id_persona",descDD:"nombre_completo2",minChars:2},remote:!0,gridForm:{xs:12,sm:12},size:"medium"}}}]);
//# sourceMappingURL=20.a4e1ce02.chunk.js.map