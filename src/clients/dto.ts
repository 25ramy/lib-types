export interface CreateClientDto {
  name: string;
  lastName: string;
  age?: number;
  birthDate?: string;
}

export interface ClientDto {
  id: number;
  name: string;
  lastName: string;
  age: number;
  birthDate: Date;
}

export interface ClientStatsDto {
  averageAge: number;
  standardDeviation: number;
}

export interface ClientWithDeathDateDto extends ClientDto {
  expectedDeathDate: Date;
}
