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

    function Section({ title, data }) {
        return (<>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.dataText}>{data}</Text>
        </>
        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.recipeImageView}>
                    <Image style={styles.recipeImage}
                        source={{ uri: recipe.imageUrl }} />
                </View>

                <View style={styles.recipeDataView}>
                    <Text style={styles.recipeName}>{recipe.name}</Text>
                    <Section title='Description' data={recipe.description} />
                    <Section title='Ingredients' data={recipe.ingredients} />
                    <Section title='Steps' data={recipe.steps} />
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 2,
        padding: 8,
        backgroundColor: "#FFE5B4"
    },
    recipeImage: {
        height: 250,
        width: '100%',
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
    recipeDataView: {
        marginVertical:4,
    },
    recipeName: {
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10    
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
        },
    dataText: {
        fontSize: 15
    }


})


export default RecipeDetailScreen;