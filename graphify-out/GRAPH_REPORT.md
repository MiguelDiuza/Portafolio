# Graph Report - .  (2026-06-26)

## Corpus Check
- Corpus is ~12,029 words - fits in a single context window. You may not need a graph.

## Summary
- 87 nodes · 140 edges · 12 communities (10 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Projects Section & Data|Projects Section & Data]]
- [[_COMMUNITY_Footer, Video & Studies|Footer, Video & Studies]]
- [[_COMMUNITY_i18n & Translations|i18n & Translations]]
- [[_COMMUNITY_App Shell & Navigation|App Shell & Navigation]]
- [[_COMMUNITY_WebGL Dot-Matrix Background|WebGL Dot-Matrix Background]]
- [[_COMMUNITY_Experience Section & Skills|Experience Section & Skills]]
- [[_COMMUNITY_Skill Cards & Tech Detail|Skill Cards & Tech Detail]]
- [[_COMMUNITY_About Me & Floating Paths|About Me & Floating Paths]]
- [[_COMMUNITY_Spline 3D Robot|Spline 3D Robot]]
- [[_COMMUNITY_Magnetic Button|Magnetic Button]]

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 17 edges
2. `LanguageCode` - 7 edges
3. `TranslationKey` - 7 edges
4. `App()` - 4 edges
5. `asset()` - 4 edges
6. `LanguageContextProps` - 3 edges
7. `Project` - 3 edges
8. `skillsData` - 3 edges
9. `useFloatingSkills()` - 3 edges
10. `CinematicFooter()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `ExperienceSection()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/ExperienceSection.tsx → src/components/idiomas.tsx
- `SkillCard()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/SkillCard.tsx → src/components/idiomas.tsx
- `SobreMi()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/SobreMi.tsx → src/components/idiomas.tsx
- `App()` --calls--> `useLanguage()`  [EXTRACTED]
  src/App.tsx → src/components/idiomas.tsx
- `CinematicFooter()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/CinematicFooter.tsx → src/components/idiomas.tsx

## Import Cycles
- None detected.

## Communities (12 total, 2 thin omitted)

### Community 0 - "Projects Section & Data"
Cohesion: 0.18
Nodes (11): ADD_ICON, CardProps, CarouselProps, LINK_LABELS, Project, ProjectLink, ProjectLinkType, PROJECTS (+3 more)

### Community 1 - "Footer, Video & Studies"
Cohesion: 0.19
Nodes (9): CinematicFooter(), MARQUEE_ITEMS, useLanguage(), Proyectos(), Video(), cardVariants, containerVariants, StudiesCards() (+1 more)

### Community 2 - "i18n & Translations"
Cohesion: 0.29
Nodes (7): LanguageContext, LanguageContextProps, LanguageProvider(), ProjectGroup, TechDetail, LanguageCode, translations

### Community 3 - "App Shell & Navigation"
Cohesion: 0.29
Nodes (4): FloatingSkillsState, useFloatingSkills(), asset(), App()

### Community 4 - "WebGL Dot-Matrix Background"
Cohesion: 0.22
Nodes (5): cn(), CanvasRevealEffect(), DotMatrixProps, ShaderProps, Uniforms

### Community 5 - "Experience Section & Skills"
Cohesion: 0.33
Nodes (4): CanvasRevealEffect, ExperienceSection(), ExperienceSectionProps, skillsData

### Community 6 - "Skill Cards & Tech Detail"
Cohesion: 0.33
Nodes (4): SkillCard(), SkillCardProps, TechItem, TECH_DETAILS

### Community 7 - "About Me & Floating Paths"
Cohesion: 0.40
Nodes (4): SobreMi(), prefersReducedMotion(), BackgroundPaths(), FloatingPaths()

## Knowledge Gaps
- **22 isolated node(s):** `MARQUEE_ITEMS`, `CanvasRevealEffect`, `ExperienceSectionProps`, `ADD_ICON`, `CardProps` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `Footer, Video & Studies` to `Projects Section & Data`, `i18n & Translations`, `App Shell & Navigation`, `Experience Section & Skills`, `Skill Cards & Tech Detail`, `About Me & Floating Paths`?**
  _High betweenness centrality (0.154) - this node is a cross-community bridge._
- **Why does `cn()` connect `WebGL Dot-Matrix Background` to `App Shell & Navigation`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **What connects `MARQUEE_ITEMS`, `CanvasRevealEffect`, `ExperienceSectionProps` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._