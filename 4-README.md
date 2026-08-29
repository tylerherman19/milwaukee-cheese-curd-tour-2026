# Milwaukee Cheese Curd Tour 2026

A polished, mobile-friendly guide for a self-guided six-stop Milwaukee cheese curd tour. Includes an interactive route map, all August-December 2026 Saturdays, a browser-persistent tasting scorecard, and a curd style comparison guide.

## Live site

Published with GitHub Pages.

## Notes

- The route is presented honestly as three walkable clusters with two longer 1.1-mile transfers.
- User selections and tasting scores are stored only in the visitor's browser using `localStorage`.
- Venue menus, hours, and specials can change. Official venue sources are linked throughout.
- No build step is required. This is a static HTML/CSS/JavaScript site.

## Shared score backend

Group ratings use the existing Supabase project `fantasy-football-edge` only because the account's free-project slots were full. This site added exactly one isolated table, `public.curd_tour_ratings`, and one table-scoped RLS policy, `curd_tour_all`. It does not touch any existing table, schema, data, policy, or project setting. To remove the backend later, run `drop table public.curd_tour_ratings;`. The public browser key is intentionally publishable; row-level policy limits access to this table.
