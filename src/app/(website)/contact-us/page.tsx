import { Card } from "@/app/components/card";
import { CONTACTCARDSECTION } from "../../../../share/data";
import ContactForm from "@/app/components/contact-us/contactForm";

export default function ContactUs() {
  return (
    <div>
      <Card card={CONTACTCARDSECTION[0]} index={0} />
      <ContactForm />
      <Card card={CONTACTCARDSECTION[1]} index={1} />
      <Card card={CONTACTCARDSECTION[2]} index={0} />
      {/* <Card card={CONTACTCARDSECTION[3]} index={1} /> */}
    </div>
  );
}
