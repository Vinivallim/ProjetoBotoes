import React from 'react'
import { Button } from 'react-native'

export default comp => {

    function executar() {
        console.warn('Soma')
}
return (
    <>
        <Button
            title="+"
            onPress={executar}
        />
        <Button
            title="8"
            onPress={function () {
                console.warn('8')
            }}
        />
        <Button
            title="5"
            onPress={() => console.warn('5')}
        />
        <Button
            title="2"
            onPress={function () {
                console.warn('2')
            }}
        />
    </>
)}