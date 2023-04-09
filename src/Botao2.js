import React from 'react'
import { Button } from 'react-native'

export default comp => {

    function executar() {
        console.warn('Multiplicação')
}
return (
    <>
        <Button
            title="*"
            onPress={executar}
        />
        <Button
            title="9"
            onPress={function () {
                console.warn('9')
            }}
        />
        <Button
            title="6"
            onPress={() => console.warn('6')}
        />
        <Button
            title="3"
            onPress={function () {
                console.warn('3')
            }}
        />
    </>
)}