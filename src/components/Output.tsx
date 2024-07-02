import About from './commands/About';
import Clear from './commands/Clear';
import Echo from './commands/Echo';
import Welcome from './commands/Welcome';

import { OutputContainer, UsageDiv } from './styles/Output.style';
import { termContext } from './Terminal';
import { useContext } from 'react';

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specials = ['echo'];

  if (!specials.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid='usage-output'>Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? 'latest-output' : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          welcome: <Welcome />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
