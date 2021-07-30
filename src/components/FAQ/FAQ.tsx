import { FC, useState } from 'react';

import { Container, Question, CheckButton, Answear } from './styles/styles';

import { IFAQ } from './interfaces';

import showIcon from '../../media/icons/plus.svg';
import hideIcon from '../../media/icons/close.svg';

const FAQ: FC<IFAQ> = ({ question, answear }) => {
	const [checkValue, setCheckValue] = useState<boolean>(false);

	const handleOnClick = (): void => setCheckValue((prevValue) => !prevValue);

	const checkButtonIcon = checkValue ? hideIcon : showIcon;

	const answearElement = checkValue ? <Answear>{answear}</Answear> : null;

	return (
		<>
			<Container>
				<Question>{question}</Question>
				<CheckButton onClick={handleOnClick} icon={checkButtonIcon} />
			</Container>
			{answearElement}
		</>
	);
};

export default FAQ;
