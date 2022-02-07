export interface Commit {
  message: string;
  author: {
    id: number;
    name: string;
    email: string;
  }[];
}

export interface IMessage {
  id_message: number;
  commit: Commit[];
}


/* export interface IMessage {
  id_message: number;
  commit: Commit[];
  author: arrayUser[];
}

interface Commit {
  author: arrayUser;
  message: string;
}

interface arrayUser {
  id: number;
  name: string;
  email: string;
} */

