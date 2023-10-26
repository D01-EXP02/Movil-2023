
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
//paginas
import Page_misproyectos from '../screens/Page_Misproyectos';
import Page_nuevoproyecto from '../screens/Page_Newproyecto';
import Page_registrar from '../screens/Page_registrar'
import Page_login from '../screens/Page_login';
import Page_inicio from '../screens/Page_inicio';
import Page_perfil from '../screens/Page_perfil';
import Page_Observaciones from '../screens/Page_observacion';
import { BottomNavigation, Text } from 'react-native-paper';

const Navigation = () => (
  <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MyComponent />
    </GestureHandlerRootView>
  </SafeAreaProvider>
);

const misproyectos = () => <Page_misproyectos />;

const nuevoproyecto = () => <Page_nuevoproyecto />;

const Perfil = () => <Page_perfil />;

const Bandeja = () => <Page_Observaciones />;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Misproyectos', title: 'Mis proyectos', focusedIcon: 'file', unfocusedIcon: 'heart-outline' },
    { key: 'Newproyecto', title: 'Crear proyecto', focusedIcon: 'plus-circle' },
    { key: 'Perfiluser', title: 'Perfil', focusedIcon: 'account' },
    { key: 'Bandejadatos', title: 'Bandeja de entrada', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Misproyectos: misproyectos,
    Newproyecto: nuevoproyecto,
    Perfiluser: Perfil,
    Bandejadatos: Bandeja,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navigation;