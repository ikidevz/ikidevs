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
	{ n: "122", l: "REPOS" },
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
		date: "Nov 2025",
		title: "SyntheticDataCrafter",
		desc: "Hyper-realistic synthetic data generator — 750+ field types, real-world distributions, relational schemas, and instant export to 10+ formats.",
		url: "https://github.com/ikigamisama/SyntheticDataCrafter",
	},
	{
		tag: "ETL Pipeline",
		date: "Nov 2025",
		title: "Innovation & Connectivity ETL",
		desc: "Production-grade Airflow-orchestrated medallion architecture ETL pipeline with Great Expectations for data quality and alerting.",
		url: "https://github.com/ikigamisama/ETL_Innovation_Connectivity",
	},
	{
		tag: "Streaming",
		date: "Nov 2025",
		title: "RemitFlow PH",
		desc: "Kappa architecture streaming analytics platform for monitoring OFW remittances — real-time fraud detection, corridor analytics, channel tracking.",
		url: "https://github.com/ikigamisama/RemitFlowPH",
	},
	{
		tag: "Real-time",
		date: "Nov 2025",
		title: "WalletFlow-PH",
		desc: "Production-grade data engineering pipeline processing 100,000+ transactions per minute for Philippine e-wallet systems with real-time fraud detection.",
		url: "https://github.com/ikigamisama/Walletflow-PH",
	},
	{
		tag: "Lakehouse",
		date: "Nov 2025",
		title: "E-commerce Data Lakehouse",
		desc: "Production-ready Data Lakehouse using Apache Airflow 3.1, Delta Lake, MinIO S3-compatible storage, and Apache Spark cluster for distributed processing.",
		url: "https://github.com/ikigamisama/DataLakehouse-Delta",
	},
	{
		tag: "Tooling",
		date: "Oct 2025",
		title: "Iki-Scraper",
		desc: "Robust production-ready async web scraper built with Playwright, Tenacity, and a custom ProxyRotator — designed for ETL and Airflow pipeline integration.",
		url: "https://github.com/ikigamisama/Iki-Scraper",
	},
];

export const ANALYTICS_PROJECTS = [
	{
		tag: "Analytics",
		date: "2025",
		title: "Supply Chain Analytics Dashboard",
		desc: "Comprehensive interactive analytics platform for end-to-end supply chain visibility — executive performance, supplier relationships, production ops, inventory health, shipment logistics.",
		url: "https://github.com/ikigamisama/Supply-Chain-Analytics-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Retail Sales KPI Dashboard",
		desc: "Comprehensive interactive analytics dashboard built on Streamlit providing real-time insights into retail business performance.",
		url: "https://github.com/ikigamisama/Retail-Sales-KPI-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Customer Cohort Analysis Dashboard",
		desc: "Streamlit dashboard for analyzing customer cohorts, revenue trends, and behavioral patterns with deep drill-down capabilities.",
		url: "https://github.com/ikigamisama/Customer-Cohort-Analysis-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Customer Churn Analysis Dashboard",
		desc: "Streamlit dashboard for analyzing customer churn patterns with interactive visualizations and predictive churn modeling.",
		url: "https://github.com/ikigamisama/Ultimate-Customer-Churn-Analysis-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "US Candy Distributor Analytics",
		desc: "Dark-themed, fully interactive analytics dashboard built with Streamlit and Plotly for distributor sales intelligence.",
		url: "https://github.com/ikigamisama/US-Candy-Distributor-Analytics-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Marketing Campaign Analytics",
		desc: "Interactive multi-tab analytics dashboard for exploring marketing campaign performance across companies, channels, audiences, and time.",
		url: "https://github.com/ikigamisama/Marketing-Dashboard-Retail-Sales-Campaign-Analysis",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "E-Commerce Sales Analytics",
		desc: "Comprehensive interactive e-commerce sales dashboard built with Streamlit + Plotly — KPIs, trends, and cohort analysis.",
		url: "https://github.com/ikigamisama/E-Commerce-Sales-Analytics-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Customer Behavior Analytics",
		desc: "Deep-dive customer analytics dashboard revealing purchasing patterns, segmentation, RFM analysis, and behavioral insights.",
		url: "https://github.com/ikigamisama/Customer-Behavior-Analytics",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Coffee Shop Sales Dashboard",
		desc: "Clean interactive coffee shop analytics using Streamlit + Plotly — time-series trends and product performance breakdowns.",
		url: "https://github.com/ikigamisama/Simple-Coffee-Shop-Sales-Dashboard",
	},
	{
		tag: "Analytics",
		date: "2025",
		title: "Sales Analysis Dashboard",
		desc: "End-to-end sales performance dashboard for business metrics, revenue insights, and trend visualization.",
		url: "https://github.com/ikigamisama/Sales-Analysis-Dashboard-Streamlit",
	},
];

export const SOCIAL_LINKS = [
	{ label: "GitHub", url: "https://github.com/ikigamisama", icon: "github" },
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
