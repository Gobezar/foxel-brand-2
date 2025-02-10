"use client";

import {
  AboutUs,
  CustomersInfo,
  FrequentQuestions,
  Popular,
  Reviews,
} from "@/widgets";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <AboutUs />
      <Popular />
      <CustomersInfo />
      <FrequentQuestions />
      <Reviews />
    </div>
  );
}
