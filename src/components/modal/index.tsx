"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
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
  const router = useRouter();

  const handleOverflow = () => {
    document.body.style.overflowY = "auto";
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflowY = "hidden";
    }

    return () => handleOverflow();
  }, [modal]);

  return (
    <>
      {modal && (
        <C.Modal className="fadeIn">
          <div className="modal__container">
            {children}

            <button
              type="button"
              onClick={() => {
                router.back();
              }}
              className="modal__close"
            >
              <IoMdClose />
            </button>
          </div>
        </C.Modal>
      )}
    </>
  );
}
