def main():

    print(137 * '\033[34m=\033[m')
    menu = '\033[30mLOJA DE BISCOITOS\033[m'.center(137)
    print(menu)
    print(137 * '\033[34m=\033[m')
    print('\n\n>>>>> Caixa de biscoito ---- 30R$\n ')
    produto = 30

    print('1 >-- A vista/cheque\n2 >-- A vista no cartão\n3 >-- Em até 2x no cartão\n4 >-- 3x ou mais no cartão')
    escolha = int(input('Digite um numero de acordo com a sua escolha: '))

    if escolha == 1:

        porcentagem = produto / 10
        produto = produto - porcentagem
        print('O preço a se pagar pelo produto é {} R$'.format(produto))

    elif escolha == 2:

        porcentagem = (5 * produto)/100
        produto = produto - porcentagem
        print('O preço a se pagar pelo produto é {:.2f} R$'.format(produto))
    
    elif escolha == 3:

        divisao = produto/2
        print('O preço a ser pago pelo produto é {} R$'.format(produto))
        print('Dividido em 2x de {:.2f} R$'.format(divisao))

    elif escolha == 4:

        porcentagem = (20 * produto)/100
        produto = produto + porcentagem
        parcelas = int(input('Quantas parcelas vai ser dividida o produto: '))
        divisao = produto / parcelas
        print('O preço a se pagar pelo produto é {:.2f} R$'.format(produto))
        print('Dividido em {}x de {:.2f} R$'.format(parcelas, divisao))

    else:
        
        print('Numero escolhido inválido!')

main()