import { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function RootLayout() {
  // 계산기
  // 상태값 부터 구현
  // input, setInput
  // currentOperator, setCurrentOperator
  // result, setResult
  // tempInput, setTempInput
  // tempOperator, setTempOperator
  const [input, setInput] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  const [result, setResult] = useState('');
  const [tempInput, setTempInput] = useState('');
  const [tempOperator, setTempOperator] = useState('');
  

  return (
    <SafeAreaView>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}
