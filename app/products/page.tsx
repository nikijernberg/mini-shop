import { supabase } from "@/lib/supabaseClient";

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("id,name,price")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Products</h1>
        <p>Fel: {error.message}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Products</h1>

      <ul style={{ display: "grid", gap: 12, padding: 0, listStyle: "none" }}>
        {products?.map((p) => (
          <li key={p.id} style={{ border: "1px solid #333", padding: 12, borderRadius: 8 }}>
            <strong>{p.name}</strong>
            <div>{p.price} kr</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
