# Como usar o hook useEffect do React?


### sempre executa quando a pagina é carregada.

#### quando a pagina é carregada, a funcionalidade que é passada dentro do hook será chamado
useEffect(()=>{})

### executa somente uma vez quando a mudança de estado na pagina

#### quando é passado um array de dependencia, a funcionalidade passada dentro do hook será chamada somente uma vez
useEffect(()=>{},[])

### executa somente uma vez quando o valor é passado dentro dentro do array

#### quando o valor é passado dentro do array de dependencia, ele nao será chamado novemante
useEffect(()=>{},[valor])

### desmonta uma funcionalidade que foi chamada dentro do hook useEffect

#### quando usamos um retorno dentro do hook, o que foi passado dentro dentro do useEffect será apagado(desmontado)
useEffect(()=>{()=>{}},[])