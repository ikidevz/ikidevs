export const THEMES = [
	{ id: "plasma", label: "plasma.cyan", swatch: "#00e5ff" },
	{ id: "matrix", label: "matrix.green", swatch: "#00ff41" },
	{ id: "infrared", label: "infrared.red", swatch: "#ff3d00" },
	{ id: "voltage", label: "voltage.yellow", swatch: "#ffe600" },
	{ id: "steel", label: "steel.mono", swatch: "#c8d8e8" },
	{ id: "neon", label: "neon.magenta", swatch: "#f700ff" },
	{ id: "cobalt", label: "cobalt.blue", swatch: "#4d9fff" },
	{ id: "uranium", label: "uranium.lime", swatch: "#b8ff00" },
	{ id: "arctic", label: "arctic.ice", swatch: "#78d4ff" },
	{ id: "overclocked", label: "overclocked.orange", swatch: "#ff6d00" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];
export const DEFAULT_THEME: ThemeId = "arctic";

export const STACK_SKILLS = [
	{ name: "Python", pct: 95, dim: false },
	{ name: "SQL", pct: 92, dim: false },
	{ name: "Airflow", pct: 88, dim: false },
	{ name: "dbt", pct: 85, dim: false },
	{ name: "Spark", pct: 75, dim: true },
	{ name: "Kafka", pct: 70, dim: true },
];

export const STATS = [
	{ n: "5+", l: "YRS_EXP" },
	{ n: "130+", l: "REPOS" },
	{ n: "15+", l: "DATA_PROJ" },
	{ n: "6", l: "CERTS" },
];

export const EXPERIENCE = [
	{
		date: "July 2021 — Feb 2023",
		role: "Web Developer",
		company: "Acquirely",
		desc: "Full-stack web development, building scalable and user-friendly applications using modern frameworks like Next.js and React.",
	},
	{
		date: "2019 — 2020",
		role: "Web Developer",
		company: "Flatworld Solutions",
		desc: "Developed and maintained web applications, focusing on front-end performance and back-end integration.",
	},
	{
		date: "2018 — 2019",
		role: "Front End Developer",
		company: "Applicable Limited",
		desc: "Built responsive UI components and ensured cross-browser compatibility across product lines.",
	},
	{
		date: "Feb 2017 — Sept 2018",
		role: "IT Staff / Web Developer",
		company: "Maligaya Taxi",
		desc: "Managed internal IT infrastructure and developed web tools to streamline operations.",
	},
];

export const SKILL_CARDS = [
	{
		title: "// Orchestration",
		pills: ["Apache Airflow", "dbt", "Docker", "CI/CD"],
	},
	{
		title: "// Big Data",
		pills: ["Apache Spark", "Kafka", "Delta Lake", "MinIO"],
	},
	{
		title: "// Databases",
		pills: ["PostgreSQL", "MySQL", "MongoDB"],
	},
	{
		title: "// Languages",
		pills: ["Python", "SQL", "JavaScript"],
	},
	{
		title: "// Analytics & ML",
		pills: ["Pandas", "NumPy", "Scikit-learn", "Plotly"],
	},
	{
		title: "// Web & Frontend",
		pills: ["Next.js", "React"],
	},
];

export const CERTIFICATIONS = [
	{
		name: "Data Engineer Certificate",
		org: "365 Data Science",
		url: "https://learn.365datascience.com/certificates/DD-0FA99845A0/",
	},
	{
		name: "Data Engineering Professional",
		org: "DeepLearning.AI · Coursera",
		url: "https://www.coursera.org/account/accomplishments/professional-cert/1AT47XEDRYSM",
	},
	{
		name: "IBM Data Science Specialization",
		org: "IBM · Coursera",
		url: "https://learn.365datascience.com/certificates/DD-DFAA0CDAE2/",
	},
	{
		name: "IBM Data Analyst Specialization",
		org: "IBM · Coursera",
		url: "https://learn.365datascience.com/certificates/DD-46F49544DE/",
	},
	{
		name: "Data Scientist Certificate",
		org: "365 Data Science",
		url: "https://www.coursera.org/account/accomplishments/specialization/2QEGUBE3VTFZ",
	},
	{
		name: "Data Analyst Certificate",
		org: "365 Data Science",
		url: "https://www.coursera.org/account/accomplishments/specialization/7SNWN9YKGZVR",
	},
];

export const HIGHLIGHT_PROJECTS = [
	{
		tag: "Data Engineering",
		date: "May 2026",
		title: "ETL-Table-Driven",
		desc: "Production-grade, metadata-driven ETL framework where all business logic lives in configuration (JSON). Zero Python needed to add new pipelines.",
		url: "https://ikiblog.vercel.app/posts/table-driven-etl",
		github: "https://github.com/ikigamisama/ETL-Table-Driven",
	},
	{
		tag: "Data Engineering",
		date: "May 2026",
		title: "BSP AMLA Compliance Suspicious Transaction Reporting Pipeline",
		desc: "A production-grade Apache Airflow + dbt data pipeline for Bank of Philippine Islands (BSP) Anti-Money Laundering (AML) and Suspicious Transaction Reporting (STR) compliance automation.",
		url: "https://ikiblog.vercel.app/posts/i-built-a-production-grade-aml-compliance-pipeline-for-philippine-banking",
		github:
			"https://github.com/ikidevz/BSP-AMLA-Compliance-Suspicious-Transaction-Reporting-Pipeline",
	},
	{
		tag: "Data Engineering",
		date: "May 2026",
		title: "PH-Multi-Subsidiary-Data-Lakehouse",
		desc: "A production-grade Philippine conglomerate data platform with real CRUD operations, change data capture (CDC), and medallion architecture. Eight department microservices (FastAPI) with persistent PostgreSQL databases. Debezium captures all changes via Kafka CDC. Airflow orchestrates medallion transformations. Apache Superset provides BI dashboards.",
		url: "https://ikiblog.vercel.app/posts/production-grade-data-lakehouse-for-a-philippine-multi-subsidiary-conglomerate",
		github: "https://github.com/ikidevz/PH-Multi-Subsidiary-Data-Lakehouse",
	},
	{
		tag: "Data Engineering",
		date: "May 2026",
		title: "Landed Cost Calculator Pipeline",
		desc: "End-to-end production-grade logistics pipeline for Philippine imports. Calculates full landed costs with Kafka, Airflow, PostgreSQL, dbt, and Metabase.",
		url: "https://ikiblog.vercel.app/posts/building-a-real-time-import-cost-pipeline-from-zero-kafka-airflow-3-dbt-postgresql-with-metabase-on-docker",
		github:
			"https://github.com/ikidevz/Landed-Cost-Calculator-Logistic-Data-Pipeline",
	},
	{
		tag: "Data Engineering",
		date: "May 2026",
		title: "PH Port Congestion Monitor",
		desc: "Real-time + batch pipeline monitoring vessel activity and port congestion in major Philippine ports using Airflow, dbt (Medallion), PostgreSQL & Grafana.",
		url: "https://ikiblog.vercel.app/posts/building-a-real-time-port-congestion-monitor-for-philippine-ports",
		github:
			"https://github.com/ikidevz/PH-Port-Congestion-Monitor-Data-Pipeline",
	},
	{
		tag: "Data Engineering",
		date: "May 2026",
		title: "Retail Medallion Data Pipeline",
		desc: "Full Medallion Architecture (Bronze → Silver → Gold) for retail data across 50+ Philippine stores. Features synthetic data generation, Polars, Star Schema, and layered Airflow DAGs.",
		url: "https://ikiblog.vercel.app/posts/building-a-real-time-retail-data-pipeline-with-medallion-architecture",
		github: "https://github.com/ikidevz/Retail-Medallion-Data-Pipeline",
	},
	{
		tag: "Streaming",
		date: "Nov 2025",
		title: "RemitFlow PH",
		desc: "Microservices + streaming remittance processing pipeline with TimescaleDB for time-series and Streamlit dashboards. Real-time analytics for OFW remittances.",
		url: "https://ikiblog.vercel.app/posts/building-a-real-time-ofw-remittance-intelligence-platform",
		github: "https://github.com/ikigamisama/RemitFlowPH",
	},
	{
		tag: "Data Engineering",
		date: "Nov 2025",
		title: "SyntheticDataCrafter",
		desc: "Hyper-realistic synthetic data generator — 750+ field types, real-world distributions, relational schemas, and instant export to 10+ formats.",
		url: "https://github.com/ikidevz/SyntheticDataCrafter",
	},
	{
		tag: "Tooling",
		date: "Oct 2025",
		title: "Iki-Scraper",
		desc: "Robust production-ready async web scraper built with Playwright, Tenacity, and custom ProxyRotator — designed for ETL & Airflow integration.",
		url: "https://github.com/ikidevz/Iki-Scraper",
	},
];

export const ANALYTICS_PROJECTS = [
	{
		tag: "Analytics",
		date: "2025",
		title: "Supply Chain Analytics Dashboard",
		desc: "Comprehensive interactive analytics platform for end-to-end supply chain visibility — executive performance, supplier relationships, production ops, inventory health, shipment logistics.",
		url: "https://github.com/ikidevz/Supply-Chain-Analytics-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Retail Sales KPI Dashboard",
		desc: "Comprehensive interactive analytics dashboard built on Streamlit providing real-time insights into retail business performance.",
		url: "https://github.com/ikidevz/Retail-Sales-KPI-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Customer Cohort Analysis Dashboard",
		desc: "Streamlit dashboard for analyzing customer cohorts, revenue trends, and behavioral patterns with deep drill-down capabilities.",
		url: "https://github.com/ikidevz/Customer-Cohort-Analysis-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Customer Churn Analysis Dashboard",
		desc: "Streamlit dashboard for analyzing customer churn patterns with interactive visualizations and predictive churn modeling.",
		url: "https://github.com/ikidevz/Ultimate-Customer-Churn-Analysis-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "US Candy Distributor Analytics",
		desc: "Dark-themed, fully interactive analytics dashboard built with Streamlit and Plotly for distributor sales intelligence.",
		url: "https://github.com/ikidevz/US-Candy-Distributor-Analytics-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Marketing Campaign Analytics",
		desc: "Interactive multi-tab analytics dashboard for exploring marketing campaign performance across companies, channels, audiences, and time.",
		url: "https://github.com/ikidevz/Marketing-Dashboard-Retail-Sales-Campaign-Analysis",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "E-Commerce Sales Analytics",
		desc: "Comprehensive interactive e-commerce sales dashboard built with Streamlit + Plotly — KPIs, trends, and cohort analysis.",
		url: "https://github.com/ikidevz/E-Commerce-Sales-Analytics-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Customer Behavior Analytics",
		desc: "Deep-dive customer analytics dashboard revealing purchasing patterns, segmentation, RFM analysis, and behavioral insights.",
		url: "https://github.com/ikidevz/Customer-Behavior-Analytics",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Coffee Shop Sales Dashboard",
		desc: "Clean interactive coffee shop analytics using Streamlit + Plotly — time-series trends and product performance breakdowns.",
		url: "https://github.com/ikidevz/Simple-Coffee-Shop-Sales-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Sales Analysis Dashboard",
		desc: "End-to-end sales performance dashboard for business metrics, revenue insights, and trend visualization.",
		url: "https://github.com/ikidevz/Sales-Analysis-Dashboard-Streamlit",
	},
];

export const SOCIAL_LINKS = [
	{ label: "GitHub", url: "https://github.com/ikidevz", icon: "github" },
	{
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/franz-monzales-671775135/",
		icon: "linkedin",
	},
	{ label: "X / Twitter", url: "https://x.com/ikigamidevs", icon: "x" },
	{
		label: "Kaggle",
		url: "https://www.kaggle.com/franzmonzales",
		icon: "kaggle",
	},
];
