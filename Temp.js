//defined  array of Temperature
var array = [23, 10, 45, 3];

//function to insert new temperature
function insert(temp)
{
    array.push(temp);
   
}
//function to get maximum temperature 
function get_max() {
    var tmp = array[0];
    for (var i = 0; i < array.length; i++) {

        if (tmp < array[i]) {
            tmp = array[i];

        } else {
            tmp = tmp;
        }
    }
    //Printing whole temperature array
    console.log("Temp data:", array);
    console.log("Maximum value is:", tmp);

}
//function to get minimum temperature 

function get_min() {
    var tmp = array[0];
    for (var i = 0; i < array.length; i++) {

        if (tmp > array[i]) {
            tmp = array[i];

        } else {
            tmp = tmp;
        }
    }
    console.log("Minimum value is:", tmp);

}
//function to get mean of temperatures recorded 

function get_mean() {
    var tmp = 0;
    var mean;
    var len = array.length;
    for (let i = 0; i < len; i++) {
        tmp = tmp + array[i]
        mean = tmp / len;

    }
    console.log("Mean is:", mean);
}

//function to get mode of temperatures recorded 

function get_mode() {
    var count = 0;
    var mode = 0;
    var maxCount = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;

            }
            if (count > maxCount) {
                maxCount = count;
                mode = array[i];
            }

        }
    }
    console.log("Mode is:", mode);
    
}
//function calling 
insert(10);
insert(10);
insert(10);
insert(40);
get_max();
get_min();
get_mean();
get_mode();
