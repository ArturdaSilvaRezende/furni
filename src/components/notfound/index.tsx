"use client";
import { useRouter } from "next/navigation";
import { BsExclamationTriangle } from "react-icons/bs";
import * as C from "@/styles/notfound";

export default function NotFoundComponent() {
  const router = useRouter();

  return (
    <C.NotFound>
      <div className="notfound__container">
        <p>
          <BsExclamationTriangle />
        </p>
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>
          We’re sorry, the page you have looked for does not exist in our
          website! Maybe go to our home page or try to use a search?
        </p>
        <button
          onClick={() => {
            router.back();
          }}
        >
          Go Back
        </button>
      </div>
    </C.NotFound>
  );
}
