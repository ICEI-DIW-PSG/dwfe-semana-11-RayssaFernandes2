// ============================================================
//  RAYFLIX — app.js
//  Estrutura JSON + lógica da home-page e da página de detalhes
// ============================================================

const dados = {
  "filmes": [
    {
      "id": 1,
      "nome": "Inception",
      "descricao": "Um ladrão especialista em roubar segredos do subconsciente recebe a missão de plantar uma ideia.",
      "conteudo": "Inception é uma obra-prima do cinema moderno dirigida por Christopher Nolan. O filme explora os limites da realidade e dos sonhos através de uma narrativa em camadas que desafia a percepção do espectador. Dom Cobb lidera uma equipe de especialistas para realizar o impossível: plantar uma ideia na mente de um herdeiro bilionário. Com visuais deslumbrantes e uma trilha sonora icônica de Hans Zimmer, o filme questiona o que é real e o que é sonho, tornando-se um marco da ficção científica.",
      "diretor": "Christopher Nolan",
      "ano": 2010,
      "genero": "Ficção Científica / Thriller",
      "duracao": "148 min",
      "nota": 8.8,
      "destaque": true,
      "imagem_principal": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      "fotos": [
        { "id": 1, "titulo": "O Sonho Compartilhado", "imagem": "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&q=80" },
        { "id": 2, "titulo": "Arquitetura dos Sonhos", "imagem": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
        { "id": 3, "titulo": "O Topo Giratório", "imagem": "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=600&q=80" }
      ]
    },
    {
      "id": 2,
      "nome": "Interstellar",
      "descricao": "Exploradores viajam através de um buraco de minhoca no espaço para garantir a sobrevivência da humanidade.",
      "conteudo": "Interstellar é uma jornada épica pelo cosmos que combina ciência com emoção humana. Christopher Nolan, em parceria com o físico Kip Thorne, criou um retrato visualmente deslumbrante do espaço interestelar. Cooper, um ex-piloto, é recrutado para liderar uma missão de última chance: atravessar um buraco de minhoca perto de Saturno em busca de um novo lar para a humanidade. O filme é uma meditação poderosa sobre amor, sacrifício, relatividade do tempo e o espírito explorador da humanidade.",
      "diretor": "Christopher Nolan",
      "ano": 2014,
      "genero": "Ficção Científica / Drama",
      "duracao": "169 min",
      "nota": 8.6,
      "destaque": true,
      "imagem_principal": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
      "fotos": [
        { "id": 1, "titulo": "A Galáxia Distante", "imagem": "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=600&q=80" },
        { "id": 2, "titulo": "Planeta Alienígena", "imagem": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&q=80" },
        { "id": 3, "titulo": "O Buraco Negro", "imagem": "https://images.unsplash.com/photo-1534996858221-380b92700493?w=600&q=80" }
      ]
    },
    {
      "id": 3,
      "nome": "O Poderoso Chefão",
      "descricao": "A saga da família mafiosa Corleone, uma das mais poderosas histórias de crime já contadas.",
      "conteudo": "O Poderoso Chefão de Francis Ford Coppola é considerado um dos maiores filmes já feitos. A história da família Corleone é uma análise profunda do poder, lealdade, família e corrupção. Don Vito Corleone lidera um império do crime com mão de ferro, até que uma tentativa de assassinato força seu filho mais novo, Michael, a assumir o negócio que sempre tentou evitar. Com Marlon Brando e Al Pacino em papéis definitivos de suas carreiras, o filme redefiniu o gênero de drama criminal para sempre.",
      "diretor": "Francis Ford Coppola",
      "ano": 1972,
      "genero": "Crime / Drama",
      "duracao": "175 min",
      "nota": 9.2,
      "destaque": false,
      "imagem_principal": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      "fotos": [
        { "id": 1, "titulo": "A Oferta que Não Pode Ser Recusada", "imagem": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80" },
        { "id": 2, "titulo": "A Família", "imagem": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80" },
        { "id": 3, "titulo": "Negócios da Família", "imagem": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" }
      ]
    },
    {
      "id": 4,
      "nome": "Parasite",
      "descricao": "Uma família pobre se infiltra na vida de uma família rica em Seul com consequências surpreendentes.",
      "conteudo": "Parasite de Bong Joon-ho é uma obra singular que mescla comédia, thriller e crítica social de forma magistral. Vencedor do Oscar de Melhor Filme em 2020, primeiro filme não anglófono a conquistar o prêmio, o longa expõe as desigualdades da sociedade sul-coreana com uma narrativa cheia de reviravoltas. A família Ki-taek vive no subsolo da sociedade até que o filho consegue um emprego como tutor da família Park, rica e ingênua. O que começa como um esquema inteligente rapidamente descamba para algo muito mais sombrio.",
      "diretor": "Bong Joon-ho",
      "ano": 2019,
      "genero": "Thriller / Drama",
      "duracao": "132 min",
      "nota": 8.5,
      "destaque": true,
      "imagem_principal": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
      "fotos": [
        { "id": 1, "titulo": "A Mansão", "imagem": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
        { "id": 2, "titulo": "Dois Mundos", "imagem": "https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=600&q=80" },
        { "id": 3, "titulo": "O Subsolo", "imagem": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" }
      ]
    },
    {
      "id": 5,
      "nome": "2001: Uma Odisseia no Espaço",
      "descricao": "Uma viagem épica pelo cosmos que redefine os limites do cinema e da imaginação humana.",
      "conteudo": "Stanley Kubrick criou com 2001 uma das experiências cinematográficas mais profundas e debatidas da história. O filme explora a evolução humana, a inteligência artificial e os mistérios do universo de forma absolutamente visionária. Desde a aurora da humanidade até uma missão espacial controlada pela IA HAL 9000, o longa narra a busca pelo desconhecido com uma poesia visual sem igual. Com efeitos revolucionários para a época e a trilha sonora clássica de Richard Strauss, é uma obra que transcende gerações.",
      "diretor": "Stanley Kubrick",
      "ano": 1968,
      "genero": "Ficção Científica",
      "duracao": "149 min",
      "nota": 8.3,
      "destaque": false,
      "imagem_principal": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      "fotos": [
        { "id": 1, "titulo": "A Odisseia Espacial", "imagem": "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=600&q=80" },
        { "id": 2, "titulo": "HAL 9000", "imagem": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80" },
        { "id": 3, "titulo": "O Monolito", "imagem": "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=600&q=80" }
      ]
    },
    {
      "id": 6,
      "nome": "Mulholland Drive",
      "descricao": "Uma aspirante a atriz e uma amnésica se envolvem em um misterioso quebra-cabeça em Los Angeles.",
      "conteudo": "David Lynch criou com Mulholland Drive uma das obras mais enigmáticas e fascinantes do cinema. O filme embaralha sonho e realidade em uma narrativa não-linear que desafia qualquer interpretação definitiva. Uma jovem atriz chega em Hollywood cheia de esperanças e encontra uma mulher que perdeu a memória após um acidente. Juntas, investigam a identidade da misteriosa desconhecida. Naomi Watts entrega uma das mais extraordinárias performances duplas da história do cinema, transitando entre inocência e desespero com maestria absoluta.",
      "diretor": "David Lynch",
      "ano": 2001,
      "genero": "Mistério / Thriller",
      "duracao": "147 min",
      "nota": 7.9,
      "destaque": false,
      "imagem_principal": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
      "fotos": [
        { "id": 1, "titulo": "Hollywood em Sonhos", "imagem": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
        { "id": 2, "titulo": "A Estrada Sombria", "imagem": "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600&q=80" },
        { "id": 3, "titulo": "Teatro Club Silencio", "imagem": "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&q=80" }
      ]
    }
  ],
  "aluno": {
    "nome": "Rayssa Fernandes",
    "curso": "Análise e Desenvolvimento de Sistemas",
    "turma": "2026/1",
    "redes": {
      "github": "https://github.com",
      "twitter": "https://twitter.com"
    }
  }
};

// ==================== HOMEPAGE ====================

function renderSlider() {
  const destaques = dados.filmes.filter(f => f.destaque);
  const inner = document.getElementById('sliderInner');
  const indicators = document.getElementById('sliderIndicators');
  if (!inner) return;

  inner.innerHTML = '';
  indicators.innerHTML = '';

  destaques.forEach((filme, i) => {
    const active = i === 0 ? 'active' : '';

    inner.innerHTML += `
      <div class="carousel-item ${active}">
        <div class="slider-bg" style="background-image: url('${filme.imagem_principal}')"></div>
        <div class="carousel-caption slider-caption">
          <span class="badge-genero">${filme.genero}</span>
          <h2>${filme.nome}</h2>
          <p>${filme.descricao}</p>
          <div class="slider-meta">
            <span>🎬 ${filme.diretor}</span>
            <span>📅 ${filme.ano}</span>
            <span>⭐ ${filme.nota}</span>
          </div>
          <a href="detalhe.html?id=${filme.id}" class="btn-ver">Ver Detalhes</a>
        </div>
      </div>`;

    indicators.innerHTML += `
      <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="${i}"
        class="${active}" aria-label="Slide ${i + 1}"></button>`;
  });
}

function renderCards() {
  const container = document.getElementById('filmesGrid');
  if (!container) return;

  container.innerHTML = dados.filmes.map(filme => `
    <div class="col-12 col-sm-6 col-lg-4 mb-4">
      <div class="card-filme" onclick="window.location='detalhe.html?id=${filme.id}'">
        <div class="card-img-wrap">
          <img src="${filme.imagem_principal}" alt="${filme.nome}" loading="lazy">
          <span class="card-nota">⭐ ${filme.nota}</span>
          ${filme.destaque ? '<span class="card-destaque">DESTAQUE</span>' : ''}
        </div>
        <div class="card-body-filme">
          <p class="card-genero">${filme.genero}</p>
          <h3 class="card-titulo"><a href="detalhe.html?id=${filme.id}">${filme.nome}</a></h3>
          <p class="card-desc">${filme.descricao}</p>
          <div class="card-footer-filme">
            <span>🎬 ${filme.diretor}</span>
            <span>📅 ${filme.ano}</span>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function renderAluno() {
  const container = document.getElementById('alunoSection');
  if (!container) return;
  const a = dados.aluno;
  container.innerHTML = `
    <div class="aluno-card">
      <div class="aluno-avatar">🎬</div>
      <div class="aluno-info">
        <h4>${a.nome}</h4>
        <p>Curso: ${a.curso}</p>
        <p>Turma: ${a.turma}</p>
        <div class="aluno-redes">
          <a href="${a.redes.github}" target="_blank">GitHub</a>
          <a href="${a.redes.twitter}" target="_blank">Twitter</a>
        </div>
      </div>
    </div>`;
}

// ==================== PÁGINA DE DETALHE ====================

function renderDetalhe() {
  const info = document.getElementById('detalheInfo');
  if (!info) return;

  // Lê o id da query string da URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  // Busca o filme pelo id no JSON
  const filme = dados.filmes.find(f => f.id === id);

  if (!filme) {
    info.innerHTML = `
      <div class="erro-detalhe">
        <h2>Filme não encontrado</h2>
        <p>O filme que você procura não existe no catálogo.</p>
      </div>`;
    return;
  }

  // Atualiza o título da aba do navegador
  document.title = `${filme.nome} — RAYFLIX`;

  // Monta o bloco de informações principais
  info.innerHTML = `
    <div class="detalhe-hero" style="background-image: url('${filme.imagem_principal}')">
      <div class="detalhe-overlay">
        <span class="badge-genero">${filme.genero}</span>
        <h1>${filme.nome}</h1>
        <p class="detalhe-desc">${filme.descricao}</p>
      </div>
    </div>

    <div class="detalhe-meta-grid">
      <div class="meta-item">
        <span class="meta-label">Diretor</span>
        <span class="meta-valor">🎬 ${filme.diretor}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Ano</span>
        <span class="meta-valor">📅 ${filme.ano}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Duração</span>
        <span class="meta-valor">⏱ ${filme.duracao}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Avaliação IMDb</span>
        <span class="meta-valor nota-grande">⭐ ${filme.nota}/10</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Gênero</span>
        <span class="meta-valor">🎭 ${filme.genero}</span>
      </div>
    </div>

    <div class="detalhe-sinopse">
      <h4>Sinopse</h4>
      <p>${filme.conteudo}</p>
    </div>`;
}

function renderFotos() {
  const fotos = document.getElementById('detalheFotos');
  if (!fotos) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const filme = dados.filmes.find(f => f.id === id);
  if (!filme) return;

  fotos.innerHTML = filme.fotos.map(foto => `
    <div class="col-12 col-sm-6 col-md-4 mb-4">
      <div class="foto-card">
        <img src="${foto.imagem}" alt="${foto.titulo}" loading="lazy">
        <p class="foto-titulo">${foto.titulo}</p>
      </div>
    </div>`).join('');
}

// ==================== INICIALIZAÇÃO ====================

document.addEventListener('DOMContentLoaded', () => {
  // Home-page
  renderSlider();
  renderCards();
  renderAluno();

  // Página de detalhes
  renderDetalhe();
  renderFotos();
});