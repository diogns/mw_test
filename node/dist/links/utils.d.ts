/// <reference types="node" />
export declare const processLinkRowsSheetData: (rows: []) => any;
export declare const processLinkUpdateRowsSheetData: (rows: []) => any;
export declare const processInitData: (dataArray: any) => any;
export declare const processUpdateData: (dataSheetArray: any, linksData: any) => any;
export declare const generateDataReportDocx: (dataArray: any) => any;
export declare const generateDocx: (dataArray: any, fileName?: string, save?: boolean) => any;
export declare const docxToPdf: (inputPath: string, fileName?: string, save?: boolean) => Promise<{
    pdfBuf: Buffer;
}>;
export declare const generateDataReportXlsx: (link: any, gonio: any) => any;
export declare const generateXlsx: (data: any, fileName?: string, save?: boolean) => any;
