const steps = [
  {
    title: "1. Call or Send Photos",
    body: "Reach out by phone or send photos of the tree, stump or damage. We’ll ask a few quick questions about access, power lines and structures."
  },
  {
    title: "2. Free On-Site Estimate",
    body: "We visit your property in High Point or the surrounding area, walk the job with you and provide a clear, written estimate before any work begins."
  },
  {
    title: "3. Safe, Clean Job Completion",
    body: "Our crew removes or trims your trees safely, hauls off debris or chips it on site and leaves your yard raked, blown and ready to enjoy again."
  }
];

export function ProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-page space-y-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
            A Simple, Stress-Free Tree Service Process
          </h2>
          <p className="text-slate-600">
            Tree problems are stressful. Working with us isn&apos;t. Our
            step-by-step process keeps you informed and your property protected
            from the first call to final cleanup.
          </p>
        </div>

        <ol className="grid sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <li
              key={step.title}
              className="rounded-2xl bg-slate-50 border border-slate-100 p-5"
            >
              <h3 className="font-semibold text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

