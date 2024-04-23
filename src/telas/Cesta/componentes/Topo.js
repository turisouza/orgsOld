import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;


export default function Topo({ titulo}) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
    // Aqui estamos dividindo a altura pela largura e multiplicando
    //pelo tamanho da tela
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    //A posição abosluta coloca o componente por cima dos outros que estão antes dele
    //A posição relativa coloca um componente embaixo do outro
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
});
