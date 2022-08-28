import { MainSection, Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
	<MainSection>
		<Header>
			<Title>
				{title}
			</Title>
			{extraHeaderContent}
		</Header>
		{body}
	</MainSection>
);

export default Section;