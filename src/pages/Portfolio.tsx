import { useMemo, useState } from "react";
import { Page } from "@/components/ui/Page";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/sections/CTABanner";
import { FilterBar } from "@/components/sections/FilterBar";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "@/config/content";

type Filter = "All" | ProjectCategory;
const filters: readonly Filter[] = ["All", ...projectCategories];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <Page>
      <section
        style={{
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
          paddingBottom: 60,
        }}
      >
        <div className="wrap">
          <Reveal>
            <SectionLabel>Our work</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="font-display-tight"
              style={{ fontSize: "clamp(48px, 8vw, 120px)", margin: "0 0 28px" }}
            >
              Products built
              <br />
              to last.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: 18,
                maxWidth: 720,
                lineHeight: 1.6,
              }}
            >
              Selected work across web, mobile, and Web3. Mockups shown — full case studies
              available on request, with live links where NDAs allow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <FilterBar
            options={filters}
            active={filter}
            onChange={setFilter}
            count={{ shown: filtered.length, total: projects.length, label: "projects" }}
          />

          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            }}
          >
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 60, 360)}>
                <ProjectCard project={p} eager={i < 2} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ padding: 80, textAlign: "center", color: "var(--color-muted)" }}>
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </Page>
  );
}
