import Excel from 'exceljs';
export declare const getCellValue: (row: Excel.Row, cellIndex: number) => string;
export declare const readExcelFile: (filePath: string) => Promise<Excel.Workbook>;
export declare const readRowsFromExcelSheet: (workbookContent: any, sheetNumber: number, rowStartIndex?: number, numberOfRows?: number) => any;
export declare const readExcelSheet: ({ fileName, sheetNumber, rowStartIndex, numberOfRows, }: {
    fileName?: string;
    sheetNumber?: number;
    rowStartIndex?: number;
    numberOfRows?: number;
}) => Promise<Excel.Row[]>;
