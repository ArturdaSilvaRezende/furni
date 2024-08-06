import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ShopList } from "@/mocks/shoplist";
import * as C from "@/styles/pages/shop";

export function generateStaticParams() {
  const productsList = ShopList;

  const params = productsList.category.breads.map((item) => ({
    breadsid: item.id.toString(),
  }));

  return [params];
}

export default function Details({ params }: { params: { breadsid: string } }) {
  const { breadsid } = params;
  const shopBreads = ShopList;
  const selectedBread = shopBreads.category.breads.filter(
    (item) => item.id.toString() === breadsid
  )[0];
  const shopItemNotFound = Number(breadsid) > shopBreads.category.breads.length;

  if (shopItemNotFound) {
    notFound();
  } else if (!/^\d+$/.test(breadsid)) {
    notFound();
  }

  return (
    <>
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
            <span>Ingredients: </span>
            <span>
              The generated Lorem Ipsum is therefore always free from repetition
              injected humour, or non-characteristic words etc.
            </span>
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
              <Link href="/shop/breads">To go back</Link>
            </button>
          </div>
        </figcaption>
      </C.ShopDetails>
    </>
  );
}
