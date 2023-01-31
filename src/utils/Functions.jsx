export const generatePriceFromUpc= (input)=> {

    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0);
    }
    let len = output.replace(/\s+/g, '').length
    let char = len>9?9:len
    let divider= Array(len).join(char)
    let mult = input[0]==2?10:input[0]==3?100:1
    let num = output/divider*mult

    let dec = num.toString().slice(-2)
    return Math.trunc(num)+ dec/100

}

export const getLocalStorageDataByKey = function (key) {

	// Get the existing data
	var existing = localStorage.getItem(key);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? JSON.parse(existing) : false;

	return existing

};

/**
 * Add an item to a localStorage() collection of objects
 * @param {String} collectionName  The localStorage() collection
 * @param {obj} obj The collection new object
 */
export const appendLocalStorageCollection = function (collectionName, obj) {

	// Get the existing data
	var existing = localStorage.getItem(collectionName);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? JSON.parse(existing) : [];

	// Add new data to localStorage Collection
	var updated = [...existing, obj];

	// Save back to localStorage
	localStorage.setItem(collectionName, JSON.stringify(updated));

};

/**
 * Add an item to a localStorage() array
 * @param {String} name  The localStorage() key
 * @param {String} value The localStorage() value
 */
export const addToLocalStorageArray = function (name, value) {

	// Get the existing data
	var existing = localStorage.getItem(name);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	// Add new data to localStorage Array
	existing.push(value);

	// Save back to localStorage
	localStorage.setItem(name, existing.toString());

};

/**
 * Add an item to a local storage string
 * @param  {String} name      The localStorage() key
 * @param  {String} value     The localStorage() value
 * @param  {String} delimiter The delimiter to use to separate items
 */
export const addToLocalStorageString = function (name, value, delimiter) {

	// Get the existing data
	var existing = localStorage.getItem(name);

	// If no existing data, use the value by itself
	// Otherwise, add the new value to it
	var data = existing ? existing + delimiter + value : value;

	// Save back to localStorage
	localStorage.setItem(name, data);

};

// Example
//addToLocalStorageString('myFavoriteSandwich', 'tuna', ' and ');

/**
 * Add an item to a localStorage() object
 * @param {String} name  The localStorage() key
 * @param {String} key   The localStorage() value object key
 * @param {String} value The localStorage() value object value
 */
export const addToLocalStorageObject = function (name, key, value) {

	// Get the existing data
	var existing = localStorage.getItem(name);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? JSON.parse(existing) : {};

	// Add new data to localStorage Array
	existing[key] = value;

	// Save back to localStorage
	localStorage.setItem(name, JSON.stringify(existing));

};