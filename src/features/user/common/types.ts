export type IUser = {
  id: number;
  imageUrl?: string;
  name: string;
  interests: string[];
  updatedAt: string;
  createdAt: string;
};

export type UpdateProfileParams = {
  image?: File | null;
  name?: string;
  interests?: string[];
};
