document.addEventListener("DOMContentLoaded", () => {
	const nuvarandeSida = window.location.pathname.split("/").pop() || "index.html";
	//#region nav
	const navbtn = document.querySelectorAll("header nav a");
	navbtn.forEach((lank) => {
		if (lank.getAttribute("href") === nuvarandeSida) {
			lank.style.backgroundColor = "var(--button-hover)";
			lank.style.border = "1px solid var(--secondary-color)";
		}
	});
	//#endregion
	//#region rooms.html
	if (nuvarandeSida === "rooms.html") {
		const rumslankar = document.querySelectorAll(".room a");
		rumslankar.forEach((lank) => {
			lank.addEventListener("click", (event) => {
				event.preventDefault();
				const rumsId = lank.id;
				window.location.href = `book.html?rum=${rumsId}`;
			});
		});
	}
	//#endregion
	//#region book.html
	if (nuvarandeSida === "book.html") {
		const form = document.querySelector("form");
		const rumsValjare = document.getElementById("rum");

		const urlParametrar = new URLSearchParams(window.location.search);
		const valtRum = urlParametrar.get("rum");
		if (valtRum) {
			rumsValjare.value = valtRum;
		}

		form.addEventListener("submit", (event) => {
			event.preventDefault();

			const namn = document.getElementById("namn").value;

			alert(`Tack ${namn}! Din bokningsförfrågan har skickats.`);
			form.reset();
		});
		const anledning = document.querySelector("#anledning");
		const counter = document.querySelector(".counter");

		anledning.addEventListener("input", () => {
			const length = anledning.value.length;
			counter.textContent = `${length} / 200`;
			if (length >= 200) {
				counter.style.color = "red";
				counter.textContent = `${length} / 200. Max antal tecken uppnått!`;
			} else if (length >= 150) {
				counter.style.color = "#d6610d";
				counter.textContent = `${length} / 200. Nästan max antal tecken!`;
			} else if (length < 150) counter.style.color = "green";
		});
	}
	//#endregion
	//#region faq
	const faq = document.querySelectorAll("main section:nth-of-type(2) details");

	faq.forEach((targetDetails) => {
		targetDetails.addEventListener("toggle", (event) => {
			if (targetDetails.open) {
				faq.forEach((detail) => {
					if (detail !== targetDetails) {
						detail.removeAttribute("open");
					}
				});
			}
		});
	});
	//#endregion
	//#region bookings
	const bookings = [
		{
			room: 103,
			date: "2026-08-25",
			startTime: "12:30",
			endTime: "13:30",
			name: "David Thörnqvist",
			status: "Bokning genomförd",
		},
		{
			room: 103,
			date: "2026-08-25",
			startTime: "13:50",
			endTime: "14:50",
			name: "Hugo Nyberg",
			status: "Bokning under gång",
		},
		{
			room: 202,
			date: "2026-08-26",
			startTime: "12:30",
			endTime: "13:30",
			name: "Vilhelm Gustafson",
			status: "Bokning väntande",
		},
		{
			room: 202,
			date: "2026-08-25",
			startTime: "12:30",
			endTime: "13:30",
			name: "David Löfgren Forssén",
			status: "Bokning genomförd",
		},
		{
			room: 104,
			date: "2026-08-25",
			startTime: "10:30",
			endTime: "12:30",
			name: "Vilhelm Gustafson",
			status: "Bokning under genomförd",
		},
	];

	const bookingsTable = document.getElementById("bookingsTableBody");

	if (nuvarandeSida === "bookings.html") {
		bookings.forEach((booking) => {
			const row = bookingsTable.insertRow();
			const values = [
				`Grupprum ${booking.room}`,
				booking.date,
				booking.startTime,
				booking.endTime,
				booking.name,
				booking.status,
			];

			values.forEach((value) => {
				const cell = row.insertCell();
				cell.textContent = value;
			});
		});
	}
	//#endregion
});
