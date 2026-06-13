export interface IOption {
  id: number;
  label: string;
  votes: number;
}

export interface IPolData {
  pollData: {
    id: number;
    question: string;
    options: IOption[];
  };
}
