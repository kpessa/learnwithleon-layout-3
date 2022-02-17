import './App.scss';
import styled from 'styled-components';
import imgSrc from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
export const Context = React.createContext();

const Header = styled.header`
	background-color: black;
	height: 40px;
	color: white;
	border: 1px solid grey;
	&.show {
		background-color: white;
		color: black;
	}
`;

const Nav = styled.nav`
	max-width: 1080px;
	margin: 0 auto;
	height: 100%;
	position: relative;
`;

const Ul = styled.ul`
	list-style: none;
	padding: 0;
`;

const Img = styled.img`
	max-width: 100%;
	height: 70%;
	float: left;
	margin-left: 1rem;
	margin-right: 0.5rem;
`;

const SignIn = styled.a`
	float: left;
	height: 100%;
	display: grid;
	grid-auto-flow: column;
	width: max-content;
	place-items: center;
	border-left: 1px solid grey;
`;

const UserIcon = styled(FontAwesomeIcon)`
	margin-left: 1rem;
	margin-right: 1rem;
	font-size: 20px;
`;

const SignInText = styled.span`
	height: 100%;
	margin-left: 0.5rem;
	margin-right: 5rem;
	font-size: 1rem;
	font-weight: 600;
	line-height: 40px;
	vertical-align: middle;
	@media (max-width: 1000px) {
		display: none;
	}
`;

const NavLinks = styled.ul`
	float: left;
	clear: neither;
	height: 100%;
`;

const NavLink = styled.li`
	display: inline-block;
	padding: 0.5rem 1rem;
	height: 100%;
	border-left: 1px solid grey;
	border-right: 1px solid grey;
	&.show {
		border-bottom: 3px solid black;
	}
`;

const Search = styled.div`
	height: 100%;
	float: right;
	display: grid;
	align-items: center;
	position: relative;
`;
const SearchInput = styled.input`
	display: none;
	margin-right: 0.5rem;
	height: 65%;
	font-weight: bold;
	padding: 0.5rem;
	@media (min-width: 600px) {
		display: revert;
	}
`;

const SearchIcon = styled(FontAwesomeIcon)`
	padding-left: 1rem;
	padding-right: 1rem;
	@media (min-width: 600px) {
		font-size: 0.8rem;
		color: black;
		position: absolute;
		right: 0;
		top: 12px;

		/* margin-top: -50%; */
	}
`;

const DownChevron = styled.span`
	position: absolute;
	right: 0.5rem;
`;

const MoreDiv = styled.div`
	/* transition styles */
	display: none;
	&.show {
		display: revert;
	}
	/* transition styles */
	clear: both;
	padding: 0.5rem;
	border-bottom: 1px solid grey;
	color: black;
	font-family: Gotham, sans-serif;
	@media (min-width: 600px) and (max-width: 1000px) {
		grid-template-columns: 1fr 3fr;
		&.show {
			display: grid;
		}
	}

	@media (min-width: 1000px) {
		grid-template-columns: 1fr 5fr;
		&.show {
			display: grid;
		}
	}
`;

const MoreHeader = styled.h1`
	text-transform: uppercase;
	display: inline-block;
	font-size: 2rem;
	font-weight: 500;
	@media (max-width: 600px) {
		display: inline-block;
		width: 33%;
	}
	@media (min-width: 600px) {
		padding-top: 0;
		vertical-align: 0;
	}
`;

const MoreUl = styled.ul`
	@media (max-width: 600px) {
		display: inline;
	}
`;

const MoreLi = styled.li`
	vertical-align: middle;
	display: inline-block;
	width: 33%;
	font-weight: 600;
	padding: 0.5rem;

	&:hover {
		background: black;
		color: white;
	}

	@media (min-width: 1000px) {
		width: 20%;
	}
`;

function More() {
	let remainingLinks = React.useContext(Context).moreLinks;

	return (
		<MoreDiv>
			<MoreHeader>
				<a href="#">More</a>
			</MoreHeader>

			<MoreUl>
				{remainingLinks.map(link => (
					<a href="#" key={link + '_a'}>
						<MoreLi key={link + '_li'}>{link}</MoreLi>
					</a>
				))}
			</MoreUl>
		</MoreDiv>
	);
}

function NavLinkLogic() {
	function moreClickHandler(e) {
		document.querySelector('nav div:last-child').classList.toggle('show');
		document.querySelector('header').classList.toggle('show');
		document.querySelector('li[data="more"]').classList.toggle('show');
	}

	let mainLinks = React.useContext(Context).mainLinks;
	let remainingSpace = React.useContext(Context).remainingSpace;

	return (
		<>
			{mainLinks.map(link => (
				<a href="#" key={link}>
					<NavLink key={link}> {link} </NavLink>
				</a>
			))}
			<a href="#" onClick={moreClickHandler}>
				<NavLink data="more" style={{ position: 'relative', paddingRight: remainingSpace + 'px' }}>
					More
					<DownChevron children="&#x25BC;" />
				</NavLink>
			</a>
		</>
	);
}

function App() {
	let links = 'Home, News, Sport, Reel, Worklife, Travel , Future, Culture, Music, TV, BBC Select, Weather, Sounds'.split(', ');

	const [linksToDisplay, setLinksToDisplay] = React.useState(1);
	const [remainingSpaceAfterLinks, setRemainingSpaceAfterLinks] = React.useState(0);

	function setLinks() {
		let width = window.innerWidth > 1080 ? 1080 : window.innerWidth;
		let searchWidth = width < 600 ? 50 : 210;
		let averageLinkWidth = 80;
		let leftWidth = width < 1000 ? 150 : 280;
		let remainingSpace = width - leftWidth - searchWidth;
		let links = Math.floor(remainingSpace / averageLinkWidth);
		let remainingSpaceAfterLinksNumber = remainingSpace - links * 75;
		setLinksToDisplay(Math.floor(links));
		setRemainingSpaceAfterLinks(remainingSpaceAfterLinksNumber);
	}

	React.useEffect(() => {
		setLinks();
		window.addEventListener('resize', setLinks);

		return () => {
			window.removeEventListener('resize', () => {});
		};
	}, []);

	return (
		<div className="App">
			<Context.Provider
				value={{
					mainLinks: links.slice(0, linksToDisplay - 1),
					moreLinks: links.slice(linksToDisplay - 1),
					remainingSpace: remainingSpaceAfterLinks,
				}}
			>
				<Header>
					<Nav>
						<a href="#">
							<Img src={imgSrc} className="v-middle" />
						</a>
						<SignIn href="#">
							<UserIcon icon={faUser} />
							<SignInText>Sign in</SignInText>
						</SignIn>
						<NavLinks>
							<NavLinkLogic />
						</NavLinks>
						<Search>
							<SearchInput placeholder="Search" />
							<a href="#">
								<SearchIcon icon={faMagnifyingGlass} />
							</a>
						</Search>
						<More />
					</Nav>
				</Header>
			</Context.Provider>
		</div>
	);
}

export default App;
