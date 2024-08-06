import { notFound } from "next/navigation";
import { ShopList } from "@/mocks/shoplist";
import Link from "next/link";
import Image from "next/image";
import * as C from "@/styles/pages/shop";

export function generateStaticParams() {
  const productsList = ShopList;

  const params = productsList.category.vegetables.map((item) => ({
    vegetablesid: item.id.toString(),
  }));

  return [params];
}

export default function Details({
  params,
}: {
  params: { vegetablesid: string };
}) {
  const { vegetablesid } = params;
  const shopBreads = ShopList;
  const selectedBread = shopBreads.category.vegetables.filter(
    (item) => item.id.toString() === vegetablesid
  )[0];

  const shopItemNotFound =
    Number(vegetablesid) > shopBreads.category.vegetables.length;

  if (shopItemNotFound) {
    notFound();
  } else if (!/^\d+$/.test(vegetablesid)) {
    notFound();
  }

  return (
    <C.ShopDetails key={selectedBread.id}>
      <Image
        src={selectedBread.image}
        alt={selectedBread.name}
        width={300}
        height={300}
      />
      <figcaption>
        <p>
          <span>Product: </span>
          <span>{selectedBread.name}</span>
        </p>
        <p>
          <span>Category: </span>
          <span>{selectedBread.category}</span>
        </p>
        <p>
          <span>Price: </span>
          <span>{selectedBread.price}$</span>
        </p>
        <p>
          <span>About: </span>
          <span>
            Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock
            flounder; chain pickerel hatchetfish, pencilfish snailfish.
          </span>
        </p>
        <div className="details__buttons">
          <button>
            <Link href="/shop/vegetables">To go back</Link>
          </button>
        </div>
      </figcaption>
    </C.ShopDetails>
  );
}
