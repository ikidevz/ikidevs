interface ProfileRingProps {
	src: string;
	alt: string;
}

export default function ProfileRing({ src, alt }: ProfileRingProps) {
	return (
		<div className='profile-img-wrap anim-left'>
			<div className='profile-img-ring'>
				<img src={src} alt={alt} className='profile-img' loading='eager' />
			</div>
		</div>
	);
}
