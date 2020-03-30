import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container:{
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#F5EEE4',
   },
   sectionBoldText: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 10,
   },
   semFrutasContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   grayText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#A4A4A4',
   },
   frutaItem: {
      padding: 20,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom: 16,
      flexDirection: 'row'
   },
   frutasList: {
      flex: 1,
   },
   frutaImg: {
      width: 50,
      height: 50,
   },
   frutaItemTextContainer: {
      flexDirection: 'column',
      paddingLeft: 20,
   },
   frutaItemTextBold: {
      fontSize:16,
      fontWeight:'bold',
   },
   addButton: {
      position: 'absolute',
      bottom: 21,
      right: 21,
      width: 55,
      height: 55,
      backgroundColor: '#E5E5E5',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      paddingBottom: 5,
   },
   dialogInputContainer: {
      alignItems: 'center',
      justifyContent: 'center',
   },
   dialogInputTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
   },
   dialogMiddleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
   },
   dialogInputsContainer: {
      flexDirection: 'column'
   },
   dialogFrutaImgContainer: {
      backgroundColor: '#F5EEE4',
      marginRight: 20,
      padding: 12.5,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#DBD5D5',
      
   },
   dialogFrutaImg: {
      width: 45,
      height: 45,
   },
   dialogFrutaNomeInput: {
      backgroundColor: '#E0E0E0',
      width: 200,
      marginBottom: 10,
      borderRadius: 8,
      height: 35,
   },
   dialogFrutaDataInput: {
      backgroundColor: '#E0E0E0',
      width: 200,
      borderRadius: 8,
      height: 35,
      marginBottom: 10,
   },
   dialogFrutaQuantidadeInput: {
      backgroundColor: '#E0E0E0',
      width: 200,
      borderRadius: 8,
      height: 35,
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
   },
   dialogButtonOk: {
      flex: 1,
      height: 35,
      marginLeft: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CBC8C8',
      borderRadius: 8,
   },
})