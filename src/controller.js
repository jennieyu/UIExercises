angular.module('myApp',['ui.bootstrap'])
	.controller('ctrl',function($scope){
		
     	$scope.item =[{name:"name1",value:"value1"},
     				  {name:"name2",value:"value2"},
     				  {name:"name3",value:"value3"},
     				  {name:"name4",value:"value4"},
     				  {name:"name5",value:"value5"},
     	]

     	$scope.getInfo = function(){
     		console.log("selected name is"+$scope.selectOptions.name)
     		console.log("selected value is"+$scope.selectOptions.value)

     	}
     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     
     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     /*Answer: I am uing angularJS, It hard for me to test when combin using jquery and angularjs
       but i could provide you about those answer:
       1. $(.link)
       2. $("a")
       3. $("#id:first-child")
       4. $(".buzz:first-child")
       5. $(".buzz>.link")
    */

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
      $scope.list = ["pen","water","mouse","computer","radio"]
  
      $scope.twoLink = ["Check","Uncheck"]
      $scope.checkboxes = ["checkbox1","checkbox2","checkbox3"]
     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     
      $scope.checkOrUncheck = function(options){
      		console.log(options)
      		if(options==$scope.twoLink[0]){
      			$scope.checkOrNot = true
      		}else{
      			$scope.checkOrNot = false
      		}
      }
	})