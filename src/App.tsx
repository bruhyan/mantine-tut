import './App.css';
import { Button, ColorScheme, ColorSchemeProvider, MantineProvider, Paper, Text } from '@mantine/core'
import TestCardList from './components/TestCardList';
import LightDarkButton from './components/LightDarkButton';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} >
          <Paper p="lg" style={{ minHeight: "100vh" }}>
            <LightDarkButton />
            <TestCardList />
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>

    </div>
  );
}

export default App;
// https://www.youtube.com/watch?v=57vs7TLth74&t=2598s