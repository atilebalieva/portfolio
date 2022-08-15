function firstFunction(){
   throw new Error('Stack Trace Error');4 stack
 }
 
 function secondFunction(){
   firstFunction(); 3 stack 
 }
 
 function thirdFunction(){
   secondFunction(); 2 stack 
 }
 
 thirdFunction(); 1 v stack