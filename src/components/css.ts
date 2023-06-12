import { Colors } from 'react-native/Libraries/NewAppScreen'
import fonts from '../assets/fonts/Roboto/fonts'
import colors from '../services/colors'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    titulo: {
        fontSize:26,
        letterSpacing:1.5,
        color: colors.Primary.White,
        fontFamily: fonts.Roboto.r500,
    },
    tituloAlternative: {
        fontSize:26,
        letterSpacing:1.5,
        color: colors.Primary.Black,
        fontFamily: fonts.Roboto.r700,
    },
    subTitulo: {
        fontSize:16,
        fontFamily: fonts.Roboto.r400,
    },
    subTituloCenter: {
        textAlign:'center',
        fontSize:18,
        fontFamily: fonts.Roboto.r400,
    },
    categoryText: {
        fontSize:18,
        fontFamily: fonts.Roboto.r500,
    },
    boxText: {
        fontSize:16,
        marginTop:20,
        fontFamily: fonts.Roboto.r400,
    },
    boxTextCenter: {
        fontSize:16,
        textAlign:'center',
        marginTop:40,
        fontFamily: fonts.Roboto.r400,
    },
    iconTitulo: {
        fontSize:15,
        fontFamily: fonts.Roboto.r400,
        color: colors.Primary.White,
        marginTop: 10,
    },
    label:{
        width: '100%',
        textAlign:'left',
        fontSize:20,
        marginBottom:0,
        marginTop:10,
        fontFamily: fonts.Roboto.r500,
    },
    Input:{
        width: '100%',
        fontSize: 16,
        paddingVertical: 10,
        paddingLeft:10,
        paddingRight:35,
        marginBottom:15,
        borderBottomWidth: 1,
        fontFamily: fonts.Roboto.r400,
    },
    Icon:{
        top:10,
        right:5,
        position:'absolute',
    },
    Maps:{
        flex: 1,
        marginTop:5,
        justifyContent:"center",
        alignItems:"center",
        width:"98%",
    },
    buttonAction:{
        width:"27%",
        height:"55%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.Primary.Green.basic,
        borderRadius:10,
    },
    containerButtonAction: {
        flex: 0.27,
        width:"100%",
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    Area:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-around",
    },
    containerIcon:{
        flexDirection:'row',
        alignItems:"center",
        position: "relative",
        left:"42%",
        bottom:0,
    },
    selectedRadio:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-around",
        marginVertical: 10,
        marginBottom:10,
    },
    border:{
        borderColor: colors.Primary.Black,
        borderWidth: 1,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
    },
    styleTitle:{
        fontSize:24,
        letterSpacing:1.5,
        color: colors.Primary.Black,
        fontFamily: fonts.Roboto.r400,
        position: "relative",
        left:"28%",
        bottom:0,
        top:17,
        maxWidth:"70%",
        whiteSpace: "pre-line",
    },
     styleLeft:{
        alignItems:"center",
        position: "relative",
        left:40,
        bottom:0,
        top:"50%",
    },
    containerSelection:{
        marginBottom:30,
        borderColor: colors.Primary.Black,
        borderWidth: 1,
        backgroundColor: colors.Primary.White,
    },
    form:{
        width:"90%",
        marginTop:40,
    },
    container: {
        flex: 1,
        backgroundColor: colors.Primary.Green.basic,
    },
    fluid:{
        flex:1,
    },
    containerFluid:{
        flex:1,
        width:'100%',
        alignItems:"center",
    },
    containerLogo:{
        paddingTop:40,
        flex: 2,
        alignItems:"center",
    },
    containerAreaBranca:{
        flex: 1,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: colors.Primary.White,
    },
    containerForm:{
        flex: 1,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        alignItems:"center",
        whiteSpace: "pre-line",
        backgroundColor: colors.Primary.White,
    },   
    containerHeader:{
        flex:0.25,
        alignItems:"center",
    },
    containerText:{
        width:"90%",
        textAlign:'left',
    },
    containerTitulo:{
        marginTop:10,
        marginBottom:15,
    },
    imageForeground: {
        flex:0.8,
        width:"100%",// aqui
        height:"100%",
    },
    imageForegroundSmall: {   
        flex:1,
        width:"100%",// aqui
        height:"100%",
    },
    imgContainer:{ 
        alignItems: 'center',
    },

    image:{
        width: 110,
        height: 110,
        borderRadius: 110,
        borderColor: colors.Primary.Black,
        borderWidth: 2,
    },
    profileContainer:{
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    teste:{
        width:120,// testando que da para colocar imagens no marcadores
        height:120,
    },
})