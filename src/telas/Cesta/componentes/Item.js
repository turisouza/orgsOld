import React from "react";
import Texto from "../../../componentes/Texto";
import { FlatList, Image, StyleSheet, View } from "react-native";

export default function Item({ item: {nome, imagem}}) {

 return  <View style={estilos.item}>
    <Image source={imagem} style={estilos.imagem} />
     <Texto style={estilos.nome} key={nome}>{nome}</Texto>
</View>

 
        
      
        

        {/* Segue a mesma lista renderizada no Flatlist feita com o Map
         {lista.map(({nome, imagem}) => {
           return (
            <View style={estilos.item}>
                <Image source={imagem} style={estilos.imagem} />
                 <Texto style={estilos.nome} key={nome}>{nome}</Texto>
            </View>
           )
        })} */}
    
    
}

const estilos = StyleSheet.create({

    imagem: {
        width: 46,
        height: 46
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})