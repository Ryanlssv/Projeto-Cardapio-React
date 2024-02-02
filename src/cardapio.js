import enroladinhoMignonImg from './assets/pratos/enroladinho-mignon.jpeg';
import casal20Img from './assets/pratos/casal-20.jpeg';
import burguerPicanhaImg from './assets/pratos/burguer-picanha.jpeg';
import fishChipsImg from './assets/pratos/fish-chips.jpeg';
import risotoCamaraoTrufadoImg from './assets/pratos/risoto-camarao-trufado.jpeg';
import strogonoffImg from './assets/pratos/strogonoff.webp';

import brownieImg from './assets/sobremesas/brownie.jpeg';
import cocadaFornoImg from './assets/sobremesas/cocada-forno.jpeg';
import petitGateauImg from './assets/sobremesas/petit-gateau.jpeg';
import FrozenYogurtImg from './assets/sobremesas/sorvete.jpg';

import aguaSemGasImg from './assets/bebidas/agua-sem-gas.jpeg';
import aguaComGasImg from './assets/bebidas/agua-com-gas.jpeg';
import cocaColaImg from './assets/bebidas/coca-cola.jpeg';
import guaranaImg from './assets/bebidas/guarana.jpeg';
import heinekenImg from './assets/bebidas/heineken.jpeg';
import SucoLaranjaImg from './assets/bebidas/Suco.jpg';

export const enroladinhoMignon = {
  nome: 'Enroladinho de Mignon',
  preco: 'R$ 64,90',
  imagem: enroladinhoMignonImg,
  descricao: 'Finíssimas fatias de filé mignon enroladas no parmesão',
};
const casal20 = {
  nome: 'Casal 20',
  preco: 'R$ 29,00',
  imagem: casal20Img,
  descricao: 'Casal perfeito pão de alho caseiro e linguiça toscana grill',
};
const burguerPicanha = {
  nome: 'Burguer de Picanha',
  preco: 'R$ 44,90',
  imagem: burguerPicanhaImg,
  descricao:
    'Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon',
};
const fishChips = {
  nome: 'Fish and Chips',
  preco: 'R$ 79,90',
  imagem: fishChipsImg,
  descricao:
    'Iscas de Peixe Empanada na Farinha Panko e Flocos de Milho e Batata Frita Palito',
};
const risotoCamaraoTrufado = {
  nome: 'Risoto de Camarão Trufado',
  preco: 'R$ 72,90',
  imagem: risotoCamaraoTrufadoImg,
  descricao:
    'Arroz Arbóreo, camarões salteados no azeite trufado e crocantes de panko',
};

const strogonoff = {
  nome: 'Strogonoff de Frango',
  preco: 'R$21,99',
  imagem: strogonoffImg,
  descricao:
  'strogonofe de Frango bem cozido e macio'
}

const brownie = {
  nome: 'Brownie',
  preco: 'R$ 32,90',
  imagem: brownieImg,
  descricao:
    'Delicioso brownie caseiro, sorvete de creme, calda quente de chocolate',
};
const cocadaForno = {
  nome: 'Cocada de Forno',
  preco: 'R$ 32,90',
  imagem: cocadaFornoImg,
  descricao:
    'Cremosa cocada de coco torrado, doce de leite argentino e sorvete de creme',
};
const petitGateau = {
  nome: 'Petit Gateau',
  preco: 'R$ 34,90',
  imagem: petitGateauImg,
  descricao:
    'Bolo quente recheado com ganache de chocolate, leite condensado e castanha de caju',
};

const FrozenYogurt = {
  nome:'Frozen Yogurt',
  preco:'29,90',
  imagem: FrozenYogurtImg,
  descricao: 'natural com cobertura de frutas vermelhas'
}

const aguaSemGas = {
  nome: 'Água sem gás',
  preco: 'R$ 6,90',
  imagem: aguaSemGasImg,
  descricao: '310ml',
};
const aguaComGas = {
  nome: 'Água com gás',
  preco: 'R$ 7,90',
  imagem: aguaComGasImg,
  descricao: '310ml',
};
const cocaCola = {
  nome: 'Coca-Cola',
  preco: 'R$ 7,90',
  imagem: cocaColaImg,
  descricao: '290ml',
};
const guarana = {
  nome: 'Guaraná Antártica',
  preco: 'R$ 7,90',
  imagem: guaranaImg,
  descricao: '350ml',
};
const heineken = {
  nome: 'Heineken',
  preco: 'R$ 15,90',
  imagem: heinekenImg,
  descricao: '355ml',
};

const SucoLaranja = {
  nome: 'Suco de Laranja',
  preco: 'R$ 7,90',
  imagem: SucoLaranjaImg,
  descricao: '355ml',
};

export const pratosPrincipais = [
  burguerPicanha,
  enroladinhoMignon,
  casal20,
  fishChips,
  risotoCamaraoTrufado,
  strogonoff,
];

export const sobremesas = [brownie, cocadaForno, petitGateau,FrozenYogurt];

export const bebidas = [aguaSemGas, aguaComGas, cocaCola, guarana, heineken,SucoLaranja];
