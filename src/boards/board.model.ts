export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

// or
// export interface Board {
//     id: string;
//     title: string;
//     description: string;
//     status: boolean;
//   }
// But in this case, We should add TS code defining this boolean status means.
// like,
// if(status == true)
//     return 'PUBLIC';
// else
//     return 'PRIVATE';
