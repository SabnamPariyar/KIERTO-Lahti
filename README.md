# KIERTO Lahti

### Good things deserve a second story.

Hi, I'm **Sabnam Pariyar**. I study Sustainable Design Business at LAB University of Applied Sciences in Lahti, Finland.

I'm developing **KIERTO** as an independent UI/UX portfolio concept. I wanted to explore a simple question: *What if students could find and pass on useful secondhand things in their own community with less effort?*

KIERTO is my way of bringing together the subjects I care about—sustainability, practical digital services, and clear, friendly interface design.

> This is an educational prototype, not an official LAB University service. The items, people, prices, and pickup details are fictional. Nothing is bought, sold, or reserved in real life.

## My idea

When students move to a new place, they often need everyday things—chairs, books, lamps, kitchenware, or sports equipment. At the same time, perfectly useful items can sit unused.

I wanted to imagine a local marketplace where giving something a second life feels as easy as finding something new. I kept the concept focused on Lahti because designing for a familiar place makes the problem feel more concrete.

## What you can try

| Feature | What it does |
| --- | --- |
| Discover | Browse 25 fictional secondhand listings |
| Search | Find items by name, category, or pickup area |
| Categories | Home, Furniture, Electronics, Clothing, Sports, Books, Hobbies, and Transport |
| Item details | See condition, description, price, and pickup area |
| Favorites | Save items you like |
| Reserve | Choose a pickup preference in a simulated flow |
| Give an item | Add a sample listing during your browser session |
| Activity | View saved, reserved, and offered items |

All actions are demonstrations. There is no server, login, payment, or contact with real sellers.

## My design direction

I wanted the interface to feel calm and approachable.

- **Warm ivory and moss green** make the experience feel friendly and grounded.
- **Simple product cards** put useful information ahead of visual clutter.
- **Clear condition and pickup details** help people decide what matters.
- **One main action per screen** keeps the next step understandable.
- **Mobile-first layouts** reflect how I imagine students browsing during everyday life.

These are early design decisions, and I want to test whether they work for real users.

## How the prototype works

I use this project to practice the connection between UX design and front-end implementation. The interactive prototype is built with:

- React 19 and Vite 7
- JavaScript and responsive CSS
- Locally generated SVG product illustrations
- Client-side state, without a backend

### Run it locally

Use Node.js 20.19 or newer.

~~~bash
npm install
npm run dev
~~~

To create a production build:

~~~bash
npm run build
~~~

## Try it online

I've included an automatic GitHub Pages deployment workflow. Once Pages is enabled in **Settings → Pages → GitHub Actions** and the workflow finishes successfully, the demo should be available at:

https://sabnumpariyar-png.github.io/KIERTO-Lahti/

This is the planned address; it may not be live until Pages is enabled.

## What I want to do next

This is still a concept, so I don't want to present assumptions as research findings. My next steps are to:

1. Talk with students in Lahti about how they currently find or give away secondhand items.
2. Test whether people understand the search, reservation, and listing flows.
3. Improve trust, safety, accessibility, and pickup communication.
4. Turn feedback into stronger Figma screens and design-system components.
5. Document what changed and why.

I've written a more detailed [UX case-study draft](docs/UX_CASE_STUDY.md) to guide that process.

---

*I'm exploring how small, thoughtful design decisions can make sustainable everyday choices a little easier.*

**Sabnam Pariyar · Lahti, Finland**

Independent student portfolio concept. Not affiliated with or endorsed by LAB University of Applied Sciences.
