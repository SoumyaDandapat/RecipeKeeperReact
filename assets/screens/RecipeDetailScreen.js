import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useLayoutEffect } from "react";

function RecipeDetailScreen({ route, navigation }) {
    const recipe = route.params.recipe;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: recipe.name
        })
    }, [recipe, navigation])

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.recipeImageView}>
                    <Image style={styles.recipeImage}
                        source={{ uri: recipe.imageUrl }} />
                </View>
            </View>
            <View style = {styles.recipeDataView}>
                <Text>{recipe.name}</Text>
                <Text>{recipe.description}</Text>
                <Text>{recipe.ingredients}</Text>
                <Text>{recipe.steps}</Text>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 8,
        padding: 8
    },
    recipeImage: {
        height: 250,
        width: 250,
        padding: 5,
        borderRadius: 6
    },
    recipeImageView: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    recipeDataView:{

    }

})


export default RecipeDetailScreen;