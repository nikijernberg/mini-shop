"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    if (!loggedIn) {
      router.replace("/login");
      return;
    }
    setReady(true);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    router.replace("/login");
  };

  if (!ready) return null;

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <p>Du är “inloggad” (mock).</p>
      <button onClick={handleLogout}>Logga ut</button>
    </main>
  );
}
