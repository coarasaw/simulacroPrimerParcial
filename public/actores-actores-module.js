(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actores-actores-module"],{

/***/ "755t":
/*!****************************************************************!*\
  !*** ./src/app/componentes/tabla-pais/tabla-pais.component.ts ***!
  \****************************************************************/
/*! exports provided: TablaPaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaPaisComponent", function() { return TablaPaisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_pais_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/pais.service */ "W2cw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TablaPaisComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TablaPaisComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const itemPais_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.emitirPais(itemPais_r1.nombre); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPais_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemPais_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", itemPais_r1.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
//import { Country } from '../../interfaces/pais.interface';
class TablaPaisComponent {
    //@Output() eventoPaisSeleccionado = new EventEmitter<Pais>();
    constructor(paisService) {
        this.paisService = paisService;
        this.paises = [];
        this.arrayPrueba = [{ nombre: 'Argentia', foto: 'https://flagcdn.com/w320/gt.png' }];
        this.eventoPaisSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.cargarPais();
    }
    cargarPais() {
        this.paises = [];
        this.paisService.getPaises().subscribe((data) => {
            for (let index = 0; index < data.length; index++) {
                const unPais = data[index];
                let nombre = unPais.name.common;
                let foto = unPais.flags.png;
                let paisNuevo = {
                    nombre: nombre,
                    foto: foto
                };
                this.paises.push(paisNuevo);
            }
            this.paises = this.paises.slice(0, 5);
        });
        console.log('Array Paises: ', this.paises);
    }
    emitirPais(pais) {
        this.eventoPaisSeleccionado.emit(pais);
    }
}
TablaPaisComponent.ɵfac = function TablaPaisComponent_Factory(t) { return new (t || TablaPaisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_pais_service__WEBPACK_IMPORTED_MODULE_1__["PaisService"])); };
TablaPaisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablaPaisComponent, selectors: [["app-tabla-pais"]], outputs: { eventoPaisSeleccionado: "eventoPaisSeleccionado" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-muted"], [3, "click"], [2, "float", "center", "width", "50px", "height", "50px", "object-fit", "scale-down", 3, "src"]], template: function TablaPaisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TablaPaisComponent_div_0_Template, 7, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paises);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\r\n    max-width: 960px;\r\n  }\r\n  \r\n  .border-top[_ngcontent-%COMP%] { border-top: 1px solid #e5e5e5; }\r\n  \r\n  .border-bottom[_ngcontent-%COMP%] { border-bottom: 1px solid #e5e5e5; }\r\n  \r\n  .border-top-gray[_ngcontent-%COMP%] { border-top-color: #adb5bd; }\r\n  \r\n  .box-shadow[_ngcontent-%COMP%] { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n  \r\n  .lh-condensed[_ngcontent-%COMP%] { line-height: 1.25; }\r\n  \r\n  h4[_ngcontent-%COMP%]{\r\n      padding: 5px;\r\n      text-align: center;\r\n      font-family: fantasy;\r\n      color: brown;    \r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    border-radius: 100%;   \r\n    background-color: rgba(165, 42, 42, 0.474); \r\n  }\r\n  \r\n  img[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      height: 100%;\r\n      border-radius: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxhLXBhaXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQSxjQUFjLDZCQUE2QixFQUFFOztFQUM3QyxpQkFBaUIsZ0NBQWdDLEVBQUU7O0VBQ25ELG1CQUFtQix5QkFBeUIsRUFBRTs7RUFFOUMsY0FBYyw4Q0FBOEMsRUFBRTs7RUFFOUQsZ0JBQWdCLGlCQUFpQixFQUFFOztFQUVuQztNQUNJLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsMENBQTBDO0VBQzVDOztFQUVBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7RUFDdkIiLCJmaWxlIjoidGFibGEtcGFpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLXRvcCB7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1OyB9XHJcbiAgLmJvcmRlci1ib3R0b20geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTsgfVxyXG4gIC5ib3JkZXItdG9wLWdyYXkgeyBib3JkZXItdG9wLWNvbG9yOiAjYWRiNWJkOyB9XHJcbiAgXHJcbiAgLmJveC1zaGFkb3cgeyBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpOyB9XHJcbiAgXHJcbiAgLmxoLWNvbmRlbnNlZCB7IGxpbmUtaGVpZ2h0OiAxLjI1OyB9XHJcblxyXG4gIGg0e1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbiAgICAgIGNvbG9yOiBicm93bjsgICAgXHJcbiAgfVxyXG5cclxuICBidXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlOyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDQyLCA0MiwgMC40NzQpOyBcclxuICB9XHJcblxyXG4gIGltZ3tcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9Il19 */"] });


/***/ }),

/***/ "W2cw":
/*!*******************************************!*\
  !*** ./src/app/servicios/pais.service.ts ***!
  \*******************************************/
/*! exports provided: PaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisService", function() { return PaisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


/* import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators'; */
class PaisService {
    /* private apiUrl: string = 'https://restcountries.com/v2';
  
    get httpParams () {
      return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
    } */
    constructor(http) {
        this.http = http;
    }
    getPaises() {
        // return this.http.get(`https://restcountries.com/v3.1/all`);
        return this.http.get(`https://restcountries.com/v3.1/region/Americas`);
    }
    getPaisByName(name) {
        var url = "`https://restcountries.com/v3.1/name/${name}`";
        console.log(url);
        return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
    }
}
PaisService.ɵfac = function PaisService_Factory(t) { return new (t || PaisService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PaisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaisService, factory: PaisService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "h969":
/*!****************************************************************!*\
  !*** ./src/app/actores/alta-actores/alta-actores.component.ts ***!
  \****************************************************************/
/*! exports provided: AltaActoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaActoresComponent", function() { return AltaActoresComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_actor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/actor.service */ "n+bo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_servicios_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/error.service */ "yGJY");
/* harmony import */ var src_app_servicios_pais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/pais.service */ "W2cw");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/menu-gral/menu-gral.component */ "wgSj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _componentes_tabla_pais_tabla_pais_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../componentes/tabla-pais/tabla-pais.component */ "755t");











function AltaActoresComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AltaActoresComponent_div_10_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AltaActoresComponent_div_10_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nombre como minimo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "debe tener 4 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AltaActoresComponent_div_10_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El Apellido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AltaActoresComponent_div_10_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Apellido como minimo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "debe tener 4 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AltaActoresComponent_div_10_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El Correo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AltaActoresComponent_div_10_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Correo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "invalido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AltaActoresComponent_div_10_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La Direcci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AltaActoresComponent_div_10_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Direcci\u00F3n como minimo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "debe tener 4 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AltaActoresComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nacionalidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-tabla-pais", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventoPaisSeleccionado", function AltaActoresComponent_div_10_Template_app_tabla_pais_eventoPaisSeleccionado_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.mostrarPais($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Datos personales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AltaActoresComponent_div_10_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.registar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AltaActoresComponent_div_10_span_15_Template, 4, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AltaActoresComponent_div_10_span_16_Template, 4, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Apellido:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AltaActoresComponent_div_10_span_21_Template, 4, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AltaActoresComponent_div_10_span_22_Template, 4, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AltaActoresComponent_div_10_span_29_Template, 4, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AltaActoresComponent_div_10_span_30_Template, 4, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Direcci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AltaActoresComponent_div_10_span_35_Template, 4, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AltaActoresComponent_div_10_span_36_Template, 4, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Nacionalidad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "hr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_4_0 = null;
    let tmp_5_0 = null;
    let tmp_6_0 = null;
    let tmp_7_0 = null;
    let tmp_8_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.registrarForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r1.registrarForm.get("nombre")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx_r1.registrarForm.get("nombre")) == null ? null : tmp_1_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.registrarForm.get("nombre")) == null ? null : tmp_2_0.hasError("minlength")) && ((tmp_2_0 = ctx_r1.registrarForm.get("nombre")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.registrarForm.get("apellido")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx_r1.registrarForm.get("apellido")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.registrarForm.get("apellido")) == null ? null : tmp_4_0.hasError("minlength")) && ((tmp_4_0 = ctx_r1.registrarForm.get("apellido")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.registrarForm.get("email")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx_r1.registrarForm.get("email")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r1.registrarForm.get("email")) == null ? null : tmp_6_0.hasError("email")) && ((tmp_6_0 = ctx_r1.registrarForm.get("email")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r1.registrarForm.get("direccion")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx_r1.registrarForm.get("direccion")) == null ? null : tmp_7_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx_r1.registrarForm.get("direccion")) == null ? null : tmp_8_0.hasError("minlength")) && ((tmp_8_0 = ctx_r1.registrarForm.get("direccion")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.pais);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.registrarForm.invalid);
} }
class AltaActoresComponent {
    //paisService: any;
    constructor(_unActor, fb, rutas, _errorService, _paisesService, toastr) {
        this._unActor = _unActor;
        this.fb = fb;
        this.rutas = rutas;
        this._errorService = _errorService;
        this._paisesService = _paisesService;
        this.toastr = toastr;
        this.paises = [];
        this.loading = false;
        this.pais = "Elegir Pais";
        this.registrarForm = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]],
        });
    }
    ngOnInit() {
        this._paisesService.getPaises().subscribe(data => {
            this.paisSeleccionado = data;
        });
    }
    mostrarPais(paisNombre) {
        this.pais = paisNombre;
    }
    registar() {
        var _a, _b, _c, _d;
        console.log('Registar');
        this.loading = true;
        const datoGrabar = {
            nombre: (_a = this.registrarForm.get('nombre')) === null || _a === void 0 ? void 0 : _a.value,
            apellido: (_b = this.registrarForm.get('apellido')) === null || _b === void 0 ? void 0 : _b.value,
            email: (_c = this.registrarForm.get('email')) === null || _c === void 0 ? void 0 : _c.value,
            direccion: (_d = this.registrarForm.get('direccion')) === null || _d === void 0 ? void 0 : _d.value,
            pais: this.pais
        };
        this._unActor.crearActor(datoGrabar).then(resp => {
            this.showSuccess();
        }).catch((error) => {
            this.showError(error);
        });
        this.rutas.navigate(['actores/listadoActores']);
    }
    showSuccess() {
        this.toastr.success('Se guardó correctamente');
    }
    showError(error) {
        this.toastr.error('Algo salió mal. Error: ' + error);
    }
}
AltaActoresComponent.ɵfac = function AltaActoresComponent_Factory(t) { return new (t || AltaActoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_actor_service__WEBPACK_IMPORTED_MODULE_2__["ActorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_pais_service__WEBPACK_IMPORTED_MODULE_5__["PaisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
AltaActoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AltaActoresComponent, selectors: [["app-alta-actores"]], decls: 11, vars: 2, consts: [[1, "container"], ["class", "d-flex justify-content-center mt-5", 4, "ngIf"], [1, "py-5", "text-center"], ["class", "row", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "row"], [1, "col-md-4", "order-md-2", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-muted"], [3, "eventoPaisSeleccionado"], [1, "col-md-8", "order-md-1"], [1, "mb-3"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "col-md-6", "mb-3"], ["for", "nombre"], ["type", "text", "formControlName", "nombre", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "apellido"], ["type", "text", "formControlName", "apellido", 1, "form-control"], ["for", "email"], ["type", "email", "placeholder", "you@example.com", "formControlName", "email", 1, "form-control"], ["for", "direccion"], ["type", "text", "formControlName", "direccion", 1, "form-control"], ["for", "nacionalidad"], ["type", "text", "formControlNamevalue", "nacionalidad", "readonly", "", 1, "form-control", 3, "placeholder"], [1, "mb-4"], [1, "col-md-12", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "center-block", 3, "disabled"], [1, "text-danger"]], template: function AltaActoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AltaActoresComponent_div_6_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ALTA DE ACTOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AltaActoresComponent_div_10_Template, 45, 11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_7__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _componentes_tabla_pais_tabla_pais_component__WEBPACK_IMPORTED_MODULE_9__["TablaPaisComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbHRhLWFjdG9yZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "nO3h":
/*!***************************************************!*\
  !*** ./src/app/actores/actores-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ActoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActoresRoutingModule", function() { return ActoresRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alta_actores_alta_actores_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alta-actores/alta-actores.component */ "h969");
/* harmony import */ var _listado_actores_listado_actores_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado-actores/listado-actores.component */ "wCza");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'altActor', component: _alta_actores_alta_actores_component__WEBPACK_IMPORTED_MODULE_1__["AltaActoresComponent"] },
    { path: 'listadoActores', component: _listado_actores_listado_actores_component__WEBPACK_IMPORTED_MODULE_2__["ListadoActoresComponent"] },
    { path: '', redirectTo: 'listadoActores', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', redirectTo: 'bienvenido' }
];
class ActoresRoutingModule {
}
ActoresRoutingModule.ɵfac = function ActoresRoutingModule_Factory(t) { return new (t || ActoresRoutingModule)(); };
ActoresRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ActoresRoutingModule });
ActoresRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ActoresRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "oKT8":
/*!*******************************************!*\
  !*** ./src/app/actores/actores.module.ts ***!
  \*******************************************/
/*! exports provided: ActoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActoresModule", function() { return ActoresModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _actores_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actores-routing.module */ "nO3h");
/* harmony import */ var _alta_actores_alta_actores_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alta-actores/alta-actores.component */ "h969");
/* harmony import */ var _listado_actores_listado_actores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listado-actores/listado-actores.component */ "wCza");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _componentes_tabla_pais_tabla_pais_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/tabla-pais/tabla-pais.component */ "755t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class ActoresModule {
}
ActoresModule.ɵfac = function ActoresModule_Factory(t) { return new (t || ActoresModule)(); };
ActoresModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ActoresModule });
ActoresModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _actores_routing_module__WEBPACK_IMPORTED_MODULE_1__["ActoresRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ActoresModule, { declarations: [_alta_actores_alta_actores_component__WEBPACK_IMPORTED_MODULE_2__["AltaActoresComponent"],
        _listado_actores_listado_actores_component__WEBPACK_IMPORTED_MODULE_3__["ListadoActoresComponent"],
        _componentes_tabla_pais_tabla_pais_component__WEBPACK_IMPORTED_MODULE_6__["TablaPaisComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _actores_routing_module__WEBPACK_IMPORTED_MODULE_1__["ActoresRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "wCza":
/*!**********************************************************************!*\
  !*** ./src/app/actores/listado-actores/listado-actores.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListadoActoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoActoresComponent", function() { return ListadoActoresComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_servicios_actor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/actor.service */ "n+bo");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/menu-gral/menu-gral.component */ "wgSj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ListadoActoresComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListadoActoresComponent_div_9_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.apellido);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.pais);
} }
function ListadoActoresComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Nacionalidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ListadoActoresComponent_div_9_tr_19_Template, 11, 5, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.listActores);
} }
function ListadoActoresComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "No hay listado para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ListadoActoresComponent {
    constructor(afAuth, router, _actorService) {
        this.afAuth = afAuth;
        this.router = router;
        this._actorService = _actorService;
        this.suscriptionUser = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.suscriptionList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.listActores = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        //this.suscriptionUser = this.afAuth.user.subscribe(user => {
        //console.log(user);
        this.getActores();
        //Esto es para que este Logeado
        /* if (user && user.emailVerified) {
          // cargar listado
        } else {
          this.router.navigate(['/auth/login'])
        } */
        //})
    }
    getActores() {
        this.suscriptionList == this._actorService.getListadoActores().subscribe(data => {
            //console.log(data);
            this.listActores = [];
            this.loading = false;
            data.forEach((element) => {
                this.listActores.push(Object.assign({ id: element.payload.doc.id }, element.payload.doc.data()));
                //console.log(element.payload.doc.id);
                //console.log(element.payload.doc.data());
            });
            //console.log(this.listJuegos);
        });
    }
    ngOnDestroy() {
        //this.suscriptionUser.unsubscribe();
        this.suscriptionList.unsubscribe();
    }
}
ListadoActoresComponent.ɵfac = function ListadoActoresComponent_Factory(t) { return new (t || ListadoActoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_actor_service__WEBPACK_IMPORTED_MODULE_4__["ActorService"])); };
ListadoActoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListadoActoresComponent, selectors: [["app-listado-actores"]], decls: 11, vars: 3, consts: [[1, "d-flex", "justify-content-center", "mt-3"], [1, "btn-principal", "btn-quizz"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["class", "conteiner", 4, "ngIf"], [1, "container"], [1, "row", "mt-3"], [1, "col-lg-8", "offset-lg-2"], [1, "card"], [1, "card-body", "text-center"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "conteiner"]], template: function ListadoActoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "LISTADO DE ACTORES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListadoActoresComponent_div_8_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ListadoActoresComponent_div_9_Template, 20, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ListadoActoresComponent_div_10_Template, 7, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listActores.length > 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listActores.length == 0 && !ctx.loading);
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_5__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background: #8e9eab;    \r\n    background: linear-gradient(to right, #eef2f3, #8e9eab); \r\n    \r\n      max-width: 1560px;\r\n      padding: 5px;\r\n  \r\n      \r\n      box-shadow: 2px 2px 32px -6px rgba(146,34,34,0.6);\r\n}\r\n\r\n\r\n.btn-principal[_ngcontent-%COMP%]{\r\n    height: 3.125rem;\r\n    background-color: rgb(51, 51, 51);\r\n    border-color: rgb(0, 0, 0,0.1);\r\n    color: white;\r\n    font-size: 20px;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n\r\n.btn-quizz[_ngcontent-%COMP%]{\r\n    padding: 0px 50px;\r\n}\r\n\r\n\r\n.bg-black[_ngcontent-%COMP%]{\r\n    background-color: rgb(51, 51, 51);\r\n}\r\n\r\n\r\n.fas[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 25px;\r\n    margin: 0px 2px;\r\n}\r\n\r\n\r\n.fa-chart-line[_ngcontent-%COMP%]{\r\n    color: darkcyan;\r\n}\r\n\r\n\r\n.fa-trash[_ngcontent-%COMP%]{\r\n    color: #a71c28;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8tYWN0b3Jlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CLEdBQUcsOEJBQThCLEdBQ2MsK0JBQStCO0lBQ2pHLHVEQUF1RCxFQUFFLHFFQUFxRTs7TUFFNUgsaUJBQWlCO01BQ2pCLFlBQVk7O01BRVosV0FBVztNQUdYLGlEQUFpRDtBQUN2RDs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZUFBZTtJQUNmLHFDQUFxQztBQUN6Qzs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoibGlzdGFkby1hY3RvcmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ZTllYWI7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlZjJmMywgIzhlOWVhYik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVmMmYzLCAjOGU5ZWFiKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG4gICAgXHJcbiAgICAgIG1heC13aWR0aDogMTU2MHB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgXHJcbiAgICAgIC8qIFNIQURPVyAqL1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMzJweCAtNnB4IHJnYmEoMTQ2LDM0LDM0LDAuNik7XHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAzMnB4IC02cHggcmdiYSgxNDYsMzQsMzQsMC42KTtcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAzMnB4IC02cHggcmdiYSgxNDYsMzQsMzQsMC42KTtcclxufVxyXG5cclxuXHJcbi5idG4tcHJpbmNpcGFse1xyXG4gICAgaGVpZ2h0OiAzLjEyNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDAsMC4xKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4tcXVpenp7XHJcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcclxufVxyXG5cclxuLmJnLWJsYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcblxyXG4uZmFzIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbjogMHB4IDJweDtcclxufVxyXG5cclxuLmZhLWNoYXJ0LWxpbmV7XHJcbiAgICBjb2xvcjogZGFya2N5YW47XHJcbn1cclxuXHJcbi5mYS10cmFzaHtcclxuICAgIGNvbG9yOiAjYTcxYzI4O1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=actores-actores-module.js.map