import { FC } from 'react';

import Jumbotron from './Jumbotron/Jumbotron';

import { Container } from './styles/styles';

import jumboData from '../../fixtures/jumbo.json';

const Jumbotrons: FC = () => {
	return (
		<Container>
			{jumboData.map(({ id, direction, title, subTitle, image, alt }) => (
				<Jumbotron
					key={id}
					direction={direction}
					title={title}
					subTitle={subTitle}
					imageSrc={image}
					imageAlt={alt}
				/>
			))}
		</Container>
	);
};

export default Jumbotrons;
