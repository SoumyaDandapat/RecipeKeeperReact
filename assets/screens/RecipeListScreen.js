import React, { useEffect, useState } from 'react';
import { RECIPES } from "../data/mockdata";
import { View, FlatList, StyleSheet, TextInput } from "react-native";
import RecipeTile from '../components/RecipeTile';
import { useSelector, useDispatch } from 'react-redux'
import { getData, addFavourite, removeFavourite } from '../redux/actions';


function RecipeListScreen({ navigation }) {

    // const [filteredData, setFilteredData] = useState([]);
    // const [masterData, setMasterData] = useState([]);
    // const [search, setSearch] = useState('');

    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes)
    const favourites = useSelector(state =>state.favourites)

    const addToFavouritesList = recipe => dispatch(addFavourite(recipe));
    const removeFromFavouritesList = recipe => dispatch(removeFavourite(recipe));

    const handleAddFavourites = recipe => {
        addToFavouritesList(recipe);
        console.log("Added to favourites :"+ recipe.name)
    };

    const handleRemoveFavourites = recipe => {
        removeFromFavouritesList(recipe);
        console.log("Removed from favourites :"+ recipe.name)
    };

    const ifExists = recipe => {
        if (favourites.filter(item => item.id === recipe.id).length > 0) {
          return true;
        }
        return false;
      };

    useEffect(() => {
        dispatch(getData());
        // fetchData();
    }, [])

    // const fetchData = () =>{
    //     setFilteredData(RECIPES)
    //     setMasterData(RECIPES)
    // }

    // const searchFilter = (text) =>{
    //      if(text){
    //         const newData = masterData.filter((item)=>{
    //             const itemData = item.name? item.name.toUpperCase():''.toUpperCase()
    //             const textData = text.toUpperCase()
    //             return itemData.indexOf(textData)>-1;
    //         });
    //         setFilteredData(newData);
    //         setSearch(text);
    //      }
    //      else{
    //         setFilteredData(masterData);
    //         setSearch(text)
    //      }
    // }

    function returnRecipe(itemData) {
        function onPress() {
            navigation.navigate('RecipeDetailScreen', {
                recipe: itemData.item
            })
        }
        return (
            <RecipeTile
                recipe={itemData.item} onPress={onPress} isFavorite={ifExists(itemData.item)} onFavouriteClick={()=>ifExists(itemData.item)?handleRemoveFavourites(itemData.item):handleAddFavourites(itemData.item)}/>
        );
    }

    return (
        <View style={styles.viewContainer}>
            {/* <TextInput
                style = {styles.textInputStyle}
                value = {search}
                placeholder = "Search"
                underlineColorAndroid="transparent"
                onChangeText = {(text)=>searchFilter(text)}
            /> */}
            <FlatList
                style={styles.flatListStyle}
                data={recipes}
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
    },
    // textInputStyle: {
    //     height: 50,
    //     borderWidth: 1,
    //     margin: 5,
    //     borderColor: '#009688',
    //     backgroundColor: 'white'
    // },
    flatListStyle: {
        // marginBottom: 60
    }
})

export default RecipeListScreen;