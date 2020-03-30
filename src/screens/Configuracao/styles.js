import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container:{
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#F5EEE4',
      alignItems:'center',
      
   },

   name:{
      fontSize:12,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#F5EEE4',
   },

   labelName:{
      height:35,
      width:300,
      marginTop:10,
      paddingTop: 10,
      backgroundColor:'#e0e0e0',
      borderRadius:5,
      alignItems:'center',
   },
   text:{
      fontSize:18,
      paddingHorizontal:10,
      
   },


   phone:{
      fontSize:12,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#F5EEE4',
   },

   labelPhone:{
      height:35,
      marginTop:10,
      paddingTop: 10,
      backgroundColor:'#e0e0e0',
      borderRadius:5,
      alignItems:'center',
   },

   button:{
      width: 80,
      height:30,
      backgroundColor:'#CBC8C8',
      marginTop:10,
      flexDirection:'row',
      borderRadius:10,
      
   },

   gitButton:{
      marginTop: 300,
      alignItems: 'center',
   },

   dialogBottomContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },

   dialogButtonVoltar: {
      flex: 1,
      marginRight: 5,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CBC8C8',
      borderRadius: 8,
      marginTop:5,
   },
   dialogButtonOk: {
      flex: 1,
      height: 35,
      marginLeft: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CBC8C8',
      borderRadius: 8,
      marginTop:5,
   },

   textInputDialog :{
      textAlign: 'center',
      backgroundColor: '#EEE',
      borderRadius: 8,
      paddingVertical: 10,
   },

   containerGit:{
      flexDirection:'row',

   }
})