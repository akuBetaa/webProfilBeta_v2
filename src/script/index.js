// darkmode and lightmode toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener("click", () => {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

// Setel tema berdasarkan preferensi pengguna yang disimpan di localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlElement.classList.add(savedTheme);
} else {
  // Pilihan tambahan: Setel mode berdasarkan preferensi sistem
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    htmlElement.classList.add("dark");
  }
}


// Scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);



// Project
// document.addEventListener("DOMContentLoaded", () => {
//   const projectContainer = document.getElementById("project-container");

//   projectData.forEach((project) => {
//     const projectCard = document.createElement("div");
//     projectCard.classList.add(
//       "flex",
//       "flex-col",
//       "gap-3",
//       "border",
//       "border-light-border",
//       "dark:border-dark-border",
//       "dark:bg-dark-background1_1",
//       "p-3",
//       "shadow",
//       "rounded-xl"
//     );

//     projectCard.innerHTML = `
//       <img src="${project.image}" class="rounded-md w-full object-cover" alt="">
//       <div>
//         <h3 class="text-base md:text-lg font-semibold">${project.title}</h3>
//         <p class="text-xs md:text-sm">${project.description}</p>
//       </div>
//       <div class="text-lg md:text-xl flex items-center gap-2">
//         ${project.tools.map((tool) => getToolIcon(tool)).join("")}
//       </div>
//       <div class="flex justify-between items-center text-xs md:text-sm mt-2">
//         ${
//           project.links.design
//             ? `<a href="${project.links.design}" class="flex items-center gap-1 px-3 md:px-5 py-1 border border-light-border dark:border-dark-border rounded-full hover:bg-light-background2 dark:hover:bg-dark-background1"><i class="fi fi-brands-figma text-base md:text-xl mt-2"></i><p>Design</p></a>`
//             : ""
//         }
//         ${
//           project.links.code
//             ? `<a href="${project.links.code}" class="flex items-center gap-1 px-3 md:px-5 py-1 border border-light-border dark:border-dark-border rounded-full hover:bg-light-background2 dark:hover:bg-dark-background1"><i class="fi fi-brands-github text-base md:text-xl mt-2"></i><p>Code</p></a>`
//             : ""
//         }
//         ${
//           project.links.demo
//             ? `<a href="${project.links.demo}" class="flex items-center gap-1 px-3 md:px-5 py-1 border border-light-border dark:border-dark-border rounded-full hover:bg-light-background2 dark:hover:bg-dark-background1"><i class="fi fi-rr-eye text-base md:text-xl mt-2"></i><p>Demo</p></a>`
//             : ""
//         }
//       </div>
//     `;

//     projectContainer.appendChild(projectCard);
//   });
// });

// function getToolIcon(tool) {
//   const icons = {
//     html5: `<svg data-tooltip-target="html5" class="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white"
//               aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
//               viewBox="0 0 24 24">
//               <path
//                 d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
//             </svg>
//             <div id="html5" role="tooltip"
//               class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-300 bg-dark-background1 rounded-lg shadow-sm opacity-0 tooltip dark:text-light-primary dark:bg-light-background1">
//               HTML 5
//               <div class="tooltip-arrow" data-popper-arrow></div>
//             </div>`,
//     css: `<svg class="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z"/></svg>`,
//     bootstrap: `<i class="fa-brands fa-bootstrap text-light-primary dark:text-dark-primary"></i>`,
//     javascript: `<i class="fi fi-brands-js"></i>`,
//     figma: `<i class="fa-brands fa-figma"></i>`,
//     tailwind: `<svg class="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"/></svg>`,
//     react: `<i class="fi fi-tr-react pt-2"></i>`,
//     shacdn: `<svg class="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 1 0-1.476-1.476Zm-7.418-2.36c.29-.29.76-.29 1.05 0s.29.76 0 1.05L10.474 15.85c-.29.29-.76.29-1.05 0a.742.742 0 0 1 0-1.05l5.377-5.376Zm7.442-1.548l-6.645-6.64a3.442 3.442 0 0 0-4.872 0L3.29 8.104a3.442 3.442 0 0 0 0 4.872l.827.828a.742.742 0 0 0 1.05 0c.29-.29.29-.76 0-1.05l-.828-.828a1.952 1.952 0 0 1 0-2.773l6.645-6.646a1.958 1.958 0 0 1 2.774 0l6.645 6.645a1.958 1.958 0 0 1 0 2.774l-1.173 1.173a.742.742 0 0 0 0 1.05c.29.29.76.29 1.05 0l1.173-1.173a3.442 3.442 0 0 0 0-4.872Z"/></svg>`,
//     axios: `<i class="fa-brands fa-aws"></i>`,
//     npm: `<i class="fa-brands fa-npm"></i>`,
//   };

//   return icons[tool] || "";
// }
