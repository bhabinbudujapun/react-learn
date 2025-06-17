import useTokenStore from "@/store";
import type { Book } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = useTokenStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (data: { email: string; password: string }) => {
  const res = api.post("/api/users/login", data);
  return res;
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => api.post("/api/users/register", data);

export const getBooks = async () => {
  const res = await api.get<Book[]>("/api/books");
  return res;
};

export const addBook = async (data: FormData) => {
  api.post("api/books", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
