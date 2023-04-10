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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksController = void 0;
const common_1 = require("@nestjs/common");
const links_service_1 = require("./links.service");
const create_link_dto_1 = require("./dto/create-link.dto");
let LinksController = class LinksController {
    constructor(linksService) {
        this.linksService = linksService;
    }
    create(createLinkDto) {
        return this.linksService.create(createLinkDto);
    }
    findAll() {
        return this.linksService.findAll();
    }
    findOne(id) {
        return this.linksService.findOne(id);
    }
    remove(id) {
        return this.linksService.remove(+id);
    }
    async storageInitBaseData() {
        const data = await this.linksService.readExcelFile(3);
        const linksCreated = await this.linksService.createMany(data);
        return linksCreated;
    }
    async updateBasetData() {
        const data = await this.linksService.readExcelFileUpdate(6);
        return 'linksCreated';
    }
    datatable(query) {
        return this.linksService.datatable(query);
    }
    async docxById(id, res) {
        const { buf, fileName } = await this.linksService.getDocById(id);
        res.set({
            'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'Content-Disposition': `"attachment; filename=${fileName}"`,
        });
        res.send(buf);
    }
    async pdfById(id, res) {
        const { buf, fileName } = await this.linksService.getPdfById(id);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `"attachment; filename=${fileName}"`,
        });
        res.send(buf);
    }
    async xlsxById(id, res) {
        const { buf, fileName } = await this.linksService.getXlsxById(id);
        res.set({
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': `"attachment; filename=${fileName}"`,
        });
        res.send(buf);
    }
    async docxReport() {
        const { buf, fileName } = await this.linksService.getDocReport();
        return 'docxReport';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_link_dto_1.CreateLinkDto]),
    __metadata("design:returntype", void 0)
], LinksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LinksController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('init/base-data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LinksController.prototype, "storageInitBaseData", null);
__decorate([
    (0, common_1.Post)('update/base-data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LinksController.prototype, "updateBasetData", null);
__decorate([
    (0, common_1.Get)('/list/datatable/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LinksController.prototype, "datatable", null);
__decorate([
    (0, common_1.Get)('/docx/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LinksController.prototype, "docxById", null);
__decorate([
    (0, common_1.Get)('/pdf/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LinksController.prototype, "pdfById", null);
__decorate([
    (0, common_1.Get)('/xlsx/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LinksController.prototype, "xlsxById", null);
__decorate([
    (0, common_1.Get)('/docx/report/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LinksController.prototype, "docxReport", null);
LinksController = __decorate([
    (0, common_1.Controller)('link'),
    __metadata("design:paramtypes", [links_service_1.LinksService])
], LinksController);
exports.LinksController = LinksController;
//# sourceMappingURL=links.controller.js.map