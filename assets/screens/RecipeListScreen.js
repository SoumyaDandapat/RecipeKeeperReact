import React from 'react';
import { RECIPES } from "../data/mockdata";
import { View, FlatList, StyleSheet, Text } from "react-native";
import RecipeTile from '../components/RecipeTile';


function RecipeListScreen({ navigation }) {
    function returnRecipe(itemData) {
        function onPress() {
            navigation.navigate('RecipeDetailScreen', {
                recipe: itemData.item
            })
        }
        return (
            <RecipeTile
                recipe={itemData.item} onPress={onPress} />
        );
    }

    return (
        <View style={styles.viewContainer}>
            <FlatList
                data={RECIPES}
                keyExtractor={(item) => item.id}
                renderItem={returnRecipe}
                numColumns={2}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    viewContainer: {
        marginTop: 16,
        width: '100%'
    }
})

export default RecipeListScreen;