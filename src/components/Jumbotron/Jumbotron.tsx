import { FC } from 'react';

import { Item, Inner, Pane, Title, SubTitle, Image } from './styles/styles';

import { IJumbotron } from './interfaces';

const Jumbotron: FC<IJumbotron> = ({
	direction,
	title,
	subTitle,
	imageSrc,
	imageAlt,
}) => {
	return (
		<Item>
			<Inner direction={direction}>
				<Pane>
					<Title>{title}</Title>
					<SubTitle>{subTitle}</SubTitle>
				</Pane>
				<Pane>
					<Image src={imageSrc} alt={imageAlt} />
				</Pane>
			</Inner>
		</Item>
	);
};

export default Jumbotron;
