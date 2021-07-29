import styled from 'styled-components';

import { IInner } from './interfaces';

export const Container = styled.section``;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

export const Inner = styled.div<IInner>`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	width: 100%;
	margin: auto;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Pane = styled.div`
	width: 50%;
`;

export const SubTitle = styled.h2`
	font-size: 26px;
	font-weight: 400;
	line-height: normal;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;
