"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAntennaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_antenna_dto_1 = require("./create-antenna.dto");
class UpdateAntennaDto extends (0, swagger_1.PartialType)(create_antenna_dto_1.CreateAntennaBaseDto) {
}
exports.UpdateAntennaDto = UpdateAntennaDto;
//# sourceMappingURL=update-antenna.dto.js.map