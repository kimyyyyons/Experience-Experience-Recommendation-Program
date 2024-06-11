import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import NextButton from "../../components/NextButton";


//아래는 Expo 앱에서 태극기에 5가지 문양에 대한 빈칸을 만들고, 아래에 6가지 문양을 보여주어 해당 문양을 올바른 위치로 끌어올렸을 때 정답이 나오는 문제를 만드는 코드

javascript
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const images = [
    { id: 1, src: require('./assets/images/Hard3/1.png') },
    { id: 2, src: require('./assets/images/Hard3/2.png') },
    { id: 3, src: require('./assets/images/Hard3/3.png') },
    { id: 4, src: require('./assets/images/Hard3/4.png') },
    { id: 5, src: require('./assets/images/Hard3/5.png') },
    { id: 6, src: require('./assets/images/Hard3/6.png') },
];

const Hard3 = () => {
    const [patternPositions, setPatternPositions] = useState([]);
    const correctPatternIds = [1, 2, 3, 4, 5];
    const [showResult, setShowResult] = useState(false);

    const handlePatternDrag = (index, patternId) => {
        const updatedPositions = [...patternPositions];
        updatedPositions[index] = patternId;
        setPatternPositions(updatedPositions);
        
        if (JSON.stringify(updatedPositions) === JSON.stringify(correctPatternIds)) {
            setShowResult(true);
        }
    };

    useEffect(() => {
        const initialPositions = [0, 0, 0, 0, 0];
        setPatternPositions(initialPositions);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.patternContainer}>
                {patternPositions.map((patternId, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePatternDrag(index, patternId)}>
                        {patternId === 0 ? <View style={styles.emptyPattern}></View> : <Image source={images.find(img => img.id === patternId).src} style={styles.patternImage} />}
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.dragContainer}>
                {images.map((img) => (
                    <TouchableOpacity key={img.id} onPress={() => handlePatternDrag(patternPositions.indexOf(0), img.id)}>
                        <Image source={img.src} style={styles.patternImage} />
                    </TouchableOpacity>
                ))}
            </View>
            {showResult && <Text style={styles.resultText}>정답입니다!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    patternContainer: {
        flexDirection: 'row',
    },
    dragContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    emptyPattern: {
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        margin: 5,
    },
    patternImage: {
        width: 100,
        height: 100,
        margin: 5,
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default Game;
