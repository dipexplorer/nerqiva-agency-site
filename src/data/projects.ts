export interface Project {
  id: string;
  slug: string;
  number: string;
  name: string;
  type: string;
  tagline: string;
  challenge: string;
  whyItMattered: string;
  constraints: string[];
  approach: string;
  architecture: string;
  engineeringDecisions: string[];
  implementation: string;
  outcome: string;
  lessons: string;
  stack: string[];
  gradient: string;
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: "sahidawa",
    slug: "sahidawa",
    number: "01",
    name: "SahiDawa",
    type: "Open-Source Verification Platform",
    tagline: "Medicine Authentication Network & Regional Database",
    challenge: "Counterfeit and sub-standard medicines pose a critical threat to citizens in developing regions. Verification systems need to be extremely high-speed, cost-effective for end-users, and robust enough to handle high volumes of simultaneous verification requests without falling offline.",
    whyItMattered: "Direct verification saves lives. By allowing citizens to instantly verify if a batch number, manufacturer, and packaging detail matches regional drug databases, SahiDawa establishes a layer of protection that bypassed legacy distribution blindspots.",
    constraints: [
      "Must operate on basic mobile networks (3G/low bandwidth)",
      "Zero-trust validation of input data",
      "Must scale to thousands of active queries during peak hours"
    ],
    approach: "We designed a microservices network that splits query parsing from storage operations. To populate regional drug catalogs accurately, the project was launched open-source, accumulating massive development support through GSsoC.",
    architecture: "Ingestion queues process scanned barcodes, parsing them into format-neutral models. A PostgreSQL read-replica cluster speeds up lookups, while an automated CI/CD pipeline manages development contributions across hundreds of forks.",
    engineeringDecisions: [
      "Established strict type gates for multi-developer contributions",
      "Constructed a high-concurrency barcode decoding pipeline",
      "Configured global database replica caching for sub-100ms response times"
    ],
    implementation: "The platform integrates standard scanning protocols with light verification payloads, allowing citizens to use web browsers on older devices to scan and confirm packaging information against the master ledger.",
    outcome: "Successfully scaled to 244+ active open-source contributors with over 1,375 PRs processed, proving that public health tools can be built reliably with distributed community engineering.",
    lessons: "Managing community codebase additions requires absolute clarity in automated testing. Without strict linting and integration pipelines, decentralized contributions can introduce runtime crashes.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    accentColor: "bg-blue-500",
  },
  {
    id: "acadence",
    slug: "acadence",
    number: "02",
    name: "Acadence",
    type: "Decision-Support Platform",
    tagline: "Academic Attendance Decision-Support System",
    challenge: "Academic institutions struggled with fragmented attendance data, leading to delayed academic interventions and high student drop-out rates. Legacy software lacked predictive capability to identify at-risk students before their performance declined.",
    whyItMattered: "Early identification is the key to student retention. Acadence was built to aggregate biometric scanner logs and manual classroom checklists into a unified real-time analytics portal.",
    constraints: [
      "Strict data privacy regulations (FERPA-compliant handling)",
      "Integration with legacy on-premise attendance scanners",
      "Sub-second load times for large classroom grids"
    ],
    approach: "We established a secure data pipeline that processes real-time ingestion from local scanners and synchronizes with institutional databases, creating active alert dashboards for administrators.",
    architecture: "Built on an Express/MongoDB stack for flexible schema storage of historical logs, utilizing Redis cache layers to compute real-time classroom statistics without hitting the primary database on every poll.",
    engineeringDecisions: [
      "Designed a real-time scanner syncing daemon",
      "Built a secure role-based access control (RBAC) middleware",
      "Optimized MongoDB indexing for historical telemetry scans"
    ],
    implementation: "Classroom rosters are rendered as interactive grids. When attendance falls below a defined statistical threshold, the system triggers automated email/SMS workflows to counselors.",
    outcome: "Unified attendance data across multiple campuses, decreasing administrative warning delay times from 14 days down to 10 minutes.",
    lessons: "Integrating with outdated on-premise hardware requires clean error isolation. The web app should never crash because a local scanner fails its sync cycle.",
    stack: ["React", "Express", "MongoDB", "Redis", "Framer Motion"],
    gradient: "from-purple-500/10 to-pink-500/10",
    accentColor: "bg-purple-500",
  },
  {
    id: "gridmind",
    slug: "gridmind",
    number: "03",
    name: "GridMind",
    type: "IoT Data Pipeline",
    tagline: "Electrical Grid Telemetry & Anomaly Detection",
    challenge: "Electrical grid operators require instant telemetry updates on transformer temperatures and load values. Legacy systems relied on periodic polling, which was too slow to detect load surges, leading to expensive transformer burnouts.",
    whyItMattered: "Preventing hardware damage saves cities millions in infrastructure costs and avoids widespread blackouts.",
    constraints: [
      "Telemetric ingestion must handle 10,000+ data points per second",
      "Zero network congestion over narrow grid channels",
      "Instantaneous alerts when thermal readings exceed safety levels"
    ],
    approach: "We designed a lightweight WebSocket server that ingests sensor streams and writes them directly to a time-series database. An anomaly detection engine evaluates incoming telemetry on-the-fly.",
    architecture: "Sensors stream payloads to a FastAPI socket server. Data is stored in InfluxDB, while a React dashboard polls the cache to display real-time grid metrics.",
    engineeringDecisions: [
      "Utilized time-series database optimized for telemetric queries",
      "Configured asynchronous ingestion loops to prevent database locking",
      "Created visual status indicators using canvas rendering for large grid grids"
    ],
    implementation: "The system provides grid maps that glow or alert operators when hardware sensors report temperatures outside standard deviation parameters.",
    outcome: "Reduced grid anomaly response times from hours to milliseconds, successfully preventing grid overheating incidents during high-load periods.",
    lessons: "IoT data ingestion requires aggressive filtering. Normal sensor pings should be compressed at the edge; only anomalous metrics should demand full bandwidth visualization.",
    stack: ["Python", "FastAPI", "InfluxDB", "React", "WebSockets"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    accentColor: "bg-emerald-500",
  },
  {
    id: "legalhub",
    slug: "legalhub",
    number: "04",
    name: "LegalHub",
    type: "Workflow Automation Portal",
    tagline: "Legal Document Processing & Contract Management",
    challenge: "UNKNOWN — AWAITING CLIENT VERIFICATION. (This is a place-holder case study until confirmation on the exact problem LegalHub solves is provided).",
    whyItMattered: "UNKNOWN — AWAITING CLIENT VERIFICATION. (Awaiting context on the workflow bottlenecks and business impact of the LegalHub portal).",
    constraints: [
      "UNKNOWN — AWAITING CLIENT VERIFICATION",
      "Highly secure document encryption requirements",
      "Document parsing limits"
    ],
    approach: "We are designing a secure contract pipeline that converts scanned PDFs into indexed document structures, allowing legal teams to search and query terms quickly.",
    architecture: "Next.js frontend communicating with a serverless backend. Document storage is secured behind row-level security (RLS) layers in PostgreSQL.",
    engineeringDecisions: [
      "UNKNOWN — AWAITING CLIENT VERIFICATION",
      "Strict data encryption at rest and in transit",
      "Asynchronous document processing workers"
    ],
    implementation: "Document uploads are processed via secure buckets, triggering database entries for review by legal staff.",
    outcome: "System structure set up and ready to receive production document telemetry.",
    lessons: "Security must be baked into document pipelines from day one. Retrofitting encryption after launch is highly complex.",
    stack: ["Next.js", "PostgreSQL", "Supabase", "TypeScript"],
    gradient: "from-amber-500/10 to-orange-500/10",
    accentColor: "bg-amber-500",
  }
];
