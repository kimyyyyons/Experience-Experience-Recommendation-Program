import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import NextButton from "../../components/NextButton";

const images = [
    { name: 'img1', src: require('../../../assets/images/Problem1/img1.png'), answer: '고' },
    { name: 'img2', src: require('../../../assets/images/Problem1/img2.png'), answer: '카' },
    { name: 'img3', src: require('../../../assets/images/Problem1/img3.png'), answer: '선' },
    { name: 'img4', src: require('../../../assets/images/Problem1/img4.png'), answer: '손' },
    { name: 'img5', src: require('../../../assets/images/Problem1/img5.png'), answer: '드' },
    { name: 'img6', src: require('../../../assets/images/Problem1/img6.png'), answer: '죽' },
];

const Problem1 = ({navigation}) => {
    const [randomImgArr, setRandomImgArr] = useState([]);
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));
    const [allCorrect, setAllCorrect] = useState(false);
    const [result1, setResult1] = useState(false);
    const [result2, setResult2] = useState(false);
    const [result3, setResult3] = useState(false);
    function getRandomImg(arr, count) {
        let shuffled = arr.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, count);
    }

    useEffect(() => {
        const randomElements = getRandomImg(images, 6);
        setRandomImgArr(randomElements);
    }, []);

    const handleInputChange = (text, index) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = text;
        setInputValues(newInputValues);

        const newResults = [...results];
        newResults[index] = text.toLowerCase() === randomImgArr[index].answer.toLowerCase();
        setResults(newResults);
    };
    const checkAllAnswers = () => {
        const allCorrect = results.every(result => result === true);

        if(result1 && result2 && result3){
            setAllCorrect(allCorrect);
            alert('축하');
        } else {
            alert('오답');
        }
    };


    return (
        <>
        <View style={styles.container}>
            <View style={[styles.container, { width: '90%' }]}>
                <Text style={styles.title}>물건 찾기</Text>
                <Text>다음 물건의 이름을 적어보고 제시된 문제에 알맞은 물건을 찾아 적어보세요(1~3)</Text>
            </View>
            <View style={styles.inputContainer}>
                {randomImgArr.map((img, index) => (
                    <View key={index} style={styles.inputWrapper}>
                        <Image source={img.src} style={styles.image} />
                        <TextInput
                            style={styles.input}
                            placeholder={`입력`}
                            value={inputValues[index]}
                            onChangeText={(text) => handleInputChange(text, index)}
                        />
                        {results[index] !== null && (
                            <Text style={results[index] ? styles.correct : styles.incorrect}>
                                {results[index] ? "정답!" : "다시 생각해보세요."}
                            </Text>
                        )}
                    </View>
                ))}
            </View>
            <View>
                <Text>1. 정호 씨는 열대야로 잠을 못 이루고 있습니다. 시원하게 잠을 자기 위해 필요한 물건은 무엇일까요?</Text>
                <TextInput style={[styles.input,{width:200}]} placeholder="입력" onChangeText={(t)=>{if(t==='죽'){setResult1(true)}else{setResult1(false)}}}/>
                <Text>2.준희 씨는 햇빛에 눈이 부셔 운전하기 힘듭니다. 필요한 물건은 무엇일까요?</Text>
                <TextInput style={[styles.input,{width:200}]} placeholder="입력" onChangeText={(t)=>{if(t==='선'){setResult2(true)}else{setResult2(false)}}}/>
                <Text>3.유석 씨는 전망대에 가서 사진을 남기고 싶습니다. 필요한 물건은 무엇일까요?</Text>
                <TextInput style={[styles.input,{width:200,marginBottom:100}]} placeholder="입력" onChangeText={(t)=>{if(t==='카'){setResult3(true)}else{setResult3(false)}}}/>
            </View>
        </View>
        <NextButton onPress={() => navigation.navigate('Hard1')}/>
        </>
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

export default Problem1;
