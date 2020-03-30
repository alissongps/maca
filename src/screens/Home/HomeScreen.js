import React, { useState, useEffect } from 'react';
import { Text, View, AsyncStorage, TouchableOpacity, Image, TextInput, SectionList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import FrutasImages from '../../FrutasImages';

import DatePicker from 'react-native-datepicker';

import { Dialog } from 'react-native-simple-dialogs';

import { EvilIcons } from '@expo/vector-icons';

import styles from './styles';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function HomeScreen(props) {
  const [dialogInputVisibility, setDialogInputVisibility] = useState(false);
  const [minhasFrutas, setMinhasFrutas] = useState([]);
  const sectionListArr = [
    {
      title: 'Minhas Frutas:',
      data: minhasFrutas,
    }
  ];
  function FrutasList() {
    if(minhasFrutas.length === 0) {
      console.log('Não existem frutas cadastradas pelo usuário');
      return (
        <View style={styles.semFrutasContainer}>
          <Text style={styles.grayText}>Você não tem nenhuma fruta</Text>
        </View>
      );
    }
    else {
      return (
        <SectionList 
          sections={sectionListArr}
          style={styles.frutasList}
          showsVerticalScrollIndicator={false}
          keyExtractor={fruta => String(fruta.id)}
          stickySectionHeadersEnabled={false}
          renderItem={({item: fruta}) => {
            return (
              <View style={styles.frutaItem}>
                <Image source={FrutasImages[handleFrutaNome(fruta.nome)]} style={styles.frutaImg}/>
                <View style={styles.frutaItemTextContainer}>
                  <View style={{flexDirection:'column', flex:1}}>
                    <Text style={styles.frutaItemTextBold}>{fruta.nome}</Text>
                  </View>
                  <View style={{flexDirection:'column-reverse', flex:1}}>
                    <Text style={{fontSize:12}}>Comprou: {fruta.comprou}   Estraga: 25/04</Text>
                  </View>
                </View>
                <View style={{ justifyContent:'center', alignItems:'flex-end', flex:1, flexDirection:'column', marginLeft:5}}>
                  <TouchableOpacity onPress={async () => await deleteFruta(fruta.id)}>
                    <EvilIcons name='trash' size={25} color='black' style={{marginBottom:10}}/>
                  </TouchableOpacity>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>{fruta.quantidade}x</Text>
                </View>
              </View>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionBoldText}>{title}</Text>
          )}
        />
      );
    }
  }

  function AddFrutaDialog() {
    const [addFrutaNome, setAddFrutaNome] = useState('');
    const [addFrutaData, setAddFrutaData] = useState('');
    const [addFrutaQuantidade, setAddFrutaQuantidade] = useState('');
    return (
      <Dialog
        visible={dialogInputVisibility}
        onTouchOutside={() => {
          setDialogInputVisibility(false);
          setAddFrutaNome('');
          setAddFrutaData('');
          setAddFrutaQuantidade('');
        }}
        dialogStyle={{borderRadius: 15, overflow: 'hidden'}} >
        <View style={styles.dialogInputContainer}>
          <Text style={styles.dialogInputTitle}>Adicionar Fruta</Text>
          <View style={styles.dialogMiddleContainer}>
            <View style={styles.dialogFrutaImgContainer}>
              <Image source={FrutasImages[handleFrutaNome(addFrutaNome)]} style={styles.dialogFrutaImg} />
            </View>
            <View style={styles.dialogInputsContainer}>
              <TextInput
                style={styles.dialogFrutaNomeInput}
                onChangeText={(text) => setAddFrutaNome(text)}
                value={addFrutaNome}
                placeholder={'Nome da fruta'}
                textAlign={'center'}
              />
              <DatePicker
                date={addFrutaData}
                style={{width: 200}}
                mode="date" //The enum of date, datetime and time
                placeholder="Data que comprou"
                format="DD/MM"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                showIcon={false}
                onDateChange={(date) => setAddFrutaData(date)}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    backgroundColor: '#E0E0E0',
                    width: 200,
                    borderRadius: 8,
                    height: 35,
                    marginBottom: 10,
                  },
                  placeholderText: {
                    color: '#AFAFAF',
                  },
                  btnTextConfirm: {
                    color: '#F30158',
                  }
                  
                }}
                onDateChange={(date) => setAddFrutaData(date)}
              />
              <TextInput
                style={styles.dialogFrutaQuantidadeInput}
                onChangeText={(text) => setAddFrutaQuantidade(text)}
                value={addFrutaQuantidade}
                placeholder={'Quantidade'}
                textAlign={'center'}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
              />
            </View>
          </View>
          <View style={styles.dialogBottomContainer}>
            <TouchableOpacity style={styles.dialogButtonVoltar} onPress={() => {
              setDialogInputVisibility(false);
              setAddFrutaNome('');
              setAddFrutaData('');
              setAddFrutaQuantidade('');
            }}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dialogButtonOk} onPress={async () => {
              if(addFrutaNome === '' || addFrutaData === '' || addFrutaQuantidade === '') {
                alert('Preencha todos os campos');
                return;
              }
              await addFruta(addFrutaNome, addFrutaData, addFrutaQuantidade);
              setDialogInputVisibility(false);
              setAddFrutaNome('');
              setAddFrutaData('');
              setAddFrutaQuantidade('');
            }}>
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog>
    );
  }

  function handleFrutaNome(frutaNome) {
    frutaNome = frutaNome.toLowerCase();
    var arr = frutaNome.split('');
    var i;
    for(i = 0; i < arr.length; i++) {
      if(arr[i] === 'ç') {
        arr[i] = 'c';
      }
      if(arr[i] === 'ã') {
        arr[i] = 'a';
      }
      if(arr[i] === 'õ') {
        arr[i] = 'o';
      }
      if(arr[i] === 'á') {
        arr[i] = 'a';
      }
      if(arr[i] === 'é') {
        arr[i] = 'e';
      }
      if(arr[i] === 'í') {
        arr[i] = 'i';
      }
      if(arr[i] === 'ó') {
        arr[i] = 'o';
      }
      if(arr[i] === 'ú') {
        arr[i] = 'u';
      }
      if(arr[i] === 'ê') {
        arr[i] = 'e';
      }
      if(arr[i] === 'ô') {
        arr[i] = 'o';
      }
      if(arr[i] === 'â') {
        arr[i] = 'a';
      }
      if(arr[i] === ' ' && i === arr.length-1) {
        arr[i] = '';
      }
    }
    return arr.join('');
  }

  async function addFruta(nome, data, quantidade) {
    var id;
    if(minhasFrutas.length !== 0) {
      const lastId = parseInt(minhasFrutas[minhasFrutas.length - 1].id);
      id = lastId + 1;
    }
    else {
      id = 0;
    }
    const obj = {
      nome: nome,
      comprou: data,
      quantidade: quantidade,
      id: id.toString(),
    };
    var arr = minhasFrutas;
    arr.push(obj);
    try {
      await AsyncStorage.setItem('minhasFrutas', JSON.stringify(arr));
      console.log('Fruta adicionada com sucesso.');
    }
    catch (error) {
      console.log('Error saving data.');
    }
  }

  async function deleteFruta(frutaId) {
    var iterador = minhasFrutas;
    var i;
    for(i = 0; i < iterador.length; i++) {
      if(iterador[i].id == frutaId) {
        iterador.splice(i, 1);
      }
    }
    try {
      await AsyncStorage.setItem('minhasFrutas', JSON.stringify(iterador));
      console.log('Fruta removida com sucesso.');
      loadFrutas();
    }
    catch (error) {
      console.log('Error saving data.');
    }
  }

  async function loadFrutas() {
    try {
      const frutasStr = await AsyncStorage.getItem('minhasFrutas');
      if(frutasStr !== null) {
        console.log('Frutas encontradas!');
        let frutasArr = JSON.parse(frutasStr);
        setMinhasFrutas(frutasArr);
      }
      else {
        console.log('Nenhuma fruta encontrada');
      }
    }
    catch (error) {
      console.log('Error getting data');
      return;
    }
  }

  useEffect(() => {
    loadFrutas();
  }, []);


  return (
    <View style={styles.container}>

      <FrutasList />

      <AddFrutaDialog />

      <View style={styles.addButton}>
        <TouchableOpacity onPress={() => setDialogInputVisibility(true)}>
          <Text style={{fontSize:35}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

/*
const [minhasFrutas, setMinhasFrutas] = useState([
    {
      title: 'Minhas Frutas:',
      data: [
        {
          nome: 'Maçã',
          comprou: '16/04',
          quantidade: '4',
          id: '1',
        },
        {
          nome: 'Banana',
          comprou: '17/04',
          quantidade: '8',
          id: '2',
        },
      ]
    }
  ]);
*/