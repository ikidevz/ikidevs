import SectionHeader from "@/app/components/molecules/SectionHeader";
import Button from "@/app/components/atoms/Button";

const DETAILS = [
	{ label: "phone", val: "(+639) 763 351 225" },
	{ label: "email", val: "ikigamidevs@gmail.com" },
	{ label: "location", val: "Davao City, Philippines" },
	{ label: "github", val: "github.com/ikigamisama" },
];

export default function Contact() {
	return (
		<section id='contact' className='section'>
			<SectionHeader tag='~/contact' title="Let's Work Together" />

			<div className='contact-wrap'>
				<div className='contact-left'>
					<div className='contact-title'>Open to opportunities</div>
					<p className='contact-sub'>
						Actively seeking mid-level Data Engineer roles — remote or PH-based.
						Open to collaboration on modern data stack projects, fintech
						pipelines, and real-time systems.
					</p>
					<div className='hero-btns'>
						<Button href='mailto:franzmonzales@gmail.com' variant='primary'>
							./send_email.sh
						</Button>
						<Button
							href='https://github.com/ikigamisama'
							variant='ghost'
							target='_blank'
							rel='noopener noreferrer'>
							github profile
						</Button>
					</div>
				</div>

				<div className='contact-right'>
					{DETAILS.map(({ label, val }) => (
						<div key={label} className='contact-item'>
							<div className='contact-label'>{label}</div>
							<div className='contact-val'>{val}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
