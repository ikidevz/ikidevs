import { FLEX_PROJECTS, HIGHLIGHT_PROJECTS } from "@/app/data";
import SectionHeader from "@/app/components/molecules/SectionHeader";
import FeaturedCard from "@/app/components/molecules/FeaturedCard";
import ProjectCard from "@/app/components/molecules/ProjectCard";

export default function Projects() {
	return (
		<section id='projects' className='section'>
			<SectionHeader tag='~/projects' title='Highlight Projects' />

			{HIGHLIGHT_PROJECTS.map((p) => (
				<FeaturedCard
					key={p.title}
					tag={p.tag}
					date={p.date}
					coverImg={p.coverImg}
					title={p.title}
					desc={p.desc}
					url={p.url}
					linkLabel={p.linkLabel}
					footerTag={p.footerTag}
				/>
			))}

			<div className='projects-grid'>
				{FLEX_PROJECTS.map((p) => (
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
