export interface IOption {
  id: number;
  label: string;
  votes: number;
}

export interface IPolData {
  pollData: {
    question: string;
    options: IOption[];
  };
}
