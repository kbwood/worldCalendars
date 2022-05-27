declare type CompareResult = -1 | 0 | 1;
declare type Period = 'd' | 'm' | 'w' | 'y';
declare class CalendarError extends Error {
}
declare class CDate {
    private cal;
    private yr;
    private mn;
    private dy;
    constructor(calendar: BaseCalendar, date: CDate);
    constructor(calendar: BaseCalendar, year: number, month: number, day: number);
    date(): CDate;
    date(year: number, month: number, day: number): CDate;
    calendar(): BaseCalendar;
    year(value: number): CDate;
    year(): number;
    month(value: number): CDate;
    month(): number;
    day(value: number): CDate;
    day(): number;
    epoch(): string;
    formatYear(): string;
    leapYear(): boolean;
    monthOfYear(): number;
    weekOfYear(): number;
    daysInYear(): number;
    dayOfYear(): number;
    daysInMonth(): number;
    dayOfWeek(): number;
    weekDay(): boolean;
    extraInfo(): Object;
    add(offset: number, period: Period): CDate;
    sub(offset: number, period: Period): CDate;
    set(value: number, period: Period): CDate;
    compareTo(date: CDate): CompareResult;
    toJD(): number;
    fromJD(jd: number): CDate;
    toJSDate(): Date;
    fromJSDate(jsd: Date): CDate;
    toString(): string;
}
declare type SubstituteDigits = (value: number) => string;
declare type CalendarLocalisation = {
    dateFormat: string;
    dayNames: string[];
    dayNamesMin: string[];
    dayNamesShort: string[];
    digits: SubstituteDigits | undefined;
    epochs: string[];
    firstDay: number;
    isRTL: boolean;
    monthNames: string[];
    monthNamesShort: string[];
    name: string;
};
declare type DateParts = [number, number, number];
declare type RegionalLocalisations = {
    '': CalendarLocalisation;
    [index: string]: CalendarLocalisation | undefined;
};
declare type ValidOptions = {
    notDay?: boolean;
    notMonth?: boolean;
};
declare abstract class BaseCalendar {
    readonly name: string;
    protected readonly jdEpoch: number;
    protected readonly daysPerMonth: number[];
    protected readonly hasYearZero: boolean;
    protected readonly monthsPerYear: number;
    protected readonly minMonth: number;
    protected readonly firstMonth: number;
    protected readonly minDay: number;
    readonly local: CalendarLocalisation;
    constructor(name: string, jdEpoch: number, local: CalendarLocalisation, daysPerMonth: number[], monthsPerYear?: number, hasYearZero?: boolean, minMonth?: number, firstMonth?: number, minDay?: number);
    date(date?: CDate): CDate;
    date(year: number, month: number, day: number): CDate;
    abstract leapYear(date: CDate): boolean;
    abstract leapYear(year: number): boolean;
    epoch(yearOrDate: CDate | number): string;
    formatYear(yearOrDate: CDate | number): string;
    monthsInYear(yearOrDate: CDate | number): number;
    monthOfYear(date: CDate): number;
    monthOfYear(year: number, month: number): number;
    fromMonthOfYear(year: number, ord: number): number;
    weekOfYear(date: CDate): number;
    weekOfYear(year: number, month: number, day: number): number;
    daysInYear(yearOrDate: CDate | number): number;
    dayOfYear(date: CDate): number;
    dayOfYear(year: number, month: number, day: number): number;
    abstract daysInMonth(date: CDate): number;
    abstract daysInMonth(year: number, month: number): number;
    daysInWeek(): number;
    dayOfWeek(date: CDate): number;
    dayOfWeek(year: number, month: number, day: number): number;
    abstract weekDay(date: CDate): boolean;
    abstract weekDay(year: number, month: number, day: number): boolean;
    extraInfo(date: CDate): Object;
    extraInfo(year: number, month: number, day: number): Object;
    add(date: CDate, offset: number, period: Period): CDate;
    sub(date: CDate, offset: number, period: Period): CDate;
    set(date: CDate, value: number, period: Period): CDate;
    isValid(year: number, month: number, day: number, { notDay, notMonth }?: ValidOptions): boolean;
    abstract toJD(date: CDate): number;
    abstract toJD(year: number, month: number, day: number): number;
    abstract fromJD(jd: number): CDate;
    toJSDate(date: CDate): Date;
    toJSDate(year: number, month: number, day: number): Date;
    fromJSDate(jsd: Date): CDate;
    private addInternal;
    protected gregorianFromJD(jd: number): DateParts;
    protected gregorianFromJSDate(jsd: Date): DateParts;
    protected gregorianToJD([year, month, day]: DateParts): number;
    protected gregorianToJSDate([year, month, day]: DateParts): Date;
    protected validate(error: string, date: CDate): DateParts;
    protected validate(error: string, year: number, month: number, day: number, validOptions?: ValidOptions): DateParts;
}
declare type CalendarClass = new (language: string) => BaseCalendar;
declare type CalendarsLocalisation = {
    alreadyRegistered: string;
    differentCalendars: string;
    invalidCalendar: string;
    invalidDate: string;
    invalidMonth: string;
    invalidYear: string;
};
declare class Calendars {
    static local: CalendarsLocalisation;
    private static calendars;
    private static localCals;
    static instance(name?: string, language?: string): BaseCalendar;
    static date(date?: CDate): CDate;
    static date(year: number, month: number, day: number, calendar?: (BaseCalendar | string), language?: string): CDate;
    static register(name: string, implementingClass: CalendarClass): void;
    static substituteDigits(digits: string[]): SubstituteDigits;
    static substituteChineseDigits(digits: string[], powers: string[]): SubstituteDigits;
}
export type { CalendarLocalisation, CompareResult, Period, RegionalLocalisations, SubstituteDigits };
export { BaseCalendar, CalendarError, CDate };
export default Calendars;
