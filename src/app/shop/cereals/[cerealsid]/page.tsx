import { notFound } from "next/navigation";
import { ShopList } from "@/mocks/ShopList";
import Link from "next/link";
import Image from "next/image";
import * as C from "@/styles/pages/shop";

export function generateStaticParams() {
  const productsList = ShopList;

  const params = productsList.category.cereals.map((item) => ({
    cerealsid: item.id.toString(),
  }));

  return [params];
}

export default function Details({ params }: { params: { cerealsid: string } }) {
  const { cerealsid } = params;
  const shopBreads = ShopList;
  const selectedBread = shopBreads.category.cereals.filter(
    (item) => item.id.toString() === cerealsid
  )[0];

  const shopItemNotFound =
    Number(cerealsid) > shopBreads.category.cereals.length;

  if (shopItemNotFound) {
    notFound();
  } else if (!/^\d+$/.test(cerealsid)) {
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
            <Link href="/shop/cereals">To go back</Link>
          </button>
        </div>
      </figcaption>
    </C.ShopDetails>
  );
}
