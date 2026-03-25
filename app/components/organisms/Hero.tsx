import { STACK_SKILLS, SOCIAL_LINKS } from "@/app/data";
import Button from "@/app/components/atoms/Button";
import Tag from "@/app/components/atoms/Tag";
import { getIcon } from "@/app/components/atoms/Icons";
import ProfileRing from "@/app/components/molecules/ProfileRing";
import StackPanel from "@/app/components/molecules/StackPanel";

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
					<Button
						href='https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/resume/franz_monzales_cv.pdf'
						variant='primary'
						target='_blank'
						rel='noopener noreferrer'>
						./download_cv.sh
					</Button>
					<Button href='#projects' variant='ghost'>
						ls ./projects
					</Button>
				</div>

				<div className='hero-tags anim-5'>
					{SOCIAL_LINKS.map(({ label, url, icon }) => (
						<Tag key={icon} href={url} ariaLabel={label}>
							{getIcon(icon, 22)}
						</Tag>
					))}
				</div>
			</div>

			{/* RIGHT — profile image + stack.yml */}
			<div className='hero-side'>
				<ProfileRing
					src='https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/resume/iki.png'
					alt='Franz Monzales'
				/>
				<StackPanel skills={STACK_SKILLS} />
			</div>
		</section>
	);
}
