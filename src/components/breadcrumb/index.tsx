import Link from "next/link";
import * as C from "@/styles/breadcrumb";

interface Page {
  page: string;
  title: string;
}

export default function Breadcrumb({ page, title }: Page) {
  return (
    <C.Breadcrumb>
      <h2>{title}</h2>
      <p>
        <span>
          <Link href="/">Home </Link>
        </span>
        / <span>{page}</span>
      </p>
    </C.Breadcrumb>
  );
}
