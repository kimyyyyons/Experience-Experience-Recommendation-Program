import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import NextButton from "../../components/NextButton";


const images = [
    { name: 'soldier', src: require('../../../assets/images/Easy3/군인.jpeg군인.jpeg'), answer: '군인' },
    { name: 'hairdresser', src: require('../../../assets/images/Easy3/미용사.jpeg미용사.jpeg'), answer: '미용사' },
    { name: 'chef', src: require('../../../assets/images/Easy3/요리사.jpeg'), answer: '요리사' },
    { name: 'doctor', src: require('../../../assets/images/Easy3/의사.jpeg'), answer: '의사' },
];

const Problem4 = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '']);
    const correctAnswers = ['군인', '미용사', '요리사', '의사'];
    const [showResult, setShowResult] = useState(false);

    const handleInputChange = (text, index) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = text;
        setInputValues(newInputValues);
    };

    const checkAnswers = () => {
        if (JSON.stringify(inputValues) === JSON.stringify(correctAnswers)) {
            setShowResult(true);
        } else {
            alert('실패');
        }
    };

    return (
        <View style={styles.container}>
            <Text>사진에 맞는 직업을 순서대로 입력해주세요.</Text>
            <View style={styles.imageContainer}>
                {images.map((img, index) => (
                    <View key={index} style={styles.imageWrapper}>
                        <Image source={img.src} style={styles.image} />
                        <TextInput
                            style={styles.input}
                            placeholder="직업 입력"
                            value={inputValues[index]}
                            onChangeText={(text) => handleInputChange(text, index)}
                        />
                    </View>
                ))}
            </View>
            <TouchableOpacity onPress={checkAnswers}>
                <Text>정답 확인</Text>
            </TouchableOpacity>
            {showResult && <Text style={styles.result}>정답입니다!</Text>}
            <NextButton onPress={() => navigation.navigate('Normal4')}/>
        </View>
        

        
    );
};


const styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        alignSelf: 'flex-start',
        marginTop: 50,
        marginBottom: 10,
        fontSize: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
    },
    inputWrapper: {
        
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        width: '90%',
    },
    correct: {
        color: 'green',
    },
    incorrect: {
        color: 'red',
    },
});

export default problemlem4;
