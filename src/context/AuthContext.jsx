import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  /*WRAP COMPONENET*/

  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null,
  );

  function signUp(email, password) {
    /* saving users in local storage (browser) for now*/
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    /* if user exist already */
    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already exists" };
    }

    const newUser = { email, password };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);

    setUser({ email });

    return { success: true };
  }

  function logIn(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (!user) {
      return { success: false, error: "User does not exist" };
    }

    localStorage.setItem("currentUserEmail", email);
    setUser({ email });
    return { success: true };
  }

  function logOut() {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signUp, user, logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}
