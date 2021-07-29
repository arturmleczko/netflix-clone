import styled from 'styled-components/macro';

import { Item } from '../../../components/Jumbotron/styles/styles';

export const Container = styled.section`
	@media (max-width: 1000px) {
		${Item}:last-of-type h2 {
			margin-bottom: 50px;
		}
	}
`;
