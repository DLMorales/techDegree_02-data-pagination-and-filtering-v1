/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/**
 * Contains the immutable number of items per page (and therefore is capitalized).
 * @constant
 * @type {number}
 */
const itemsPerPage = 9;


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


/**
 * <Description here>
 * @function
 * @name showPage
 * @param {Object[]} list - represents student data that will be passed
 * @param {number} page - represents the page number that will be passed
 */
function showPage(list, page) {
	let endIndex = page * itemsPerPage;
	let startIndex = endIndex - itemsPerPage;

	/**  @Constant */
	const liStrPart1 = '<li class="student-item cf"><div class="student-details">';
	/**  @Constant */
	const liStrPart3 = '</div><div class="joined-details">';
	/**  @Constant */
	const liStrPart5 = '</div></li>';

	// If there is *NO* element with the given classname, the the below function
		// returns 'undefined'. TODO: need to check for this.
	let studentList = document.getElementsByClassName("student-list")[0];
	studentList.innerHTML = "";

	let htmlString = "";

	// Why not set index to startIndex and exit condition to endIndex?
		// What's the trap here?

//GO OVER THE LIST VARIABLE
	for (let index = 0; index < list.length; index++) {
		if (startIndex <= index && index < endIndex) {
			let imgSrc = list[index].picture.thumbnail;
			let name = list[index].name.first + " " + list[index].name.last;
			let email = list[index].email;
			let joinedDate = list[index].registered.date;
			
			let liStrPart2 = `<img class="avatar" src="${imgSrc}" atl="Profile Picture">` +
													`<h3>${name}</h3>` +
													`<span class="email">${email}</span>`;
			let liStrPart4 = `<span class="date">Joined ${joinedDate}</span>`;

			htmlString += liStrPart1 + liStrPart2 + liStrPart3 + liStrPart4 + liStrPart5;
		}
	}
	studentList.innerHTML = htmlString;
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
