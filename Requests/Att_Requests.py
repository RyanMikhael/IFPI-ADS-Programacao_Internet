import requests
import requests_cache
from bs4 import BeautifulSoup
from pprint import pprint


entrada = str(input('Insira a url do site a ser baixado: '))
requests_cache.install_cache('banco')
response = requests.get(entrada)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    links = soup.select('a[href]',limit= 10)

    count = 1
    for link in links:
        print(count, end= '= ')
        print(link['href'])
        count += 1
        
else:
    print('ERRO!')

palavra_chave = str(input('Insira uma palavra-chave para ser buscada: '))
num = int(input('Digite o numero correspondente ao link que deseja buscar: '))


contador = 1
for link in links:
    if num == contador:
        resposta = requests.get(link['href'])
    contador += 1

if resposta.status_code == 200:
    soup2 = BeautifulSoup(resposta.text, 'html.parser')
    chaves = soup2.find_all('palavra_chave')

    for chave in chaves:
        print(chave)
    
else:
    print('ERRO!')

