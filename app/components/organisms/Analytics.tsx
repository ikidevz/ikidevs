import { ANALYTICS_PROJECTS } from "@/app/data";
import SectionHeader from "@/app/components/molecules/SectionHeader";
import ProjectCard from "@/app/components/molecules/ProjectCard";

export default function Analytics() {
	return (
		<section id='analytics' className='section'>
			<SectionHeader tag='~/projects' title='Analytics & Visualization' />

			<div className='analytics-grid'>
				{ANALYTICS_PROJECTS.map((p) => (
					<ProjectCard
						key={p.title}
						tag={p.tag}
						date={p.date}
						title={p.title}
						desc={p.desc}
						url={p.url}
					/>
				))}
			</div>
		</section>
	);
}
