import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-gray-400 mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Frequently Asked <br /> Questions
          </h2>
        </div>

        {/* RIGHT */}
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-gray-200 py-4"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="text-gray-500 text-sm leading-relaxed pt-3">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "What makes BigIdeasDB different from other tools?",
    answer:
      "BigIdeasDB focuses on real-world demand signals instead of vanity metrics, helping you validate ideas faster.",
  },
  {
    question: "How much time will BigIdeasDB save me?",
    answer:
      "Most users save weeks of research by accessing ready-to-use market insights.",
  },
  {
    question: "Is this only for experienced developers?",
    answer:
      "No. BigIdeasDB is designed for founders, indie hackers, and non-technical builders.",
  },
  {
    question: "What's included in my membership?",
    answer:
      "Access to idea database, validation metrics, trend tracking, and updates.",
  },
  {
    question: "How often is the data updated?",
    answer: "Data is refreshed regularly to ensure accuracy.",
  },
  {
    question: "What if I need help or have questions?",
    answer: "We offer email support and clear documentation.",
  },
  {
    question: "Do I need to know how to code to use this?",
    answer: "No coding knowledge is required.",
  },
];
