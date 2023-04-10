"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatternDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pattern_dto_1 = require("./create-pattern.dto");
class UpdatePatternDto extends (0, swagger_1.PartialType)(create_pattern_dto_1.CreatePatternDto) {
}
exports.UpdatePatternDto = UpdatePatternDto;
//# sourceMappingURL=update-pattern.dto.js.map