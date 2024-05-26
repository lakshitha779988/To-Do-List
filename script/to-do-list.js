const toDoArry=[];
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
}


function display(){
    let toDoHtlml ='';
    for(let i =0; i<toDoArry.length; i++){
        const toDo = toDoArry[i];
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
                    toDoArry.splice(${i}, 1);
                    display();
        
                     " class="btn" id="btn2">Delete</button>
</div>`;
        toDoHtlml +=html;
    }
    console.log(toDoHtlml);
    document.querySelector(".content").innerHTML = toDoHtlml;
}
