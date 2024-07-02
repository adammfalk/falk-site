import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from '../styles/Welcome.style';

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid='welcome'>
      <div className='info-section'>
        <PreName>
          {`
 _____   ____  _      __  _     __    __  ______  _____ 
|     | /    || |    |  |/ ]   |  |__|  ||      ||     |
|   __||  o  || |    |  ' /    |  |  |  ||      ||   __|
|  |_  |     || |    |    \\    |  |  |  ||_|  |_||  |_  
|   _] |  _  || |___ |     \\ __|  '  '  |  |  |  |   _]
|  |   |  |  ||     ||  .  ||  |\\      /   |  |  |  |   
|__|   |__|__||_____||__|\\_||__| \\_/\\_/    |__|  |__|
`}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`

              _____   ____  _      __  _ 
              |     | /    || |    |  |/ ]
              |   __||  o  || |    |  ' / 
              |  |_  |     || |___ |    \\ 
              |   _] |  _  ||     ||     \\
              |  |   |  |  ||     ||  .  |
              |__|   |__|__||_____||__|\\_|
                                          
                  __    __  ______  _____ 
                 |  |__|  ||      ||     |
                 |  |  |  ||      ||   __|
                 |  |  |  ||_|  |_||  |_  
               __|  '  '  |  |  |  |   _] 
              |  |\\      /   |  |  |  |   
              |__| \\_/\\_/    |__|  |__|   
                                          
              
              `}
          </PreNameMobile>
        </PreWrapper>
        <div>This is a personal website for a guy in the midwest.</div>
        <div>I'm a dad, a rugby ref, and some other stuff.</div>
        <Seperator>----</Seperator>
        <div>Try some commands or whatever.</div>
        <Seperator>----</Seperator>
        <div className='illu-section'>
          <PreImg>
            {`
 ______________
||            ||
||    falk    ||
||    .wtf    ||
||            ||
||____________||
|______________|
 \\\\############\\\\
  \\\\############\\\\
   \\      ____    \\   
    \\_____\\___\\____\\
              `}
          </PreImg>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
