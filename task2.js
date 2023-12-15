console.log("Qn:1");
let numberArr = [
    [10, 20, 60],
    [8, 10, 52],
    [15, 5, 24],
    [26, 28, 43],
    [12, 16, 51]
  ];
  let xx=numberArr.flat();
  let yy=xx.reduce((u,v)=>{
    return u+v;
  });
  console.log(yy);
/*........................................................................*/
  console.log("Qn:2");
  let person = [
    {
    name: "A",
    age:25,
    detail:{
    married: true,
    exp:2}},
    {
    name: "B",
    age:25,
    detail:{
    married: true,
    exp:5}},
    
    {
    name: "C",
    age:25,
    detail:{
    married: true,
    exp:2}}
    ];

    let x=person.map((e)=>{
        return {...e,detail:{...e.detail,exp:8}}
    });
    console.log(x);
/*........................................................................*/
    console.log("Q:3");
    let person2 = [
      {
      name: "A",
      age:25,
      detail:{
      married: true,
      exp:2}},
      {
      name: "B",
      age:28,
      detail:{
      married: false,
      exp:5}},
      
      {
      name: "C",
      age:29,
      detail:{
      married: true,
      exp:2}}
      ];
      let y=person2.filter((e)=>{
        return e.age>25;
       
      });
      console.log(y.length);

      /*........................................................................*/
      //without argument with return
      console.log("Qn:4 (Write palindrome logic using function.)");
      function palindrome(){
        let num=123;
        let rem,rev=0,temp=num;
        while(num!=0){
          rem=num%10;
          rev=(rev*10)+rem;
          num=num/10;
        }
        if(temp==rev){
          return temp+" This number is palindrome";
        }
        else{
          return temp+" This number is not a palindrome";
        }
      }
console.log(palindrome());
      /*........................................................................*/
      //with argument,without return
      console.log("Qn :5 (Write Reverse number logic using function)");
      
      function reverse(num){
        let rev=0;
        while(num>0){
          rem=num%10;
          rev=rev*10+rem;
          num=parseInt(num/10);

        }
         console.log(rev);
      }
      reverse(123)
      /*........................................................................*/
      //with argument,with return
      console.log("Qn:6 (Write armstrong number logic using function)");
      function arms(num){
        let t=num,rem,arm=0;
        while(t>0){
          rem=t%10;
          arm=arm+rem**3;
          t=parseInt((t-rem)/10);
        }
        if(num==arm){
          return num+" this number is armstrong";
        }
        else{
          return num+" this numbr is not armstrong";
        }
      }
      console.log(arms(153));
      /*........................................................................*/
      console.log("Qn:7 (How many even numbers are there in the array.)");
      let arr=[87,23,446,99,224,22] ;
      function even(arr){
        return arr.filter((e)=>{
          return e%2==0;
        })
      }
      console.log(even(arr).length);
      /*........................................................................*/
      console.log("Qn:8 (Find the total price.)");
      let data = [["Mango","5kg",100],["Apple","2kg",150],["Grapes","5kg",80]];
      let z=data.map((e)=>{
        return e[2];
      })
      let zz=z.reduce((u,v)=>{
        return u+v;
      })
      console.log("Total : "+zz);
      /*........................................................................*/
      console.log("Qn :9 (local storage) ")
      localStorage.setItem("fruits","[{name: 'Apple',weight: '1Kg',price:280},{name: 'Orange',weight: '1Kg',price:180},{name:'Pomegranate',weight: '1Kg',price:250}]");
      /*........................................................................*/
      //Differnce between map and foreach.?
      /*The forEach() method does not returns a new array based on the given array. The map() method returns an entirely new array. The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function*/
      /*........................................................................*/

      //Difference between local and session storage.?
      /*the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.*/
    /*...........................................................................*/
      console.log("Qn:12 (Write one array of object example for some method )");
      let aob=[{},{a:2}];
      let ab=aob.some((e)=>{
        return e.a==2;
      });
      console.log(ab);
    /*...........................................................................*/

    console.log("Qn:13 (Write one array of object example for every method )");
    let aob1=[{b:2},{b:3}];
    let ab1=aob1.every((e)=>{
      return e.b==3;
    })
    console.log(ab1);

    /*...........................................................................*/
    console.log("Qn :14 (Find even numbers)");
    let narr=[22,66,25,87,45,28,99];
    let res=narr.filter((e)=>{
      return e%2==0;
    })
    console.log(res);
    /*...........................................................................*/
    console.log("Qn:15 (sum of even numbers) ");
    let arr1=[2,5,3,9,20,45,36,89];
    let ans=arr1.filter((e)=>{
      return e%2==0;
    });
    let ans1=ans.reduce((u,v)=>{
      return u+v;
    })
    console.log(ans1);

    document.write("View this Answers in console..!");