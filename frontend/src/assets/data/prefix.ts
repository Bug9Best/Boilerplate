export interface PrefixInterface {
  label: string;
  code: string;
  value: number;
}

export class PrefixData {
  prefix: PrefixInterface[] = [
    { label: 'พลเรือเอก', code: 'ADM', value: 1 },
    { label: 'พลเรือโท', code: 'VADM', value: 2 },
    { label: 'พลเรือตรี', code: 'RADM', value: 3 },
    { label: 'นาวาเอก', code: 'CAPT', value: 4 },
    { label: 'นาวาโท', code: 'CDR', value: 5 },
    { label: 'นาวาตรี', code: 'LCDR', value: 6 },
    { label: 'เรือเอก', code: 'LT', value: 7 },
    { label: 'เรือโท', code: 'LTJG', value: 8 },
    { label: 'เรือตรี', code: 'ENS', value: 9 },
    { label: 'พันจ่าเอก', code: 'CPO', value: 10 },
    { label: 'พันจ่าโท', code: 'PO1', value: 11 },
    { label: 'พันจ่าตรี', code: 'PO2', value: 12 },
    { label: 'จ่าเอก', code: 'PO3', value: 13 },
    { label: 'จ่าโท', code: 'PO4', value: 14 },
    { label: 'จ่าตรี', code: 'PO5', value: 15 },

    { label: 'พลเรือเอกหญิง', code: 'ADMW', value: 16 },
    { label: 'พลเรือโทหญิง', code: 'VADMW', value: 17 },
    { label: 'พลเรือตรีหญิง', code: 'RADMW', value: 18 },
    { label: 'นาวาเอกหญิง', code: 'CAPTW', value: 19 },
    { label: 'นาวาโทหญิง', code: 'CDRW', value: 20 },
    { label: 'นาวาตรีหญิง', code: 'LCDRW', value: 21 },
    { label: 'เรือเอกหญิง', code: 'LTW', value: 22 },
    { label: 'เรือโทหญิง', code: 'LTJGW', value: 23 },
    { label: 'เรือตรีหญิง', code: 'ENSW', value: 24 },
    { label: 'พันจ่าเอกหญิง', code: 'CPOW', value: 25 },
    { label: 'พันจ่าโทหญิง', code: 'PO1W', value: 26 },
    { label: 'พันจ่าตรีหญิง', code: 'PO2W', value: 27 },
    { label: 'จ่าเอกหญิง', code: 'PO3W', value: 28 },
    { label: 'จ่าโทหญิง', code: 'PO4W', value: 29 },
    { label: 'จ่าตรีหญิง', code: 'PO5W', value: 30 },

    { label: 'นักเรียนจ่าทหารเรือ', code: 'NST', value: 31 },
    { label: 'นักเรียนพยาบาลทหารเรือ', code: 'NURST', value: 32 },

    { label: 'นาย', code: 'MR', value: 33 },
    { label: 'นาง', code: 'MRS', value: 34 },
    { label: 'นางสาว', code: 'MS', value: 35 },
  ];
}
