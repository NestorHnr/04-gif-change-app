import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Prueba en <AddCategory/>', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 
        
        render( <AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole( 'textbox' );

        fireEvent.input( input, { target: { value: 'saitama'}});
        expect( input.value ).toBe( 'saitama' );
     });

     test('Debe de llamar onNewCategory si el imput tiene un valor', () => { 

        const inputValue = 'saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, {target: { value: inputValue}});
        fireEvent.submit( form );
        
        expect( input.value ).toBe( '' );

        // indica si la funcion es llamada
        expect( onNewCategory ).toHaveBeenCalled();
        
        //Indica la cantidad de veces que la funcion fue llamada
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 ); 

        //Indica si la funcion fue llamada con el valor solicitado
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

      });

      test('No debe de lamar el onNewCategory si el imput esta vacio', () => { 

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole( 'form' );

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();



       });
 });
