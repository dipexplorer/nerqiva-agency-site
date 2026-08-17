"use client";

export default function Credibility() {
  const standards = [
    { id: 1, title: "Engineering Excellence", desc: "Clean, documented, and tested code." },
    { id: 2, title: "Performance Focused", desc: "Built for speed and scalability." },
    { id: 3, title: "Design Driven", desc: "Intuitive and accessible interfaces." },
  ];

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12">Our Standards</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {standards.map((s) => (
            <div key={s.id} className="p-6 border border-border/50 rounded-lg bg-bg-primary">
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-text-secondary">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}