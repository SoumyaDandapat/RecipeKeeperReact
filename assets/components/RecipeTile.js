import React, {useState} from 'react';
import { View, Image, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import IconButton from './IconButton';

function RecipeTile({ recipe, onPress,onFavouriteClick, isFavorite }) {

    return (
        <Pressable
            android_ripple={{ color: '#ccc' }}
            onPress={onPress}>
            <View style={styles.recipeCardView}>
                <View style={styles.recipeImageView}>
                    <Image style={styles.recipeArt} source={{ uri: recipe.imageUrl }} />
                </View>
                <View style={styles.recipeTextView}>
                    <Text style={styles.recipeName}>{recipe.name}</Text>
                    <View style={styles.favouriteStyle}>
                    {isFavorite &&
                    <IconButton
                        name="heart"
                        onPress={onFavouriteClick}
                        size={30}
                        color="red"
                        />
                    }
                    {(isFavorite === false) &&
                    <IconButton
                        name="heart"
                        onPress={onFavouriteClick}
                        size={30}
                        color="grey"
                        />
                    }
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

export default RecipeTile;

const styles = StyleSheet.create({
    recipeCardView: {
        justifyContent: 'center',
        flex: 1,
        margin: 8,
        height: 270,
        width: 180,
        backgroundColor: "#FFE5B4",
        elevation: 8,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow:'hidden'
    },
    recipeArt: {
        height: 170,
        width: 170,
        padding: 5,
        borderRadius: 6
    },
    recipeImageView: {
        padding: 5,
        elevation: 12
    },
    recipeTextView: {
        flexDirection: 'row',
        padding: 8
    },
    recipeName: {
        flex:4,
        paddingHorizontal: 5,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center'
    },
    favouriteStyle:{
        flex:1,
        textAlign:'center',
        justifyContent:'center'
    }
})
