import MapView from 'react-native-maps'
import { Paragraph, Searchbar, Surface } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const ScreenContainer = styled(SafeAreaView)`
	flex: 1;
`

export const Map = styled(MapView)`
	width: 100%;
	height: 100%;
`

export const Content = styled(Surface)`
	flex: 1;
	justify-content: center;
	align-items: center;
	border-radius: 24px;
	margin-top: 12px;
`

export const SearchContainer = styled(Surface)`
	position: absolute;
	left: 20px;
	right: 20px;
	top: 48px;
	z-index: 5000;
	background-color: transparent;
	elevation: 1;
`

export const CustomSearchbar = styled(Searchbar)`
	border-radius: 16px;
	padding-vertical: 8px;
	elevation: 0;
`

export const CalloutContainer = styled.View`
	padding-horizontal: 16px;
	height: 46px;
	background-color: ${({ theme }) => theme.background.light};
	border-radius: 16px;
	elevation: 0;
	justify-content: center;
`

export const CalloutText = styled(Paragraph)`
	color: #0089a5;
	font-size: 18px;
	text-align: center;
`
