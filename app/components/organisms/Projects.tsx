import { HIGHLIGHT_PROJECTS } from "@/app/data";
import SectionHeader from "@/app/components/molecules/SectionHeader";
import FeaturedCard from "@/app/components/molecules/FeaturedCard";
import ProjectCard from "@/app/components/molecules/ProjectCard";

export default function Projects() {
	return (
		<section id='projects' className='section'>
			<SectionHeader tag='~/projects' title='Highlight Projects' />

			<FeaturedCard
				title='Modern Data Stack Cheat Sheet'
				desc='An interactive Streamlit web app I built — a practical, engineering-focused reference guide covering tools, patterns, and decisions in the modern data ecosystem. Live and deployed.'
				url='https://modern-data-stack-cheat-sheet-ikigami.streamlit.app'
				linkLabel='modern-data-stack-cheat-sheet-ikigami.streamlit.app'
				footerTag='Streamlit · Live App'
			/>

			<div className='projects-grid'>
				{HIGHLIGHT_PROJECTS.map((p) => (
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
