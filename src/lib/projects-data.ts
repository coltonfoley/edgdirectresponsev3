// Auto-generated from CSV import
// Source: Projects for Website - Sheet1.csv
// Generated: 2026-02-18

export interface Project {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string | null;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  videoUrl?: string;
  videoPoster?: string;
  videoCaption?: string;
  projectType: 'Commercial' | 'Residential';
  isComplete: boolean;
  missingFields: string[];
}

export const projects: Project[] = [
  {
    id: "karp",
    name: "Karp",
    address: "1516 Grant Rd, Northbrook, IL 60062",
    city: "Northbrook",
    state: "IL",
    zipCode: "60062",
    description: "Multi-bay motorized louvered pergola with wood grain panels and a privacy wall.",
    challenge: "The client was undertaking a complete backyard renovation including a new swimming pool and wanted a shaded entertainment area that would complement the natural aesthetic of their outdoor space. They needed protection from sun and rain while maintaining a warm, organic look that wouldn't feel like an industrial addition to their residential property. The challenge was finding a system that offered modern motorized functionality while blending seamlessly with the woodsy Northbrook landscape.",
    solution: "We designed and installed a custom multi-bay motorized pergola system featuring wood grain finish louvers and integrated privacy walls. The wood grain coating provides the natural aesthetic the client desired while maintaining the durability and performance of aluminum construction. The multi-bay configuration creates distinct zones for dining and lounging, with motorized louvers that adjust to control sunlight and provide rain protection. Privacy walls were strategically placed to create an intimate poolside retreat while maintaining airflow and views of the landscaped property.",
    results: [
      "Created a comfortable, shaded entertainment space adjacent to the new swimming pool",
      "Achieved natural wood aesthetic with durable aluminum construction using wood grain finish",
      "Installed multi-bay system providing distinct functional zones for outdoor living",
      "Added motorized control for adjustable sun and rain protection throughout the day",
      "Created an architectural shade feature that complements the landscape"
    ],
    projectType: "Residential",
    isComplete: true,
    missingFields: []
  },
  {
    id: "carmines",
    name: "Carmine's",
    address: "1037 N Rush St, Chicago, IL 60611",
    city: "Chicago",
    state: "IL",
    zipCode: "60611",
    description: "Multi-bay commercial motorized pergola system planned to support more outdoor seating.",
    challenge: "This large commercial patio required detailed planning, design, and engineering because the structure followed an angled, cantilevered condition. The restaurant also needed to preserve as much usable seating area as possible, so column placement and span length were central constraints.",
    solution: "EDG planned a custom multi-bay motorized louvered pergola system around the angled commercial condition. Steel beams and reinforced columns were used where the span required extra support, helping reduce unnecessary posts in the dining area while keeping the structure aligned with the building.",
    results: [
      "Supported additional covered outdoor seating for the restaurant",
      "Planned around a challenging angled and cantilevered commercial condition",
      "Used steel reinforcement to reduce unnecessary columns in the seating area",
      "Added adjustable overhead coverage for a Chicago hospitality patio"
    ],
    projectType: "Commercial",
    isComplete: true,
    missingFields: []
  },
  {
    id: "rosebud",
    name: "Rosebud",
    address: "130 East Randolph, Chicago, IL",
    city: "Chicago",
    state: "IL",
    zipCode: null,
    description: "Multi-bay commercial system planned to increase outdoor seating.",
    challenge: "This restaurant overlooks Millennium Park in Chicago. The client wanted a more comfortable outdoor area while reducing exposure to harsh Chicago weather. Because the space is near Lake Michigan and on a rooftop, the project required careful engineering and several column-attachment approaches, including custom reinforcement to steel beams and through-column details to reduce deflection.",
    solution: "",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "wade",
    name: "Wade",
    address: "8 Moate Ln, Barrington, IL",
    city: "Barrington",
    state: "IL",
    zipCode: null,
    description: "Outdoor room with fully retractable louvers and motorized glass.",
    challenge: "This system presented several integration challenges because multiple motorized products needed to work together cleanly. It also required concealed power and drainage planning. Pairing motorized glass windows with louvers that both rotate and fully retract gave the homeowner a flexible poolside entertaining space.",
    solution: "EDG designed and installed a custom outdoor room with a motorized louvered roof, integrated lighting, and motorized glass walls. The drainage and electrical work were planned to stay concealed, while the retractable glass and adjustable louvers allow the space to shift between open-air use and more protected conditions.",
    results: [
      "Created a protected outdoor living space by the pool",
      "Successfully integrated multiple motorized systems (louvers + glass walls) with seamless control",
      "Concealed all electrical and drainage systems maintaining clean aesthetic",
      "Extended the comfortable entertaining season with protection from wind, rain, and insects",
      "Created a clean architectural addition next to the pool"
    ],
    videoUrl: "https://youtube.com/shorts/7K8sbQ2YXQM",
    projectType: "Residential",
    isComplete: true,
    missingFields: []
  },
  {
    id: "the-elm",
    name: "The Elm",
    address: "23 W Harris Rd, La Grange, IL",
    city: "La Grange",
    state: "IL",
    zipCode: null,
    description: "Multi-bay commercial system planned to increase outdoor seating.",
    challenge: "This was on a rooftop of a pretty populated area making the layout and installation challenging.",
    solution: "",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "the-district",
    name: "The District",
    address: "10308 N Main St, Richmond, IL",
    city: "Richmond",
    state: "IL",
    zipCode: null,
    description: "Multi-bay commercial system planned to increase outdoor seating.",
    challenge: "This system had very tall columns and long spans. The project also needed enclosure planning for colder-weather use, so snow load and added structural strength were important engineering considerations.",
    solution: "",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "chicago-winery",
    name: "Chicago Winery",
    address: "739 N Clark St, Chicago, IL",
    city: "Chicago",
    state: "IL",
    zipCode: null,
    description: "Urban hospitality venue using motorized screens to help open or enclose an outdoor area as weather changes.",
    challenge: "Downtown Chicago site logistics made access, staging, and coordination important parts of the project.",
    solution: "EDG planned motorized screen coverage for the venue's outdoor area so the space could stay open when conditions were comfortable and close down when more weather control was needed. The available case-study details are limited, so this page does not claim measured seating or revenue results.",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["results"]
  },
  {
    id: "jake-everly-residence",
    name: "Jake",
    address: "6913 Rhode Island Trail, Crystal Lake, IL 60012",
    city: "Crystal Lake",
    state: "IL",
    zipCode: "60012",
    description: "Multi-bay residential motorized louvered pergola system designed for entertaining.",
    challenge: "This pergola was part of a larger landscape project, so electrical routing, drainage, and site coordination all needed to line up with the broader backyard plan.",
    solution: "EDG coordinated the multi-bay motorized louvered pergola with the landscape work already underway. Power and drainage were planned around the structure and surrounding patio so the system could read as part of the finished outdoor living area rather than a late add-on.",
    results: [
      "Integrated the pergola system into a larger landscape project",
      "Planned electrical and drainage routing as part of the outdoor living area",
      "Created multiple covered zones for dining and lounging",
      "Kept the system aligned with the home's backyard design"
    ],
    projectType: "Residential",
    isComplete: true,
    missingFields: []
  },
  {
    id: "greco",
    name: "Greco",
    address: "5N560 Deer Pond Dr, St. Charles, IL 60175",
    city: "St. Charles",
    state: "IL",
    zipCode: "60175",
    description: "Multi-bay residential motorized louvered pergola over a sunken outdoor seating area.",
    challenge: "The pergola had to work around a waterfall structure next to a sunken seating area. The patio walls and grade changes made layout, access, and attachment details more complex than a standard flat patio installation.",
    solution: "EDG planned a custom multi-bay motorized louvered pergola around the waterfall feature and sunken seating area. The approach focused on fitting the structure to the existing masonry and landscape conditions while keeping the covered area usable from the patio below.",
    results: [
      "Covered a sunken seating area with a custom multi-bay pergola",
      "Planned the structure around an existing waterfall and patio wall condition",
      "Used project-specific attachment planning for the masonry setting",
      "Created a more usable covered outdoor room within the backyard design"
    ],
    projectType: "Residential",
    isComplete: true,
    missingFields: []
  },
  {
    id: "reddy",
    name: "Reddy",
    address: "6300 S Elm St, Burr Ridge, IL 60527",
    city: "Burr Ridge",
    state: "IL",
    zipCode: "60527",
    description: "Multi-bay residential system opposite an indoor pool that opens to an expansive patio.",
    challenge: "This system included integrated underground drainage, motorized screens, a structural privacy wall, television planning, heaters, and lighting. The scope required careful coordination and a unique electrical layout to keep as much of the work concealed as possible.",
    solution: "",
    results: [],
    projectType: "Residential",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "arora",
    name: "Arora",
    address: "6037 S Garfield Ave, Burr Ridge, IL 60527",
    city: "Burr Ridge",
    state: "IL",
    zipCode: "60527",
    description: "Motorized shade covering to provide protection next to their sport court.",
    challenge: "This system had integrated drainage, motorized screens, a structural privacy wall, television planning, heaters, and lighting. The scope required careful coordination and a unique electrical layout to keep as much of the work concealed as possible.",
    solution: "",
    results: [],
    projectType: "Residential",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "ike-oak",
    name: "Ike & Oak",
    address: "6315 S Main St, Woodridge, IL 60517",
    city: "Woodridge",
    state: "IL",
    zipCode: "60517",
    description: "Multi-Bay commercial system to increase outdoor seating",
    challenge: "The client needed additional outdoor seating during COVID-era dining restrictions, so the project focused on creating a large covered outdoor space with a motorized pergola.",
    solution: "",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "matchbox",
    name: "Matchbox",
    address: "770 N Milwaukee Ave, Chicago, IL 60642",
    city: "Chicago",
    state: "IL",
    zipCode: "60642",
    description: "Multi-Bay commercial system to increase outdoor seating in front of old school rail car.",
    challenge: "The client had an old-school rail car and wanted covered seating in front of it, so motorized louvers were selected. The pergola covers the space between two bars under common ownership, helping connect the outdoor seating area.",
    solution: "",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "lou-malnati-naperville",
    name: "Lou Malnati Naperville",
    address: "131 w Jeffersom Ave, Naperville, IL 60540",
    city: "Naperville",
    state: "IL",
    zipCode: "60540",
    description: "Multi-bay commercial system planned to increase outdoor seating, with motorized screens on multiple sides for added weather control.",
    challenge: "The building was undergoing a renovation, and Lou Malnati's wanted to refresh the outdoor space. The system included a motorized pergola, motorized vinyl screens to help retain warmth, and heaters so the patio could support more seasonal use despite inclement weather.",
    solution: "",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "151-n-franklin",
    name: "151 N Franklin",
    address: "151 N Franklin St, Chicago, IL 60606",
    city: "Chicago",
    state: "IL",
    zipCode: "60606",
    description: "Multi-bay rooftop system planned to enhance tenant outdoor space.",
    challenge: "This project was on the rooftop of a downtown Chicago smart building. The goal was to provide shade for rooftop tenant spaces while working within a skyscraper setting with strong city exposure.",
    solution: "",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "palm-springs-airport",
    name: "Palm Springs Airport",
    address: "3400 E Tahquitz Canyon Way, Palm Springs, CA 92262",
    city: "Palm Springs",
    state: "CA",
    zipCode: "92262",
    description: "Multi-bay commercial system to provide shade for guests of several restaurants.",
    challenge: "The Palm Springs Airport had several tenants that were renovating their spaces. They wanted to create a cafe area for guests to relax and get drinks or food. We had to work integrating with existing structures in the space.",
    solution: "",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "hyatt-wicker-park",
    name: "Hyatt Wicker Park",
    address: "1551 W North Ave Ashland, Chicago, IL 60622",
    city: "Chicago",
    state: "IL",
    zipCode: "60622",
    description: "Multi-bay commercial system built into a concrete frame.",
    challenge: "This system was mounted into a concrete structure, creating a distinctive covered area for restaurant guests at a new Hyatt hotel. The project also needed to preserve the city-facing experience from the Wicker Park setting.",
    solution: "",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "boden-residence",
    name: "Boden",
    address: "211 Apple Tree Rd, Winnetka, IL 60093",
    city: "Winnetka",
    state: "IL",
    zipCode: "60093",
    description: "Multi-bay residential system planned around an outdoor kitchen and entertaining area.",
    challenge: "This system was part of a full landscape renovation. The client added appliances, a motorized pergola with heaters, and outdoor furniture to create a more protected dining and entertaining space. The project also used a custom color finish for the pergola.",
    solution: "",
    results: [],
    projectType: "Residential",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "dicks-roofing-troha",
    name: "Dicks Roofing (Troha)",
    address: "4286 98th Street, Pleasant Prairie, WI 53158",
    city: "Pleasant Prairie",
    state: "WI",
    zipCode: "53158",
    description: "Pavilion with dual motorized screens for insect and/or cold weather protection.",
    challenge: "The client recently retired and wanted a space to entertain and smoke cigars with friends, so EDG worked with them to enclose a gazebo with a wood-burning fire pit. The dual motorized screens help with insects in summer, while vinyl screens help retain heat in colder months.",
    solution: "",
    results: [
      "Protection from insects during summer months",
      "Vinyl screens retain heat during winter",
      "Space for cigar smoking and entertaining"
    ],
    projectType: "Residential",
    isComplete: false,
    missingFields: ["solution"]
  },
  {
    id: "dicks-roofing-project-2",
    name: "Dicks Roofing Project 2",
    address: "1525 48th Ct, Kenosha, WI",
    city: "Kenosha",
    state: "WI",
    zipCode: null,
    description: "Pavilion with dual motorized screens for insect and/or cold weather protection.",
    challenge: "The client recently retired and wanted a space to entertain and smoke cigars with friends, so EDG worked with them to enclose a gazebo with a wood-burning fire pit. The dual motorized screens help with insects in summer, while vinyl screens help retain heat in colder months.",
    solution: "",
    results: [],
    projectType: "Residential",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "haiti",
    name: "Haiti",
    address: "",
    city: "Unknown",
    state: "Unknown",
    zipCode: null,
    description: "Motorized pergolas were used to create window shutters on commercial showroom space.",
    challenge: "A commercial showroom for home building products in Haiti needed an open-air window concept. Louvers were planned to open and close so natural light and breezes could enter the space. When closed, the louvered system creates a metal wall condition for added security.",
    solution: "",
    results: [],
    projectType: "Commercial",
    isComplete: false,
    missingFields: ["address", "solution", "results"]
  },
  {
    id: "dalesandro",
    name: "Dalesandro",
    address: "1017 North Riverwalk St, Chicago, IL",
    city: "Chicago",
    state: "IL",
    zipCode: null,
    description: "Pergola with custom privacy wall on a Chicago boardwalk.",
    challenge: "This system is on the Riverwalk in Chicago. The client was renovating a condo unit, including the outdoor spaces. The system was designed to create more privacy from neighboring spaces while providing a more comfortable place to sit outside and entertain.",
    solution: "",
    results: [],
    projectType: "Residential",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "moody",
    name: "Moody",
    address: "18 E Hickory St, Hinsdale, IL 60521",
    city: "Hinsdale",
    state: "IL",
    zipCode: "60521",
    description: "Two-bay residential system planned to provide overhead coverage.",
    challenge: "This was a part of a larger landscape project and had integrated electrical and drainage so required lots of planning to make sure everything went together correctly.",
    solution: "",
    results: [],
    projectType: "Residential",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "tony-koch",
    name: "Tony",
    address: "211 Elm St, Glenview, IL 60025",
    city: "Glenview",
    state: "IL",
    zipCode: "60025",
    description: "4 Bay system with heaters for expansive entertaining space.",
    challenge: "Client wanted to have lots of space to entertain so created a space with four bays and heaters. They have tv's, fire table, and a fountain in their back yard.",
    solution: "",
    results: [],
    projectType: "Residential",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "avaella",
    name: "Avaella",
    address: "1138 Gilbert Avenue, Downers Grove, IL 60515",
    city: "Downers Grove",
    state: "IL",
    zipCode: "60515",
    description: "Double bay systems on several units.",
    challenge: "This condo association had four owners who wanted patio enclosures for their top-floor balconies. This required city coordination and code planning. The final concept included motorized pergolas, heaters, and motorized screens for more seasonal balcony use.",
    solution: "",
    results: [],
    projectType: "Residential",
    isComplete: false,
    missingFields: ["solution", "results"]
  },
  {
    id: "ohare",
    name: "O'Hare",
    address: "Bartlett, IL",
    city: "Bartlett",
    state: "IL",
    zipCode: "60103",
    description: "A Bartlett garage/outbuilding opening fitted with a wide motorized insect screen, shown with stills and a short motion clip as the screen closes and opens across the space.",
    challenge: "The opening needed insect protection and daily-use comfort without turning the garage/outbuilding into a permanent enclosed room. The screen had to span a wide opening cleanly while preserving the open-air feel when raised.",
    solution: "EDG specified a motorized Progressive Screens Gen 4 residential insect screen with an outside-mount white textured frame, black screen fabric, and motorized operation for the wide opening. The page shows the screen closed, partway through travel, and open so homeowners can understand how the system behaves in real use.",
    results: [],
    videoUrl: "/projects/ohare/screen-cycle-preview.mp4",
    videoPoster: "/projects/ohare/hero.jpg",
    videoCaption: "Short preview clip showing the motorized screen moving across the blue outbuilding opening.",
    projectType: "Residential",
    isComplete: false,
    missingFields: ["final results", "publication approval"]
  },
  {
    id: "hildebrant",
    name: "Hildebrandt",
    address: "Crystal Lake, IL",
    city: "Crystal Lake",
    state: "IL",
    zipCode: "60014",
    description: "A large Crystal Lake B200XL louvered pergola project, shown through installation stills and a short preview clip as the roof louvers are set into place.",
    challenge: "The patio needed a substantial motorized roof system that could cover a wide outdoor living area while keeping the structure visually clean against the home. The design had to coordinate the frame, louvers, lighting, controls, drainage, and electrical routing before installation.",
    solution: "EDG planned a coupled Brustor B200XL louvered pergola with left and right roof modules, RAL 7016 frame and louvers, Somfy RTS controls, and integrated louver lighting. The installation media shows the roof coming together from open frame to near-finished louver coverage.",
    results: [],
    videoUrl: "/projects/hildebrant/pergola-louver-install-preview.mp4",
    videoPoster: "/projects/hildebrant/1.jpg",
    videoCaption: "Short preview clip showing louver installation progress on the B200XL frame.",
    projectType: "Residential",
    isComplete: false,
    missingFields: ["final results", "publication approval"]
  }
];

// Statistics
export const projectStats = {
  total: 27,
  complete: 5,
  partial: 22,
  byType: {
    Commercial: 13,
    Residential: 14
  },
  byState: {
    IL: 23,
    CA: 1,
    WI: 2,
    Unknown: 1
  },
  byCity: {
    Chicago: 8,
    Northbrook: 1,
    LaGrange: 1,
    Richmond: 1,
    CrystalLake: 2,
    Bartlett: 1,
    StCharles: 1,
    BurrRidge: 2,
    Woodridge: 1,
    Naperville: 1,
    Winnetka: 1,
    Barrington: 1,
    Hinsdale: 1,
    Glenview: 1,
    DownersGrove: 1,
    PalmSprings: 1,
    PleasantPrairie: 1,
    Kenosha: 1,
    Unknown: 1
  }
};

// Data quality issues
export const dataQualityIssues = [
  { project: "Reddy/Arora", issue: "Duplicate challenge text (copy-paste error)", field: "challenge" },
  { project: "Haiti", issue: "Missing address", field: "address" },
  { project: "Dicks Roofing Project 2", issue: "Missing state in address", field: "address" },
  { project: "Multiple projects", issue: "Several imported project entries still need final solution notes, results, or publication approval before being treated as complete case studies", field: "solution, results, publication approval" }
];

export default projects;
