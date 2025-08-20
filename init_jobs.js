import { jobs } from './data/jobs_data.js';

export function print_jobs() {
	let jobs_html = ''
	
	jobs.forEach( element => {
	jobs_html += `<details class="details-item details-js" ${element.status_bar}>
            <summary>${element.name}<span class="details-period">${element.time}</span></summary>
            <ul class="list-clean">
						${getPoints(element)}
            </ul>
          </details>`
})

	return jobs_html;
}

export function getPoints(job) {
	let job_points_html = '';

	job.points.forEach(point => {
		job_points_html += `<li>${point}</li>`;
	});

	return job_points_html;
}