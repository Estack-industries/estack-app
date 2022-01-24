import './Sidebar.css';
import {
	faChartLine,
	faHome,
	faCalendar,
	faCog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<a href="#">
						<FontAwesomeIcon icon={faChartLine} />
					</a>
				</div>
				<div className="sidebarMenu">
					<a href="#">
						<FontAwesomeIcon icon={faHome} />
					</a>
				</div>
				<div className="sidebarMenu">
					<a href="#">
						<FontAwesomeIcon icon={faCalendar} />
					</a>
				</div>
				<div className="sidebarMenu">
					<a href="#">
						<FontAwesomeIcon icon={faCog} />
					</a>
				</div>
			</div>
		</div>
	);
}
