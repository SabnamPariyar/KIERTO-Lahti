# KIERTO Lahti

### Good things deserve a second story.

A mobile-first circular marketplace concept for students and young people in **Lahti, Finland**. It explores how thoughtful UX can make it easier to discover, give away, and reserve pre-loved items close to campus.

**Portfolio project for:** [Sabnam Pariyar](https://github.com/sabnumpariyar-png) — Sustainable Design Business student at LAB University of Applied Sciences  
**Project:** Independent UI/UX and front-end prototype  
**Status:** Interactive concept with fictional sample listings

> KIERTO is **not** an official LAB University service. All items, seller names, prices, reservations, and locations are illustrative. There is no backend, payment processing, seller messaging, or real booking.

## The idea

Students moving to a new apartment may need affordable essentials while useful objects often remain unused in other homes. KIERTO explores a locally focused way to give these objects a longer life.

The concept connects **circular living**, **student affordability**, and **low-friction digital service design**.

## Features

| Area | Functionality |
| --- | --- |
| Discover | Browse 25 fictional items |
| Find | Search by item, category, or pickup area |
| Filter | Home, Furniture, Electronics, Clothing, Sports, Books, Hobbies, Transport |
| Details | View condition, price, pickup area, and description |
| Save | Favorite products |
| Reserve | Select a preferred pickup day in a simulated flow |
| Give | Add a sample listing in the current session |
| Activity | Review saved, reserved, and offered items |

## Technology

- React 19 and Vite 7
- Responsive CSS and JavaScript
- Self-contained SVG product illustrations
- Client-side state only, with no external data or image service

## Run locally

Requires Node.js 20.19 or newer.

~~~bash
npm install
npm run dev
~~~

To make a production build:

~~~bash
npm run build
~~~

## GitHub Pages deployment

A GitHub Actions workflow is included in the repository.

1. In this repository, go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push changes to the main branch or manually run **Deploy KIERTO to GitHub Pages**.
4. Once the workflow succeeds, the expected project URL is https://sabnumpariyar-png.github.io/KIERTO-Lahti/

The URL above is the expected address, not proof that deployment has succeeded.

## UX approach

The interface uses warm ivory, moss green, editorial typography, and straightforward item cards. Condition and pickup information are visible early to help users decide which items are relevant.

This prototype explores:

- Finding useful things nearby
- Reducing effort to reserve or offer an item
- Communicating the information needed for a comfortable exchange
- Making a sustainability-oriented experience friendly and practical

Read the [UX case study](docs/UX_CASE_STUDY.md) for the problem hypothesis, proposed user journey, design reasoning, and research plan.

## What's next

- Interview students in Lahti and validate the problem.
- Test discovery and item-giving tasks with real participants.
- Improve privacy, trust, accessibility, and safe pickup guidance.
- Replace illustrations with product photos where appropriate.
- Document Sabnam's own research, design iterations, and contributions before using this as a completed job-application case study.

---

Independent educational concept prepared for Sabnam Pariyar. No official affiliation with LAB University of Applied Sciences.
