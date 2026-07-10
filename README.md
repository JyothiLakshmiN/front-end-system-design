# Frontend System Design

A hands-on, code-first exploration of the concepts every frontend engineer needs to design **scalable, performant, and reliable** web applications — from how browsers render a page to how clients and servers talk to each other, and how to make all of it fast.

This repo is my personal deep-dive and reference implementation, built while working through **Frontend System Design Yatra (Season 1 & 2)**, with working code for every concept rather than just notes.

---

## What's Inside

```
├── networking/
│   ├── rest/            REST API — CRUD with Express.js
│   ├── graphql/         GraphQL — single-endpoint, query-driven data fetching
│   ├── trpc/             tRPC — end-to-end type safety, no schema/codegen
│   ├── grpc/             gRPC — Protobuf & microservice communication
│   ├── short-polling/    Short polling — simple client-driven updates
│   ├── long-polling/     Long polling — near real-time without sockets
│   └── .gitignore
│
└── performance/
    ├── code-splitting/          Route/component-level bundle splitting
    ├── import-on-interaction/   Lazy-load on click/interaction
    ├── import-on-visibility/    Lazy-load on scroll into view
    ├── compression/             gzip / Brotli, served via Nginx
    ├── prefetch/                 Prefetching future-route assets
    ├── preload/                  Preloading critical assets
    ├── tree-shaking/             Eliminating dead code from bundles
    ├── virtualization/           Virtual lists for 60 FPS large-list rendering
    ├── LCP/                      Largest Contentful Paint optimization
    ├── INP/                      Interaction to Next Paint optimization
    └── cls/                      Cumulative Layout Shift prevention
```

Each folder is a **self-contained, runnable example** — clone, install, and see the concept in action rather than just reading about it.

---

## Module 1: Networking & Client-Server Communication

A practical comparison of every major way a frontend can talk to a backend, with working implementations for each so the trade-offs are obvious in code, not just theory.

| Technique | What it Solves | Implemented With |
|---|---|---|
| **REST** | Standard resource-based CRUD | Express.js |
| **GraphQL** | Over-/under-fetching, single flexible endpoint | Apollo / GraphQL server |
| **tRPC** | Full type safety between client & server, no codegen | TypeScript end-to-end |
| **gRPC** | High-performance microservice-to-microservice calls | Protobuf |
| **Short Polling** | Simple, interval-based "check for updates" | Client-driven fetch loop |
| **Long Polling** | Near real-time updates without persistent connections | Held-open HTTP requests |

Also covered conceptually (see reference notes): **WebSockets** for true bidirectional real-time communication, and **WebHooks** for server-triggered event automation — plus the fundamentals underneath it all: how browsers parse HTML/CSS/JS into the DOM/CSSOM and paint a page, and how transport protocols like **TCP, UDP, SMTP, and FTP** differ (and why, for example, UDP wins for live video while TCP wins for reliability).

---

## ⚡ Module 2: Performance & Optimization

Eleven modules of techniques to make a React + Webpack app measurably faster, mapped to what actually moves **Core Web Vitals**.

### Loading & Bundle Optimization
- **Code Splitting** — ship only what a route needs
- **Import on Interaction** — defer non-critical code until the user acts
- **Import on Visibility** — defer offscreen content until it scrolls into view
- **Tree Shaking** — strip dead code from the production bundle
- **Compression** — gzip/Brotli at the server layer (deployed via Nginx)
- **Prefetch & Preload** — browser hints to fetch what's needed next, before it's needed

### Runtime Performance
- **Virtualization** — render only visible rows to hold 60 FPS on large lists

### Core Web Vitals
| Metric | Focus | Technique Used |
|---|---|---|
| **LCP** (Largest Contentful Paint) | Loading speed | Image optimization, `srcset` |
| **INP** (Interaction to Next Paint) | Responsiveness | Reducing main-thread blocking |
| **CLS** (Cumulative Layout Shift) | Visual stability | Reserved space/placeholders for late-injected content |

---

## Tech Stack

`React` · `TypeScript` · `Node.js` · `Express` · `GraphQL` · `tRPC` · `gRPC / Protobuf` · `Webpack` · `Nginx`

---

## About

Built and maintained by **[Jyothi Lakshmi Nagaraj](https://jyothi-portfolio-kappa.vercel.app)** — Software Engineer focused on full-stack & AI/agentic engineering.

- [LinkedIn](https://linkedin.com/in/jyothilakshminagaraj)
- [GitHub](https://github.com/JyothiLakshmiN)
- Technical writing on [Substack](https://substack.com/@jyothilakshminagaraj1)

If this repo helped you understand frontend system design better, consider ⭐️ starring it!
