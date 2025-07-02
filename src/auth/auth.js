export const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

export const login = (email) => {
  localStorage.setItem("user", JSON.stringify({ email }));
};

export const logout = () => {
  localStorage.removeItem("user");
};