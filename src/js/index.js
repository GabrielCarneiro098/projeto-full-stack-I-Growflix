const rowGrowcast = document.getElementById("rowGrowcast");
const rowWebinar = document.getElementById("rowWebinar");
const rowUxUi = document.getElementById("rowUxUi");
const rowDiversos = document.getElementById("rowDiversos");
const modalTitle = document.getElementById("modal-title");
const modalVideoBody = document.getElementById("modal-video-body");
const videoIframe = document.getElementById("videoIframe");
const featuredVideo = document.getElementById("featured-video");

const videoModal = new bootstrap.Modal("#videoModal", {});

function closeModal(element) {
  //Tira modal da tela
  videoModal.hide();
  //Src do video muda para vazio
  videoIframe.setAttribute("src", "");
  modalTitle.innerHTML = "";
}

function openModal(link, title) {
  //Adiciona link do video ao src
  videoIframe.setAttribute("src", link);
  modalTitle.innerHTML = title;
  //Mostra modal na tela
  videoModal.show();
}

function renderVideos(category, element) {
  let html = "";
  let videosInThisCategory = data.filter(
    (video) => video.category === category
  );

  videosInThisCategory.forEach((video) => {
    html += `
      <div class="col-12 col-sm-6 col-lg-3 my-3">
        <div class="card bg-transparent text-light">
        <img src="${video.img}" alt="${video.title}" onclick="openModal('${video.url}') class="card-img-top" />
          <div class="card-body">
            <button class="btn p-0 btn-danger bg-transparent border-0 d-flex flex-row align-items-center gap-3 text-start text-wrap" onclick="openModal('${video.url}', '${video.title}')"><i class="bi bi-play-circle fs-1"></i>${video.title}</button>  
          </div>
        </div>
      </div>
    `;
  });

  element.innerHTML += html;
}

featuredVideo.addEventListener("click", function (e) {
  openModal(
    "https://www.youtube.com/embed/7OWT3lfHYvE",
    "Growcast #01 | As profissões do futuro"
  );
});

renderVideos("growcast", rowGrowcast);
renderVideos("webinar em flutter", rowWebinar);
renderVideos("jornada UX/UI", rowUxUi);
renderVideos("diversos", rowDiversos);
