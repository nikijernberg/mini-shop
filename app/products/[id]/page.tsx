import { supabase } from "@/lib/supabaseClient";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { data: product, error } = await supabase
    .from("products")
    .select("id,name,price,created_at")
    .eq("id", params.id)
    .single();

  if (error || !product) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Produkt</h1>
        <p>Hittades inte.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>{product.name}</h1>
      <p>Pris: {product.price} kr</p>
      <p style={{ opacity: 0.8 }}>ID: {product.id}</p>
    </main>
  );
}
