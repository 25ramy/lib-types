export interface Client {
    id?: number;
    name: string;
    lastName: string;
    age?: number;
    birthDate?: Date;
}
export interface ClientStats {
    averageAge: number;
    standardDeviation: number;
}
export interface ClientWithDeathDate extends Client {
    expectedDeathDate: Date;
}
