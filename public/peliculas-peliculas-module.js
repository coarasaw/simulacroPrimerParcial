(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["peliculas-peliculas-module"],{

/***/ "7MNK":
/*!***********************************************!*\
  !*** ./src/app/peliculas/peliculas.module.ts ***!
  \***********************************************/
/*! exports provided: PeliculasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculasModule", function() { return PeliculasModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _peliculas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peliculas-routing.module */ "dSyJ");
/* harmony import */ var _alta_peliculas_alta_peliculas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alta-peliculas/alta-peliculas.component */ "BG5m");
/* harmony import */ var _listado_peliculas_listado_peliculas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listado-peliculas/listado-peliculas.component */ "xyVj");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class PeliculasModule {
}
PeliculasModule.ɵfac = function PeliculasModule_Factory(t) { return new (t || PeliculasModule)(); };
PeliculasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PeliculasModule });
PeliculasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _peliculas_routing_module__WEBPACK_IMPORTED_MODULE_1__["PeliculasRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PeliculasModule, { declarations: [_alta_peliculas_alta_peliculas_component__WEBPACK_IMPORTED_MODULE_2__["AltaPeliculasComponent"],
        _listado_peliculas_listado_peliculas_component__WEBPACK_IMPORTED_MODULE_3__["ListadoPeliculasComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _peliculas_routing_module__WEBPACK_IMPORTED_MODULE_1__["PeliculasRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "BG5m":
/*!**********************************************************************!*\
  !*** ./src/app/peliculas/alta-peliculas/alta-peliculas.component.ts ***!
  \**********************************************************************/
/*! exports provided: AltaPeliculasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaPeliculasComponent", function() { return AltaPeliculasComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_clases_enum_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/clases/enum.enum */ "WyRl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_pelicula_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/pelicula.service */ "6ke3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_servicios_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/error.service */ "yGJY");
/* harmony import */ var src_app_servicios_actor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/actor.service */ "n+bo");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/menu-gral/menu-gral.component */ "wgSj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function AltaPeliculasComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nombre como minimo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "debe tener 4 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El Tipo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El Tipo como minimo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "debe tener 4 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Fecha de Estreno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Fecha de Estreno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "invalida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La Cantidad de P\u00FAblico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La Cantidad de P\u00FAblico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "invalida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La Foto de la Pel\u00EDcula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La Foto de la Pel\u00EDcula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "invalida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AltaPeliculasComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ACTOR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Datos de peliculas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AltaPeliculasComponent_div_10_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.registar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AltaPeliculasComponent_div_10_span_14_Template, 4, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AltaPeliculasComponent_div_10_span_15_Template, 4, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Tipo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AltaPeliculasComponent_div_10_span_20_Template, 4, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AltaPeliculasComponent_div_10_span_21_Template, 4, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Fecha de Estreno: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AltaPeliculasComponent_div_10_span_26_Template, 4, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AltaPeliculasComponent_div_10_span_27_Template, 4, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "La Cantidad de P\u00FAblico: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AltaPeliculasComponent_div_10_span_32_Template, 4, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, AltaPeliculasComponent_div_10_span_33_Template, 4, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Foto de la Pel\u00EDcula: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, AltaPeliculasComponent_div_10_span_40_Template, 4, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AltaPeliculasComponent_div_10_span_41_Template, 4, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Apellido del Actor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "hr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_4_0 = null;
    let tmp_5_0 = null;
    let tmp_6_0 = null;
    let tmp_7_0 = null;
    let tmp_8_0 = null;
    let tmp_9_0 = null;
    let tmp_10_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.registrarForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r1.registrarForm.get("nombre")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx_r1.registrarForm.get("nombre")) == null ? null : tmp_1_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.registrarForm.get("nombre")) == null ? null : tmp_2_0.hasError("minlength")) && ((tmp_2_0 = ctx_r1.registrarForm.get("nombre")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.registrarForm.get("tipo")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx_r1.registrarForm.get("tipo")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.registrarForm.get("tipo")) == null ? null : tmp_4_0.hasError("minlength")) && ((tmp_4_0 = ctx_r1.registrarForm.get("tipo")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.registrarForm.get("fechaDeEstreno")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx_r1.registrarForm.get("fechaDeEstreno")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r1.registrarForm.get("fechaDeEstreno")) == null ? null : tmp_6_0.hasError("email")) && ((tmp_6_0 = ctx_r1.registrarForm.get("fechaDeEstreno")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r1.registrarForm.get("cantidadDePublico")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx_r1.registrarForm.get("cantidadDePublico")) == null ? null : tmp_7_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx_r1.registrarForm.get("cantidadDePublico")) == null ? null : tmp_8_0.hasError("minlength")) && ((tmp_8_0 = ctx_r1.registrarForm.get("cantidadDePublico")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx_r1.registrarForm.get("fotoDeLaPelicula")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx_r1.registrarForm.get("fotoDeLaPelicula")) == null ? null : tmp_9_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r1.registrarForm.get("fotoDeLaPelicula")) == null ? null : tmp_10_0.hasError("minlength")) && ((tmp_10_0 = ctx_r1.registrarForm.get("fotoDeLaPelicula")) == null ? null : tmp_10_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.registrarForm.invalid);
} }
class AltaPeliculasComponent {
    constructor(_unPelicula, fb, rutas, _errorService, _actoresService, toastr) {
        this._unPelicula = _unPelicula;
        this.fb = fb;
        this.rutas = rutas;
        this._errorService = _errorService;
        this._actoresService = _actoresService;
        this.toastr = toastr;
        this.loading = false;
        this.actor = "Elegir Pais";
        this.registrarForm = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]],
            tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            fechaDeEstreno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cantidadDePublico: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]],
            fotoDeLaPelicula: ['no la guardo aun', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            apellidoActor: ['No se guarda aun', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    registar() {
        var _a, _b, _c, _d;
        console.log('Registar');
        this.loading = true;
        const datoGrabar = {
            id: 0,
            nombre: (_a = this.registrarForm.get('nombre')) === null || _a === void 0 ? void 0 : _a.value,
            tipo: src_app_clases_enum_enum__WEBPACK_IMPORTED_MODULE_1__["eTipo"].Otros,
            fechaDeEstreno: (_b = this.registrarForm.get('fechaDeEstreno')) === null || _b === void 0 ? void 0 : _b.value,
            cantidadDePublico: (_c = this.registrarForm.get('cantidadDePublico')) === null || _c === void 0 ? void 0 : _c.value,
            fotoDeLaPelicula: (_d = this.registrarForm.get('fotoDeLaPelicula')) === null || _d === void 0 ? void 0 : _d.value,
            apellidoActor: ''
        };
        this._unPelicula.crearActor(datoGrabar).then(resp => {
            this.showSuccess();
        }).catch((error) => {
            this.showError(error);
        });
        this.rutas.navigate(['peliculas/listadoPeliculas']);
    }
    showSuccess() {
        this.toastr.success('Se guardó correctamente');
    }
    showError(error) {
        this.toastr.error('Algo salió mal. Error: ' + error);
    }
}
AltaPeliculasComponent.ɵfac = function AltaPeliculasComponent_Factory(t) { return new (t || AltaPeliculasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_servicios_pelicula_service__WEBPACK_IMPORTED_MODULE_3__["PeliculaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_servicios_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_servicios_actor_service__WEBPACK_IMPORTED_MODULE_6__["ActorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
AltaPeliculasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AltaPeliculasComponent, selectors: [["app-alta-peliculas"]], decls: 11, vars: 2, consts: [[1, "container"], ["class", "d-flex justify-content-center mt-5", 4, "ngIf"], [1, "py-5", "text-center"], ["class", "row", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "row"], [1, "col-md-4", "order-md-2", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-muted"], [1, "col-md-8", "order-md-1"], [1, "mb-3"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "col-md-6", "mb-3"], ["for", "nombre"], ["type", "text", "formControlName", "nombre", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "tipo"], ["type", "text", "formControlName", "tipo", 1, "form-control"], ["for", "fechaDeEstreno"], ["type", "date", "formControlName", "fechaDeEstreno", 1, "form-control"], ["for", "cantidadDePublico"], ["type", "number", "formControlName", "cantidadDePublico", 1, "form-control"], ["for", "fotoDeLaPelicula"], ["type", "text", "formControlName", "fotoDeLaPelicula", 1, "form-control"], ["for", "apellidoActor"], ["type", "text", "placeholder", "Apellido del Actor", "formControlNamevalue", "apellidoActor", "readonly", "", 1, "form-control"], [1, "mb-4"], [1, "col-md-12", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "center-block", 3, "disabled"], [1, "text-danger"]], template: function AltaPeliculasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AltaPeliculasComponent_div_6_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "ALTA DE PELICULA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AltaPeliculasComponent_div_10_Template, 50, 12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_8__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbHRhLXBlbGljdWxhcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "dSyJ":
/*!*******************************************************!*\
  !*** ./src/app/peliculas/peliculas-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PeliculasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculasRoutingModule", function() { return PeliculasRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alta_peliculas_alta_peliculas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alta-peliculas/alta-peliculas.component */ "BG5m");
/* harmony import */ var _listado_peliculas_listado_peliculas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listado-peliculas/listado-peliculas.component */ "xyVj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'listadoPeliculas', component: _listado_peliculas_listado_peliculas_component__WEBPACK_IMPORTED_MODULE_2__["ListadoPeliculasComponent"] },
    { path: 'altaPeliculas', component: _alta_peliculas_alta_peliculas_component__WEBPACK_IMPORTED_MODULE_1__["AltaPeliculasComponent"] },
    { path: '', redirectTo: 'listadoPeliculas', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', redirectTo: 'bienvenido' }
];
class PeliculasRoutingModule {
}
PeliculasRoutingModule.ɵfac = function PeliculasRoutingModule_Factory(t) { return new (t || PeliculasRoutingModule)(); };
PeliculasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PeliculasRoutingModule });
PeliculasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PeliculasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xyVj":
/*!****************************************************************************!*\
  !*** ./src/app/peliculas/listado-peliculas/listado-peliculas.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListadoPeliculasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPeliculasComponent", function() { return ListadoPeliculasComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_servicios_pelicula_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/pelicula.service */ "6ke3");
/* harmony import */ var _shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/menu-gral/menu-gral.component */ "wgSj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ListadoPeliculasComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListadoPeliculasComponent_div_9_tr_21_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.fechaDeEstreno);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.cantidadDePublico);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.fotoDeLaPelicula);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.apellidoActor);
} }
function ListadoPeliculasComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Fecha de Estreno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Cant P\u00FAblico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Foto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Actor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ListadoPeliculasComponent_div_9_tr_21_Template, 13, 6, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.listActores);
} }
function ListadoPeliculasComponent_div_10_Template(rf, ctx) { if (rf & 1) {
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
class ListadoPeliculasComponent {
    constructor(afAuth, router, _peliculaService) {
        this.afAuth = afAuth;
        this.router = router;
        this._peliculaService = _peliculaService;
        this.suscriptionList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.listPeliculas = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.getPeliculas();
    }
    getPeliculas() {
        this.suscriptionList == this._peliculaService.getListadoPeliculas().subscribe(data => {
            //console.log(data);
            this.listPeliculas = [];
            this.loading = false;
            data.forEach((element) => {
                this.listPeliculas.push(Object.assign({ id: element.payload.doc.id }, element.payload.doc.data()));
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
ListadoPeliculasComponent.ɵfac = function ListadoPeliculasComponent_Factory(t) { return new (t || ListadoPeliculasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_pelicula_service__WEBPACK_IMPORTED_MODULE_4__["PeliculaService"])); };
ListadoPeliculasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListadoPeliculasComponent, selectors: [["app-listado-peliculas"]], decls: 11, vars: 3, consts: [[1, "d-flex", "justify-content-center", "mt-3"], [1, "btn-principal", "btn-quizz"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["class", "conteiner", 4, "ngIf"], [1, "container"], [1, "row", "mt-3"], [1, "col-lg-8", "offset-lg-2"], [1, "card"], [1, "card-body", "text-center"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "conteiner"]], template: function ListadoPeliculasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-menu-gral");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "LISTADO DE PELICULAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListadoPeliculasComponent_div_8_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ListadoPeliculasComponent_div_9_Template, 22, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ListadoPeliculasComponent_div_10_Template, 7, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listPeliculas.length > 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listPeliculas.length == 0 && !ctx.loading);
    } }, directives: [_shared_menu_gral_menu_gral_component__WEBPACK_IMPORTED_MODULE_5__["MenuGralComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background: #8e9eab;    \r\n    background: linear-gradient(to right, #eef2f3, #8e9eab); \r\n    \r\n      max-width: 1560px;\r\n      padding: 5px;\r\n  \r\n      \r\n      box-shadow: 2px 2px 32px -6px rgba(146,34,34,0.6);\r\n}\r\n\r\n\r\n.btn-principal[_ngcontent-%COMP%]{\r\n    height: 3.125rem;\r\n    background-color: rgb(51, 51, 51);\r\n    border-color: rgb(0, 0, 0,0.1);\r\n    color: white;\r\n    font-size: 20px;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n\r\n.btn-quizz[_ngcontent-%COMP%]{\r\n    padding: 0px 50px;\r\n}\r\n\r\n\r\n.bg-black[_ngcontent-%COMP%]{\r\n    background-color: rgb(51, 51, 51);\r\n}\r\n\r\n\r\n.fas[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 25px;\r\n    margin: 0px 2px;\r\n}\r\n\r\n\r\n.fa-chart-line[_ngcontent-%COMP%]{\r\n    color: darkcyan;\r\n}\r\n\r\n\r\n.fa-trash[_ngcontent-%COMP%]{\r\n    color: #a71c28;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8tcGVsaWN1bGFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUIsR0FBRyw4QkFBOEIsR0FDYywrQkFBK0I7SUFDakcsdURBQXVELEVBQUUscUVBQXFFOztNQUU1SCxpQkFBaUI7TUFDakIsWUFBWTs7TUFFWixXQUFXO01BR1gsaURBQWlEO0FBQ3ZEOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJsaXN0YWRvLXBlbGljdWxhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGU5ZWFiOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZWYyZjMsICM4ZTllYWIpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlZjJmMywgIzhlOWVhYik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIFxyXG4gICAgICBtYXgtd2lkdGg6IDE1NjBweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gIFxyXG4gICAgICAvKiBTSEFET1cgKi9cclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDMycHggLTZweCByZ2JhKDE0NiwzNCwzNCwwLjYpO1xyXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMzJweCAtNnB4IHJnYmEoMTQ2LDM0LDM0LDAuNik7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMzJweCAtNnB4IHJnYmEoMTQ2LDM0LDM0LDAuNik7XHJcbn1cclxuXHJcblxyXG4uYnRuLXByaW5jaXBhbHtcclxuICAgIGhlaWdodDogMy4xMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAwLDAuMSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLXF1aXp6e1xyXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XHJcbn1cclxuXHJcbi5iZy1ibGFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxufVxyXG5cclxuLmZhcyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDBweCAycHg7XHJcbn1cclxuXHJcbi5mYS1jaGFydC1saW5le1xyXG4gICAgY29sb3I6IGRhcmtjeWFuO1xyXG59XHJcblxyXG4uZmEtdHJhc2h7XHJcbiAgICBjb2xvcjogI2E3MWMyODtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=peliculas-peliculas-module.js.map