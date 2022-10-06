(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "n+bo":
/*!********************************************!*\
  !*** ./src/app/servicios/actor.service.ts ***!
  \********************************************/
/*! exports provided: ActorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorService", function() { return ActorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class ActorService {
    constructor(_firestore) {
        this._firestore = _firestore;
    }
    crearActor(actorDato) {
        return this._firestore.collection('actores').add(actorDato);
    }
    getListadoActores() {
        return this._firestore.collection('actores').stateChanges();
    }
}
ActorService.ɵfac = function ActorService_Factory(t) { return new (t || ActorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ActorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActorService, factory: ActorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "yGJY":
/*!********************************************!*\
  !*** ./src/app/servicios/error.service.ts ***!
  \********************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorService {
    constructor() { }
    error(code) {
        switch (code) {
            // Email ya registrado
            case 'auth/email-already-in-use':
                return 'El Correo ya esta registrado';
            // Correo invalido
            case 'auth/invalid-email':
                return 'El Correo es invalido';
            // La Contraseña es muy debil
            case 'auth/weak-password':
                return 'La Contraseña es muy debil';
            case 'auth/user-not-found':
                return 'Usuario invalido';
            case 'auth/wrong-password':
                return 'La contraseña es invalida';
            default:
                return 'Error desconocido';
        }
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map