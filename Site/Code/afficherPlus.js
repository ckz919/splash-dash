document.addEventListener("DOMContentLoaded", function () {
    var articles = document.querySelectorAll('.article');
    var btnAfficherPlus = document.getElementById('btnAfficherPlus');
    var articlesParPage = 9;
    var indexDebut = 0;

    function afficherArticles() {
        for (var i = indexDebut; i < indexDebut + articlesParPage; i++) {
            if (articles[i]) {
                articles[i].style.display = 'grid';
            }
        }

        indexDebut += articlesParPage;

        if (indexDebut >= articles.length) {
            btnAfficherPlus.style.display = 'none';
        }
    }

    btnAfficherPlus.addEventListener('click', afficherArticles);

    afficherArticles();
});