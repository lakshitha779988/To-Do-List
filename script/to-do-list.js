
let toDoArry=[];

let itemNo=0;




function add(){
    const toDoNameElement =document.getElementById('input');
    const toDoDateElement =document.querySelector(".due-date");
    const name=toDoNameElement.value;
    const dueDate =toDoDateElement.value;
    toDoArry.push({
        name: name,
        dueDate: dueDate
    });
    console.log(toDoArry);
    toDoNameElement.value="";
    itemNo++;
    // localStorage.setItem('toDoArry',JSON.stringify(toDoArry));
}
// toDoArry=JSON.parse(localStorage.getItem('toDoArry'));

// display();


function display(){
    
    let toDoHtlml ='';
    toDoArry.forEach(function(value,index){
        const toDo = value;
        const name=toDo.name;
        const dueDate=toDo.dueDate;
        const html = 
        `
            <div class="content-div">
            <div class="name">
                <p>
                    ${name}
                </p>
            </div>

            <div class="date">
                <p>
                    ${dueDate}
                </p>
            </div>

            <button onclick=
                     "
                    toDoArry.splice(${index}, 1);
                    // localStorage.setItem('toDoArry',JSON.stringify(toDoArry));
                    display();
        
                     " class="btn" id="btn2">Delete</button>
</div>`;
        toDoHtlml +=html;

    })
 
    console.log(toDoHtlml);
    document.querySelector(".content").innerHTML = toDoHtlml;
}
