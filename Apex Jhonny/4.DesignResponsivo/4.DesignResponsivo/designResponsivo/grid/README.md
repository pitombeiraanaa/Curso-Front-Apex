# CSS GRID


## GRID

- Bimensional
- Divisão de toda a página em linhas e colunas
- Colocar elementos onde quiser nessa divisão

---

## GRID OU FLEXBOX

- Grid: Duas dimensões (colunas e linhas)
- Flexbox: Uma dimensão (ou coluna ou linha)
- Um complementa o trabalho do outro
- Verificar quais navegadores ainda não estão aceitando o Grid


---

## PROPRIEDADES


Vamos separar em 2 grupos:
`container` e `item(s)`

---
### CONTAINER


* Ativa o Modo grid
```css
display: grid;
``` 
---
* Diz quantas colunas o grid vai ter
```css
grid-template-columns;
``` 
---
* Diz quantas linhas o grid vai ter
```css
grid-template-rows;
``` 
---

* Define qual o espaço entre os itens
```css
grid-gap
  - grid-row-gap
  - grid-column-gap
``` 
---
* Define o esquema de posicionamento dos itens
```css
grid-template-areas;
``` 
---
## ITEM(s)

- grid-column
  - grid-column-start
  - grid-column-end
- grid-row
  - grid-row-start
  - grid-row-end
- grid-area