// Array para armazenar o histórico de telas
const screenHistory = [];

// Dados de exemplo para músicas (simulando um banco de dados)
const songsData = {
    'example-song-1': {
        title: 'Música de Exemplo 1',
        artist: 'Artista Exemplo A',
        cover: 'https://placehold.co/150x150/EF4444/FFFFFF?text=Música+1',
        lyrics: `
            <p><span class="chord" data-original-chord="C">C</span>Eu me deparei</p>
            <p><span class="chord" data-original-chord="G">G</span>Com Aquele Mestre escrevendo</p>
            <p><span class="chord" data-original-chord="Am">Am</span>Com o dedo no chão</p>
            <p><span class="chord" data-original-chord="F">F</span>Ouvindo os fariseus a lhes falar</p>
            <br>
            <p><span class="chord" data-original-chord="C">C</span>Eles queriam jogar</p>
            <p><span class="chord" data-original-chord="G">G</span>Pedras em uma mulher</p>
            <p><span class="chord" data-original-chord="Am">Am</span>Mas a cada frase</p>
            <p><span class="chord" data-original-chord="F">F</span>Deus mostrava seu poder</p>
            <br>
            <p><span class="chord" data-original-chord="Dm">Dm</span>E ao final do julgamento</p>
            <p><span class="chord" data-original-chord="G">G</span>Todos se retiraram</p>
            <p><span class="chord" data-original-chord="C">C</span>E Ele disse: “Eu não te <span class="chord" data-original-chord="F">F</span>condeno</p>
            <p><span class="chord" data-original-chord="G">G</span>Vá e não peques mais”</p>
        `
    },
    'example-song-2': {
        title: 'Canção da Esperança',
        artist: 'Banda Harmonia',
        cover: 'https://placehold.co/150x150/3B82F6/FFFFFF?text=Música+2',
        lyrics: `
            <p><span class="chord" data-original-chord="D">D</span>Em cada novo amanhecer</p>
            <p><span class="chord" data-original-chord="A">A</span>Uma esperança a brilhar</p>
            <p><span class="chord" data-original-chord="Bm">Bm</span>A vida que nos faz crescer</p>
            <p><span class="chord" data-original-chord="G">G</span>Um novo caminho a trilhar</p>
        `
    },
    'example-song-3': {
        title: 'Melodia da Alma',
        artist: 'Vozes Unidas',
        cover: 'https://placehold.co/150x150/10B981/FFFFFF?text=Música+3',
        lyrics: `
            <p><span class="chord" data-original-chord="Em">Em</span>Sons que tocam o coração</p>
            <p><span class="chord" data-original-chord="C">C</span>Melodias que nos elevam</p>
            <p><span class="chord" data-original-chord="G">G</span>A alma encontra sua canção</p>
            <p><span class="chord" data-original-chord="D">D</span>Quando a música nos leva</p>
        `
    },
    'example-song-4': {
        title: 'Ritmo Contagiante',
        artist: 'Grupo Alegria',
        cover: 'https://placehold.co/60x60/F59E0B/FFFFFF?text=Nova',
        lyrics: `
            <p><span class="chord" data-original-chord="Am">Am</span>Deixe o ritmo te levar</p>
            <p><span class="chord" data-original-chord="G">G</span>Pela dança e pela vida</p>
            <p><span class="chord" data-original-chord="C">C</span>Alegria no ar</p>
            <p><span class="chord" data-original-chord="F">F</span>A cada batida</p>
        `
    },
    'example-song-5': {
        title: 'Hino da Paz',
        artist: 'Coro Celestial',
        cover: 'https://placehold.co/60x60/8B5CF6/FFFFFF?text=Clássico',
        lyrics: `
            <p><span class="chord" data-original-chord="G">G</span>Que a paz se espalhe</p>
            <p><span class="chord" data-original-chord="D">D</span>Por todos os lugares</p>
            <p><span class="chord" data-original-chord="Em">Em</span>Cantemos juntos</p>
            <p><span class="chord" data-original-chord="C">C</span>Em união de amores</p>
        `
    }
    // Adicione mais músicas aqui
};

// Mapeamento de notas e acordes para transposição
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const modes = ['m', 'M', 'sus2', 'sus4', 'dim', 'aug', '7', 'maj7', 'm7', 'dim7', 'add9', 'm9', '11', '13', 'add4', '5', '6', 'm6', '9', 'm11', 'm13', 'sus', 'alt']; // Modificadores de acordes

// Variáveis de estado
let currentSongId = null;
let currentTranspose = 0; // 0 para tom original
let autoScrollInterval = null;
let autoScrollSpeed = 1; // Velocidade de rolagem automática

// Funções para controle de telas e modais
function showScreen(screenId) {
    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });

    // Mostra a tela desejada
    document.getElementById(screenId).classList.remove('hidden');

    // Atualiza o histórico de telas
    if (screenHistory[screenHistory.length - 1] !== screenId) {
        screenHistory.push(screenId);
    }

    // Atualiza a navegação inferior
    updateNavBar(screenId);
}

function updateNavBar(activeScreenId) {
    document.querySelectorAll('nav button').forEach(button => {
        button.classList.remove('text-primary');
        button.classList.add('text-text-color');
    });

    if (activeScreenId === 'home-screen') {
        document.querySelector('nav button:nth-child(1)').classList.add('text-primary');
        document.querySelector('nav button:nth-child(1)').classList.remove('text-text-color');
    } else if (activeScreenId === 'search-screen') {
        document.querySelector('nav button:nth-child(2)').classList.add('text-primary');
        document.querySelector('nav button:nth-child(2)').classList.remove('text-text-color');
    } else if (activeScreenId === 'folders-screen' || activeScreenId === 'folder-detail-screen') {
        document.querySelector('nav button:nth-child(3)').classList.add('text-primary');
        document.querySelector('nav button:nth-child(3)').classList.remove('text-text-color');
    } else if (activeScreenId === 'playlists-screen') {
        document.querySelector('nav button:nth-child(4)').classList.add('text-primary');
        document.querySelector('nav button:nth-child(4)').classList.remove('text-text-color');
    }
}

function showModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    // Para modais de input, foca no primeiro campo
    if (modalId === 'create-folder-modal') {
        document.getElementById('folder-name').focus();
    } else if (modalId === 'create-playlist-modal') {
        document.getElementById('playlist-name').focus();
    }
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    // Limpa o status de mensagens ao fechar o modal
    const statusElement = document.getElementById(modalId.replace('-modal', '-create-status')) || document.getElementById(modalId.replace('-modal', '-status'));
    if (statusElement) {
        statusElement.textContent = '';
    }
}

function goBack() {
    // Remove a tela atual do histórico
    screenHistory.pop();
    // Mostra a tela anterior no histórico
    const previousScreen = screenHistory[screenHistory.length - 1];
    if (previousScreen) {
        showScreen(previousScreen);
    } else {
        // Se não houver tela anterior, volta para a home
        showScreen('home-screen');
    }
}

// Funções de Temas e Cores
function applyTheme(theme) {
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme');
    if (theme === 'system') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-theme');
        } else {
            body.classList.add('light-theme');
        }
    } else {
        body.classList.add(theme + '-theme');
    }
    localStorage.setItem('theme', theme); // Salva a preferência do usuário
}

function setPrimaryColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color); // Salva a preferência do usuário
}

// Inicializa o tema e a cor ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedPrimaryColor = localStorage.getItem('primaryColor');

    if (savedTheme) {
        document.querySelectorAll('input[name="theme"]').forEach(radio => {
            if (radio.value === savedTheme) {
                radio.checked = true;
            }
        });
        applyTheme(savedTheme);
    } else {
        // Aplica o tema do sistema como padrão se não houver preferência salva
        applyTheme('system');
    }

    if (savedPrimaryColor) {
        setPrimaryColor(savedPrimaryColor);
    }

    // Adiciona event listeners para as opções de tema
    document.querySelectorAll('input[name="theme"]').forEach(radio => {
        radio.addEventListener('change', (event) => {
            applyTheme(event.target.value);
        });
    });

    // Garante que a tela inicial seja mostrada ao carregar
    showScreen('home-screen');
});

// Funções para detalhes da música
function showSongDetail(songId) {
    const song = songsData[songId];
    if (song) {
        document.getElementById('song-title').textContent = song.title;
        document.getElementById('song-artist').textContent = song.artist;
        document.getElementById('song-cover').src = song.cover;

        // Injeta a letra e acordes
        const lyricsContainer = document.getElementById('lyrics-container');
        lyricsContainer.innerHTML = song.lyrics;

        currentSongId = songId; // Define a música atual
        currentTranspose = 0; // Reseta a transposição ao mudar de música
        document.getElementById('current-key').textContent = 'C'; // Reseta a chave exibida
        showScreen('song-detail-screen');
    } else {
        console.error('Música não encontrada:', songId);
    }
}

// Funções de Transposição
function transposeChords(semitones) {
    if (!currentSongId) return;

    const lyricsContainer = document.getElementById('lyrics-container');
    const chords = lyricsContainer.querySelectorAll('.chord');

    // Mapeamento de acordes com sustenidos e bemóis
    const sharpNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const flatNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

    // Determina qual mapeamento usar para a transposição
    // Se a música original contiver sustenidos, mantém sustenidos. Caso contrário, tenta bemóis.
    let useSharp = true;
    if (songsData[currentSongId].lyrics.includes('b')) { // Verifica se há bemóis na letra original
        useSharp = false;
    }

    currentTranspose += semitones;

    // Garante que a transposição fique dentro dos limites de uma oitava
    if (currentTranspose > 11) currentTranspose -= 12;
    if (currentTranspose < -12) currentTranspose += 12;

    chords.forEach(chordElement => {
        const originalChord = chordElement.dataset.originalChord;
        if (!originalChord) return;

        let baseNote = '';
        let modifier = '';

        // Extrai a nota base e o modificador do acorde
        const match = originalChord.match(/^([A-G][b#]?)(.*)/);
        if (match) {
            baseNote = match[1];
            modifier = match[2];
        } else {
            return; // Se não conseguir extrair, pula
        }

        const currentNotes = useSharp ? sharpNotes : flatNotes;
        let originalIndex = currentNotes.indexOf(baseNote);

        if (originalIndex === -1) {
            // Tenta o outro conjunto de notas se não encontrar
            originalIndex = (useSharp ? flatNotes : sharpNotes).indexOf(baseNote);
            if (originalIndex !== -1) {
                useSharp = !useSharp; // Alterna o conjunto de notas
                currentNotes = useSharp ? sharpNotes : flatNotes;
            } else {
                console.warn('Nota base não encontrada para transposição:', baseNote);
                return;
            }
        }

        let newIndex = (originalIndex + currentTranspose) % 12;
        if (newIndex < 0) newIndex += 12; // Garante que o índice seja positivo

        const newBaseNote = currentNotes[newIndex];
        chordElement.textContent = newBaseNote + modifier;
    });

    // Atualiza a chave exibida no modal
    const currentKeyIndex = (notes.indexOf(notes[0]) + currentTranspose) % 12;
    document.getElementById('current-key').textContent = notes[currentKeyIndex < 0 ? currentKeyIndex + 12 : currentKeyIndex];
}

// Função para alternar o play/pause (simulado)
let isPlaying = false;
function togglePlayPause() {
    const playPauseIcon = document.getElementById('play-pause-icon');
    const playPauseText = document.getElementById('play-pause-text');
    if (isPlaying) {
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
        playPauseText.textContent = 'Tocar';
        isPlaying = false;
        alert('Música pausada!');
    } else {
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
        playPauseText.textContent = 'Pausar';
        isPlaying = true;
        alert('Música tocando!');
    }
}

// Funções de rolagem automática
function toggleAutoScroll() {
    const autoscrollIcon = document.getElementById('autoscroll-icon');
    const lyricsContainer = document.getElementById('lyrics-container');

    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
        autoscrollIcon.classList.remove('text-primary'); // Desativa a cor primária
        alert('Rolagem automática desativada.');
    } else {
        autoscrollIcon.classList.add('text-primary'); // Ativa a cor primária
        autoScrollInterval = setInterval(() => {
            lyricsContainer.scrollTop += autoScrollSpeed;
            // Se chegou ao final, para a rolagem
            if (lyricsContainer.scrollTop + lyricsContainer.clientHeight >= lyricsContainer.scrollHeight) {
                clearInterval(autoScrollInterval);
                autoScrollInterval = null;
                autoscrollIcon.classList.remove('text-primary');
            }
        }, 50); // Ajuste este valor para controlar a suavidade da rolagem
        alert('Rolagem automática ativada. Use a barra de rolagem para ajustar a velocidade.');
    }
}

// Funções de Notas
function saveNotes() {
    const notesContent = document.getElementById('user-notes').value;
    // Em um aplicativo real, você salvaria isso em um banco de dados ou localStorage
    console.log('Notas salvas:', notesContent);
    document.getElementById('notes-save-status').textContent = 'Notas salvas com sucesso!';
    setTimeout(() => {
        document.getElementById('notes-save-status').textContent = '';
        hideModal('notes-modal');
    }, 1500);
}

// Funções de Compartilhar/Exportar (Simuladas)
function simulateExport(format) {
    const exportStatus = document.getElementById('export-status');
    exportStatus.textContent = `Exportando como ${format}...`;
    setTimeout(() => {
        exportStatus.textContent = `Música exportada como ${format}!`;
    }, 2000);
    setTimeout(() => {
        hideModal('share-export-modal');
    }, 3000);
}

function simulateShare() {
    const exportStatus = document.getElementById('export-status');
    exportStatus.textContent = 'Gerando link para compartilhamento...';
    setTimeout(() => {
        const shareLink = 'https://acorde.app/song/' + currentSongId; // Exemplo de link
        exportStatus.textContent = `Link copiado: ${shareLink}`;
        navigator.clipboard.writeText(shareLink).then(() => {
            console.log('Link copiado para a área de transferência');
        }).catch(err => {
            console.error('Erro ao copiar o link:', err);
        });
    }, 2000);
    setTimeout(() => {
        hideModal('share-export-modal');
    }, 3000);
}

function simulateDownloadOffline() {
    const exportStatus = document.getElementById('export-status');
    exportStatus.textContent = 'Baixando para uso offline...';
    setTimeout(() => {
        exportStatus.textContent = 'Música baixada para uso offline!';
    }, 2000);
    setTimeout(() => {
        hideModal('share-export-modal');
    }, 3000);
}

// Funções de Pastas
function showFolderDetail(folderName, songs) {
    document.getElementById('folder-detail-title').textContent = folderName;
    const folderSongsList = document.getElementById('folder-songs-list');
    folderSongsList.innerHTML = ''; // Limpa a lista existente

    if (songs && songs.length > 0) {
        songs.forEach(song => {
            const songItem = document.createElement('div');
            songItem.className = 'bg-card rounded-lg shadow-md p-3 flex items-center justify-between cursor-pointer';
            songItem.onclick = () => showSongDetail(song.id);
            songItem.innerHTML = `
                <div>
                    <p class="font-semibold text-base">${song.title}</p>
                    <p class="text-xs text-gray-400">${song.artist}</p>
                </div>
                <button class="text-text-color hover:text-primary"><i class="fas fa-ellipsis-v"></i></button>
            `;
            folderSongsList.appendChild(songItem);
        });
    } else {
        folderSongsList.innerHTML = `<p class="text-center text-gray-400">Esta pasta está vazia.</p>`;
    }

    showScreen('folder-detail-screen');
}

function simulateCreateFolder() {
    const folderName = document.getElementById('folder-name').value;
    const folderDescription = document.getElementById('folder-description').value;
    const folderPrivacy = document.getElementById('folder-privacy').value;
    const createStatus = document.getElementById('folder-create-status');

    if (!folderName.trim()) {
        createStatus.textContent = 'O nome da pasta é obrigatório!';
        createStatus.classList.add('text-red-500');
        return;
    }

    createStatus.textContent = `Criando pasta "${folderName}"...`;
    createStatus.classList.remove('text-red-500');
    createStatus.classList.add('text-green-500');

    setTimeout(() => {
        // Simula a criação da pasta
        console.log('Pasta criada:', { name: folderName, description: folderDescription, privacy: folderPrivacy });
        createStatus.textContent = `Pasta "${folderName}" criada com sucesso!`;
        // Você poderia adicionar a pasta à interface aqui dinamicamente
        setTimeout(() => {
            hideModal('create-folder-modal');
        }, 1000);
    }, 2000);
}

// Funções de Playlists
function simulateCreatePlaylist() {
    const playlistName = document.getElementById('playlist-name').value;
    const playlistDescription = document.getElementById('playlist-description').value;
    const playlistPrivacy = document.getElementById('playlist-privacy').value;
    const createStatus = document.getElementById('playlist-create-status');

    if (!playlistName.trim()) {
        createStatus.textContent = 'O nome da playlist é obrigatório!';
        createStatus.classList.add('text-red-500');
        return;
    }

    createStatus.textContent = `Criando playlist "${playlistName}"...`;
    createStatus.classList.remove('text-red-500');
    createStatus.classList.add('text-green-500');

    setTimeout(() => {
        // Simula a criação da playlist
        console.log('Playlist criada:', { name: playlistName, description: playlistDescription, privacy: playlistPrivacy });
        createStatus.textContent = `Playlist "${playlistName}" criada com sucesso!`;
        // Você poderia adicionar a playlist à interface aqui dinamicamente
        setTimeout(() => {
            hideModal('create-playlist-modal');
        }, 1000);
    }, 2000);
}