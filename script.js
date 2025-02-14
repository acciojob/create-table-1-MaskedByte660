function insert_Row() {
    //Write your code here
	 //access table first
	let table = document.getElementById("sampleTable");
    //first create new row using insertRow
	let newRow = table.insertRow(0);
	//create new cell using insertCell
	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);

	cell1.textContent = "New Cell1"
	cell2.textContent = "New Cell2"
	//give innerText New Cell1

}
