export type AuthContextType = {
  isAuthenticated: boolean;
  profile: {
    name: string;
    email: string;
    srcAvatar: string;
    profession: string;
  };
  jwtToken: string;
  refreshToken: string;
};
