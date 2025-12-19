"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  return (
    <header style={{ padding: 16, borderBottom: "1px solid #333" }}>
      <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
        <Link href="/products">Products</Link>
        <span style={{ marginLeft: "auto", opacity: 0.8 }}>
          Status: {loggedIn ? "Inloggad" : "Utloggad"}
        </span>
      </nav>
    </header>
  );
}
