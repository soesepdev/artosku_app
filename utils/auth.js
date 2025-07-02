'use client';

export const login = (username) => {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
};

export const isAuthenticated = () => {
  return typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true";
};

export const getUsername = () => {
  return localStorage.getItem("username") || "";
};