// --- Mock Data ---
const mockSongs = [
    {
        id: 's1',
        title: 'Água da Vida',
        artist: 'Eliana Ribeiro',
        albumArt: 'https://placehold.co/150x150/1A1A1A/CCE0CC?text=Agua+Vida',
        type: 'liturgico',
        tags: ['Louvor', 'Tempo Comum'],
        chords: `(D)Água da (G)vida que (D)jorra, (A)aleluia!\n(D)Vem, Senhor (G)Jesus, vem (D)encher-nos (A)de (D)alegria.`,
        lyrics: `Água da vida que jorra, aleluia!
Vem, Senhor Jesus, vem encher-nos de alegria.
Fonte que sacia a sede, aleluia!
Cura e restaura, nos renova em amor.`
    },
    {
        id: 's2',
        title: 'Escala Maior de C',
        artist: 'Exemplo Didático',
        albumArt: 'https://placehold.co/150x150/1A1A1A/CCE0CC?text=Escala+C',
        type: 'estudo',
        tags: ['Teoria', 'Iniciante', 'Exercício'],
        chords: `C - D - E - F - G - A - B - C`,
        lyrics: `Esta é a escala maior de Dó. Pratique cada nota e a sonoridade ascendente e descendente.
Comece no Dó, suba até o próximo Dó, e depois desça novamente.`
    },
    {
        id: 's3',
        title: 'Minueto em G',
        artist: 'J.S. Bach',
        albumArt: 'https://placehold.co/150x150/1A1A1A/CCE0CC?text=Minueto',
        type: 'estudo',
        tags: ['Clássico', 'Intermediário', 'Instrumental'],
        chords: `(G)Minueto em (D)Sol Maior (G)para estudo de (C)flauta doce.\n(G)Melodia (D)suave, (Am)ritmo (D)elegante.`,
        lyrics: `Minueto em Sol Maior, BWV Anh. 114.
Uma peça clássica para refinar sua técnica e interpretação.`
    },
    {
        id: 's4',
        title: 'Kyrie Eleison',
        artist: 'Canto Gregoriano',
        albumArt: 'https://placehold.co/150x150/1A1A1A/CCE0CC?text=Kyrie',
        type: 'liturgico',
        tags: ['Canto', 'Liturgia', 'Oração'],
        chords: `Kyrie Eleison, Christe Eleison, Kyrie Eleison`,
        lyrics: `Kyrie eleison. (Senhor, tende piedade de nós)
Christe eleison. (Cristo, tende piedade de nós)
Kyrie eleison. (Senhor, tende piedade de nós)`
    },
    {
        id: 's5',
        title: 'Noite Feliz',
        artist: 'Tradicional',
        albumArt: 'https://placehold.co/150x150/1A1A1A/CCE0CC?text=Noite+Feliz',
        type: 'liturgico',
        tags: ['Natal', 'Tradicional', 'Festivo'],
        chords: `(C)Noite fe(G)liz, (C)Noite de (F)paz! (C)Oh, Jesus, (G)o divino (C)amor.`,
        lyrics: `Noite feliz! Noite feliz!
Oh, Jesus, o divino amor.
Paz na terra, aos homens,
Aleluia! Noite feliz!`
    },
    {
        id: 's6',
        title: 'Tua Luz Brilhará',
        artist: 'Leandro Dim',
        albumArt: 'https://placehold.co/150x150/1A1A1A/CCE0CC?text=Tua+Luz',
        type: 'liturgico',
        tags: ['Louvor', 'Adoração', 'Tempo Comum'],
        chords: `(C)Tua luz (G)brilhará em (Am)mim.\n(F)E a esperança (C)não se (G)apagará.`,
        lyrics: `Tua luz brilhará em mim, para sempre.
Não há escuridão que possa nos calar.
Com a tua força, vamos caminhar,
E a esperança não se apagará.`
    },
    {
        id: 's7',
        title: 'Louva a Deus',
        artist: 'Eugênio Jorge',
        albumArt: 'https://placehold.co/150x150/1A1A1A/CCE0CC?text=Louva+Deus',
        type: 'liturgico',
        tags: ['Louvor', 'Adoração'],
        chords: `(G)Louva a Deus de (C)todo o coração.\n(D)Pois Ele é (G)bom e sua (C)misericórdia (D)dura (G)para (C)sempre.`,
        lyrics: `Louva a Deus de todo o coração, com alegria.
Exalta o seu nome em cada canção.
Ele é fiel, Ele é amor, Ele é a nossa salvação.
Louva a Deus.`
    },
    {
        id: 's8',
        title: 'Sem Coração',
        artist: 'Católicas',
        albumArt: 'https://placehold.co/150x150/1A1A1A/CCE0CC?text=Sem+Coracao',
        type: 'liturgico',
        tags: ['Popular', 'Reflexão', 'Tempo Comum'],
        chords: `(Am)Sem coração (G)não consigo (C)viver.\n(F)Teu amor me (C)sustenta, (G)minha (C)vida.`,
        lyrics: `Sem coração não consigo viver, sem teu amor.
Em cada passo, em cada olhar, tu estás.
Minha alma anseia por ti, Senhor.
Vem e habita em mim.`
    },
    {
        id: 's9',
        title: 'Louvando a Maria',
        artist: 'Maria do Rosário',
        albumArt: 'https://placehold.co/150x150/1A1A1A/CCE0CC?text=Louvando+Maria',
        type: 'liturgico',
        tags: ['Louvor', 'Mariano', 'Devoção'],
        chords: `(F)Louvando a (C)Maria, nossa (Bb)mãe.\n(Gm)Com carinho e (C)fé, em (F)seu (C)coração.`,
        lyrics: `Louvando a Maria, nossa mãe querida, Rainha do Céu.
Com carinho e fé, em seu coração.
Ela intercede por nós, junto a Jesus.
Ave Maria.`
    },
    {
        id: 's10',
        title: 'Exercício de Ritmo - Básico',
        artist: 'Professor App',
        albumArt: 'https://placehold.co/150x150/1A1A1A/CCE0CC?text=Ritmo',
        type: 'estudo',
        tags: ['Ritmo', 'Iniciante', 'Exercício'],
        chords: ``,
        lyrics: `Este exercício ajuda a desenvolver seu senso rítmico.
Acompanhe a batida e sinta o pulso da música.`
    },
];

// --- Global State Variables ---
let currentScreen = 'onboarding'; // Start with the onboarding screen
let currentSong = null;
let searchQuery = '';
let searchResults = [];
let showChords = false;
let showLyrics = true; // Default for auto-scrolling
let currentKey = 'C';
let showMoreOptions = false;
let librarySortBy = 'title';
let userInterests = new Set(); // To store user selections from onboarding

// --- DOM Elements ---
const screenContent = document.getElementById('screen-content');
const bottomNavBar = document.getElementById('bottom-nav-bar');

// --- Utility Functions ---
const getTransposedChords = (originalChords, newKey) => {
    if (!originalChords || !newKey) return '';
    const originalNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const newKeyIndex = originalNotes.indexOf(newKey);
    if (newKeyIndex === -1) return originalChords;

    const firstChordMatch = originalChords.match(/\(([A-G][b#]?)\)/);
    const originalSongKey = firstChordMatch ? firstChordMatch[1] : 'C';
    const originalKeyIndex = originalNotes.indexOf(originalSongKey);

    if (originalKeyIndex === -1) return originalChords;

    const semitoneShift = (newKeyIndex - originalKeyIndex + 12) % 12;

    return originalChords.replace(/\(([A-G][b#]?)(.*?)\)/g, (match, chordRoot, chordQuality) => {
        const rootIndex = originalNotes.indexOf(chordRoot);
        if (rootIndex === -1) return match;

        const newRootIndex = (rootIndex + semitoneShift + 12) % 12;
        return `(${originalNotes[newRootIndex]}${chordQuality})`;
    });
};

// --- Render Functions for Components ---

function renderSongListItem(song) {
    const tagsHtml = song.tags.map(tag =>
        `<span class="bg-green-600 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">${tag}</span>`
    ).join('');

    // Use a fallback image if albumArt is not defined or fails to load
    const albumArtSrc = song.albumArt || `https://placehold.co/50x50/333333/CCE0CC?text=${song.title.substring(0, 3)}`;

    return `
        <div class="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer song-item" data-song-id="${song.id}">
            <img src="${albumArtSrc}" alt="Capa do álbum de ${song.title}" class="w-12 h-12 rounded-md mr-4 shadow-sm" onerror="this.onerror=null;this.src='https://placehold.co/50x50/333333/CCE0CC?text=${song.title.substring(0, 3)}';">
            <div class="flex-grow">
                <h3 class="text-base font-semibold text-gray-50 line-clamp-1">${song.title}</h3>
                <p class="text-sm text-gray-400 line-clamp-1">${song.artist}</p>
            </div>
            <div class="flex flex-wrap justify-end gap-2 ml-4">
                ${tagsHtml}
            </div>
        </div>
    `;
}

// New Onboarding Screen Render Function
function renderOnboardingScreen() {
    screenContent.innerHTML = `
        <div id="onboarding-screen" class="p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center h-full text-center">
            <i class="fas fa-headphones text-6xl text-red-500 mb-6 animate-pulse"></i>
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">Olá! Como você quer usar o Acorde?</h1>
            <p class="text-lg text-gray-300 mb-8">Selecione suas principais áreas de interesse para personalizar sua experiência:</p>

            <div id="onboarding-options" class="grid grid-cols-2 gap-4 w-full max-w-sm mb-10">
                <button class="onboarding-option flex flex-col items-center p-4 rounded-xl border-2 border-gray-700 bg-gray-700 text-gray-50 hover:bg-gray-600 transition-all duration-200" data-interest="professor">
                    <i class="fas fa-chalkboard-teacher text-3xl mb-2"></i>
                    <span class="text-sm font-medium">Professor</span>
                </button>
                <button class="onboarding-option flex flex-col items-center p-4 rounded-xl border-2 border-gray-700 bg-gray-700 text-gray-50 hover:bg-gray-600 transition-all duration-200" data-interest="aluno">
                    <i class="fas fa-user-graduate text-3xl mb-2"></i>
                    <span class="text-sm font-medium">Aluno de Música</span>
                </button>
                <button class="onboarding-option flex flex-col items-center p-4 rounded-xl border-2 border-gray-700 bg-gray-700 text-gray-50 hover:bg-gray-600 transition-all duration-200" data-interest="musico">
                    <i class="fas fa-guitar text-3xl mb-2"></i>
                    <span class="text-sm font-medium">Músico</span>
                </button>
                <button class="onboarding-option flex flex-col items-center p-4 rounded-xl border-2 border-gray-700 bg-gray-700 text-gray-50 hover:bg-gray-600 transition-all duration-200" data-interest="cantor-igreja">
                    <i class="fas fa-church text-3xl mb-2"></i>
                    <span class="text-sm font-medium">Cantor de Igreja</span>
                </button>
                <button class="onboarding-option flex flex-col items-center p-4 rounded-xl border-2 border-gray-700 bg-gray-700 text-gray-50 hover:bg-gray-600 transition-all duration-200" data-interest="catolico">
                    <i class="fas fa-cross text-3xl mb-2"></i>
                    <span class="text-sm font-medium">Católico</span>
                </button>
                <button class="onboarding-option flex flex-col items-center p-4 rounded-xl border-2 border-gray-700 bg-gray-700 text-gray-50 hover:bg-gray-600 transition-all duration-200" data-interest="cantor">
                    <i class="fas fa-microphone text-3xl mb-2"></i>
                    <span class="text-sm font-medium">Cantor</span>
                </button>
            </div>

            <button id="continue-onboarding-button" class="px-8 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
                Continuar
            </button>
        </div>
    `;

    // Add event listeners for onboarding options
    document.querySelectorAll('.onboarding-option').forEach(button => {
        button.addEventListener('click', (event) => {
            const interest = event.currentTarget.dataset.interest;
            if (userInterests.has(interest)) {
                userInterests.delete(interest);
                event.currentTarget.classList.remove('selected');
            } else {
                userInterests.add(interest);
                event.currentTarget.classList.add('selected');
            }
        });
    });

    // Add event listener for continue button
    document.getElementById('continue-onboarding-button').addEventListener('click', () => {
        // In a real app, you would save userInterests and tailor the home screen
        console.log('Interesses selecionados:', Array.from(userInterests));
        navigateTo('home');
    });
     // Apply 'selected' class if already in userInterests (for re-rendering scenarios)
    userInterests.forEach(interest => {
        const btn = document.querySelector(`.onboarding-option[data-interest="${interest}"]`);
        if (btn) btn.classList.add('selected');
    });
}


function renderHomeScreen() {
    const educationalSongs = mockSongs.filter(song => song.type === 'estudo');
    const religiousSongs = mockSongs.filter(song => song.type === 'liturgico');
    const recentSongs = mockSongs.slice(0, 4);

    screenContent.innerHTML = `
        <div id="home-screen" class="p-6 sm:p-8 md:p-10">
            <div class="flex items-center justify-center mb-6">
                <i class="fas fa-headphones text-2xl text-red-500 mr-2"></i>
                <h1 class="text-3xl sm:text-4xl font-bold text-center text-red-500">
                    Acorde - Católico
                </h1>
            </div>

            <section class="mb-8">
                <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 flex items-center">
                    <i class="fas fa-calendar-alt mr-3 text-red-400"></i>Momentos do Ano
                </h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <button class="bg-gray-700 text-gray-50 p-4 rounded-xl shadow-md hover:bg-gray-600 transition-colors duration-200 flex flex-col items-center text-center">
                        <i class="fas fa-holly-berry text-2xl mb-2 text-green-400"></i>
                        <span class="text-sm font-medium">Natal</span>
                    </button>
                    <button class="bg-gray-700 text-gray-50 p-4 rounded-xl shadow-md hover:bg-gray-600 transition-colors duration-200 flex flex-col items-center text-center">
                        <i class="fas fa-cross text-2xl mb-2 text-yellow-400"></i>
                        <span class="text-sm font-medium">Quaresma</span>
                    </button>
                    <button class="bg-gray-700 text-gray-50 p-4 rounded-xl shadow-md hover:bg-gray-600 transition-colors duration-200 flex flex-col items-center text-center">
                        <i class="fas fa-hands-praying text-2xl mb-2 text-blue-400"></i>
                        <span class="text-sm font-medium">Adoração</span>
                    </button>
                    <button class="bg-gray-700 text-gray-50 p-4 rounded-xl shadow-md hover:bg-gray-600 transition-colors duration-200 flex flex-col items-center text-center">
                        <i class="fas fa-leaf text-2xl mb-2 text-orange-400"></i>
                        <span class="text-sm font-medium">Tempo Comum</span>
                    </button>
                </div>
            </section>

            <section class="mb-8">
                <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 flex items-center">
                    <i class="fas fa-history mr-3 text-red-400"></i>Músicas Recentes
                </h2>
                <div class="grid grid-cols-1 gap-4">
                    ${recentSongs.map(renderSongListItem).join('')}
                </div>
            </section>

            <section class="mb-8">
                <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 flex items-center">
                    <i class="fas fa-book-open mr-3 text-red-400"></i>Para Professores e Alunos
                </h2>
                <div class="grid grid-cols-1 gap-4">
                    ${educationalSongs.map(renderSongListItem).join('')}
                </div>
            </section>

            <section class="mb-8">
                <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 flex items-center">
                    <i class="fas fa-church mr-3 text-red-400"></i>Fé e Comunidade
                </h2>
                <div class="grid grid-cols-1 gap-4">
                    ${religiousSongs.map(renderSongListItem).join('')}
                </div>
            </section>
        </div>
    `;
    // Add event listeners for song items
    screenContent.querySelectorAll('.song-item').forEach(item => {
        item.addEventListener('click', (event) => {
            const songId = event.currentTarget.dataset.songId;
            const song = mockSongs.find(s => s.id === songId);
            if (song) playSong(song);
        });
    });
}

function renderSearchScreen() {
    screenContent.innerHTML = `
        <div id="search-screen" class="p-6 sm:p-8 md:p-10">
            <h1 class="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-50">Buscar Músicas</h1>
            <div class="relative mb-8">
                <input
                    type="text"
                    placeholder="Buscar músicas, artistas, tags..."
                    class="w-full p-3 pl-10 rounded-full bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-50 transition duration-300 shadow-sm"
                    id="search-input" value="${searchQuery}"
                />
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
            </div>

            <section id="search-results-section">
                ${searchResults.length > 0 ? `
                    <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-200">Resultados da Busca</h2>
                    <div class="grid grid-cols-1 gap-4">
                        ${searchResults.map(renderSongListItem).join('')}
                    </div>
                ` : (searchQuery.length > 0 ? `<p class="text-center text-gray-400">Nenhum resultado encontrado para "${searchQuery}".</p>` : '')}
            </section>
        </div>
    `;
    // Add event listeners
    document.getElementById('search-input').addEventListener('input', (event) => {
        searchQuery = event.target.value;
        if (searchQuery.length > 1) {
            searchResults = mockSongs.filter(song =>
                song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                song.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        } else {
            searchResults = [];
        }
        // Re-render only the search results section for efficiency
        const searchResultsSection = document.getElementById('search-results-section');
        if (searchResultsSection) {
            searchResultsSection.innerHTML = `
                ${searchResults.length > 0 ? `
                    <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-200">Resultados da Busca</h2>
                    <div class="grid grid-cols-1 gap-4">
                        ${searchResults.map(renderSongListItem).join('')}
                    </div>
                ` : (searchQuery.length > 0 ? `<p class="text-center text-gray-400">Nenhum resultado encontrado para "${searchQuery}".</p>` : '')}
            `;
            // Add event listeners for new song items
            searchResultsSection.querySelectorAll('.song-item').forEach(item => {
                item.addEventListener('click', (event) => {
                    const songId = event.currentTarget.dataset.songId;
                    const song = mockSongs.find(s => s.id === songId);
                    if (song) playSong(song);
                });
            });
        }
    });
    screenContent.querySelectorAll('.song-item').forEach(item => {
        item.addEventListener('click', (event) => {
            const songId = event.currentTarget.dataset.songId;
            const song = mockSongs.find(s => s.id === songId);
            if (song) playSong(song);
        });
    });
}

function renderCommunityScreen() {
    screenContent.innerHTML = `
        <div id="community-screen" class="p-6 sm:p-8 md:p-10 text-center text-gray-400 h-full flex flex-col justify-center items-center">
            <i class="fas fa-users text-5xl mb-4 text-red-400"></i>
            <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-gray-50">Comunidade & Aprender</h1>
            <p class="text-lg mb-4">Conecte-se com outros músicos, professores e fiéis. Participe de grupos de estudo, crie playlists colaborativas e compartilhe seu conhecimento.</p>
            <div class="flex flex-wrap justify-center gap-4">
                <button class="bg-gray-700 text-gray-50 px-5 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300">
                    <i class="fas fa-plus mr-2"></i>Criar Playlist Colaborativa
                </button>
                <button class="bg-gray-700 text-gray-50 px-5 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300">
                    <i class="fas fa-qrcode mr-2"></i>Compartilhar por QR Code
                </button>
            </div>
            <p class="mt-6 text-sm">Funcionalidades como "bibliotecas de livros" e mais opções de "compartilhamento por QR Code" estarão disponíveis em futuras versões.</p>
        </div>
    `;
}

function renderLibraryScreen() {
    let sortedSongs = [...mockSongs].sort((a, b) => {
        if (librarySortBy === 'title') {
            return a.title.localeCompare(b.title);
        }
        return 0; // Default
    });

    screenContent.innerHTML = `
        <div id="library-screen" class="p-6 sm:p-8 md:p-10">
            <h1 class="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-50">Minha Biblioteca</h1>

            <section class="mb-8">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-200">Minhas Músicas</h2>
                    <div class="relative">
                        <select
                            id="sort-by-select"
                            class="appearance-none px-4 py-2 rounded-full bg-gray-700 text-gray-50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer pr-8 text-sm"
                        >
                            <option value="title" ${librarySortBy === 'title' ? 'selected' : ''}>Classificar por Título</option>
                            </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <i class="fas fa-sort text-xs"></i>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    ${sortedSongs.map(renderSongListItem).join('')}
                </div>
                <div class="flex flex-wrap justify-center gap-4 mt-6">
                    <button class="bg-gray-700 text-gray-50 px-5 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300">
                        <i class="fas fa-plus mr-2"></i>Adicionar Nova Música
                    </button>
                    <button class="bg-gray-700 text-gray-50 px-5 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300">
                        <i class="fas fa-file-export mr-2"></i>Exportar Selecionadas
                    </button>
                    <button class="bg-gray-700 text-gray-50 px-5 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300">
                        <i class="fas fa-sync-alt mr-2"></i>Sincronizar
                    </button>
                </div>
            </section>
        </div>
    `;
    // Add event listeners
    document.getElementById('sort-by-select').addEventListener('change', (event) => {
        librarySortBy = event.target.value;
        renderLibraryScreen(); // Re-render to apply sort
    });
    screenContent.querySelectorAll('.song-item').forEach(item => {
        item.addEventListener('click', (event) => {
            const songId = event.currentTarget.dataset.songId;
            const song = mockSongs.find(s => s.id === songId);
            if (song) playSong(song);
        });
    });
}

function renderPlayerScreen() {
    if (!currentSong) {
        screenContent.innerHTML = `
            <div class="flex flex-col items-center justify-center p-8 text-gray-400 h-full">
                <p>Nenhuma música selecionada. Volte para a página inicial.</p>
                <button id="player-back-button-empty" class="mt-4 px-6 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                    Voltar
                </button>
            </div>
        `;
        document.getElementById('player-back-button-empty').addEventListener('click', () => navigateTo('home'));
        return;
    }

    const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const transposedChords = showChords ? getTransposedChords(currentSong.chords, currentKey) : '';
    const albumArtSrc = currentSong.albumArt || `https://placehold.co/250x250/333333/CCE0CC?text=${currentSong.title.substring(0, 5)}`;

    screenContent.innerHTML = `
        <div id="player-screen" class="p-6 sm:p-8 md:p-10 flex flex-col items-center relative min-h-[500px]">
            <div class="flex justify-between w-full mb-6">
                <button id="player-back-button" class="p-2 bg-gray-700 rounded-full text-gray-50 hover:bg-gray-600 transition-colors duration-300 shadow-md">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h1 class="text-xl sm:text-2xl font-bold text-gray-50 text-center flex-grow mx-4 line-clamp-1">${currentSong.title}</h1>
                <div class="relative">
                    <button id="more-options-button" class="p-2 bg-gray-700 rounded-full text-gray-50 hover:bg-gray-600 transition-colors duration-300 shadow-md">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                    ${showMoreOptions ? `
                        <div class="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-10">
                            <button id="edit-song-button" class="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-600 w-full text-left">
                                <i class="fas fa-edit mr-2"></i>Editar Música
                            </button>
                            <button id="share-song-button" class="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-600 w-full text-left">
                                <i class="fas fa-share-alt mr-2"></i>Compartilhar
                            </button>
                            <button id="add-to-playlist-button" class="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-600 w-full text-left">
                                <i class="fas fa-plus-circle mr-2"></i>Adicionar à Playlist
                            </button>
                            <button id="print-song-button" class="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-600 w-full text-left">
                                <i class="fas fa-print mr-2"></i>Imprimir
                            </button>
                            <button id="report-error-button" class="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-600 w-full text-left text-red-400">
                                <i class="fas fa-bug mr-2"></i>Reportar Erro
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>

            <img src="${albumArtSrc}" alt="Capa do álbum de ${currentSong.title}" class="w-48 h-48 rounded-lg shadow-md mb-6 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/250x250/333333/CCE0CC?text=${currentSong.title.substring(0, 5)}';">

            <p class="text-gray-400 text-sm mb-6">${currentSong.artist}</p>

            <div class="flex items-center justify-center space-x-6 mb-6 text-gray-300 text-2xl">
                <button class="hover:text-red-500 transition-colors duration-200"><i class="fas fa-backward"></i></button>
                <button class="text-red-500 text-4xl hover:text-red-400 transition-colors duration-200"><i class="fas fa-play-circle"></i></button>
                <button class="hover:text-red-500 transition-colors duration-200"><i class="fas fa-forward"></i></button>
            </div>

            <div class="flex flex-wrap justify-center gap-4 mb-6">
                ${currentSong.chords ? `
                    <button id="toggle-chords" class="px-5 py-2 rounded-full font-medium transition-all duration-300 ${showChords ? 'bg-red-500 text-white shadow-md' : 'bg-gray-700 text-gray-50 hover:bg-gray-600'}">
                        <i class="fas fa-music mr-2"></i>${showChords ? 'Ocultar Acordes' : 'Mostrar Acordes'}
                    </button>
                ` : `<span class="px-5 py-2 rounded-full font-medium bg-gray-700 text-gray-50 opacity-50 cursor-not-allowed"><i class="fas fa-music mr-2"></i>Acordes Não Disponíveis</span>`}
                <button id="toggle-lyrics" class="px-5 py-2 rounded-full font-medium transition-all duration-300 ${showLyrics ? 'bg-red-500 text-white shadow-md' : 'bg-gray-700 text-gray-50 hover:bg-gray-600'}">
                    <i class="fas fa-align-left mr-2"></i>${showLyrics ? 'Ocultar Letra' : 'Mostrar Letra'}
                </button>
            </div>

            ${showChords ? `
                <div class="mb-6 w-full max-w-sm">
                    <label for="key-select" class="block text-center text-gray-300 text-sm font-medium mb-2">Transpor para:</label>
                    <div class="relative">
                        <select id="key-select" class="block w-full px-4 py-2 pr-8 rounded-full bg-gray-700 border border-gray-600 text-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer">
                            ${keys.map(key => `<option value="${key}" ${key === currentKey ? 'selected' : ''}>${key}</option>`).join('')}
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <i class="fas fa-chevron-down text-xs"></i>
                        </div>
                    </div>
                </div>
            ` : ''}

            <div class="bg-gray-700 p-6 rounded-lg shadow-inner w-full custom-scrollbar flex-grow overflow-y-auto mb-6 text-gray-200 whitespace-pre-wrap text-center max-h-96">
                ${showChords && currentSong.chords ? `<pre class="font-mono text-yellow-300 text-sm sm:text-base mb-4">${transposedChords}</pre>` : ''}
                ${showLyrics && currentSong.lyrics ? `<p class="text-sm sm:text-base">${currentSong.lyrics}</p>` : ''}
                ${!showChords && !showLyrics ? `<p class="text-gray-400">Selecione uma opção para exibir acordes ou letras.</p>` : ''}
            </div>

            <div class="flex flex-wrap justify-center gap-2 mb-4">
                ${currentSong.tags.map(tag => `<span class="bg-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    // Add event listeners for player screen elements
    document.getElementById('player-back-button').addEventListener('click', () => navigateTo('home'));

    const toggleChordsButton = document.getElementById('toggle-chords');
    if (toggleChordsButton) {
        toggleChordsButton.addEventListener('click', () => {
            showChords = !showChords;
            renderPlayerScreen();
        });
    }

    const toggleLyricsButton = document.getElementById('toggle-lyrics');
    if (toggleLyricsButton) {
        toggleLyricsButton.addEventListener('click', () => {
            showLyrics = !showLyrics;
            renderPlayerScreen();
        });
    }

    const keySelect = document.getElementById('key-select');
    if (keySelect) {
        keySelect.addEventListener('change', (event) => {
            currentKey = event.target.value;
            renderPlayerScreen();
        });
    }

    const moreOptionsButton = document.getElementById('more-options-button');
    if (moreOptionsButton) {
        moreOptionsButton.addEventListener('click', () => {
            showMoreOptions = !showMoreOptions;
            renderPlayerScreen(); // Re-render to show/hide options
        });
    }

    // Event listeners for more options dropdown (if visible)
    if (showMoreOptions) {
        document.getElementById('edit-song-button')?.addEventListener('click', () => alert('Funcionalidade de Editar Música em desenvolvimento!'));
        document.getElementById('share-song-button')?.addEventListener('click', () => alert('Funcionalidade de Compartilhar em desenvolvimento!'));
        document.getElementById('add-to-playlist-button')?.addEventListener('click', () => alert('Funcionalidade de Adicionar à Playlist em desenvolvimento!'));
        document.getElementById('print-song-button')?.addEventListener('click', () => window.print());
        document.getElementById('report-error-button')?.addEventListener('click', () => alert('Funcionalidade de Reportar Erro em desenvolvimento!'));
    }
}


// --- Navigation and Screen Management ---
function navigateTo(screenName) {
    currentScreen = screenName;
    renderScreen();
    renderBottomNavBar(); // Ensure nav bar updates active state
}

function playSong(song) {
    currentSong = song;
    showChords = song.chords ? true : false; // Automatically show chords if available
    showLyrics = song.lyrics ? true : false; // Automatically show lyrics if available
    currentKey = 'C'; // Reset key when new song is played
    showMoreOptions = false; // Close options when new song is played
    navigateTo('player');
}


// --- Render Bottom Navigation Bar ---
function renderBottomNavBar() {
    const navItems = [
        { id: 'home', icon: 'fas fa-home', text: 'Início' },
        { id: 'search', icon: 'fas fa-search', text: 'Buscar' },
        { id: 'library', icon: 'fas fa-book', text: 'Biblioteca' },
        { id: 'community', icon: 'fas fa-users', text: 'Comunidade' },
        { id: 'profile', icon: 'fas fa-user-circle', text: 'Perfil' },
    ];

    bottomNavBar.innerHTML = navItems.map(item => `
        <button id="nav-${item.id}" class="flex flex-col items-center p-2 rounded-lg ${currentScreen === item.id || (currentScreen === 'player' && item.id === 'home') ? 'text-red-500' : 'text-gray-400 hover:text-red-400'} transition-colors duration-200">
            <i class="${item.icon} text-xl mb-1"></i>
            <span class="text-xs font-medium">${item.text}</span>
        </button>
    `).join('');

    // Add event listeners for navigation buttons
    navItems.forEach(item => {
        document.getElementById(`nav-${item.id}`).addEventListener('click', () => navigateTo(item.id));
    });
}

// --- Main Render Function ---
function renderScreen() {
    screenContent.scrollTop = 0; // Scroll to top when changing screens
    switch (currentScreen) {
        case 'onboarding':
            renderOnboardingScreen();
            break;
        case 'home':
            renderHomeScreen();
            break;
        case 'search':
            renderSearchScreen();
            break;
        case 'library':
            renderLibraryScreen();
            break;
        case 'community':
            renderCommunityScreen();
            break;
        case 'player':
            renderPlayerScreen();
            break;
        case 'profile':
            // Placeholder for profile screen
            screenContent.innerHTML = `
                <div class="p-6 sm:p-8 md:p-10 text-center text-gray-400 h-full flex flex-col justify-center items-center">
                    <i class="fas fa-user-circle text-5xl mb-4 text-red-400"></i>
                    <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-gray-50">Seu Perfil</h1>
                    <p class="text-lg">Informações do usuário e configurações estarão aqui.</p>
                </div>
            `;
            break;
        default:
            renderHomeScreen();
    }
}

// Initial render calls
renderScreen();
renderBottomNavBar();