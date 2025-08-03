import { Calculator } from '@/src/Calculator';
import { useState } from 'react';
// import { SafeAreaView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  // 계산기
  // 상태값 부터 구현
  const [input, setInput] = useState(''); // 현재 입력값
  const [currentOperator, setCurrentOperator] = useState(''); // 현재 연산자, 클릭됐다는 보더가 필요
  const [result, setResult] = useState(''); // 결과값(계산을 끝내기 전까지 계산된 값))
  const [tempInput, setTempInput] = useState(''); // = 버튼을 누르면 저장되어 있던 입력값을 확인하기 위함
  const [tempOperator, setTempOperator] = useState(''); // = 버튼을 누르면 저장되어 있던 연산자를 확인하기 위함
  

  return (
    <SafeAreaView>
      <Calculator />
    </SafeAreaView>
  );
}