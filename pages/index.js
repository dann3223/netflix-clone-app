import Head from "next/head";
import { MainView } from "../components/MainView";
import { MarketingList } from "../components/MarketingList";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Netflix Clone</title>
				<link rel="shortcut icon" href="/netflixlogo.svg" />
			</Head>

			<div className="text-white">
				<MainView />

				<div className="h-2 bg-gray"></div>

				<MarketingList />

				<div className="h-2 bg-gray"></div>

				<FAQ />

				<div className="h-2 bg-gray"></div>

				<Footer />
			</div>
		</>
	);
}
