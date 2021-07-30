import { FC } from 'react';

import FAQ from '../../components/FAQ/FAQ';

import { Container, Title, FAQList } from './styles/styles';

import faqsData from '../../fixtures/faqs.json';

const FAQContainer: FC = () => {
	const faqList = faqsData.map(({ id, header, body }) => (
		<FAQ key={id} question={header} answear={body} />
	));

	return (
		<Container>
			<Title>Często zadawane pytania</Title>
			<FAQList>{faqList}</FAQList>
		</Container>
	);
};

export default FAQContainer;
