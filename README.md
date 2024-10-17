# Soprano to Alto Recorder Sheet Music Transposer Typescript Version

Queria ter um motivo para usar o Bun e por isso reescrevi o
[soprano2alto](https://github.com/lucasbalena/soprano2alto) em TypeScript.

Ao invés de usar o `readline-sync`, ele usa o `prompt` que o _node_ não
implementou.

Ele deve rodar tranquilamente com o _bun_ e o _deno_, pois ambos removem a
tipagem antes de interpretar e implementaram as Web APIs.

E por usar Web APIs ele roda no
[browser](https://lucasbalena.github.io/soprano2alto-ts/)!
