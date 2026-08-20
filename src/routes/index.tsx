import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, ShieldCheck, Scale, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const WHATSAPP = "https://wa.link/rso0eo";
const LOGO = "https://i.postimg.cc/CK63W8TT/Design-sem-nome.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jéssica Rodrigues Advocacia | Advocacia Previdenciária INSS" },
      {
        name: "description",
        content:
          "Advocacia previdenciária com mais de 10 anos de atuação em benefícios do INSS: auxílio-doença, aposentadoria e BPC/LOAS. Atendimento em todo o Brasil.",
      },
      { property: "og:title", content: "Jéssica Rodrigues Advocacia | Previdenciário INSS" },
      {
        property: "og:description",
        content:
          "Benefício negado pelo INSS não significa fim. Orientação previdenciária para todo o Brasil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: LOGO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: LOGO },
    ],
  }),
  component: Index,
});

function GoldButton({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-gold)] font-sans font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-500 hover:brightness-110 hover:tracking-[0.22em] active:scale-[0.98] ${
        size === "lg" ? "px-8 py-4 text-[0.78rem]" : "px-7 py-3.5 text-[0.72rem]"
      }`}
    >
      {children}
    </a>
  );
}

const services = [
  {
    icon: HeartPulse,
    title: "Auxílio-doença",
    text: "Orientação e acompanhamento para quem está temporariamente impossibilitado de trabalhar e precisa buscar seu benefício junto ao INSS.",
  },
  {
    icon: Scale,
    title: "Aposentadoria",
    text: "Análise previdenciária e acompanhamento para buscar a aposentadoria adequada a cada situação.",
  },
  {
    icon: ShieldCheck,
    title: "BPC / LOAS",
    text: "Atuação em pedidos e negativas do Benefício de Prestação Continuada para quem preenche os requisitos legais.",
  },
];

const links = [
  { icon: MessageCircle, label: "WhatsApp", text: "Fale diretamente pelo WhatsApp", href: WHATSAPP },
  {
    icon: Instagram,
    label: "Instagram",
    text: "Acompanhe no Instagram",
    href: "https://www.instagram.com/jessicaprevidenciaria?igsh=Mjl4a2lrNzY5d2N6",
  },
  {
    icon: Facebook,
    label: "Facebook",
    text: "Acompanhe no Facebook",
    href: "https://www.facebook.com/share/1FTC8UzDFL/?mibextid=wwXIfr",
  },
  {
    icon: MapPin,
    label: "Endereço",
    text: "Ver localização do escritório",
    href: "https://www.google.com/maps/place/J%C3%A9ssica+Rodrigues+Advocacia+%7C+Advocacia+Previdenci%C3%A1ria+-+R.+Joaquim+Carlos+dos+Santos,+492+-+Constantino,+Patroc%C3%ADnio+-+MG,+38747-036/@-18.9403667,-46.9878721,16z/data=!4m6!3m5!1s0x94afbbbbaf77465d:0x5b73854047dd4a2e!8m2!3d-18.9403667!4d-46.9878721!16s%2Fg%2F11txy5bn10",
  },
];

function Index() {
  useReveal();

  return (
    <main className="relative overflow-hidden bg-hero">
      {/* HERO */}
      <section className="mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col items-center justify-center px-5 pb-16 pt-8 text-center">
        <img
          src={LOGO}
          alt="Logo Jéssica Rodrigues Advocacia"
          data-reveal
          className="reveal h-auto w-full max-w-[96vw] object-contain sm:max-w-md"
        />

        <div data-reveal className="reveal mt-4" style={{ transitionDelay: "120ms" }}>
          <h1 className="font-display text-3xl font-medium sm:text-4xl">
            Jéssica Rodrigues Advocacia
          </h1>
          <p className="mt-3 font-sans text-[0.7rem] uppercase tracking-[0.3em] text-gold">
            Advocacia Previdenciária | INSS
          </p>
        </div>

        <div data-reveal className="reveal mt-7" style={{ transitionDelay: "180ms" }}>
          <GoldButton size="lg">Falar com a advogada</GoldButton>
        </div>

        {/* Acesso rápido: WhatsApp, Instagram, Facebook, endereço */}
        <div
          data-reveal
          className="reveal mt-7 flex items-center justify-center gap-3"
          style={{ transitionDelay: "240ms" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.text}
              title={l.text}
              className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-card/40 transition-colors duration-300 hover:border-gold hover:bg-card"
            >
              <l.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <p
          data-reveal
          className="reveal mt-3 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground/70"
          style={{ transitionDelay: "280ms" }}
        >
          WhatsApp · Instagram · Facebook · Endereço
        </p>

        <div data-reveal className="reveal mt-9 w-full" style={{ transitionDelay: "340ms" }}>
          <div className="gold-rule mx-auto max-w-40" />
          <p className="mt-6 font-display text-[2rem] leading-[1.15] font-semibold sm:text-5xl">
            “Benefício negado pelo INSS{" "}
            <span className="text-gold-gradient">não significa fim.</span>”
          </p>
        </div>

        <p
          data-reveal
          className="reveal mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground"
          style={{ transitionDelay: "400ms" }}
        >
          Há mais de 10 anos atuando para reverter negativas e garantir direitos previdenciários.
          Atendimento em todo o Brasil.
        </p>

        <p
          data-reveal
          className="reveal mt-6 text-xs tracking-wide text-muted-foreground/80"
          style={{ transitionDelay: "460ms" }}
        >
          Atendimento previdenciário para todo o Brasil.
        </p>

      </section>

      {/* SERVIÇOS */}
      <section className="mx-auto w-full max-w-2xl px-6 py-24">
        <h2 data-reveal className="reveal text-center font-display text-2xl sm:text-3xl">
          Principais áreas de atuação
        </h2>
        <div className="gold-rule mx-auto mt-6 max-w-24" />

        <div className="mt-12 space-y-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              className="reveal rounded-2xl border border-border bg-card/60 p-7 shadow-[var(--shadow-soft)] backdrop-blur-sm transition-colors duration-500 hover:border-gold/50"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <s.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
              <h3 className="mt-4 font-display text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="mx-auto w-full max-w-2xl px-6 py-24">
        <div
          data-reveal
          className="reveal rounded-3xl border border-border bg-cta p-9 text-center"
        >
          <p className="font-display text-5xl font-semibold text-gold-gradient">+10 anos</p>
          <p className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] text-gold/80">
            de atuação
          </p>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Revertendo negativas e defendendo direitos previdenciários.
          </p>

          <div className="gold-rule my-9" />

          <p className="font-display text-2xl sm:text-3xl">Atendimento em todo o Brasil</p>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Você pode receber orientação jurídica mesmo estando em outra cidade ou estado.
          </p>

          <div className="gold-rule my-9" />

          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-gold">OAB/MG</p>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Profissional regularmente inscrita na Ordem dos Advogados do Brasil – Seção Minas
            Gerais.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-cta px-6 py-24">
        <div
          data-reveal
          className="reveal mx-auto max-w-xl rounded-3xl border border-gold/30 px-7 py-12 text-center"
        >
          <h2 className="font-display text-[1.9rem] leading-tight sm:text-4xl">
            Teve um benefício negado pelo INSS?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Uma negativa não significa que você perdeu o seu direito. Cada caso precisa ser
            analisado individualmente.
          </p>
          <div className="mt-9">
            <GoldButton size="lg">Quero analisar meu caso</GoldButton>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="mx-auto w-full max-w-2xl px-6 py-24">
        <h2 data-reveal className="reveal text-center font-display text-2xl sm:text-3xl">
          Contato
        </h2>
        <div className="gold-rule mx-auto mt-6 max-w-24" />

        <ul className="mt-10 space-y-4">
          {links.map((l, i) => (
            <li key={l.label} data-reveal className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-border bg-card/50 px-5 py-4 transition-colors duration-400 hover:border-gold/60 hover:bg-card"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40">
                  <l.icon className="h-4.5 w-4.5 text-gold" strokeWidth={1.5} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.68rem] uppercase tracking-[0.24em] text-gold/90">
                    {l.label}
                  </span>
                  <span className="block truncate text-sm text-foreground/90">{l.text}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-[color:var(--ink)] px-6 py-14 text-center">
        <img src={LOGO} alt="Jéssica Rodrigues Advocacia" className="mx-auto w-28 opacity-90" />
        <p className="mt-6 font-display text-lg">Jéssica Rodrigues Advocacia</p>
        <p className="mt-2 text-[0.65rem] uppercase tracking-[0.26em] text-gold/80">
          Advocacia Previdenciária | INSS
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Atendimento em todo o Brasil</p>
        <p className="mx-auto mt-8 max-w-sm text-[0.7rem] leading-relaxed text-muted-foreground/70">
          As informações deste site possuem caráter informativo e não substituem uma análise
          jurídica individualizada.
        </p>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-[image:var(--gradient-gold)] shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5 text-primary-foreground" strokeWidth={1.8} />
      </a>
    </main>
  );
}
