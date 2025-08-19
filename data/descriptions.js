const descriptions = {
	profile_desc: `I enjoy exploring new ideas, whether through building small projects like this website or reading about random topics in neurology and psychology. In my free time, I also go to the gym (got to stay fit and prevent that backpain - I know you understand me here fellow engineer) and play computer games, both of which inspire my interest in technology, discipline, and problem-solving. While designing this site, I focused on making it visually appealing and mobile-friendly, and I enjoyed the creative process.`,
	
	dat_alg: "Vermittelt Kenntnisse über effiziente Datenorganisation und Problemlösungsstrategien in der Informatik. Studierende lernen grundlegende Datenstrukturen (Listen, Bäume, Graphen etc.) und Algorithmendesign sowie die Analyse von Algorithmen.",

	stat_disc: "Mathematische Grundlagen (z. B. Logik, Mengenlehre, Graphentheorie, Wahrscheinlichkeitstheorie) bilden einen wichtigen Teil der Ausbildung. Diese Kenntnisse untermauern das Verständnis für Algorithmen und Informatiktheorie.",

	hci: "Grundlagen der Usability und Interface-Entwicklung. Studierende lernen benutzerzentrierte UI/UX-Methoden (Usability Engineering, Prototyping, Usability Testing) kennen. Sie verstehen, wie man intuitive Benutzeroberflächen entwirft, evaluieren diese mittels heuristischer Evaluation und Thinking-Aloud-Tests.",

	bet_sys: "Grundlegende Konzepte von Betriebssystemen, wie Prozess- und Thread-Management, Speicherverwaltung, Parallelität und Synchronisation, werden praxisnah vermittelt. Die Studierenden sammeln Erfahrung in systemnaher Programmierung und verstehen, wie Betriebssysteme Aufgaben planen und Ressourcen verwalten.",

	dek_prog: "Ergänzend zur objektorientierten Programmierung wurden funktionale und logische Programmieransätze behandelt. Dies schult das Verständnis verschiedener Softwareparadigmen und befähigt, neue Programmiersprachen und Konzepte rasch zu erlernen.",

	llp: `We dived deep into system-level programming concepts, refining and understanding of low-level operations in C/C++. Topics include:
		-Memory behavior, dynamic allocation, and fault-aware memory management
                  -Process and thread control using POSIX APIs: fork, exec, waitpid, pipes, threads
                  -Synchronization mechanisms: semaphores, mutexes, condition variables, spinlocks
                  -Memory-mapped I/O and shared memory with POSIX

                  Learned:
                  - A solid grasp of system-level OS interfaces in C and C++
                  - Mastery over synchronization constructs and inter-process/thread communication
                  - Preparedness for advanced OS studies and real-world systems programming`,

	dat_mng: "Entwurf und Verwaltung von Datenbanken sowie Datenhaltungssystemen. Studierende lernen relationale Datenbanken (ER-Modell, SQL, Relationale Algebra und Normalisierung) und modernes Data Management kennen. Dazu gehören NoSQL-Datenbanken, verteilte Dateisysteme, Datenstromverarbeitung und Techniken zur Integration und Verarbeitung großer Datenmengen",

	dat_mac: "Grundlagen der Datenaufbereitung, Exploration, statistischen Analyse und Modellbildung. Beinhaltet Data Mining, Klassifikation, Clustering, Modellbewertung und Datenvisualisierung.",

	cg: "Einführung in 2D- und 3D-Grafikpipelines, Transformationen, Beleuchtungsmodelle und Renderingverfahren. Beinhaltet Geometrieverarbeitung, Shader-Programmierung, Bildsynthese und Grundlagen der Echtzeit- sowie Raytracing-Techniken.",

	cv: "Grundlagen der Bildverarbeitung und Mustererkennung. Themen umfassen Filterung, Kantenerkennung, Merkmalsextraktion, Bildsegmentierung sowie 3D-Rekonstruktion aus Bilddaten."
}

document.getElementById('header-description-js').innerHTML = descriptions.profile_desc;
document.getElementById('dat-alg-desc-js').title = descriptions.dat_alg;
document.getElementById('stat-disc-desc-js').title = descriptions.stat_disc;
document.getElementById('hci-desc-js').title = descriptions.hci;
document.getElementById('bet-desc-js').title = descriptions.bet_sys;
document.getElementById('dek-desc-js').title = descriptions.dek_prog;
document.getElementById('llp-desc-js').title = descriptions.llp;
document.getElementById('dat-desc-js').title = descriptions.dat_mng;
document.getElementById('data-mach-desc-js').title = descriptions.dat_mac;
document.getElementById('cg-desc-js').title = descriptions.cg;
document.getElementById('cv-desc-js').title = descriptions.cv;

