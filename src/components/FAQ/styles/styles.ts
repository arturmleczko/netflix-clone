import styled from 'styled-components/macro';

import { ICheckButton } from './interfaces';

export const Answear = styled.div`
	width: 100%;
	padding: 40px 30px;
	font-size: 28px;
	color: white;
	line-height: 1.1;
	background-color: #303030;
`;

export const CheckButton = styled.button<ICheckButton>`
	width: 40px;
	height: 40px;
	border: none;
	background: url(${({ icon }) => icon});
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;
`;

export const Container = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 80px;
	padding: 0 30px;
	background-color: #303030;
`;

export const Question = styled.p`
	font-size: 28px;
	color: white;
`;
