"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import * as C from "@/styles/modal";
import "@/styles/animations.css";

export function Modal({
  children,
  ModalParams,
}: {
  children: React.ReactNode;
  ModalParams: string;
}) {
  const searchParams = useSearchParams();
  const modal = searchParams.get(ModalParams);
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <C.Modal className="fadeIn">
          <div className="modal__container">
            {children}

            <Link href={pathname} className="modal__close">
              <button type="button">
                <IoMdClose />
              </button>
            </Link>
          </div>
        </C.Modal>
      )}
    </>
  );
}
