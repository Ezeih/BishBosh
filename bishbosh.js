document.getElementById('bishBoshForm').addEventListener('submit', function (event) {

    event.preventDefault();

    document.getElementById('bishBoshOutput').innerHTML = ''; 

    const bish = parseInt(document.getElementById('bishInput').value);

    const bosh = parseInt(document.getElementById('boshInput').value);

    const limit = parseInt(document.getElementById('limitInput').value);

    for (let i = 1; i <= limit; i++) {
        let output = '';
        if (i % bish === 0) output += 'Bish';
        if (i % bosh === 0) output += 'Bosh';
        document.getElementById('bishBoshOutput').innerHTML += (output || i) + ', ';
    }
});
