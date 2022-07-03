import Header from "./components/Navbar";
import Place from "./components/Place";
import style_content from './styles/place.css';
import data from './data';

export default function App() {
  const placeElements = data.map(place => {
    return (
      <Place
        key = {place.id}
        place = {place}
      />
    )
  })

	return (
		<div>
			<Header />
			<section className="place--list">
				{placeElements}
			</section>
		</div>
	);
}
