'use strict'
// 1.

for (let i = 5; i < 100; i++) {
    console.log(i);
  }
  
  // 2.
  let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
  
  for (let x of array1) {
    if (x > 0 && x < 10) console.log(x);
  }

  for (let t = 0; t < array1.length; t++) {
        const element = array1[t];
        if (element > 0 && element < 10) {
            console.log(element);
        }
    }
    
  
  // 3.
  let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let k = 0; k < array2.length; k++) {
    const element = array2[k];
    if (k === 5) {
    console.log('არის');
break;
    }
}
  
  for (let item of array2) {
    if (item === 5) {
      break;
    }
  }
  console.log("არის");
  
  // 4.
  
  let array3 = [1, 2, 3, 4, 5];
  let sums = 0;
  for (let i = 0; i < array3.length; i++) {
    sums += array3[i];
  }
  console.log(sums);



  // 5.
  
  let array4 = [1, 2, 3, 4, 5];
  let sus = 0;
  for (let i = 0; i < array4.length; i++) {
    sus += array4[i];
  }
  let avg = sus / array4.length;
  console.log(avg);


  
  // 6.
  let array5 = [1, 2, 3, 7, 6, 9];
  for (let p = 0; p < array5.length; p++) {
    const ele = array5[p];
    // console.log(ele); 
    if (ele === 7) {
        continue;
    } 
    console.log(ele);

} 

  for (let items of array5) {
    if (items === 7) {
      continue;
    }
    console.log(items);
  }
  
  // 7.
  
  let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active",
  };
  
  console.log(user.studentstatus);
  
  //   8.
  
  let user2 = {
    name: "anna",
    age: 20,
    studentstatus: "active",
  };
  
  if (user2.age < 18 && user2.studentstatus == "active") {
    console.log("hello user");
  } else if (user2.name == "levani") {
    console.log("hello levani");
  } else if (user2.studentstatus == "active" && user2.age < 25) {
    console.log("Hello anna");
  } else {
    console.log("error");
  }
  
  let user3 = {
    name: "anna",
    age: 20,
    studentstatus: "active",
  };
  
  let result =
    user3.age < 18 && user3.studentstatus == "active"
      ? "hello user"
      : user3.name == "levani"
      ? "hello levani"
      : user3.studentstatus == "active" && user3.age < 25
      ? "Hello anna"
      : "error";
  console.log(result);
  
  // 9.
  let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
  
  for (let num of array6) {
    if (num % 2 === 0) console.log(num);
  }
  
  for (let m = 0; m < array6.length; m++) {
    const element = array6[m];
    // console.log(element);
    if (element % 2 === 0)
    console.log(element);
    
  }

//   10.

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (let h = 0; h < users.length; h++) {
    const element = users[h];
    // console.log(element);
    if (element.status === true) {
        console.log(element.username);
    }    
}

for (let m of users ) {
    if (m.status === true)
    console.log(m.username);
}

11.
array7 = [32, 14, 10, 'hello', null, '40', 50];

for (let v = 0; v < array7.length; v++) {
    const element = array7[v];
   if (element % 5 === 0 && element !=null) {
    console.log(element);
   }
}

for (let f of array7 ) {
    if (f % 5 ===0 && f!= null )
    console.log(f);
}

// 12. 

array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];


for (let index = 0; index < array8.length; index++) {
  const element = array8[index];

  for (let item = 0; item < element.length; item++) {
    const result = element[item];
    if (result > 0) {
        console.log(result);
    }
  }
}

for (let m of array8) {
    for (let b of m) {
        // console.log(b);
        if (b > 0) {
            console.log(b);
        }
    }
}



