import React, {useState} from 'react';


function Test(){
	//연관된 input을 하나의 state로 관리
const [inputs, setInputs] = useState({
    userName: '',
    phone: '',
    coupon: 0,
    pointInput: '',
  });

//비구조화 할당으로 값 추출
const { userName, phone, coupon, pointInput } = inputs;

//하나의 함수에서 input 전체의 값 관리
const changeInput = (e) => {
	
	console.log(e.target);
    const { id, value } = e.target;  //비구조화 할당으로 e.target에서 값 추출
    setInputs({
      ...inputs,   //기존의 input객체 복사
      [id]: value, //변경되는 부분 반영
    });
  };

return( 
	<>
<input id="userName" placeholder="이름" onChange={e=>setInputs(e.target.value)} />
<input id="phone" placeholder="휴대폰번호" onChange={changeInput}/>
<input id="coupon" value={coupon} onChange={changeInput}/>
<input id="pointInput" value={pointInput} onChange={changeInput}/>
	
	</>
)
}


export default Test;