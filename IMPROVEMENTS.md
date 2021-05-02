## IMPROVEMENT


* **NEEDS IMPROVEMENT**:  SEARCH ALGORITHM AND SEARCH ICON


- **REASON**: 
Search algorithm should be improved to make live search rather than the static it is. 


- **OPINION**
with a change in date or a character in the search bar that should be able activate the search algorithm automatically and display the result corresponding to the dates without clicking on the search icon manually.


+ **HOW IT CAN BE IMPROVED**:
1. Search icon can be removed by deleting the img tag corresponding to it since its service is not needed. 

2. Search bar can be referenced in javascript to detect character changes or keystrokes automatically. 

And in every change in character, javascript character change function can be made to call the search function and pass the detected characters in the search bar as argument to the function. 

And perform search based on the argument and display appropriate result corresponding to the search in the result section.