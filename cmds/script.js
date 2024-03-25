
document.getElementById('board1').style.display = 'block';
for (let i = 1; i <= 11; i++){
    if (i != Number('1')){
        console.log(document.getElementById('board' + String(i)));
        document.getElementById('board' + String(i)).style.display = 'none';
    }
}

document.getElementById('1').style.backgroundColor = '#111111';
for (let i = 1; i <= 11; i++){
    if (i != Number('1')){
        document.getElementById(String(i)).style.backgroundColor = 'transparent';
    }
}

function change_board(el){
    btn_id = el.id;
    board_id = 'board' + btn_id;

    document.getElementById(board_id).style.display = 'block';
    for (let i = 1; i <= 11; i++){
        if (i != Number(btn_id)){
            document.getElementById('board' + String(i)).style.display = 'none';
        }
    }

    document.getElementById(btn_id).style.backgroundColor = '#111111';
    document.getElementById(btn_id).className = 'closed';
    for (let i = 1; i <= 11; i++){
        if (i != Number(btn_id)){
            document.getElementById(String(i)).style.backgroundColor = 'transparent';
            document.getElementById(String(i)).className = 'open';
        }
    }
}