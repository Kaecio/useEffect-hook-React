# Como usar o hook useEffect do React?
O useEffect é utilizado para executar ações em componentes funcionais do React em resposta a mudanças específicas. Ele não é executado apenas no carregamento da página, mas também em outras situações, como mudanças de estado ou propriedades.

## Sempre é executado quando o componente é renderizado.
O useEffect não é executado apenas no carregamento inicial da página, mas também em renderizações subsequentes do componente.

### Quando a página é carregada, a funcionalidade passada dentro do hook será chamada.
A função passada para o useEffect será chamada após o carregamento inicial da página e também quando ocorrerem mudanças que acionem sua execução.

#### useEffect(()=>{})

## Executa somente uma vez quando há mudança de estado no componente.
O useEffect pode ser configurado para ser executado após a primeira renderização e, se um array de dependências vazio for passado, ele será acionado somente uma vez.

#### useEffect(()=>{},[])

### Quando é passado um array de dependências, a funcionalidade passada dentro do hook será chamada somente se as dependências mudarem.
Quando um array de dependências é fornecido como segundo argumento para o useEffect, a funcionalidade dentro dele será acionada sempre que alguma das dependências sofrer alteração.

## Executa somente quando o valor passado no array de dependências muda.
O useEffect será acionado sempre que o valor passado no array de dependências sofrer alterações.

#### useEffect(()=>{},[valor])

### Desmonta uma funcionalidade que foi chamada dentro do hook useEffect.
Ao retornar uma função dentro do useEffect, você pode executar tarefas de limpeza quando o componente está prestes a ser desmontado.

## Quando usamos um retorno dentro do hook useEffect, o que foi passado dentro do useEffect será limpo durante a desmontagem do componente.
Ao utilizar o retorno de função dentro do useEffect, você pode realizar tarefas de limpeza quando o componente está sendo desmontado.

#### useEffect(()=>{()=>{}},[])
