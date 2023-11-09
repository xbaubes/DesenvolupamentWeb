let modal1 = document.getElementById("modal1");
modal1.innerHTML = `
    <span class="material-symbols-outlined" role="button" data-bs-toggle="modal" data-bs-target="#DAMModal">info</span>

    <div class="modal fade" id="DAMModal" tabindex="-1" aria-labelledby="DAMModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="DAMModalLabel">Tecnologies utilitzades</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <ul><li>HTML5</li><li>CSS3 / SASS</li><li>Bootstrap 5</li><li>npm</li><li>JavaScript / TypeScript</li><li>JSON API REST</li><li>ChatGPT</li><li>Git</li><li>Client FTP</li></ul>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Tancar</button>
        </div>
        </div>
    </div>
    </div>
`;
let modal2 = document.getElementById("modal2");
modal2.innerHTML = `
    <span class="material-symbols-outlined" role="button" data-bs-toggle="modal" data-bs-target="#SMXModal">info</span>

    <div class="modal fade" id="SMXModal" tabindex="-1" aria-labelledby="SMXModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="SMXModalLabel">Tecnologies utilitzades</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <ul><li>HTML5</li><li>CSS3</li><li>Bootstrap 5</li><li>Javascript ( per crear components )</li><li>Git</li><li>Client FTP</li></ul>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Tancar</button>
        </div>
        </div>
    </div>
    </div>
`;
