import { notFound } from "next/navigation";
import { ShopList } from "@/mocks/shoplist";
import Link from "next/link";
import Image from "next/image";
import * as C from "@/styles/pages/shop";

export function generateStaticParams() {
  const productsList = ShopList;

  const params = productsList.category.fruits.map((item) => ({
    fruitsid: item.id.toString(),
  }));

  return [params];
}

export default function Details({ params }: { params: { fruitsid: string } }) {
  const { fruitsid } = params;
  const shopBreads = ShopList;
  const selectedBread = shopBreads.category.fruits.filter(
    (item) => item.id.toString() === fruitsid
  )[0];

  const shopItemNotFound = Number(fruitsid) > shopBreads.category.fruits.length;

  if (shopItemNotFound) {
    notFound();
  } else if (!/^\d+$/.test(fruitsid)) {
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
            <Link href="/shop/fruits">To go back</Link>
          </button>
        </div>
      </figcaption>
    </C.ShopDetails>
  );
}
