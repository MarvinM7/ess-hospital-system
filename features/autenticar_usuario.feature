Scenario: Fazer login com credenciais de paciente 
Given Estou na página de autenticação de usuários
And Existe um CPF “12345678900” vinculado a um paciente
When Tento fazer login com CPF “12345678900” e senha vinculada a ele
Then Vou para a tela inicial do sistema
And Estou logado como Paciente

Scenario: Fazer login com credenciais de administrador
Given Estou na página de autenticação de usuários
And Existe um CPF “00987654321” vinculado a um administrador
When Tento fazer login com CPF “00987654321” e senha vinculada a ele
Then Vou para a tela inicial do sistema
And Estou logado como Administrador

Scenario: Fazer login com credenciais inválidas
Given Estou na página de autenticação de usuários
When Tento fazer login com CPF “99999999999” e senha que não está vinculada a ele 
Then Continuo na tela de autenticação de usuários
And Vejo uma mensagem de erro de credenciais inválidas

Scenario: Cadastrar novo usuário
Given Estou na página de autenticação de usuários
And Não existe nenhum usuário cadastrado com o CPF “33371115474”
When Clico na opção de Cadastrar Usuários
And Adiciono o CPF “33371115474” e demais dados solicitados
Then Continuo na tela de autenticação de usuários
And Vejo uma mensagem de confirmação do cadastro

Scenario: Falha ao cadastrar novo usuário
Given Estou na página de autenticação de usuários
And Já existe um usuário cadastrado com o CPF “33371115474”
When Clico na opção de Cadastrar Usuários
And Adiciono o CPF “33371115474” e demais dados solicitados
Then Ainda estou na tela de autenticação de usuários
And Vejo uma mensagem de erro de CPF já cadastrado
