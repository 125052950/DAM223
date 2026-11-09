import { StyleSheet, ScrollView, Text, Button} from 'react-native';
import { useState } from 'react';
import AdminCategoriasScreen from './screens/AdminCategoriasScreen';
import AdminConsultarReportesScreen from './screens/AdminConsultarReportesScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import AdminGenerarReporteScreen from './screens/AdminGenerarReporteScreen';
import AdminGraficasScreen from './screens/AdminGraficasScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import AdminNormasEstatusScreen from './screens/AdminNormasEstatusScreen';
import AdminUsuariosScreen from './screens/AdminUsuariosScreen';
import ConfiguracionScreen from './screens/ConfiguracionScreen';
import DetalleServicioScreen from './screens/DetalleServicioScreen';
import ExplorarCursosScreen from './screens/ExplorarCursosScreen';
import FavoritosScreen from './screens/FavoritosScreen';
import InicioScreen from './screens/InicioScreen';
import LoginScreen from './screens/LoginScreen';
import PerfilHistorialScreen from './screens/PerfilHistorialScreen';
import PublicarServicioScreen from './screens/PublicarServicioScreen';
import RegistroScreen from './screens/RegistroScreen';
import ResenasFeedbackScreen from './screens/ResenasFeedbackScreen';
import SolicitarClaseScreen from './screens/SolicitarClaseScreen';

// 2. ZONA MAIN (Componentes ó Screens)
export default function App() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
  case 'adminCategorias':
    return <AdminCategoriasScreen />;
  case 'adminConsultarReportes':
    return <AdminConsultarReportesScreen />;
  case 'adminDashboard':
    return <AdminDashboardScreen />;
  case 'adminGenerarReporte':
    return <AdminGenerarReporteScreen />;
  case 'adminGraficas':
    return <AdminGraficasScreen />;
  case 'adminLogin':
    return <AdminLoginScreen />;
  case 'adminNormasEstatus':
    return <AdminNormasEstatusScreen />;
  case 'adminUsuarios':
    return <AdminUsuariosScreen />;
  case 'configuracion':
    return <ConfiguracionScreen />;
  case 'detalleServicio':
    return <DetalleServicioScreen />;
  case 'explorarCursos':
    return <ExplorarCursosScreen />;
  case 'favoritos':
    return <FavoritosScreen />;
  case 'inicio':
    return <InicioScreen />;
  case 'login':
    return <LoginScreen />;
  case 'perfilHistorial':
    return <PerfilHistorialScreen />;
  case 'publicarServicio':
    return <PublicarServicioScreen />;
  case 'registro':
    return <RegistroScreen />;
  case 'resenasFeedback':
    return <ResenasFeedbackScreen />;
  case 'solicitarClase':
    return <SolicitarClaseScreen />;
  case 'menu':
  default:
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Menú de Interfaces</Text>

        <Button title='Admin Categorías' onPress={() => setScreen('adminCategorias')} />
        <Button title='Admin Consultar Reportes' onPress={() => setScreen('adminConsultarReportes')} />
        <Button title='Admin Dashboard' onPress={() => setScreen('adminDashboard')} />
        <Button title='Admin Generar Reporte' onPress={() => setScreen('adminGenerarReporte')} />
        <Button title='Admin Gráficas' onPress={() => setScreen('adminGraficas')} />
        <Button title='Admin Login' onPress={() => setScreen('adminLogin')} />
        <Button title='Admin Normas y Estatus' onPress={() => setScreen('adminNormasEstatus')} />
        <Button title='Admin Usuarios' onPress={() => setScreen('adminUsuarios')} />
        <Button title='Configuración' onPress={() => setScreen('configuracion')} />
        <Button title='Detalle Servicio' onPress={() => setScreen('detalleServicio')} />
        <Button title='Explorar Cursos' onPress={() => setScreen('explorarCursos')} />
        <Button title='Favoritos' onPress={() => setScreen('favoritos')} />
        <Button title='Inicio' onPress={() => setScreen('inicio')} />
        <Button title='Login' onPress={() => setScreen('login')} />
        <Button title='Perfil Historial' onPress={() => setScreen('perfilHistorial')} />
        <Button title='Publicar Servicio' onPress={() => setScreen('publicarServicio')} />
        <Button title='Registro' onPress={() => setScreen('registro')} />
        <Button title='Reseñas Feedback' onPress={() => setScreen('resenasFeedback')} />
        <Button title='Solicitar Clase' onPress={() => setScreen('solicitarClase')} />
      </ScrollView>
    );
}
}

// 3. ZONA DE ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});