const links = [
    {
        name: "Home",
        url: "/Kanbas/Courses/Home/screen.html",
    },
    {
        name: "Modules",
        url: "/Kanbas/Courses/Modules/screen.html",
    },
    {
        name: "Piazza",
        url: "/Kanbas/Courses/Piazza/index.html",
    },
    {
        name: "Zoom Meetings",
        url: "#",
    },
    {
        name: "Assignments",
        url: "/Kanbas/Courses/Assignments/screen.html",
    },
    {
        name: "Quizzes",
        url: "#",
    },
    {
        name: "Grades",
        url: "/Kanbas/Courses/Grades/screen.html",
    },
    {
        name: "People",
        url: "/Kanbas/Courses/People/screen.html",
    },
    {
        name: "Panaopto Video",
        url: "#",
    },
    {
        name: "Discussions",
        url: "#",
    },
    {
        name: "Announcements",
        url: "#",
    },
    {
        name: "Pages",
        url: "#",
    },
    {
        name: "Files",
        url: "/Kanbas/Courses/Files/screen.html",
    },
    {
        name: "Rubrics",
        url: "#",
    },
    {
        name: "Outcomes",
        url: "#",
    },
    {
        name: "Collaborations",
        url: "#",
    },
    {
        name: "Syllabus",
        url: "#",
    },
    {
        name: "Settings",
        url: "#",
    },
];

document.write(`
    <ul>
      ${links
        .map((link) => {
            return `<li><a href="${link.url}">${link.name}</a></li>`;
        })
        .join("")}
  </ul>     
    `);
