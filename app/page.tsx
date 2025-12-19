"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const products = [
  { id: 1, name: "Proteinbar", price: 29 },
  { id: 2, name: "Kaffemugg", price: 129 },
  { id: 3, name: "T-shirt", price: 249 },
];

export default function HomePage() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  const goToAccount = () => {
    router.push(loggedIn ? "/dashboard" : "/login");
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Mini Shop</h1>
      <p>En enkel startsida med produkter.</p>

      <button onClick={goToAccount} style={{ marginBottom: 16 }}>
        {loggedIn ? "Gå till Dashboard" : "Logga in"}
      </button>

      <ul style={{ display: "grid", gap: 12, padding: 0, listStyle: "none" }}>
        {products.map((p) => (
          <li
            key={p.id}
            style={{ border: "1px solid #333", padding: 12, borderRadius: 8 }}
          >
            <strong>{p.name}</strong>
            <div>{p.price} kr</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
