import React from 'react'
import { Button } from 'react-native'

export default comp => {

    function executar() {
        console.warn('Divisão')
}
return (
    <>
        <Button
            title="/"
            onPress={executar}
        />
        <Button
            title="7"
            onPress={function () {
                console.warn('7')
            }}
        />
        <Button
            title="4"
            onPress={() => console.warn('4')}
        />
        <Button
            title="1"
            onPress={function () {
                console.warn('1')
            }}
        />
    </>
)}