"use client";

import {
  AboutUs,
  Contacts,
  CustomersInfo,
  Footer,
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
      <Contacts />
      <Footer />
    </div>
  );
}
