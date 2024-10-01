"use client";
import { useRef } from "react";
import UseCounterUp from "@/hooks/UseCounterUp";
import { FaUsers } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { GiFruitBowl } from "react-icons/gi";

export default function CounterContainer() {
  const refs = {
    custumersRef: useRef<HTMLParagraphElement>(null),
    qualityServiceRef: useRef<HTMLParagraphElement>(null),
    qualityCertificateRef: useRef<HTMLParagraphElement>(null),
    productsRef: useRef<HTMLParagraphElement>(null),
  };

  const counts = {
    custumersCount: UseCounterUp(refs.custumersRef, 1963),
    qualityServiceCount: UseCounterUp(refs.qualityServiceRef, 99),
    qualityCertificateCount: UseCounterUp(refs.qualityCertificateRef, 33),
    productsCount: UseCounterUp(refs.productsRef, 789),
  };

  return (
    <div className="counter__container">
      <div className="counter__box">
        <span>
          <FaUsers />
        </span>
        <h2>SATISFIED CUSTOMERS</h2>
        <p ref={refs.custumersRef}>{counts.custumersCount}</p>
      </div>

      <div className="counter__box">
        <span>
          <FaGears />
        </span>
        <h2>QUALITY OF SERVICE</h2>
        <p ref={refs.qualityServiceRef}>{counts.qualityServiceCount}%</p>
      </div>

      <div className="counter__box">
        <span>
          <PiCertificateFill />
        </span>
        <h2>QUALITY CERTIFICATES</h2>
        <p ref={refs.qualityCertificateRef}>{counts.qualityCertificateCount}</p>
      </div>

      <div className="counter__box">
        <span>
          <GiFruitBowl />
        </span>
        <h2>AVAILABLE PRODUCTS</h2>
        <p ref={refs.productsRef}>{counts.productsCount}</p>
      </div>
    </div>
  );
}
