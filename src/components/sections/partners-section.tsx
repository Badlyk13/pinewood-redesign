"use client";

import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/fade-up";
import { Marquee } from "@/components/motion/marquee";
import { partners, type Partner } from "@/data/partners";

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex h-24 w-48 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-6 transition-colors hover:border-primary/30 hover:bg-surface-elevated">
      <div className="text-center">
        <span className="text-base font-semibold tracking-wide text-fg-muted/60 uppercase">
          {partner.logo}
        </span>
        <p className="mt-1 text-xs text-fg-muted/40">{partner.category}</p>
      </div>
    </div>
  );
}

export function PartnersSection() {
  const firstRow = partners.slice(0, 4);
  const secondRow = partners.slice(4);

  return (
    <section className="border-t border-border bg-surface">
      <Container>
        <FadeUp>
          <p className="text-sm font-medium text-fg-muted/80 uppercase tracking-wider">
            Надёжные партнёры
          </p>
          <h2 className="mt-2 font-serif text-display-3 text-fg">
            Работаем с лучшими производителями
          </h2>
        </FadeUp>
        <div className="mt-12 space-y-6">
          <Marquee speed={25}>
            {firstRow.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
            {firstRow.map((partner) => (
              <PartnerCard key={`${partner.name}-duplicate`} partner={partner} />
            ))}
          </Marquee>
          <Marquee speed={30} reverse>
            {secondRow.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
            {secondRow.map((partner) => (
              <PartnerCard key={`${partner.name}-duplicate`} partner={partner} />
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
}
