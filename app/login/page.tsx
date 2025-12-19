"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    router.push("/dashboard");
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Login</h1>
      <p>Mock-inlogg (localStorage) så vi får ett “inloggat läge”.</p>
      <button onClick={handleLogin}>Logga in</button>
    </main>
  );
}
