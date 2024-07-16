"use client";
import { Modal } from "@/components/modal";
import { FaSearch } from "react-icons/fa";
import * as C from "@/styles/home/searchmodal";

export default function SearchModal() {
  return (
    <>
      <Modal ModalParams="searchmodal">
        <C.SearchModal>
          <h1>Search by keyword</h1>
          <form>
            <input type="text" placeholder="keywords" />
            <button>
              <FaSearch />
            </button>
          </form>
        </C.SearchModal>
      </Modal>
    </>
  );
}
