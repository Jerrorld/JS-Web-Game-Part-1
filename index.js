function newImage(path, left, bottom) {
    let png = document.createElement('img');
    png.src = path;
    png.style.position = 'fixed';
    png.style.left = left + 'px';
    png.style.bottom = bottom + 'px';
    document.body.append(png);
    return png
};

function newItem(path, left, bottom) {
    let object = newImage(path, left, bottom);

    object.addEventListener('dblclick', function(){
        object.remove();
    })
};

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pillar.png", 350, 100);
newImage("assets/tree.png", 200, 300);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);
newImage("assets/pine-tree.png", 450, 200);

newItem('assets/sword.png', 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);