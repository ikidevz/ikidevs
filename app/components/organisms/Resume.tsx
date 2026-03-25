import { EXPERIENCE, SKILL_CARDS, CERTIFICATIONS } from "@/app/data";
import SectionHeader from "@/app/components/molecules/SectionHeader";
import ExpItem from "@/app/components/molecules/ExpItem";
import SkillCard from "@/app/components/molecules/SkillCard";
import CertCard from "@/app/components/molecules/CertCard";

export default function Resume() {
	return (
		<section id='resume' className='section'>
			{/* Experience */}
			<SectionHeader tag='~/resume' title='Experience' />
			<div className='exp-grid'>
				{EXPERIENCE.map((e) => (
					<ExpItem
						key={e.company}
						date={e.date}
						role={e.role}
						company={e.company}
						desc={e.desc}
					/>
				))}
			</div>

			{/* Skills */}
			<SectionHeader tag='~/resume' title='Skills' mt />
			<div className='skills-grid'>
				{SKILL_CARDS.map((c) => (
					<SkillCard key={c.title} title={c.title} pills={c.pills} />
				))}
			</div>

			{/* Certifications */}
			<SectionHeader tag='~/resume' title='Certifications' mt />
			<div className='certs-grid'>
				{CERTIFICATIONS.map((c) => (
					<CertCard key={c.name} name={c.name} org={c.org} url={c.url} />
				))}
			</div>
		</section>
	);
}
