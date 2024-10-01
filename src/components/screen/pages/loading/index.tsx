import Image from "next/image";
import Loading from "/public/assets/images/loading.gif";
import * as C from "@/styles/pages/loading";

export default function LoadingComponent() {
  return (
    <C.Loading>
      <Image src={Loading} alt="Loading Gif" width={300} height={300} />
    </C.Loading>
  );
}
