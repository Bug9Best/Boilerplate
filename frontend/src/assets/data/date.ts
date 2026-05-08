export interface YearInterface {
    label: string;
    code: string;
    value: number;
}

export interface MonthsInterface {
    label: string;
    code: string;
    value: number;
}

export class DateData {
    months: MonthsInterface[] = [
        { label: 'มกราคม', code: 'JAN', value: 1 },
        { label: 'กุมภาพันธ์', code: 'FEB', value: 2 },
        { label: 'มีนาคม', code: 'MAR', value: 3 },
        { label: 'เมษายน', code: 'APR', value: 4 },
        { label: 'พฤษภาคม', code: 'MAY', value: 5 },
        { label: 'มิถุนายน', code: 'JUN', value: 6 },
        { label: 'กรกฎาคม', code: 'JUL', value: 7 },
        { label: 'สิงหาคม', code: 'AUG', value: 8 },
        { label: 'กันยายน', code: 'SEP', value: 9 },
        { label: 'ตุลาคม', code: 'OCT', value: 10 },
        { label: 'พฤศจิกายน', code: 'NOV', value: 11 },
        { label: 'ธันวาคม', code: 'DEC', value: 12 }
    ]

    year: YearInterface[] = []

    constructor() {
        const originYear = 2568;
        const currentYearThai = new Date().getFullYear() + 543;

        for (let i = currentYearThai; i >= originYear; i--) {
            this.year.push({
                label: `${i}`,
                code: `Y${i}`,
                value: i
            });
        }
    }
}
