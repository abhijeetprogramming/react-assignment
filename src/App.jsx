import React, { useMemo, useState } from "react";
import {
  Phone,
  ChevronDown,
  Search,
  MapPin,
  Users,
  Clock3,
  ChevronLeft,
  ChevronRight,
  Plane,
  BriefcaseBusiness,
  Globe2,
  MapPinned,
  TreePalm,
  Backpack,
  Building2,
  Landmark,
  Palmtree,
  Star,
  Zap,
  Headset,
  RefreshCw,
  ShieldCheck,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";
import {
  holidayDeals,
  trendingTours,
  packages,
  testimonials,
  imageUrl,
} from "./data";
import "./styles/app.css";

const nav = [
  "Company",
  "Group Tours",
  "Domestic",
  "International",
  "Luxury tours",
  "VISA",
  "Giftcards & Offers",
];
const budgets = [
  { title: "Under", amount: "₹1,00,000", icon: Plane, color: "sand" },
  {
    title: "Under",
    amount: "₹1,50,000",
    icon: BriefcaseBusiness,
    color: "coral",
  },
  { title: "Under", amount: "₹1,75,000", icon: Globe2, color: "mint" },
  { title: "Under", amount: "₹2,00,000", icon: MapPinned, color: "blue" },
];
const tourTypes = [
  { title: "Wildlife Tour", icon: TreePalm },
  { title: "Adventure Tour", icon: Backpack },
  { title: "City Tours", icon: Building2 },
  { title: "Museum Tours", icon: Landmark },
  { title: "Beaches Tour", icon: Palmtree },
];
const benefits = [
  {
    title: "Instant Assistance, Anytime",
    text: "Support for pre-trip questions, itinerary updates, visa and document guidance",
    icon: Zap,
  },
  {
    title: "Real-Time Trip Adjustments",
    text: "Weather-aware planning with live updates and confirmations",
    icon: RefreshCw,
  },
  {
    title: "24/7 Customer Care",
    text: "Seamless support via WhatsApp or Call throughout the journey",
    icon: Headset,
  },
  {
    title: "Trusted by Travellers Worldwide",
    text: "High satisfaction ratings backed by millions of happy customers",
    icon: ShieldCheck,
  },
];
const awards = [
  "Best Innovation Excellence Award",
  "Customer Success Leadership Award",
  "Customer Success Leadership Award",
  "Top Digital Transformation Partner",
  "Outstanding Technology Solution Award",
  "Excellence in Software Development",
  "Enterprise Growth & Impact Award",
];
const affiliates = [
  "BILAL COACH YUTONG",
  "LOGO AIRLINES",
  "SHAHEEN EXPRESS",
  "MANTHAR GROUP",
  "HINDUSTAN EXPRESS",
  "SUPER SADA BAHAR",
  "Matyana Movers",
];

function SectionHeading({ title, subtitle, arrows = false, onPrev, onNext }) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {arrows && (
        <div className="arrows">
          <button aria-label="Previous" onClick={onPrev}>
            <ChevronLeft size={17} />
          </button>
          <button aria-label="Next" onClick={onNext}>
            <ChevronRight size={17} />
          </button>
        </div>
      )}
    </div>
  );
}
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="topbar wrap">
        <a className="brand" href="#home" aria-label="Logo Ipsum home">
          <span className="brand-mark">◉</span>
          <strong>logoipsum</strong>
        </a>
        <div className="top-actions">
          <a className="contact-button" href="tel:+918048044000">
            <Phone size={13} /> Contact Us <ChevronDown size={12} />
          </a>
          <span className="top-divider" />
          <a className="quick-button" href="#contact">
            Quick Enquire
          </a>
        </div>
        <button
          className="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <nav className={`nav-bar ${menuOpen ? "nav-open" : ""}`}>
        <div className="wrap nav-inner">
          {nav.map((item, i) => (
            <a
              key={item}
              href={
                i === 0
                  ? "#why"
                  : i === 1
                    ? "#packages"
                    : i === 2
                      ? "#popular"
                      : "#trending"
              }
            >
              {item}
              {i !== 5 && <ChevronDown size={10} />}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
function SearchPanel({ onSearch }) {
  const [region, setRegion] = useState("Domestic");
  const [destination, setDestination] = useState("");
  const [tour, setTour] = useState("");
  const [travellers, setTravellers] = useState("2 Adult - 1 Children");
  return (
    <form
      className="search-panel"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch({ region, destination, tour, travellers });
      }}
    >
      <h3>Search your Dream Holiday</h3>
      <div className="radio-row">
        <label>
          <input
            type="radio"
            checked={region === "Domestic"}
            onChange={() => setRegion("Domestic")}
          />{" "}
          Domestic
        </label>
        <label>
          <input
            type="radio"
            checked={region === "International"}
            onChange={() => setRegion("International")}
          />{" "}
          International
        </label>
      </div>
      <div className="search-fields">
        <label className="field">
          <MapPin size={14} />
          <input
            aria-label="Destination"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <label className="field">
          <Users size={14} />
          <select
            aria-label="Tour type"
            value={tour}
            onChange={(e) => setTour(e.target.value)}
          >
            <option value="">Tour Type</option>
            <option>Family Holiday</option>
            <option>Adventure</option>
            <option>Honeymoon</option>
            <option>Luxury</option>
          </select>
        </label>
        <label className="field">
          <Clock3 size={14} />
          <select
            aria-label="Travellers"
            value={travellers}
            onChange={(e) => setTravellers(e.target.value)}
          >
            <option>2 Adult - 1 Children</option>
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>2 Adults - 2 Children</option>
            <option>Group of 5+</option>
          </select>
        </label>
        <button className="search-button" type="submit">
          Search <Search size={13} />
        </button>
      </div>
    </form>
  );
}
function DealCard({ item }) {
  const [saved, setSaved] = useState(false);
  const id = item.image;
  return (
    <article className="deal-card">
      <div className="deal-image">
        <img src={imageUrl(id, 600)} alt={item.title} />
        {item.badge && <span className="deal-badge">{item.badge}</span>}
      </div>
      <div className="deal-content">
        <h3>{item.title}</h3>
        <p>{item.days}</p>
        <div className="price-line">
          <strong>{item.price}</strong>
          <del>{item.old}</del>
          <button
            aria-label={saved ? "Remove saved holiday" : "Save holiday"}
            className={`save-button ${saved ? "saved" : ""}`}
            onClick={() => setSaved(!saved)}
          >
            {saved ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}
function BudgetCards() {
  return (
    <div className="budget-grid">
      {budgets.map(({ title, amount, icon: Icon, color }) => (
        <a className={`budget-card ${color}`} href="#popular" key={amount}>
          <Icon size={43} strokeWidth={1.5} />
          <span>{title}</span>
          <strong>{amount}</strong>
        </a>
      ))}
    </div>
  );
}
function WhyChoose() {
  return (
    <section className="why-section" id="why">
      <div className="wrap why-grid">
        <div className="why-copy">
          <span className="eyebrow">OUR PROMISE</span>
          <h2>Why choose us</h2>
          <p>
            As our very name suggests – means “Standards”. Our team is dedicated
            to ensure all customers receive the best of customer service. We
            provide customer support at all stages of our customer’s journey –
            before, during and after.
          </p>
          <p>
            We cater to all segments of travel like Group Tours, Corporate
            travel, Luxury Travel, Leisure Travel, Inbound holidays, Customized
            Holidays, MICE and also specialty tours like Couple’s Only Holidays,
            Women’s Special, Senior Citizen Packages and many more. We offer
            travel packages around the globe, which are tailor made as per
            customer preferences.
          </p>
          <div className="stats-grid">
            <div>
              <span className="stat-icon cyan">✈</span>
              <div>
                <strong>60K+</strong>
                <small>Happy Traveler</small>
              </div>
            </div>
            <div>
              <span className="stat-icon yellow">🏆</span>
              <div>
                <strong>60K+</strong>
                <small>Tours Success</small>
              </div>
            </div>
            <div>
              <span className="stat-icon green">♧</span>
              <div>
                <strong>60%</strong>
                <small>Positives Review</small>
              </div>
            </div>
            <div>
              <span className="stat-icon pink">◎</span>
              <div>
                <strong>60+</strong>
                <small>Travel Guide</small>
              </div>
            </div>
          </div>
        </div>
        <div className="why-visual">
          <img
            className="main-traveller"
            src={imageUrl("photo-1530789253388-582c481c54b0", 900)}
            alt="Traveller enjoying a scenic holiday"
          />
          <img
            className="round-photo"
            src={imageUrl("photo-1476514525535-07fb3b4ae5f1", 350)}
            alt="Mountain lake"
          />
          <img
            className="sunset-photo"
            src={imageUrl("photo-1500534623283-312aade485b7", 350)}
            alt="Sunset travel view"
          />
          <span className="vertical-label">Our Company</span>
        </div>
      </div>
      <div className="wrap affiliate-wrap">
        <h2>Our Affiliations</h2>
        <div className="affiliate-logos">
          {affiliates.map((a, i) => (
            <div className={`affiliate affiliate-${i}`} key={a}>
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function AwardsPanel() {
  return (
    <section className="awards-panel wrap">
      <h2>Awards &amp; Achievements</h2>
      <div className="awards-row">
        {awards.map((a, i) => (
          <div className="award" key={a + i}>
            <span className={`trophy trophy-${i}`}>
              {["🏅", "🏆", "🏆", "🏆", "👑", "🏆", "🏅"][i]}
            </span>
            <p>{a}</p>
          </div>
        ))}
      </div>
      <div className="benefits-grid">
        {benefits.map(({ title, text, icon: Icon }) => (
          <div className="benefit" key={title}>
            <span>
              <Icon size={18} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
        <div className="globe-art" aria-label="Illustration of the world">
          🌎<span>✈</span>
        </div>
      </div>
    </section>
  );
}
function HorizontalCards({ items, kind = "trending", offset = 0 }) {
  const shown = useMemo(
    () => items.map((_, i) => items[(i + offset) % items.length]),
    [items, offset],
  );
  return (
    <div className={`horizontal-cards ${kind}`}>
      {shown.map((item, i) => (
        <article className="trend-card" key={item.title}>
          <img src={imageUrl(item.image, 600)} alt={item.title} />
          <div className="trend-overlay">
            <h3>{item.title}</h3>
            {kind === "trending" ? (
              <p>from {item.price}</p>
            ) : (
              <>
                <small>{item.place}</small>
                <strong>{item.price}</strong>
                <span>{item.nights}</span>
                <a href="#contact">
                  View More <ArrowRight size={12} />
                </a>
              </>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
function TrendingSection() {
  const [offset, setOffset] = useState(0);
  return (
    <section className="wrap content-section" id="trending">
      <SectionHeading
        title="Trending Tours"
        arrows
        onPrev={() =>
          setOffset((offset + trendingTours.length - 1) % trendingTours.length)
        }
        onNext={() => setOffset((offset + 1) % trendingTours.length)}
      />
      <HorizontalCards items={trendingTours} offset={offset} />
    </section>
  );
}
function TourTypes() {
  const [active, setActive] = useState("");
  return (
    <section className="wrap content-section tour-types">
      <SectionHeading
        title="Choose Tour Types"
        subtitle="These popular destinations have a lot to offer"
        arrows
        onPrev={() => setActive("")}
        onNext={() =>
          setActive(
            tourTypes[
              (tourTypes.findIndex((t) => t.title === active) + 1) %
                tourTypes.length
            ].title,
          )
        }
      />
      <div className="type-grid">
        {tourTypes.map(({ title, icon: Icon }) => (
          <button
            className={active === title ? "active" : ""}
            key={title}
            onClick={() => setActive(active === title ? "" : title)}
          >
            <Icon size={31} strokeWidth={1.35} />
            <span>{title}</span>
          </button>
        ))}
      </div>
      {active && (
        <p className="selection-note">
          Explore our curated <strong>{active}</strong> experiences in Popular
          Packages below.
        </p>
      )}
    </section>
  );
}
function PopularPackages() {
  const [region, setRegion] = useState("Domestic");
  const [offset, setOffset] = useState(0);
  const list =
    region === "Domestic" 
      ? packages
      : [packages[4], packages[1], packages[0], packages[3], packages[2]];
  return (
    <section className="popular-section" id="popular">
      <div className="wrap">
        <h2>Popular Packages</h2>
        <div className="package-tabs">
          <button
            className={region === "Domestic" ? "active" : ""}
            onClick={() => setRegion("Domestic")}
          >
            Domestic
          </button>
          <button
            className={region === "International" ? "active" : ""}
            onClick={() => setRegion("International")}
          >
            International
          </button>
        </div>
        <div className="package-carousel">
          <HorizontalCards items={list} kind="package" offset={offset} />
          <button
            className="package-next"
            aria-label="Next packages"
            onClick={() => setOffset((offset + 1) % list.length)}
          >
            <ChevronRight />
          </button>
        </div>
        <a className="view-all" href="#contact">
          View All ↗
        </a>
      </div>
    </section>
  );
}
function Testimonials() {
  const [active, setActive] = useState(1);
  return (
    <section className="testimonials-section">
      <div className="wrap">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`testimonial ${active === i ? "featured" : ""}`}
            >
              <div className="testimonial-person">
                <img src={imageUrl(t.image, 120)} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <small>Traveller</small>
                </div>
                <span className="stars">★★★★★</span>
              </div>
              <p>“{t.quote}”</p>
              <span className="quote-mark">99</span>
            </article>
          ))}
        </div>
        <div className="dots">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              className={active === i ? "active" : ""}
              aria-label={`Show ${t.name} testimonial`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <div className="help-banner" id="contact">
          <div>
            <small>Need Help?</small>
            <h3>Stuck Planning Your Trip?</h3>
            <p>
              We've got it covered. Our travel experts design it all for you.
            </p>
            <a href="mailto:enquiry@company.com">Get Started</a>
          </div>
          <div className="banner-art" aria-hidden="true">
            <span>✦</span>
            <i>〰</i>
            <b>♟</b>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <span className="brand-mark">◉</span>
            <strong>logoipsum</strong>
          </a>
          <p>
            Explore the worlds most breathtaking destinations with our curated
            travel packages
          </p>
          <div className="socials">
            <a href="#contact" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#contact" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#contact" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="#contact" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          {[
            "Home",
            "About Us",
            "Careers",
            "Testimonials",
            "Blogs",
            "FAQ’s",
          ].map((x) => (
            <a key={x} href={x === "Home" ? "#home" : "#why"}>
              › &nbsp;{x}
            </a>
          ))}
        </div>
        <div>
          <h3>Packages</h3>
          {[
            "Group Tours",
            "Domestic",
            "International",
            "Luxury Tours",
            "Our Special",
            "MICE",
          ].map((x) => (
            <a key={x} href="#popular">
              › &nbsp;{x}
            </a>
          ))}
        </div>
        <div className="contact-col">
          <h3>Get In Touch</h3>
          <p>
            <span>☎</span> +91 8040 844 000
          </p>
          <p>
            <span>✉</span> enquiry@company.com
          </p>
          <p>
            <span>⌖</span> 1st Floor, 129, 1st Main Rd, Indiranagar, Domlur,
            Bengaluru, Karnataka 560071
          </p>
        </div>
      </div>
      <div className="copyright">
        Company Copyright 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
export default function App() {
  const [notice, setNotice] = useState("");
  const handleSearch = ({ region, destination, tour, travellers }) =>
    setNotice(
      `${region} holidays${destination ? ` to ${destination}` : ""}${tour ? ` · ${tour}` : ""} · ${travellers}`,
    );
  return (
    <div id="home">
      <Header />
      <main>
        <section className="hero">
          <img
            className="hero-image"
            src={imageUrl("photo-1470770841072-f978cf4d019e", 1800)}
            alt="Majestic mountain lake surrounded by forest"
          />
          <div className="hero-shade" />
          <div className="hero-copy">
            <h1>Travel Beyond Ordinary. Travel Benchmark</h1>
            <p>
              Explore the worlds most breathtaking destinations with our curated
              travel packages
            </p> 
          </div>
          <SearchPanel onSearch={handleSearch} />
        </section>
        <section className="holiday-section wrap">
          <SectionHeading
            title="Christmas & New Year Holidays"
            subtitle="Festive spirit to winter wonderlands, a breathtaking season awaits!"
            arrows
            onPrev={() => {}}
            onNext={() => {}}
          />
          {notice && (
            <p className="search-notice">
              <Search size={14} /> Showing ideas for: {notice}
            </p>
          )}
          <div className="deal-grid">
            {holidayDeals.map((item, i) => (
              <DealCard item={item} key={item.title} />
            ))}
          </div>
        </section>
        <section className="wrap budget-section">
          <h2>Packages we provide</h2>
          <BudgetCards />
        </section>
        <WhyChoose />
        <AwardsPanel />
        <TrendingSection />
        <TourTypes />
        <PopularPackages />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
