"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCalculationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_calculation_dto_1 = require("./create-calculation.dto");
class UpdateCalculationDto extends (0, swagger_1.PartialType)(create_calculation_dto_1.CreateCalculationDto) {
}
exports.UpdateCalculationDto = UpdateCalculationDto;
//# sourceMappingURL=update-calculation.dto.js.map