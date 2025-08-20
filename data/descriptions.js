const descriptions = {
	profile_desc: `<p>I enjoy exploring new ideas, whether through building small projects like this website or reading about random topics in neurology and psychology. In my free time, I also go to the gym and play computer games, both of which inspire my interest in technology, discipline, and problem-solving.<\p>

	<p>While designing this site, I focused on making it visually appealing and mobile-friendly, and I enjoyed the creative process.<\p>`,
	
	dat_alg: 'Teaches knowledge about efficient data organization and problem-solving strategies in computer science. Students learn basic data structures (lists, trees, graphs, etc.) and algorithm design as well as algorithm analysis.',

	stat_disc: "Mathematical fundamentals (e.g., logic, set theory, graph theory, probability theory) form an important part of the program. This knowledge underpins the understanding of algorithms and computer science theory.",

	hci: "Fundamentals of usability and interface development. Students learn user-centered UI/UX methods (usability engineering, prototyping, usability testing). They understand how to design intuitive user interfaces and evaluate them using heuristic evaluation and thinking-aloud tests.",

	bet_sys: "Fundamental concepts of operating systems, such as process and thread management, memory management, parallelism, and synchronization, are taught in a practical manner. Students gain experience in system-oriented programming and understand how operating systems schedule tasks and manage resources.",

	dek_prog: "In addition to object-oriented programming, functional and logical programming approaches are also covered. This trains students to understand different software paradigms and enables them to quickly learn new programming languages and concepts.",


	llp: `We dived deep into system-level programming concepts, refining and understanding of low-level operations in C/C++. Topics include:
		-Memory behavior, dynamic allocation, and fault-aware memory management
                  -Process and thread control using POSIX APIs: fork, exec, waitpid, pipes, threads
                  -Synchronization mechanisms: semaphores, mutexes, condition variables, spinlocks
                  -Memory-mapped I/O and shared memory with POSIX

                  Learned:
                  - A solid grasp of system-level OS interfaces in C and C++
                  - Mastery over synchronization constructs and inter-process/thread communication
                  - Preparedness for advanced OS studies and real-world systems programming`,

		dat_mng: "Design and management of databases and data storage systems. Students learn about relational databases (ER model, SQL, relational algebra, and normalization) and modern data management. This includes NoSQL databases, distributed file systems, data stream processing, and techniques for integrating and processing large amounts of data.",

		dat_mac: "Fundamentals of data preparation, exploration, statistical analysis, and modeling. Includes data mining, classification, clustering, model evaluation, and data visualization.",

    cg: "Introduction to 2D and 3D graphics pipelines, transformations, lighting models, and rendering techniques. Includes geometry processing, shader programming, image synthesis, and fundamentals of real-time and ray tracing techniques.",

    cv: "Fundamentals of image processing and pattern recognition. Topics include filtering, edge detection, feature extraction, image segmentation, and 3D reconstruction from image data."
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

