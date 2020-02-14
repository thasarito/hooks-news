import React, { useContext } from 'react';
import FirebaseContext from '../../firebase/context';
import LinkItem from './LinkItem';

function LinkList(props) {
	const [links, setLinks] = React.useState([]);
	const { user, firebase } = useContext(FirebaseContext);

	React.useEffect(() => {
		getLinks();
	}, []);

	function getLinks() {
		firebase.db.collection('links').onSnapshot(handleSnapshot);
	}

	function handleSnapshot(snapshot) {
		const links = snapshot.docs.map(doc => {
			return { id: doc.id, ...doc.data() };
		});
		setLinks(links);
	}

	return (
		<div>
			{links.map((link, index) => (
				<LinkItem
					key={link.id}
					showCount={true}
					link={link}
					index={index + 1}
				/>
			))}
		</div>
	);
}

export default LinkList;
