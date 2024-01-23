const links = [
    {
        name: "Account",
        url: "/Kanbas/Account/Profile/screen.html",
    },
    {
        name: "Dashboard",
        url: "/Kanbas/Dashboard/screen.html",
    },
    {
        name: "Courses",
        url: "/Kanbas/Courses/Home/screen.html",
    },
    {
        name: "Calendar",
        url: "/Kanbas/Calendar/screen.html",
    },
    {
        name: "Inbox",
        url: "/Kanbas/Inbox/screen.html",
    },
    {
        name: "History",
        url: "#",
    },
    {
        name: "Studio",
        url: "#",
    }, {
        name: "Commons",
        url: "#",
    },
    {
        name: "Help",
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