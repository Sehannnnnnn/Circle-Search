import React from "react";

export function AlertID(props) {
    const isPassed = props.isPassed;
    if (isPassed) {
        return (
            <div>사용할 수 있는 아이디입니다.</div>
        )
    } else return <div>아이디 형식과 맞지 않습니다!</div>
}

export function AlertPW(props) {
    const isPassed = props.isPassed;
    if (isPassed) {
        return (
            <div>사용할 수 있는 비밀번호입니다.</div>
        )
    } else return <div>비밀번호 형식과 맞지 않습니다!</div>
}

export function AlertPWCheck(props) {
    const isPassed = props.isPassed;
    if (isPassed) {
        return (
            <div>성공적으로 확인되었습니다.</div>
        )
    } else {
        return (
            <div>비밀번호와 일치하지 않습니다.</div>
        )
    }
}

export function AlertEmail(props) {
    const isPassed = props.isPassed;
    if (isPassed) {
        return (
            <div>사용가능한 이메일입니다.</div>
        )
    } else {
        return (
            <div>이메일 형식을 올바르게 입력해주세요.</div>
        )
    }
}