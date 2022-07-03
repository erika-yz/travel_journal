import img_location from "../images/location.png";
export default function Content(props) {
	return (
		<div className="place">
			<img className="place--image" src={props.place.imageUrl} alt="" />
			<div className="place--description">
				<div className="place--location">
					<img src={img_location} alt="location symbol"/>
					<span>{props.place.location}</span>
					<a href={props.place.googleMapsUrl}>View on Google Maps</a>
				</div>
				<span className="place--name">{props.place.title}</span>
				<span>
					<p className="place--date">{props.place.startDate} - {props.place.endDate}</p>
				</span>
				<p className="place--detail">
					{props.place.description}
				</p>
			</div>
		</div>
	);
}
