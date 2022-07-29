Feature: Marcação de exames
	Como usuária da rede hospitalar
	Quero realizar a marcação de exame

Cenário: Marcação de exame
Dado que eu seja um usuário da rede hospitalar
E eu esteja logado no sistema
Quando eu tento marcar um exame num horário disponível
Então eu vejo a confirmação da marcação
Então eu clico no botão de ok e vejo a tela mostrar a lista de exames marcados já com o último exame marcado 

falha 1

falha 2

Cenário: Marcação de exame sem escolher horário
Dado que eu seja um usuário da rede hospitalar
E eu esteja logado no sistema
Quando eu tento marcar um exame sem escolher o horário
Então eu vejo um aviso na tela de que não foi possível realizar a marcação devido ao usuário não ter escolhido um horário

Cenário: Marcação de exame sem escolher data
Dado que eu seja um usuário da rede hospitalar
E eu esteja logado no sistema
Quando eu tento marcar um exame sem escolher a data
Então eu vejo um aviso na tela de que não foi possível realizar a marcação pois não escolhi uma data