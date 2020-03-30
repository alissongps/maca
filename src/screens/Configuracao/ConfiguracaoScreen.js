import React, {useState, useEffect} from 'react';

import { Text, View, Image, TouchableOpacity, TextInput, AsyncStorage, Linking } from 'react-native';

import styles from './styles';

import { EvilIcons } from '@expo/vector-icons';

import rateou from '../../assets/rateou.jpg';
import { Dialog } from 'react-native-simple-dialogs';

export default function ConfiguracaoScreen(props) {

  
  const [dialogInputVisibility1, setDialogInputVisibility1] = useState(false);
  const [dialogInputVisibility2, setDialogInputVisibility2] = useState(false);
  const [meuNome, setMeuNome]= useState('');
  const [meuTelefone, setMeuTelefone] = useState('');

  function AddNameDialog(){

  const [name, setName] = useState('');


    return(
      <Dialog 
          visible={dialogInputVisibility1}
          onTouchOutside={() => 
           {setDialogInputVisibility1(false);
            setName('');
          }}
           dialogStyle={{borderRadius: 15, overflow: 'hidden'}}
         >
        <View style={styles.containerDialog}>
          <View>
          <TextInput
                onChangeText={(text) => setName(text)}
                value={name}
               style={styles.textInputDialog}
               placeholder ={'Digite seu Numero'}
              />
          </View>

          <View style={styles.dialogBottomContainer}>
            <TouchableOpacity style={styles.dialogButtonVoltar} onPress={() => {
              setDialogInputVisibility1(false);
              setName('');
            }}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dialogButtonOk} onPress={ () => {
              if(name === '') {
                alert('Preencha todos os campos');
                return;
              }
              addNewName(name);
              setDialogInputVisibility1(false);
              setName('');
            }}>
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
          </View>
        </Dialog>
 );
}

 
  props.navigation.setOptions({
    headerTitle: 'Configurações',
    headerBackTitle: 'Voltar',
  });

  function AddPhoneDialog(){

  const [phone, setPhone] = useState('');


    return(
      <Dialog 
          visible={dialogInputVisibility2}
          onTouchOutside={() => 
           {setDialogInputVisibility1(false);
            setPhone('');
          }}
           dialogStyle={{borderRadius: 15, overflow: 'hidden'}}
         >
        <View style={styles.containerDialog}>
          <View>
          <TextInput
                onChangeText={(text) => setPhone(text)}
                value={phone}
                style={styles.textInputDialog}
                placeholder ={'Digite seu Numero'}
              />
          </View>

          <View style={styles.dialogBottomContainer}>
            <TouchableOpacity style={styles.dialogButtonVoltar} onPress={() => {
              setDialogInputVisibility2(false);
              setPhone('');
            }}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dialogButtonOk} onPress={ () => {
              if(phone === '') {
                alert('Preencha todos os campos');
                return;
              }
              addNewPhone(phone);
              setDialogInputVisibility2(false);
              setPhone('');
            }}>
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
          </View>
        </Dialog>
 );
}


async function addNewName(name){
  try {
    await AsyncStorage.setItem('meuNome', name);
    setMeuNome(name);
    console.log('Nome adicionado com sucesso.');
  }
  catch (error) {
    console.log('Error saving data.');
  }
}

async function addNewPhone(phone){
  try {
    await AsyncStorage.setItem('meuTelefone', phone);
    setMeuTelefone(phone);
    console.log('Teefone adicionado com sucesso.');
  }
  catch (error) {
    console.log('Error saving data.');
  }
}


 
  props.navigation.setOptions({
    headerTitle: 'Configurações',
    headerBackTitle: 'Voltar',
  });

  return (
    <View style={styles.container}>
      <View>

        < AddNameDialog />
        <View>
          <Text style={styles.name}>
            nome:
          </Text>
          <View style={styles.labelName}>
             <Text style={styles.text}>{meuNome}</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={()=>setDialogInputVisibility1(true)} style={styles.button}>
          <Text style={{fontSize:16, paddingHorizontal: 5, marginTop:4}}>editar</Text>
          <EvilIcons name='pencil' size={25} color='black' style={{marginBottom:5, marginTop:4}}/>
          </TouchableOpacity>
          </View>
        </View>

        < AddPhoneDialog />
        <View>
          <Text style={styles.phone}>
            telefone:
         </Text>
         <View style={styles.labelPhone}>
           <Text style={styles.text}>{meuTelefone}</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={()=>setDialogInputVisibility2(true)} style={styles.button}>
          <Text style={{fontSize:16, paddingHorizontal: 5, marginTop:4}}>editar</Text>
          <EvilIcons name='pencil' size={25} color='black' style={{marginBottom:5, marginTop:4}}/>
          </TouchableOpacity>
          </View>
        </View>
        
        
      </View>
      
      <View style={styles.containerGit}>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/alissongps')} style={styles.gitButton}>
        <EvilIcons name='sc-github' size={120} color='#8901F3' style={{marginBottom:5}}/>
        <Text style={{color:'#8901f3'}}>alissongps</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/gkum4')} style={styles.gitButton}>
        <EvilIcons name='sc-github' size={120} color='#F30158' style={{marginBottom:5}}/>
        <Text style={{color:'#f30158'}}>gkum4</Text>
        </TouchableOpacity>
      </View>
   
   
    </View>
  );
}

ConfiguracaoScreen.navigationOptions = {
  header: {
    title: 'Configurações',
  }
};


