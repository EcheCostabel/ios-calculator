import { useState, useRef } from 'react'



enum Operadores {
    sumar, restar, multiplicar, dividir
}


export const useCalc = () => {
  

    const [ number, setNumber ] = useState('0');
    const [ prevNumber, setprevNumber ] = useState('0');

    const lastOperation  = useRef<Operadores>()


    //limpiar numeros
    const clean = () => {
         setNumber('0')
         setprevNumber('0')
    };


    //Mostrar numero en pantalla
    const displayNumbers = (numText: string) => {
        
        //No acepto doble punto
        if(number.includes('.') && numText === '.') return;

        if(number.startsWith('0') || number.startsWith('-0')) {

            //Punto decimal
            if(numText === '.') {
                setNumber(number + numText);

                //Evaluamos si es otro cero y hay un punto
            }else if (numText === '0' && number.includes('.')) {
                setNumber(number + numText)

                //Evaluamos si es diferente de cero y no tiene un punto. 
            } else if( numText !== '0' && !number.includes('.') ) {
                setNumber(numText)

                //Evitamos 000.0
            }else if(numText === '0' && !number.includes('.')) {
                setNumber(number)
            }else {
                setNumber(number + numText)
            }

        } else {
            setNumber(number + numText)
        }

        
    };


    //cambiar a positivo o negativo
    const positiveNegative = () => {
        if(number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    };


    const btnDelete = () => {

        if(number.length === 1 || number.length === 2 && number.includes('-')) { //esto es para cuando esta en -7 por ejemplo y lo toco, me mande a 0
            setNumber('0')
        }else {
            setNumber(number.slice(0, -1))
        }
    };

    const changeNumToPrev = ( ) => {
        if(number.endsWith('.')) {  //si el number termina con '.' le sacamos el punto 
            setprevNumber(number.slice(0, -1))
        } else {
            setprevNumber(number)
        }

        setNumber('0');
    };


    const dividirButton = () => {
        changeNumToPrev()
        lastOperation.current = Operadores.dividir;
    };

    const multiplicarButton = () => {
        changeNumToPrev()
        lastOperation.current = Operadores.multiplicar;
    };

    const sumarButton = () => {
        changeNumToPrev()
        lastOperation.current = Operadores.sumar;
    };

    const restarButton = () => {
        changeNumToPrev()
        lastOperation.current = Operadores.restar;
    };


    const operation = ( ) => {

        const num1 = Number(number);   //Paso estos datos a Number para poder hacer las operaciones porque estan en strings
        const num2 = Number(prevNumber);

        switch (lastOperation.current)  {

            case Operadores.sumar :
                setNumber(`${num1 + num2}`);
                break;


            case Operadores.restar:
                setNumber(`${num2 - num1}`);
                break;

            
            case Operadores.multiplicar:
                setNumber(`${num1 * num2}`);
                break;


            case Operadores.dividir:
                setNumber(`${num2 / num1}`);
                break;
            
        }
        setprevNumber('0');
    }   

    return {
        prevNumber,
        number,
        clean,
        positiveNegative,
        btnDelete,
        dividirButton,
        displayNumbers,
        multiplicarButton,
        restarButton,        
        sumarButton,
        operation,
    }

}


