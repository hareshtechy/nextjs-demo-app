import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
function ProductPage({ params: { slug }, searchParams: { sortOrder } }: Props) {
  return (
    <div>
      <h1>
        Product {slug} {sortOrder}
      </h1>
    </div>
  );
}

export default ProductPage;
