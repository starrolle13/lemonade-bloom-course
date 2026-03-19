// Lemonade Bloom — Services Upsell Section
// Design: Warm Retro Zine — premium card layout with CTA

const SERVICES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/services-banner-YQ6bpjJSVSftb65utHFJAW.webp";

const services = [
  {
    icon: "🔍",
    title: "Product Research Service",
    price: "$100",
    unit: "5 products",
    description: "Let our team find your next winning products. We research, analyze, and deliver 5 vetted products ready to list on Walmart.",
    features: [
      "5 researched & verified products",
      "Product name, source, cost & profit",
      "Buy box opportunity analysis",
      "Delivered within 48 hours",
    ],
    highlight: true,
    cta: "Get Product Research",
  },
  {
    icon: "🌐",
    title: "Business Website Service",
    price: "$50–$150",
    unit: "one-time",
    description: "A professional business website is required for your Walmart Seller application. We build clean, professional sites that meet Walmart's requirements.",
    features: [
      "Domain setup included",
      "Professional branded design",
      "Contact page & business info",
      "Meets Walmart requirements",
      "Delivered in 3–5 business days",
    ],
    highlight: false,
    cta: "Get Your Website",
  },
  {
    icon: "💼",
    title: "Account Management",
    price: "Custom",
    unit: "pricing",
    description: "Want us to run your Walmart store for you? Our full account management service handles everything from listings to fulfillment coordination.",
    features: [
      "Product research & listing",
      "Order processing oversight",
      "Customer service handling",
      "Performance monitoring",
      "Monthly reporting",
    ],
    highlight: false,
    cta: "Learn More",
  },
];

export default function ServicesSection() {
  return (
    <div className="py-12 px-4" style={{ background: '#FEE9CE' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="lb-tag mb-3 mx-auto inline-flex">Lemonade Bloom Services</div>
          <h2 className="font-pacifico text-[#D0804A] text-3xl lg:text-4xl mb-3">
            Let Us Help You Grow Faster
          </h2>
          <p className="text-[#4a3f38] font-nunito max-w-xl mx-auto leading-relaxed">
            Skip the guesswork. Our team has done this before — let us handle the heavy lifting
            so you can focus on scaling your Walmart store.
          </p>
        </div>

        {/* Services Banner Image */}
        <div className="mb-10 rounded-2xl overflow-hidden">
          <img
            src={SERVICES_IMG}
            alt="Lemonade Bloom Services"
            className="w-full object-cover"
            style={{ maxHeight: '280px' }}
          />
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`lb-card p-6 flex flex-col ${service.highlight ? 'ring-2 ring-[#D0804A]' : ''}`}
              style={service.highlight ? { background: 'linear-gradient(135deg, #FFF5EE, white)' } : {}}
            >
              {service.highlight && (
                <div className="lb-tag mb-3 self-start" style={{ background: '#D0804A', color: 'white' }}>
                  ⭐ Most Popular
                </div>
              )}

              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-nunito font-900 text-[#1A1A1A] text-lg mb-1">{service.title}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-pacifico text-[#D0804A] text-2xl">{service.price}</span>
                <span className="text-sm text-[#6b5a4e] font-nunito">/ {service.unit}</span>
              </div>

              <p className="text-sm text-[#4a3f38] font-nunito leading-relaxed mb-4 flex-1">
                {service.description}
              </p>

              <ul className="space-y-2 mb-5">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm font-nunito text-[#4a3f38]">
                    <span className="text-[#D0804A] font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`lb-btn-${service.highlight ? 'primary' : 'secondary'} w-full justify-center`}>
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
