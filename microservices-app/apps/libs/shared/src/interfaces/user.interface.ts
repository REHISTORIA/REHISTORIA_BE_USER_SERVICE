export interface IUser {
  id: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}
