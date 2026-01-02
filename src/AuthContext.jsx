import { createContext, useContext, useState } from "react";
import * as authService from "./services/auth-service"
const API = "https://fsa-jwt-practice.herokuapp.com";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [location, setLocation] = useState("GATE");

async function signUp (){
  const response= await authService.signUp()
  const token= response.token
  setToken(token);
  setLocation("TABLET")
}  // TODO: signup

async function authenticate (){
  const reponse= await authService.authenticate(token)
  setLocation("TUNNEL")
}

  const value = { location, signUp, authenticate };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
