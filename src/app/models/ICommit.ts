export interface Commit {
  message: string;
  author: {
    id: number;
    name: string;
    email: string;
  }[];
}
