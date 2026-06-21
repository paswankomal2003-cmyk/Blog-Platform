import { useState } from "react";

function FAQSection() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What is BlogSphere?",
      answer:
        "BlogSphere is a modern blogging platform where users can create, edit, publish, and manage blog posts while interacting through comments.",
    },
    {
      question: "Do I need an account to create blogs?",
      answer:
        "Yes. Users must register and login to create, edit, or delete blog posts.",
    },
    {
      question: "Can I edit my blog after publishing?",
      answer:
        "Absolutely. You can update, edit, or delete your blog anytime from your dashboard.",
    },
    {
      question: "Can readers comment on my blogs?",
      answer:
        "Yes. Every published blog includes a comment section for user interaction and feedback.",
    },
    {
      question: "Is BlogSphere mobile responsive?",
      answer:
        "Yes. The platform is fully responsive and works smoothly across mobile, tablet, and desktop devices.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-indigo-600 font-semibold mb-2">
          Frequently Asked Questions
        </p>

        <h2 className="text-4xl font-bold mb-4">
          Everything You Need To Know
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto">
          Find answers to common questions about BlogSphere and how the platform works.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow border border-slate-100 overflow-hidden"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <span className="font-semibold text-lg">
                {faq.question}
              </span>

              <span className="text-2xl text-indigo-600">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-slate-600 leading-7">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;