// Auth verification
const currentUser = localStorage.getItem('active_botanica_user') || 'DemoUser';
document.getElementById('currentUserLabel').innerText = currentUser;

// User-specific database storage key
const DB_KEY = `botanica_plants_${currentUser}`;

function getSavedPlants() {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) return JSON.parse(raw);
    const defaults = [
        { id: 101, name: 'Lucky Leaf', species: 'Money Plant', health: 70 },
        { id: 102, name: 'Blossom Belle', species: 'Jasmine', health: 90 }
    ];
    localStorage.setItem(DB_KEY, JSON.stringify(defaults));
    return defaults;
}

let userPlants = getSavedPlants();
let activePlantId = userPlants.length > 0 ? userPlants[0].id : null;

function renderSpeciesVector(species, health) {
    const isWithered = health < 25;
    const stemColor = isWithered ? '#8D6E63' : '#4E8A5E';
    const leafColor1 = isWithered ? '#A1887F' : '#64B87D';
    const leafColor2 = isWithered ? '#BCAAA4' : '#8AD49F';

    if (species === 'Money Plant') {
        // Heart-shaped cascading vine leaves
        return `
        <svg width="190" height="200" viewBox="0 0 190 200" fill="none">
            <path d="M95 180 Q90 120 95 60" stroke="${stemColor}" stroke-width="5" stroke-linecap="round"/>
            <path d="M93 140 Q60 135 48 105 Q70 95 93 130" fill="${leafColor1}" filter="drop-shadow(2px 4px 4px rgba(0,0,0,0.1))"/>
            <path d="M95 110 Q135 105 142 75 Q115 65 95 100" fill="${leafColor2}" filter="drop-shadow(2px 4px 4px rgba(0,0,0,0.1))"/>
            <path d="M95 70 Q70 50 82 25 Q105 35 95 68" fill="${leafColor1}"/>
            <circle cx="95" cy="55" r="4" fill="#A7E5B9" opacity="0.6"/>
        </svg>`;
    } else if (species === 'Jasmine') {
        // Jasmine with gentle white/pinkish blossom petals
        const flowerOpacity = isWithered ? '0.3' : '1';
        return `
        <svg width="190" height="200" viewBox="0 0 190 200" fill="none">
            <path d="M95 180 Q105 130 95 70" stroke="${stemColor}" stroke-width="5" stroke-linecap="round"/>
            <ellipse cx="68" cy="115" rx="20" ry="10" transform="rotate(-30 68 115)" fill="${leafColor1}"/>
            <ellipse cx="122" cy="100" rx="20" ry="10" transform="rotate(30 122 100)" fill="${leafColor2}"/>
            <!-- 3D Jasmine Petals -->
            <g opacity="${flowerOpacity}">
                <circle cx="95" cy="65" r="16" fill="#FFF5F7" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"/>
                <circle cx="83" cy="55" r="12" fill="#FFE3EC"/>
                <circle cx="107" cy="55" r="12" fill="#FFE3EC"/>
                <circle cx="95" cy="45" r="12" fill="#FFF0F5"/>
                <circle cx="95" cy="65" r="5" fill="#FBC02D"/>
            </g>
        </svg>`;
    } else if (species === 'Monstera') {
        // Wide perforated leaves (Foliage)
        return `
        <svg width="200" height="210" viewBox="0 0 200 210" fill="none">
            <path d="M100 185 Q98 120 100 80" stroke="${stemColor}" stroke-width="6" stroke-linecap="round"/>
            <path d="M96 130 C50 110 40 60 75 55 C110 50 100 110 96 130Z" fill="${leafColor1}" filter="drop-shadow(2px 5px 6px rgba(0,0,0,0.12))"/>
            <!-- Fenestration (Cutouts) -->
            <ellipse cx="75" cy="80" rx="4" ry="12" transform="rotate(-20 75 80)" fill="#FAF7F2"/>
            <path d="M102 110 C150 90 155 40 125 35 C95 30 100 90 102 110Z" fill="${leafColor2}" filter="drop-shadow(2px 5px 6px rgba(0,0,0,0.12))"/>
            <ellipse cx="125" cy="60" rx="4" ry="12" transform="rotate(20 125 60)" fill="#FAF7F2"/>
        </svg>`;
    } else {
        // Miniature Bonsai: Curving ancient trunk with cloud foliage
        return `
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <!-- Curving wooden trunk -->
            <path d="M100 180 C115 150 75 120 95 90" stroke="#795548" stroke-width="9" stroke-linecap="round"/>
            <!-- Cloud Foliage 1 -->
            <ellipse cx="75" cy="90" rx="26" ry="16" fill="${leafColor1}" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
            <!-- Cloud Foliage 2 -->
            <ellipse cx="118" cy="80" rx="30" ry="18" fill="${leafColor2}" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
            <!-- Cloud Top -->
            <ellipse cx="95" cy="65" rx="22" ry="14" fill="${leafColor1}"/>
        </svg>`;
    }
}

function renderUI() {
    // 1. Sidebar List
    const container = document.getElementById('plantListContainer');
    container.innerHTML = '';

    userPlants.forEach(plant => {
        const isActive = plant.id === activePlantId;
        const card = document.createElement('div');
        card.className = `clay-card p-3.5 rounded-2xl cursor-pointer transition flex items-center justify-between border ${
            isActive ? 'border-[#4E9F6E] bg-[#F3FAF5]' : 'border-transparent hover:border-[#DFD7CC]'
        }`;
        card.onclick = () => { activePlantId = plant.id; renderUI(); };

        card.innerHTML = `
            <div>
                <h4 class="text-sm font-bold text-[#2D3E33]">${plant.name}</h4>
                <span class="text-[11px] text-[#71887A]">${plant.species}</span>
            </div>
            <span class="px-2.5 py-1 text-xs font-bold rounded-xl ${
                plant.health >= 50 ? 'bg-[#E5F5EC] text-[#2F7E4E]' : 'bg-[#FFF0ED] text-[#D16D65]'
            }">${plant.health}%</span>
        `;
        container.appendChild(card);
    });

    document.getElementById('plantCountBadge').innerText = userPlants.length;

    // 2. Active Plant
    const active = userPlants.find(p => p.id === activePlantId);
    if (!active) {
        document.getElementById('activePlantName').innerText = 'No Plant Selected';
        document.getElementById('plantVisualStage').innerHTML = '';
        return;
    }

    document.getElementById('activePlantName').innerText = active.name;
    document.getElementById('activeSpeciesBadge').innerText = active.species;
    document.getElementById('healthDisplay').innerText = `${active.health}%`;
    document.getElementById('healthBar').style.width = `${active.health}%`;

    // Render respective 3D Vector
    document.getElementById('plantVisualStage').innerHTML = renderSpeciesVector(active.species, active.health);
}

function showToast(msg) {
    const toast = document.getElementById('careToast');
    toast.innerText = msg;
    toast.classList.remove('opacity-0', 'translate-y-3');
    setTimeout(() => toast.classList.add('opacity-0', 'translate-y-3'), 1600);
}

function applyCare(type) {
    const plant = userPlants.find(p => p.id === activePlantId);
    if (!plant) return;

    if (type === 'water') {
        plant.health = Math.min(100, plant.health + 15);
        showToast(`Watered ${plant.name}! Refreshed 💧`);
        const drops = document.getElementById('waterLayer');
        drops.classList.remove('opacity-0');
        setTimeout(() => drops.classList.add('opacity-0'), 800);
    } else {
        plant.health = Math.min(100, plant.health + 10);
        showToast(`Fresh air breeze for ${plant.name} 🍃`);
        const wind = document.getElementById('windLayer');
        wind.classList.add('breeze-anim');
        setTimeout(() => wind.classList.remove('breeze-anim'), 800);
    }

    saveState();
    renderUI();
}

function saveState() {
    localStorage.setItem(DB_KEY, JSON.stringify(userPlants));
}

// CRUD: Create
function savePlant(e) {
    e.preventDefault();
    const name = document.getElementById('addNickname').value.trim();
    const species = document.getElementById('addSpecies').value;
    const newFlora = {
        id: Date.now(),
        name: name,
        species: species,
        health: 60
    };
    userPlants.push(newFlora);
    activePlantId = newFlora.id;
    saveState();
    closeModal('addModal');
    document.getElementById('addNickname').value = '';
    renderUI();
}

// CRUD: Update Name
function openEditModal() {
    const plant = userPlants.find(p => p.id === activePlantId);
    if (!plant) return;
    document.getElementById('editNickname').value = plant.name;
    openModal('editModal');
}

function saveName(e) {
    e.preventDefault();
    const plant = userPlants.find(p => p.id === activePlantId);
    if (!plant) return;
    plant.name = document.getElementById('editNickname').value.trim();
    saveState();
    closeModal('editModal');
    renderUI();
}

// CRUD: Delete
function deletePlant() {
    if (userPlants.length <= 1) {
        alert("Your garden should have at least one plant!");
        return;
    }
    if (confirm("Do you want to remove this plant?")) {
        userPlants = userPlants.filter(p => p.id !== activePlantId);
        activePlantId = userPlants[0].id;
        saveState();
        renderUI();
    }
}

function logoutUser() {
    localStorage.removeItem('active_botanica_user');
    window.location.href = 'auth.jsp';
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

// Initial Render
renderUI();