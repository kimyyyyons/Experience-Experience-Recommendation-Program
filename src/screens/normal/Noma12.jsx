import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import NextButton from "../../components/NextButton";




javascript
import React, { useEffect, useState } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

const images = [
    require('./assets/images/Nomal3/기차.png'),
    require('./assets/images/Nomal3/노약자.png'),
    require('./assets/images/Nomal3/노약자석.png'),
    require('./assets/images/Nomal3/대중교통.png'),
    require('./assets/images/Nomal3/임산부.png'),
    require('./assets/images/Nomal3/지하철.png'),
    require('./assets/images/Nomal3/화장실.png'),
    require('./assets/images/Nomal3/휴대폰 사용금지.png'),
    require('./assets/images/Nomal3/휴대폰 진동.png'),
];

const Game = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [answerIndex, setAnswerIndex] = useState(null);
    
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 9);
        setSelectedImage(images[randomIndex]);
        setAnswerIndex(randomIndex);
        
        const timeout = setTimeout(() => {
            setSelectedImage(null);
        }, 10000);
        
        return () => clearTimeout(timeout);
    }, []);

    const handleImageSelection = (index) => {
        if (index === answerIndex) {
            alert('정답입니다!');
        } else {
            alert('틀렸습니다.');
        }
    };

    return (
        <View>
            {selectedImage && <Image source={selectedImage} />}
            {!selectedImage && images.map((img, index) => (
                <TouchableOpacity key={index} onPress={() => handleImageSelection(index)}>
                    <Image source={img} style={{ width: 100, height: 100 }} />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Game;


