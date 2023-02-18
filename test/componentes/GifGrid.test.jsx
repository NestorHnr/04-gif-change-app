import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifts } from "../../src/hooks/useFetchGifts"

jest.mock("../../src/hooks/useFetchGifts");

describe('Probar <GifGrid/>', () => { 

    const category = 'One punch'

    test('Debe de mostrar el louding inicialmente', () => { 

        useFetchGifts.mockReturnValue({
            images:[],
            isLoading: true
        });

        render(<GifGrid category={ category }/>)
        expect( screen.getByText( 'Cargando...' ));
        expect( screen.getByText( category ));

     });

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs= [
        {
            id: 'abc',
            title: 'Saitama',
            url: 'http:/akjsdhfjkjs.com'
        },
        {
            id: '123',
            title: 'Dragon',
            url: 'http:/akdhfjkjs.com'
        }
    ]
        useFetchGifts.mockReturnValue({
            images:gifs,
            isLoading: false
        });
        render(<GifGrid category={ category }/>)
        expect( screen.getAllByRole( 'img' ).length).toBe(2);


      })
 })