import { Suspense } from "react";
import Breadcrumb from "@/components/breadcrumb";
import ShopNavigation from "@/components/pages/shop/shopnavigation";
import BtnBackToTop from "@/components/features/btnbacktotop";
import Loading from "./loading";
import * as C from "@/styles/pages/shop";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <C.Shop>
      <Breadcrumb page="Shop" title="Shop" />
      <div className="shop__container">
        <div className="shop__title">
          <h1>Fresh Fruits Shop</h1>
        </div>
        <section className="shop__contents">
          <ShopNavigation />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <BtnBackToTop />
        </section>
      </div>
    </C.Shop>
  );
}
