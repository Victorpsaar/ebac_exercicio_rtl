import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve renderizar dois comentarios', () => {
        render(<PostComment />);
        const input = screen.getByTestId('area-text')
        const btn = screen.getByTestId('btn-text')

        fireEvent.change(input, {target: {value: 'Belo Batimovel'}})
        fireEvent.click(btn)

        fireEvent.change(input, {target: {value: 'Belissimo Batimovel'}})
        fireEvent.click(btn)

        expect(screen.getAllByTestId('comment')).toHaveLength(2)
    })
});