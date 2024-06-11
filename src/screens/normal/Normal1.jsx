import { ScrollView, Text, TextInput, View } from "react-native"

const Normal1 = () => {

    const benefit = 50000;  //잔액
    //수입 = 용돈
    //지출 = 세탁소, 중화요리, 애견 간식을 랜덤 생성하는데 합쳐서 잔액을 넘어야 함.
    //랜덤 금액 생성 = 중화요리 할인 금액 : 할인 받더라도 잔액을 넘어야 함.,  아내가 준 돈 : 지출보다 커야 함. 내일 해야지!~

    return(
        <ScrollView>
            <Text>오늘 동진 씨가 사용하고 작성한 가계부입니다. 가계부를 보고 문제를 풀어보세요.</Text>
            <Text>1. 동진 씨가 부족한 돈은 얼마인가요?</Text>
            <TextInput keyboardType="numeric" placeholder="부족한 돈"/>

            <Text>2. 애견간식은 평소에 모아둔 적립금으로 결제하였고, 중화요리에서 이벤트로 x원 할인을 받았습니다. 실제로 사용한 돈은 얼마인가요?</Text>
            <TextInput keyboardType="numeric" placeholder="실제로 사용한 돈"/>

            <Text>3. 아내가 동진 씨에게 y원을 더 주었습니다. 현재 동진 씨의 잔액은 총 얼마인가요?</Text>
            <TextInput keyboardType="numeric" placeholder="잔액"/>

        </ScrollView>
    )
}

export default Normal1;