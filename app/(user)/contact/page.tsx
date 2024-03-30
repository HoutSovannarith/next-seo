import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is the contact page",
  openGraph: {
    title: "Cantact Page",
    description: "This is the contact page",
    images:
      "https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1711756800&semt=ais",
  },
};

export default function Contact() {
  return (
    <main className="h-screen grid place-content-center">
      <h2 className="text-4xl text-center">Contact</h2>
      <p className="text-2xl text-center">Contact page</p>
    </main>
  );
}
