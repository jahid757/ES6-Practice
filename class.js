class students{
    constructor(sId,sName){
        this.id = sId
        this.name = sName
        this.school = "Bashtoil Ideal School"
    }
}

const boy = new students(101,"Jahid");

const girl = new students(105,"Hasan");


console.log(boy,girl);



/*
const sName = ['jahid','hasan','Apple']

for (let i = 0; i < sName.length; i++) {
    const student = sName[i];
    const sId = Math.random()*10000;
    const sIdNumber = Math.round(sId)
    class Students{
        constructor(id,sNam){
            this.id = id;
            this.nam = sNam
        }
    }
    const studentList = new Students(sIdNumber,student);
    console.log(studentList);
    
}

*/