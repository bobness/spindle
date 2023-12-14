export interface DataVector {
  key: string;
  values: any[];
}

export interface NumericVector extends DataVector {
  values: number[];
}

export interface StringVector extends DataVector {
  values: string[];
}
