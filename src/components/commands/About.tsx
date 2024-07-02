import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from '../styles/About.styled';

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid='about'>
      <p>
        I am <HighlightSpan>Adam Falk</HighlightSpan>.
      </p>
      <p>
        I am a father, a dork, a rugby referee, a husband, but mostly just{' '}
        <HighlightAlt>a guy</HighlightAlt>.
      </p>
    </AboutWrapper>
  );
};

export default About;
