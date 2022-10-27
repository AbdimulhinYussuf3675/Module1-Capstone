const claimObjs = [{
  name: 'Hassan Abdi',
  comment: 'If you have some events and want to hire its coverage just try Adam Studio, you will have experience on your own',
  work: 'Graphic Designer',  
  imgsrc: 'Images/Nav/4.png',
  imgdescription: 'person1',
},
{
  name: 'Binamin Solo',
  comment: 'I had my wedding covered and got the videos and images on time compared to other studios.',
  work: 'Software Engeneer',
  imgsrc: 'Images/Nav/s.png',
  imgdescription: 'person2',
},
{
  name: 'Rahma S.',
  comment: 'Your workers give their best when hired, thumbs up.I recommend anyone here',
  work: 'Nurse',
  imgsrc: 'Images/Nav/6.png',
  imgdescription: 'person3',
},
{
  name: 'Osman G.',
  comment: 'I received the package today. Thank you. I tried the pants on with my new braces. The pants are beautifully done and fit perfectly. Congratulations on the excellent tailoring your team accomplished',
  work: 'Musician',
  imgsrc: 'Images/Nav/7.png',
  imgdescription: 'person4',
},
{
  name: 'Hussein D.',
  comment: 'You dont have to stress on your events coverage just contact Adam Studio, Stop over researching. I recommend you to Adam Studio!',
  work: 'Actor',
  imgsrc: 'Images/Nav/45.png',
  imgdescription: 'person5',
},
{
  name: 'Adan B.',
  comment: 'If their is a photographers and videographers i can think to hire on my evens, i would never think twice about Adam studio Clients are served with respect. I recommend anyone here',
  work: 'Electrical Engeener',
  imgsrc: 'Images/Nav/9.png',
  imgdescription: 'person6',
}];
const hamburgerBtn = document.querySelector('.icon-menu-mobile img');
const crossBtn = document.querySelector('.cross img');
const showMoreBtn = document.querySelector('.comment-btn button');
const mobileMenu = document.querySelector('.nav-mobile');
const mobileMenuElements = document.querySelectorAll('.nav-mobile .container li');
const claimContainer = document.querySelector('.claim-container');
hamburgerBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  hamburgerBtn.style.display = 'none';
});
crossBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  hamburgerBtn.style.display = 'block';
});

mobileMenuElements.forEach((menuElement) => {
  menuElement.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburgerBtn.style.display = 'block';
  });
});
let comment = '';
claimObjs.forEach((claimObj) => {
  comment += `<div class="claim-card">
   <div class="claim-image">
       <img src="${claimObj.imgsrc}" alt="${claimObj.imgdescription}">
   </div>
   <div class="claim-comment">
       <h2>${claimObj.name}</h2>
       <h4>${claimObj.work}</h4>
       </p>
       <hr>
       <br>
       <p>"${claimObj.comment}"
   </div>
</div>`;
});

claimContainer.innerHTML += comment;
const claims = document.querySelectorAll('.claim-card');
if (showMoreBtn !== null) {
  showMoreBtn.addEventListener('click', () => {
    claims.forEach((claim, index) => {
      if (index > 1) {
        if (window.getComputedStyle(claim).display === 'none') {
          claim.style.display = 'flex';
        } else {
          claim.style.display = 'none';
        }
      }
    });
    if (claims[2].style.display === 'none') {
      showMoreBtn.innerHTML = 'MORE <img src="Images/Nav/less.png" alt="down icon">';
    } else {
      showMoreBtn.innerHTML = 'LESS <img src="Images/Nav/more.jpeg"  alt="up icon">>';
    }
  });
}