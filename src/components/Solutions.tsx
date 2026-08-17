"use client";

export default function Solutions() {
  const solutions = [
    { id: "web", title: "Digital Presence", desc: "Websites engineered for trust and conversion." },
    { id: "products", title: "Digital Products", desc: "Custom web applications built for real usage." },
    { id: "ai", title: "AI Integration", desc: "Adding intelligence to your workflows." },
    { id: "data", title: "Data Systems", desc: "Infrastructure for actionable insights." },
  ];

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12">Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <div key={s.id} className="p-6 border border-border/50 rounded-lg bg-bg-primary hover:border-accent transition-colors">
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}