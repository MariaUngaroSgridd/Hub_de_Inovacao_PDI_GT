# Hub de Inovação PDI GT

Site responsivo do Hub de Inovação PDI GT, com páginas para as áreas de Geração e Transmissão, projetos, publicações e envio de ideias. Os projetos de Hidrogênio Verde e Barco Elétrico possuem conteúdo organizado por iniciativa; a página de Hidrogênio Verde reúne imagens e reconhecimentos, enquanto a página do barco apresenta vídeo de navegação. O layout usa conteúdo original, linguagem clara e uma paleta inspirada nas diretrizes visuais fornecidas. O formulário de propostas fica em uma página própria, `enviar-ideia.html`, e usa o Basin para receber propostas e anexos PDF.

## Visualizar localmente

Abra `index.html` em um navegador. A página `enviar-ideia.html`, as páginas `artigos.html`, `catalogo-projetos.html`, `projeto-hidrogenio-verde.html` e `projeto-barco-eletrico.html` e a folha `inner-pages.css` devem permanecer na mesma pasta. O site não precisa de dependências para exibir o layout.

## Publicar atualizações

O repositório público é [Hub_de_Inovacao_PDI_GT](https://github.com/MariaUngaroSgridd/Hub_de_Inovacao_PDI_GT), e o GitHub Pages publica a partir da branch principal e da pasta raiz. Para publicar uma versão atualizada, envie `index.html`, `enviar-ideia.html`, `artigos.html`, `projeto-hidrogenio-verde.html`, `projeto-barco-eletrico.html`, `inner-pages.css` e a pasta `assets` para essa raiz e confira a implantação em **Actions → pages build and deployment**.

As publicações do projeto de Hidrogênio Verde incluem o livro e os PDFs integrais, armazenados em `assets`. O vídeo do Barco Elétrico foi otimizado para web; o arquivo original não foi alterado.

Na página `artigos.html`, livros e artigos aparecem juntos em uma única lista. Use os filtros de projeto, tema e busca textual para localizar publicações. O projeto Barco Elétrico fica apenas na área de projetos de Geração, não na lista de publicações. Para adicionar uma publicação, crie um cartão com `data-filterable`, `data-project`, `data-topic` e `data-search-text`; os valores de projeto e tema devem corresponder às opções dos filtros.
