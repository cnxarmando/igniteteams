import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Players } from '@/screens/Players';
import { Loading } from '@/components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold }); // O FontsLoaded guarda o retorno do useFonts, fica observando se as fontes foram carregadas retornando true ou false

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Players /> : <Loading />}
    </>
  );
}
