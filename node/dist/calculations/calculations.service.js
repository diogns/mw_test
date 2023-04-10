"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculationsService = void 0;
const common_1 = require("@nestjs/common");
let CalculationsService = class CalculationsService {
    create(createCalculationDto) {
        return 'This action adds a new calculation';
    }
    findAll() {
        return `This action returns all calculations`;
    }
    findOne(id) {
        return `This action returns a #${id} calculation`;
    }
    update(id, updateCalculationDto) {
        return `This action updates a #${id} calculation`;
    }
    remove(id) {
        return `This action removes a #${id} calculation`;
    }
};
CalculationsService = __decorate([
    (0, common_1.Injectable)()
], CalculationsService);
exports.CalculationsService = CalculationsService;
//# sourceMappingURL=calculations.service.js.map