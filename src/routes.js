import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Inicial from './pages/Inicial/Index'
import Login from './pages/Login/Index'
import  RecuperarSenha from './pages/RecuperarSenha/Index'
import  TipoCadastro from './pages/TipoCadastro/Index'
import  Cadastrar from './pages/Cadastrar/Index'
import  Principal from './pages/Principal/Index'
import  Alterar from './pages/Alterar/Index'
import  Coleta from './pages/Coleta/Index'

const AppStack = createNativeStackNavigator();

export default function Router(){
    return (
        <AppStack.Navigator>
           <AppStack.Screen initialRouteName="Inicial"
                name="Inicial"
                component={Inicial}
                options={{headerShown:false}}
            />
            <AppStack.Screen 
                name="Login" 
                component={Login} 
                options={{
                    title:"",
                    headerTransparent:true,
                    headerShadowVisible:false,
                }}
            />
            <AppStack.Screen 
                name="RecuperarSenha" 
                component={RecuperarSenha} 
                options={{
                    title:"",
                    headerTransparent:true,
                    headerShadowVisible:false,
                }}
            />
             <AppStack.Screen 
                name="TipoCadastro" 
                component={TipoCadastro} 
                options={{
                    title:"",
                    headerTransparent:true,
                    headerShadowVisible:false,
                }}
            /> 
            <AppStack.Screen 
                name="Cadastrar" 
                component={Cadastrar} 
                options={{
                    title:"",
                    headerTransparent:true,
                    headerShadowVisible:false,
                }}
            /> 
            <AppStack.Screen 
                name="Principal" 
                component={Principal} 
                options={{
                    title:"",
                    headerTransparent:true,
                    headerShadowVisible:false,
                }}
            />
            <AppStack.Screen 
                name="Alterar" 
                component={Alterar} 
                options={{
                    title:"",
                    headerTransparent:true,
                    headerShadowVisible:false,
                }}
            /> 
            <AppStack.Screen 
                name="Coleta" 
                component={Coleta} 
                options={{
                    title:"",
                    headerTransparent:true,
                    headerShadowVisible:false,
                }}
            />  
        </AppStack.Navigator>
    );
}