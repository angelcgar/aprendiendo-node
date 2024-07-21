export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() /**
   * 01 - Dependency Injection
   */ {}

  execute({ base, limit = 10 }: CreateTableOptions): string {
    let outputMessage = "";

    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} * ${i} = ${base * i}`;

      if (i < limit) outputMessage += "\n";
    }

    return outputMessage;
  }
}
