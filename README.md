# Soprano to Alto Recorder Sheet Music Transposer Typescript Version

Queria ter um motivo para usar o Bun e por isso reescrevi o [soprano2alto](https://github.com/lucasbalena/soprano2alto) em TypeScript.

Ao invés de usar o `readline-sync`, ele usa o `prompt` que o **node** não implementou.

Ele deve rodar tranquilamente com o **bun** e o **deno**, pois ambos removem a tipagem antes de interpretar e implementaram as Web APIs.
