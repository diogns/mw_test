"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCanalizationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_canalization_dto_1 = require("./create-canalization.dto");
class UpdateCanalizationDto extends (0, swagger_1.PartialType)(create_canalization_dto_1.CreateCanalizationDto) {
}
exports.UpdateCanalizationDto = UpdateCanalizationDto;
//# sourceMappingURL=update-canalization.dto.js.map