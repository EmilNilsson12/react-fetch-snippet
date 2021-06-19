import React from 'react';

export default class FetchRandomUser extends React.Component {
	state = {
		loading: true,
		person: null,
	};

	async componentDidMount() {
		const url = 'https://api.randomuser.me/';

		const data = await fetch(url).then((res) => res.json());

		this.setState({
			person: data.results[0],
			loading: false,
		});
	}

	render() {
		return (
			<>
				{this.state.loading || !this.state.person ? (
					<div>loading...</div>
				) : (
					<>
						<div>{this.state.person.name.title}</div>
						<div>{this.state.person.name.first}</div>
						<div>{this.state.person.name.last}</div>
						<img src={this.state.person.picture.large} alt='Random person' />
					</>
				)}
			</>
		);
	}
}
