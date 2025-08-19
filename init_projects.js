import { projects } from './data/projects_data.js';

export function print_projects() {
	let projects_html = ''
	
	projects.forEach( element => {
	projects_html += ` <article class="project-card">
                  <img src="${element.img}" alt="${element.alt}">
                  <div class="project-body">
                    <div class="fw-700">${element.name}</div>
                    <div class="tag-list">${getTags(element)}</div>
                    <div>${element.description}</div>
                    <div class="btn-group" style="grid-template-columns:repeat(2,1fr);padding:8px">
                      <a class="btn-base btn-outline" href="${element.git_link}" target="_blank" aria-label="GitHub öffnen">GitHub</a>
                      <a class="btn-base btn-ghost" href="#" aria-label="Live-Demo">Demo</a>
                    </div>
                  </div>
                </article>`
})

	return projects_html;
}

export function getTags(project) {
  let tags = '';
  project.tags.forEach(tag => {
    tags += `<span class="tag-item">${tag}</span>`;
  });

	return tags;
}