(this["webpackJsonpweather-widget"]=this["webpackJsonpweather-widget"]||[]).push([[0],{28:function(e,t,r){},29:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(6),c=r.n(n),i=r(3),s=r(15),u=r(4),o=r(2),l="WEATHER_START_FETCHING",d="WEATHER_STOP_FETCHING",p="WEATHER_FILL",m="WEATHER_SET_FETCHING_ERROR",h="WEATHER_SET_MIN_TEMPERATURE",j="WEATHER_SET_MAX_TEMPERATURE",b="WEATHER_SET_TYPE_OF_WEATHER",f="WEATHER_SET_MINTEMPVALID_ERROR",y="WEATHER_SET_MAXTEMPVALID_ERROR",x="WEATHER_SET_STATUS_OF_FILTER",O={data:null,isFetching:!1,error:null,weatherType:"sunny",minTemperature:"",maxTemperature:"",minTempValidError:!1,maxTempValidError:!1,filterStatus:!1},T=Object.freeze({WEATHER_SET_ACTIVE_DAY:"WEATHER_SET_ACTIVE_DAY"}),E={activeId:0},g=Object(u.b)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{isFetching:!0});case d:return Object(o.a)(Object(o.a)({},e),{},{isFetching:!1});case m:return Object(o.a)(Object(o.a)({},e),{},{error:t.payload,data:null});case p:return Object(o.a)(Object(o.a)({},e),{},{data:t.payload,error:null});case b:return Object(o.a)(Object(o.a)({},e),{},{weatherType:t.payload});case h:return Object(o.a)(Object(o.a)({},e),{},{minTemperature:t.payload});case j:return Object(o.a)(Object(o.a)({},e),{},{maxTemperature:t.payload});case f:return Object(o.a)(Object(o.a)({},e),{},{minTempValidError:t.payload});case y:return Object(o.a)(Object(o.a)({},e),{},{maxTempValidError:t.payload});case x:return Object(o.a)(Object(o.a)({},e),{},{filterStatus:t.payload});default:return e}},weatherDayId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.WEATHER_SET_ACTIVE_DAY:return{activeId:t.payload};default:return e}}}),_=r(13),v=r(14),N=(Object(_.createLogger)({duration:!0,collapsed:!0,colors:{title:function(e){return e.error?"firebrick":"deepskyblue"},prevState:function(){return"#1C5FAF"},action:function(){return"#149945"},nextState:function(){return"#A47104"},error:function(){return"#FF0005"}}}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,u.c),F=[v.a];var A=Object(u.d)(g,N(u.a.apply(void 0,Object(s.a)(F)))),R=r(5),k=r.n(R),S=r(7),w=Object.freeze({weather:{fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return fetch("".concat("https://lab.lectrum.io/rtx/api/","/forecast"),{method:"GET"})}))}}),I=Object.freeze({startFetching:function(){return{type:l}},stopFetching:function(){return{type:d}},fill:function(e){return{type:p,payload:e}},setFetchingError:function(e){return{type:m,error:!0,payload:e}},fetchAsync:function(){return function(){var e=Object(S.a)(k.a.mark((function e(t){var r,a,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I.startFetching()),e.next=3,w.weather.fetch();case 3:if(200!==(r=e.sent).status){e.next=12;break}return e.next=7,r.json();case 7:a=e.sent,n=a.data,t(I.fill(n)),e.next=14;break;case 12:c={status:r.status},t(I.setFetchingError(c));case 14:t(I.stopFetching());case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setMinTemperature:function(e){return{type:h,payload:e}},setMaxTemperature:function(e){return{type:j,payload:e}},setTypeOfWeather:function(e){return{type:b,payload:e}},setMinTempValidationError:function(e){return{type:f,payload:e}},setMaxTempValidationError:function(e){return{type:y,payload:e}},setFilterStatus:function(e){return{type:x,payload:e}}}),M=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.weather})),r=t.data,n=t.isFetching,c=t.error,s=t.minTemperature,u=t.maxTemperature,o=t.weatherType,l=t.minTempValidError,d=t.maxTempValidError,p=t.filterStatus;Object(a.useEffect)((function(){e(I.fetchAsync())}),[e]);var m=function(){var t=Object(S.a)(k.a.mark((function t(){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==s||""!==u){t.next=5;break}e(I.setMinTempValidationError(!0)),e(I.setMaxTempValidationError(!0)),t.next=18;break;case 5:if(""!==s){t.next=9;break}e(I.setMinTempValidationError(!0)),t.next=18;break;case 9:if(""!==u){t.next=13;break}e(I.setMaxTempValidationError(!0)),t.next=18;break;case 13:return t.next=15,e(I.fetchAsync());case 15:a=r.filter((function(e){return e.type===o&&e.temperature>=s&&e.temperature<=u})),e(I.fill(a)),e(I.setFilterStatus(!0));case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{data:r,isFetching:n,error:c,minTemperature:s,maxTemperature:u,weatherType:o,minTempValidError:l,maxTempValidError:d,filterStatus:p,minTemperatureChange:function(t){var r=t.target.value.replace(/[^\d.]/g,"");e(I.setMinTempValidationError(!1)),e(I.setMinTemperature(r))},maxTemperatureChange:function(t){var r=t.target.value.replace(/[^\d.]/g,"");e(I.setMaxTempValidationError(!1)),e(I.setMaxTemperature(r))},setWeatherType:function(t){return e(I.setTypeOfWeather(t))},filterWeather:m,resetFilters:function(){e(I.fetchAsync()),e(I.setMinTemperature("")),e(I.setMaxTemperature("")),e(I.setTypeOfWeather("sunny")),e(I.setFilterStatus(!1))}}},V=(r(28),r(29),r(0)),C=function(){var e=M(),t=e.minTemperature,r=e.maxTemperature,a=e.minTempValidError,n=e.maxTempValidError,c=e.filterStatus,i=e.filterWeather,s=e.minTemperatureChange,u=e.maxTemperatureChange,o=e.resetFilters;return Object(V.jsxs)("div",{className:"filter-inputs",children:[Object(V.jsxs)("div",{className:"custom-input",children:[Object(V.jsx)("label",{htmlFor:"min-temperature",children:"Minimum temperature"}),Object(V.jsx)("input",{id:"min-temperature",type:"text",value:t,onChange:s}),a&&Object(V.jsx)("p",{className:"validation-error",children:"Enter temperature"})]}),Object(V.jsxs)("div",{className:"custom-input",children:[Object(V.jsx)("label",{htmlFor:"min-temperature",children:"Maximum temperature"}),Object(V.jsx)("input",{id:"max-temperature",type:"text",value:r,onChange:u}),n&&Object(V.jsx)("p",{className:"validation-error",children:"Enter temperature"})]}),c?Object(V.jsx)("button",{type:"button",onClick:o,className:"button",children:"Reset filters"}):Object(V.jsx)("button",{type:"button",onClick:i,className:"button",children:"Filter"})]})},W=(r(31),r(9)),H=function(){var e=M(),t=e.weatherType,r=e.setWeatherType;return Object(V.jsxs)("div",{className:"filter-labels",children:[Object(V.jsxs)("label",{className:"filter__label",htmlFor:"cloudy",children:[Object(V.jsx)("span",{className:W("checkbox",{"checkbox checkbox-selected":"cloudy"===t}),children:"Cloudy"}),Object(V.jsx)("input",{type:"radio",id:"cloudy",name:"filter",className:"radio-checkbox",onChange:function(){return r("cloudy")},checked:"cloudy"===t})]}),Object(V.jsxs)("label",{className:"filter__label",htmlFor:"sunny",children:[Object(V.jsx)("span",{className:W("checkbox",{"checkbox checkbox-selected":"sunny"===t}),children:"Sunny"}),Object(V.jsx)("input",{type:"radio",id:"sunny",name:"filter",className:"radio-checkbox",onChange:function(){return r("sunny")},checked:"sunny"===t})]}),Object(V.jsxs)("label",{className:"filter__label",htmlFor:"rainy",children:[Object(V.jsx)("span",{className:W("checkbox",{"checkbox checkbox-selected":"rainy"===t}),children:"Rainy"}),Object(V.jsx)("input",{type:"radio",id:"rainy",name:"filter",className:"radio-checkbox",onChange:function(){return r("rainy")},checked:"rainy"===t})]})]})},D=function(){return Object(V.jsxs)("div",{className:"filter",children:[Object(V.jsx)(H,{}),Object(V.jsx)(C,{})]})},L=Object.freeze({setUserId:function(e){return{type:T.WEATHER_SET_ACTIVE_DAY,payload:e}}}),P=function(){var e=Object(i.b)();return{dayId:Object(i.c)((function(e){return e.weatherDayId.activeId})),useDayId:function(t){return e(L.setUserId(t))}}},U=(r(32),r(9)),Y=r(11),z=function(){var e=M(),t=e.data,r=e.isFetching,a=P().dayId;return Object(V.jsxs)("div",{className:"head",children:[Object(V.jsx)("div",{className:t&&t.length&&U("icon",{"icon sunny":"sunny"===t[a].type,"icon cloudy":"cloudy"===t[a].type,"icon rainy":"rainy"===t[a].type})}),Object(V.jsxs)("div",{className:"current-date",children:[Object(V.jsx)("p",{children:!r&&t&&t.length&&Y(t[a].day).format("dddd")}),Object(V.jsx)("span",{children:!r&&t&&t.length&&Y(t[a].day).format("MMMM do")})]})]})},G=(r(34),function(e){var t,r=e.getTemperature,a=M(),n=a.data,c=a.isFetching,i=P().dayId;return Object(V.jsxs)("div",{className:"current-weather",children:[Object(V.jsx)("p",{className:"temperature",children:!c&&r(i)}),Object(V.jsxs)("p",{className:"meta",children:[Object(V.jsx)("span",{className:"rainy",children:"%".concat(!c&&(t=i,n&&n.length&&n[t].rain_probability))}),Object(V.jsx)("span",{className:"humidity",children:"%".concat(!c&&function(e){return n&&n.length&&n[e].humidity}(i))})]})]})}),X=(r(35),r(9)),B=r(11),J=function(e){var t=e.getTemperature,r=P(),a=r.dayId,n=r.useDayId,c=M(),i=c.isFetching,s=c.data;return Object(V.jsx)("div",{className:"forecast",children:!i&&s&&s.length&&s.slice(0,7).map((function(e,r){return Object(V.jsxs)("div",{onClick:function(){return n(r)},onKeyDown:function(){return n(r)},tabIndex:0,role:"button",className:X("day",{"day selected":r===a,"day sunny":"sunny"===e.type,"day cloudy":"cloudy"===e.type,"day rainy":"rainy"===e.type}),children:[Object(V.jsx)("p",{children:B(e.day).format("dddd")}),Object(V.jsx)("span",{children:t(r)})]},e.id)}))})},K=(r(36),function(){var e=M(),t=e.isFetching,r=e.data,a=e.error,n=e.resetFilters;if(a&&404===a.status)return Object(V.jsx)("p",{className:"error",children:"Sorry, weather forecast is not found"});if(a&&404!==a.status)return Object(V.jsx)("p",{className:"error",children:"Sorry, something went wrong"});if(!t&&r&&0===r.length)return Object(V.jsxs)("div",{className:"error",children:[Object(V.jsx)("p",{children:"By given criteria no days available"}),Object(V.jsx)("button",{type:"button",onClick:n,className:"reset-button",children:"Reset filters"})]});var c=function(e){return r&&r.length&&r[e].temperature};return Object(V.jsxs)("div",{className:"weather-widget",children:[t&&Object(V.jsx)("p",{className:"error",children:"Loading data from api"}),Object(V.jsxs)("main",{children:[Object(V.jsx)(D,{}),Object(V.jsx)(z,{}),Object(V.jsx)(G,{getTemperature:c}),Object(V.jsx)(J,{getTemperature:c})]})]})});c.a.render(Object(V.jsx)(i.a,{store:A,children:Object(V.jsx)(K,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.53a60c6a.chunk.js.map