import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is the about page",
  openGraph: {
    title: "Cantact Page",
    description: "This is the about page",
    images:
      "https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg",
  },
};

export default function About() {
  return (
    <main className="h-screen grid place-content-center">
      <h2 className="text-4xl text-center">About</h2>
      <p className="text-2xl text-center">About page</p>
    </main>
  );
}
