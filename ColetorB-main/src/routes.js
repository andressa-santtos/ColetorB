import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inicial from './pages/Inicial/Index'
import RecuperarSenha from './pages/RecuperarSenha/Index'
import TipoCadastro from './pages/TipoCadastro/Index'
import CadastrarColetor from './pages/CadastrarColetor/coletor'
import CadastrarDoador from './pages/CadastrarDoador/doador'
import PrincipalColetor from './pages/PrincipalColetor/coletor'
import PrincipalDoador from './pages/PrincipalDoador/doador'
import Alterar from './pages/Alterar/Index'
import Coleta from './pages/Coleta/Index'
import SelecionarColetor from './pages/SelecionarColetor/Index'
import LoginColetor from './pages/LoginColetor/Index'
import LoginDoador from './pages/LoginDoador/Index'
import TipoLogin from './pages/TipoLogin/Index'


const AppStack = createNativeStackNavigator();


export default function Router() {
    return (
        <AppStack.Navigator>
            

            <AppStack.Screen
                name="CadastrarColetor"
                component={CadastrarColetor}
                options={{
                    title: "",
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            />
            <AppStack.Screen
                name="CadastrarDoador"
                component={CadastrarDoador}
                options={{
                    title: "",
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            />

            <AppStack.Screen
                name="PrincipalColetor"
                component={PrincipalColetor}
                options={{
                    title: "",
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            />
            <AppStack.Screen
                name="PrincipalDoador"
                component={PrincipalDoador}
                options={{
                    title: "",
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            />
            <AppStack.Screen
                name="Alterar"
                component={Alterar}
                options={{
                    title: "",
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            />
            <AppStack.Screen
                name="Coleta"
                component={Coleta}
                options={{
                    title: "",
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            />
            <AppStack.Screen
                name="SelecionarColetor"
                component={SelecionarColetor}
                options={{
                    title: "",
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            />
        </AppStack.Navigator>
    );
}


   