import React from 'react';
import { View, FlatList, StyleSheet, TextInput, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { removeFavourite } from '../redux/actions';
import RecipeTile from '../components/RecipeTile';

export default function FavouriteScreen({ navigation }) {
    const NO_FAVORITES_MESSAGE = "No favourite recipes"

    const dispatch = useDispatch();
    const favourites = useSelector(state => state.favourites)

    const removeFromFavouritesList = recipe => dispatch(removeFavourite(recipe));

    const handleRemoveFavourites = recipe => {
        removeFromFavouritesList(recipe);
        console.log("Removed from favourites :" + recipe.name)
    };

    function returnRecipe(itemData) {
        function onPress() {
            navigation.navigate('RecipeDetailScreen', {
                recipe: itemData.item
            })
        }
        return (
            <RecipeTile
                recipe={itemData.item} onPress={onPress} isFavorite={true} onFavouriteClick={()=>handleRemoveFavourites(itemData.item)} />
        );
    }

    return (
        <View style={styles.viewContainer}>
            {favourites.length > 0 &&
                <FlatList
                    data={favourites}
                    keyExtractor={(item) => item.id}
                    renderItem={returnRecipe}
                    numColumns={2}
                />
            }
            {favourites.length <= 0 &&
                <View style={styles.emptyFavoritesView}>
                    <Text style={styles.emptyFavoritesText}>{NO_FAVORITES_MESSAGE}</Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex:1,
        marginTop: 16,
        width: '100%'
    },
    emptyFavoritesView: {
        height: 100,
        flex: 1,
        paddingTop:'33%',
        paddingHorizontal: '5%'
    },
    emptyFavoritesText: {
        flex:1,
        fontWeight: '500',
        fontSize:25,
        textAlign: 'center',
        justifyContent:'center'
    }
})
