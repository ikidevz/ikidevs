import { STACK_SKILLS, SOCIAL_LINKS } from "@/app/data";
import { getIcon } from "./Icons";

export default function Hero() {
	return (
		<section id='home' className='hero-section'>
			{/* LEFT — text content */}
			<div className='hero-main'>
				<div className='prompt-line anim-0'>
					<span className='p-user'>guest@iki:~$ </span>whoami
					<span className='cursor' />
				</div>

				<h1 className='hero-name anim-1'>
					Franz
					<br />
					<span className='acc'>Monzales</span>
				</h1>

				<div className='hero-chip anim-2'>// aspiring_data_engineer</div>

				<p className='hero-desc anim-3'>
					With a foundation in Software Development and Data Analysis, I&apos;m
					now focused on Data Engineering — building automated ETL pipelines,
					optimizing data workflows, and enabling teams to unlock value from
					data at scale.
				</p>

				<div className='hero-btns anim-4'>
					<a
						href='https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/resume/franz_monzales_cv.pdf'
						className='btn-primary'
						target='_blank'
						rel='noopener noreferrer'>
						./download_cv.sh
					</a>
					<a href='#projects' className='btn-ghost'>
						ls ./projects
					</a>
				</div>

				<div className='hero-tags anim-5'>
					{SOCIAL_LINKS.map(({ label, url, icon }) => (
						<a
							key={icon}
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className='tag tag-link'
							aria-label={label}>
							{getIcon(icon, 22)}
						</a>
					))}
				</div>
			</div>

			{/* RIGHT — profile image + stack.yml */}
			<div className='hero-side'>
				{/* Profile image with spinning neon ring */}
				<div className='profile-img-wrap anim-left'>
					<div className='profile-img-ring'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src='https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/resume/iki.png'
							alt='Franz Monzales'
							className='profile-img'
							loading='eager'
						/>
					</div>
				</div>

				{/* Stack skill bars */}
				<div className='side-panel anim-left'>
					<div className='side-panel-title'>// stack.yml</div>
					{STACK_SKILLS.map((s) => (
						<div key={s.name} className='skill-row'>
							<span className='skill-name'>{s.name}</span>
							<div className='bar-bg'>
								<div
									className={`bar-fill${s.dim ? " mid" : ""}`}
									style={{ width: `${s.pct}%` }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
