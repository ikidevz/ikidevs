import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Franz Monzales — Data Engineer",
	description:
		"Data Engineer specializing in ETL pipelines, Apache Spark, Kafka, dbt, and Airflow. Based in Davao City, Philippines.",
	keywords: [
		"Data Engineer",
		"ETL",
		"Apache Spark",
		"Kafka",
		"Airflow",
		"dbt",
		"Python",
		"Philippines",
	],
	authors: [{ name: "Franz Monzales" }],
	openGraph: {
		title: "Franz Monzales — Data Engineer",
		description:
			"Building automated ETL pipelines, optimizing data workflows, and enabling teams to unlock value from data at scale.",
		type: "website",
		url: "https://ikidevs.vercel.app",
	},
	twitter: { card: "summary", creator: "@iikigami" },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=IBM+Plex+Mono:wght@400;500;700&family=DM+Sans:wght@300;400;500&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
