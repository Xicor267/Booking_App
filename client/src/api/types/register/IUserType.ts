export interface IUserType {
  userId: string
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  password: string;
  confirmPassword: string;
}