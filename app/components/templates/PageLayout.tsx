import Navbar from "@/app/components/organisms/Navbar";
import Hero from "@/app/components/organisms/Hero";
import StatsBar from "@/app/components/organisms/StatsBar";
import Resume from "@/app/components/organisms/Resume";
import Projects from "@/app/components/organisms/Projects";
import Analytics from "@/app/components/organisms/Analytics";
import Contact from "@/app/components/organisms/Contact";
import Footer from "@/app/components/organisms/Footer";
import ThemeSwitcher from "@/app/components/organisms/ThemeSwitcher";

export default function PageLayout() {
	return (
		<>
			<Navbar />
			<main className='page'>
				<Hero />
				<StatsBar />
				<Resume />
				<Projects />
				<Analytics />
				<Contact />
			</main>
			<ThemeSwitcher />
			<Footer />
		</>
	);
}
