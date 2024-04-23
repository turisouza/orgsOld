import React from 'react';
import Cesta from './src/telas/Cesta';
import {SafeAreaView, StatusBar} from 'react-native';

import mock from "./src/mocks/cesta"

function App() {



  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />
      {/* Esta desconsctrução do mock é a mesma coisa que declarar 
      topo={mock.topo} e detalhes={mock.detalhes} */}
    </SafeAreaView>
  );
}

export default App;
