function renderSpeciesVector(species, health, stage) {
    var isWithered = health < 25;
    var sp = (species || '').toLowerCase();

    // color pallette
    var colors = {
        green1: isWithered ? '#8B7355' : '#4E8A5E',
        green2: isWithered ? '#A0896C' : '#64B87D',
        green3: isWithered ? '#B8A080' : '#8AD49F',
        stem: isWithered ? '#6B5340' : '#3D6B47',
        brown: '#795548',
        flower: isWithered ? '#D4A5A5' : '#FF6B9D'
    };

    // ========== 1. MONEY PLANT (heart shaped leaf, climbing) ==========
    if (sp.indexOf('money') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q95 160 95 145" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<path d="M95 145 Q85 135 95 125 Q105 135 95 145Z" fill="' + colors.green1 + '"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 150 95 120" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M95 155 Q80 145 90 135 Q100 145 95 155Z" fill="' + colors.green1 + '"/>' +
                '<path d="M95 130 Q110 120 100 110 Q90 120 95 130Z" fill="' + colors.green2 + '"/>' +
                '<path d="M95 145 Q75 140 85 130 Q95 140 95 145Z" fill="' + colors.green3 + '"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q85 140 95 90" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<path d="M95 160 Q75 150 85 140 Q95 150 95 160Z" fill="' + colors.green1 + '"/>' +
                '<path d="M95 140 Q115 130 105 120 Q95 130 95 140Z" fill="' + colors.green2 + '"/>' +
                '<path d="M95 120 Q70 115 80 105 Q90 115 95 120Z" fill="' + colors.green3 + '"/>' +
                '<path d="M95 100 Q120 95 110 85 Q100 95 95 100Z" fill="' + colors.green1 + '"/>' +
                '<path d="M95 85 Q75 80 85 70 Q95 80 95 85Z" fill="' + colors.green2 + '"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q80 130 95 70" stroke="' + colors.stem + '" stroke-width="6" stroke-linecap="round"/>' +
                '<path d="M95 165 Q70 155 80 145 Q90 155 95 165Z" fill="' + colors.green1 + '"/>' +
                '<path d="M95 145 Q120 135 110 125 Q100 135 95 145Z" fill="' + colors.green2 + '"/>' +
                '<path d="M95 125 Q65 120 75 110 Q85 120 95 125Z" fill="' + colors.green3 + '"/>' +
                '<path d="M95 105 Q125 100 115 90 Q105 100 95 105Z" fill="' + colors.green1 + '"/>' +
                '<path d="M95 85 Q70 80 80 70 Q90 80 95 85Z" fill="' + colors.green2 + '"/>' +
                '<path d="M95 70 Q115 65 108 58 Q100 65 95 70Z" fill="#FFD700" opacity="0.7"/>' +
                '<path d="M95 55 Q75 50 82 43 Q90 50 95 55Z" fill="#FFD700" opacity="0.6"/>' +
                '</svg>';
        }
    }

    // ========== 2. JASMINE (white small flower) ==========
    if (sp.indexOf('jasmine') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q95 160 95 145" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<ellipse cx="90" cy="150" rx="6" ry="4" transform="rotate(-30 90 150)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="100" cy="148" rx="6" ry="4" transform="rotate(30 100 148)" fill="' + colors.green2 + '"/>' +
                '<circle cx="95" cy="140" r="4" fill="#FFF8DC" opacity="0.8"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 140 95 100" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<ellipse cx="85" cy="140" rx="10" ry="5" transform="rotate(-40 85 140)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="105" cy="130" rx="10" ry="5" transform="rotate(40 105 130)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="88" cy="115" rx="8" ry="4" transform="rotate(-30 88 115)" fill="' + colors.green3 + '"/>' +
                '<circle cx="95" cy="105" r="5" fill="#FFF8DC"/>' +
                '<circle cx="95" cy="105" r="2" fill="#FFD700"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q85 130 95 80" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<ellipse cx="80" cy="145" rx="12" ry="6" transform="rotate(-45 80 145)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="110" cy="135" rx="12" ry="6" transform="rotate(45 110 135)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="82" cy="115" rx="10" ry="5" transform="rotate(-35 82 115)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="108" cy="105" rx="10" ry="5" transform="rotate(35 108 105)" fill="' + colors.green1 + '"/>' +
                '<circle cx="95" cy="90" r="6" fill="#FFF8DC"/>' +
                '<circle cx="95" cy="90" r="2.5" fill="#FFD700"/>' +
                '<circle cx="85" cy="80" r="5" fill="#FFF8DC" opacity="0.9"/>' +
                '<circle cx="105" cy="85" r="5" fill="#FFF8DC" opacity="0.9"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q80 120 95 60" stroke="' + colors.stem + '" stroke-width="6" stroke-linecap="round"/>' +
                '<ellipse cx="75" cy="150" rx="14" ry="7" transform="rotate(-50 75 150)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="115" cy="140" rx="14" ry="7" transform="rotate(50 115 140)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="78" cy="120" rx="12" ry="6" transform="rotate(-40 78 120)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="112" cy="110" rx="12" ry="6" transform="rotate(40 112 110)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="82" cy="90" rx="10" ry="5" transform="rotate(-30 82 90)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="108" cy="85" rx="10" ry="5" transform="rotate(30 108 85)" fill="' + colors.green3 + '"/>' +
                '<circle cx="95" cy="70" r="8" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>' +
                '<circle cx="88" cy="64" r="6" fill="#FFF8DC"/>' +
                '<circle cx="102" cy="64" r="6" fill="#FFF8DC"/>' +
                '<circle cx="95" cy="58" r="6" fill="#FFFFFF"/>' +
                '<circle cx="95" cy="70" r="3" fill="#FFD700"/>' +
                '<circle cx="80" cy="55" r="6" fill="#FFFFFF" opacity="0.9"/>' +
                '<circle cx="110" cy="60" r="6" fill="#FFFFFF" opacity="0.9"/>' +
                '</svg>';
        }
    }

    // ========== 3. MONSTERA (split large leaf) ==========
    if (sp.indexOf('monstera') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q95 160 95 145" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<path d="M95 145 Q80 130 95 120 Q110 130 95 145Z" fill="' + colors.green1 + '"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 140 95 100" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M95 140 Q70 125 80 110 Q95 120 95 140Z" fill="' + colors.green1 + '"/>' +
                '<path d="M95 115 Q120 100 110 85 Q95 95 95 115Z" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="82" cy="120" rx="3" ry="6" transform="rotate(-20 82 120)" fill="#FAF7F2"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q85 130 95 70" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<path d="M95 150 Q60 130 70 105 Q90 120 95 150Z" fill="' + colors.green1 + '" filter="drop-shadow(2px 4px 6px rgba(0,0,0,0.1))"/>' +
                '<path d="M95 120 Q130 100 125 75 Q100 90 95 120Z" fill="' + colors.green2 + '" filter="drop-shadow(2px 4px 6px rgba(0,0,0,0.1))"/>' +
                '<path d="M95 90 Q70 75 75 55 Q90 70 95 90Z" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="78" cy="115" rx="4" ry="10" transform="rotate(-25 78 115)" fill="#FAF7F2"/>' +
                '<ellipse cx="118" cy="90" rx="4" ry="10" transform="rotate(25 118 90)" fill="#FAF7F2"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q80 120 95 50" stroke="' + colors.stem + '" stroke-width="6" stroke-linecap="round"/>' +
                '<path d="M95 155 Q50 130 60 100 Q85 120 95 155Z" fill="' + colors.green1 + '" filter="drop-shadow(2px 5px 8px rgba(0,0,0,0.12))"/>' +
                '<path d="M95 125 Q140 100 135 70 Q105 90 95 125Z" fill="' + colors.green2 + '" filter="drop-shadow(2px 5px 8px rgba(0,0,0,0.12))"/>' +
                '<path d="M95 95 Q60 75 65 50 Q85 70 95 95Z" fill="' + colors.green3 + '" filter="drop-shadow(2px 4px 6px rgba(0,0,0,0.1))"/>' +
                '<path d="M95 70 Q125 55 120 35 Q100 50 95 70Z" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="68" cy="110" rx="5" ry="14" transform="rotate(-30 68 110)" fill="#FAF7F2"/>' +
                '<ellipse cx="128" cy="85" rx="5" ry="14" transform="rotate(30 128 85)" fill="#FAF7F2"/>' +
                '<ellipse cx="72" cy="65" rx="4" ry="10" transform="rotate(-20 72 65)" fill="#FAF7F2"/>' +
                '<ellipse cx="115" cy="50" rx="4" ry="10" transform="rotate(20 115 50)" fill="#FAF7F2"/>' +
                '</svg>';
        }
    }

    // ========== 4. MINIATURE BONSAI (twisted trunk, small canopy) ==========
    if (sp.indexOf('bonsai') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 C100 165 90 155 95 145" stroke="' + colors.brown + '" stroke-width="5" stroke-linecap="round"/>' +
                '<ellipse cx="95" cy="140" rx="12" ry="8" fill="' + colors.green1 + '"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 C105 160 85 145 95 125" stroke="' + colors.brown + '" stroke-width="7" stroke-linecap="round"/>' +
                '<ellipse cx="88" cy="125" rx="16" ry="10" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="102" cy="118" rx="14" ry="9" fill="' + colors.green2 + '"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 C110 155 80 135 95 105" stroke="' + colors.brown + '" stroke-width="9" stroke-linecap="round"/>' +
                '<path d="M95 140 C85 135 80 130 85 125" stroke="' + colors.brown + '" stroke-width="4" stroke-linecap="round"/>' +
                '<ellipse cx="78" cy="110" rx="20" ry="12" fill="' + colors.green1 + '" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.1))"/>' +
                '<ellipse cx="105" cy="100" rx="22" ry="13" fill="' + colors.green2 + '" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.1))"/>' +
                '<ellipse cx="92" cy="90" rx="18" ry="11" fill="' + colors.green3 + '"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 C115 150 75 130 95 90" stroke="' + colors.brown + '" stroke-width="11" stroke-linecap="round"/>' +
                '<path d="M95 150 C80 145 75 140 80 135" stroke="' + colors.brown + '" stroke-width="5" stroke-linecap="round"/>' +
                '<path d="M95 120 C108 115 112 110 108 105" stroke="' + colors.brown + '" stroke-width="4" stroke-linecap="round"/>' +
                '<ellipse cx="72" cy="100" rx="24" ry="14" fill="' + colors.green1 + '" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.12))"/>' +
                '<ellipse cx="112" cy="90" rx="26" ry="15" fill="' + colors.green2 + '" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.12))"/>' +
                '<ellipse cx="92" cy="78" rx="22" ry="13" fill="' + colors.green3 + '" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.1))"/>' +
                '<ellipse cx="100" cy="68" rx="18" ry="11" fill="' + colors.green1 + '"/>' +
                '<circle cx="85" cy="85" r="2" fill="#FF6B9D" opacity="0.8"/>' +
                '<circle cx="105" cy="75" r="2" fill="#FF6B9D" opacity="0.8"/>' +
                '<circle cx="95" cy="70" r="2" fill="#FFD700" opacity="0.8"/>' +
                '</svg>';
        }
    }

    // ========== 5. SNAKE PLANT (tall upright leaf) ==========
    if (sp.indexOf('snake') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 140 95 100 Q100 140 95 180Z" fill="' + colors.green1 + '" filter="drop-shadow(2px 3px 4px rgba(0,0,0,0.08))"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q88 120 95 70 Q102 120 95 180Z" fill="' + colors.green1 + '" filter="drop-shadow(2px 4px 5px rgba(0,0,0,0.1))"/>' +
                '<path d="M80 180 Q72 140 78 100 Q86 140 80 180Z" fill="' + colors.green2 + '"/>' +
                '<path d="M110 180 Q118 145 112 110 Q104 145 110 180Z" fill="' + colors.green3 + '"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q85 100 95 40 Q105 100 95 180Z" fill="' + colors.green1 + '" filter="drop-shadow(2px 4px 6px rgba(0,0,0,0.1))"/>' +
                '<path d="M75 180 Q62 120 70 60 Q82 120 75 180Z" fill="' + colors.green2 + '"/>' +
                '<path d="M115 180 Q128 120 120 60 Q108 120 115 180Z" fill="' + colors.green3 + '"/>' +
                '<path d="M88 180 Q78 140 85 90 Q92 140 88 180Z" fill="' + colors.green1 + '" opacity="0.8"/>' +
                '<path d="M102 180 Q112 140 105 90 Q98 140 102 180Z" fill="' + colors.green2 + '" opacity="0.8"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q82 90 95 20 Q108 90 95 180Z" fill="' + colors.green1 + '" filter="drop-shadow(2px 5px 7px rgba(0,0,0,0.12))"/>' +
                '<path d="M70 180 Q55 110 65 40 Q80 110 70 180Z" fill="' + colors.green2 + '"/>' +
                '<path d="M120 180 Q135 110 125 40 Q110 110 120 180Z" fill="' + colors.green3 + '"/>' +
                '<path d="M83 180 Q72 130 80 70 Q88 130 83 180Z" fill="' + colors.green1 + '" opacity="0.85"/>' +
                '<path d="M107 180 Q118 130 110 70 Q102 130 107 180Z" fill="' + colors.green2 + '" opacity="0.85"/>' +
                '<path d="M95 180 Q88 130 95 80 Q102 130 95 180Z" fill="' + colors.green3 + '" opacity="0.7"/>' +
                '<path d="M95 150 Q90 130 95 110 Q100 130 95 150Z" fill="#FFD700" opacity="0.3"/>' +
                '<path d="M80 140 Q76 125 80 110 Q84 125 80 140Z" fill="#FFD700" opacity="0.25"/>' +
                '<path d="M110 135 Q114 120 110 105 Q106 120 110 135Z" fill="#FFD700" opacity="0.25"/>' +
                '</svg>';
        }
    }

    // ========== 6. PEACE LILY (white flowered spathe) ==========
    if (sp.indexOf('peace') !== -1 || sp.indexOf('lily') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q95 160 95 145" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<ellipse cx="95" cy="140" rx="10" ry="6" fill="' + colors.green1 + '"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 140 95 100" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<ellipse cx="85" cy="140" rx="14" ry="7" transform="rotate(-30 85 140)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="105" cy="130" rx="14" ry="7" transform="rotate(30 105 130)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="95" cy="110" rx="12" ry="6" fill="' + colors.green3 + '"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q85 130 95 80" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<ellipse cx="78" cy="145" rx="16" ry="8" transform="rotate(-40 78 145)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="112" cy="135" rx="16" ry="8" transform="rotate(40 112 135)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="80" cy="115" rx="14" ry="7" transform="rotate(-30 80 115)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="110" cy="105" rx="14" ry="7" transform="rotate(30 110 105)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="95" cy="90" rx="12" ry="6" fill="' + colors.green2 + '"/>' +
                '</svg>';
        } else {
            return '<svg width="220" height="220" viewBox="0 0 220 220" fill="none">' +
                '<path d="M110 200 Q90 130 110 60" stroke="' + colors.stem + '" stroke-width="7" stroke-linecap="round"/>' +
                '<ellipse cx="82" cy="170" rx="22" ry="11" transform="rotate(-50 82 170)" fill="' + colors.green1 + '" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.15))"/>' +
                '<ellipse cx="138" cy="160" rx="22" ry="11" transform="rotate(50 138 160)" fill="' + colors.green2 + '" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.15))"/>' +
                '<ellipse cx="86" cy="135" rx="20" ry="10" transform="rotate(-40 86 135)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="134" cy="125" rx="20" ry="10" transform="rotate(40 134 125)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="92" cy="105" rx="18" ry="9" transform="rotate(-30 92 105)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="128" cy="100" rx="18" ry="9" transform="rotate(30 128 100)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="100" cy="80" rx="16" ry="8" transform="rotate(-20 100 80)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="120" cy="78" rx="16" ry="8" transform="rotate(20 120 78)" fill="' + colors.green2 + '"/>' +

                '<path d="M110 70 Q95 45 110 25 Q125 45 110 70Z" fill="#FFFFFF" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.2))"/>' +
                '<path d="M110 65 Q100 48 110 32 Q120 48 110 65Z" fill="#F8F8FF" opacity="0.9"/>' +
                '<path d="M110 60 Q105 50 110 40 Q115 50 110 60Z" fill="#FFFAF0" opacity="0.7"/>' +

                '<ellipse cx="110" cy="48" rx="4" ry="18" fill="#FFD700" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"/>' +
                '<ellipse cx="110" cy="42" rx="3" ry="12" fill="#FFA500" opacity="0.8"/>' +
                '<ellipse cx="110" cy="90" rx="14" ry="7" fill="' + colors.green3 + '" opacity="0.8"/>' +
                '</svg>';
        }
    }

    // ========== 7. ALOE VERA (rosette shaped succulent) ==========
    if (sp.indexOf('aloe') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 160 95 145 Q100 160 95 180Z" fill="' + colors.green1 + '"/>' +
                '<path d="M88 180 Q82 165 88 150 Q92 165 88 180Z" fill="' + colors.green2 + '"/>' +
                '<path d="M102 180 Q108 165 102 150 Q98 165 102 180Z" fill="' + colors.green3 + '"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q88 130 95 90 Q102 130 95 180Z" fill="' + colors.green1 + '" filter="drop-shadow(2px 3px 4px rgba(0,0,0,0.1))"/>' +
                '<path d="M80 180 Q70 140 78 100 Q86 140 80 180Z" fill="' + colors.green2 + '"/>' +
                '<path d="M110 180 Q120 140 112 100 Q104 140 110 180Z" fill="' + colors.green3 + '"/>' +
                '<path d="M88 180 Q80 150 86 120 Q92 150 88 180Z" fill="' + colors.green1 + '" opacity="0.8"/>' +
                '<path d="M102 180 Q110 150 104 120 Q98 150 102 180Z" fill="' + colors.green2 + '" opacity="0.8"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q85 110 95 60 Q105 110 95 180Z" fill="' + colors.green1 + '" filter="drop-shadow(2px 4px 6px rgba(0,0,0,0.12))"/>' +
                '<path d="M72 180 Q58 120 68 70 Q80 120 72 180Z" fill="' + colors.green2 + '"/>' +
                '<path d="M118 180 Q132 120 122 70 Q110 120 118 180Z" fill="' + colors.green3 + '"/>' +
                '<path d="M82 180 Q70 130 78 85 Q86 130 82 180Z" fill="' + colors.green1 + '" opacity="0.85"/>' +
                '<path d="M108 180 Q120 130 112 85 Q104 130 108 180Z" fill="' + colors.green2 + '" opacity="0.85"/>' +
                '<path d="M95 180 Q88 140 95 100 Q102 140 95 180Z" fill="' + colors.green3 + '" opacity="0.7"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q82 100 95 40 Q108 100 95 180Z" fill="' + colors.green1 + '" filter="drop-shadow(2px 5px 7px rgba(0,0,0,0.12))"/>' +
                '<path d="M65 180 Q48 110 60 50 Q75 110 65 180Z" fill="' + colors.green2 + '"/>' +
                '<path d="M125 180 Q142 110 130 50 Q115 110 125 180Z" fill="' + colors.green3 + '"/>' +
                '<path d="M78 180 Q62 120 72 65 Q84 120 78 180Z" fill="' + colors.green1 + '" opacity="0.85"/>' +
                '<path d="M112 180 Q128 120 118 65 Q106 120 112 180Z" fill="' + colors.green2 + '" opacity="0.85"/>' +
                '<path d="M88 180 Q78 130 86 80 Q94 130 88 180Z" fill="' + colors.green3 + '" opacity="0.75"/>' +
                '<path d="M102 180 Q112 130 104 80 Q96 130 102 180Z" fill="' + colors.green1 + '" opacity="0.75"/>' +
                '<path d="M95 180 Q88 140 95 90 Q102 140 95 180Z" fill="' + colors.green2 + '" opacity="0.6"/>' +
                '<path d="M95 50 Q92 20 95 5 Q98 20 95 50Z" fill="#FF6B6B" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>' +
                '<circle cx="95" cy="12" r="3" fill="#FFD700"/>' +
                '<circle cx="93" cy="20" r="2.5" fill="#FF6B6B"/>' +
                '<circle cx="97" cy="25" r="2.5" fill="#FF6B6B"/>' +
                '</svg>';
        }
    }

    // ========== 8. CALATHEA (patterned oval leaf) ==========
    if (sp.indexOf('calathea') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q95 160 95 145" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<ellipse cx="95" cy="138" rx="12" ry="8" fill="' + colors.green1 + '"/>' +
                '<path d="M95 130 L95 146" stroke="' + colors.green2 + '" stroke-width="1.5" opacity="0.6"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 140 95 100" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<ellipse cx="82" cy="140" rx="16" ry="10" transform="rotate(-35 82 140)" fill="' + colors.green1 + '"/>' +
                '<path d="M72 138 Q82 135 92 142" stroke="' + colors.green2 + '" stroke-width="1.5" opacity="0.5"/>' +
                '<ellipse cx="108" cy="125" rx="16" ry="10" transform="rotate(35 108 125)" fill="' + colors.green3 + '"/>' +
                '<path d="M98 123 Q108 120 118 127" stroke="' + colors.green1 + '" stroke-width="1.5" opacity="0.5"/>' +
                '<ellipse cx="95" cy="108" rx="14" ry="9" fill="' + colors.green2 + '"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q85 130 95 70" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<ellipse cx="75" cy="145" rx="20" ry="12" transform="rotate(-45 75 145)" fill="' + colors.green1 + '"/>' +
                '<path d="M60 142 Q75 138 90 148" stroke="' + colors.green3 + '" stroke-width="2" opacity="0.5"/>' +
                '<ellipse cx="115" cy="130" rx="20" ry="12" transform="rotate(45 115 130)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="78" cy="110" rx="18" ry="11" transform="rotate(-35 78 110)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="112" cy="95" rx="18" ry="11" transform="rotate(35 112 95)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="95" cy="80" rx="16" ry="10" fill="' + colors.green2 + '"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q80 120 95 50" stroke="' + colors.stem + '" stroke-width="6" stroke-linecap="round"/>' +
                '<ellipse cx="68" cy="150" rx="24" ry="14" transform="rotate(-50 68 150)" fill="' + colors.green1 + '"/>' +
                '<path d="M50 147 Q68 142 86 153" stroke="#8B4513" stroke-width="2" opacity="0.4"/>' +
                '<ellipse cx="122" cy="135" rx="24" ry="14" transform="rotate(50 122 135)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="72" cy="115" rx="22" ry="13" transform="rotate(-40 72 115)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="118" cy="100" rx="22" ry="13" transform="rotate(40 118 100)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="80" cy="80" rx="20" ry="12" transform="rotate(-30 80 80)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="110" cy="70" rx="20" ry="12" transform="rotate(30 110 70)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="95" cy="58" rx="18" ry="11" fill="' + colors.green1 + '"/>' +
                '<path d="M82 78 Q95 73 108 80" stroke="#8B4513" stroke-width="1.5" opacity="0.4"/>' +
                '<path d="M100 68 Q110 63 120 70" stroke="#8B4513" stroke-width="1.5" opacity="0.4"/>' +
                '</svg>';
        }
    }

    // ========== 9. ROSE (thorned stem, red flower) ==========
    if (sp.indexOf('rose') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q95 160 95 145" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<ellipse cx="90" cy="155" rx="5" ry="3" transform="rotate(-30 90 155)" fill="' + colors.green1 + '"/>' +
                '<circle cx="95" cy="142" r="4" fill="' + colors.flower + '" opacity="0.7"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 140 95 100" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M92 150 L88 147" stroke="' + colors.brown + '" stroke-width="2" stroke-linecap="round"/>' +
                '<path d="M98 130 L102 127" stroke="' + colors.brown + '" stroke-width="2" stroke-linecap="round"/>' +
                '<ellipse cx="85" cy="140" rx="10" ry="5" transform="rotate(-40 85 140)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="105" cy="125" rx="10" ry="5" transform="rotate(40 105 125)" fill="' + colors.green2 + '"/>' +
                '<circle cx="95" cy="105" r="6" fill="' + colors.flower + '" opacity="0.8"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q85 130 95 70" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<path d="M92 150 L86 146" stroke="' + colors.brown + '" stroke-width="2.5" stroke-linecap="round"/>' +
                '<path d="M98 120 L104 116" stroke="' + colors.brown + '" stroke-width="2.5" stroke-linecap="round"/>' +
                '<path d="M90 90 L84 86" stroke="' + colors.brown + '" stroke-width="2" stroke-linecap="round"/>' +
                '<ellipse cx="78" cy="145" rx="14" ry="7" transform="rotate(-45 78 145)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="112" cy="130" rx="14" ry="7" transform="rotate(45 112 130)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="82" cy="110" rx="12" ry="6" transform="rotate(-35 82 110)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="108" cy="95" rx="12" ry="6" transform="rotate(35 108 95)" fill="' + colors.green1 + '"/>' +
                '<circle cx="95" cy="78" r="10" fill="' + colors.flower + '" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.15))"/>' +
                '<circle cx="95" cy="78" r="5" fill="#DC143C"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q80 120 95 50" stroke="' + colors.stem + '" stroke-width="6" stroke-linecap="round"/>' +
                '<path d="M92 155 L84 150" stroke="' + colors.brown + '" stroke-width="3" stroke-linecap="round"/>' +
                '<path d="M98 125 L106 120" stroke="' + colors.brown + '" stroke-width="3" stroke-linecap="round"/>' +
                '<path d="M90 90 L82 85" stroke="' + colors.brown + '" stroke-width="2.5" stroke-linecap="round"/>' +
                '<path d="M100 70 L108 65" stroke="' + colors.brown + '" stroke-width="2" stroke-linecap="round"/>' +
                '<ellipse cx="72" cy="150" rx="16" ry="8" transform="rotate(-50 72 150)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="118" cy="135" rx="16" ry="8" transform="rotate(50 118 135)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="76" cy="115" rx="14" ry="7" transform="rotate(-40 76 115)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="114" cy="100" rx="14" ry="7" transform="rotate(40 114 100)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="84" cy="80" rx="12" ry="6" transform="rotate(-30 84 80)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="106" cy="70" rx="12" ry="6" transform="rotate(30 106 70)" fill="' + colors.green3 + '"/>' +
                '<circle cx="95" cy="55" r="16" fill="#DC143C" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.2))"/>' +
                '<circle cx="90" cy="50" r="10" fill="#FF1744"/>' +
                '<circle cx="100" cy="52" r="10" fill="#B71C1C"/>' +
                '<circle cx="95" cy="45" r="10" fill="#FF5252"/>' +
                '<circle cx="95" cy="55" r="6" fill="#8B0000"/>' +
                '<circle cx="95" cy="55" r="3" fill="#FFD700"/>' +
                '</svg>';
        }
    }

    // ========== 10. LAVENDER (purple spike flower) ==========
    if (sp.indexOf('lavender') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q95 150 95 120" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<ellipse cx="90" cy="160" rx="6" ry="3" transform="rotate(-30 90 160)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="100" cy="155" rx="6" ry="3" transform="rotate(30 100 155)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="95" cy="115" rx="4" ry="8" fill="#9B59B6" opacity="0.6"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 130 95 80" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<ellipse cx="82" cy="150" rx="10" ry="4" transform="rotate(-40 82 150)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="108" cy="140" rx="10" ry="4" transform="rotate(40 108 140)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="85" cy="120" rx="8" ry="3" transform="rotate(-30 85 120)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="105" cy="110" rx="8" ry="3" transform="rotate(30 105 110)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="95" cy="85" rx="5" ry="12" fill="#9B59B6" opacity="0.8"/>' +
                '<circle cx="95" cy="78" r="3" fill="#8E44AD"/>' +
                '<circle cx="93" cy="85" r="2.5" fill="#A569BD"/>' +
                '<circle cx="97" cy="90" r="2.5" fill="#8E44AD"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q88 120 95 60" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<path d="M80 180 Q75 140 80 100" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<path d="M110 180 Q115 140 110 100" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<ellipse cx="72" cy="155" rx="12" ry="5" transform="rotate(-45 72 155)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="118" cy="145" rx="12" ry="5" transform="rotate(45 118 145)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="75" cy="125" rx="10" ry="4" transform="rotate(-35 75 125)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="115" cy="115" rx="10" ry="4" transform="rotate(35 115 115)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="80" cy="95" rx="8" ry="3" transform="rotate(-25 80 95)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="110" cy="90" rx="8" ry="3" transform="rotate(25 110 90)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="95" cy="70" rx="6" ry="16" fill="#9B59B6" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"/>' +
                '<ellipse cx="80" cy="90" rx="5" ry="14" fill="#8E44AD" opacity="0.9"/>' +
                '<ellipse cx="110" cy="85" rx="5" ry="14" fill="#A569BD" opacity="0.9"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q85 110 95 40" stroke="' + colors.stem + '" stroke-width="6" stroke-linecap="round"/>' +
                '<path d="M75 180 Q68 130 75 80" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M115 180 Q122 130 115 80" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M85 180 Q80 140 85 100" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<path d="M105 180 Q110 140 105 100" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<ellipse cx="65" cy="155" rx="14" ry="6" transform="rotate(-50 65 155)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="125" cy="145" rx="14" ry="6" transform="rotate(50 125 145)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="70" cy="120" rx="12" ry="5" transform="rotate(-40 70 120)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="120" cy="110" rx="12" ry="5" transform="rotate(40 120 110)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="78" cy="90" rx="10" ry="4" transform="rotate(-30 78 90)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="112" cy="85" rx="10" ry="4" transform="rotate(30 112 85)" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="85" cy="70" rx="8" ry="3" transform="rotate(-20 85 70)" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="105" cy="68" rx="8" ry="3" transform="rotate(20 105 68)" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="95" cy="50" rx="7" ry="20" fill="#8E44AD" filter="drop-shadow(0 3px 6px rgba(0,0,0,0.15))"/>' +
                '<ellipse cx="75" cy="75" rx="6" ry="18" fill="#9B59B6" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.12))"/>' +
                '<ellipse cx="115" cy="72" rx="6" ry="18" fill="#A569BD" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.12))"/>' +
                '<ellipse cx="85" cy="65" rx="5" ry="15" fill="#7D3C98" opacity="0.9"/>' +
                '<ellipse cx="105" cy="63" rx="5" ry="15" fill="#BB8FCE" opacity="0.9"/>' +
                '<circle cx="95" cy="38" r="3" fill="#D2B4DE"/>' +
                '<circle cx="75" cy="63" r="2.5" fill="#D2B4DE"/>' +
                '<circle cx="115" cy="60" r="2.5" fill="#D2B4DE"/>' +
                '</svg>';
        }
    }

    // ========== 11. JADE PLANT (round fleshy leaf) ==========
    if (sp.indexOf('jade') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q95 165 95 155" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<ellipse cx="88" cy="152" rx="7" ry="5" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="102" cy="150" rx="7" ry="5" fill="' + colors.green2 + '"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 150 95 120" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<path d="M95 150 Q85 145 82 140" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<path d="M95 135 Q105 130 108 125" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<ellipse cx="78" cy="138" rx="9" ry="6" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="112" cy="123" rx="9" ry="6" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="95" cy="118" rx="8" ry="5" fill="' + colors.green3 + '"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q88 130 95 80" stroke="' + colors.stem + '" stroke-width="6" stroke-linecap="round"/>' +
                '<path d="M95 150 Q80 145 75 138" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M95 120 Q110 115 115 108" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M95 100 Q85 95 82 90" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<ellipse cx="72" cy="136" rx="11" ry="7" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="118" cy="106" rx="11" ry="7" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="78" cy="88" rx="10" ry="6" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="105" cy="82" rx="10" ry="6" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="95" cy="78" rx="9" ry="6" fill="' + colors.green2 + '"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q85 120 95 60" stroke="' + colors.stem + '" stroke-width="7" stroke-linecap="round"/>' +
                '<path d="M95 150 Q75 145 68 138" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<path d="M95 120 Q115 115 122 108" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<path d="M95 95 Q80 90 75 83" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M95 75 Q108 70 112 65" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<ellipse cx="65" cy="136" rx="13" ry="8" fill="' + colors.green1 + '" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.1))"/>' +
                '<ellipse cx="125" cy="106" rx="13" ry="8" fill="' + colors.green2 + '" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.1))"/>' +
                '<ellipse cx="72" cy="81" rx="12" ry="7" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="115" cy="63" rx="12" ry="7" fill="' + colors.green1 + '"/>' +
                '<ellipse cx="88" cy="68" rx="11" ry="7" fill="' + colors.green2 + '"/>' +
                '<ellipse cx="102" cy="55" rx="10" ry="6" fill="' + colors.green3 + '"/>' +
                '<ellipse cx="95" cy="58" rx="10" ry="6" fill="' + colors.green1 + '"/>' +
                '<circle cx="95" cy="50" r="3" fill="#FFB7C5"/>' +
                '<circle cx="88" cy="55" r="2.5" fill="#FFB7C5" opacity="0.8"/>' +
                '<circle cx="102" cy="52" r="2.5" fill="#FFB7C5" opacity="0.8"/>' +
                '</svg>';
        }
    }

    // ========== 12. FERN (bird feather like frond) ==========
    if (sp.indexOf('fern') !== -1) {
        if (stage === 1) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q95 160 95 145" stroke="' + colors.stem + '" stroke-width="3" stroke-linecap="round"/>' +
                '<path d="M95 145 Q90 135 95 125 Q100 135 95 145Z" fill="' + colors.green1 + '"/>' +
                '<path d="M95 135 Q92 130 95 125" stroke="' + colors.green2 + '" stroke-width="1" opacity="0.6"/>' +
                '</svg>';
        } else if (stage === 2) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q90 140 95 100" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M95 160 Q80 155 75 145 Q85 150 95 155" fill="' + colors.green1 + '"/>' +
                '<path d="M95 140 Q110 135 115 125 Q105 130 95 135" fill="' + colors.green2 + '"/>' +
                '<path d="M95 120 Q82 115 78 105 Q88 110 95 115" fill="' + colors.green3 + '"/>' +
                '<path d="M95 105 Q108 100 112 90 Q102 95 95 100" fill="' + colors.green1 + '"/>' +
                '</svg>';
        } else if (stage === 3) {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q88 130 95 70" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
                '<path d="M95 165 Q72 160 65 145 Q80 152 95 158" fill="' + colors.green1 + '"/>' +
                '<path d="M95 145 Q118 140 125 125 Q110 132 95 138" fill="' + colors.green2 + '"/>' +
                '<path d="M95 125 Q70 120 62 105 Q78 112 95 118" fill="' + colors.green3 + '"/>' +
                '<path d="M95 105 Q120 100 128 85 Q112 92 95 98" fill="' + colors.green1 + '"/>' +
                '<path d="M95 85 Q75 80 68 68 Q82 74 95 80" fill="' + colors.green2 + '"/>' +
                '<path d="M95 72 Q112 68 118 58 Q105 64 95 68" fill="' + colors.green3 + '"/>' +
                '</svg>';
        } else {
            return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
                '<path d="M95 180 Q82 120 95 50" stroke="' + colors.stem + '" stroke-width="6" stroke-linecap="round"/>' +
                '<path d="M80 180 Q72 140 78 90" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M110 180 Q118 140 112 90" stroke="' + colors.stem + '" stroke-width="4" stroke-linecap="round"/>' +
                '<path d="M95 165 Q65 160 55 142 Q75 150 95 158" fill="' + colors.green1 + '" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.08))"/>' +
                '<path d="M95 145 Q125 140 135 122 Q115 130 95 138" fill="' + colors.green2 + '" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.08))"/>' +
                '<path d="M95 125 Q62 120 52 102 Q72 110 95 118" fill="' + colors.green3 + '"/>' +
                '<path d="M95 105 Q128 100 138 82 Q118 90 95 98" fill="' + colors.green1 + '"/>' +
                '<path d="M95 85 Q68 80 58 65 Q78 72 95 80" fill="' + colors.green2 + '"/>' +
                '<path d="M95 68 Q120 64 128 52 Q110 58 95 65" fill="' + colors.green3 + '"/>' +
                '<path d="M95 55 Q78 52 72 42 Q85 47 95 52" fill="' + colors.green1 + '"/>' +
                '<path d="M95 50 Q108 48 114 40 Q102 44 95 48" fill="' + colors.green2 + '"/>' +
                '<path d="M78 165 Q60 160 52 148 Q68 154 78 160" fill="' + colors.green3 + '" opacity="0.85"/>' +
                '<path d="M78 140 Q95 135 102 125 Q88 130 78 135" fill="' + colors.green1 + '" opacity="0.85"/>' +
                '<path d="M78 115 Q62 110 55 100 Q70 105 78 110" fill="' + colors.green2 + '" opacity="0.85"/>' +
                '<path d="M112 160 Q130 155 138 143 Q122 149 112 155" fill="' + colors.green1 + '" opacity="0.85"/>' +
                '<path d="M112 135 Q95 130 88 120 Q102 125 112 130" fill="' + colors.green3 + '" opacity="0.85"/>' +
                '<path d="M112 110 Q128 105 135 95 Q120 100 112 105" fill="' + colors.green2 + '" opacity="0.85"/>' +
                '</svg>';
        }
    }

    // ========== DEFAULT (if no species match) ==========
    return '<svg width="190" height="200" viewBox="0 0 190 200" fill="none">' +
        '<path d="M95 180 Q90 120 95 60" stroke="' + colors.stem + '" stroke-width="5" stroke-linecap="round"/>' +
        '<path d="M93 140 Q60 135 48 105 Q70 95 93 130" fill="' + colors.green1 + '" filter="drop-shadow(2px 4px 4px rgba(0,0,0,0.1))"/>' +
        '<path d="M95 110 Q135 105 142 75 Q115 65 95 100" fill="' + colors.green2 + '" filter="drop-shadow(2px 4px 4px rgba(0,0,0,0.1))"/>' +
        '<path d="M95 70 Q70 50 82 25 Q105 35 95 68" fill="' + colors.green3 + '"/>' +
        '<circle cx="95" cy="55" r="4" fill="#A7E5B9" opacity="0.6"/>' +
        '</svg>';
}

function getSpeciesThumbnailSvg(species) {
    var sp = (species || '').toLowerCase();
    if (sp.indexOf('bonsai') !== -1) {
        return '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M7 19h10" />' +
            '<path d="M8 22h8" />' +
            '<path d="M12 15v4" />' +
            '<path d="M12 11c-2-2-4-2-6 0-1.5 1.5-1 4 1 5 2.5 1 5-1 5-5z" fill="currentColor" fill-opacity="0.25" />' +
            '<path d="M12 9c2-2 4-2 6 0 1.5 1.5 1 4-1 5-2.5 1-5-1-5-5z" fill="currentColor" fill-opacity="0.25" />' +
            '<path d="M12 6a3 3 0 0 1 3-3 3 3 0 0 1 3 3c0 2-2 3-3 3-2 0-3-1-3-3z" fill="currentColor" fill-opacity="0.25" />' +
            '</svg>';
    } else if (sp.indexOf('monstera') !== -1) {
        return '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M12 21c-4-4-8-7-8-13a8 8 0 0 1 16 0c0 6-4 9-8 13z" fill="currentColor" fill-opacity="0.2" />' +
            '<path d="M12 3v18" />' +
            '<path d="M12 8c2.5-1.5 4.5-1 6 .5" />' +
            '<path d="M12 13c2.5-1.5 4.5-1 5.5.5" />' +
            '<path d="M12 8c-2.5-1.5-4.5-1-6 .5" />' +
            '<path d="M12 13c-2.5-1.5-4.5-1-5.5.5" />' +
            '</svg>';
    } else if (sp.indexOf('jasmine') !== -1) {
        return '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<circle cx="12" cy="12" r="2.5" fill="currentColor" />' +
            '<path d="M12 3a2.5 2.5 0 0 1 2.5 2.5c0 2-2.5 4-2.5 4s-2.5-2-2.5-4A2.5 2.5 0 0 1 12 3z" fill="currentColor" fill-opacity="0.2" />' +
            '<path d="M21 12a2.5 2.5 0 0 1-2.5 2.5c-2 0-4-2.5-4-2.5s2-2.5 4-2.5A2.5 2.5 0 0 1 21 12z" fill="currentColor" fill-opacity="0.2" />' +
            '<path d="M12 21a2.5 2.5 0 0 1-2.5-2.5c0-2 2.5-4 2.5-4s2.5 2 2.5 4A2.5 2.5 0 0 1 12 21z" fill="currentColor" fill-opacity="0.2" />' +
            '<path d="M3 12a2.5 2.5 0 0 1 2.5-2.5c2 0 4 2.5 4 2.5s-2 2.5-4 2.5A2.5 2.5 0 0 1 3 12z" fill="currentColor" fill-opacity="0.2" />' +
            '</svg>';
    } else if (sp.indexOf('fern') !== -1) {
        return '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M4 20c6-1 12-7 14-16" />' +
            '<path d="M8 17c3-3 6-3 8-1" />' +
            '<path d="M11 14c3-3 6-3 7-1" />' +
            '<path d="M14 10c2-2 4-2 5-1" />' +
            '</svg>';
    } else if (sp.indexOf('cactus') !== -1 || sp.indexOf('succulent') !== -1) {
        return '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M8 22h8" />' +
            '<path d="M12 2a3 3 0 0 1 3 3v17H9V5a3 3 0 0 1 3-3z" fill="currentColor" fill-opacity="0.2" />' +
            '<path d="M6 10v3a2 2 0 0 0 2 2h1" />' +
            '<path d="M18 8v4a2 2 0 0 1-2 2h-1" />' +
            '</svg>';
    } else {
        // Default Leaf / Sprout
        return '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M12 21c0-5 3-9 8-10-1 6-4 10-8 10z" fill="currentColor" fill-opacity="0.25" />' +
            '<path d="M12 21c0-4-3-8-8-8 1 5 4 8 8 8z" fill="currentColor" fill-opacity="0.25" />' +
            '<path d="M12 21V11" />' +
            '</svg>';
    }
}

function animateNumber(element, start, end, duration) {
    if (!element) return;
    if (start === end) {
        element.innerText = end + '%';
        return;
    }
    var startTime = performance.now();
    function update(currentTime) {
        var elapsed = currentTime - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var ease = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(start + (end - start) * ease);
        element.innerText = current + '%';
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.innerText = end + '%';
        }
    }
    requestAnimationFrame(update);
}

function updateCardStyles(plantId) {
    var cards = document.querySelectorAll('#plantListContainer > div');
    cards.forEach(function (card) {
        var pid = parseInt(card.getAttribute('data-plant-id'), 10);
        var isActive = pid === plantId;
        card.className = 'group p-3 rounded-2xl cursor-pointer transition-all duration-200 flex items-center justify-between border ' +
            (isActive
                ? 'bg-gradient-to-r from-[#EFF8F3] via-[#F7FCF9] to-white border-[#36925B] shadow-xs'
                : 'bg-white/80 border-[#E4ECE7] hover:bg-white hover:border-[#BFDFCE] hover:shadow-xs');

        var iconBox = card.querySelector('.plant-icon-box');
        if (iconBox) {
            iconBox.className = 'plant-icon-box w-9 h-9 shrink-0 rounded-xl flex items-center justify-center transition-all duration-200 ' +
                (isActive ? 'bg-[#36925B] text-white shadow-xs' : 'bg-[#EAF6EE] text-[#2C7848] group-hover:bg-[#DEEFE4]');
        }

        var title = card.querySelector('.plant-title');
        if (title) {
            title.className = 'plant-title text-xs sm:text-sm font-bold truncate capitalize ' +
                (isActive ? 'text-[#143521]' : 'text-[#2D4537] group-hover:text-[#143521]');
        }
    });
}

function updatePlantCardBadge(plant) {
    var card = document.querySelector('[data-plant-id="' + plant.id + '"]');
    if (card) {
        var badge = card.querySelector('.health-badge');
        if (badge) {
            var healthBadgeClass = plant.health >= 60
                ? 'bg-[#EBF8F0] text-[#1E7D47] border border-[#CCEEDB]'
                : (plant.health >= 30
                    ? 'bg-[#FEF7E6] text-[#C27803] border border-[#FDE3B2]'
                    : 'bg-[#FFF0ED] text-[#D1493E] border border-[#FECDD3]');
            badge.className = 'health-badge shrink-0 px-2.5 py-1 text-[11px] font-extrabold rounded-xl shadow-xs ' + healthBadgeClass;
            badge.innerText = plant.health + '%';
        }
    }
}

function selectPlant(plantId) {
    if (window.activePlantId === plantId) return;
    window.activePlantId = plantId;
    updateCardStyles(plantId);

    var active = null;
    for (var i = 0; i < window.userPlants.length; i++) {
        if (window.userPlants[i].id === plantId) {
            active = window.userPlants[i];
            break;
        }
    }
    if (!active) return;

    document.getElementById('activePlantName').innerText = active.name;
    document.getElementById('activeSpeciesBadge').innerText = active.species;

    var healthDisplay = document.getElementById('healthDisplay');
    var currentDisplayVal = parseInt(healthDisplay.innerText, 10) || 0;
    animateNumber(healthDisplay, currentDisplayVal, active.health, 400);

    var healthBar = document.getElementById('healthBar');
    if (healthBar) {
        healthBar.style.width = active.health + '%';
    }

    document.getElementById('plantVisualStage').innerHTML = renderSpeciesVector(active.species, active.health, active.stage);

    var careContainer = document.getElementById('careActionsContainer');
    if (careContainer) {
        if (active.stage === 4) {
            careContainer.style.display = 'none';
        } else {
            careContainer.style.display = 'grid';
        }
    }
}

function renderUI() {
    var container = document.getElementById('plantListContainer');
    if (!container) return;
    container.innerHTML = '';

    if (!window.userPlants || window.userPlants.length === 0) {
        document.getElementById('activePlantName').innerText = 'No Flora in Corner';
        document.getElementById('plantVisualStage').innerHTML = '';
        document.getElementById('healthDisplay').innerText = '0%';
        document.getElementById('healthBar').style.width = '0%';
        return;
    }

    if (window.activePlantId === -1 && window.userPlants.length > 0) {
        window.activePlantId = window.userPlants[0].id;
    }

    window.userPlants.forEach(function (plant) {
        var isActive = plant.id === window.activePlantId;
        var card = document.createElement('div');
        card.setAttribute('data-plant-id', plant.id);
        card.className = 'group p-3 rounded-2xl cursor-pointer transition-all duration-200 flex items-center justify-between border ' +
            (isActive
                ? 'bg-gradient-to-r from-[#EFF8F3] via-[#F7FCF9] to-white border-[#36925B] shadow-xs'
                : 'bg-white/80 border-[#E4ECE7] hover:bg-white hover:border-[#BFDFCE] hover:shadow-xs');

        card.onclick = function () { selectPlant(plant.id); };

        var healthBadgeClass = plant.health >= 60
            ? 'bg-[#EBF8F0] text-[#1E7D47] border border-[#CCEEDB]'
            : (plant.health >= 30
                ? 'bg-[#FEF7E6] text-[#C27803] border border-[#FDE3B2]'
                : 'bg-[#FFF0ED] text-[#D1493E] border border-[#FECDD3]');

        var iconBoxClass = isActive
            ? 'bg-[#36925B] text-white shadow-xs'
            : 'bg-[#EAF6EE] text-[#2C7848] group-hover:bg-[#DEEFE4]';

        var titleClass = isActive ? 'text-[#143521]' : 'text-[#2D4537] group-hover:text-[#143521]';
        var iconSvg = getSpeciesThumbnailSvg(plant.species);

        card.innerHTML = '<div class="flex items-center gap-3 min-w-0 pr-2">' +
            '<div class="plant-icon-box w-9 h-9 shrink-0 rounded-xl ' + iconBoxClass + ' flex items-center justify-center transition-all duration-200">' +
            iconSvg +
            '</div>' +
            '<div class="min-w-0">' +
            '<h4 class="plant-title text-xs sm:text-sm font-bold ' + titleClass + ' truncate capitalize">' + (plant.name || 'Plant') + '</h4>' +
            '<span class="text-[10.5px] text-[#6E8A79] font-semibold truncate block">' + (plant.species || 'Flora') + '</span>' +
            '</div>' +
            '</div>' +
            '<span class="health-badge shrink-0 px-2.5 py-1 text-[11px] font-extrabold rounded-xl shadow-xs ' + healthBadgeClass + '">' + plant.health + '%</span>';

        container.appendChild(card);
    });

    var active = null;
    for (var i = 0; i < window.userPlants.length; i++) {
        if (window.userPlants[i].id === window.activePlantId) {
            active = window.userPlants[i];
            break;
        }
    }
    if (!active) active = window.userPlants[0];

    if (active) {
        document.getElementById('activePlantName').innerText = active.name;
        document.getElementById('activeSpeciesBadge').innerText = active.species;
        document.getElementById('healthDisplay').innerText = active.health + '%';
        document.getElementById('healthBar').style.width = active.health + '%';

        document.getElementById('plantVisualStage').innerHTML = renderSpeciesVector(active.species, active.health, active.stage);

        var careContainer = document.getElementById('careActionsContainer');
        if (careContainer) {
            if (active.stage === 4) {
                careContainer.style.display = 'none';
            } else {
                careContainer.style.display = 'grid';
            }
        }
    }
}

var isCareApplying = false;

function applyCare(type) {
    if (!window.activePlantId || window.activePlantId === -1 || isCareApplying) return;

    var active = null;
    for (var i = 0; i < window.userPlants.length; i++) {
        if (window.userPlants[i].id === window.activePlantId) {
            active = window.userPlants[i];
            break;
        }
    }
    if (!active) return;
    if (active.health >= 100) return;

    isCareApplying = true;

    // Trigger visual particle effect
    var effectLayer = type === 'water' ? document.getElementById('waterLayer') : document.getElementById('windLayer');
    if (effectLayer) {
        effectLayer.classList.remove('opacity-0');
        effectLayer.classList.add('opacity-100');
        setTimeout(function () {
            effectLayer.classList.remove('opacity-100');
            effectLayer.classList.add('opacity-0');
        }, 1200);
    }

    var boost = type === 'water' ? 15 : 10;
    var prevHp = active.health;
    var targetHp = Math.min(100, prevHp + boost);
    active.health = targetHp;
    active.baseHealth = targetHp;
    active.lastCared = Date.now();

    if (targetHp >= 100) active.stage = 4;
    else if (targetHp >= 60) active.stage = 3;
    else if (targetHp >= 30) active.stage = 2;
    else active.stage = 1;

    // 1. Animate health bar width ONLY from prevHp% to targetHp% (no starting from 0%)
    var healthBar = document.getElementById('healthBar');
    if (healthBar) {
        healthBar.style.width = targetHp + '%';
    }

    // 2. Animate counter text count up
    var healthDisplay = document.getElementById('healthDisplay');
    animateNumber(healthDisplay, prevHp, targetHp, 500);

    // 3. Update active card badge in list
    updatePlantCardBadge(active);

    // 4. Update visual terrarium with stage/vitality update
    setTimeout(function () {
        var stageContainer = document.getElementById('plantVisualStage');
        if (stageContainer) {
            stageContainer.innerHTML = renderSpeciesVector(active.species, active.health, active.stage);
        }
    }, 200);

    // 5. Hide care if full stage 4
    var careContainer = document.getElementById('careActionsContainer');
    if (careContainer && active.stage === 4) {
        setTimeout(function () {
            careContainer.style.display = 'none';
        }, 600);
    }

    // 6. Asynchronous persistence call to database
    fetch('plantAction.jsp?action=care&plant_id=' + window.activePlantId + '&type=' + encodeURIComponent(type))
        .then(function () {
            isCareApplying = false;
        })
        .catch(function (err) {
            console.error('Care persistence error:', err);
            isCareApplying = false;
        });
}

function checkPlantDecay() {
    if (!window.userPlants || window.userPlants.length === 0) return;
    var now = Date.now();
    var hasChanged = false;
    window.userPlants.forEach(function (plant) {
        var lastCared = plant.lastCared || now;
        var base = (typeof plant.baseHealth === 'number') ? plant.baseHealth : plant.health;
        var elapsedHours = (now - lastCared) / (1000 * 60 * 60);
        var decay = 0;
        if (elapsedHours >= 2.0) {
            decay = Math.floor((elapsedHours / 2.0) * 6);
        }
        var calculatedHp = Math.max(0, base - decay);
        if (calculatedHp !== plant.health) {
            plant.health = calculatedHp;
            if (calculatedHp >= 100) plant.stage = 4;
            else if (calculatedHp >= 60) plant.stage = 3;
            else if (calculatedHp >= 30) plant.stage = 2;
            else plant.stage = 1;
            updatePlantCardBadge(plant);
            hasChanged = true;
        }
    });

    if (hasChanged && window.activePlantId) {
        var active = null;
        for (var i = 0; i < window.userPlants.length; i++) {
            if (window.userPlants[i].id === window.activePlantId) {
                active = window.userPlants[i];
                break;
            }
        }
        if (active) {
            var healthDisplay = document.getElementById('healthDisplay');
            if (healthDisplay) healthDisplay.innerText = active.health + '%';
            var healthBar = document.getElementById('healthBar');
            if (healthBar) healthBar.style.width = active.health + '%';
            var stageContainer = document.getElementById('plantVisualStage');
            if (stageContainer) {
                stageContainer.innerHTML = renderSpeciesVector(active.species, active.health, active.stage);
            }
            var careContainer = document.getElementById('careActionsContainer');
            if (careContainer) {
                if (active.stage === 4) careContainer.style.display = 'none';
                else careContainer.style.display = 'grid';
            }
        }
    }
}

function savePlant(e) {
    e.preventDefault();
    var nicknameInput = document.getElementById('addNickname');
    var speciesInput = document.getElementById('addSpecies');
    var name = nicknameInput ? nicknameInput.value.trim() : '';
    var species = speciesInput ? speciesInput.value.trim() : 'Money Plant';

    if (!name) {
        alert("Please provide a nickname for your plant!");
        return;
    }
    window.location.href = 'plantAction.jsp?action=create&nickname=' + encodeURIComponent(name) + '&species_name=' + encodeURIComponent(species);
}

function openEditModal() {
    var plant = null;
    for (var i = 0; i < window.userPlants.length; i++) {
        if (window.userPlants[i].id === window.activePlantId) {
            plant = window.userPlants[i];
            break;
        }
    }
    if (!plant) return;
    document.getElementById('editNickname').value = plant.name;
    openModal('editModal');
}

function saveName(e) {
    e.preventDefault();
    var name = encodeURIComponent(document.getElementById('editNickname').value.trim());
    window.location.href = 'plantAction.jsp?action=rename&plant_id=' + window.activePlantId + '&nickname=' + name;
}

function deletePlant() {
    if (!window.userPlants || window.userPlants.length <= 1) {
        alert("You must keep at least one plant in your corner!");
        return;
    }
    if (confirm("Are you sure you want to remove this plant?")) {
        window.location.href = 'plantAction.jsp?action=delete&plant_id=' + window.activePlantId;
    }
}

function logoutUser() {
    window.location.href = "logout.jsp";
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

document.addEventListener('DOMContentLoaded', function () {
    renderUI();
    setInterval(checkPlantDecay, 30000);
});