webpackJsonp([3],{"+skl":function(n,t){},"5vP5":function(n,t,e){var i=e("z/wM");"string"==typeof i&&(i=[[n.i,i,""]]);e("fjbf")(i,{});i.locals&&(n.exports=i.locals)},"7S0A":function(n,t,e){n.exports=e.p+"static/fonts/Montserrat-Bold.d3085f6.ttf"},"93gw":function(n,t,e){"use strict";var i=e("bOdI"),r=e.n(i),a=e("9Xvl"),o="ivu-divider",s={name:"Divider",props:{type:{type:String,default:"horizontal",validator:function(n){return Object(a.d)(n,["horizontal","vertical"])}},orientation:{type:String,default:"center",validator:function(n){return Object(a.d)(n,["left","right","center"])}},dashed:{type:Boolean,default:!1},size:{validator:function(n){return Object(a.d)(n,["small","default"])},default:"default"}},computed:{hasSlot:function(){return!!this.$slots.default},classes:function(){var n;return[""+o,o+"-"+this.type,o+"-"+this.size,(n={},r()(n,o+"-with-text",this.hasSlot&&"center"===this.orientation),r()(n,o+"-with-text-"+this.orientation,this.hasSlot),r()(n,o+"-dashed",!!this.dashed),n)]},slotClasses:function(){return[o+"-inner-text"]}}},l={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{class:this.classes},[this.hasSlot?t("span",{class:this.slotClasses},[this._t("default")],2):this._e()])},staticRenderFns:[]},c=e("VU/8")(s,l,!1,null,null,null);t.a=c.exports},EHrg:function(n,t,e){(n.exports=e("FZ+f")()).push([n.i,'@font-face {\n    font-family: "imdev-en";\n    src: url('+e("R4C4")+');\n    font-weight: normal;\n    font-style: normal;\n}\n  \n\n@font-face {\n    font-family: "imdev-en-bold";\n    src: url('+e("7S0A")+");\n    font-weight: normal;\n    font-style: normal;\n}",""])},EOHD:function(n,t,e){var i=e("h9Z6");"string"==typeof i&&(i=[[n.i,i,""]]);e("fjbf")(i,{});i.locals&&(n.exports=i.locals)},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Swtr"),r=e("NAz/"),a=e("a84E"),o=e("7+uW"),s={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var l=e("VU/8")({name:"App"},s,!1,function(n){e("y4wF"),e("PZim")},"data-v-f94f0a0c",null).exports,c=e("/ocq");o.a.use(c.a);var u=new c.a({mode:"history",routes:[{path:"/",component:function(){return e.e(0).then(e.bind(null,"8hXn"))}},{path:"/404",component:function(){return e.e(1).then(e.bind(null,"8MUn"))}},{path:"*",redirect:"/404"}]}),d=(e("+skl"),e("5vP5"),e("EOHD"),e("tPM8"),e("Dd8w")),p=e.n(d),f=e("TXmL");o.a.use(f.a),o.a.locale=function(){};var m={en:p()({},{common:{test:"test multi lang"}}),zh:p()({},{common:{test:"测试多语言"}})},h=(h=navigator.language).substr(0,2),g=new f.a({locale:h||"en",messages:m});o.a.component("Row",a.a),o.a.component("Col",r.a),o.a.component("Divider",i.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:u,i18n:g,components:{App:l},template:"<App/>"})},PZim:function(n,t){},R4C4:function(n,t,e){n.exports=e.p+"static/fonts/Montserrat.07689d4.ttf"},Tbgz:function(n,t,e){"use strict";var i=e("bOdI"),r=e.n(i),a=e("9Xvl"),o={name:"Row",props:{type:{validator:function(n){return Object(a.d)(n,["flex"])}},align:{validator:function(n){return Object(a.d)(n,["top","middle","bottom"])}},justify:{validator:function(n){return Object(a.d)(n,["start","end","center","space-around","space-between"])}},gutter:{type:Number,default:0},className:String},computed:{classes:function(){var n;return[(n={},r()(n,"ivu-row",!this.type),r()(n,"ivu-row-"+this.type,!!this.type),r()(n,"ivu-row-"+this.type+"-"+this.align,!!this.align),r()(n,"ivu-row-"+this.type+"-"+this.justify,!!this.justify),r()(n,""+this.className,!!this.className),n)]},styles:function(){var n={};return 0!==this.gutter&&(n={marginLeft:this.gutter/-2+"px",marginRight:this.gutter/-2+"px"}),n}},methods:{updateGutter:function(n){var t=Object(a.b)(this,"iCol"),e=Object(a.a)(t,"iCol",!1);e.length&&e.forEach(function(t){0!==n&&(t.gutter=n)})}},watch:{gutter:function(n){this.updateGutter(n)}}},s={render:function(){var n=this.$createElement;return(this._self._c||n)("div",{class:this.classes,style:this.styles},[this._t("default")],2)},staticRenderFns:[]},l=e("VU/8")(o,s,!1,null,null,null);t.a=l.exports},YRzF:function(n,t,e){"use strict";var i=e("fZjL"),r=e.n(i),a=e("pFYg"),o=e.n(a),s=e("bOdI"),l=e.n(s),c=e("9Xvl"),u={name:"iCol",props:{span:[Number,String],order:[Number,String],offset:[Number,String],push:[Number,String],pull:[Number,String],className:String,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object],xxl:[Number,Object]},data:function(){return{gutter:0}},computed:{classes:function(){var n,t=this,e=["ivu-col",(n={},l()(n,"ivu-col-span-"+this.span,this.span),l()(n,"ivu-col-order-"+this.order,this.order),l()(n,"ivu-col-offset-"+this.offset,this.offset),l()(n,"ivu-col-push-"+this.push,this.push),l()(n,"ivu-col-pull-"+this.pull,this.pull),l()(n,""+this.className,!!this.className),n)];return["xs","sm","md","lg","xl","xxl"].forEach(function(n){if("number"==typeof t[n])e.push("ivu-col-span-"+n+"-"+t[n]);else if("object"===o()(t[n])){var i=t[n];r()(i).forEach(function(t){e.push("span"!==t?"ivu-col-"+n+"-"+t+"-"+i[t]:"ivu-col-span-"+n+"-"+i[t])})}}),e},styles:function(){var n={};return 0!==this.gutter&&(n={paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}),n}},methods:{updateGutter:function(){var n=Object(c.c)(this,"Row");n&&n.updateGutter(n.gutter)}},mounted:function(){this.updateGutter()},beforeDestroy:function(){this.updateGutter()}},d={render:function(){var n=this.$createElement;return(this._self._c||n)("div",{class:this.classes,style:this.styles},[this._t("default")],2)},staticRenderFns:[]},p=e("VU/8")(u,d,!1,null,null,null);t.a=p.exports},cYEk:function(n,t,e){(n.exports=e("FZ+f")()).push([n.i,"body {\n  margin: 0;\n  color: #1e375a;\n}\np {\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  color: #1e375a;\n  font-weight: 300;\n  letter-spacing: 1.2px;\n}\n",""])},h9Z6:function(n,t,e){(n.exports=e("FZ+f")()).push([n.i,"",""])},tPM8:function(n,t,e){var i=e("cYEk");"string"==typeof i&&(i=[[n.i,i,""]]);e("fjbf")(i,{});i.locals&&(n.exports=i.locals)},y4wF:function(n,t){},"z/wM":function(n,t,e){(t=n.exports=e("FZ+f")()).i(e("EHrg"),""),t.push([n.i,".margin-left-5 {\n  margin-left: 5px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-left-20 {\n  margin-left: 20px;\n}\n.margin-top-5 {\n  margin-top: 5px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-top-30 {\n  margin-top: 30px;\n}\n.padding-5 {\n  padding: 5px 5px;\n}\n.padding-10 {\n  padding: 10px 10px;\n}\n.padding-20 {\n  padding: 20px 20px;\n}\n.padding-lef-5 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.padding-top-5 {\n  padding-top: 5px;\n}\n.padding-top-10 {\n  padding-top: 10px;\n}\n.padding-top-20 {\n  padding-top: 20px;\n}\n.hover-cursor:hover {\n  cursor: pointer;\n}\n.bold-title {\n  font-family: imdev-en-bold;\n}\n.title-color {\n  color: #1e375a;\n}\n.sub-title {\n  color: rgba(183, 213, 255, 0.8);\n  font-weight: 400;\n}\n.btn-primary {\n  background: #7a28ff;\n  color: #FFFFFF;\n  border: 1px solid #7a28ff;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.btn-primary:hover,\n.btn-primary:active {\n  background: #8f52ff !important;\n  border-color: #8f52ff !important;\n}\n.btn-dark-ghost {\n  background: transparent;\n  color: #fff;\n  border: 1px solid #fff;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.btn-dark-ghost:hover,\n.btn-dark-ghost:active {\n  background: #5ad8ff !important;\n  color: #1e375a;\n  border-color: #5ad8ff !important;\n}\n.btn-large {\n  border-radius: 100px;\n  font-size: 19px;\n  font-weight: 400;\n  text-align: center;\n  padding: 19px 64px;\n}\n.btn-medium {\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 400;\n  text-align: center;\n  padding: 10px 50px;\n}\n.btn {\n  cursor: pointer;\n}\n.display-flex {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.col-md-6 {\n  -ms-flex: 0 0 48.333333%;\n  flex: 0 0 48.333333%;\n  max-width: 48.333333%;\n}\n.col-md-7 {\n  -ms-flex: 0 0 58.333333%;\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n.col-md-5 {\n  -ms-flex: 0 0 41.666667%;\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n.col-md-4 {\n  -ms-flex: 0 0 30.666667%;\n  flex: 0 0 30.666667%;\n  max-width: 30.666667%;\n}\n.col-md-3 {\n  -ms-flex: 0 0 22%;\n  flex: 0 0 22%;\n  max-width: 22%;\n}\n@media only screen and (max-width: 1024px) {\n  .col-md-3 {\n    -ms-flex: 0 0 30%;\n    flex: 0 0 30%;\n    max-width: 30%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .col-md-3 {\n    -ms-flex: 0 0 45%;\n    flex: 0 0 45%;\n    max-width: 45%;\n  }\n  .col-md-4 {\n    -ms-flex: 0 0 45%;\n    flex: 0 0 45%;\n    max-width: 45%;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .col-md-3 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-4 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n.container {\n  max-width: 1200px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.text-decoration-none {\n  text-decoration: none;\n}\n.background-grey {\n  background: #F2F5F7;\n}\n.color-text {\n  color: #1e375a;\n}\n.color-light-text {\n  color: #5F6C7F;\n}\n",""])}},["NHnr"]);
//# sourceMappingURL=app.33a4cae024bda080a2bb.js.map