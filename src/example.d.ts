export declare abstract class AbsPerson {
    name: string;
    constructor(name: string);
    abstract getSalary(value: number): number;
    getName(): string;
}
export declare class JSPerson extends AbsPerson {
    getSalary(value: number): number;
}
export declare class JavaPerson extends AbsPerson {
    getSalary(value: number): number;
}
