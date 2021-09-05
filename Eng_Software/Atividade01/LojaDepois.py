class cores:

    azul = '\033[34m'
    vermelho = '\033[31m'
    branco = '\033[37m'


def menu():

    print(cores.azul + 132 * '=')
    loja = cores.vermelho + 'Loja de Biscoitos'.center(132)
    print(loja)
    print(cores.azul + 132 * '=')

    print(cores.branco + '\n\n>>>>> Caixa de biscoito ---- 30R$\n ')

    print('Escolha a forma de pagamento!\n1 >-- A vista em dinheiro = Recebe 10% de desconto'+
    '\n2 >-- A vista no cartão = Recebe 5% de desconto'+
    '\n3 >-- Em até 2x no cartão = Não há desconto no produto'+
    '\n4 >-- 3x ou mais no cartão = Há acrescimo no preço final do produto')


def pagamento(escolha):
    
    # preço do produto, no caso biscoito
    produto = 30

    if escolha == 1:

        porcentagem = produto / 10
        produto = produto - porcentagem
        print('O preço a se pagar pelo produto é {} R$'.format(produto))

    if escolha == 2:

        porcentagem = (5 * produto)/100
        produto = produto - porcentagem
        print('O preço a se pagar pelo produto é {:.2f} R$'.format(produto))
    
    if escolha == 3:

        divisao = produto/2
        print('O preço a ser pago pelo produto é {} R$'.format(produto))
        print('Dividido em 2x de {:.2f} R$'.format(divisao))

    if escolha == 4:

        porcentagem = (20 * produto)/100
        produto = produto + porcentagem
        parcelas = int(input('Quantas parcelas vai ser dividida o produto: '))
        divisao = produto / parcelas
        print('O preço a se pagar pelo produto é {:.2f} R$'.format(produto))
        print('Dividido em {}x de {:.2f} R$'.format(parcelas, divisao))

        

def main():

    menu()

    escolha = int(input('Digite um numero de acordo com a sua escolha: '))

    if (escolha < 1 or escolha > 4) :
        print('Erro!\nNumero escolhido inválido, não há forma de pagamento com o numero escolhido')

    pagamento(escolha)


main()