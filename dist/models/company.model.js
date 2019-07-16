"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Company = class Company extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        required: true,
    }),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], Company.prototype, "cnpj", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Company.prototype, "token", void 0);
Company = __decorate([
    repository_1.model({ settings: {} }),
    __metadata("design:paramtypes", [Object])
], Company);
exports.Company = Company;
//# sourceMappingURL=company.model.js.map