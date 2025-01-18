import { Text, Heading, Container, TextField, Box } from '@radix-ui/themes';
import { getPokemon } from '../services';
import { useQuery } from '@tanstack/react-query';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import styles from './App.module.css';
import { ReactNode } from 'react';
// import { TypeChart } from './TypeChart/TypeChart';

function App() {
  console.log('App');
  // const { status, data, error } = useQuery({
  //   queryKey: ['pokemon'],
  //   queryFn: () => getPokemon(1),
  // });

  // if (status === 'pending') {
  //   return <span>Loading...</span>;
  // }

  // if (status === 'error') {
  //   return <span>Error: {error.message}</span>;
  // }

  // console.log(data);

  const text: ReactNode[] = [];

  for (let i = 0; i < 100; i++) {
    text[i] = (
      <Text as="p">
        Legibility describes how easily individual characters can be
        distinguished from one another. It is described by Walter Tracy as “the
        quality of being decipherable and recognisable”. For instance, if a “b”
        and an “h”, or a “3” and an “8”, are difficult to distinguish at small
        sizes, this is a problem of legibility.
      </Text>
    );
  }

  return (
    <>
      <Heading size="9" align="center" className={styles.title}>
        Cordelia
      </Heading>
      <div className={styles.searchContainer}>
        <Box
          width={{
            initial: '100%',
            sm: '85%',
            md: '75%',
            lg: '70%',
          }}
        >
          <TextField.Root placeholder="Search" size="3" radius="full">
            <TextField.Slot>
              <MagnifyingGlassIcon height="20" width="20" />
            </TextField.Slot>
          </TextField.Root>
        </Box>
      </div>
      <Container size="4" mx="6">
        <ul style={{ margin: 0, marginTop: 'var(--space-5)' }}>
          {text.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* <img src={data.sprites.other['official-artwork'].front_default} /> */}

        {/* <TypeChart type="water" /> */}
      </Container>
    </>
  );
}

export default App;
