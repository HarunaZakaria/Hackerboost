export interface IOption {
  id: number;
  label: string;
  votes: number;
  maxVote: number
  onVote: any
}

export interface IPolData {
  pollData: {
    id: number;
    question: string;
    options: IOption[];
  };
}

export interface IPolls {
  polls: IPolData[];
}
export interface CardProps {
  children: string;
  className: string;
  type: string
}
