export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  /** Card + article hero; Unsplash URLs (see next.config remotePatterns). */
  coverImage: string;
  coverImageAlt: string;
  blocks: BlogBlock[];
};

function estimateReadingMinutes(blocks: BlogBlock[]): number {
  const words = blocks.reduce((n, b) => {
    if (b.type === "p") return n + b.text.split(/\s+/).length;
    if (b.type === "h2" || b.type === "h3") return n + b.text.split(/\s+/).length;
    if (b.type === "ul") return n + b.items.join(" ").split(/\s+/).length;
    return n;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

const postsRaw: BlogPost[] = [
  {
    slug: "water-heater-replacement-signs",
    title: "5 Signs You Need to Replace Your Water Heater",
    excerpt:
      "From rusty water to rising energy bills—the quiet warnings before a failure.",
    category: "Water Heaters",
    publishedAt: "2026-01-12",
    coverImage:
      "https://images.unsplash.com/photo-1654220691341-be23a137bd0c?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt:
      "Large hot-water storage tanks—like the cylinder units homeowners replace when age, noise, or rusty water appear",
    blocks: [
      {
        type: "p",
        text: "Most water heaters do not fail overnight. They send small signals—temperature swings, odd sounds, and higher utility bills—that are easy to ignore until you are facing a flooded utility room or a cold shower on a busy morning. Knowing what to watch for helps you plan a replacement on your timeline instead of reacting to an emergency.",
      },
      {
        type: "h2",
        text: "1. Your unit is past its typical lifespan",
      },
      {
        type: "p",
        text: "Tank-style water heaters often last about 8–12 years with good maintenance, while tankless models may run longer if they are flushed and serviced per manufacturer guidance. If yours is in that age range and you are seeing any other issues on this list, replacement is usually more economical than repeated repairs.",
      },
      {
        type: "h2",
        text: "2. Rusty or discolored hot water",
      },
      {
        type: "p",
        text: "Brown or rusty water that only appears when the hot tap runs can mean corrosion inside the tank or failing anode rod protection. Rust on the tank exterior, especially near seams or the pressure relief valve, is a serious warning sign. In either case, a licensed plumber should inspect the system and advise whether repair or replacement is appropriate.",
      },
      {
        type: "h2",
        text: "3. Noises, rumbling, or popping on heating cycles",
      },
      {
        type: "p",
        text: "Sediment builds up in the bottom of a tank over time. When the burner or element heats that layer, you may hear popping or rumbling. Some noise can be addressed with flushing, but heavy buildup stresses the tank and shortens life. Persistent noise after service often points toward replacement.",
      },
      {
        type: "h2",
        text: "4. Leaks or moisture around the base",
      },
      {
        type: "p",
        text: "Small puddles, damp concrete, or rust streaks under a tank-style heater often indicate an internal failure or connection problem. Do not ignore slow leaks; they can worsen quickly. Shut off power to the heater at the breaker (and gas at the valve if applicable), turn off the cold-water supply to the tank, and call a professional.",
      },
      {
        type: "h2",
        text: "5. Rising energy bills without more hot-water use",
      },
      {
        type: "p",
        text: "As efficiency drops—due to sediment, failing heating elements, or worn components—your water heater works harder for the same amount of hot water. If your gas or electric usage is creeping up and other appliances have not changed, the water heater may be nearing the end of its useful life.",
      },
      {
        type: "h2",
        text: "Planning a replacement in Delaware",
      },
      {
        type: "p",
        text: "If several of these signs apply to your home, scheduling an inspection before a total failure gives you time to compare efficient models, right-size the unit for your household, and coordinate installation without emergency surcharges. A qualified plumber can verify code compliance, handle permits where required, and dispose of the old unit safely.",
      },
    ],
  },
  {
    slug: "unclog-drain-without-chemicals",
    title: "How to Unclog a Drain Without Chemicals",
    excerpt:
      "Safe steps that protect enamel finishes, seals, and septic systems.",
    category: "Drains",
    publishedAt: "2026-01-28",
    coverImage:
      "https://images.unsplash.com/photo-1654440122140-f1fc995ddb34?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt:
      "Close-up of a metal sink drain—where hair, grease, and mechanical clearing matter more than caustic chemicals",
    blocks: [
      {
        type: "p",
        text: "Caustic drain cleaners can damage older pipes, weaken gaskets, etch porcelain, and harm septic bacteria. In many cases, simple mechanical methods and patience clear a slow or blocked drain without exposing your home or septic system to harsh chemistry.",
      },
      {
        type: "h2",
        text: "What to try first",
      },
      {
        type: "ul",
        items: [
          "Boiling water (only for metal pipes—skip if you have PVC that could soften from extreme heat; use very hot tap water instead).",
          "A sink or tub plunger sized for the fixture, with enough water in the basin to cover the cup.",
          "Manual removal: pull the pop-up stopper or clear visible hair from a shower drain using gloves—never combine tools with chemicals you already poured in.",
        ],
      },
      {
        type: "h2",
        text: "The baking soda and vinegar method (light clogs)",
      },
      {
        type: "p",
        text: "Pour about half a cup of baking soda into the drain, followed slowly by a cup of white vinegar. Let it foam for 10–15 minutes, then flush with hot water. This can help with mild organic buildup and kitchen grease film; it is not a fix for solid obstructions or deep sewer issues.",
      },
      {
        type: "h2",
        text: "Snaking with a hand auger",
      },
      {
        type: "p",
        text: "A short hand-operated snake from a hardware store can reach many P-trap clogs. Remove and empty the trap if you are comfortable doing so over a bucket—often the blockage is right there. Feed the snake gently; forcing it can damage pipes.",
      },
      {
        type: "h2",
        text: "When to stop and call a plumber",
      },
      {
        type: "ul",
        items: [
          "Multiple fixtures backing up at once—possible main line issue.",
          "Sewage smell indoors or gurgling in other drains when you flush.",
          "Repeated clogs in the same line after you have cleared it.",
          "Any doubt about your drain material (older Orangeburg or heavily corroded metal).",
        ],
      },
      {
        type: "p",
        text: "Professional drain cleaning with proper equipment clears the full diameter of the pipe and can include camera inspection if the problem keeps returning. That is often cheaper and safer than escalating DIY efforts after caustic products have already been used.",
      },
    ],
  },
  {
    slug: "plumbing-emergency-steps",
    title: "What to Do in a Plumbing Emergency (Step by Step)",
    excerpt:
      "Shut-offs, containment, and when to escalate to a licensed pro.",
    category: "Emergencies",
    publishedAt: "2026-02-06",
    coverImage:
      "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt:
      "Water beading on a brass plumbing fitting—the kind of leak sign that means shut the water off and call for help",
    blocks: [
      {
        type: "p",
        text: "A burst pipe, overflowing toilet, or major leak needs fast action to limit water damage and keep everyone safe. Keep this sequence in mind so you do not have to figure it out while water is spreading.",
      },
      {
        type: "h2",
        text: "Step 1: Shut off the water",
      },
      {
        type: "p",
        text: "For a fixture leak, use the angle stop valve under the toilet, sink, or behind the appliance. Turn clockwise until firm. If you cannot find it or the leak is aggressive, shut off the main water supply to the house—usually near where the water line enters the basement, crawlspace, or utility area.",
      },
      {
        type: "h2",
        text: "Step 2: Cut power if water is near electricity",
      },
      {
        type: "p",
        text: "If water is approaching outlets, appliances, or your electrical panel, turn off the relevant breaker. Do not step into standing water to reach the panel; call an electrician if the situation is unsafe.",
      },
      {
        type: "h2",
        text: "Step 3: Contain and remove water",
      },
      {
        type: "p",
        text: "Use towels, buckets, and a wet-dry vacuum if you have one. Move valuables and lift furniture off damp carpet when possible. Air circulation helps—open windows in safe conditions and run fans once outlets are clearly dry.",
      },
      {
        type: "h2",
        text: "Step 4: Gas smell or suspected leak",
      },
      {
        type: "p",
        text: "If you smell gas, leave the building immediately without flipping switches or using phones indoors. From a safe location, call your gas utility or emergency services. Do not attempt DIY repairs on gas lines.",
      },
      {
        type: "h2",
        text: "Step 5: Call a licensed plumber",
      },
      {
        type: "p",
        text: "Describe what failed, what you have already shut off, and whether water is still flowing. Photos and short video can help dispatch prioritize. In northern Delaware, having a trusted emergency plumber’s number saved beats searching under stress.",
      },
      {
        type: "h2",
        text: "After the repair",
      },
      {
        type: "p",
        text: "Document damage for insurance if the loss is substantial. Ask your plumber whether a pressure-reducing valve, whole-house shutoff label map, or flood alarm may reduce future risk.",
      },
    ],
  },
  {
    slug: "plumber-cost-delaware",
    title: "How Much Does a Plumber Cost in Delaware?",
    excerpt:
      "Typical ranges, how quotes work, and what drives price on local jobs.",
    category: "Pricing",
    publishedAt: "2026-02-18",
    coverImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt:
      "Desk with invoices and a laptop—thinking through written estimates, trip charges, and what a Delaware plumbing job includes",
    blocks: [
      {
        type: "p",
        text: "Plumbing prices depend on the type of job, time of day, materials, travel, permits, and complexity. No honest company can quote every scenario in one sentence, but understanding common patterns helps you compare estimates fairly across Wilmington and northern Delaware.",
      },
      {
        type: "h2",
        text: "How plumbers usually price work",
      },
      {
        type: "ul",
        items: [
          "Service call or trip charge: covers travel and initial diagnosis time.",
          "Flat-rate task pricing: common for standard installs and common repairs once the scope is known.",
          "Time and materials: used when the scope is exploratory or highly variable.",
        ],
      },
      {
        type: "h2",
        text: "What affects the total on local jobs",
      },
      {
        type: "p",
        text: "Emergency and after-hours calls typically cost more than scheduled daytime visits—that reflects technician availability and overtime. Specialty parts, code upgrades discovered mid-job, and access difficulty (tight crawlspaces, concrete cutting, extensive drywall repair) all add time and cost. Licensed, insured contractors also carry overhead for training, vehicles, and warranty backing.",
      },
      {
        type: "h2",
        text: "Getting a quote you can trust",
      },
      {
        type: "ul",
        items: [
          "Ask what is included: parts, permit fees, disposal, warranty length.",
          "Prefer written estimates for non-emergency work.",
          "Verify licensing and insurance—not just the lowest number.",
        ],
      },
      {
        type: "p",
        text: "The Plumbing Company provides clear explanations before work starts, so homeowners in Delaware know what they are paying for and what options exist. When comparing bids, make sure each quote reflects the same scope, fixtures, and code requirements.",
      },
    ],
  },
  {
    slug: "plumbing-maintenance-checklist",
    title: "Preventive Plumbing Maintenance Checklist",
    excerpt:
      "Seasonal checkpoints that catch problems before peak-season surges.",
    category: "Maintenance",
    publishedAt: "2026-03-04",
    coverImage:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt:
      "Wrenches and hand tools—homeowners checking shutoffs, traps, and fixtures during a preventive plumbing walkthrough",
    blocks: [
      {
        type: "p",
        text: "A short maintenance routine reduces surprise failures, extends fixture life, and often catches slow leaks before they damage cabinets or framing. Use this checklist as a starting point and adjust for your home’s age and plumbing type.",
      },
      {
        type: "h2",
        text: "Every few months",
      },
      {
        type: "ul",
        items: [
          "Look under sinks for moisture, warped particle board, or musty odors.",
          "Exercise shutoff valves under toilets and sinks (turn off and on gently) so they do not freeze closed.",
          "Test GFCI outlets in bathrooms, kitchens, and garages if water-using appliances are nearby.",
        ],
      },
      {
        type: "h2",
        text: "Seasonal focus",
      },
      {
        type: "h3",
        text: "Spring",
      },
      {
        type: "ul",
        items: [
          "Inspect hose bibs and exterior lines for winter damage before heavy garden use.",
          "Check the water heater’s temperature and pressure relief valve discharge path (no blockage).",
        ],
      },
      {
        type: "h3",
        text: "Summer",
      },
      {
        type: "ul",
        items: [
          "Monitor sprinkler or irrigation backflow connections if you have them.",
          "Run rarely used guest bathrooms briefly to keep traps from drying out.",
        ],
      },
      {
        type: "h3",
        text: "Fall",
      },
      {
        type: "ul",
        items: [
          "Disconnect and drain outdoor hoses; shut off and insulate interior valves serving exterior faucets if applicable.",
          "Flush debris from visible floor drains in basements.",
        ],
      },
      {
        type: "h3",
        text: "Winter",
      },
      {
        type: "ul",
        items: [
          "Maintain heat in all areas with piping, even in unused rooms.",
          "Open cabinet doors on very cold nights to let warm air reach under-sink lines on exterior walls.",
        ],
      },
      {
        type: "p",
        text: "Annual professional service for tank water heaters (and periodic flushing for tankless) keeps efficiency up and sediment down. If anything on this list reveals a concern, schedule a licensed plumber rather than waiting for a small problem to become an emergency.",
      },
    ],
  },
  {
    slug: "winter-frozen-pipes-tips",
    title: "Winter Plumbing Tips: Preventing Frozen Pipes",
    excerpt:
      "Insulation, drafts, and hose bibs—what older Delaware homes often need.",
    category: "Seasonal",
    publishedAt: "2026-03-22",
    coverImage:
      "https://images.unsplash.com/photo-1769446470729-07adf636ba83?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt:
      "Outdoor freeze-warning scene with snow—when to drip faucets, insulate pipes, and protect hose bibs before deep cold",
    blocks: [
      {
        type: "p",
        text: "When temperatures drop sharply in Delaware, water inside pipes can freeze, expand, and split copper or plastic lines. Prevention is far less expensive than tearing out wet drywall and replacing burst sections.",
      },
      {
        type: "h2",
        text: "Know your vulnerable runs",
      },
      {
        type: "p",
        text: "Pipes in exterior walls, unheated crawlspaces, garages, and attic spaces freeze first. Older homes with minimal insulation or air gaps around sill plates are at higher risk. Walk the property and note where water lines run and how they are heated (or not).",
      },
      {
        type: "h2",
        text: "Insulation and air sealing",
      },
      {
        type: "ul",
        items: [
          "Add pipe insulation on exposed runs; in very cold zones, heat tape may be appropriate where allowed by code.",
          "Seal gaps where plumbing penetrates floors or walls to stop cold drafts.",
          "Improve attic and crawlspace insulation over time—less cold convection means warmer wall cavities.",
        ],
      },
      {
        type: "h2",
        text: "Hose bibs and outdoor plumbing",
      },
      {
        type: "p",
        text: "Use frost-free hose bibs where possible and always disconnect hoses before freeze season. If you have interior shutoffs for outdoor lines, close them and open the outside valve to drain trapped water.",
      },
      {
        type: "h2",
        text: "During a cold snap",
      },
      {
        type: "ul",
        items: [
          "Keep thermostat settings steady day and night.",
          "Let faucets drip slightly on problem lines (collect water if you are on a well with limited supply).",
          "If you lose heat, drain the system with professional guidance or shut the main and open fixtures to reduce pressure if freezing is imminent.",
        ],
      },
      {
        type: "h2",
        text: "If you suspect a frozen pipe",
      },
      {
        type: "p",
        text: "Do not use an open flame to thaw lines. You can sometimes thaw an exposed pipe with warm air from a hair dryer while monitoring for splits. If you have no water, a bulging line, or watermarks after a thaw, shut off the water and call a plumber to assess and repair safely.",
      },
    ],
  },
];

export const BLOG_POSTS: (BlogPost & { readingMinutes: number })[] =
  postsRaw.map((p) => ({
    ...p,
    readingMinutes: estimateReadingMinutes(p.blocks),
  }));

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit);
}
