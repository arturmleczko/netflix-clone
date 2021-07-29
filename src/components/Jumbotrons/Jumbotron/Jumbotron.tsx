import { FC } from 'react';

import { Inner, Pane, Title, SubTitle, Image } from './styles/styles';

import { IJumbotron } from './interfaces';

const Jumbotron: FC<IJumbotron> = ({
	direction,
	title,
	subTitle,
	imageSrc,
	imageAlt,
}) => {
	return (
		<Inner direction={direction}>
			<Pane>
				<Title>{title}</Title>
				<SubTitle>{subTitle}</SubTitle>
			</Pane>
			<Pane>
				<Image src={imageSrc} alt={imageAlt} />
			</Pane>
		</Inner>
	);
};

export default Jumbotron;
