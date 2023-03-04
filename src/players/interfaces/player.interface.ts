export interface PlayerInterface {
  readonly _id: string;
  readonly phoneNumber: string;
  readonly email: string;
  name: string;
  ranking: string;
  position: number;
  urlPhotoPlayer?: string;
}
